"use strict";
n.d(t, {
  CO: function() {
    return c
  },
  Rz: function() {
    return I
  },
  S1: function() {
    return E
  },
  T_: function() {
    return a
  },
  al: function() {
    return l
  },
  dx: function() {
    return _
  },
  gH: function() {
    return d
  }
});
var i = n(392711),
  r = n(570140),
  s = n(228488),
  o = n(830917);

function a(e, t) {
  r.Z.dispatch({
    type: "WINDOW_FOCUS",
    windowId: (0, o.ZY)(e),
    focused: t
  })
}

function l(e) {
  r.Z.dispatch({
    type: "WINDOW_HIDDEN",
    windowId: (0, o.ZY)(e)
  })
}
let u = (0, i.memoize)(e => (0, i.debounce)((t, n) => {
  r.Z.dispatch({
    type: "WINDOW_RESIZED",
    windowId: e,
    width: t,
    height: n
  })
}, 100));

function _(e) {
  u((0, o.ZY)(e))(e.innerWidth, e.innerHeight)
}

function d(e) {
  let t = (0, o.ZY)(e);
  r.Z.dispatch({
    type: "WINDOW_FULLSCREEN_CHANGE",
    windowId: t,
    isElementFullscreen: (0, s.rB)(null, e.document)
  })
}

function c(e) {
  let t = (0, o.ZY)(e);
  r.Z.dispatch({
    type: "WINDOW_VISIBILITY_CHANGE",
    windowId: t,
    visible: "visible" === e.document.visibilityState
  })
}

function E(e) {
  let t = (0, o.ZY)(e),
    n = e.document;
  r.Z.dispatch({
    type: "WINDOW_INIT",
    windowId: t,
    isElementFullscreen: (0, s.rB)(null, n),
    focused: n.hasFocus(),
    width: e.innerWidth,
    height: e.innerHeight,
    visible: "visible" === n.visibilityState
  })
}

function I(e) {
  r.Z.dispatch({
    type: "WINDOW_UNLOAD",
    windowId: (0, o.ZY)(e)
  })
}