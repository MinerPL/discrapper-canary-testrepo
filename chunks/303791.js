"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("446674"),
  s = n("161454"),
  l = n("584687"),
  i = n("350522"),
  r = n("42887"),
  o = n("56947"),
  u = n("386045"),
  d = n("18346"),
  c = n("80028"),
  f = n("49111");

function E(e) {
  let t = (0, o.useShouldSeeClipsPremiumEarlyAccessAnnouncementCoachmark)({
      autoTrackExposure: !0
    }),
    {
      enableDecoupledGameClipping: n
    } = l.default.useExperiment({
      location: "useShouldDisplayClipsGuildSidebarEducation"
    }, {
      autoTrackExposure: !1
    });
  return (0, a.useStateFromStores)([u.default, s.default, i.default, r.default], () => {
    if (!(0, d.default)(r.default) || !t || !n) return !1;
    if (null != u.default.getLastClipsError()) return !0;
    if (!i.default.hasConsented(f.Consents.PERSONALIZATION) || null == s.default.getVisibleGame()) return !1;
    let {
      clipsEducationState: {
        dismissedAt: a,
        numberOfGamesLaunchedSinceDismissal: l,
        numberOfTimesDismissed: E
      },
      hasTakenDecoupledClip: h,
      clipsSettings: {
        clipsEnabled: _
      }
    } = u.default.getState();
    if (null === a) return !0;
    let C = null != e && (0, o.isUserPremiumTypeForClipsEarlyAccess)(e);
    if (!C) return !1;
    let S = Date.now() - a > c.CLIPS_EDUCATION_COOLDOWN,
      I = l >= c.CLIPS_EDUCATION_GAME_LAUNCH_THRESHOLD,
      m = _ ? c.CLIPS_EDUCATION_MAX_DISMISSALS_ENABLED : c.CLIPS_EDUCATION_MAX_DISMISSALS_DISABLED;
    return S && I && E < m && !h
  })
}