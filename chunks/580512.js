n.d(t, {
  Z: function() {
return m;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(442837),
  o = n(717881),
  l = n(906732),
  u = n(199902),
  c = n(158776),
  d = n(594174),
  _ = n(785717),
  E = n(221292),
  f = n(910128),
  h = n(981631),
  p = n(646909);

function m(e) {
  let {
user: t,
guild: n,
channelId: i,
className: m,
onClose: I
  } = e, {
analyticsLocations: T,
newestAnalyticsLocation: g
  } = (0, l.ZP)(), {
context: S,
trackUserProfileAction: A
  } = (0, _.KZ)(), N = (0, s.e7)([d.default], () => d.default.getCurrentUser()), {
messageCtaEnabled: v
  } = (0, f.l)({
location: 'BiteSizeProfileActivitySection'
  }), {
isApplicationStreaming: O,
activity: R
  } = (0, s.cj)([
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
  return (0, r.jsx)(o.Z, {
type: o.P.BITE_SIZE_POPOUT,
activity: R,
className: a()(p.activity, m),
source: g,
user: t,
guildId: null == n ? void 0 : n.id,
channelId: i,
onClose: I,
onAction: () => {
  A({
    action: 'JOIN_ACTIVITY'
  }), (0, E.Ac)({
    activityType: O ? h.IIU.STREAMING : null == R ? void 0 : R.type,
    activityName: null == R ? void 0 : R.name,
    activityPlatform: null == R ? void 0 : R.platform,
    activitySessionId: null == R ? void 0 : R.session_id,
    applicationId: null == R ? void 0 : R.application_id,
    analyticsLocations: T,
    ...S
  }), null == I || I();
},
showActions: t.id !== (null == N ? void 0 : N.id),
actionColor: a()(p.buttonColor, v ? p.engagementExpButtonColor : void 0),
showChannelDetails: !0
  });
}