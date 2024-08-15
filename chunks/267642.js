n.d(t, {
	A3: function () {
		return T;
	},
	FZ: function () {
		return I;
	},
	Je: function () {
		return A;
	},
	KK: function () {
		return F;
	},
	Qi: function () {
		return k;
	},
	Ro: function () {
		return r;
	},
	U2: function () {
		return S;
	},
	Vx: function () {
		return P;
	},
	_k: function () {
		return U;
	},
	_p: function () {
		return R;
	},
	aq: function () {
		return M;
	},
	cP: function () {
		return N;
	},
	e9: function () {
		return O;
	},
	f2: function () {
		return L;
	},
	gZ: function () {
		return G;
	},
	ge: function () {
		return C;
	},
	ig: function () {
		return g;
	},
	nW: function () {
		return v;
	},
	rF: function () {
		return y;
	},
	tb: function () {
		return D;
	},
	tl: function () {
		return V;
	},
	vn: function () {
		return w;
	},
	vx: function () {
		return b;
	},
	yw: function () {
		return B;
	}
}),
	n(411104),
	n(47120),
	n(724458);
var r,
	i,
	a = n(392711),
	s = n.n(a);
n(913527);
var o = n(274136),
	l = n(314884),
	u = n(78839),
	c = n(424218),
	d = n(823379),
	_ = n(63063),
	E = n(74538),
	f = n(981631),
	h = n(474936),
	p = n(689938);
