"use strict";
n.r(t), n.d(t, {
  UPLOAD_FILE: function() {
    return a
  }
});
var i = n("592125"),
  o = n("944486"),
  l = n("585483"),
  u = n("981631");
let a = {
  binds: ["mod+shift+u"],
  comboKeysBindGlobal: !0,
  action() {
    let e = i.default.getChannel(o.default.getChannelId());
    return null != e && !e.isManaged() && l.ComponentDispatch.dispatch(u.ComponentActions.UPLOAD_FILE), !1
  }
}