    "use strict";
    var n = e("545576"),
      o = e("740362"),
      i = e("251069"),
      u = e("838957"),
      c = e("276321"),
      s = e("381740"),
      a = e("504559"),
      f = e("95948"),
      p = e("892725"),
      l = e("668788"),
      v = e("154154"),
      d = e("325008"),
      y = e("992051");
    t.exports = function(t, r, e, g) {
      var I = "stackTraceLimit",
        h = g ? 2 : 1,
        E = t.split("."),
        T = E[E.length - 1],
        b = n.apply(null, E);
      if (b) {
        var m = b.prototype;
        if (!y && o(m, "cause") && delete m.cause, !e) return b;
        var S = n("Error"),
          R = r(function(t, r) {
            var e = p(g ? r : t, void 0),
              n = g ? new b(t) : new b;
            return void 0 !== e && i(n, "message", e), v(n, R, n.stack, 2), this && u(m, this) && f(n, this, R), arguments.length > h && l(n, arguments[h]), n
          });
        if (R.prototype = m, "Error" !== T ? c ? c(R, S) : s(R, S, {
            name: !0
          }) : d && I in b && (a(R, b, I), a(R, b, "prepareStackTrace")), s(R, b), !y) try {
          m.name !== T && i(m, "name", T), m.constructor = R
        } catch (t) {}
        return R
      }
    }