"use strict";
n.d(t, {
  Q1: function() {
    return l
  },
  hV: function() {
    return u
  },
  ky: function() {
    return a
  }
});
var i = n(895924),
  r = n(809090),
  s = n(944877),
  o = n(689079);
let a = e => e.type === i.Qi.BUILT_IN ? s.Z : r.Z;

function l(e) {
  return "".concat(e / 16, "rem")
}

function u(e, t) {
  let n = t,
    i = !1,
    r = t.indexOf(":");
  if (r >= 0) {
    let e = t.lastIndexOf(" ", r);
    e >= 0 ? (t = t.substring(0, e), i = !0) : t = t.substring(0, r)
  } else t = t.substring(0, t.length);
  let s = t.split(" ", o.Vd + 1);
  return s.length > o.Vd && (i = !0, s.pop()), t = s.join(" "), (n.length > t.length || t.endsWith(" ")) && (i = !0, t = t.trimEnd()), {
    text: t,
    parts: s,
    hasSpaceTerminator: i
  }
}