n(47120), n(653041);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(442837),
  o = n(846519),
  c = n(586902),
  u = n(317381),
  d = n(812206),
  h = n(835473),
  p = n(362721),
  m = n(574176),
  _ = n(106301),
  f = n(512384),
  E = n(470956),
  g = n(199902),
  C = n(314897),
  I = n(271383),
  x = n(131951),
  T = n(496675),
  N = n(158776),
  v = n(885110),
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
user: s,
channel: l,
sessionId: o,
nick: T
  } = e, M = s.id, O = (0, r.e7)([C.default], () => C.default.getId() === M, [M]), [y, D, k] = (0, r.Wu)([x.Z], () => O ? [
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
  }), B = (0, r.e7)([I.ZP], () => I.ZP.isGuestOrLurker(l.guild_id, M)), H = (0, r.e7)([u.ZP], () => u.ZP.getEmbeddedActivitiesForChannel(l.id).find(e => {
let {
  userIds: t
} = e;
return t.has(M);
  }), [
M,
l.id
  ]), G = (0, h.Z)(null != H ? [H.applicationId] : []), V = (0, R.Hr)('voice_users_eligibility_check', !1), F = (0, r.e7)([
N.Z,
v.Z
  ], () => O ? v.Z.getActivities() : N.Z.getActivities(M, l.guild_id)).find(e => null != e.application_id && e.type === L.IIU.PLAYING), W = (0, r.e7)([d.Z], () => (null == F ? void 0 : F.application_id) != null ? d.Z.getApplication(null == F ? void 0 : F.application_id) : void 0);
  null != W && R.ZP.trackExposure({
location: 'voice_users'
  });
  let [z, Y] = (0, r.Wu)([g.Z], () => [
g.Z.getStreamForUser(M, l.getGuildId()),
g.Z.getActiveStreamForUser(M, l.getGuildId())
  ], [
l,
M
  ]), K = (0, r.e7)([S.Z], () => S.Z.getSessionById(o)), q = b.ZP.useName(s), X = (0, r.e7)([A.Z], () => A.Z.getVoicePlatformForChannel(l.id, M), [
l.id,
M
  ]), {
enableHangStatus: Q
  } = m.n.useExperiment({
guildId: l.guild_id,
location: 'VoiceUsers'
  }), J = (0, p.Z)(l, !0, s), $ = (0, r.e7)([_.Z], () => O ? _.Z.getHangStatusActivity() : null, [O]), ee = (0, r.e7)([N.Z], () => N.Z.findActivity(M, e => e.type === L.IIU.HANG_STATUS), [M]), et = (0, E.Eu)(l.id, M);
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
  isStreaming: null != z && z.channelId === l.id,
  isWatching: null != Y && Y.state !== L.jm8.ENDED,
  isGuest: B,
  showHangStatus: J && Q && (C.default.getId() === s.id || null != ee),
  hangStatusActivity: O ? $ : ee,
  isSelf: C.default.getId() === s.id,
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
channel: s,
voiceStates: c,
collapsed: u,
collapsedMax: d = 6,
tabIndex: p,
location: m,
numAudience: _,
withGuildIcon: f = !1,
className: g,
children: I
  } = e, [x, v] = a.useState(null), [S, Z] = a.useState(!1), A = a.useRef(null), b = (0, E.Es)(s.id, null != c ? c : D), R = a.useRef(new o.sW(50, () => {
v(A.current), A.current = null;
  })), P = a.useRef(new o.sW(175, () => {
v(null);
  })), k = a.useCallback(e => {
t && (Z(!0), P.current.cancel(), A.current = e, R.current.delay());
  }, [t]), U = a.useCallback(e => {
t && (R.current.cancel(), x === e && (Z(!1), P.current.delay()));
  }, [
t,
x
  ]), w = (0, r.Wu)([N.Z], () => {
if (u)
  return [];
let e = new Set();
return null == b || b.forEach(t => {
  let {
    user: n
  } = t;
  N.Z.getActivities(n.id, s.guild_id).forEach(t => {
    null != t.application_id && e.add(t.application_id);
  });
}), Array.from(e);
  });
  (0, h.Z)(w);
  let B = (() => {
if (null == b || 0 === b.length)
  return null;
let e = (u && b.length > d + 1 ? b.slice(0, d) : b).map(e => {
  var t;
  let {
    user: a,
    nick: l,
    voiceState: r
  } = e;
  return (0, i.jsx)(y, {
    user: a,
    nick: l,
    isSelfOnOtherClient: C.default.getId() === a.id && r.sessionId !== C.default.getSessionId(),
    mute: r.isVoiceMuted(),
    deaf: r.isVoiceDeafened(),
    video: r.selfVideo,
    serverMute: r.mute,
    serverDeaf: r.deaf,
    sessionId: null !== (t = r.sessionId) && void 0 !== t ? t : '',
    channel: s,
    collapsed: u,
    canDrag: n && T.Z.can(L.Plq.MOVE_MEMBERS, s),
    showPreview: k,
    hidePreview: U,
    previewIsOpen: S,
    shouldShowPreview: x === a.id,
    tabIndex: p,
    location: m
  }, a.id);
});
return null != _ && _ > 0 ? e.push((0, i.jsx)(j.ul, {
  collapsed: u,
  numAudience: _
})) : u && b.length > d + 1 && e.push((0, i.jsx)(j.XX, {
  numUsers: b.length - d
})), e;
  })();
  return null == B && null == I ? null : (0, i.jsxs)(M.e, {
className: l()(g, O.list, {
  [O.collapsed]: u,
  [O.withGuildIcon]: f
}),
collapsed: u,
children: [
  B,
  I
]
  });
};