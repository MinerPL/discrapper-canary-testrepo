"use strict";
n.d(t, {
  Eo: function() {
    return c
  },
  KH: function() {
    return o
  },
  nc: function() {
    return _
  },
  yz: function() {
    return d
  }
}), n(47120), n(724458);
var i = n(524484),
  r = n(981631);
let s = function(e, t) {
    let {
      multiplier: n,
      value: i
    } = e, [r, s] = t, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, a = i * n;
    return a <= 0 ? 0 : Math.min(o, r.reduce((e, t, n) => {
      if (a > t) {
        let e = s[n];
        if (n + 1 === r.length) return s[n];
        let i = r[n + 1],
          o = s[n + 1];
        return (a - t) / (i - t) * (o - e) + e
      }
      return a === t ? s[n] : e
    }, 0))
  },
  o = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.qi.LEVEL_3;
    return s(e, [i.JR[t], i.u4[t]], 1e5)
  },
  a = [
    [1, .001],
    [25, .3],
    [100, .5],
    [250, .8],
    [500, .9],
    [2500, .95],
    [9001, 1]
  ],
  l = a.map(e => {
    let [t] = e;
    return t
  }),
  u = a.map(e => {
    let [t, n] = e;
    return n
  }),
  _ = e => s(e, [l, u], 1),
  d = e => 1 === e ? {
    color: r.Ilk.BRAND_500
  } : 2 === e || 3 === e ? {
    color: r.Ilk.GREEN_360
  } : 4 === e || 5 === e ? {
    color: r.Ilk.YELLOW_300,
    square: !0
  } : 6 === e ? {
    color: r.Ilk.RED_400,
    square: !0
  } : {
    color: r.Ilk.ORANGE_345,
    flair: !0
  };

function c(e) {
  var t;
  return e.value * (null !== (t = e.multiplier) && void 0 !== t ? t : 1)
}