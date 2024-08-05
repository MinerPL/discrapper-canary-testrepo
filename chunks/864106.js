n.d(t, {
  FG: function() {
return a;
  },
  ad: function() {
return o;
  },
  ae: function() {
return i;
  },
  sr: function() {
return s;
  }
});
var r = n(392711);
let i = e => e.split('_', 2).includes('a'),
  a = e => {
if ('object' != typeof e || null == e || !('asset' in e) || 'string' != typeof e.asset)
  return null;
let t = {
  asset: e.asset
};
return 'sku_id' in e && 'string' == typeof e.sku_id && (t.skuId = e.sku_id), 'skuId' in e && 'string' == typeof e.skuId && (t.skuId = e.skuId), 'expires_at' in e && 'number' == typeof e.expires_at && (t.expiresAt = e.expires_at), t;
  },
  s = (e, t) => null == e || null == t ? e === t : (0, r.isEqual)(a(e), a(t)),
  o = (e, t) => {
var n;
return null != t && (null == e ? void 0 : null === (n = e.avatarDecoration) || void 0 === n ? void 0 : n.asset) != null;
  };