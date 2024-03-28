"use strict";
var r = n("67867"),
  a = n("668530"),
  o = n("867325")(a.setInterval, !0);
r({
  global: !0,
  bind: !0,
  forced: a.setInterval !== o
}, {
  setInterval: o
})