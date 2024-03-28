"use strict";
n.r(t), n.d(t, {
  JUMP_TO_CURRENT_CALL: function() {
    return u
  }
});
var i = n("475468"),
  o = n("19780"),
  l = n("981631");
let u = {
  binds: ["mod+shift+alt+v"],
  comboKeysBindGlobal: !0,
  action(e) {
    e.preventDefault(), e.stopPropagation();
    let t = o.default.getGuildId(),
      n = o.default.getChannelId();
    return null != n && (0, i.transitionToChannel)(null != t ? t : l.ME, n), !1
  }
}