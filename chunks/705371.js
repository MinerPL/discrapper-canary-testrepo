"use strict";
n.r(t), n.d(t, {
  MARK_SERVER_READ: function() {
    return E
  }
});
var i = n("904245"),
  o = n("181945"),
  l = n("888369"),
  u = n("375954"),
  a = n("944486"),
  s = n("914010"),
  d = n("585483"),
  r = n("981631");
let E = {
  binds: ["shift+esc"],
  comboKeysBindGlobal: !0,
  action() {
    let e = s.default.getGuildId();
    if (null == e || !l.default.getGuildHasUnreadIgnoreMuted(e)) return;
    (0, o.default)([e]);
    let t = a.default.getChannelId(e);
    if (null != t) u.default.getMessages(t).hasMoreAfter ? i.default.jumpToPresent(t, r.MAX_MESSAGES_PER_CHANNEL) : d.ComponentDispatch.dispatch(r.ComponentActions.SCROLLTO_PRESENT)
  }
}