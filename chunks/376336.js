"use strict";
var r = n("67867"),
  a = n("228042"),
  o = n("730427"),
  i = n("146321").set;
r({
  target: "Map",
  proto: !0,
  real: !0,
  arity: 1,
  forced: !0
}, {
  merge: function(e) {
    for (var t = a(this), n = arguments.length, r = 0; r < n;) o(arguments[r++], function(e, n) {
      i(t, e, n)
    }, {
      AS_ENTRIES: !0
    });
    return t
  }
})