"use strict";
var e = n(161581),
  o = n(926515),
  i = n(192291),
  u = n(49693),
  c = n(18316),
  f = n(339718),
  a = n(936940),
  s = e.RangeError,
  y = e.Int8Array,
  p = y && y.prototype,
  h = p && p.set,
  v = i.aTypedArray,
  l = i.exportTypedArrayMethod,
  g = !a(function() {
    var t = new Uint8ClampedArray(2);
    return o(h, t, {
      length: 1,
      0: 3
    }, 1), 3 !== t[1]
  }),
  d = g && i.NATIVE_ARRAY_BUFFER_VIEWS && a(function() {
    var t = new y(2);
    return t.set(1), t.set("2", 1), 0 !== t[0] || 2 !== t[1]
  });
l("set", function(t) {
  v(this);
  var r = c(arguments.length > 1 ? arguments[1] : void 0, 1),
    n = f(t);
  if (g) return o(h, this, n, r);
  var e = this.length,
    i = u(n),
    a = 0;
  if (i + r > e) throw s("Wrong length");
  for (; a < i;) this[r + a] = n[a++]
}, !g || d)