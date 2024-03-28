"use strict";
r.r(t);
var n = r("675717"),
  a = r("595250"),
  o = r("220955"),
  i = Math.max,
  l = Math.min;
t.default = function(e, t, r) {
  var u, s, f, c, d, p, h = 0,
    b = !1,
    v = !1,
    g = !0;
  if ("function" != typeof e) throw TypeError("Expected a function");

  function x(t) {
    var r = u,
      n = s;
    return u = s = void 0, h = t, c = e.apply(n, r)
  }
  t = (0, o.default)(t) || 0, (0, n.default)(r) && (b = !!r.leading, f = (v = "maxWait" in r) ? i((0, o.default)(r.maxWait) || 0, t) : f, g = "trailing" in r ? !!r.trailing : g);

  function y(e) {
    var r = e - p,
      n = e - h;
    return void 0 === p || r >= t || r < 0 || v && n >= f
  }

  function m() {
    var e, r, n, o, i = (0, a.default)();
    if (y(i)) return w(i);
    d = setTimeout(m, (r = (e = i) - p, n = e - h, o = t - r, v ? l(o, f - n) : o))
  }

  function w(e) {
    return (d = void 0, g && u) ? x(e) : (u = s = void 0, c)
  }

  function E() {
    var e, r = (0, a.default)(),
      n = y(r);
    if (u = arguments, s = this, p = r, n) {
      if (void 0 === d) {
        ;
        return h = e = p, d = setTimeout(m, t), b ? x(e) : c
      }
      if (v) return clearTimeout(d), d = setTimeout(m, t), x(p)
    }
    return void 0 === d && (d = setTimeout(m, t)), c
  }
  return E.cancel = function() {
    void 0 !== d && clearTimeout(d), h = 0, u = p = s = d = void 0
  }, E.flush = function() {
    return void 0 === d ? c : w((0, a.default)())
  }, E
}