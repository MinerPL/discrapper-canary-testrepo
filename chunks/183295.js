"use strict";
var r = n("67867"),
  a = n("228042"),
  o = n("146321").remove;
r({
  target: "Map",
  proto: !0,
  real: !0,
  forced: !0
}, {
  deleteAll: function() {
    for (var e, t = a(this), n = !0, r = 0, i = arguments.length; r < i; r++) e = o(t, arguments[r]), n = n && e;
    return !!n
  }
})