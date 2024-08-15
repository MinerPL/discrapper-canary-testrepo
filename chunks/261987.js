var e = n(545576),
  i = n(740362),
  o = n(251069),
  u = n(838957),
  c = n(276321),
  a = n(381740),
  s = n(504559),
  f = n(95948),
  l = n(892725),
  p = n(668788),
  v = n(154154),
  h = n(325008),
  d = n(992051);
t.exports = function(t, r, n, g) {
  var x = 'stackTraceLimit',
y = g ? 2 : 1,
b = t.split('.'),
E = b[b.length - 1],
m = e.apply(null, b);
  if (m) {
var T = m.prototype;
if (!d && i(T, 'cause') && delete T.cause, !n)
  return m;
var S = e('Error'),
  I = r(function(t, r) {
    var n = l(g ? r : t, void 0),
      e = g ? new m(t) : new m();
    return void 0 !== n && o(e, 'message', n), v(e, I, e.stack, 2), this && u(T, this) && f(e, this, I), arguments.length > y && p(e, arguments[y]), e;
  });
if (I.prototype = T, 'Error' !== E ? c ? c(I, S) : a(I, S, {
    name: !0
  }) : h && x in m && (s(I, m, x), s(I, m, 'prepareStackTrace')), a(I, m), !d)
  try {
    T.name !== E && o(T, 'name', E), T.constructor = I;
  } catch (t) {}
return I;
  }
};