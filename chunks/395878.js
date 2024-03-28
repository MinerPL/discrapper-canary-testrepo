"use strict";
n.r(t), n.d(t, {
  CREATE_DM_GROUP: function() {
    return a
  }
});
var i = n("475468"),
  o = n("914010"),
  l = n("585483"),
  u = n("981631");
let a = {
  binds: ["mod+shift+t"],
  comboKeysBindGlobal: !0,
  action: () => (null != o.default.getGuildId() && (0, i.transitionToChannel)(u.ME), l.ComponentDispatch.safeDispatch(u.ComponentActions.TOGGLE_DM_CREATE), !1)
}