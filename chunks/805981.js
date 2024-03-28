"use strict";
var r = n("67867"),
  a = n("668530"),
  o = n("867325")(a.setTimeout, !0);
r({
  global: !0,
  bind: !0,
  forced: a.setTimeout !== o
}, {
  setTimeout: o
})