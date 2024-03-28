"use strict";
n.r(t), n.d(t, {
  getActivitiesWhatsNewCount: function() {
    return c
  },
  useActivitiesWhatsNewCount: function() {
    return d
  }
});
var a = n("442837"),
  s = n("507885"),
  l = n("379146"),
  i = n("273003"),
  r = n("754332"),
  o = n("140863"),
  u = n("701488");

function d() {
  return (0, a.useStateFromStores)([s.default], () => c(s.default))
}

function c(e) {
  let t = 0,
    n = e.getAcknowledged();
  return l.ExperimentBirthdayActivitiesGdmTile.getCurrentConfig({
    location: "1d9280_2"
  }).enabled && !n.has(u.WhatsNewSection.GDM_ACTIVITIES) && t++, o.ExperimentBirthdayActivitiesPuttPartyTile.getCurrentConfig({
    location: "1d9280_3"
  }).enabled && !n.has(u.WhatsNewSection.PUTT_PARTY) && t++, i.ExperimentBirthdayActivitiesJamspaceTile.getCurrentConfig({
    location: "1d9280_4"
  }).enabled && !n.has(u.WhatsNewSection.JAMSPACE) && t++, r.ExperimentBirthdayActivitiesPokerTile.getCurrentConfig({
    location: "1d9280_5"
  }).enabled && !n.has(u.WhatsNewSection.POKER) && t++, !n.has(u.WhatsNewSection.DISCORD_TURNS_8) && t <= 0 && t++, t
}