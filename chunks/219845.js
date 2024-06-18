"use strict";
n.d(t, {
  Fs: function() {
    return s
  },
  Y9: function() {
    return m
  },
  uP: function() {
    return h
  }
});
var r = n(644387),
  i = n(582661),
  a = n(383466),
  o = n(559972),
  s = new Map,
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
  h = function(e) {
    if (s.has(e)) return s.get(e);
    if ((0, a.xj)(e)) return s.set(e, p), p;
    var t = getComputedStyle(e),
      n = (0, a.zd)(e) && e.ownerSVGElement && e.getBBox(),
      r = !l && "border-box" === t.boxSizing,
      o = c.test(t.writingMode || ""),
      h = !n && u.test(t.overflowY || ""),
      m = !n && u.test(t.overflowX || ""),
      g = n ? 0 : d(t.paddingTop),
      _ = n ? 0 : d(t.paddingRight),
      b = n ? 0 : d(t.paddingBottom),
      v = n ? 0 : d(t.paddingLeft),
      y = n ? 0 : d(t.borderTopWidth),
      E = n ? 0 : d(t.borderRightWidth),
      S = n ? 0 : d(t.borderBottomWidth),
      x = n ? 0 : d(t.borderLeftWidth),
      w = v + _,
      C = g + b,
      T = x + E,
      D = y + S,
      M = m ? e.offsetHeight - D - e.clientHeight : 0,
      O = h ? e.offsetWidth - T - e.clientWidth : 0,
      A = n ? n.width : d(t.width) - (r ? w + T : 0) - O,
      k = n ? n.height : d(t.height) - (r ? C + D : 0) - M,
      R = A + w + O + T,
      N = k + C + M + D,
      I = Object.freeze({
        devicePixelContentBoxSize: f(Math.round(A * devicePixelRatio), Math.round(k * devicePixelRatio), o),
        borderBoxSize: f(R, N, o),
        contentBoxSize: f(A, k, o),
        contentRect: new i.N(v, g, A, k)
      });
    return s.set(e, I), I
  },
  m = function(e, t) {
    var n = h(e),
      i = n.borderBoxSize,
      a = n.contentBoxSize,
      o = n.devicePixelContentBoxSize;
    switch (t) {
      case r.z.DEVICE_PIXEL_CONTENT_BOX:
        return o;
      case r.z.BORDER_BOX:
        return i;
      default:
        return a
    }
  }