"use strict";
n.r(t), n.d(t, {
  clearCanvas: function() {
    return d
  },
  getMouseCoordinatesPercent: function() {
    return c
  },
  getUserColors: function() {
    return p
  },
  isLine: function() {
    return m
  },
  normalizeCoordinate: function() {
    return f
  },
  normalizeCoordinates: function() {
    return h
  }
});
var a = n("979590"),
  l = n.n(a),
  s = n("866442"),
  i = n("220082"),
  r = n("594174"),
  o = n("292793"),
  u = n("813900");

function d(e) {
  let t = e.current,
    n = null == t ? void 0 : t.getContext("2d");
  null != t && null != n && n.clearRect(0, 0, t.width, t.height)
}

function c(e, t) {
  let {
    width: n,
    height: a,
    left: l,
    top: s
  } = e.getBoundingClientRect(), i = (t.clientX - l) / n;
  return {
    x: i,
    y: (t.clientY - s) / a
  }
}

function f(e, t) {
  return Math.round(e * t * window.devicePixelRatio)
}

function h(e, t, n) {
  return {
    x: f(e.x, t),
    y: f(e.y, n),
    deltaTime: e.deltaTime
  }
}

function m(e) {
  return e.type === o.DrawableType.LINE
}

function p(e, t, n, a) {
  var o;
  let d = r.default.getUser(e),
    c = null == d ? void 0 : d.getAvatarURL(null, u.AVATAR_COLOR_AVATAR_SIZE),
    f = null != c ? null === (o = i.useColorStore.getState().palette[c]) || void 0 === o ? void 0 : o[0] : null,
    h = null != f ? "#".concat(l()({
      r: f[0],
      g: f[1],
      b: f[2]
    }).toHex()) : a,
    m = (0, s.getDarkness)((0, s.hex2int)(h)) > .5 ? n : t;
  return {
    fillColor: h,
    outlineColor: m
  }
}