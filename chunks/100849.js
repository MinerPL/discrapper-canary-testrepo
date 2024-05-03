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
  I = s("583483"),
  E = s("613398");

function v(e) {
  let {
    user: t,
    type: s
  } = e, v = (0, i.useStateFromStores)([u.default], () => null != u.default.getAnyStreamForUser(t.id)), _ = (0, i.useStateFromStores)([d.default], () => d.default.getActivities(t.id)), T = a.useMemo(() => _.filter(e => e.type !== m.ActivityTypes.CUSTOM_STATUS), [_]), x = a.useMemo(() => v ? T.find(e => e.type === m.ActivityTypes.PLAYING) : null, [T, v]), N = a.useMemo(() => T.filter(e => e !== x), [x, T]), {
    analyticsLocations: A,
    newestAnalyticsLocation: U
  } = (0, o.default)(), {
    trackUserProfileAction: g,
    ...C
  } = (0, f.useUserProfileAnalyticsContext)(), h = {
    location: {
      page: m.AnalyticsPages.USER_PROFILE,
      section: m.AnalyticsSections.PROFILE_MODAL
    }
  };
  return (0, l.jsxs)(n.ScrollerThin, {
    className: E.listScroller,
    fade: !0,
    children: [v ? (0, l.jsx)(r.default, {
      type: s,
      user: t,
      source: U,
      className: I.userProfileActivity,
      hideHeader: s === c.Types.SIMPLIFIED_PROFILE,
      activity: x,
      actionColor: I.actionColor,
      analyticsParams: h,
      onAction: () => {
        g({
          action: "JOIN_ACTIVITY"
        }), (0, S.trackUserProfileActivityJoined)({
          activityType: m.ActivityTypes.STREAMING,
          activityName: null == x ? void 0 : x.name,
          activityPlatform: null == x ? void 0 : x.platform,
          activitySessionId: null == x ? void 0 : x.session_id,
          applicationId: null == x ? void 0 : x.application_id,
          analyticsLocations: A,
          ...C
        })
      }
    }) : null, N.map(e => (0, l.jsx)(r.default, {
      type: s,
      activity: e,
      user: t,
      useStoreStream: !1,
      source: U,
      className: I.userProfileActivity,
      hideHeader: s === c.Types.SIMPLIFIED_PROFILE,
      actionColor: I.actionColor,
      analyticsParams: h,
      onAction: () => {
        g({
          action: "JOIN_ACTIVITY"
        }), (0, S.trackUserProfileActivityJoined)({
          activityType: e.type,
          activityName: e.name,
          activityPlatform: e.platform,
          activitySessionId: e.session_id,
          applicationId: e.application_id,
          analyticsLocations: A,
          ...C
        })
      }
    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
  })
}