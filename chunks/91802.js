"use strict";
n.r(t), n.d(t, {
  useLocalizedPromoQuery: function() {
    return l
  }
});
var r = n("442837"),
  i = n("351402");

function l() {
  let {
    localizedPricingPromo: e,
    hasError: t
  } = (0, r.useStateFromStoresObject)([i.default], () => ({
    localizedPricingPromo: i.default.localizedPricingPromo,
    hasError: i.default.localizedPricingPromoHasError
  }));
  return t ? null : e
}