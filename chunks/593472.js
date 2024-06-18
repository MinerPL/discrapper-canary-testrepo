"use strict";
var i, r, s, o;
n.d(t, {
  Jx: function() {
    return r
  },
  SR: function() {
    return i
  },
  r: function() {
    return a
  }
}), (s = i || (i = {})).ANIMATED = "ANIMATED", s.INSTANT = "INSTANT", (o = r || (r = {}))[o.UNKNOWN = 0] = "UNKNOWN", o[o.WINDOWED = 1] = "WINDOWED", o[o.MAXIMIZED = 2] = "MAXIMIZED", o[o.BORDERLESS_FULLSCREEN = 3] = "BORDERLESS_FULLSCREEN", o[o.FULLSCREEN = 4] = "FULLSCREEN", o[o.MINIMIZED = 5] = "MINIMIZED";
let a = {
  compatibilityHook: !1,
  warn: !1,
  enabled: !1,
  allowHook: !0,
  supportsOutOfProcessOverlay: !1
}