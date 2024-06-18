"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(924826),
  r = n(442837),
  s = n(607070);

function o() {
  return Promise.resolve()
}

function a(e) {
  let t = document.querySelector(e);
  null != t && t.focus()
}

function l(e, t) {
  let n = (0, r.e7)([s.Z], () => s.Z.keyboardModeEnabled);
  return (0, i.ZP)({
    id: e,
    isEnabled: n,
    orientation: t,
    setFocus: a,
    scrollToStart: o,
    scrollToEnd: o
  })
}