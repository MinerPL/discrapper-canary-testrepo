"use strict";
n.d(t, {
  Y: function() {
    return m
  },
  u: function() {
    return h
  }
});
var r = n(430901),
  i = n(96428),
  a = n(222285),
  o = n(288930),
  s = new WeakMap,
  u = /auto|scroll/,
  c = /^tb|vertical/,
  l = /msie|trident/i.test(o.C.navigator && o.C.navigator.userAgent),
  d = function(e) {
    return parseFloat(e || "0")
  },
  f = function(e, t, n) {
    return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === n && (n = !1), Object.freeze({
      inlineSize: (n ? t : e) || 0,
      blockSize: (n ? e : t) || 0
    })
  },
  p = Object.freeze({
    devicePixelContentBoxSize: f(),
    borderBoxSize: f(),
    contentBoxSize: f(),
    contentRect: new i.N(0, 0, 0, 0)
  }),
  h = function(e, t) {
    if (void 0 === t && (t = !1), s.has(e) && !t) return s.get(e);
    if ((0, a.xj)(e)) return s.set(e, p), p;
    var n = getComputedStyle(e),
      r = (0, a.zd)(e) && e.ownerSVGElement && e.getBBox(),
      o = !l && "border-box" === n.boxSizing,
      h = c.test(n.writingMode || ""),
      m = !r && u.test(n.overflowY || ""),
      g = !r && u.test(n.overflowX || ""),
      _ = r ? 0 : d(n.paddingTop),
      b = r ? 0 : d(n.paddingRight),
      v = r ? 0 : d(n.paddingBottom),
      y = r ? 0 : d(n.paddingLeft),
      E = r ? 0 : d(n.borderTopWidth),
      S = r ? 0 : d(n.borderRightWidth),
      x = r ? 0 : d(n.borderBottomWidth),
      w = r ? 0 : d(n.borderLeftWidth),
      C = y + b,
      T = _ + v,
      D = w + S,
      M = E + x,
      O = g ? e.offsetHeight - M - e.clientHeight : 0,
      A = m ? e.offsetWidth - D - e.clientWidth : 0,
      k = r ? r.width : d(n.width) - (o ? C + D : 0) - A,
      R = r ? r.height : d(n.height) - (o ? T + M : 0) - O,
      N = k + C + A + D,
      I = R + T + O + M,
      L = Object.freeze({
        devicePixelContentBoxSize: f(Math.round(k * devicePixelRatio), Math.round(R * devicePixelRatio), h),
        borderBoxSize: f(N, I, h),
        contentBoxSize: f(k, R, h),
        contentRect: new i.N(y, _, k, R)
      });
    return s.set(e, L), L
  },
  m = function(e, t, n) {
    var i = h(e, n),
      a = i.borderBoxSize,
      o = i.contentBoxSize,
      s = i.devicePixelContentBoxSize;
    switch (t) {
      case r.z.DEVICE_PIXEL_CONTENT_BOX:
        return s;
      case r.z.BORDER_BOX:
        return a;
      default:
        return o
    }
  }