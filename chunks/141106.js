"use strict";
var i, r;
n.d(t, {
  BD: function() {
    return l
  },
  dQ: function() {
    return i
  },
  jO: function() {
    return u
  }
}), (r = i || (i = {}))[r.ExactMatch = 0] = "ExactMatch", r[r.PrefixMatch = 1] = "PrefixMatch";
let s = e => /\p{P}/gu.test(null != e ? e : "") || " " === e || "" === e,
  o = (e, t, n) => {
    if (n - t > e.length) return !1;
    let i = e.charAt(t - 1),
      r = e.charAt(n + 1);
    return s(i) && s(r)
  },
  a = (e, t) => s(e.charAt(t - 1)),
  l = (e, t, n, i) => {
    if (1 === i) return a(e, t);
    return o(e, t, n)
  },
  u = (e, t, n, i) => {
    if (0 === i) return {
      start: t,
      end: n,
      keyword: e.substring(t, n + 1)
    };
    let r = n;
    for (; r < e.length - 1 && !s(e.charAt(r + 1));) r++;
    return {
      start: t,
      end: r,
      keyword: e.substring(t, r + 1)
    }
  }