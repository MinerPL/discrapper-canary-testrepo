n(47120), n(653041);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(442837),
  o = n(846519),
  c = n(586902),
  d = n(317381),
  u = n(812206),
  h = n(835473),
  p = n(362721),
  m = n(574176),
  _ = n(106301),
  f = n(512384),
  E = n(470956),
  C = n(199902),
  g = n(314897),
  I = n(271383),
  x = n(131951),
  T = n(496675),
  v = n(158776),
  N = n(885110),
  S = n(797258),
  Z = n(606304),
  A = n(979651),
  M = n(805009),
  b = n(51144),
  R = n(649739),
  j = n(262317),
  L = n(981631),
  P = n(524484),
  O = n(74307);
let y = a.memo(e => {
  var t;
  let {
mute: n,
deaf: a,
user: l,
channel: s,
sessionId: o,
nick: T
  } = e, M = l.id, O = (0, r.e7)([g.default], () => g.default.getId() === M, [M]), [y, D, k] = (0, r.Wu)([x.Z], () => O ? [
!x.Z.isSupported() || x.Z.isSelfMute() || x.Z.isSelfMutedTemporarily(),
x.Z.isSelfDeaf(),
!1
  ] : [
!x.Z.isSupported() || x.Z.isLocalMute(M),
!1,
x.Z.isLocalVideoDisabled(M)
  ], [
O,
M
  ]), U = (0, r.e7)([Z.Z], () => Z.Z.isPrioritySpeaker(M)), w = (0, c.Z)({
userId: M,
checkSoundSharing: !0
  }), B = (0, r.e7)([I.ZP], () => I.ZP.isGuestOrLurker(s.guild_id, M)), H = (0, r.e7)([d.ZP], () => d.ZP.getEmbeddedActivitiesForChannel(s.id).find(e => {
let {
  userIds: t
} = e;
return t.has(M);
  }), [
M,
s.id
  ]), G = (0, h.Z)(null != H ? [H.applicationId] : []), V = (0, R.Hr)('voice_users_eligibility_check', !1), F = (0, r.e7)([
v.Z,
N.Z
  ], () => O ? N.Z.getActivities() : v.Z.getActivities(M, s.guild_id)).find(e => null != e.application_id && e.type === L.IIU.PLAYING), W = (0, r.e7)([u.Z], () => (null == F ? void 0 : F.application_id) != null ? u.Z.getApplication(null == F ? void 0 : F.application_id) : void 0);
  null != W && R.ZP.trackExposure({
location: 'voice_users'
  });
  let [z, Y] = (0, r.Wu)([C.Z], () => [
C.Z.getStreamForUser(M, s.getGuildId()),
C.Z.getActiveStreamForUser(M, s.getGuildId())
  ], [
s,
M
  ]), K = (0, r.e7)([S.Z], () => S.Z.getSessionById(o)), q = b.ZP.useName(l), X = (0, r.e7)([A.Z], () => A.Z.getVoicePlatformForChannel(s.id, M), [
s.id,
M
  ]), {
enableHangStatus: Q
  } = m.n.useExperiment({
guildId: s.guild_id,
location: 'VoiceUsers'
  }), J = (0, p.Z)(s, !0, l), $ = (0, r.e7)([_.Z], () => O ? _.Z.getHangStatusActivity() : null, [O]), ee = (0, r.e7)([v.Z], () => v.Z.findActivity(M, e => e.type === L.IIU.HANG_STATUS), [M]), et = (0, E.Eu)(s.id, M);
  return (0, i.jsx)(f.Z, {
shakeLocation: P.oZ.VOICE_USER,
isShaking: w,
children: (0, i.jsx)(j.ZP, {
  ...e,
  nick: null != T ? T : q,
  canDrag: e.canDrag && !B,
  otherClientSessionType: null == K ? void 0 : null === (t = K.clientInfo) || void 0 === t ? void 0 : t.os,
  voicePlatform: X,
  localMute: y && !O,
  localVideoDisabled: k,
  mute: n || y,
  deaf: a || D,
  speaking: w,
  disconnected: et,
  priority: U,
  embeddedApplication: G[0],
  isStreaming: null != z && z.channelId === s.id,
  isWatching: null != Y && Y.state !== L.jm8.ENDED,
  isGuest: B,
  showHangStatus: J && Q && (g.default.getId() === l.id || null != ee),
  hangStatusActivity: O ? $ : ee,
  isSelf: g.default.getId() === l.id,
  application: Q || V ? W : void 0
})
  });
});
y.displayName = 'ConnectedVoiceUser';
let D = [];
t.Z = function(e) {
  let {
allowPreviews: t = !0,
allowDragging: n = !0,
channel: l,
voiceStates: c,
collapsed: d,
collapsedMax: u = 6,
tabIndex: p,
location: m,
numAudience: _,
withGuildIcon: f = !1,
className: C,
children: I
  } = e, [x, N] = a.useState(null), [S, Z] = a.useState(!1), A = a.useRef(null), b = (0, E.Es)(l.id, null != c ? c : D), R = a.useRef(new o.sW(50, () => {
N(A.current), A.current = null;
  })), P = a.useRef(new o.sW(175, () => {
N(null);
  })), k = a.useCallback(e => {
t && (Z(!0), P.current.cancel(), A.current = e, R.current.delay());
  }, [t]), U = a.useCallback(e => {
t && (R.current.cancel(), x === e && (Z(!1), P.current.delay()));
  }, [
t,
x
  ]), w = (0, r.Wu)([v.Z], () => {
if (d)
  return [];
let e = new Set();
return null == b || b.forEach(t => {
  let {
    user: n
  } = t;
  v.Z.getActivities(n.id, l.guild_id).forEach(t => {
    null != t.application_id && e.add(t.application_id);
  });
}), Array.from(e);
  });
  (0, h.Z)(w);
  let B = (() => {
if (null == b || 0 === b.length)
  return null;
let e = (d && b.length > u + 1 ? b.slice(0, u) : b).map(e => {
  var t;
  let {
    user: a,
    nick: s,
    voiceState: r
  } = e;
  return (0, i.jsx)(y, {
    user: a,
    nick: s,
    isSelfOnOtherClient: g.default.getId() === a.id && r.sessionId !== g.default.getSessionId(),
    mute: r.isVoiceMuted(),
    deaf: r.isVoiceDeafened(),
    video: r.selfVideo,
    serverMute: r.mute,
    serverDeaf: r.deaf,
    sessionId: null !== (t = r.sessionId) && void 0 !== t ? t : '',
    channel: l,
    collapsed: d,
    canDrag: n && T.Z.can(L.Plq.MOVE_MEMBERS, l),
    showPreview: k,
    hidePreview: U,
    previewIsOpen: S,
    shouldShowPreview: x === a.id,
    tabIndex: p,
    location: m
  }, a.id);
});
return null != _ && _ > 0 ? e.push((0, i.jsx)(j.ul, {
  collapsed: d,
  numAudience: _
})) : d && b.length > u + 1 && e.push((0, i.jsx)(j.XX, {
  numUsers: b.length - u
})), e;
  })();
  return null == B && null == I ? null : (0, i.jsxs)(M.e, {
className: s()(C, O.list, {
  [O.collapsed]: d,
  [O.withGuildIcon]: f
}),
collapsed: d,
children: [
  B,
  I
]
  });
};