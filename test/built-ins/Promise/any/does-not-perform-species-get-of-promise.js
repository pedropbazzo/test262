// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.any
description: >
  Promise.any() does not derive a constructor via SpeciesConstructor()
info: |
  1. Let C be the this value.
  2. Let promiseCapability be ? NewPromiseCapability(C).
  ...

  NewPromiseCapability ( C )

  1. If IsConstructor(C) is false, throw a TypeError exception.
  2. NOTE: C is assumed to be a constructor function that supports the parameter conventions of the Promise constructor (see 25.6.3.1).
  ...

flags: [async]
features: [Promise.any, Symbol.species, Symbol, arrow-function]
---*/

Object.defineProperty(Promise, Symbol.species, {
  get() {
    throw new Test262Error('Erroneous Get(C, @@species) via SpeciesConstructor() occurred.');
  }
  static resolve() {
    throw new Test262Error('Promise.resolve was reached');
  }
});

Promise.any([1]).then(() => $DONE(), $DONE);
