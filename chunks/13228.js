"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("442837"),
  s = n("594190"),
  l = n("836157"),
  i = n("480294"),
  r = n("131951"),
  o = n("924557"),
  u = n("435064"),
  d = n("779618"),
  c = n("356659"),
  f = n("981631");

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
    if (!(null != e && (0, o.isUserPremiumTypeForClipsEarlyAccess)(e))) return !1;
    let C = Date.now() - a > c.CLIPS_EDUCATION_COOLDOWN,
      m = l >= c.CLIPS_EDUCATION_GAME_LAUNCH_THRESHOLD,
      S = _ ? c.CLIPS_EDUCATION_MAX_DISMISSALS_ENABLED : c.CLIPS_EDUCATION_MAX_DISMISSALS_DISABLED;
    return C && m && E < S && !h
  })
}