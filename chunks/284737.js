n.d(t, {
  CO: function() {
return _;
  },
  Rz: function() {
return f;
  },
  S1: function() {
return E;
  },
  T_: function() {
return o;
  },
  al: function() {
return l;
  },
  dx: function() {
return c;
  },
  gH: function() {
return d;
  }
});
var r = n(392711),
  i = n(570140),
  a = n(228488),
  s = n(830917);

function o(e, t) {
  i.Z.dispatch({
type: 'WINDOW_FOCUS',
windowId: (0, s.ZY)(e),
focused: t
  });
}

function l(e) {
  i.Z.dispatch({
type: 'WINDOW_HIDDEN',
windowId: (0, s.ZY)(e)
  });
}
let u = (0, r.memoize)(e => (0, r.debounce)((t, n) => {
  i.Z.dispatch({
type: 'WINDOW_RESIZED',
windowId: e,
width: t,
height: n
  });
}, 100));

function c(e) {
  u((0, s.ZY)(e))(e.innerWidth, e.innerHeight);
}

function d(e) {
  let t = (0, s.ZY)(e);
  i.Z.dispatch({
type: 'WINDOW_FULLSCREEN_CHANGE',
windowId: t,
isElementFullscreen: (0, a.rB)(null, e.document)
  });
}

function _(e) {
  let t = (0, s.ZY)(e);
  i.Z.dispatch({
type: 'WINDOW_VISIBILITY_CHANGE',
windowId: t,
visible: 'visible' === e.document.visibilityState
  });
}

function E(e) {
  let t = (0, s.ZY)(e),
n = e.document;
  i.Z.dispatch({
type: 'WINDOW_INIT',
windowId: t,
isElementFullscreen: (0, a.rB)(null, n),
focused: n.hasFocus(),
width: e.innerWidth,
height: e.innerHeight,
visible: 'visible' === n.visibilityState
  });
}

function f(e) {
  i.Z.dispatch({
type: 'WINDOW_UNLOAD',
windowId: (0, s.ZY)(e)
  });
}