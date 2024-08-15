n(47120), n(789020);
var r = n(392711),
	i = n.n(r),
	a = n(846519),
	s = n(726542),
	o = n(706454),
	l = n(598077),
	u = n(314897),
	c = n(430824),
	d = n(158776),
	_ = n(412788),
	E = n(771845),
	f = n(689938);
function h(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
let p = new Set(),
	I = new Set(),
	m = {},
	T = {},
	g = {},
	S = {},
	A = {},
	N = {},
	v = {},
	O = !1;
function R(e) {
	let t = m[e];
	if ((null == t ? void 0 : t.profileEffectExpiresAt) == null) return;
	let n = 1000 * t.profileEffectExpiresAt - Date.now();
	if (n <= 0)
		(m[e] = {
			...t,
			profileEffectId: void 0,
			profileEffectExpiresAt: void 0
		}),
			delete g[e],
			Y.emitChange();
	else {
		let t = g[e];
		if (null == t) return;
		t.start(Math.min(2147483647, n), () => R(e));
	}
}
function C(e, t) {
	let n = T[e];
	if (null == n) return;
	let r = n[t];
	if ((null == r ? void 0 : r.profileEffectExpiresAt) == null) return;
	let i = 1000 * r.profileEffectExpiresAt - Date.now();
	if (i <= 0)
		(n[t] = {
			...r,
			profileEffectId: void 0,
			profileEffectExpiresAt: void 0
		}),
			null != S[e] && delete S[e][t],
			Y.emitChange();
	else {
		let n = S[e];
		if (null == n) return;
		let r = n[t];
		if (null == r) return;
		r.start(Math.min(2147483647, i), () => C(e, t));
	}
}
function y() {
	p.clear(), I.clear(), (m = {}), (T = {}), (A = {}), (N = {}), (v = {}), (O = !1);
}
function D(e) {
	let { userId: t } = e;
	I.add(t);
}
function L(e) {
	let { userId: t } = e;
	I.delete(t);
}
function b(e) {
	return i()(e)
		.map((e) => ({
			key: e.id,
			user: new l.Z(e),
			status: d.Z.getStatus(e.id)
		}))
		.sortBy((e) => {
			let { user: t } = e;
			return t.username.toLowerCase();
		})
		.value();
}
function M(e) {
	I.delete(e.userId), (A[e.userId] = b(e.mutualFriends)), (N[e.userId] = e.mutualFriends.length);
}
function P() {
	if (0 === Object.keys(v).length) return !1;
	v = {};
}
function U(e) {
	if (null == v[e.user.id]) return !1;
	delete v[e.user.id];
}
function w(e) {
	var t, n, r, i, o, l, u, d, _, h, I, O, y, D, L, M, P, U, w, x, G, k, B, F;
	if ((p.delete(e.user.id), null != e.mutual_guilds)) {
		let t = {};
		e.mutual_guilds.forEach((e) => {
			let { id: n, nick: r } = e,
				i = c.Z.getGuild(n);
			null != i &&
				(t[n] = {
					guild: i,
					nick: r
				});
		}),
			(v[e.user.id] = E.ZP.getFlattenedGuildIds()
				.filter((e) => null != t[e])
				.map((e) => ({
					guild: t[e].guild,
					nick: t[e].nick
				})));
	}
	if (null != e.mutual_friends_count) {
		let t = e.mutual_friends_count;
		N[e.user.id] = t;
	}
	null != e.mutual_friends && ((A[e.user.id] = b(e.mutual_friends)), (N[e.user.id] = e.mutual_friends.length));
	let V = null != e.premium_since ? new Date(e.premium_since) : null,
		H = null != e.premium_guild_since ? new Date(e.premium_guild_since) : null,
		Z = e.application;
	if (
		((m[e.user.id] = {
			userId: e.user.id,
			banner: null === (t = e.user_profile) || void 0 === t ? void 0 : t.banner,
			accentColor: null === (n = e.user_profile) || void 0 === n ? void 0 : n.accent_color,
			themeColors: null === (r = e.user_profile) || void 0 === r ? void 0 : r.theme_colors,
			popoutAnimationParticleType:
				null === (i = e.user_profile) || void 0 === i ? void 0 : i.popout_animation_particle_type,
			bio: null !== (y = null === (o = e.user_profile) || void 0 === o ? void 0 : o.bio) && void 0 !== y ? y : '',
			profileEffectId:
				null === (u = e.user_profile) || void 0 === u
					? void 0
					: null === (l = u.profile_effect) || void 0 === l
						? void 0
						: l.id,
			profileEffectExpiresAt:
				null === (_ = e.user_profile) || void 0 === _
					? void 0
					: null === (d = _.profile_effect) || void 0 === d
						? void 0
						: d.expires_at,
			pronouns:
				null !== (D = null === (h = e.user_profile) || void 0 === h ? void 0 : h.pronouns) && void 0 !== D ? D : '',
			connectedAccounts:
				null !== (L = e.connected_accounts.filter((e) => s.Z.isSupported(e.type))) && void 0 !== L ? L : [],
			applicationRoleConnections: null !== (M = e.application_role_connections) && void 0 !== M ? M : [],
			premiumSince: V,
			premiumType: e.premium_type,
			premiumGuildSince: H,
			lastFetched: Date.now(),
			legacyUsername: e.legacy_username,
			profileFetchFailed: !1,
			application:
				null != Z
					? {
							id: Z.id,
							primarySkuId: Z.primary_sku_id,
							customInstallUrl: Z.custom_install_url,
							installParams: Z.install_params,
							integrationTypesConfig: Z.integration_types_config,
							flags: Z.flags,
							popularApplicationCommandIds: Z.popular_application_command_ids,
							storefront_available: Z.storefront_available
						}
					: null,
			badges:
				null != e.badges
					? e.badges.map((e) =>
							'premium' === e.id && null != V
								? {
										...e,
										description: f.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({ date: V })
									}
								: e.id.startsWith('guild_booster_lvl') && null != H
									? {
											...e,
											description: f.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({ date: H })
										}
									: e
						)
					: e.badges
		}),
		(null === (O = e.user_profile) || void 0 === O
			? void 0
			: null === (I = O.profile_effect) || void 0 === I
				? void 0
				: I.expires_at) != null)
	) {
		let t = new a.V7();
		(g[e.user.id] = t), R(e.user.id);
	}
	if (null != e.guild_member_profile) {
		let t = {
			userId: e.user.id,
			guildId: e.guild_member_profile.guild_id,
			banner: e.guild_member_profile.banner,
			accentColor: e.guild_member_profile.accent_color,
			themeColors: null === (P = e.guild_member_profile) || void 0 === P ? void 0 : P.theme_colors,
			popoutAnimationParticleType:
				null === (U = e.guild_member_profile) || void 0 === U ? void 0 : U.popout_animation_particle_type,
			profileEffectId:
				null === (x = e.guild_member_profile) || void 0 === x
					? void 0
					: null === (w = x.profile_effect) || void 0 === w
						? void 0
						: w.id,
			profileEffectExpiresAt:
				null === (k = e.guild_member_profile) || void 0 === k
					? void 0
					: null === (G = k.profile_effect) || void 0 === G
						? void 0
						: G.expires_at,
			bio: e.guild_member_profile.bio,
			pronouns: e.guild_member_profile.pronouns,
			badges: e.guild_badges
		};
		if (
			(null != T[e.user.id]
				? (T[e.user.id][e.guild_member_profile.guild_id] = t)
				: (T[e.user.id] = { [e.guild_member_profile.guild_id]: t }),
			(null === (F = e.guild_member_profile) || void 0 === F
				? void 0
				: null === (B = F.profile_effect) || void 0 === B
					? void 0
					: B.expires_at) != null)
		) {
			let t = new a.V7();
			(S[e.user.id][e.guild_member_profile.guild_id] = t), C(e.user.id, e.guild_member_profile.guild_id);
		}
	}
}
function x(e) {
	let { userId: t } = e;
	p.add(t);
}
function G(e) {
	var t;
	let { userId: n } = e;
	(m[n] =
		null !== (t = m[n]) && void 0 !== t
			? t
			: {
					connectedAccounts: [],
					applicationRoleConnections: [],
					premiumSince: null,
					premiumGuildSince: null,
					lastFetched: Date.now(),
					profileFetchFailed: !0,
					application: null,
					legacyUsername: null,
					userId: n,
					banner: null,
					accentColor: null,
					bio: '',
					pronouns: ''
				}),
		p.delete(n);
}
function k(e) {
	O = !0;
}
function B(e) {
	(O = !1),
		null != e.guild_id
			? !(function (e) {
					let {
						userId: t,
						guild_id: n,
						accent_color: r,
						banner: i,
						bio: s,
						pronouns: o,
						popout_animation_particle_type: l,
						theme_colors: u,
						profileEffectId: c,
						profileEffectExpiresAt: d
					} = e;
					if (null == n || null == T[t]) return !1;
					let _ = T[t][n];
					if (null == _) return !1;
					if (
						((T[t][n] = {
							..._,
							accentColor: r,
							banner: i,
							bio: s,
							pronouns: o,
							popoutAnimationParticleType: l,
							themeColors: u,
							profileEffectId: c,
							profileEffectExpiresAt: d
						}),
						null != d)
					) {
						let e = new a.V7();
						null != S[t] ? (S[t][n] = e) : (S[t] = { [n]: e }), C(t, n);
					}
				})(e)
			: !(function (e) {
					let {
							userId: t,
							accent_color: n,
							banner: r,
							bio: i,
							pronouns: s,
							popout_animation_particle_type: o,
							theme_colors: l,
							profileEffectId: u,
							profileEffectExpiresAt: c
						} = e,
						d = m[t];
					if (null == d) return !1;
					if (
						((m[t] = {
							...d,
							accentColor: n,
							banner: r,
							bio: i,
							pronouns: s,
							popoutAnimationParticleType: o,
							themeColors: l,
							profileEffectId: u,
							profileEffectExpiresAt: c
						}),
						null != c)
					) {
						let e = new a.V7();
						(g[t] = e), R(t);
					}
				})(e);
}
function F(e) {
	O = !1;
}
function V(e) {
	let { user: t } = e;
	if (p.has(t.id) || null == m[t.id]) return !1;
	m[t.id].lastFetched = 0;
}
function H() {
	p.clear(), (m = {}), (T = {});
}
class Z extends _.Z {
	initialize() {
		this.waitFor(E.ZP), this.syncWith([o.default], H);
	}
	isFetchingProfile(e) {
		return p.has(e);
	}
	isFetchingFriends(e) {
		return I.has(e);
	}
	get isSubmitting() {
		return O;
	}
	getUserProfile(e) {
		return m[e];
	}
	getGuildMemberProfile(e, t) {
		var n;
		return null == t ? null : null === (n = T[e]) || void 0 === n ? void 0 : n[t];
	}
	getMutualFriends(e) {
		return A[e];
	}
	getMutualFriendsCount(e) {
		return N[e];
	}
	getMutualGuilds(e) {
		return v[e];
	}
	takeSnapshot() {
		let e = u.default.getId();
		return {
			version: Z.LATEST_SNAPSHOT_VERSION,
			data: [
				{
					userId: e,
					profile: m[e]
				}
			]
		};
	}
	constructor() {
		super({
			CACHE_LOADED_LAZY: () => this.loadCache(),
			USER_PROFILE_FETCH_START: x,
			USER_PROFILE_FETCH_FAILURE: G,
			USER_PROFILE_FETCH_SUCCESS: w,
			USER_PROFILE_UPDATE_START: k,
			USER_PROFILE_UPDATE_SUCCESS: B,
			USER_PROFILE_UPDATE_FAILURE: F,
			MUTUAL_FRIENDS_FETCH_START: D,
			MUTUAL_FRIENDS_FETCH_SUCCESS: M,
			MUTUAL_FRIENDS_FETCH_FAILURE: L,
			GUILD_JOIN: P,
			GUILD_DELETE: P,
			GUILD_MEMBER_ADD: U,
			GUILD_MEMBER_REMOVE: U,
			GUILD_MEMBER_UPDATE: V,
			USER_UPDATE: V,
			LOGOUT: y
		}),
			h(this, 'loadCache', () => {
				let e = this.readSnapshot(Z.LATEST_SNAPSHOT_VERSION);
				null != e &&
					e.forEach((e) => {
						let { userId: t, profile: n } = e;
						m[t] = n;
					});
			});
	}
}
h(Z, 'displayName', 'UserProfileStore'), h(Z, 'LATEST_SNAPSHOT_VERSION', 1);
let Y = new Z();
t.Z = Y;
