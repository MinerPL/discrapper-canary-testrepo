"use strict";
a.r(t), a.d(t, {
  useDefaultGameIdForClan: function() {
    return o
  }
});
var n = a("442837"),
  r = a("430824"),
  s = a("963202"),
  i = a("308083"),
  l = a("981631");

function o(e, t) {
  var a, o;
  let c = (0, n.useStateFromStores)([r.default], () => r.default.getGuild(e));
  let d = null != (o = c) && o.hasFeature(l.GuildFeatures.CLAN) ? o.hasFeature(l.GuildFeatures.CLAN_PILOT_VALORANT) ? i.VALORANT_ID : o.hasFeature(l.GuildFeatures.CLAN_PILOT_GENSHIN) ? i.GENSHIN_ID : null : null,
    {
      defaultGameId: u
    } = (0, s.useClanPrepilotExperimentForGuild)({
      guild: c,
      location: t,
      includeConverted: !1
    });
  return null !== (a = null != d ? d : u) && void 0 !== a ? a : i.GENSHIN_ID
}