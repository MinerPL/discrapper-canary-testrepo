"use strict";
n.d(t, {
  Z: function() {
    return H
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(278323),
  l = n(224706),
  u = n(287734),
  _ = n(2052),
  d = n(906732),
  c = n(835473),
  E = n(592745),
  I = n(592125),
  T = n(757266),
  h = n(650774),
  S = n(430824),
  f = n(283595),
  N = n(496675),
  A = n(699516),
  m = n(944486),
  O = n(594174),
  R = n(979651),
  C = n(181106),
  p = n(417363),
  g = n(358085),
  L = n(804739),
  v = n(566620),
  D = n(317381),
  M = n(638880),
  P = n(255621),
  y = n(452634),
  U = n(527805),
  b = n(620662),
  G = n(275920),
  w = n(952561),
  k = n(513202),
  B = n(915863),
  x = n(701488),
  V = n(981631),
  Z = n(689938);

function H(e) {
  var t, n;
  let {
    activity: H,
    embeddedActivity: F,
    user: Y,
    onAction: j,
    isEmbedded: W = !1,
    ButtonComponent: K = B.Z,
    ...z
  } = e, {
    analyticsLocations: q
  } = (0, d.ZP)(), [X, Q] = r.useState(!1), J = (0, s.e7)([O.default], () => O.default.getCurrentUser()), $ = Y.id === (null == J ? void 0 : J.id), ee = null !== (t = null == F ? void 0 : F.applicationId) && void 0 !== t ? t : null == H ? void 0 : H.application_id, et = (0, y.Z)({
    channelId: null == F ? void 0 : F.channelId,
    userId: Y.id,
    activity: H
  }), en = (0, s.e7)([f.Z, E.Z, p.Z, T.Z], () => W || null != ee && (0, L.t)({
    LibraryApplicationStore: f.Z,
    LaunchableGameStore: E.Z,
    DispatchApplicationStore: p.Z,
    ConnectedAppsStore: T.Z,
    applicationId: ee
  })), ei = (0, s.e7)([D.ZP], () => Array.from(D.ZP.getSelfEmbeddedActivities().values()).some(e => {
    let {
      applicationId: t,
      channelId: n
    } = e;
    return (t === (null == H ? void 0 : H.application_id) || t === (null == F ? void 0 : F.applicationId)) && n === et
  })), er = (0, s.e7)([C.Z], () => null != H && null != H.application_id && C.Z.getState(H.application_id, V.mFx.JOIN) === V.OcF.LOADING), [es] = (0, c.Z)((null == F ? void 0 : F.applicationId) != null ? [null == F ? void 0 : F.applicationId] : (null == H ? void 0 : H.application_id) != null ? [null == H ? void 0 : H.application_id] : []), eo = (0, U.s5)({
    userId: Y.id,
    activity: H,
    channelId: et,
    application: es
  }), ea = (0, s.e7)([I.Z, S.Z, h.Z, A.Z, m.Z, R.Z, N.Z], () => null != F ? eo === U.Fw.CAN_JOIN : null != H ? (0, P.Z)({
    user: Y,
    activity: H,
    application: es,
    channelId: et,
    currentUser: J,
    isEmbedded: W,
    ChannelStore: I.Z,
    GuildStore: S.Z,
    GuildMemberCountStore: h.Z,
    RelationshipStore: A.Z,
    SelectedChannelStore: m.Z,
    VoiceStateStore: R.Z,
    PermissionStore: N.Z
  }) : void 0), el = (0, s.e7)([D.ZP], () => Array.from(D.ZP.getSelfEmbeddedActivities().values()).some(e => e.applicationId === (null == F ? void 0 : F.applicationId) && e.channelId === (null == F ? void 0 : F.channelId))), eu = (0, w.Z)(), e_ = (0, _.O)(), ed = !g.isPlatformEmbedded;
  if (!((0, b.Z)(H, V.xjy.JOIN) || W) || null == ee) return null;
  let ec = !$ || W && !el,
    eE = ec && (ed || en) && !X && !ei && (!W || ea),
    eI = null;
  ec ? !ed && !en && null != H && (eI = Z.Z.Messages.USER_ACTIVITY_NOT_DETECTED.format({
    name: H.name
  })) : eI = Z.Z.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF;
  let eT = null !== (n = null == F ? void 0 : F.launchId) && void 0 !== n ? n : null == H ? void 0 : H.session_id,
    eh = async (e, t) => {
      var n;
      if (null != eT && null != ee) await l.Z.join({
        userId: e.id,
        sessionId: eT,
        applicationId: ee,
        channelId: m.Z.getVoiceChannelId(),
        messageId: null,
        intent: x.Ws.PLAY,
        embedded: (0, b.Z)(t, V.xjy.EMBEDDED)
      }), (0, G.Z)({
        type: V.q5t.JOIN,
        userId: e.id,
        applicationId: ee,
        partyId: null != t ? null == t ? void 0 : null === (n = t.party) || void 0 === n ? void 0 : n.id : "",
        locationObject: e_.location,
        analyticsLocations: q
      })
    }, eS = async () => {
      let e = !1;
      if (W) {
        if (!ea || null == et || null == ee) return;
        e = await (0, M.Z)({
          applicationId: ee,
          currentEmbeddedApplication: eu,
          activityChannelId: et,
          locationObject: e_.location,
          embeddedActivitiesManager: k.Z,
          analyticsLocations: q
        })
      }
      if (!e) {
        let e;
        ea && (null == j || j(), eh(Y, H)), Q(!0), null != et && null != ee ? e = await v.pu({
          channelId: et,
          applicationId: ee,
          userId: Y.id,
          location: V.Sbl.PROFILE_POPOUT
        }) : null != H && (e = await a.Z.sendActivityInviteUser({
          type: V.mFx.JOIN_REQUEST,
          userId: Y.id,
          activity: H,
          location: V.Sbl.PROFILE_POPOUT
        })), null != e && u.default.selectPrivateChannel(e.id)
      }
    }, ef = ea ? Z.Z.Messages.JOIN : Z.Z.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
  return W && (ef = Z.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY), el && (ef = Z.Z.Messages.EMBEDDED_ACTIVITIES_JOINED), (0, i.jsx)(o.Tooltip, {
    text: eI,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, i.jsx)(K, {
        onClick: eS,
        onMouseEnter: t,
        onMouseLeave: n,
        disabled: !eE,
        submitting: er,
        fullWidth: !0,
        ...z,
        children: ef
      })
    }
  }, "join")
}