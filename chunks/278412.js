"use strict";
n.r(t), n.d(t, {
  MARK_SERVER_READ: function() {
    return E
  }
});
var i = n("819689"),
  o = n("542827"),
  l = n("952451"),
  u = n("377253"),
  a = n("18494"),
  s = n("162771"),
  d = n("659500"),
  r = n("49111");
let E = {
  binds: ["shift+esc"],
  comboKeysBindGlobal: !0,
  action() {
    let e = s.default.getGuildId();
    if (null == e || !l.default.getGuildHasUnreadIgnoreMuted(e)) return;
    (0, o.default)([e]);
    let t = a.default.getChannelId(e);
    if (null == t) return;
    let n = u.default.getMessages(t);
    n.hasMoreAfter ? i.default.jumpToPresent(t, r.MAX_MESSAGES_PER_CHANNEL) : d.ComponentDispatch.dispatch(r.ComponentActions.SCROLLTO_PRESENT)
  }
}