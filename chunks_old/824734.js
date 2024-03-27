"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var r = n("414456"),
  a = n.n(r),
  l = n("153160"),
  i = n("646718"),
  o = n("782340"),
  u = n("513600");

function d(e) {
  let {
    price: t,
    currency: n,
    intervalType: r,
    className: d,
    intervalCount: c = 1,
    isPrepaidPaymentSource: f = !1
  } = e, m = (0, l.formatPrice)(t, n), E = null;
  return r === i.SubscriptionIntervalTypes.YEAR ? E = o.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
    price: m
  }) : r === i.SubscriptionIntervalTypes.MONTH && 1 === c ? E = o.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
    price: m
  }) : r === i.SubscriptionIntervalTypes.MONTH && c > 1 && (E = o.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
    price: m,
    intervalCount: c
  })), (0, s.jsx)("div", {
    className: a(u.pricePerInterval, d),
    "data-testid": "PricePerInterval-".concat(n),
    children: null == r || f ? (0, s.jsx)("strong", {
      children: m
    }) : E
  })
}