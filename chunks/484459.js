n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(570140),
    i = n(232567),
    a = n(220082),
    s = n(275759),
    o = n(365943),
    l = n(592125),
    u = n(271383),
    c = n(621853),
    d = n(120569);
async function _(e, t) {
    var n, _, E, f;
    let { withMutualGuilds: h = !1, withMutualFriendsCount: p = !1, withMutualFriends: I = !1, friendToken: m, preloadUserBanner: T = !0, dispatchWait: S = !1, guildId: g, channelId: A, joinRequestId: N, abortSignal: O } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ('' === e || c.Z.isFetchingProfile(e, g)) return;
    let R = c.Z.getUserProfile(e),
        v = Date.now() - (null !== (f = null == R ? void 0 : R.lastFetched) && void 0 !== f ? f : 0) >= 60000;
    if (((null == R ? void 0 : null === (n = R.fetchError) || void 0 === n ? void 0 : n.status) === 404 || (null == R ? void 0 : null === (_ = R.fetchError) || void 0 === _ ? void 0 : _.status) === 429) && !v) return;
    let C = c.Z.getGuildMemberProfile(e, g),
        y = c.Z.getMutualGuilds(e),
        L = c.Z.getMutualFriends(e),
        D = c.Z.getMutualFriendsCount(e);
    h = h || null != g;
    let b = null == L && I,
        M = null == D && p,
        P = null != g && null == C;
    if (!(null == y && h) && !b && !M && !P && !v) return;
    (0, o.z)(), null != t && (0, a.vM)(t);
    let U = {
            withMutualGuilds: h,
            withMutualFriends: I,
            withMutualFriendsCount: p,
            friendToken: m,
            guildId: g,
            joinRequestId: N,
            abortSignal: O,
            connectionsRoleId:
                null == g
                    ? void 0
                    : null ===
                            (E = (0, s.Ur)({
                                guildMember: u.ZP.getMember(g, e),
                                channel: l.Z.getChannel(A)
                            })) || void 0 === E
                      ? void 0
                      : E.id
        },
        w = T ? d.Z : void 0;
    if (S) return r.Z.wait(() => (0, i.In)(e, U, w));
    await (0, i.In)(e, U, w);
}
