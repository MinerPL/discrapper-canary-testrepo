"use strict";
var a, s;
n.r(t), n.d(t, {
  MatchStrategy: function() {
    return a
  },
  getMatchedPositions: function() {
    return u
  },
  isMatch: function() {
    return o
  }
}), (s = a || (a = {}))[s.ExactMatch = 0] = "ExactMatch", s[s.PrefixMatch = 1] = "PrefixMatch";
let l = e => /\p{P}/gu.test(null != e ? e : "") || " " === e || "" === e,
  i = (e, t, n) => {
    if (n - t > e.length) return !1;
    let a = e.charAt(t - 1),
      s = e.charAt(n + 1);
    return l(a) && l(s)
  },
  r = (e, t) => l(e.charAt(t - 1)),
  o = (e, t, n, a) => {
    if (1 === a) return r(e, t);
    return i(e, t, n)
  },
  u = (e, t, n, a) => {
    if (0 === a) return {
      start: t,
      end: n
    };
    let s = n;
    for (; s < e.length - 1 && !l(e.charAt(s + 1));) s++;
    return {
      start: t,
      end: s
    }
  }