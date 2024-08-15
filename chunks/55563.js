let r;
n(47120);
var i,
	a,
	s,
	o,
	l = n(442837),
	u = n(570140),
	c = n(706454),
	d = n(659181),
	_ = n(77498);
let E = new Set(),
	f = new Set(),
	h = new Map(),
	p = new Map(),
	I = new Map();
function m(e) {
	h.set(e.id, d.Z.createFromServer(e)),
		E.delete(e.id),
		f.delete(e.id),
		!p.has(e.application_id) && p.set(e.application_id, new Set()),
		p.get(e.application_id).add(e.id);
}
function T(e) {
	m(e);
}
function g(e) {
	m(e.sku),
		null != e.child_skus && e.child_skus.forEach((e) => m(e)),
		null != e.alternative_skus && e.alternative_skus.forEach((e) => m(e));
}
function S(e) {
	let { entitlements: t } = e;
	for (let e of t) null != e.sku && m(e.sku);
}
function A() {
	(E = new Set()), (f = new Set()), (h = new Map()), (p = new Map()), (I = new Map());
}
function N() {
	if (r === c.default.locale) return !1;
	(r = c.default.locale), A();
}
class v extends (i = l.yh) {
	initialize() {
		this.waitFor(c.default, _.Z), this.syncWith([c.default], N), (r = c.default.locale);
	}
	get(e) {
		return h.get(e);
	}
	getForApplication(e) {
		let t = p.get(e);
		return null == t ? [] : Array.from(t).map((e) => h.get(e));
	}
	isFetching(e) {
		return E.has(e);
	}
	getSKUs() {
		return Object.fromEntries(h);
	}
	didFetchingSkuFail(e) {
		return f.has(e);
	}
}
(o = 'SKUStore'),
	(s = 'displayName') in (a = v)
		? Object.defineProperty(a, s, {
				value: o,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (a[s] = o),
	(t.Z = new v(u.Z, {
		STORE_LISTINGS_FETCH_START: function (e) {
			let { skuId: t } = e;
			E.add(t);
		},
		STORE_LISTINGS_FETCH_FAIL: function (e) {
			let { skuId: t } = e;
			E.delete(t), f.add(t);
		},
		STORE_LISTINGS_FETCH_SUCCESS: function (e) {
			let { storeListings: t } = e;
			for (let e of t) g(e);
		},
		STORE_LISTING_FETCH_SUCCESS: function (e) {
			let { storeListing: t } = e;
			g(t);
		},
		GIFT_CODE_RESOLVE_SUCCESS: function (e) {
			let { giftCode: t } = e;
			if (null == t.store_listing) return !1;
			m(t.store_listing.sku);
		},
		SKU_FETCH_START: function (e) {
			let { skuId: t } = e;
			E.add(t);
		},
		SKU_FETCH_SUCCESS: function (e) {
			let { sku: t } = e;
			m(t);
		},
		SKU_FETCH_FAIL: function (e) {
			let { skuId: t } = e;
			E.delete(t), f.add(t);
		},
		SKUS_FETCH_SUCCESS: function (e) {
			let { guildId: t, skus: n } = e;
			for (let e of n) m(e);
			null != t && I.set(t, new Set(n.map((e) => e.id)));
		},
		ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: S,
		APPLICATION_STORE_CLEAR_DATA: A,
		APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: S,
		ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: S
	}));
