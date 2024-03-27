"use strict";
l.r(t), l.d(t, {
  openGuildMemberModViewSidebar: function() {
    return r
  }
});
var a = l("812204"),
  n = l("208021"),
  u = l("582713"),
  i = l("383606"),
  d = l("459824"),
  s = l("789150");

function r(e, t, l) {
  var r, o, c;
  let f = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
    modViewPanel: s.ModViewPanel.INFO
  };
  if (!(0, d.canAccessGuildMemberModViewWithExperiment)(e)) return Promise.resolve();
  let E = null !== (r = f.modViewPanel) && void 0 !== r ? r : s.ModViewPanel.INFO,
    M = null !== (o = f.sourceLocation) && void 0 !== o ? o : a.default.MEMBER_SAFETY_PAGE;
  return (0, i.trackModViewOpened)(e, t, E, M), n.default.openGuildSidebar({
    guildId: e,
    baseChannelId: l,
    sidebarType: u.GuildSidebarType.GUILD_MEMBER_MOD_VIEW,
    details: {
      type: u.SidebarOpenDetailsType.GUILD_MEMBER_MOD_VIEW,
      userId: t,
      guildId: e,
      ...f,
      modViewPanel: null !== (c = f.modViewPanel) && void 0 !== c ? c : s.ModViewPanel.INFO
    }
  })
}