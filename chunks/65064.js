var n = r(135839),
  _ = r(117973),
  a = r(780712),
  i = r(400353),
  o = r(653180),
  E = r(657398),
  s = r(19235),
  c = '[object Map]',
  I = '[object Promise]',
  R = '[object Set]',
  T = '[object WeakMap]',
  u = '[object DataView]',
  l = s(n),
  A = s(_),
  N = s(a),
  d = s(i),
  O = s(o),
  S = E;
(n && S(new n(new ArrayBuffer(1))) != u || _ && S(new _()) != c || a && S(a.resolve()) != I || i && S(new i()) != R || o && S(new o()) != T) && (S = function(t) {
  var e = E(t),
r = '[object Object]' == e ? t.constructor : void 0,
n = r ? s(r) : '';
  if (n)
switch (n) {
  case l:
    return u;
  case A:
    return c;
  case N:
    return I;
  case d:
    return R;
  case O:
    return T;
}
  return e;
}), t.exports = S;