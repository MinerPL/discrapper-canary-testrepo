"use strict";
n.r(t), n.d(t, {
  MARK_TOP_INBOX_CHANNEL_READ: function() {
    return s
  },
  TOGGLE_INBOX_UNREADS_TAB: function() {
    return a
  }
});
var i = n("392711"),
  o = n.n(i),
  l = n("585483"),
  u = n("981631");
let a = {
    binds: ["mod+i"],
    comboKeysBindGlobal: !0,
    action: () => (l.ComponentDispatch.dispatch(u.ComponentActions.TOGGLE_INBOX_UNREADS_TAB), !1)
  },
  s = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: o().debounce(() => {
      if (l.ComponentDispatch.hasSubscribers(u.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ)) return l.ComponentDispatch.dispatch(u.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ), !1
    }, 100, {
      leading: !0
    })
  }