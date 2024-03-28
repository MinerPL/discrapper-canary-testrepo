"use strict";
n.r(t), n.d(t, {
  TOGGLE_USERS: function() {
    return A
  }
});
var i = n("106351"),
  o = n("475179"),
  l = n("816782"),
  u = n("358221"),
  a = n("318661"),
  s = n("57048"),
  d = n("433355"),
  r = n("592125"),
  E = n("944486"),
  c = n("914010"),
  _ = n("981631");
let A = {
  binds: ["mod+u"],
  comboKeysBindGlobal: !0,
  action() {
    let e = c.default.getGuildId(),
      t = E.default.getChannelId(e),
      n = r.default.getChannel(t);
    if (null != t && null != n && n.type === i.ChannelTypes.GUILD_VOICE) return o.default.updateChatOpen(t, !u.default.getChatOpen(t)), !1;
    if (null != t && null != n && n.type === i.ChannelTypes.DM) {
      let e = d.default.getSection(t, null == n ? void 0 : n.isDM()),
        i = (0, a.getDisplayProfile)(n.getRecipientId()),
        o = e === _.ChannelSections.PROFILE;
      return (0, s.trackProfilePanelToggled)(i, !o), l.default.toggleProfilePanelSection(), !1
    }
    return l.default.toggleMembersSection(), !1
  }
}