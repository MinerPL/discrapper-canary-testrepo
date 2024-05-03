"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("442837"),
  s = n("481060"),
  o = n("278323"),
  l = n("224706"),
  u = n("287734"),
  d = n("2052"),
  _ = n("906732"),
  c = n("835473"),
  E = n("592745"),
  I = n("592125"),
  T = n("757266"),
  f = n("650774"),
  S = n("430824"),
  h = n("283595"),
  A = n("496675"),
  m = n("699516"),
  N = n("944486"),
  p = n("594174"),
  O = n("979651"),
  R = n("181106"),
  C = n("417363"),
  g = n("358085"),
  L = n("804739"),
  v = n("317381"),
  D = n("638880"),
  M = n("255621"),
  y = n("452634"),
  P = n("620662"),
  U = n("275920"),
  b = n("513202"),
  G = n("915863"),
  w = n("701488"),
  B = n("981631"),
  k = n("689938");

function V(e) {
  let {
    activity: t,
    currentEmbeddedApplication: n,
    isCurrentUser: V,
    color: x,
    look: F,
    hover: H,
    user: Y,
    onAction: j,
    isEmbedded: W = !1
  } = e, {
    analyticsLocations: K
  } = (0, _.default)(), [z, Z] = r.useState(!1), X = (0, a.useStateFromStores)([p.default], () => p.default.getCurrentUser()), Q = null == t ? void 0 : t.application_id, q = (0, a.useStateFromStores)([v.default], () => W ? v.default.getEmbeddedActivityForUserId(Y.id, Q) : null, [Y.id, W, Q]), J = (0, y.default)({
    channelId: null == q ? void 0 : q.channelId,
    userId: Y.id,
    activity: t
  }), $ = (0, a.useStateFromStores)([h.default, E.default, C.default, T.default], () => W || (null == t ? void 0 : t.application_id) != null && (0, L.isLaunchable)({
    LibraryApplicationStore: h.default,
    LaunchableGameStore: E.default,
    DispatchApplicationStore: C.default,
    ConnectedAppsStore: T.default,
    applicationId: t.application_id
  })), ee = (0, a.useStateFromStores)([v.default], () => Array.from(v.default.getSelfEmbeddedActivities().values()).some(e => {
    let {
      applicationId: n,
      channelId: i
    } = e;
    return n === (null == t ? void 0 : t.application_id) && i === J
  })), et = (0, a.useStateFromStores)([R.default], () => null != t && null != t.application_id && R.default.getState(t.application_id, B.ActivityActionTypes.JOIN) === B.ActivityActionStates.LOADING), [en] = (0, c.default)((null == t ? void 0 : t.application_id) != null ? [null == t ? void 0 : t.application_id] : []), ei = (0, a.useStateFromStores)([I.default, S.default, f.default, m.default, N.default, O.default, A.default], () => (0, M.default)({
    user: Y,
    activity: t,
    application: en,
    channelId: J,
    currentUser: X,
    isEmbedded: W,
    ChannelStore: I.default,
    GuildStore: S.default,
    GuildMemberCountStore: f.default,
    RelationshipStore: m.default,
    SelectedChannelStore: N.default,
    VoiceStateStore: O.default,
    PermissionStore: A.default
  })), er = (0, a.useStateFromStores)([v.default], () => Array.from(v.default.getSelfEmbeddedActivities().values()).some(e => e.applicationId === (null == q ? void 0 : q.applicationId) && e.channelId === (null == q ? void 0 : q.channelId))), ea = (0, d.useAnalyticsContext)(), es = !g.isPlatformEmbedded, eo = (0, P.default)(t, B.ActivityFlags.JOIN) || W;
  if (null == t || !eo || null == t.application_id) return null;
  let el = !V && (es || $) && !z && !ee && (!W || ei),
    eu = null;
  V ? eu = k.default.Messages.USER_ACTIVITY_CANNOT_JOIN_SELF : !es && !$ && (eu = k.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
    name: t.name
  }));
  let ed = async (e, t) => {
    var n;
    null != t.session_id && null != t.application_id && (await l.default.join({
      userId: e.id,
      sessionId: t.session_id,
      applicationId: t.application_id,
      channelId: N.default.getVoiceChannelId(),
      messageId: null,
      intent: w.ActivityIntent.PLAY,
      embedded: (0, P.default)(t, B.ActivityFlags.EMBEDDED)
    }), (0, U.default)({
      type: B.AnalyticsGameOpenTypes.JOIN,
      userId: e.id,
      applicationId: t.application_id,
      partyId: null === (n = t.party) || void 0 === n ? void 0 : n.id,
      locationObject: ea.location,
      analyticsLocations: K
    }))
  }, e_ = async () => {
    let e = !1;
    if (W) {
      if (!ei || null == J || null == t.application_id) return;
      e = await (0, D.default)({
        applicationId: t.application_id,
        currentEmbeddedApplication: n,
        activityChannelId: J,
        locationObject: ea.location,
        embeddedActivitiesManager: b.default,
        analyticsLocations: K
      })
    }
    if (!e) {
      ei && (null == j || j(), ed(Y, t)), Z(!0);
      let e = await o.default.sendActivityInviteUser({
        type: B.ActivityActionTypes.JOIN_REQUEST,
        userId: Y.id,
        activity: t,
        location: B.AnalyticsLocations.PROFILE_POPOUT
      });
      null != e && u.default.selectPrivateChannel(e.id)
    }
  }, ec = ei ? k.default.Messages.JOIN : k.default.Messages.USER_ACTIVITY_ACTION_ASK_TO_JOIN;
  return W && (ec = k.default.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY), er && (ec = k.default.Messages.EMBEDDED_ACTIVITIES_JOINED), (0, i.jsx)(s.Tooltip, {
    text: eu,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, i.jsx)(G.default, {
        onClick: e_,
        onMouseEnter: t,
        onMouseLeave: n,
        color: x,
        look: F,
        hover: H,
        disabled: !el,
        submitting: et,
        fullWidth: !0,
        children: ec
      })
    }
  }, "join")
}