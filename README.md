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
```
const r = ['Jim', 'Mike', 'George', 'Harry'];
let randomName = r[randomIdx(r)];
// => 'George'
```

### randomElement(r)
```
const r = ['Jim', 'Mike', 'George', 'Harry'];
let randomName = randomElement(r);
// => 'Harry'
```

Number splitter
`splitNum(seperator, x)`

Constructor fetcher
`typeCtor(x)`

```
map(
  typeCtor
)([1, 2, 'schoolbus', {a: 1, b: 2, c: 3}])
// => [Number, Number, String, Object]
```

Array copier
`copy(r)`

This block of code...
```
const r = [1, 2, 3];
const rCp = r.slice();
```
...is the same as this block of code:
```
const r = [1, 2, 3];
const rCp = copy(r);
```

Array pulverizer
`feed(xs)`

Conditioned Reduce
`reduceUntil(iterator, cond, v0, xs)`

Alphabet generator
`alphabet()`

# Collections in Parallel
`parallelMap(iterator)`

```
parallelMap(add(5))
  ([ 1,  2,  3],
   [10, 11, 12])
// => [[ 6,  7,  8],
//     [15, 16, 17]]
```

`parallelReduce(reducer, init)`

```
parallelReduce(add, 0)
  ([ 1,  2,  3],
   [10, 11, 12],
   [33, 43, 53])
// => [6, 33, 129]
```

`parallelFilter(predicate)`

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
