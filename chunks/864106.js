"use strict";
n.d(t, {
  FG: function() {
    return s
  },
  ad: function() {
    return a
  },
  ae: function() {
    return r
  },
  sr: function() {
    return o
  }
});
var i = n(392711);
let r = e => e.split("_", 2).includes("a"),
  s = e => "object" == typeof e && null != e && "asset" in e && "string" == typeof e.asset ? "sku_id" in e && "string" == typeof e.sku_id ? {
    asset: e.asset,
    skuId: e.sku_id
  } : "skuId" in e && "string" == typeof e.skuId ? {
    asset: e.asset,
    skuId: e.skuId
  } : {
    asset: e.asset
  } : null,
  o = (e, t) => null == e || null == t ? e === t : (0, i.isEqual)(s(e), s(t)),
  a = (e, t) => {
    var n;
    return null != t && (null == e ? void 0 : null === (n = e.avatarDecoration) || void 0 === n ? void 0 : n.asset) != null
  }