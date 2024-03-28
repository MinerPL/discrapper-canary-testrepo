"use strict";
n.r(t), n.d(t, {
  CALL_ACCEPT: function() {
    return l
  },
  CALL_START: function() {
    return u
  }
});
var i = n("585483"),
  o = n("981631");
let l = {
    binds: ["mod+return"],
    comboKeysBindGlobal: !0,
    action() {
      if (i.ComponentDispatch.hasSubscribers(o.ComponentActions.CALL_ACCEPT)) return i.ComponentDispatch.dispatch(o.ComponentActions.CALL_ACCEPT), !1
    }
  },
  u = {
    binds: ["ctrl+'", "ctrl+shift+'"],
    comboKeysBindGlobal: !0,
    action(e) {
      if (i.ComponentDispatch.hasSubscribers(o.ComponentActions.CALL_START)) return i.ComponentDispatch.dispatch(o.ComponentActions.CALL_START, e), !1
    }
  }