Object.freeze({
	1: 1,
	2: 2,
	3: 3,
	4: 6,
	5: 9,
	6: 12,
	7: 15,
	8: 18,
	9: 24
});
((i = r || (r = {}))[(i.EMOJI = 1)] = 'EMOJI'), (i[(i.AUDIO = 2)] = 'AUDIO'), (i[(i.ANIMATED = 3)] = 'ANIMATED'), (i[(i.CUSTOMIZATION = 4)] = 'CUSTOMIZATION'), (i[(i.UPLOAD = 5)] = 'UPLOAD'), (i[(i.VANITY = 6)] = 'VANITY'), (i[(i.STREAM = 7)] = 'STREAM'), (i[(i.STICKER = 8)] = 'STICKER'), (i[(i.CUSTOM_ROLE_ICON = 11)] = 'CUSTOM_ROLE_ICON'), (i[(i.STAGE_VIDEO = 12)] = 'STAGE_VIDEO'), (i[(i.SOUNDBOARD = 13)] = 'SOUNDBOARD');
let m = [f.Eu4.NONE, f.Eu4.TIER_1, f.Eu4.TIER_2, f.Eu4.TIER_3],
	I = (e, t) => {
		var n;
		return e === f.Eu4.NONE ? f.Eu4.TIER_1 : null === (n = x(t).find((t) => t.tier === e)) || void 0 === n ? void 0 : n.nextTier;
	},
	T = (e, t) => (null != t && t.hasFeature(f.oNc.MORE_STICKERS) && e === f.Eu4.TIER_3 ? o.D.MAX_STICKER_SLOTS : h.$8[e]),
	g = (e) => h.pH[e],
	S = (e, t) => (null != t && t.hasFeature(f.oNc.MORE_SOUNDBOARD) ? 96 : h._k[e]),
	A = (e) => {
		if (e === f.Eu4.NONE) return h._k[e];
		let t = m[m.indexOf(e) - 1];
		return h._k[e] - h._k[t];
	},
	N = (e) => [
		{
			tier: f.Eu4.TIER_1,
			title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_1,
			perks: [
				{
					title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
						adding: h.HO[f.Eu4.TIER_1].limits.emoji - h.HO[f.Eu4.NONE].limits.emoji,
						total: h.HO[f.Eu4.TIER_1].limits.emoji
					}),
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_EMOJI,
					icon: 1
				},
				{
					title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
						adding: g(f.Eu4.TIER_1),
						total: T(f.Eu4.TIER_1)
					}),
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STICKER,
					icon: 8
				},
				{
					title: p.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
						soundCount: A(f.Eu4.TIER_1),
						totalSoundCount: S(f.Eu4.TIER_1)
					}),
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SOUNDBOARD,
					icon: 13
				},
				{
					title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({ bitrate: h.HO[f.Eu4.TIER_1].limits.bitrate / 1000 }),
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_AUDIO_QUALITY,
					icon: 2
				},
				{
					title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_ANIMATED_GUILD_ICON,
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_ANIMATED_GUILD_ICON.format(),
					icon: 3
				},
				{
					title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_SPLASH,
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_SPLASH,
					icon: 4
				},
				{
					title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_1_STREAMING,
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_1_STREAMING,
					icon: 7
				}
			].filter(d.lm)
		},
		{
			tier: f.Eu4.TIER_2,
			title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_2,
			perks: [
				{
					title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
						adding: h.HO[f.Eu4.TIER_2].limits.emoji - h.HO[f.Eu4.TIER_1].limits.emoji,
						total: h.HO[f.Eu4.TIER_2].limits.emoji
					}),
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_EMOJI,
					icon: 1
				},
				{
					title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
						adding: g(f.Eu4.TIER_2),
						total: T(f.Eu4.TIER_2)
					}),
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STICKER,
					icon: 8
				},
				{
					title: p.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
						soundCount: A(f.Eu4.TIER_2),
						totalSoundCount: S(f.Eu4.TIER_2)
					}),
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_SOUNDBOARD,
					icon: 13
				},
				{
					title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({ bitrate: h.HO[f.Eu4.TIER_2].limits.bitrate / 1000 }),
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_AUDIO_QUALITY,
					icon: 2
				},
				{
					title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_BANNER,
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_BANNER,
					icon: 4
				},
				{
					title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({ fileSize: (0, c.BU)(h.HO[f.Eu4.TIER_2].limits.fileSize / 1024, { useKibibytes: !0 }) }),
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_UPLOAD_LIMIT.format(),
					icon: 5
				},
				{
					title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_STREAMING,
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_STREAMING,
					icon: 7
				},
				{
					title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_2_CUSTOM_ROLE_ICONS,
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_2_CUSTOM_ROLE_ICONS,
					icon: 11
				},
				e
					? {
							title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({ limit: f.eez }),
							description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({ limit: f.eez }),
							icon: 12
						}
					: null
			].filter(d.lm)
		},
		{
			tier: f.Eu4.TIER_3,
			title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERKS_TITLE_TIER_3,
			perks: [
				{
					title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_EMOJI.format({
						adding: h.HO[f.Eu4.TIER_3].limits.emoji - h.HO[f.Eu4.TIER_2].limits.emoji,
						total: h.HO[f.Eu4.TIER_3].limits.emoji
					}),
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_EMOJI,
					icon: 1
				},
				{
					title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_STICKER.format({
						adding: g(f.Eu4.TIER_3),
						total: T(f.Eu4.TIER_3)
					}),
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_STICKER,
					icon: 8
				},
				{
					title: p.Z.Messages.SOUNDBOARD_MARKETING_BOOSTING_PERKS.format({
						soundCount: A(f.Eu4.TIER_3),
						totalSoundCount: S(f.Eu4.TIER_3)
					}),
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_SOUNDBOARD,
					icon: 13
				},
				{
					title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_AUDIO_QUALITY.format({ bitrate: h.HO[f.Eu4.TIER_3].limits.bitrate / 1000 }),
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_AUDIO_QUALITY,
					icon: 2
				},
				{
					title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_VANITY_URL,
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_VANITY_URL.format({ helpdeskArticle: _.Z.getArticleURL(f.BhN.GUILD_VANITY_URL) }),
					icon: 6
				},
				{
					title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_ANY_UPLOAD_LIMIT.format({ fileSize: (0, c.BU)(h.HO[f.Eu4.TIER_3].limits.fileSize / 1024, { useKibibytes: !0 }) }),
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_UPLOAD_LIMIT.format(),
					icon: 5
				},
				{
					title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_TIER_3_ANIMATED_BANNER,
					description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_DESCRIPTION_TIER_3_ANIMATED_BANNER,
					icon: 3
				},
				e
					? {
							title: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({ limit: f.RcX }),
							description: p.Z.Messages.GUILD_SETTINGS_GUILD_PREMIUM_PERK_TITLE_VIDEO_STAGE.format({ limit: f.RcX }),
							icon: 12
						}
					: null
			].filter(d.lm)
		}
	];
