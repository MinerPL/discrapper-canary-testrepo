"use strict";
n.r(t), n.d(t, {
  TOGGLE_INBOX_UNREADS_TAB: function() {
    return a
  },
  MARK_TOP_INBOX_CHANNEL_READ: function() {
    return s
  }
});
var i = n("917351"),
  o = n.n(i),
  l = n("659500"),
  u = n("49111");
let a = {
    binds: ["mod+i"],
    comboKeysBindGlobal: !0,
    action: () => (l.ComponentDispatch.dispatch(u.ComponentActions.TOGGLE_INBOX_UNREADS_TAB), !1)
  },
  s = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: o.debounce(() => {
      if (l.ComponentDispatch.hasSubscribers(u.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ)) return l.ComponentDispatch.dispatch(u.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ), !1
    }, 100, {
      leading: !0
    })
  }