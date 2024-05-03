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
  l = n("158776"),
  u = n("785717"),
  d = n("221292"),
  _ = n("981631"),
  c = n("810480");

function E(e) {
  let {
    user: t,
    guild: n,
    channelId: E,
    onClose: I
  } = e, {
    analyticsLocations: T,
    newestAnalyticsLocation: f
  } = (0, s.default)(), {
    trackUserProfileAction: S,
    ...h
  } = (0, u.useUserProfileAnalyticsContext)(), {
    isApplicationStreaming: A,
    activity: m
  } = (0, r.useStateFromStoresObject)([o.default, l.default], () => {
    let e = null != o.default.getAnyStreamForUser(t.id);
    return {
      isApplicationStreaming: e,
      activity: e ? l.default.findActivity(t.id, e => {
        let {
          type: t
        } = e;
        return t === _.ActivityTypes.PLAYING
      }) : l.default.findActivity(t.id, e => {
        let {
          type: t
        } = e;
        return t !== _.ActivityTypes.CUSTOM_STATUS
      })
    }
  });
  return (0, i.jsx)(a.default, {
    type: a.UserActivityTypes.BITE_SIZE_POPOUT,
    activity: m,
    className: c.activity,
    source: f,
    user: t,
    guildId: null == n ? void 0 : n.id,
    channelId: E,
    onOpenGameProfile: I,
    onAction: () => {
      S({
        action: "JOIN_ACTIVITY"
      }), (0, d.trackUserProfileActivityJoined)({
        activityType: A ? _.ActivityTypes.STREAMING : null == m ? void 0 : m.type,
        activityName: null == m ? void 0 : m.name,
        activityPlatform: null == m ? void 0 : m.platform,
        activitySessionId: null == m ? void 0 : m.session_id,
        applicationId: null == m ? void 0 : m.application_id,
        analyticsLocations: T,
        ...h
      }), null == I || I()
    },
    actionColor: c.buttonColor,
    hideHeader: !0
  })
}