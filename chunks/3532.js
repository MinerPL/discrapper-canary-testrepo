"use strict";
var r = n("67867"),
  a = n("821819"),
  o = n("729605"),
  i = n("65007").f,
  l = n("447631");
r({
  target: "Object",
  stat: !0,
  forced: !l || a(function() {
    i(1)
  }),
  sham: !l
}, {
  getOwnPropertyDescriptor: function(e, t) {
    return i(o(e), t)
  }
})