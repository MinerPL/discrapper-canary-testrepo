    n("70102");
    var r = n("285162"),
      o = n("271388"),
      i = n("16282"),
      u = Math.max,
      c = Math.min;
    t.exports = function(t, e, n) {
      var a, l, f, s, p, d, v = 0,
        b = !1,
        g = !1,
        h = !0;
      if ("function" != typeof t) throw TypeError("Expected a function");

      function y(e) {
        var n = a,
          r = l;
        return a = l = void 0, v = e, s = t.apply(r, n)
      }
      e = i(e) || 0, r(n) && (b = !!n.leading, f = (g = "maxWait" in n) ? u(i(n.maxWait) || 0, e) : f, h = "trailing" in n ? !!n.trailing : h);

      function m(t) {
        var n = t - d,
          r = t - v;
        return void 0 === d || n >= e || n < 0 || g && r >= f
      }

      function E() {
        var t, n, r, i, u = o();
        if (m(u)) return S(u);
        p = setTimeout(E, (n = (t = u) - d, r = t - v, i = e - n, g ? c(i, f - r) : i))
      }

      function S(t) {
        return (p = void 0, h && a) ? y(t) : (a = l = void 0, s)
      }

      function x() {
        var t, n = o(),
          r = m(n);
        if (a = arguments, l = this, d = n, r) {
          if (void 0 === p) {
            ;
            return v = t = d, p = setTimeout(E, e), b ? y(t) : s
          }
          if (g) return clearTimeout(p), p = setTimeout(E, e), y(d)
        }
        return void 0 === p && (p = setTimeout(E, e)), s
      }
      return x.cancel = function() {
        void 0 !== p && clearTimeout(p), v = 0, a = d = l = p = void 0
      }, x.flush = function() {
        return void 0 === p ? s : S(o())
      }, x
    }