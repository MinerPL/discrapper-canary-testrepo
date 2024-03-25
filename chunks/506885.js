"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("913144"),
  r = n("327037"),
  l = n("462274"),
  s = n("535013"),
  o = n("501768"),
  u = n("42203"),
  a = n("26989"),
  c = n("713135"),
  d = n("386714");
async function f(e, t) {
  var n, f, h;
  let v, {
    withMutualGuilds: m = !1,
    withMutualFriendsCount: C = !1,
    friendToken: E,
    preloadUserBanner: g = !0,
    dispatchWait: p = !1,
    guildId: S,
    channelId: _
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if ("" === e) return;
  (0, o.getOrFetchProfileEffects)(), null != t && (0, l.maybeFetchColors)(t), null != S && !m && (m = !0), null != S && (v = null !== (f = null === (n = (0, s.getVisibleConnectionsRole)({
    guildMember: a.default.getMember(S, e),
    channel: u.default.getChannel(_)
  })) || void 0 === n ? void 0 : n.id) && void 0 !== f ? f : void 0);
  let I = c.default.getUserProfile(e),
    P = c.default.getMutualGuilds(e),
    A = c.default.getMutualFriendsCount(e),
    T = c.default.isFetchingProfile(e),
    N = (null == I ? void 0 : I.profileFetchFailed) || !T && (!Array.isArray(P) && m || null == A && C),
    x = g ? d.default : void 0,
    M = !1;
  if (null != S) {
    let t = c.default.getGuildMemberProfile(e, S);
    M = null == t
  }!(!N && !M && (T || Date.now() - (null !== (h = null == I ? void 0 : I.lastFetched) && void 0 !== h ? h : 0) < 6e4)) && (p ? await i.default.wait(() => (0, r.fetchProfile)(e, {
    withMutualGuilds: m,
    withMutualFriendsCount: C,
    friendToken: E,
    guildId: S,
    connectionsRoleId: v
  }, x)) : await (0, r.fetchProfile)(e, {
    withMutualGuilds: m,
    withMutualFriendsCount: C,
    friendToken: E,
    guildId: S,
    connectionsRoleId: v
  }, x))
}