"use strict";
n.r(t), n.d(t, {
  SUBMIT: function() {
    return u
  }
});
var i = n("607070"),
  o = n("585483"),
  l = n("981631");
let u = {
  binds: ["return"],
  action() {
    if (!i.default.keyboardModeEnabled && o.ComponentDispatch.hasSubscribers(l.ComponentActions.MODAL_SUBMIT)) return o.ComponentDispatch.dispatch(l.ComponentActions.MODAL_SUBMIT), !1
  }
}