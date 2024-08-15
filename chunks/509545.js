n(47120), n(653041);
var r,
	i,
	a,
	s,
	o = n(442837),
	l = n(570140),
	u = n(301766),
	c = n(251625),
	d = n(709054),
	_ = n(981631),
	E = n(474936);
let f = {},
	h = {},
	p = new Set(),
	I = new Set(),
	m = {},
	T = {};
function g(e) {
	let t = e.skuId;
	f[e.id] = e;
	let n = e.prices[_.tuJ.DEFAULT];
	if (null != n) {
		var r;
		let t = new Set(Object.keys(n.paymentSourcePrices));
		m[e.id] = t;
		let i = Array.from(null !== (r = T[e.skuId]) && void 0 !== r ? r : new Set());
		T[e.skuId] = new Set([...i, ...Array.from(t)]);
	}
	let i = h[t];
	null != i ? i.add(e.id) : (h[t] = new Set([e.id]));
}
function S() {
	[E.GP[E.Xh.NONE_MONTH], E.GP[E.Xh.NONE_YEAR], E.GP[E.Xh.NONE_3_MONTH], E.GP[E.Xh.NONE_6_MONTH]].forEach((e) =>
		g(
			u.ZP.createFromServer({
				id: e.id,
				name: e.name,
				interval: e.interval,
				interval_count: e.intervalCount,
				tax_inclusive: !0,
				sku_id: e.skuId,
				currency: _.pKx.USD,
				price: 0,
				price_tier: 0,
				discount_price: null
			})
		)
	);
}
function A(e) {
	g(u.ZP.createFromServer(e));
}
S();
function N() {
	(0, c.Ti)(f), (0, c.Ti)(h), p.clear(), I.clear(), (0, c.Ti)(m), (0, c.Ti)(T), S();
}
let v = [E.rV.DAY, E.rV.MONTH, E.rV.YEAR];
class O extends (r = o.ZP.Store) {
	getPlanIdsForSkus(e) {
		let t = [];
		for (let r of e) {
			var n;
			let e = Array.from(null !== (n = h[r]) && void 0 !== n ? n : new Set());
			e.sort((e, t) => {
				let n = f[e],
					r = f[t];
				return v.indexOf(n.interval) - v.indexOf(r.interval) || n.intervalCount - r.intervalCount;
			}),
				t.push(...e);
		}
		return t;
	}
	getFetchedSKUIDs() {
		return d.default.keys(h);
	}
	getForSKU(e) {
		var t;
		return Array.from(null !== (t = h[e]) && void 0 !== t ? t : []).map((e) => f[e]);
	}
	getForSkuAndInterval(e, t) {
		let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
		return this.getForSKU(e).find((e) => e.interval === t && e.intervalCount === n);
	}
	get(e) {
		return f[e];
	}
	isFetchingForSKU(e) {
		return p.has(e);
	}
	isFetchingForSKUs(e) {
		return e.some((e) => this.isFetchingForSKU(e));
	}
	isLoadedForSKU(e) {
		return !!I.has(e) || (!p.has(e) && null != h[e]);
	}
	isLoadedForSKUs(e) {
		return e.every((e) => this.isLoadedForSKU(e));
	}
	isFetchingForPremiumSKUs() {
		return E.YQ.map((e) => this.isFetchingForSKU(e)).includes(!0);
	}
	isLoadedForPremiumSKUs() {
		return E.YQ.every((e) => this.isLoadedForSKU(e));
	}
	ignoreSKUFetch(e) {
		I.add(e);
	}
	getPaymentSourcesForPlanId(e) {
		return m.hasOwnProperty(e) ? m[e] : null;
	}
	getPaymentSourceIds() {
		let e = new Set();
		return Object.values(m).forEach((t) => t.forEach((t) => e.add(t))), e;
	}
	hasPaymentSourceForSKUId(e, t) {
		return E.Si.NONE === t || (null != T[t] && T[t].has(e));
	}
	hasPaymentSourceForSKUIds(e, t) {
		return t.every((t) => this.hasPaymentSourceForSKUId(e, t));
	}
}
(s = 'SubscriptionPlanStore'),
	(a = 'displayName') in (i = O)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new O(l.Z, {
		SUBSCRIPTION_PLANS_FETCH: function (e) {
			let { skuId: t } = e;
			p.add(t);
		},
		SUBSCRIPTION_PLANS_FETCH_SUCCESS: function (e) {
			let { skuId: t, subscriptionPlans: n } = e;
			(h[t] = new Set()), (T[t] = new Set()), n.forEach(A), p.delete(t), I.delete(t);
		},
		SUBSCRIPTION_PLANS_FETCH_FAILURE: function (e) {
			let { skuId: t } = e;
			p.delete(t), I.delete(t);
		},
		SUBSCRIPTION_PLANS_RESET: N,
		GIFT_CODE_RESOLVE_SUCCESS: function (e) {
			let { giftCode: t } = e;
			null != t.subscription_plan && A(t.subscription_plan);
		},
		ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function (e) {
			let { entitlements: t } = e;
			for (let e of t) null != e.subscription_plan && A(e.subscription_plan);
		},
		LOGOUT: N
	}));
