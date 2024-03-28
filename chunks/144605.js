"use strict";
var r = n("67867"),
  a = n("294377"),
  o = n("156741"),
  i = n("420926"),
  l = n("831496"),
  u = n("28886"),
  s = n("982665"),
  c = n("224106"),
  d = n("821819"),
  f = a("Reflect", "construct"),
  p = Object.prototype,
  h = [].push,
  m = d(function() {
    function e() {}
    return !(f(function() {}, [], e) instanceof e)
  }),
  y = !d(function() {
    f(function() {})
  }),
  v = m || y;
r({
  target: "Reflect",
  stat: !0,
  forced: v,
  sham: v
}, {
  construct: function(e, t) {
    l(e), u(t);
    var n = arguments.length < 3 ? e : l(arguments[2]);
    if (y && !m) return f(e, t, n);
    if (e === n) {
      switch (t.length) {
        case 0:
          return new e;
        case 1:
          return new e(t[0]);
        case 2:
          return new e(t[0], t[1]);
        case 3:
          return new e(t[0], t[1], t[2]);
        case 4:
          return new e(t[0], t[1], t[2], t[3])
      }
      var r = [null];
      return o(h, r, t), new(o(i, e, r))
    }
    var a = n.prototype,
      d = c(s(a) ? a : p),
      v = o(e, d, t);
    return s(v) ? v : d
  }
})