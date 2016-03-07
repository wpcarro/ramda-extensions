# ramda-extensions
###Functions that extend the Ramda.js library

Head over to `/develop` to check out the source or make a contribution!

## misc
String `subset`: indicates which functions to flood the scope with
Boolean `backup`: flag to indicate whether window backups should be made when there are naming collisions with window functions and Ramda functions
`attachToWindow(subset, backup)`

## filters
`isNumber(x)`

`isString(x)`

`isObject(x)`

`isArray(x)`

`isFunction(x)`

`isEven(x)`

`isOdd(x)`

# filter fns
filterOut :: (a -> Boolean) -> f a -> f a
`filterOut(predicate, xs)`

`filterOutGap(predicate, xs)`

`filterGap(predicate, xs)`

# useful utils

Array to Object converter
`rToO(r)`

Try-Catch handler
`tryCatch(fn0, fn1, x)`

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
// => [[6, 7, 8], [15, 16, 17]]
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
       [    21, 22],
       [52, 21, 34],
       [    20, 31]]
```
