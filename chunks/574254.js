"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(585483),
  _ = n(981631);
let d = null,
  c = 0;

function E() {
  d = null
}
class I extends(o = a.ZP.Store) {
  isOpen() {
    return null != d
  }
  get version() {
    return c
  }
  getContextMenu() {
    return d
  }
  close() {
    return !!this.isOpen() && (u.S.dispatch(_.CkL.CONTEXT_MENU_CLOSE), !0)
  }
}
s = "ContextMenuStore", (r = "displayName") in(i = I) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new I(l.Z, {
  CONTEXT_MENU_OPEN: function(e) {
    let {
      contextMenu: t
    } = e;
    c++, d = t
  },
  LAYER_PUSH: E,
  CONTEXT_MENU_CLOSE: E,
  OVERLAY_SET_UI_LOCKED: E,
  OVERLAY_DEACTIVATE_ALL_REGIONS: E
})