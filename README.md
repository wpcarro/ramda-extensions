# ramda-extensions
###Functions that extend the Ramda.js library

Head over to `/develop` to check out the source or make a contribution!

## misc
String `subset`: indicates which functions to flood the scope with
Boolean `backup`: flag to indicate whether window backups should be made when there are naming collisions with window functions and Ramda functions
`attachToWindow(subset, backup)`

## filters

### `isNumber(x)`
```
isNumber(19)         // => true
isNumber('fifteen')  // => false
```

### `isString(x)`
```
isString('yarn')      // true
isString(19)          // false
```

### `isObject(x)`
```
isObject({a: 1, b: 2, c: 3}) // true
isObject('love')             // false
```

### `isArray(x)`
```
isArray([2, 4, 6, 8])  // true
isArray('Ray Charles') // false
```

### `isFunction(x)`
```
isFunction(x => x * 2)  // true
isFunction('breathing') // false
```

### `isEven(x)`
```
isEven(8) // true
isEven(9) // false
```

### `isOdd(x)`
```
isOdd(9) // true
isOdd(8) // false
```

# filter fns
filterOut :: (a -> Boolean) -> f a -> f a
### `filterOut(predicate, xs)` (alias discard(..))

```
filterOut(isString, ['please', 'let', 'me', 'stay'])
// => []
```

```
discard(isString, ['please', 'let', 'me', 'stay'])
// => []
```

```
filterOut(isString, [1, 'a', 2, 'b', 3, 'c'])
// => [1, 2, 3]
```

```
discard(isString, [1, 'a', 2, 'b', 3, 'c'])
// => [1, 2, 3]
```

### `filterOutGap(predicate, xs)` (alias discardGap(..)) 
```
filterOutGap(isString)([1, 'a', 2, 'b', 3, 'c'])
// => [1, null, 2, null, 3, null]
```

```
discardGap(isString)([1, 'a', 2, 'b', 3, 'c'])
// => [1, null, 2, null, 3, null]
```

### `filterGap(predicate, xs)` (alias keepGap(..))
```
filterGap(isString)([1, 'a', 2, 'b', 3, 'c'])
// => [null, 2, null, 3, null]
```

```
keepGap(isString)([1, 'a', 2, 'b', 3, 'c'])
// => [null, 2, null, 3, null]
```

# useful utils


### `rToO(r)`
###### Array to Object converter
```
rToO(['william', 'patrick', 'carroll'])
// => {0: 'william', 1: 'patrick', 2: 'carroll'}
```

### `oToR(o)`
###### Object to Array converter
```
oToR({0: 'william', 1: 'patrick', 2: 'carroll'})
// => ['william', 'patrick', 'carroll']
```

### tryCatch(fn0, fn1, x)
###### exception handling
```
// input: 'hello world'
// desired output: 'helloXworld'

// this throws:
join('X')('hello world')

// this does not throw:
compose(
  join('X'),
  split(' ')
)('hello world')

// abstract that fn composition into an identifier
let strJoin = joint => compose(join(joint), split(' '));

// we will create a fn that returns either a string or an array, unpredictably
const stringOrArray = () => {
  const {floor, random} = Math;
  const str = 'hello world';
  const arr = ['hello', 'world'];
  
  return [str, arr][floor(random() * 2)];
};

tryCatch(
  join('X'),
  strJoin('X')
)(stringOrArray())
```

### randomIdx(r)
###### random index generator
Randomly generates an index that is within the bounds of the supplied array.
```
const r = ['Jim', 'Mike', 'George', 'Harry'];
let randomName = r[randomIdx(r)];
// => 'George'
```

### randomElement(r)
###### random element selector
Randomly selects an element from the supplied array.
```
const r = ['Jim', 'Mike', 'George', 'Harry'];
let randomName = randomElement(r);
// => 'Harry'
```

### `splitNum(seperator, x)`
###### number splitter
```
splitNum(11) // [1, 1]
splitNum(1992) // [1, 9, 9, 2]
```

### `typeCtor(x)`
###### constructor fetcher
```
map(
  typeCtor
)([1, 2, 'schoolbus', {a: 1, b: 2, c: 3}])
// => [Number, Number, String, Object]
```


### `copy(r)`
###### array copier
```
// This block of code...
const r = [1, 2, 3];
const rCp = r.slice();
```

```
// ...is the same as this block of code:
const r = [1, 2, 3];
const rCp = copy(r);
```

### `feed(xs)`
###### array pulverizer
Breaks up the elements in an array at the first level of depth. If the elements are Arrays, Functions, or Objects, they are left alone.
```
const r = [12, 13, 14, 'fifteen', {a: 1, b: 2, c: 3}, 17, 18];
feed(r)
// => [1, 2, 1, 3, 1, 4, 'f', 'i', 'f', 't', 'e', 'e', 'n', {a: 1, b: 2, c: 3}, 1, 7, 1, 8]
```

```
const r = [12, 13, 14, 15];

reduce(add, 0)(r);       // => 54
// 12 + 13 + 14 + 15
reduce(add, 0)(feed(r)); // => 18
// 1 + 2 + 1 + 3 + 1 + 4 + 1 + 5
```

### `reduceUntil(iterator, cond, v0, xs)`
###### conditioned reduce
```
const gte10 = flip(gte)(10);
reduceUntil(add, gte10, 0, [2, 4, 6, 8, 10, 12])
// => 12
// 2 + 4 + 6 = 12
```


### `alphabet()`
###### alphabet generator
```
alphabet()
// ["a", "b", "c", "d", "e",
//  "f", "g", "h", "i", "j",
//  "k", "l", "m", "n", "o",
//  "p", "q", "r", "s", "t",
//  "u", "v", "w", "x", "y", 
//  "z"]

const fullAlphabet = ap([toLowerCase, toUper], alphabet);
// ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
//  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
//  "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", 
//  "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
//  "S", "T", "U", "V", "W", "X", "Y", "Z"]
```

# Collections in Parallel
### `parallelMap(iterator)`
###### map across multiple arrays

```
parallelMap(add(5))
  ([ 1,  2,  3],
   [10, 11, 12])
// => [[ 6,  7,  8],
//     [15, 16, 17]]
```

### `parallelReduce(reducer, init)`
###### reduce multiple arrays

```
parallelReduce(add, 0)
  ([ 1,  2,  3],
   [10, 11, 12],
   [33, 43, 53])
// => [6, 33, 129]
```

### `parallelFilter(predicate)`
###### filter multiple arrays

```
let gte20 = flip(gte)(20);

parallelFilter(gte10)
  ([ 1,  2,  3],
   [10, 21, 22],
   [52, 21, 34],
   [10, 20, 31])
// => [[          ],
//     [    21, 22],
//     [52, 21, 34],
//     [    20, 31]]
```
