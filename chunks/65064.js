var n = r(135839),
  a = r(117973),
  o = r(780712),
  i = r(400353),
  _ = r(653180),
  E = r(657398),
  s = r(19235),
  c = '[object Map]',
  I = '[object Promise]',
  u = '[object Set]',
  l = '[object WeakMap]',
  R = '[object DataView]',
  A = s(n),
  T = s(a),
  d = s(o),
  N = s(i),
  p = s(_),
  O = E;
(n && O(new n(new ArrayBuffer(1))) != R || a && O(new a()) != c || o && O(o.resolve()) != I || i && O(new i()) != u || _ && O(new _()) != l) && (O = function(e) {
  var t = E(e),
r = '[object Object]' == t ? e.constructor : void 0,
n = r ? s(r) : '';
  if (n)
switch (n) {
  case A:
    return R;
  case T:
    return c;
  case d:
    return I;
  case N:
    return u;
  case p:
    return l;
}
  return t;
}), e.exports = O;