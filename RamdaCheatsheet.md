# Ramda Cheatsheet

The purpose of this document is to provide a cheatsheet for the Ramda.js library.
This list reflects my current understanding of a categorization of the Ramda.js library that helps me.
Until I can create a more useful categorization, I will rely on the categories used within Ramda's current documentation (i.e. `Function`, `Lists`, `Logic`, `Math`, `Object`, `Relation`, `String`, and `Type`)

Note: this is very much a W.I.P. I am open to contributions and suggestions, so do not hesitate to reach out.

## Index

* [Logic](https://github.com/wpcarro/ramda-extensions/blob/master/RamdaCheatsheet.md#logic)
  * [basic operators](https://github.com/wpcarro/ramda-extensions/blob/master/RamdaCheatsheet.md#basic-operators)
  * [compound operators](https://github.com/wpcarro/ramda-extensions/blob/master/RamdaCheatsheet.md#compound-operators)
  * [for objects](https://github.com/wpcarro/ramda-extensions/blob/master/RamdaCheatsheet.md#for-objects)
  * [branching](https://github.com/wpcarro/ramda-extensions/blob/master/RamdaCheatsheet.md#branching)
  * [misc](https://github.com/wpcarro/ramda-extensions/blob/master/RamdaCheatsheet.md#misc)

* [Lenses](https://github.com/wpcarro/ramda-extensions/blob/master/RamdaCheatsheet.md#lenses)
  * [lens constructors](https://github.com/wpcarro/ramda-extensions/blob/master/RamdaCheatsheet.md#lens-constructors)
  * [lens operators](https://github.com/wpcarro/ramda-extensions/blob/master/RamdaCheatsheet.md#lens-operations)

* [Math](https://github.com/wpcarro/ramda-extensions/blob/master/RamdaCheatsheet.md#math)

* [Arrays](https://github.com/wpcarro/ramda-extensions/blob/master/RamdaCheatsheet.md#arrays)

## Logic
###### basic operators
[both](http://ramdajs.com/0.19.1/docs/#both)

[and](http://ramdajs.com/0.19.1/docs/#and)

***

[either](http://ramdajs.com/0.19.1/docs/#either)

[or](http://ramdajs.com/0.19.1/docs/#or)

***

[complement](http://ramdajs.com/0.19.1/docs/#complement)

[not](http://ramdajs.com/0.19.1/docs/#not)

***

###### compound operators
[allPass](http://ramdajs.com/0.19.1/docs/#allPass)

[anyPass](http://ramdajs.com/0.19.1/docs/#anyPass)

---

###### for objects
[pathSatisfies](http://ramdajs.com/0.19.1/docs/#pathSatisfies)

[propSatisfies](http://ramdajs.com/0.19.1/docs/#propSatisfies)

---

###### branching
[cond](http://ramdajs.com/0.19.1/docs/#cond)

[ifElse](http://ramdajs.com/0.19.1/docs/#ifElse)

---

###### misc
[defaultTo](http://ramdajs.com/0.19.1/docs/#defaultTo)

[isEmpty](http://ramdajs.com/0.19.1/docs/#isEmpty)

[unless](http://ramdajs.com/0.19.1/docs/#unless)

[when](http://ramdajs.com/0.19.1/docs/#when)

---

## Lenses
###### lens constructors
[lens](http://ramdajs.com/0.19.1/docs/#lens)

[lensIndex](http://ramdajs.com/0.19.1/docs/#lensIndex)

[lensPath](http://ramdajs.com/0.19.1/docs/#lensPath)

[lensProp](http://ramdajs.com/0.19.1/docs/#lensProp)

***

###### lens operations
[view](http://ramdajs.com/0.19.1/docs/#view)

[set](http://ramdajs.com/0.19.1/docs/#set)

[over](http://ramdajs.com/0.19.1/docs/#over)

---

## Math
[add](http://ramdajs.com/0.19.1/docs/#add)

[dec](http://ramdajs.com/0.19.1/docs/#dec)

[divide](http://ramdajs.com/0.19.1/docs/#divide)

[inc](http://ramdajs.com/0.19.1/docs/#inc)

[modulo](http://ramdajs.com/0.19.1/docs/#modulo)

[mathMod](http://ramdajs.com/0.19.1/docs/#mathMod)

[mean](http://ramdajs.com/0.19.1/docs/#mean)

[median](http://ramdajs.com/0.19.1/docs/#median)

[multiply](http://ramdajs.com/0.19.1/docs/#multiply)

[negate](http://ramdajs.com/0.19.1/docs/#negate)

[product](http://ramdajs.com/0.19.1/docs/#product)

[subtract](http://ramdajs.com/0.19.1/docs/#subtract)

[sum](http://ramdajs.com/0.19.1/docs/#sum)

## Arrays

##### slicers, dicers, and splicers

##### extremities 

[head](http://ramdajs.com/0.19.1/docs/#head) first element

[last](http://ramdajs.com/0.19.1/docs/#last) last element

***
##### extremity complements

[init](http://ramdajs.com/0.19.1/docs/#init) everything but the tail

[tail](http://ramdajs.com/0.19.1/docs/#tail) everything but the head

*** 

##### keep / discard

[take](http://ramdajs.com/0.19.1/docs/#take) keep first N items

[takeLast](http://ramdajs.com/0.19.1/docs/#dropLast) keep last N items

[drop](http://ramdajs.com/0.19.1/docs/#drop) discard first N items

[dropLast](http://ramdajs.com/0.19.1/docs/#dropLast) discard last N items

***

##### precision operations

[nth](http://ramdajs.com/0.19.1/docs/#nth) retrieves Nth element

[update](http://ramdajs.com/0.19.1/docs/#update) changes the Nth element

[adjust](http://ramdajs.com/0.19.1/docs/#adjust) applies a fn to the Nth element

***

[slice](http://ramdajs.com/0.19.1/docs/#slice)
