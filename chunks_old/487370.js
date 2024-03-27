"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("424973");
var l = n("520141"),
  a = n("957255"),
  s = n("796618"),
  i = n("49111");

function r(e) {
  let t = (0, l.useIsMemberVerificationManualApproval)(e.id),
    n = null != e && t && a.default.can(i.Permissions.KICK_MEMBERS, e);
  if (!e.hasFeature(i.GuildFeatures.CLAN)) return [];
  let r = [];
  return n && r.push(s.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS), r
}