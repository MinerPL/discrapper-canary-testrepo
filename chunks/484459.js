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
	var n, _, E;
	let f,
		{
			withMutualGuilds: h = !1,
			withMutualFriendsCount: p = !1,
			withMutualFriends: I = !1,
			friendToken: m,
			preloadUserBanner: T = !0,
			dispatchWait: g = !1,
			guildId: S,
			channelId: A,
			abortSignal: N
		} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
	if ('' === e) return;
	(0, o.z)(),
		null != t && (0, a.vM)(t),
		null != S && !h && (h = !0),
		null != S &&
			(f =
				null !==
					(_ =
						null ===
							(n = (0, s.Ur)({
								guildMember: u.ZP.getMember(S, e),
								channel: l.Z.getChannel(A)
							})) || void 0 === n
							? void 0
							: n.id) && void 0 !== _
					? _
					: void 0);
	let v = c.Z.getUserProfile(e),
		O = c.Z.getGuildMemberProfile(e, S),
		R = c.Z.getMutualGuilds(e),
		C = c.Z.getMutualFriends(e),
		y = c.Z.getMutualFriendsCount(e),
		D = c.Z.isFetchingProfile(e),
		L = T ? d.Z : void 0,
		b = null == R && h,
		M = null == C && I,
		P = null == y && p,
		U = null != S && null == O,
		w = Date.now() - (null !== (E = null == v ? void 0 : v.lastFetched) && void 0 !== E ? E : 0) >= 60000;
	if (!!(!D && (b || P || M)) || !!U || !!w)
		g
			? await r.Z.wait(() =>
					(0, i.In)(
						e,
						{
							withMutualGuilds: h,
							withMutualFriends: I,
							withMutualFriendsCount: p,
							friendToken: m,
							guildId: S,
							connectionsRoleId: f,
							abortSignal: N
						},
						L
					)
				)
			: await (0, i.In)(
					e,
					{
						withMutualGuilds: h,
						withMutualFriends: I,
						withMutualFriendsCount: p,
						friendToken: m,
						guildId: S,
						connectionsRoleId: f,
						abortSignal: N
					},
					L
				);
}
