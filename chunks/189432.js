"use strict";
n.r(t), n.d(t, {
  openGuildMemberModViewSidebar: function() {
    return r
  }
});
var l = n("100527"),
  i = n("6025"),
  a = n("897473"),
  d = n("545408"),
  u = n("189357"),
  s = n("50493");

function r(e, t, n) {
  var r, o, c;
  let p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
    modViewPanel: s.ModViewPanel.INFO
  };
  if (!(0, u.canAccessGuildMemberModViewWithExperiment)(e)) return Promise.resolve();
  let E = null !== (r = p.modViewPanel) && void 0 !== r ? r : s.ModViewPanel.INFO,
    f = null !== (o = p.sourceLocation) && void 0 !== o ? o : l.default.MEMBER_SAFETY_PAGE;
  return (0, d.trackModViewOpened)(e, t, E, f), i.default.openGuildSidebar({
    guildId: e,
    baseChannelId: n,
    sidebarType: a.GuildSidebarType.GUILD_MEMBER_MOD_VIEW,
    details: {
      type: a.SidebarOpenDetailsType.GUILD_MEMBER_MOD_VIEW,
      userId: t,
      guildId: e,
      ...p,
      modViewPanel: null !== (c = p.modViewPanel) && void 0 !== c ? c : s.ModViewPanel.INFO
    }
  })
}