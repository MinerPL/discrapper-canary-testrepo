"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("65597"),
  i = n("708730"),
  a = n("305961"),
  s = n("354023"),
  r = n("49111");

function o(e) {
  let t = (0, l.default)([a.default], () => a.default.getGuild(e), [e]),
    n = (0, i.useIsInGrowingFriendGuildCommunityUpsellExperiment)(e),
    o = s.default.getMaxAgeOptions;
  return !n || (null == t ? void 0 : t.hasFeature(r.GuildFeatures.COMMUNITY)) ? o.filter(e => (null == e ? void 0 : e.value) !== s.default.INVITE_OPTIONS_30_DAYS.value) : o
}