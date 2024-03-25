"use strict";
r.r(t), r.d(t, {
  default: function() {
    return l
  }
}), r("70102");
var n = r("794666"),
  a = r("115772"),
  o = r("148126"),
  i = Math.max,
  u = Math.min,
  l = function(e, t, r) {
    var l, s, f, c, d, p, h = 0,
      b = !1,
      v = !1,
      g = !0;
    if ("function" != typeof e) throw TypeError("Expected a function");

    function x(t) {
      var r = l,
        n = s;
      return l = s = void 0, h = t, c = e.apply(n, r)
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
      d = setTimeout(m, (r = (e = i) - p, n = e - h, o = t - r, v ? u(o, f - n) : o))
    }

    function w(e) {
      return (d = void 0, g && l) ? x(e) : (l = s = void 0, c)
    }

    function E() {
      var e, r = (0, a.default)(),
        n = y(r);
      if (l = arguments, s = this, p = r, n) {
        if (void 0 === d) {
          ;
          return h = e = p, d = setTimeout(m, t), b ? x(e) : c
        }
        if (v) return clearTimeout(d), d = setTimeout(m, t), x(p)
      }
      return void 0 === d && (d = setTimeout(m, t)), c
    }
    return E.cancel = function() {
      void 0 !== d && clearTimeout(d), h = 0, l = p = s = d = void 0
    }, E.flush = function() {
      return void 0 === d ? c : w((0, a.default)())
    }, E
  }