"use strict";
n.r(t), n.d(t, {
  hasPendingMemberAction: function() {
    return _
  }
}), n("702976");
var i = n("42203"),
  s = n("26989"),
  r = n("305961"),
  a = n("568734"),
  o = n("698882"),
  l = n("675305"),
  u = n("284683"),
  d = n("49111"),
  c = n("657944");

function _(e, t) {
  var n, _;
  let f = r.default.getGuild(e),
    E = i.default.getChannel(t);
  return null != f && null != E && (0, u.default)(f) && f.hasFeature(d.GuildFeatures.GUILD_SERVER_GUIDE) && !a.hasFlag(null !== (_ = null === (n = s.default.getSelfMember(f.id)) || void 0 === n ? void 0 : n.flags) && void 0 !== _ ? _ : 0, c.GuildMemberFlags.COMPLETED_HOME_ACTIONS) && o.default.hasMemberAction(f.id, E.id) && !l.default.hasCompletedActionForChannel(f.id, E.id)
}