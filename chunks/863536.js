"use strict";
n.r(t), n.d(t, {
  CREATE_DM_GROUP: function() {
    return a
  }
});
var i = n("722525"),
  o = n("162771"),
  l = n("659500"),
  u = n("49111");
let a = {
  binds: ["mod+shift+t"],
  comboKeysBindGlobal: !0,
  action: () => (null != o.default.getGuildId() && (0, i.transitionToChannel)(u.ME), l.ComponentDispatch.safeDispatch(u.ComponentActions.TOGGLE_DM_CREATE), !1)
}