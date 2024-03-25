"use strict";
n.r(t), n.d(t, {
  TOGGLE_USERS: function() {
    return A
  }
});
var i = n("298386"),
  o = n("255397"),
  l = n("289867"),
  u = n("191145"),
  a = n("217513"),
  s = n("893980"),
  d = n("982108"),
  r = n("42203"),
  E = n("18494"),
  c = n("162771"),
  _ = n("49111");
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