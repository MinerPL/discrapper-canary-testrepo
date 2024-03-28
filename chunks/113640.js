"use strict";
var r = n("67867"),
  a = n("718380"),
  o = n("821819"),
  i = n("982665"),
  l = n("938988").onFreeze,
  u = Object.freeze;
r({
  target: "Object",
  stat: !0,
  forced: o(function() {
    u(1)
  }),
  sham: !a
}, {
  freeze: function(e) {
    return u && i(e) ? u(l(e)) : e
  }
})