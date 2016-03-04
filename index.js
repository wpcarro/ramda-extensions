const R = require('ramda');

const {
  always, add, addIndex, anyPass, ap, append,
  compose, construct, converge, curry,
  divide,
  either, equals,
  filter, forEach, flatten, flip,
  has, head,
  identity, ifElse, isNil, is, isEmpty, intersperse,
  join,
  length, lens, lensIndex, lensPath,
  map, multiply,
  not,
  of, or, omit, over,
  path, pipe, prop,
  slice,
  toUpper, trim,
  range, replace, reduce, reduced,
  split, sum,
  times, type, toString,
  view,
  when
} = R;
const _ = R.__;

// see addIndex in Ramda.js docs
const reduceX = addIndex(reduce);
const mapX = addIndex(map);

// useful as clog(identity)
function clog(fn) {
  return function(x) {
    console.log(fn(x));
    return x;
  };
}


function isNumber(x) {
  return is(Number, x);
}

function isString(x) {
  return is(String, x);
}

function isObject(x) {
  return is(Object, x);
}

function isArray(x) {
  return is(Array, x);
}

function isFunction(x) {
  return is(Function, x);
}

// returns a new array with the predicate values removed
// semantically convenient
function filterOut(predicate) {
  return function(r) {
    return filter(pipe(predicate, not), r);
  };
}

// filters out values and leaves null in their place
// the length of the array remains the same
function filterOutGap(predicate) {
  return function(xs) {
    return map(ifElse(predicate,
      always(null),
      identity)
    )(xs);
  };
}

// see filterOutGap
function filterGap(predicate) {
  return function(xs) {
    return filterOutGap(pipe(predicate, not));
  };
}

function joinNil(sep) {
  const reducer = (a, b, i) => {
    return ifElse(isNil,
      pipe(always(null), add(a)),
      add(a)
    )(b);
  };
  
  return function(r) {
    return reduceX(reducer, '')(r);
  };
}

// converts an array to an object where the indices
// are the keys. This may already exist in Ramda
function rToO(r) {
  function buildO(a, b, i) {
    a[i] = b;
    return a;
  }   

  return reduceX(buildO, {})(r);
}

// useful for error-handling
// example:
//   tryCatch(
//     split(''), splitNum('')
//   )(13) // => [1, 3]
// split('')(13) will error-out; splitNum('') will be called instead
function tryCatch(fn0, fn1) {
  return function(x) {
    try {
      return fn0(x);
    }
    catch (err) {
      return fn1(x);
    }
  };
}

// see split documentation
function splitNum(seperator, x) {
  return pipe(
    String, split(separator), map(Number)
  )(x);
}

// returns the constructor function of x
function typeCtor(x) {
  const ctorHash = {
    "String": String,
    "Number": Number,
    "Object": Object,
    "Array": Array,
    "Function": Function
  };

  return ctorHash[type(x)];
}

// makes a copy of an array
function copy(r) {
  return converge(
    slice,
    [always(0), length, identity]
  )(r);
}

// takes a collection and breaks pulverizes it into atomic pieces
// example:
//   feed([10, 21, 199, {fname: 'William'}, 'a', 'b', 'schoolbus'])
//     => [1, 0, 2, 1, 1, 9, 9, {fname: 'William'}, 'a', 'b', 's', 'c', 'h', 'o', 'o', 'l', 'b', 'u', 's']
//
// const xs = [10, 21, 409];
// sum(xs);       // => 440
// sum(feed(xs)); // => 17
//
// NOTE: Objects, Arrays, and Functions are not copied
function feed(xs) {
  const mapIndexed = addIndex(map);
  
  function cookifyNumStr(x) {
    return converge(
      ((a, b) => { return {type: a, val: b}; }),
      [typeCtor, tryCatch(split(''), splitNum)]
    )(x);
  }
  
  function varPipe(xs) {
    xs = copy(xs);
    
    const queue = filter(anyPass([isObject, isArray, isFunction]), xs);
    let xsCp = filterOutGap(anyPass([isObject, isArray, isFunction]), xs);

    // fill nulls with their original values
    let cookified = map(
      ifElse(isNil,
        always(queue.shift()),
        cookifyNumStr
    ))(xsCp);
    
    function isCookie(x) {
      return has('val', x);
    }
    
    let result = map(ifElse(isCookie,
        prop('val'),
        identity)
    )(cookified);
    
    return flatten(result);
  }
  
  return varPipe(xs);
}

// semantic convenience function
// TODO: curry properly
function reduceUntil(iterator, cond, v0, xs) {
  return reduce(
    pipe(iterator, when(cond, reduced)),
    v0
  )(xs);
}

// returns an array of the phonetic alphabet, lowercase
// example:
//
//   const FULL_ALPHABET = ap([identity, toUpper], alphabet());
//     => ["a", "b", "c" ...  "x", "y", "z", "A", "B", "C" ... "X", "Y", "Z"]
// 
function alphabet() {
  return map(String.fromCharCode, range(97, 97 + 26));
}
