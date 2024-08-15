var r = n(566885),
  i = n(926515),
  a = n(339718),
  s = n(627060),
  o = n(908355),
  l = n(933676),
  u = n(49693),
  c = n(182867),
  d = n(981971),
  _ = n(11697),
  E = Array;
e.exports = function(e) {
  var t, n, f, h, p, m, I = a(e),
T = l(this),
g = arguments.length,
S = g > 1 ? arguments[1] : void 0,
A = void 0 !== S;
  A && (S = r(S, g > 2 ? arguments[2] : void 0));
  var N = _(I),
v = 0;
  if (N && !(this === E && o(N)))
for (p = (h = d(I, N)).next, n = T ? new this() : []; !(f = i(p, h)).done; v++)
  m = A ? s(h, S, [
    f.value,
    v
  ], !0) : f.value, c(n, v, m);
  else
for (t = u(I), n = T ? new this(t) : E(t); t > v; v++)
  m = A ? S(I[v], v) : I[v], c(n, v, m);
  return n.length = v, n;
};