n.d(t, {
	Z: function () {
		return _;
	}
}),
	n(724458),
	n(627341),
	n(653041);
var r = n(278074),
	i = n(979554),
	a = n(922347),
	s = n(587177),
	o = n(311850),
	l = n(803358),
	u = n(212161),
	c = n(981631);
function d(e, t, n) {
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
class _ extends l.Z {
	static fromServer(e) {
		let { type: t, premium_type: n, category_sku_id: l, prices: d, bundled_products: E, ...f } = e;
		return new _({
			...super.fromServer(f),
			type: t,
			premiumType: n === c.WND ? null : n,
			categorySkuId: l,
			prices: (0, o.l)(d),
			items: f.items.reduce(
				(e, t) =>
					(0, r.EQ)(t)
						.with({ type: i.Z.AVATAR_DECORATION }, (t) => (e.push(a.Z.fromServer(t)), e))
						.with({ type: i.Z.PROFILE_EFFECT }, (t) => (e.push(u.Z.fromServer(t)), e))
						.otherwise(() => e),
				[]
			),
			bundledProducts: null == E ? void 0 : E.map(s.Z.fromServer),
			googleSkuIds: f.google_sku_ids
		});
	}
	constructor(e) {
		super(e), d(this, 'prices', void 0), d(this, 'type', void 0), d(this, 'premiumType', void 0), d(this, 'items', void 0), d(this, 'categorySkuId', void 0), d(this, 'bundledProducts', void 0), d(this, 'googleSkuIds', void 0), (this.summary = e.summary), (this.type = e.type), (this.premiumType = e.premiumType), (this.items = e.items), (this.categorySkuId = e.categorySkuId), (this.prices = e.prices), (this.bundledProducts = e.bundledProducts), (this.googleSkuIds = e.googleSkuIds);
	}
}
