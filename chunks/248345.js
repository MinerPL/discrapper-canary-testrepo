"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  a = n("717881"),
  s = n("906732"),
  o = n("199902"),
  l = n("785717"),
  u = n("221292"),
  d = n("659101"),
  _ = n("981631"),
  c = n("389573");

function E(e) {
  let {
    activity: t,
    user: n,
    guild: E,
    channelId: I,
    onClose: T,
    analyticsParams: f
  } = e, {
    analyticsLocations: S
  } = (0, s.default)(), {
    trackUserProfileAction: h,
    ...A
  } = (0, l.useUserProfileAnalyticsContext)(), m = (0, r.useStateFromStores)([o.default], () => null != o.default.getAnyStreamForUser(n.id));
  return (0, i.jsx)(d.default, {
    children: (0, i.jsx)(a.default, {
      type: a.UserActivityTypes.USER_POPOUT_V2,
      activity: t,
      className: c.activity,
      user: n,
      guildId: null == E ? void 0 : E.id,
      channelId: I,
      source: _.AnalyticsLocations.PROFILE_POPOUT,
      onOpenGameProfile: T,
      onAction: () => {
        h({
          action: "JOIN_ACTIVITY"
        }), (0, u.trackUserProfileActivityJoined)({
          activityType: m ? _.ActivityTypes.STREAMING : null == t ? void 0 : t.type,
          activityName: null == t ? void 0 : t.name,
          activityPlatform: null == t ? void 0 : t.platform,
          activitySessionId: null == t ? void 0 : t.session_id,
          applicationId: null == t ? void 0 : t.application_id,
          analyticsLocations: S,
          ...A
        }), null == T || T()
      },
      actionColor: c.buttonColor,
      analyticsParams: f
    })
  })
}