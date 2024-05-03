"use strict";
n.r(t), n.d(t, {
  useGuildsEligibleForClanConversion: function() {
    return c
  }
}), n("47120");
var a = n("392711"),
  s = n.n(a),
  l = n("442837"),
  i = n("963202"),
  r = n("430824"),
  o = n("496675"),
  u = n("981631"),
  d = n("231338");

function c() {
  return (0, l.useStateFromStoresArray)([o.default, r.default], () => s()(r.default.getGuilds()).values().filter(e => !e.hasFeature(u.GuildFeatures.CLAN) && o.default.can(d.Permissions.ADMINISTRATOR, e) && (0, i.isClanPrepilotExperimentEnabled)(e, "useEligibleGuildsForClans")).value())
}