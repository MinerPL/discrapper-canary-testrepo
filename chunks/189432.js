"use strict";
n.d(t, {
  r: function() {
    return u
  }
});
var i = n(100527),
  r = n(6025),
  s = n(897473),
  o = n(545408),
  a = n(189357),
  l = n(50493);

function u(e, t, n) {
  var u, _, d;
  let c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
    modViewPanel: l.k.INFO
  };
  if (!(0, a.By)(e)) return Promise.resolve();
  let E = null !== (u = c.modViewPanel) && void 0 !== u ? u : l.k.INFO,
    I = null !== (_ = c.sourceLocation) && void 0 !== _ ? _ : i.Z.MEMBER_SAFETY_PAGE;
  return (0, o.q)(e, t, E, I), r.Z.openGuildSidebar({
    guildId: e,
    baseChannelId: n,
    sidebarType: s.jL.GUILD_MEMBER_MOD_VIEW,
    details: {
      type: s.Ff.GUILD_MEMBER_MOD_VIEW,
      userId: t,
      guildId: e,
      ...c,
      modViewPanel: null !== (d = c.modViewPanel) && void 0 !== d ? d : l.k.INFO
    }
  })
}