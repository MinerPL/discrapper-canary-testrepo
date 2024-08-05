n.d(t, {
  Z: function() {
return H;
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
  I = n(952561),
  T = n(513202),
  g = n(906732),
  S = n(835473),
  A = n(592745),
  N = n(592125),
  v = n(757266),
  O = n(650774),
  R = n(430824),
  C = n(283595),
  y = n(496675),
  D = n(699516),
  L = n(944486),
  b = n(979651),
  M = n(181106),
  P = n(417363),
  U = n(358085),
  w = n(804739),
  x = n(652853),
  G = n(475413),
  k = n(228168),
  B = n(981631),
  F = n(701488),
  V = n(689938);

function H(e) {
  let {
user: t,
currentUser: n,
activity: H,
onClick: Z,
onClose: Y
  } = e, {
analyticsLocations: j,
newestAnalyticsLocation: W
  } = (0, g.ZP)(), {
profileType: K
  } = (0, x.z)(), [z] = (0, S.Z)([null == H ? void 0 : H.application_id]), q = (0, I.Z)(), Q = (0, p.Z)(H), X = null == H ? void 0 : H.application_id, $ = null == H ? void 0 : H.session_id, J = (0, f.Z)({
activity: H,
userId: t.id,
channelId: void 0
  }), ee = (0, a.e7)([
C.Z,
A.Z,
P.Z,
v.Z
  ], () => null != X && (0, w.t)({
applicationId: X,
LibraryApplicationStore: C.Z,
LaunchableGameStore: A.Z,
DispatchApplicationStore: P.Z,
ConnectedAppsStore: v.Z
  })) || Q, et = (0, a.e7)([d.ZP], () => [...d.ZP.getSelfEmbeddedActivities().values()].some(e => {
let {
  applicationId: t,
  channelId: n
} = e;
return t === X && n === J;
  })), en = (0, a.e7)([M.Z], () => null != X && M.Z.getState(X, B.mFx.JOIN) === B.OcF.LOADING), er = (0, a.e7)([
N.Z,
R.Z,
O.Z,
D.Z,
L.Z,
b.Z,
y.Z
  ], () => (0, E.Z)({
user: t,
activity: H,
application: z,
channelId: J,
currentUser: n,
isEmbedded: Q,
ChannelStore: N.Z,
GuildStore: R.Z,
GuildMemberCountStore: O.Z,
RelationshipStore: D.Z,
SelectedChannelStore: L.Z,
VoiceStateStore: b.Z,
PermissionStore: y.Z
  })), [ei, ea] = i.useState(!1), es = !er || ei || et || U.isPlatformEmbedded && !ee;
  if (null == X || !(0, h.Z)(H, B.xjy.JOIN) && !Q)
return null;
  let eo = async e => {
if (null == Z || Z(e), Q && er && null != J && null != X && await (0, _.Z)({
    applicationId: X,
    activityChannelId: J,
    currentEmbeddedApplication: q,
    embeddedActivitiesManager: T.Z,
    locationObject: {
      page: B.ZY5.USER_PROFILE
    },
    analyticsLocations: j
  })) {
  null == Y || Y();
  return;
}
if (er && null != X && null != $) {
  var n;
  await l.Z.join({
    userId: t.id,
    sessionId: $,
    applicationId: X,
    channelId: L.Z.getVoiceChannelId(),
    messageId: null,
    intent: F.Ws.PLAY,
    embedded: Q
  }), (0, m.Z)({
    type: B.q5t.JOIN,
    userId: t.id,
    partyId: null == H ? void 0 : null === (n = H.party) || void 0 === n ? void 0 : n.id,
    applicationId: X,
    analyticsLocations: j
  });
}
if (ea(!0), null != J && null != X)
  return c.pu({
    channelId: J,
    applicationId: X,
    userId: t.id,
    location: W
  });
if (null != H) {
  let e = await o.Z.sendActivityInviteUser({
    type: B.mFx.JOIN_REQUEST,
    userId: t.id,
    activity: H,
    location: B.Sbl.PROFILE_POPOUT
  });
  null != e && u.default.selectPrivateChannel(e.id);
}
  }, el = () => t.id === n.id ? V.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : U.isPlatformEmbedded && !ee && null != H ? V.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({
name: H.name
  }) : null;
  return Q ? (0, r.jsx)(s.Tooltip, {
text: el(),
children: e => (0, r.jsx)(G.tG, {
  ...e,
  icon: s.ActivitiesIcon,
  text: V.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY,
  disabled: es,
  submitting: en,
  themeColor: K === k.y0.FULL_SIZE ? 'secondary' : 'primary',
  fullWidth: !0,
  onClick: eo
})
  }) : (0, r.jsx)(s.Tooltip, {
text: el(),
children: e => (0, r.jsx)(G.tG, {
  ...e,
  icon: s.GameControllerIcon,
  text: er ? V.Z.Messages.JOIN : V.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN,
  disabled: es,
  submitting: en,
  themeColor: K === k.y0.FULL_SIZE ? 'secondary' : 'primary',
  fullWidth: !0,
  onClick: eo
})
  });
}