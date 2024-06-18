"use strict";
var e = n(863664),
  o = n(192291),
  i = o.aTypedArray,
  u = o.exportTypedArrayMethod,
  c = o.getTypedArrayConstructor;
u("toReversed", function() {
  return e(i(this), c(this))
})