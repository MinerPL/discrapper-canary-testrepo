"use strict";
var r = n("67867"),
  a = n("570596"),
  o = n("982665"),
  i = n("28886"),
  l = n("453556"),
  u = n("65007"),
  s = n("82474");
r({
  target: "Reflect",
  stat: !0
}, {
  get: function e(t, n) {
    var r, c, d = arguments.length < 3 ? t : arguments[2];
    return i(t) === d ? t[n] : (r = u.f(t, n)) ? l(r) ? r.value : void 0 === r.get ? void 0 : a(r.get, d) : o(c = s(t)) ? e(c, n, d) : void 0
  }
})