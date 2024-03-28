"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("653041");
var l = n("467138"),
  a = n("496675"),
  s = n("443063"),
  i = n("981631");

function r(e) {
  let t = (0, l.useIsMemberVerificationManualApproval)(e.id),
    n = null != e && t && a.default.can(i.Permissions.KICK_MEMBERS, e);
  if (!e.hasFeature(i.GuildFeatures.CLAN)) return [];
  let r = [];
  return n && r.push(s.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS), r
}