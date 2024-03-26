"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("913144"),
  i = n("327037"),
  u = n("462274"),
  r = n("535013"),
  a = n("42203"),
  o = n("26989"),
  s = n("713135"),
  d = n("386714");
async function c(e, t) {
  var n, c, f;
  let g, {
    withMutualGuilds: _ = !1,
    withMutualFriendsCount: h = !1,
    friendToken: E,
    preloadUserBanner: S = !0,
    dispatchWait: m = !1,
    guildId: v,
    channelId: p
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if ("" === e) return;
  null != t && (0, u.maybeFetchColors)(t), null != v && !_ && (_ = !0), null != v && (g = null !== (c = null === (n = (0, r.getVisibleConnectionsRole)({
    guildMember: o.default.getMember(v, e),
    channel: a.default.getChannel(p)
  })) || void 0 === n ? void 0 : n.id) && void 0 !== c ? c : void 0);
  let T = s.default.getUserProfile(e),
    M = s.default.getMutualGuilds(e),
    C = s.default.getMutualFriendsCount(e),
    I = s.default.isFetchingProfile(e),
    A = (null == T ? void 0 : T.profileFetchFailed) || !I && (!Array.isArray(M) && _ || null == C && h),
    P = S ? d.default : void 0,
    b = !1;
  if (null != v) {
    let t = s.default.getGuildMemberProfile(e, v);
    b = null == t
  }!(!A && !b && (I || Date.now() - (null !== (f = null == T ? void 0 : T.lastFetched) && void 0 !== f ? f : 0) < 6e4)) && (m ? await l.default.wait(() => (0, i.fetchProfile)(e, {
    withMutualGuilds: _,
    withMutualFriendsCount: h,
    friendToken: E,
    guildId: v,
    connectionsRoleId: g
  }, P)) : await (0, i.fetchProfile)(e, {
    withMutualGuilds: _,
    withMutualFriendsCount: h,
    friendToken: E,
    guildId: v,
    connectionsRoleId: g
  }, P))
}