function v(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
		{ useLevels: n = !0 } = t;
	switch (e) {
		case f.Eu4.NONE:
			return n ? p.Z.Messages.PREMIUM_GUILD_TIER_0 : p.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME;
		case f.Eu4.TIER_1:
			return p.Z.Messages.PREMIUM_GUILD_TIER_1;
		case f.Eu4.TIER_2:
			return p.Z.Messages.PREMIUM_GUILD_TIER_2;
		case f.Eu4.TIER_3:
			return p.Z.Messages.PREMIUM_GUILD_TIER_3;
		default:
			throw Error('Not a valid tier type');
	}
}
function O(e) {
	switch (e) {
		case f.Eu4.NONE:
			return p.Z.Messages.PREMIUM_GUILD_TIER_0;
		case f.Eu4.TIER_1:
			return p.Z.Messages.PREMIUM_GUILD_TIER_1_SHORT;
		case f.Eu4.TIER_2:
			return p.Z.Messages.PREMIUM_GUILD_TIER_2_SHORT;
		case f.Eu4.TIER_3:
			return p.Z.Messages.PREMIUM_GUILD_TIER_3_SHORT;
		default:
			throw Error('Not a valid tier type');
	}
}
let R = s().memoize((e) => (h.HO[f.Eu4.TIER_1].features.includes(e) ? f.Eu4.TIER_1 : h.HO[f.Eu4.TIER_2].features.includes(e) ? f.Eu4.TIER_2 : h.HO[f.Eu4.TIER_3].features.includes(e) ? f.Eu4.TIER_3 : null)),
	C = (e) => {
		if (e === f.Eu4.NONE) return f.Qqv.NONE;
		if (e === f.Eu4.TIER_1) return f.Qqv.TIER_1;
		if (e === f.Eu4.TIER_2) return f.Qqv.TIER_2;
		else if (e === f.Eu4.TIER_3) return f.Qqv.TIER_3;
		return null;
	};
function y(e, t) {
	for (let n of x(t)) if (e >= n.amount) return n.tier;
	return f.Eu4.NONE;
}
function D(e, t) {
	return null == t || (null != e && e >= t);
}
function L(e, t) {
	return D(e.premiumTier, t);
}
function b(e) {
	return s()
		.values(e)
		.filter((e) => e.isAvailable());
}
function M() {
	let e = u.ZP.getPremiumTypeSubscription();
	if (null == e ? void 0 : e.isPausedOrPausePending) return p.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION;
	let { numAvailableGuildBoostSlots: t, numCanceledGuildBoostSlots: n } = Object.values(l.Z.boostSlots).reduce((e, t) => (V(t) && e.numCanceledGuildBoostSlots++, t.isAvailable() && e.numAvailableGuildBoostSlots++, e), {
		numAvailableGuildBoostSlots: 0,
		numCanceledGuildBoostSlots: 0
	});
	if (null == e || t > 0) return null;
	if (e.status === f.O0b.PAST_DUE) return p.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_PAST_DUE;
	if (e.status === f.O0b.ACCOUNT_HOLD) return p.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_SUBSCRIPTION_ACCOUNT_HOLD;
	if (n > 0) return p.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION;
	if (null == e.renewalMutations) return null;
	let r = E.uV(e.renewalMutations.additionalPlans);
	return E.uV(e.additionalPlans) > r ? p.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PREMIUM_GUILD_SUBSCRIPTION : p.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_PURCHASE_BUTTON_DISABLED_PENDING_MUTATION_PLAN;
}
function P(e, t) {
	return U(e, t) > 0;
}
function U(e, t) {
	let n = y(e.length, t),
		r = w(t)[n],
		i = e.filter((e) => null != e.endsAt);
	return r - (e.length - i.length);
}
function w(e) {
	return f.oCV;
}
function x(e) {
	let t = w(e);
	return [
		{
			tier: f.Eu4.TIER_3,
			amount: t[f.Eu4.TIER_3],
			nextTier: null
		},
		{
			tier: f.Eu4.TIER_2,
			amount: t[f.Eu4.TIER_2],
			nextTier: f.Eu4.TIER_3
		},
		{
			tier: f.Eu4.TIER_1,
			amount: t[f.Eu4.TIER_1],
			nextTier: f.Eu4.TIER_2
		}
	];
}
function G(e, t) {
	let n = U(e, t);
	if (n > 0) {
		let t = e.sort((e, t) => (null != e.endsAt && null != t.endsAt ? e.endsAt.getTime() - t.endsAt.getTime() : -1)).filter((e) => null != e.endsAt);
		return t[t.length - n].endsAt;
	}
	return null;
}
function k(e, t) {
	let n = g(t),
		r = m.indexOf(t);
	if (-1 === r) return 0;
	let i = m[r - 1],
		a = null != i ? T(i) : 0,
		s = T(t);
	return Math.max(0, n - e.slice(a, s).length);
}
function B(e, t, n) {
	return -1 === m.indexOf(n) ? 0 : Math.max(0, S(n, e) - t.length);
}
function F(e, t) {
	let n = e.premiumSubscriberCount;
	return Math.max(0, w(e.id)[t] - n);
}
function V(e) {
	var t;
	return (null === (t = e.subscription) || void 0 === t ? void 0 : t.status) === f.O0b.CANCELED || e.canceled;
}
