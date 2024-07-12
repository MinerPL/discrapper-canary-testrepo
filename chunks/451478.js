n(47120);
var r, i, a, o, s = n(512722),
  l = n.n(s),
  u = n(442837),
  c = n(570140),
  d = n(830917);
let _ = null,
  E = new Map();

function f(e) {
  let t = E.get(e);
  return null == t ? (console.warn('Window state not initialized', e), {
isElementFullscreen: !1,
focused: !1,
windowSize: {
  width: 0,
  height: 0
},
visible: !1
  }) : t;
}
class h extends(r = u.ZP.Store) {
  isFocused() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, d.UU)();
return f(e).focused;
  }
  isVisible() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, d.UU)();
return f(e).visible;
  }
  getFocusedWindowId() {
let e = null;
return E.forEach((t, n) => {
  t.focused && (e = n);
}), e;
  }
  getLastFocusedWindowId() {
return _;
  }
  isElementFullScreen() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, d.UU)();
return f(e).isElementFullscreen;
  }
  windowSize() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, d.UU)();
return f(e).windowSize;
  }
}
o = 'WindowStore', (a = 'displayName') in(i = h) ? Object.defineProperty(i, a, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = o;
let p = new h(c.Z, {
  WINDOW_INIT: function(e) {
l()(!E.has(e.windowId), 'Window initialized multiple times');
let {
  width: t,
  height: n,
  isElementFullscreen: r,
  focused: i,
  visible: a
} = e;
return E.set(e.windowId, {
  windowSize: {
    width: t,
    height: n
  },
  isElementFullscreen: r,
  focused: i,
  visible: a
}), i && (_ = e.windowId), !0;
  },
  WINDOW_FULLSCREEN_CHANGE: function(e) {
let t = f(e.windowId);
return t.isElementFullscreen !== e.isElementFullscreen && (E.set(e.windowId, {
  ...t,
  isElementFullscreen: e.isElementFullscreen
}), !0);
  },
  WINDOW_FOCUS: function(e) {
let t = f(e.windowId);
return t.focused !== e.focused && (e.focused && (_ = e.windowId), E.set(e.windowId, {
  ...t,
  focused: e.focused
}), !0);
  },
  WINDOW_RESIZED: function(e) {
let t = f(e.windowId);
return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (E.set(e.windowId, {
  ...t,
  windowSize: {
    width: e.width,
    height: e.height
  }
}), !0);
  },
  WINDOW_UNLOAD: function(e) {
return E.delete(e.windowId), _ === e.windowId && (_ = null), !0;
  },
  WINDOW_VISIBILITY_CHANGE: function(e) {
let t = f(e.windowId);
return t.visible !== e.visible && (E.set(e.windowId, {
  ...t,
  visible: e.visible
}), !0);
  }
});
Promise.resolve().then(n.bind(n, 626135)).then(e => {
  let {
addExtraAnalyticsDecorator: t
  } = e;
  t(e => {
e.client_app_state = p.isFocused() ? 'focused' : 'unfocused';
  });
}), t.Z = p;