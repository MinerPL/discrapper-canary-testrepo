n.d(t, {
	FG: function () {
		return a;
	},
	ad: function () {
		return l;
	},
	ae: function () {
		return i;
	},
	fO: function () {
		return s;
	},
	sr: function () {
		return o;
	}
});
var r = n(392711);
let i = (e) => e.split('_', 2).includes('a'),
	a = (e) => {
		if ('object' != typeof e || null == e || !('asset' in e) || 'string' != typeof e.asset) return null;
		let t = { asset: e.asset };
		return 'sku_id' in e && 'string' == typeof e.sku_id && (t.skuId = e.sku_id), 'skuId' in e && 'string' == typeof e.skuId && (t.skuId = e.skuId), 'expires_at' in e && 'number' == typeof e.expires_at && (t.expiresAt = e.expires_at), 'expiresAt' in e && 'number' == typeof e.expiresAt && (t.expiresAt = e.expiresAt), t;
	},
	s = (e) => (null == e ? void 0 : e.expiresAt) != null && e.expiresAt < Date.now() / 1000,
	o = (e, t) => (null == e || null == t ? e === t : (0, r.isEqual)(a(e), a(t))),
	l = (e, t) => {
		var n;
		return null != t && !s(null == e ? void 0 : e.avatarDecoration) && (null == e ? void 0 : null === (n = e.avatarDecoration) || void 0 === n ? void 0 : n.asset) != null;
	};
