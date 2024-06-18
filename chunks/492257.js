"use strict";
var e = n(192291),
  o = n(581031),
  i = n(526988),
  u = n(436330),
  c = e.aTypedArray,
  f = e.getTypedArrayConstructor,
  a = e.exportTypedArrayMethod,
  s = o(e.TypedArrayPrototype.sort);
a("toSorted", function(t) {
  void 0 !== t && i(t);
  var r = c(this);
  return s(u(f(r), r), t)
})