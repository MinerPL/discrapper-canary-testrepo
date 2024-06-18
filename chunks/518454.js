"use strict";
n.d(t, {
  Z: function() {
    return function e(t, n, r, s) {
      let {
        length: o
      } = r, a = s, l = n;
      if (0 === o) return 0;
      if (null == a) a = l;
      else if (a === l) return l;
      return (l += t === i.a8.UP ? -1 : 1) < 0 || l >= o ? e(t, l < 0 ? o : -1, r, a) : r[l].type === i.h8.HEADER ? e(t, l, r, a) : l
    }
  }
});
var i = n(727785)