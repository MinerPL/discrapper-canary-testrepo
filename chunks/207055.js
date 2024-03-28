"use strict";
n.r(t), n("47120"), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("846519"),
  u = n("586902"),
  d = n("317381"),
  c = n("812206"),
  f = n("835473"),
  h = n("574176"),
  m = n("106301"),
  p = n("512384"),
  E = n("199902"),
  C = n("314897"),
  g = n("271383"),
  S = n("131951"),
  _ = n("496675"),
  T = n("158776"),
  I = n("885110"),
  A = n("797258"),
  v = n("606304"),
  N = n("979651"),
  x = n("805009"),
  M = n("700785"),
  R = n("51144"),
  L = n("649739"),
  y = n("262317"),
  O = n("981631"),
  j = n("524484"),
  P = n("619682");
let D = l.memo(e => {
  var t;
  let {
    mute: n,
    deaf: l,
    user: s,
    channel: i,
    sessionId: o,
    nick: _
  } = e, x = s.id, P = (0, r.useStateFromStores)([C.default], () => C.default.getId() === x, [x]), [D, b, U] = (0, r.useStateFromStoresArray)([S.default], () => P ? [!S.default.isSupported() || S.default.isSelfMute() || S.default.isSelfMutedTemporarily(), S.default.isSelfDeaf(), !1] : [!S.default.isSupported() || S.default.isLocalMute(x), !1, S.default.isLocalVideoDisabled(x)], [P, x]), F = (0, r.useStateFromStores)([v.default], () => v.default.isPrioritySpeaker(x)), w = (0, u.default)({
    userId: x,
    checkSoundSharing: !0
  }), k = (0, r.useStateFromStores)([g.default], () => g.default.isGuestOrLurker(i.guild_id, x)), H = (0, r.useStateFromStores)([d.default], () => d.default.getEmbeddedActivitiesForChannel(i.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(x)
  }), [x, i.id]), B = (0, f.default)(null != H ? [H.applicationId] : []), G = (0, L.useIsVoiceUserGameActivityEnabled)("voice_users_eligibility_check", !1), V = (0, r.useStateFromStores)([T.default, I.default], () => P ? I.default.getActivities() : T.default.getActivities(x, i.guild_id)).find(e => null != e.application_id && e.type === O.ActivityTypes.PLAYING), W = (0, r.useStateFromStores)([c.default], () => (null == V ? void 0 : V.application_id) != null ? c.default.getApplication(null == V ? void 0 : V.application_id) : void 0);
  null != W && L.default.trackExposure({
    location: "voice_users"
  });
  let [Y, z] = (0, r.useStateFromStoresArray)([E.default], () => [E.default.getStreamForUser(x, i.getGuildId()), E.default.getActiveStreamForUser(x, i.getGuildId())], [i, x]), Z = (0, r.useStateFromStores)([A.default], () => A.default.getSessionById(o)), K = R.default.useName(s), X = (0, r.useStateFromStores)([N.default], () => N.default.getVoicePlatformForChannel(i.id, x), [i.id, x]), {
    enableHangStatus: q
  } = h.HangStatusExperiment.useExperiment({
    guildId: i.guild_id,
    location: "VoiceUsers"
  }), Q = M.can({
    permission: O.Permissions.SET_VOICE_CHANNEL_STATUS,
    user: s,
    context: i
  }), J = (0, r.useStateFromStores)([m.default], () => P ? m.default.getHangStatusActivity() : null, [P]), $ = (0, r.useStateFromStores)([T.default], () => T.default.findActivity(x, e => e.type === O.ActivityTypes.HANG_STATUS), [x]);
  return (0, a.jsx)(p.default, {
    shakeLocation: j.ShakeLocation.VOICE_USER,
    isShaking: w,
    children: (0, a.jsx)(y.default, {
      ...e,
      nick: null != _ ? _ : K,
      canDrag: e.canDrag && !k,
      otherClientSessionType: null == Z ? void 0 : null === (t = Z.clientInfo) || void 0 === t ? void 0 : t.os,
      voicePlatform: X,
      localMute: D && !P,
      localVideoDisabled: U,
      mute: n || D,
      deaf: l || b,
      speaking: w,
      priority: F,
      embeddedApplication: B[0],
      isStreaming: null != Y && Y.channelId === i.id,
      isWatching: null != z && z.state !== O.ApplicationStreamStates.ENDED,
      isGuest: k,
      showHangStatus: Q && q && (C.default.getId() === s.id || null != $),
      hangStatusActivity: P ? J : $,
      isSelf: C.default.getId() === s.id,
      application: q || G ? W : void 0
    })
  })
});
D.displayName = "ConnectedVoiceUser";
t.default = function(e) {
  let {
    allowPreviews: t = !0,
    allowDragging: n = !0,
    channel: s,
    voiceStates: u,
    collapsed: d,
    collapsedMax: c = 6,
    tabIndex: h,
    location: m,
    numAudience: p,
    withGuildIcon: E = !1,
    className: g,
    children: S
  } = e, [I, A] = l.useState(null), [v, N] = l.useState(!1), M = l.useRef(null), R = l.useRef(new o.DelayedCall(50, () => {
    A(M.current), M.current = null
  })), L = l.useRef(new o.DelayedCall(175, () => {
    A(null)
  })), j = l.useCallback(e => {
    t && (N(!0), L.current.cancel(), M.current = e, R.current.delay())
  }, [t]), b = l.useCallback(e => {
    t && (R.current.cancel(), I === e && (N(!1), L.current.delay()))
  }, [t, I]), U = (0, r.useStateFromStoresArray)([T.default], () => {
    if (d) return [];
    let e = new Set;
    return null == u || u.forEach(t => {
      let {
        user: n
      } = t;
      T.default.getActivities(n.id, s.guild_id).forEach(t => {
        null != t.application_id && e.add(t.application_id)
      })
    }), Array.from(e)
  });
  (0, f.default)(U);
  let F = (() => {
    if (null == u || 0 === u.length) return null;
    let e = (d && u.length > c + 1 ? u.slice(0, c) : u).map(e => {
      var t;
      let {
        user: l,
        nick: i,
        voiceState: r
      } = e;
      return (0, a.jsx)(D, {
        user: l,
        nick: i,
        isSelfOnOtherClient: C.default.getId() === l.id && r.sessionId !== C.default.getSessionId(),
        mute: r.isVoiceMuted(),
        deaf: r.isVoiceDeafened(),
        video: r.selfVideo,
        serverMute: r.mute,
        serverDeaf: r.deaf,
        sessionId: null !== (t = r.sessionId) && void 0 !== t ? t : "",
        channel: s,
        collapsed: d,
        canDrag: n && _.default.can(O.Permissions.MOVE_MEMBERS, s),
        showPreview: j,
        hidePreview: b,
        previewIsOpen: v,
        shouldShowPreview: I === l.id,
        tabIndex: h,
        location: m
      }, l.id)
    });
    return null != p && p > 0 ? e.push((0, a.jsx)(y.AudienceVoiceUser, {
      collapsed: d,
      numAudience: p
    })) : d && u.length > c + 1 && e.push((0, a.jsx)(y.MoreVoiceUser, {
      numUsers: u.length - c
    })), e
  })();
  return null == F && null == S ? null : (0, a.jsxs)(x.VoiceUserList, {
    className: i()(g, P.list, {
      [P.collapsed]: d,
      [P.withGuildIcon]: E
    }),
    collapsed: d,
    children: [F, S]
  })
}