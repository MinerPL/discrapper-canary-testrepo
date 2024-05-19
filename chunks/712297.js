"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("47120");
var r = n("470079"),
  u = n("399606"),
  i = n("16084"),
  a = n("855775"),
  l = n("55563"),
  o = n("474936");

function s(e) {
  let {
    applicationId: t,
    skuIDs: n,
    currentPaymentSourceId: s,
    isGift: E
  } = e, S = r.useMemo(() => n.filter(e => !o.ACTIVE_PREMIUM_SKUS.includes(e)), [JSON.stringify(n)]), d = (0, u.useStateFromStores)([l.default], () => S.every(e => !l.default.isFetching(e) && null != l.default.get(e))), _ = (0, u.useStateFromStoresObject)([l.default], () => {
    let e = {};
    for (let n of S) {
      var t;
      e[n] = null !== (t = l.default.get(n)) && void 0 !== t ? t : void 0
    }
    return e
  }, [S]);
  r.useEffect(() => {
    for (let e of S) !l.default.isFetching(e) && null == l.default.get(e) && (0, i.fetchPublishedSKU)(t, e)
  }, [t, S]);
  let c = (0, u.useStateFromStoresObject)([a.default], () => {
    let e = {};
    for (let n of S) {
      var t;
      e[n] = null !== (t = a.default.getPricesForSku(n)) && void 0 !== t ? t : void 0
    }
    return e
  }, [S]);
  return r.useEffect(() => {
    for (let e of S) !a.default.isFetchingSKU(e) && (0, i.fetchPurchasePreview)(t, e, s, {
      isGift: E
    })
  }, [t, S, s, E]), {
    hasFetchedSkus: d,
    skusById: _,
    skuPricePreviewsById: c
  }
}