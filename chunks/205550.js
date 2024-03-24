"use strict";
n.r(t), n.d(t, {
  useEligibleForGameRecommendations: function() {
    return d
  }
});
var l = n("446674"),
  a = n("161454"),
  s = n("350522"),
  i = n("546463");
n("926787");
var r = n("305961");
n("599110"), n("444497");
var o = n("895042"),
  u = n("49111");

function d() {
  let e = (0, l.useStateFromStores)([r.default], () => r.default.getGuildCount()),
    t = (0, l.useStateFromStores)([a.default, i.default], () => a.default.getGamesSeen(!1).filter(e => i.default.isGameInDatabase(e)).length, []),
    n = (0, l.useStateFromStores)([s.default], () => s.default.hasConsented(u.Consents.PERSONALIZATION)),
    {
      showRecs: d
    } = o.default.useExperiment({
      location: "e7214b_1"
    }, {
      autoTrackExposure: !1
    });
  return n && d && e < 4 && t >= 2
}
n("447621")