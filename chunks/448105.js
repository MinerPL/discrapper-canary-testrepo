    "use strict";
    t.exports = function(t, e) {
      var n = e.length,
        r = t.length;
      if (r > n) return !1;
      if (r === n) return t === e;
      t: for (var o = 0, i = 0; o < r; o++) {
        for (var u = t.charCodeAt(o); i < n;)
          if (e.charCodeAt(i++) === u) continue t;
        return !1
      }
      return !0
    }