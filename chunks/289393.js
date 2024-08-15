n.d(t, {
	M: function () {
		return r;
	}
}),
	n(47120);
var r,
	i,
	a,
	s,
	o,
	l,
	u = n(512722),
	c = n.n(u),
	d = n(442837),
	_ = n(759174),
	E = n(570140),
	f = n(308636);
function h(e) {
	return 'guild:'.concat(e);
}
function p(e) {
	return 'subscription_listing:'.concat(e);
}
function m(e) {
	return 'application:'.concat(e);
}
function I(e) {
	return 'plan:'.concat(e);
}
((a = r || (r = {}))[(a.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (a[(a.FETCHING = 1)] = 'FETCHING'), (a[(a.FETCHED = 2)] = 'FETCHED');
let T = new _.h(
		(e) => [h(e.guild_id), ...e.subscription_listings_ids.map(p)],
		(e) => e.id
	),
	g = new _.h(
		(e) => [m(e.application_id), I(e.subscription_plans[0].id)],
		(e) => e.id
	),
	S = {},
	A = new Set(),
	N = {},
	v = {},
	O = {},
	R = {},
	C = new Map();
function y(e) {
	return T.values(h(e));
}
function D(e) {
	var t;
	for (let n of (T.set(e.id, e), C.set(e.guild_id, e.application_id), null !== (t = e.subscription_listings) && void 0 !== t ? t : [])) L(n);
}
function L(e) {
	g.set(e.id, e);
}
let b = [];
class M extends (i = d.ZP.Store) {
	getSubscriptionGroupListingsForGuildFetchState(e) {
		var t;
		return null !== (t = S[e]) && void 0 !== t ? t : 0;
	}
	getDidFetchListingForSubscriptionPlanId(e) {
		return A.has(e);
	}
	getSubscriptionGroupListing(e) {
		return T.get(e);
	}
	getSubscriptionGroupListingsForGuild(e) {
		return y(e);
	}
	getSubscriptionGroupListingForSubscriptionListing(e) {
		let t = T.values(p(e));
		return c()(t.length <= 1, 'Found multiple group listings for listing'), t[0];
	}
	getSubscriptionListing(e) {
		return g.get(e);
	}
	getSubscriptionListingsForGuild(e) {
		var t;
		let n = null === (t = this.getSubscriptionGroupListingsForGuild(e)[0]) || void 0 === t ? void 0 : t.application_id;
		return null != n ? g.values(m(n)) : b;
	}
	getSubscriptionListingForPlan(e) {
		let t = g.values(I(e));
		return c()(t.length <= 1, 'Found multiple listings for plan'), t[0];
	}
	getSubscriptionSettings(e) {
		return N[e];
	}
	getSubscriptionTrial(e) {
		return v[e];
	}
	getMonetizationRestrictions(e) {
		return O[e];
	}
	getMonetizationRestrictionsFetchState(e) {
		var t;
		return null !== (t = R[e]) && void 0 !== t ? t : 0;
	}
	getApplicationIdForGuild(e) {
		return C.get(e);
	}
}
(l = 'GuildRoleSubscriptionsStore'),
	(o = 'displayName') in (s = M)
		? Object.defineProperty(s, o, {
				value: l,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (s[o] = l),
	(t.Z = new M(E.Z, {
		CONNECTION_OPEN: function () {
			T.clear(), g.clear(), (S = {}), A.clear(), (N = {}), (v = {}), (O = {}), (R = {}), C.clear();
		},
		GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: function (e) {
			let { settings: t } = e;
			N[t.guild_id] = t;
		},
		GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: function (e) {
			let { guildId: t } = e;
			for (let e of ((S[t] = 1), y(t))) for (let t of (T.delete(e.id), e.subscription_listings_ids)) g.delete(t);
		},
		GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function (e) {
			let { guildId: t, groupListings: n, settings: r, subscriptionTrials: i } = e;
			for (let e of ((S[t] = 2), n)) D(e);
			for (let e of ((N[t] = r), i)) v[e.id] = e;
		},
		GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function (e) {
			let { guildId: t } = e;
			S[t] = 2;
		},
		GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: function (e) {
			let { listing: t } = e;
			D(t);
		},
		GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: function (e) {
			let { groupListingId: t } = e;
			T.delete(t);
		},
		GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: function (e) {
			let { planId: t } = e;
			A.add(t);
		},
		GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function (e) {
			let { groupListing: t } = e;
			D(t);
		},
		GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: function (e) {
			let { listing: t, groupListing: n } = e;
			L(t), D(n);
		},
		GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: function (e) {
			let { listing: t } = e;
			L(t);
		},
		GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: function (e) {
			let { listingId: t } = e;
			return g.delete(t);
		},
		GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: function (e) {
			let { subscriptionTrial: t } = e;
			v[t.id] = t;
		},
		GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: function (e) {
			let { guildId: t } = e;
			R[t] = 1;
		},
		GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function (e) {
			let { guildId: t, restrictions: n } = e;
			(O[t] = n), (R[t] = 2);
		},
		GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function (e) {
			let { guildId: t } = e;
			(R[t] = 2), (O[t] = f.m);
		},
		GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: function (e) {
			let { guildId: t } = e;
			R[t] = 0;
		}
	}));
