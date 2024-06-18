"use strict";
var e = n(566885),
  o = n(926515),
  i = n(772425),
  u = n(339718),
  c = n(49693),
  f = n(981971),
  a = n(11697),
  s = n(908355),
  y = n(536524),
  p = n(192291).aTypedArrayConstructor,
  h = n(165915);
t.exports = function(t) {
  var r, n, v, l, g, d, A, w, x = i(this),
    b = u(t),
    T = arguments.length,
    E = T > 1 ? arguments[1] : void 0,
    I = void 0 !== E,
    m = a(b);
  if (m && !s(m))
    for (w = (A = f(b, m)).next, b = []; !(d = o(w, A)).done;) b.push(d.value);
  for (I && T > 2 && (E = e(E, arguments[2])), n = c(b), l = y(v = new(p(x))(n)), r = 0; n > r; r++) g = I ? E(b[r], r) : b[r], v[r] = l ? h(g) : +g;
  return v
}