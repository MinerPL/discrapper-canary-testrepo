var e = o(147018),
  n = o(161581),
  c = o(545576),
  i = o(879),
  u = o(97131).f,
  a = o(740362),
  f = o(603528),
  E = o(95948),
  s = o(892725),
  p = o(33995),
  R = o(905145),
  l = o(325008),
  _ = o(992051),
  d = 'DOMException',
  O = c('Error'),
  m = c(d),
  I = function() {
f(this, A);
var r = arguments.length,
  t = s(r < 1 ? void 0 : arguments[0]),
  o = s(r < 2 ? void 0 : arguments[1], 'Error'),
  e = new m(t, o),
  n = O(t);
return n.name = d, u(e, 'stack', i(1, R(n.stack, 1))), E(e, this, I), e;
  },
  A = I.prototype = m.prototype,
  v = 'stack' in O(d),
  T = 'stack' in new m(1, 2),
  y = m && l && Object.getOwnPropertyDescriptor(n, d),
  N = !!y && !(y.writable && y.configurable),
  h = v && !N && !T;
e({
  global: !0,
  constructor: !0,
  forced: _ || h
}, {
  DOMException: h ? I : m
});
var D = c(d),
  S = D.prototype;
if (S.constructor !== D) {
  for (var b in (!_ && u(S, 'constructor', i(1, D)), p))
if (a(p, b)) {
  var C = p[b],
    g = C.s;
  !a(D, g) && u(D, g, i(6, C.c));
}
}