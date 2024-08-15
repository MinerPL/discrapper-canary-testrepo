n.d(t, {
  Z: function() {
return k;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  s = n(481060),
  o = n(278323),
  l = n(224706),
  u = n(287734),
  c = n(566620),
  d = n(317381),
  _ = n(638880),
  E = n(255621),
  f = n(452634),
  h = n(620662),
  p = n(841784),
  m = n(275920),
  I = n(906732),
  T = n(835473),
  g = n(592745),
  S = n(592125),
  A = n(757266),
  N = n(650774),
  v = n(430824),
  O = n(283595),
  R = n(496675),
  C = n(699516),
  y = n(944486),
  D = n(979651),
  L = n(181106),
  b = n(417363),
  M = n(358085),
  P = n(804739),
  U = n(475413),
  w = n(981631),
  x = n(701488),
  G = n(689938);

function k(e) {
  let {
user: t,
currentUser: n,
activity: k,
onAction: B,
onClose: F
  } = e, {
analyticsLocations: V,
newestAnalyticsLocation: H
  } = (0, I.ZP)(), [Z] = (0, T.Z)([null == k ? void 0 : k.application_id]), Y = (0, p.Z)(k), j = null == k ? void 0 : k.application_id, W = null == k ? void 0 : k.session_id, K = (0, f.Z)({
activity: k,
userId: t.id,
channelId: void 0
  }), z = (0, a.e7)([
O.Z,
g.Z,
b.Z,
A.Z
  ], () => null != j && (0, P.t)({
applicationId: j,
LibraryApplicationStore: O.Z,
LaunchableGameStore: g.Z,
DispatchApplicationStore: b.Z,
ConnectedAppsStore: A.Z
  })) || Y, q = (0, a.e7)([d.ZP], () => [...d.ZP.getSelfEmbeddedActivities().values()].some(e => {
let {
  applicationId: t,
  channelId: n
} = e;
return t === j && n === K;
  })), Q = (0, a.e7)([L.Z], () => null != j && L.Z.getState(j, w.mFx.JOIN) === w.OcF.LOADING), X = (0, a.e7)([
S.Z,
v.Z,
N.Z,
C.Z,
y.Z,
D.Z,
R.Z
  ], () => (0, E.Z)({
user: t,
activity: k,
application: Z,
channelId: K,
currentUser: n,
isEmbedded: Y,
ChannelStore: S.Z,
GuildStore: v.Z,
GuildMemberCountStore: N.Z,
RelationshipStore: C.Z,
SelectedChannelStore: y.Z,
VoiceStateStore: D.Z,
PermissionStore: R.Z
  })), [$, J] = i.useState(!1), ee = !X || $ || q || M.isPlatformEmbedded && !z;
  if (null == j || !(0, h.Z)(k, w.xjy.JOIN) && !Y)
return null;
  let et = async () => {
if (Y && X && null != K && null != j && await (0, _.Z)({
    applicationId: j,
    activityChannelId: K,
    locationObject: {
      page: w.ZY5.USER_PROFILE
    },
    analyticsLocations: V
  })) {
  null == F || F();
  return;
}
if (X && null != j && null != W) {
  var e;
  await l.Z.join({
    userId: t.id,
    sessionId: W,
    applicationId: j,
    channelId: y.Z.getVoiceChannelId(),
    messageId: null,
    intent: x.Ws.PLAY,
    embedded: Y
  }), (0, m.Z)({
    type: w.q5t.JOIN,
    userId: t.id,
    partyId: null == k ? void 0 : null === (e = k.party) || void 0 === e ? void 0 : e.id,
    applicationId: j,
    analyticsLocations: V
  });
}
if (J(!0), null != K && null != j)
  return c.pu({
    channelId: K,
    applicationId: j,
    userId: t.id,
    location: H
  });
if (null != k) {
  let e = await o.Z.sendActivityInviteUser({
    type: w.mFx.JOIN_REQUEST,
    userId: t.id,
    activity: k,
    location: w.Sbl.PROFILE_POPOUT
  });
  null != e && u.default.selectPrivateChannel(e.id);
}
  }, en = () => t.id === n.id ? G.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : M.isPlatformEmbedded && !z && null != k ? G.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({
name: k.name
  }) : null;
  return Y ? (0, r.jsx)(s.Tooltip, {
text: en(),
children: e => (0, r.jsx)(U.tG, {
  ...e,
  icon: s.ActivitiesIcon,
  text: G.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY,
  disabled: ee,
  submitting: Q,
  fullWidth: !0,
  onClick: () => {
    null == B || B({
      action: 'PRESS_JOIN_BUTTON'
    }), et();
  }
})
  }) : (0, r.jsx)(s.Tooltip, {
text: en(),
children: e => (0, r.jsx)(U.tG, {
  ...e,
  icon: s.GameControllerIcon,
  text: X ? G.Z.Messages.JOIN : G.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
  disabled: ee,
  submitting: Q,
  fullWidth: !0,
  onClick: () => {
    null == B || B({
      action: 'PRESS_ASK_TO_JOIN_BUTTON'
    }), et();
  }
})
  });
}