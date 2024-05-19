"use strict";
n.r(t), n("47120"), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("846519"),
  u = n("586902"),
  d = n("317381"),
  c = n("812206"),
  f = n("835473"),
  h = n("362721"),
  m = n("574176"),
  p = n("106301"),
  E = n("512384"),
  C = n("199902"),
  g = n("314897"),
  S = n("271383"),
  _ = n("131951"),
  T = n("496675"),
  I = n("158776"),
  A = n("885110"),
  N = n("797258"),
  v = n("606304"),
  x = n("979651"),
  M = n("805009"),
  R = n("51144"),
  y = n("649739"),
  L = n("262317"),
  O = n("981631"),
  j = n("524484"),
  P = n("149283");
let D = l.memo(e => {
  var t;
  let {
    mute: n,
    deaf: l,
    user: s,
    channel: i,
    sessionId: o,
    nick: T
  } = e, M = s.id, P = (0, r.useStateFromStores)([g.default], () => g.default.getId() === M, [M]), [D, b, U] = (0, r.useStateFromStoresArray)([_.default], () => P ? [!_.default.isSupported() || _.default.isSelfMute() || _.default.isSelfMutedTemporarily(), _.default.isSelfDeaf(), !1] : [!_.default.isSupported() || _.default.isLocalMute(M), !1, _.default.isLocalVideoDisabled(M)], [P, M]), F = (0, r.useStateFromStores)([v.default], () => v.default.isPrioritySpeaker(M)), w = (0, u.default)({
    userId: M,
    checkSoundSharing: !0
  }), k = (0, r.useStateFromStores)([S.default], () => S.default.isGuestOrLurker(i.guild_id, M)), B = (0, r.useStateFromStores)([d.default], () => d.default.getEmbeddedActivitiesForChannel(i.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(M)
  }), [M, i.id]), H = (0, f.default)(null != B ? [B.applicationId] : []), G = (0, y.useIsVoiceUserGameActivityEnabled)("voice_users_eligibility_check", !1), V = (0, r.useStateFromStores)([I.default, A.default], () => P ? A.default.getActivities() : I.default.getActivities(M, i.guild_id)).find(e => null != e.application_id && e.type === O.ActivityTypes.PLAYING), W = (0, r.useStateFromStores)([c.default], () => (null == V ? void 0 : V.application_id) != null ? c.default.getApplication(null == V ? void 0 : V.application_id) : void 0);
  null != W && y.default.trackExposure({
    location: "voice_users"
  });
  let [Y, z] = (0, r.useStateFromStoresArray)([C.default], () => [C.default.getStreamForUser(M, i.getGuildId()), C.default.getActiveStreamForUser(M, i.getGuildId())], [i, M]), K = (0, r.useStateFromStores)([N.default], () => N.default.getSessionById(o)), Z = R.default.useName(s), q = (0, r.useStateFromStores)([x.default], () => x.default.getVoicePlatformForChannel(i.id, M), [i.id, M]), {
    enableHangStatus: X
  } = m.HangStatusExperiment.useExperiment({
    guildId: i.guild_id,
    location: "VoiceUsers"
  }), Q = (0, h.default)(i, !0, s), J = (0, r.useStateFromStores)([p.default], () => P ? p.default.getHangStatusActivity() : null, [P]), $ = (0, r.useStateFromStores)([I.default], () => I.default.findActivity(M, e => e.type === O.ActivityTypes.HANG_STATUS), [M]);
  return (0, a.jsx)(E.default, {
    shakeLocation: j.ShakeLocation.VOICE_USER,
    isShaking: w,
    children: (0, a.jsx)(L.default, {
      ...e,
      nick: null != T ? T : Z,
      canDrag: e.canDrag && !k,
      otherClientSessionType: null == K ? void 0 : null === (t = K.clientInfo) || void 0 === t ? void 0 : t.os,
      voicePlatform: q,
      localMute: D && !P,
      localVideoDisabled: U,
      mute: n || D,
      deaf: l || b,
      speaking: w,
      priority: F,
      embeddedApplication: H[0],
      isStreaming: null != Y && Y.channelId === i.id,
      isWatching: null != z && z.state !== O.ApplicationStreamStates.ENDED,
      isGuest: k,
      showHangStatus: Q && X && (g.default.getId() === s.id || null != $),
      hangStatusActivity: P ? J : $,
      isSelf: g.default.getId() === s.id,
      application: X || G ? W : void 0
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
    className: C,
    children: S
  } = e, [_, A] = l.useState(null), [N, v] = l.useState(!1), x = l.useRef(null), R = l.useRef(new o.DelayedCall(50, () => {
    A(x.current), x.current = null
  })), y = l.useRef(new o.DelayedCall(175, () => {
    A(null)
  })), j = l.useCallback(e => {
    t && (v(!0), y.current.cancel(), x.current = e, R.current.delay())
  }, [t]), b = l.useCallback(e => {
    t && (R.current.cancel(), _ === e && (v(!1), y.current.delay()))
  }, [t, _]), U = (0, r.useStateFromStoresArray)([I.default], () => {
    if (d) return [];
    let e = new Set;
    return null == u || u.forEach(t => {
      let {
        user: n
      } = t;
      I.default.getActivities(n.id, s.guild_id).forEach(t => {
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
        isSelfOnOtherClient: g.default.getId() === l.id && r.sessionId !== g.default.getSessionId(),
        mute: r.isVoiceMuted(),
        deaf: r.isVoiceDeafened(),
        video: r.selfVideo,
        serverMute: r.mute,
        serverDeaf: r.deaf,
        sessionId: null !== (t = r.sessionId) && void 0 !== t ? t : "",
        channel: s,
        collapsed: d,
        canDrag: n && T.default.can(O.Permissions.MOVE_MEMBERS, s),
        showPreview: j,
        hidePreview: b,
        previewIsOpen: N,
        shouldShowPreview: _ === l.id,
        tabIndex: h,
        location: m
      }, l.id)
    });
    return null != p && p > 0 ? e.push((0, a.jsx)(L.AudienceVoiceUser, {
      collapsed: d,
      numAudience: p
    })) : d && u.length > c + 1 && e.push((0, a.jsx)(L.MoreVoiceUser, {
      numUsers: u.length - c
    })), e
  })();
  return null == F && null == S ? null : (0, a.jsxs)(M.VoiceUserList, {
    className: i()(C, P.list, {
      [P.collapsed]: d,
      [P.withGuildIcon]: E
    }),
    collapsed: d,
    children: [F, S]
  })
}