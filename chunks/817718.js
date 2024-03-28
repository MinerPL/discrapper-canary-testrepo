"use strict";
n.r(e), n.d(e, {
  CAROUSEL_NEXT: function() {
    return l
  },
  CAROUSEL_PREV: function() {
    return c
  },
  MODAL_CAROUSEL_CLOSE: function() {
    return p
  },
  MODAL_CAROUSEL_NEXT: function() {
    return u
  },
  MODAL_CAROUSEL_PREV: function() {
    return d
  }
});
var o = n("481060"),
  s = n("819640"),
  i = n("585483"),
  r = n("981631");
let a = () => s.default.hasLayers() || (0, o.hasAnyModalOpen)(),
  l = {
    binds: ["right"],
    comboKeysBindGlobal: !0,
    action() {
      if (!a()) return i.ComponentDispatch.dispatch(r.ComponentActions.CAROUSEL_NEXT), !1
    }
  },
  c = {
    binds: ["left"],
    comboKeysBindGlobal: !0,
    action() {
      if (!a()) return i.ComponentDispatch.dispatch(r.ComponentActions.CAROUSEL_PREV), !1
    }
  },
  u = {
    binds: ["right", "down", "space"],
    comboKeysBindGlobal: !0,
    action: () => (i.ComponentDispatch.dispatch(r.ComponentActions.MODAL_CAROUSEL_NEXT), !1)
  },
  d = {
    binds: ["left", "up"],
    comboKeysBindGlobal: !0,
    action: () => (i.ComponentDispatch.dispatch(r.ComponentActions.MODAL_CAROUSEL_PREV), !1)
  },
  p = {
    binds: ["esc"],
    comboKeysBindGlobal: !0,
    action() {
      if (i.ComponentDispatch.hasSubscribers(r.ComponentActions.MODAL_CLOSE)) return i.ComponentDispatch.dispatch(r.ComponentActions.MODAL_CLOSE), !1
    }
  }