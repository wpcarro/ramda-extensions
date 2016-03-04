# ramda-extensions
Functions that extend the Ramda.js library

## filters
`isNumber(x)`

`isString(x)`

`isObject(x)`

`isArray(x)`

`isFunction(x)`

`isEven(x)`

`isOdd(x)`

filterOut :: (a -> Boolean) -> f a -> f a
`filterOut(predicate, xs)`

`filterOutGap(predicate, xs)`

`filterGap(predicate, xs)`

Array to Object converter
`rToO(r)`

`tryCatch(fn0, fn1, x)`

`splitNum(seperator, x)`

`typeCtor(x)`

`copy(r)`

`feed(xs)`

`reduceUntil(iterator, cond, v0, xs)`

`alphabet()`
