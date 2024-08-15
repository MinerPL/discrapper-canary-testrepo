n.d(t, {
	HT: function () {
		return A;
	},
	K5: function () {
		return f;
	},
	LB: function () {
		return g;
	},
	MI: function () {
		return T;
	},
	V_: function () {
		return I;
	},
	X: function () {
		return E;
	},
	X2: function () {
		return d;
	},
	aG: function () {
		return l;
	},
	bg: function () {
		return o;
	},
	ci: function () {
		return _;
	},
	eI: function () {
		return m;
	},
	es: function () {
		return p;
	},
	iW: function () {
		return h;
	},
	j8: function () {
		return S;
	},
	nU: function () {
		return u;
	},
	rD: function () {
		return c;
	}
});
var r = n(544891),
	i = n(881052),
	a = n(981631),
	s = n(231338);
let o = async (e, t) => {
		try {
			return (
				await r.tn.post({
					url: a.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
					body: t
				})
			).body;
		} catch (e) {
			throw new i.Hx(e);
		}
	},
	l = async (e, t, n) => {
		let { priceTier: s, ...o } = n;
		try {
			return (
				await r.tn.post({
					url: a.ANM.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t),
					body: {
						...o,
						price_tier: s
					}
				})
			).body;
		} catch (e) {
			throw new i.Hx(e);
		}
	},
	u = async (e, t, n, s) => {
		let { priceTier: o, ...l } = s;
		try {
			return (
				await r.tn.patch({
					url: a.ANM.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n),
					body: {
						...l,
						price_tier: o
					}
				})
			).body;
		} catch (e) {
			throw new i.Hx(e);
		}
	},
	c = async function (e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeSoftDeleted: !1 },
			n = {
				include_soft_deleted: t.includeSoftDeleted,
				country_code: t.countryCode
			};
		try {
			return (
				await r.tn.get({
					url: a.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e),
					query: n
				})
			).body;
		} catch (e) {
			throw new i.Hx(e);
		}
	},
	d = async (e) => (await r.tn.get({ url: a.ANM.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e) })).body,
	_ = async (e, t) => {
		try {
			return (
				await r.tn.patch({
					url: a.ANM.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(e),
					body: t
				})
			).body;
		} catch (e) {
			throw new i.Hx(e);
		}
	},
	E = async (e) => {
		try {
			return (
				await r.tn.get({
					url: a.ANM.PRICE_TIERS,
					query: {
						price_tier_type: s.RG.GUILD_ROLE_SUBSCRIPTIONS,
						guild_id: e
					}
				})
			).body;
		} catch (e) {
			throw new i.Hx(e);
		}
	},
	f = async function (e, t) {
		let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
		try {
			return (
				await r.tn.get({
					url: a.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(e, t),
					query: {
						include_draft_listings: n.includeDraftListings,
						include_archived_listings: n.includeArchivedListings
					}
				})
			).body;
		} catch (e) {
			throw new i.Hx(e);
		}
	},
	h = async (e) => {
		try {
			return (await r.tn.get({ url: a.ANM.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(e) })).body;
		} catch (e) {
			throw new i.Hx(e);
		}
	},
	p = async (e, t, n) => {
		try {
			await r.tn.del({ url: a.ANM.GUILD_ROLE_SUBSCRIPTION_LISTINGS(e, t, n) });
		} catch (e) {
			throw new i.Hx(e);
		}
	},
	I = async (e, t, n) => {
		try {
			return (await r.tn.post({ url: a.ANM.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(e, t, n) })).body;
		} catch (e) {
			throw new i.Hx(e);
		}
	},
	m = async (e) => {
		try {
			return (await r.tn.get({ url: a.ANM.GUILD_ROLE_SUBSCRIPTION_TRIALS(e) })).body;
		} catch (e) {
			throw new i.Hx(e);
		}
	},
	T = async (e, t, n) => {
		try {
			return (
				await r.tn.patch({
					url: a.ANM.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(e, t),
					body: n
				})
			).body;
		} catch (e) {
			throw new i.Hx(e);
		}
	},
	g = async (e, t, n) => {
		try {
			return (await r.tn.get({ url: a.ANM.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(e, t, n) })).body;
		} catch (e) {
			throw new i.Hx(e);
		}
	},
	S = async function (e) {
		let { signal: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
		try {
			return (
				await r.tn.get({
					url: a.ANM.CREATOR_MONETIZATION_RESTRICTIONS(e),
					signal: t
				})
			).body;
		} catch (e) {
			throw new i.Hx(e);
		}
	},
	A = async (e) => {
		try {
			var t;
			let n = await r.tn.get({ url: a.ANM.GUILD_DISCOVERY_SLUG(e) });
			return null !== (t = n.body) && void 0 !== t ? t : JSON.parse(n.text);
		} catch (e) {
			throw new i.Hx(e);
		}
	};
