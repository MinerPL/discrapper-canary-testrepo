"use strict";
n.d(t, {
  K5: function() {
    return o
  },
  g2: function() {
    return a
  },
  rK: function() {
    return s
  }
});
var r = n(868635),
  i = n(816383);

function a(e) {
  var t = 1 === e.nodeType ? e : e.parentElement;
  if (!t) return null;
  var n = t.getBoundingClientRect(),
    r = n.top;
  return {
    x: n.left,
    y: r
  }
}

function o(e) {
  return {
    x: e.clientX,
    y: e.clientY
  }
}

function s(e, t, n, o, s) {
  var u, c, l, d, f, p, h, m, g, _ = "IMG" === (u = t).nodeName && ((0, r.v)() || !(null !== (c = document.documentElement) && void 0 !== c && c.contains(u))),
    b = a(_ ? e : t),
    v = {
      x: n.x - b.x,
      y: n.y - b.y
    },
    y = e.offsetWidth,
    E = e.offsetHeight,
    S = o.anchorX,
    x = o.anchorY;
  var w = (l = _, d = t, f = y, p = E, h = l ? d.width : f, m = l ? d.height : p, (0, r.G)() && l && (m /= window.devicePixelRatio, h /= window.devicePixelRatio), {
      dragPreviewWidth: h,
      dragPreviewHeight: m
    }),
    C = w.dragPreviewWidth,
    T = w.dragPreviewHeight,
    D = s.offsetX,
    M = s.offsetY;
  return {
    x: 0 === D || D ? D : new i.I([0, .5, 1], [v.x, v.x / y * C, v.x + C - y]).interpolate(S),
    y: 0 === M || M ? M : (g = new i.I([0, .5, 1], [v.y, v.y / E * T, v.y + T - E]).interpolate(x), (0, r.G)() && _ && (g += (window.devicePixelRatio - 1) * T), g)
  }
}