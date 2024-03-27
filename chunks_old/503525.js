"use strict";
n.r(t), n.d(t, {
  useActivitiesWhatsNewCount: function() {
    return d
  },
  getActivitiesWhatsNewCount: function() {
    return c
  }
});
var a = n("446674"),
  s = n("992204"),
  l = n("334788"),
  i = n("891654"),
  r = n("885412"),
  o = n("629388"),
  u = n("954016");

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