n.d(t, {
    FG: function () {
        return a;
    },
    ad: function () {
        return s;
    },
    ae: function () {
        return i;
    },
    sr: function () {
        return o;
    }
});
var r = n(392711);
let i = e => e.split('_', 2).includes('a'), a = e => 'object' == typeof e && null != e && 'asset' in e && 'string' == typeof e.asset ? 'sku_id' in e && 'string' == typeof e.sku_id ? {
        asset: e.asset,
        skuId: e.sku_id
    } : 'skuId' in e && 'string' == typeof e.skuId ? {
        asset: e.asset,
        skuId: e.skuId
    } : { asset: e.asset } : null, o = (e, t) => null == e || null == t ? e === t : (0, r.isEqual)(a(e), a(t)), s = (e, t) => {
        var n;
        return null != t && (null == e ? void 0 : null === (n = e.avatarDecoration) || void 0 === n ? void 0 : n.asset) != null;
    };
