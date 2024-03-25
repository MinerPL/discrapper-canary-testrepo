"use strict";
n.r(t), n.d(t, {
  ZOOM_IN: function() {
    return a
  },
  ZOOM_OUT: function() {
    return s
  },
  ZOOM_RESET: function() {
    return d
  },
  default: function() {
    return r
  }
});
var i = n("180748"),
  o = n("206230"),
  l = n("49111");

function u(e) {
  return l.Accessibility.ZOOM_SCALES[Math.max(0, Math.min(l.Accessibility.ZOOM_SCALES.indexOf(o.default.zoom) + e, l.Accessibility.ZOOM_SCALES.length - 1))]
}
let a = {
    binds: ["mod+plus"],
    comboKeysBindGlobal: !0,
    action: () => ((0, i.setZoom)(u(1)), !1)
  },
  s = {
    binds: ["mod+minus"],
    comboKeysBindGlobal: !0,
    action: () => ((0, i.setZoom)(u(-1)), !1)
  },
  d = {
    binds: ["mod+0"],
    comboKeysBindGlobal: !0,
    action: () => ((0, i.setZoom)(l.Accessibility.ZOOM_DEFAULT), !1)
  };
var r = {
  ZOOM_IN: a,
  ZOOM_OUT: s,
  ZOOM_RESET: d
}