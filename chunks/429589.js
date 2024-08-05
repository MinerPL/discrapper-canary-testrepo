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
  c = n(2052),
  d = n(906732),
  _ = n(835473),
  E = n(592745),
  f = n(592125),
  h = n(757266),
  p = n(650774),
  m = n(430824),
  I = n(283595),
  T = n(496675),
  g = n(699516),
  S = n(944486),
  A = n(594174),
  N = n(979651),
  v = n(181106),
  O = n(417363),
  R = n(358085),
  C = n(804739),
  y = n(566620),
  D = n(317381),
  L = n(638880),
  b = n(255621),
  M = n(452634),
  P = n(527805),
  U = n(620662),
  w = n(275920),
  x = n(952561),
  G = n(513202),
  k = n(915863),
  B = n(701488),
  F = n(981631),
  V = n(689938);

function H(e) {
  var t, n;
  let {
activity: H,
embeddedActivity: Z,
user: Y,
onAction: j,
isEmbedded: W = !1,
ButtonComponent: K = k.Z,
...z
  } = e, {
analyticsLocations: q
  } = (0, d.ZP)(), [Q, X] = i.useState(!1), $ = (0, a.e7)([A.default], () => A.default.getCurrentUser()), J = Y.id === (null == $ ? void 0 : $.id), ee = null !== (t = null == Z ? void 0 : Z.applicationId) && void 0 !== t ? t : null == H ? void 0 : H.application_id, et = (0, M.Z)({
channelId: null == Z ? void 0 : Z.channelId,
userId: Y.id,
activity: H
  }), en = (0, a.e7)([
I.Z,
E.Z,
O.Z,
h.Z
  ], () => W || null != ee && (0, C.t)({
LibraryApplicationStore: I.Z,
LaunchableGameStore: E.Z,
DispatchApplicationStore: O.Z,
ConnectedAppsStore: h.Z,
applicationId: ee
  })), er = (0, a.e7)([D.ZP], () => Array.from(D.ZP.getSelfEmbeddedActivities().values()).some(e => {
let {
  applicationId: t,
  channelId: n
} = e;
return (t === (null == H ? void 0 : H.application_id) || t === (null == Z ? void 0 : Z.applicationId)) && n === et;
  })), ei = (0, a.e7)([v.Z], () => null != H && null != H.application_id && v.Z.getState(H.application_id, F.mFx.JOIN) === F.OcF.LOADING), [ea] = (0, _.Z)((null == Z ? void 0 : Z.applicationId) != null ? [null == Z ? void 0 : Z.applicationId] : (null == H ? void 0 : H.application_id) != null ? [null == H ? void 0 : H.application_id] : []), es = (0, P.s5)({
userId: Y.id,
activity: H,
channelId: et,
application: ea
  }), eo = (0, a.e7)([
f.Z,
m.Z,
p.Z,
g.Z,
S.Z,
N.Z,
T.Z
  ], () => null != Z ? es === P.Fw.CAN_JOIN : null != H ? (0, b.Z)({
user: Y,
activity: H,
application: ea,
channelId: et,
currentUser: $,
isEmbedded: W,
ChannelStore: f.Z,
GuildStore: m.Z,
GuildMemberCountStore: p.Z,
RelationshipStore: g.Z,
SelectedChannelStore: S.Z,
VoiceStateStore: N.Z,
PermissionStore: T.Z
  }) : void 0), el = (0, a.e7)([D.ZP], () => Array.from(D.ZP.getSelfEmbeddedActivities().values()).some(e => e.applicationId === (null == Z ? void 0 : Z.applicationId) && e.channelId === (null == Z ? void 0 : Z.channelId))), eu = (0, x.Z)(), ec = (0, c.O)(), ed = !R.isPlatformEmbedded;
  if (!((0, U.Z)(H, F.xjy.JOIN) || W) || null == ee)
return null;
  let e_ = !J || W && !el,
eE = e_ && (ed || en) && !Q && !er && (!W || eo),
ef = null;
  e_ ? !ed && !en && null != H && (ef = V.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({
name: H.name
  })) : ef = V.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF;
  let eh = null !== (n = null == Z ? void 0 : Z.launchId) && void 0 !== n ? n : null == H ? void 0 : H.session_id,
ep = async (e, t) => {
  var n;
  if (null != eh && null != ee)
    await l.Z.join({
      userId: e.id,
      sessionId: eh,
      applicationId: ee,
      channelId: S.Z.getVoiceChannelId(),
      messageId: null,
      intent: B.Ws.PLAY,
      embedded: (0, U.Z)(t, F.xjy.EMBEDDED)
    }), (0, w.Z)({
      type: F.q5t.JOIN,
      userId: e.id,
      applicationId: ee,
      partyId: null != t ? null == t ? void 0 : null === (n = t.party) || void 0 === n ? void 0 : n.id : '',
      locationObject: ec.location,
      analyticsLocations: q
    });
}, em = async () => {
  let e = !1;
  if (W) {
    if (!eo || null == et || null == ee)
      return;
    e = await (0, L.Z)({
      applicationId: ee,
      currentEmbeddedApplication: eu,
      activityChannelId: et,
      locationObject: ec.location,
      embeddedActivitiesManager: G.Z,
      analyticsLocations: q
    });
  }
  if (!e) {
    let e;
    eo && (null == j || j(), ep(Y, H)), X(!0), null != et && null != ee ? e = await y.pu({
      channelId: et,
      applicationId: ee,
      userId: Y.id,
      location: F.Sbl.PROFILE_POPOUT
    }) : null != H && (e = await o.Z.sendActivityInviteUser({
      type: F.mFx.JOIN_REQUEST,
      userId: Y.id,
      activity: H,
      location: F.Sbl.PROFILE_POPOUT
    })), null != e && u.default.selectPrivateChannel(e.id);
  }
}, eI = eo ? V.Z.Messages.JOIN : V.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
  return W && (eI = V.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY), el && (eI = V.Z.Messages.EMBEDDED_ACTIVITIES_JOINED), (0, r.jsx)(s.Tooltip, {
text: ef,
children: e => {
  let {
    onMouseEnter: t,
    onMouseLeave: n
  } = e;
  return (0, r.jsx)(K, {
    onClick: em,
    onMouseEnter: t,
    onMouseLeave: n,
    disabled: !eE,
    submitting: ei,
    fullWidth: !0,
    ...z,
    children: eI
  });
}
  }, 'join');
}