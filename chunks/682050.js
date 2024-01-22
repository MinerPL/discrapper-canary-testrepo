"use strict";
n.r(t), n.d(t, {
  getNodeClientOffset: function() {
    return o
  },
  getEventClientOffset: function() {
    return s
  },
  getDragPreviewOffset: function() {
    return a
  }
});
var r = n("219999"),
  i = n("908834");

function o(e) {
  var t = 1 === e.nodeType ? e : e.parentElement;
  if (!t) return null;
  var n = t.getBoundingClientRect(),
    r = n.top;
  return {
    x: n.left,
    y: r
  }
}

function s(e) {
  return {
    x: e.clientX,
    y: e.clientY
  }
}

function a(e, t, n, s, a) {
  var c, u, d, l, f, p, h, g, b, v = "IMG" === (c = t).nodeName && ((0, r.isFirefox)() || !(null !== (u = document.documentElement) && void 0 !== u && u.contains(c))),
    m = o(v ? e : t),
    y = {
      x: n.x - m.x,
      y: n.y - m.y
    },
    x = e.offsetWidth,
    w = e.offsetHeight,
    S = s.anchorX,
    k = s.anchorY;
  var _ = (d = v, l = t, f = x, p = w, h = d ? l.width : f, g = d ? l.height : p, (0, r.isSafari)() && d && (g /= window.devicePixelRatio, h /= window.devicePixelRatio), {
      dragPreviewWidth: h,
      dragPreviewHeight: g
    }),
    E = _.dragPreviewWidth,
    M = _.dragPreviewHeight,
    D = a.offsetX,
    C = a.offsetY;
  return {
    x: 0 === D || D ? D : new i.MonotonicInterpolant([0, .5, 1], [y.x, y.x / x * E, y.x + E - x]).interpolate(S),
    y: 0 === C || C ? C : (b = new i.MonotonicInterpolant([0, .5, 1], [y.y, y.y / w * M, y.y + M - w]).interpolate(k), (0, r.isSafari)() && v && (b += (window.devicePixelRatio - 1) * M), b)
  }
}