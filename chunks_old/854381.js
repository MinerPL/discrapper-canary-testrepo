"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var r = n("446674"),
  u = n("10514"),
  i = n("713518"),
  a = n("646718"),
  o = n("843455");

function s(e) {
  var t, n;
  let {
    activeSubscription: s,
    skuIDs: c,
    paymentSourceId: l,
    isGift: d
  } = e;
  c = c.filter(e => e !== a.PremiumSubscriptionSKUs.NONE);
  let f = (0, r.useStateFromStores)([u.default], () => {
      let e = u.default.getPlanIdsForSkus(c).filter(e => !d || a.PREMIUM_PLANS.has(e));
      return e.length > 0 ? u.default.get(e[0]) : null
    }),
    E = null == f ? [] : (0, i.getCurrencies)(f.id, l, d),
    _ = null !== (n = null !== (t = E.find(e => e === (null == s ? void 0 : s.currency))) && void 0 !== t ? t : E[0]) && void 0 !== n ? n : o.CurrencyCodes.USD;
  return {
    ...(0, i.useCurrencyWithPaymentSourceChange)(_, null == f ? void 0 : f.id, l, d, c),
    currencies: E
  }
}