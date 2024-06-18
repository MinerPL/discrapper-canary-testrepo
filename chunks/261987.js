"use strict";
var n = e(545576),
  o = e(740362),
  i = e(251069),
  a = e(838957),
  u = e(276321),
  f = e(381740),
  c = e(504559),
  s = e(95948),
  p = e(892725),
  l = e(668788),
  h = e(154154),
  v = e(325008),
  d = e(992051);
t.exports = function(t, r, e, b) {
  var g = "stackTraceLimit",
    y = b ? 2 : 1,
    m = t.split("."),
    w = m[m.length - 1],
    _ = n.apply(null, m);
  if (_) {
    var x = _.prototype;
    if (!d && o(x, "cause") && delete x.cause, !e) return _;
    var k = n("Error"),
      M = r(function(t, r) {
        var e = p(b ? r : t, void 0),
          n = b ? new _(t) : new _;
        return void 0 !== e && i(n, "message", e), h(n, M, n.stack, 2), this && a(x, this) && s(n, this, M), arguments.length > y && l(n, arguments[y]), n
      });
    if (M.prototype = x, "Error" !== w ? u ? u(M, k) : f(M, k, {
        name: !0
      }) : v && g in _ && (c(M, _, g), c(M, _, "prepareStackTrace")), f(M, _), !d) try {
      x.name !== w && i(x, "name", w), x.constructor = M
    } catch (t) {}
    return M
  }
}