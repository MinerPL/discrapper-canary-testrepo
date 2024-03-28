"use strict";
n.r(t), n.d(t, {
  useEligibleForGameRecommendations: function() {
    return d
  }
});
var l = n("442837"),
  a = n("594190"),
  s = n("480294"),
  i = n("77498");
n("683301");
var r = n("430824");
n("626135"), n("440190");
var o = n("645257"),
  u = n("981631");

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
n("731455")