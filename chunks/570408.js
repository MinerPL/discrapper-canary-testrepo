"use strict";
n.r(t), n.d(t, {
  FOCUS_SEARCH: function() {
    return l
  }
});
var i = n("585483"),
  o = n("981631");
let l = {
  binds: ["mod+f"],
  comboKeysBindGlobal: !0,
  action(e) {
    e.preventDefault(), e.stopPropagation(), i.ComponentDispatch.dispatch(o.ComponentActions.FOCUS_SEARCH, {
      prefillCurrentChannel: !0
    })
  }
}