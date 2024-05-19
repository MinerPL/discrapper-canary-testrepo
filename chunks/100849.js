"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
  }
});
var l = s("735250"),
  a = s("470079"),
  i = s("442837"),
  n = s("481060"),
  r = s("717881"),
  o = s("906732"),
  u = s("199902"),
  d = s("158776"),
  c = s("543595"),
  f = s("785717"),
  S = s("221292"),
  m = s("981631"),
  E = s("886140"),
  I = s("305944");

function v(e) {
  let {
    user: t,
    type: s
  } = e, v = (0, i.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), _ = (0, i.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), T = a.useMemo(() => _.filter(e => e.type !== m.ActivityTypes.CUSTOM_STATUS), [_]), g = a.useMemo(() => v ? T.find(e => e.type === m.ActivityTypes.PLAYING) : null, [T, v]), A = a.useMemo(() => T.filter(e => e !== g), [g, T]), {
    analyticsLocations: x,
    newestAnalyticsLocation: U
  } = (0, o.default)(), {
    trackUserProfileAction: N,
    ...p
  } = (0, f.useUserProfileAnalyticsContext)(), C = {
    location: {
      page: m.AnalyticsPages.USER_PROFILE,
      section: m.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, l.jsxs)(n.ScrollerThin, {
    className: I.listScroller,
    fade: !0,
    children: [v ? (0, l.jsx)(r.default, {
      type: s,
      user: t,
      source: U,
      className: E.userProfileActivity,
      hideHeader: s === c.Types.SIMPLIFIED_PROFILE,
      showChannelDetails: s === c.Types.SIMPLIFIED_PROFILE,
      activity: g,
      actionColor: E.actionColor,
      analyticsParams: C,
      onAction: () => {
        N({
          action: "JOIN_ACTIVITY"
        }), (0, S.trackUserProfileActivityJoined)({
          activityType: m.ActivityTypes.STREAMING,
          activityName: null == g ? void 0 : g.name,
          activityPlatform: null == g ? void 0 : g.platform,
          activitySessionId: null == g ? void 0 : g.session_id,
          applicationId: null == g ? void 0 : g.application_id,
          analyticsLocations: x,
          ...p
        })
      }
    }) : null, A.map(e => (0, l.jsx)(r.default, {
      type: s,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: U,
      className: E.userProfileActivity,
      hideHeader: s === c.Types.SIMPLIFIED_PROFILE,
      showChannelDetails: s === c.Types.SIMPLIFIED_PROFILE,
      actionColor: E.actionColor,
      analyticsParams: C,
      onAction: () => {
        N({
          action: "JOIN_ACTIVITY"
        }), (0, S.trackUserProfileActivityJoined)({
          activityType: e.type,
          activityName: e.name,
          activityPlatform: e.platform,
          activitySessionId: e.session_id,
          applicationId: e.application_id,
          analyticsLocations: x,
          ...p
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}