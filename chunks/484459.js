"use strict";
n.d(t, {
  W: function() {
    return h
  },
  Z: function() {
    return S
  }
}), n(411104);
var i = n(570140),
  r = n(232567),
  s = n(220082),
  o = n(275759),
  a = n(365943),
  l = n(598077),
  u = n(592125),
  _ = n(271383),
  d = n(342656),
  c = n(447452),
  E = n(877485),
  I = n(621853),
  T = n(120569);

function h() {
  let e, t, n;
  for (var i, r, s = arguments.length, o = Array(s), a = 0; a < s; a++) o[a] = arguments[a];
  let u = o[0],
    _ = o[1];
  if ("string" == typeof u && ("string" == typeof _ || null == _)) e = u, t = _, n = o[2];
  else if (u instanceof l.Z && ("object" == typeof _ || null == _)) e = u.id, t = u.getAvatarURL(void 0, 80), n = _;
  else throw Error("Invalid arguments");
  if (null == e) return Promise.resolve();
  let I = (0, E.c)({
      location: "maybeFetchUserProfileForPopout",
      autoTrackExposure: !1
    }),
    T = (0, d.oU)().enabled || (0, c.T)({
      location: "maybeFetchUserProfileForPopout",
      autoTrackExposure: !1
    }).basicsEnabled || I.originalFriendingEnabled || I.improvedFriendingEnabled;
  return S(e, t, {
    withMutualFriends: null !== (i = null == n ? void 0 : n.withMutualFriends) && void 0 !== i ? i : T,
    withMutualGuilds: null !== (r = null == n ? void 0 : n.withMutualGuilds) && void 0 !== r ? r : T,
    ...n
  })
}
async function S(e, t) {
  var n, l, d;
  let c, {
    withMutualGuilds: E = !1,
    withMutualFriendsCount: h = !1,
    withMutualFriends: S = !1,
    friendToken: f,
    preloadUserBanner: N = !0,
    dispatchWait: A = !1,
    guildId: m,
    channelId: O,
    abortSignal: R
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if ("" === e) return;
  (0, a.z)(), null != t && (0, s.vM)(t), null != m && !E && (E = !0), null != m && (c = null !== (l = null === (n = (0, o.Ur)({
    guildMember: _.ZP.getMember(m, e),
    channel: u.Z.getChannel(O)
  })) || void 0 === n ? void 0 : n.id) && void 0 !== l ? l : void 0);
  let C = I.Z.getUserProfile(e),
    p = I.Z.getGuildMemberProfile(e, m),
    g = I.Z.getMutualGuilds(e),
    L = I.Z.getMutualFriends(e),
    v = I.Z.getMutualFriendsCount(e),
    D = I.Z.isFetchingProfile(e),
    M = N ? T.Z : void 0,
    P = null == g && E,
    y = null == L && S,
    U = null == v && h,
    b = null != m && null == p,
    G = Date.now() - (null !== (d = null == C ? void 0 : C.lastFetched) && void 0 !== d ? d : 0) >= 6e4;
  if (!!(!D && (P || U || y)) || !!b || !!G) A ? await i.Z.wait(() => (0, r.In)(e, {
    withMutualGuilds: E,
    withMutualFriends: S,
    withMutualFriendsCount: h,
    friendToken: f,
    guildId: m,
    connectionsRoleId: c,
    abortSignal: R
  }, M)) : await (0, r.In)(e, {
    withMutualGuilds: E,
    withMutualFriends: S,
    withMutualFriendsCount: h,
    friendToken: f,
    guildId: m,
    connectionsRoleId: c,
    abortSignal: R
  }, M)
}