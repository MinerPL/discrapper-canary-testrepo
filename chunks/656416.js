"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
});
var a = s("37983"),
  l = s("884691"),
  i = s("446674"),
  o = s("77078"),
  r = s("463848"),
  n = s("373469"),
  u = s("824563"),
  c = s("756507"),
  d = s("4462"),
  f = s("765698"),
  S = s("453649"),
  m = s("49111"),
  E = s("251300"),
  T = s("155502");

function p(e) {
  let {
    user: t
  } = e, s = (0, i.useStateFromStores)([n.default], () => null != n.default.getAnyStreamForUser(t.id)), p = (0, i.useStateFromStores)([u.default], () => u.default.getActivities(t.id)), N = l.useMemo(() => p.filter(e => e.type !== m.ActivityTypes.CUSTOM_STATUS), [p]), _ = p.some(e => e.type === m.ActivityTypes.HANG_STATUS), A = l.useMemo(() => s ? N.find(e => e.type === m.ActivityTypes.PLAYING) : null, [N, s]), I = l.useMemo(() => N.filter(e => e !== A), [A, N]), v = (0, S.useGetVoiceChannelInfoForVoiceActivitySection)(t.id), x = null != v && !s && !_, {
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
      activity: A,
      actionColor: E.actionColor,
      analyticsParams: y,
      onAction: () => {
        h({
          action: "JOIN_ACTIVITY"
        }), (0, d.trackUserProfileActivityJoined)({
          activityType: null == A ? void 0 : A.type,
          applicationId: null == A ? void 0 : A.application_id,
          ...C
        })
      }
    }) : null, I.map(e => (0, a.jsx)(r.default, {
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