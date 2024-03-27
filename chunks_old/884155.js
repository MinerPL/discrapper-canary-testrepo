"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("222007"), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("862337"),
  o = n("899633"),
  d = n("191225"),
  c = n("299285"),
  f = n("442939"),
  h = n("699209"),
  m = n("32346"),
  p = n("835040"),
  E = n("373469"),
  g = n("271938"),
  S = n("26989"),
  C = n("42887"),
  _ = n("957255"),
  I = n("824563"),
  T = n("101125"),
  v = n("235660"),
  x = n("280168"),
  N = n("800762"),
  A = n("68148"),
  M = n("991170"),
  R = n("158998"),
  j = n("774539"),
  L = n("201380"),
  y = n("49111"),
  O = n("39141"),
  P = n("886604");
let D = l.memo(e => {
  var t;
  let {
    mute: n,
    deaf: l,
    user: s,
    channel: i,
    sessionId: u,
    nick: _
  } = e, A = s.id, P = (0, r.useStateFromStores)([g.default], () => g.default.getId() === A, [A]), [D, b, U] = (0, r.useStateFromStoresArray)([C.default], () => P ? [!C.default.isSupported() || C.default.isSelfMute() || C.default.isSelfMutedTemporarily(), C.default.isSelfDeaf(), !1] : [!C.default.isSupported() || C.default.isLocalMute(A), !1, C.default.isLocalVideoDisabled(A)], [P, A]), w = (0, r.useStateFromStores)([x.default], () => x.default.isPrioritySpeaker(A)), F = (0, o.default)({
    userId: A,
    checkSoundSharing: !0
  }), V = (0, r.useStateFromStores)([S.default], () => S.default.isGuestOrLurker(i.guild_id, A)), H = (0, r.useStateFromStores)([d.default], () => d.default.getEmbeddedActivitiesForChannel(i.id).find(e => {
    let {
      userIds: t
    } = e;
    return t.has(A)
  }), [A, i.id]), k = (0, f.default)(null != H ? [H.applicationId] : []), B = (0, j.useIsVoiceUserGameActivityEnabled)("voice_users_eligibility_check", !1), G = (0, r.useStateFromStores)([I.default, T.default], () => P ? T.default.getActivities() : I.default.getActivities(A, i.guild_id)), W = G.find(e => null != e.application_id && e.type === y.ActivityTypes.PLAYING), Y = (0, r.useStateFromStores)([c.default], () => (null == W ? void 0 : W.application_id) != null ? c.default.getApplication(null == W ? void 0 : W.application_id) : void 0);
  null != Y && j.default.trackExposure({
    location: "voice_users"
  });
  let [z, K] = (0, r.useStateFromStoresArray)([E.default], () => [E.default.getStreamForUser(A, i.getGuildId()), E.default.getActiveStreamForUser(A, i.getGuildId())], [i, A]), Z = (0, r.useStateFromStores)([v.default], () => v.default.getSessionById(u)), X = R.default.useName(s), Q = (0, r.useStateFromStores)([N.default], () => N.default.getVoicePlatformForChannel(i.id, A), [i.id, A]), {
    enableHangStatus: q
  } = h.HangStatusExperiment.useExperiment({
    guildId: i.guild_id,
    location: "VoiceUsers"
  }), J = M.can({
    permission: y.Permissions.SET_VOICE_CHANNEL_STATUS,
    user: s,
    context: i
  }), $ = (0, r.useStateFromStores)([m.default], () => P ? m.default.getHangStatusActivity() : null, [P]), ee = (0, r.useStateFromStores)([I.default], () => I.default.findActivity(A, e => e.type === y.ActivityTypes.HANG_STATUS), [A]);
  return (0, a.jsx)(p.default, {
    shakeLocation: O.ShakeLocation.VOICE_USER,
    isShaking: F,
    children: (0, a.jsx)(L.default, {
      ...e,
      nick: null != _ ? _ : X,
      canDrag: e.canDrag && !V,
      otherClientSessionType: null == Z ? void 0 : null === (t = Z.clientInfo) || void 0 === t ? void 0 : t.os,
      voicePlatform: Q,
      localMute: D && !P,
      localVideoDisabled: U,
      mute: n || D,
      deaf: l || b,
      speaking: F,
      priority: w,
      embeddedApplication: k[0],
      isStreaming: null != z && z.channelId === i.id,
      isWatching: null != K && K.state !== y.ApplicationStreamStates.ENDED,
      isGuest: V,
      showHangStatus: J && q && (g.default.getId() === s.id || null != ee),
      hangStatusActivity: P ? $ : ee,
      isSelf: g.default.getId() === s.id,
      application: q || B ? Y : void 0
    })
  })
});
D.displayName = "ConnectedVoiceUser";
var b = function(e) {
  let {
    allowPreviews: t = !0,
    allowDragging: n = !0,
    channel: s,
    voiceStates: o,
    collapsed: d,
    collapsedMax: c = 6,
    tabIndex: h,
    location: m,
    numAudience: p,
    withGuildIcon: E = !1,
    className: S,
    children: C
  } = e, [T, v] = l.useState(null), [x, N] = l.useState(!1), M = l.useRef(null), R = l.useRef(new u.DelayedCall(50, () => {
    v(M.current), M.current = null
  })), j = l.useRef(new u.DelayedCall(175, () => {
    v(null)
  })), O = l.useCallback(e => {
    t && (N(!0), j.current.cancel(), M.current = e, R.current.delay())
  }, [t]), b = l.useCallback(e => {
    t && (R.current.cancel(), T === e && (N(!1), j.current.delay()))
  }, [t, T]), U = (0, r.useStateFromStoresArray)([I.default], () => {
    if (d) return [];
    let e = new Set;
    return null == o || o.forEach(t => {
      let {
        user: n
      } = t, a = I.default.getActivities(n.id, s.guild_id);
      a.forEach(t => {
        null != t.application_id && e.add(t.application_id)
      })
    }), Array.from(e)
  });
  (0, f.default)(U);
  let w = (() => {
    if (null == o || 0 === o.length) return null;
    let e = d && o.length > c + 1 ? o.slice(0, c) : o,
      t = e.map(e => {
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
          canDrag: n && _.default.can(y.Permissions.MOVE_MEMBERS, s),
          showPreview: O,
          hidePreview: b,
          previewIsOpen: x,
          shouldShowPreview: T === l.id,
          tabIndex: h,
          location: m
        }, l.id)
      });
    return null != p && p > 0 ? t.push((0, a.jsx)(L.AudienceVoiceUser, {
      collapsed: d,
      numAudience: p
    })) : d && o.length > c + 1 && t.push((0, a.jsx)(L.MoreVoiceUser, {
      numUsers: o.length - c
    })), t
  })();
  return null == w && null == C ? null : (0, a.jsxs)(A.VoiceUserList, {
    className: i(S, P.list, {
      [P.collapsed]: d,
      [P.withGuildIcon]: E
    }),
    collapsed: d,
    children: [w, C]
  })
}