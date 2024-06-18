"use strict";

function i(e, t, n) {
  let i;
  let r = [],
    s = function() {
      for (var o = arguments.length, a = Array(o), l = 0; l < o; l++) a[l] = arguments[l];
      let u = Date.now();
      for (null != i && (clearTimeout(i), i = null); r.length > 0 && r[0] <= u;) r.shift();
      r.length < e ? (r.push(u + t), n(...a)) : i = setTimeout(() => s(...a), r[0] - u)
    };
  return s
}
n.d(t, {
  Z: function() {
    return i
  }
}), n(653041), n(47120)