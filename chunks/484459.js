n.d(t, {
  W: function() {
return E;
  },
  Z: function() {
return f;
  }
}), n(411104);
var r = n(570140),
  i = n(232567),
  a = n(220082),
  o = n(275759),
  s = n(365943),
  l = n(598077),
  u = n(592125),
  c = n(271383),
  d = n(621853),
  _ = n(120569);

function E() {
  let e, t, n;
  for (var r, i, a = arguments.length, o = Array(a), s = 0; s < a; s++)
o[s] = arguments[s];
  let u = o[0],
c = o[1];
  if ('string' == typeof u && ('string' == typeof c || null == c))
e = u, t = c, n = o[2];
  else if (u instanceof l.Z && ('object' == typeof c || null == c))
e = u.id, t = u.getAvatarURL(void 0, 80), n = c;
  else
throw Error('Invalid arguments');
  return null == e ? Promise.resolve() : f(e, t, {
withMutualFriends: null === (r = null == n ? void 0 : n.withMutualFriends) || void 0 === r || r,
withMutualGuilds: null === (i = null == n ? void 0 : n.withMutualGuilds) || void 0 === i || i,
...n
  });
}
async function f(e, t) {
  var n, l, E;
  let f, {
withMutualGuilds: h = !1,
withMutualFriendsCount: p = !1,
withMutualFriends: m = !1,
friendToken: I,
preloadUserBanner: T = !0,
dispatchWait: g = !1,
guildId: S,
channelId: A,
abortSignal: N
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if ('' === e)
return;
  (0, s.z)(), null != t && (0, a.vM)(t), null != S && !h && (h = !0), null != S && (f = null !== (l = null === (n = (0, o.Ur)({
guildMember: c.ZP.getMember(S, e),
channel: u.Z.getChannel(A)
  })) || void 0 === n ? void 0 : n.id) && void 0 !== l ? l : void 0);
  let v = d.Z.getUserProfile(e),
O = d.Z.getGuildMemberProfile(e, S),
R = d.Z.getMutualGuilds(e),
C = d.Z.getMutualFriends(e),
y = d.Z.getMutualFriendsCount(e),
D = d.Z.isFetchingProfile(e),
L = T ? _.Z : void 0,
b = null == R && h,
M = null == C && m,
P = null == y && p,
U = null != S && null == O,
w = Date.now() - (null !== (E = null == v ? void 0 : v.lastFetched) && void 0 !== E ? E : 0) >= 60000;
  if (!!(!D && (b || P || M)) || !!U || !!w)
g ? await r.Z.wait(() => (0, i.In)(e, {
  withMutualGuilds: h,
  withMutualFriends: m,
  withMutualFriendsCount: p,
  friendToken: I,
  guildId: S,
  connectionsRoleId: f,
  abortSignal: N
}, L)) : await (0, i.In)(e, {
  withMutualGuilds: h,
  withMutualFriends: m,
  withMutualFriendsCount: p,
  friendToken: I,
  guildId: S,
  connectionsRoleId: f,
  abortSignal: N
}, L);
}