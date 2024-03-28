"use strict";
n.r(t), n.d(t, {
  SCROLL_DOWN: function() {
    return u
  },
  SCROLL_UP: function() {
    return l
  }
});
var i = n("585483"),
  o = n("981631");
let l = {
    binds: ["pageup"],
    comboKeysBindGlobal: !0,
    action: () => (i.ComponentDispatch.dispatchToLastSubscribed(o.ComponentActions.SCROLL_PAGE_UP), !1)
  },
  u = {
    binds: ["pagedown"],
    comboKeysBindGlobal: !0,
    action: () => (i.ComponentDispatch.dispatchToLastSubscribed(o.ComponentActions.SCROLL_PAGE_DOWN), !1)
  }