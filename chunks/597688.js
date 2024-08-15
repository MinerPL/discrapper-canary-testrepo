let r, i;
n(47120);
var a,
	s,
	o,
	l,
	u = n(392711),
	c = n(442837),
	d = n(570140),
	_ = n(706454),
	E = n(884697);
let f = new Map(),
	h = new Map(),
	p = f,
	I = h,
	m = !1,
	T = new Set();
let g = {},
	S = () => {
		(p = f), (I = h), (i = void 0), (m = !1), (T = new Set()), (r = void 0), (g = {});
	};
class A extends (a = c.ZP.Store) {
	initialize() {
		this.syncWith([_.default], S);
	}
	get isFetchingCategories() {
		return m;
	}
	isFetchingProduct(e) {
		return null != e && T.has(e);
	}
	get error() {
		return r;
	}
	get lastSuccessfulFetch() {
		return i;
	}
	get lastFetchOptions() {
		return g;
	}
	get categories() {
		return p;
	}
	get products() {
		return I;
	}
	getCategory(e) {
		return null != e ? p.get(e) : void 0;
	}
	getProduct(e) {
		return null != e ? I.get(e) : void 0;
	}
	getCategoryForProduct(e) {
		let t = this.getProduct(e);
		return this.getCategory(null == t ? void 0 : t.categorySkuId);
	}
}
(l = 'CollectiblesCategoryStore'),
	(o = 'displayName') in (s = A)
		? Object.defineProperty(s, o, {
				value: l,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (s[o] = l),
	(t.Z = new A(d.Z, {
		COLLECTIBLES_CATEGORIES_FETCH: (e) => {
			(m = !0), (r = void 0), (g = e.options);
		},
		COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: (e) => {
			0 === e.categories.length
				? ((p = f), (I = h))
				: !(0, u.isEqual)([...p.values()], e.categories) &&
					((p = new Map(e.categories.map((e) => [e.skuId, e]))), (I = new Map((0, E.Cs)(p).map((e) => [e.skuId, e])))),
				(i = Date.now()),
				(m = !1),
				(r = void 0);
		},
		COLLECTIBLES_CATEGORIES_FETCH_FAILURE: (e) => {
			let { error: t } = e;
			(p = f), (I = h), (m = !1), (T = new Set()), (r = t);
		},
		COLLECTIBLES_PRODUCT_FETCH: (e) => {
			let { skuId: t } = e;
			(T = new Set(T)).add(t), (r = void 0);
		},
		COLLECTIBLES_PRODUCT_FETCH_SUCCESS: (e) => {
			let { skuId: t, product: n } = e;
			I.set(t, n), (T = new Set(T)).delete(t), (r = void 0);
		},
		COLLECTIBLES_PRODUCT_FETCH_FAILURE: (e) => {
			let { skuId: t, error: n } = e;
			(T = new Set(T)).delete(t), (r = n);
		},
		LOGOUT: S
	}));
