"use strict";
n.d(t, {
  Z: function() {
    return I
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(717881),
  o = n(906732),
  a = n(199902),
  l = n(158776),
  u = n(594174),
  _ = n(785717),
  d = n(221292),
  c = n(981631),
  E = n(10268);

function I(e) {
  let {
    user: t,
    guild: n,
    channelId: I,
    onClose: T
  } = e, {
    analyticsLocations: h,
    newestAnalyticsLocation: S
  } = (0, o.ZP)(), {
    trackUserProfileAction: f,
    ...N
  } = (0, _.KZ)(), A = (0, r.e7)([u.default], () => u.default.getCurrentUser()), {
    isApplicationStreaming: m,
    activity: O
  } = (0, r.cj)([a.Z, l.Z], () => {
    let e = null != a.Z.getAnyStreamForUser(t.id);
    return {
      isApplicationStreaming: e,
      activity: e ? l.Z.findActivity(t.id, e => {
        let {
          type: t
        } = e;
        return t === c.IIU.PLAYING
      }) : l.Z.findActivity(t.id, e => {
        let {
          type: t
        } = e;
        return t !== c.IIU.CUSTOM_STATUS
      })
    }
  });
  return (0, i.jsx)(s.Z, {
    type: s.P.BITE_SIZE_POPOUT,
    activity: O,
    className: E.activity,
    source: S,
    user: t,
    guildId: null == n ? void 0 : n.id,
    channelId: I,
    onOpenGameProfile: T,
    onAction: () => {
      f({
        action: "JOIN_ACTIVITY"
      }), (0, d.Ac)({
        activityType: m ? c.IIU.STREAMING : null == O ? void 0 : O.type,
        activityName: null == O ? void 0 : O.name,
        activityPlatform: null == O ? void 0 : O.platform,
        activitySessionId: null == O ? void 0 : O.session_id,
        applicationId: null == O ? void 0 : O.application_id,
        analyticsLocations: h,
        ...N
      }), null == T || T()
    },
    showActions: t.id !== (null == A ? void 0 : A.id),
    actionColor: E.buttonColor,
    showChannelDetails: !0
  })
}