"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  o = s("481060"),
  r = s("717881"),
  n = s("199902"),
  u = s("158776"),
  c = s("785717"),
  d = s("221292"),
  f = s("895618"),
  S = s("58307"),
  m = s("981631"),
  E = s("970903"),
  T = s("521170");

function N(e) {
  let {
    user: t
  } = e, s = (0, i.useStateFromStores)([n.default], () => null != n.default.getAnyStreamForUser(t.id)), N = (0, i.useStateFromStores)([u.default], () => u.default.getActivities(t.id)), p = l.useMemo(() => N.filter(e => e.type !== m.ActivityTypes.CUSTOM_STATUS), [N]), _ = N.some(e => e.type === m.ActivityTypes.HANG_STATUS), I = l.useMemo(() => s ? p.find(e => e.type === m.ActivityTypes.PLAYING) : null, [p, s]), A = l.useMemo(() => p.filter(e => e !== I), [I, p]), v = (0, S.useGetVoiceChannelInfoForVoiceActivitySection)(t.id), x = null != v && !s && !_, {
    showVoiceActivityInProfile: U
  } = f.VoiceActivityProfileExperiment.useExperiment({
    location: "user profile modal"
  }, {
    autoTrackExposure: x
  }), {
    trackUserProfileAction: h,
    ...C
  } = (0, c.useUserProfileAnalyticsContext)(), y = {
    location: {
      page: m.AnalyticsPages.USER_PROFILE,
      section: m.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, a.jsxs)(o.ScrollerThin, {
    className: T.listScroller,
    fade: !0,
    children: [U && x ? (0, a.jsx)("div", {
      className: E.voiceActivity,
      children: (0, a.jsx)(S.default, {
        ...v,
        color: E.actionColor
      })
    }) : null, s ? (0, a.jsx)(r.default, {
      type: r.UserActivityTypes.PROFILE_V2,
      user: t,
      source: "Profile Modal",
      className: E.userProfileActivity,
      activity: I,
      actionColor: E.actionColor,
      analyticsParams: y,
      onAction: () => {
        h({
          action: "JOIN_ACTIVITY"
        }), (0, d.trackUserProfileActivityJoined)({
          activityType: null == I ? void 0 : I.type,
          applicationId: null == I ? void 0 : I.application_id,
          ...C
        })
      }
    }) : null, A.map(e => (0, a.jsx)(r.default, {
      type: r.UserActivityTypes.PROFILE_V2,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: "Profile Modal",
      className: E.userProfileActivity,
      actionColor: E.actionColor,
      analyticsParams: y,
      onAction: () => {
        h({
          action: "JOIN_ACTIVITY"
        }), (0, d.trackUserProfileActivityJoined)({
          activityType: e.type,
          applicationId: e.application_id,
          ...C
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}