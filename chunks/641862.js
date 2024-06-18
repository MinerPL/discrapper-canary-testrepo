"use strict";
n.d(t, {
  Y: function() {
    return _
  },
  u: function() {
    return g
  }
});
var r = n(175730),
  i = n(878369),
  a = n(670732),
  o = n(839826),
  s = n(721056),
  u = n(388388),
  c = new WeakMap,
  l = /auto|scroll/,
  d = /^tb|vertical/,
  f = /msie|trident/i.test(u.C.navigator && u.C.navigator.userAgent),
  p = function(e) {
    return parseFloat(e || "0")
  },
  h = function(e, t, n) {
    return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === n && (n = !1), new i.D((n ? t : e) || 0, (n ? e : t) || 0)
  },
  m = (0, s.v)({
    devicePixelContentBoxSize: h(),
    borderBoxSize: h(),
    contentBoxSize: h(),
    contentRect: new a.N(0, 0, 0, 0)
  }),
  g = function(e, t) {
    if (void 0 === t && (t = !1), c.has(e) && !t) return c.get(e);
    if ((0, o.xj)(e)) return c.set(e, m), m;
    var n = getComputedStyle(e),
      r = (0, o.zd)(e) && e.ownerSVGElement && e.getBBox(),
      i = !f && "border-box" === n.boxSizing,
      u = d.test(n.writingMode || ""),
      g = !r && l.test(n.overflowY || ""),
      _ = !r && l.test(n.overflowX || ""),
      b = r ? 0 : p(n.paddingTop),
      v = r ? 0 : p(n.paddingRight),
      y = r ? 0 : p(n.paddingBottom),
      E = r ? 0 : p(n.paddingLeft),
      S = r ? 0 : p(n.borderTopWidth),
      x = r ? 0 : p(n.borderRightWidth),
      w = r ? 0 : p(n.borderBottomWidth),
      C = r ? 0 : p(n.borderLeftWidth),
      T = E + v,
      D = b + y,
      M = C + x,
      O = S + w,
      A = _ ? e.offsetHeight - O - e.clientHeight : 0,
      k = g ? e.offsetWidth - M - e.clientWidth : 0,
      R = r ? r.width : p(n.width) - (i ? T + M : 0) - k,
      N = r ? r.height : p(n.height) - (i ? D + O : 0) - A,
      I = R + T + k + M,
      L = N + D + A + O,
      P = (0, s.v)({
        devicePixelContentBoxSize: h(Math.round(R * devicePixelRatio), Math.round(N * devicePixelRatio), u),
        borderBoxSize: h(I, L, u),
        contentBoxSize: h(R, N, u),
        contentRect: new a.N(E, b, R, N)
      });
    return c.set(e, P), P
  },
  _ = function(e, t, n) {
    var i = g(e, n),
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