let r;
n(47120), n(411104);
var i,
	u,
	l,
	o,
	E = n(442837),
	a = n(570140),
	_ = n(706454),
	S = n(156570),
	s = n(823379);
let A = {},
	c = {},
	T = {},
	I = {},
	d = new Set();
function R(e) {
	let t = e.id,
		n = e.sku.id,
		r = A[t],
		i = S.Z.createFromServer(e);
	if (!(null != r && !r.isSlimDirectoryVersion() && i.isSlimDirectoryVersion()))
		!1 === e.published ? (null == T[n] && (T[n] = new Set()), T[n].add(t)) : (I[n] = t), (A[t] = i), d.delete(e.sku.id);
}
function C(e, t) {
	return ''.concat(e, ':').concat(t);
}
function N() {
	(A = {}), (I = {}), (T = {}), (c = {}), (d = new Set());
}
function M() {
	if (r === _.default.locale) return !1;
	N(), (r = _.default.locale);
}
class P extends (i = E.ZP.Store) {
	initialize() {
		this.waitFor(_.default), this.syncWith([_.default], M), (r = _.default.locale);
	}
	get(e) {
		return A[e];
	}
	getForSKU(e, t) {
		let n = I[e];
		return null != t ? c[C(t, e)] : null != n ? A[n] : null;
	}
	getUnpublishedForSKU(e) {
		let t = T[e];
		return null == t
			? []
			: Array.from(t)
					.map((e) => A[e])
					.filter(s.lm);
	}
	getForChannel(e, t) {
		return c[C(e, t)];
	}
	isFetchingForSKU(e) {
		return d.has(e);
	}
	getStoreListing(e) {
		let { storeListingId: t, skuId: n, channelId: r, isTestMode: i } = e;
		if (i && null != n) {
			let e = this.getUnpublishedForSKU(n);
			if (null != e && e.length > 0) return e[0];
		}
		if (null != t) return this.get(t);
		if (null != r) {
			if (null == n) throw Error('getStoreListing with channel expects a skuId');
			return this.getForChannel(r, n);
		}
		if (null != n) return this.getForSKU(n);
		return null;
	}
}
(o = 'StoreListingStore'),
	(l = 'displayName') in (u = P)
		? Object.defineProperty(u, l, {
				value: o,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (u[l] = o),
	(t.Z = new P(a.Z, {
		STORE_LISTINGS_FETCH_START: function (e) {
			let { skuId: t } = e;
			d.add(t);
		},
		STORE_LISTINGS_FETCH_FAIL: function (e) {
			let { skuId: t } = e;
			d.delete(t);
		},
		STORE_LISTINGS_FETCH_SUCCESS: function (e) {
			let { storeListings: t } = e;
			for (let e of t) R(e);
		},
		STORE_LISTING_FETCH_SUCCESS: function (e) {
			let { storeListing: t, channelId: n } = e;
			if (null != n) {
				let e = S.Z.createFromServer(t);
				(c[C(n, e.skuId)] = e), (I[e.skuId] = e.id);
			} else R(t);
		},
		USER_SETTINGS_PROTO_UPDATE: M,
		APPLICATION_STORE_CLEAR_DATA: N,
		GIFT_CODE_RESOLVE_SUCCESS: function (e) {
			let { giftCode: t } = e;
			if (null == t.store_listing) return !1;
			R(t.store_listing);
		}
	}));
