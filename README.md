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

Array copier
`copy(r)`

Array pulverizer
`feed(xs)`

Conditioned Reduce
`reduceUntil(iterator, cond, v0, xs)`

Alphabet generator
`alphabet()`
