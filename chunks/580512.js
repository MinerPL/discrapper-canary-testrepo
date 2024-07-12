n.d(t, {
  Z: function() {
return m;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(442837),
  s = n(717881),
  l = n(906732),
  u = n(199902),
  c = n(158776),
  d = n(594174),
  _ = n(785717),
  E = n(221292),
  f = n(910128),
  h = n(981631),
  p = n(755380);

function m(e) {
  let {
user: t,
guild: n,
channelId: i,
onClose: m
  } = e, {
analyticsLocations: I,
newestAnalyticsLocation: T
  } = (0, l.ZP)(), {
trackUserProfileAction: g,
...S
  } = (0, _.KZ)(), A = (0, o.e7)([d.default], () => d.default.getCurrentUser()), {
messageCtaEnabled: N
  } = (0, f.l)({
location: 'BiteSizeProfileActivitySection'
  }), {
isApplicationStreaming: v,
activity: O
  } = (0, o.cj)([
u.Z,
c.Z
  ], () => {
let e = null != u.Z.getAnyStreamForUser(t.id);
return {
  isApplicationStreaming: e,
  activity: e ? c.Z.findActivity(t.id, e => {
    let {
      type: t
    } = e;
    return t === h.IIU.PLAYING;
  }) : c.Z.findActivity(t.id, e => {
    let {
      type: t
    } = e;
    return t !== h.IIU.CUSTOM_STATUS;
  })
};
  });
  return (0, r.jsx)(s.Z, {
type: s.P.BITE_SIZE_POPOUT,
activity: O,
className: p.activity,
source: T,
user: t,
guildId: null == n ? void 0 : n.id,
channelId: i,
onGameProfileOpened: m,
onAction: () => {
  g({
    action: 'JOIN_ACTIVITY'
  }), (0, E.Ac)({
    activityType: v ? h.IIU.STREAMING : null == O ? void 0 : O.type,
    activityName: null == O ? void 0 : O.name,
    activityPlatform: null == O ? void 0 : O.platform,
    activitySessionId: null == O ? void 0 : O.session_id,
    applicationId: null == O ? void 0 : O.application_id,
    analyticsLocations: I,
    ...S
  }), null == m || m();
},
showActions: t.id !== (null == A ? void 0 : A.id),
actionColor: a()(p.buttonColor, N ? p.engagementExpButtonColor : void 0),
showChannelDetails: !0
  });
}