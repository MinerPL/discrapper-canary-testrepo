"use strict";
n.d(t, {
  B8: function() {
    return o
  },
  Jn: function() {
    return c
  },
  L_: function() {
    return d
  },
  Ym: function() {
    return u
  },
  g7: function() {
    return f
  },
  m4: function() {
    return s
  },
  sA: function() {
    return p
  },
  wb: function() {
    return l
  }
});
var r = "[-+]?\\d*\\.?\\d+",
  i = r + "%";

function a() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
}
var o = RegExp("rgb" + a(r, r, r)),
  s = RegExp("rgba" + a(r, r, r, r)),
  u = RegExp("hsl" + a(r, i, i)),
  c = RegExp("hsla" + a(r, i, i, r)),
  l = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  d = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  f = /^#([0-9a-fA-F]{6})$/,
  p = /^#([0-9a-fA-F]{8})$/