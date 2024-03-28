"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var s = n("803997"),
  a = n.n(s),
  l = n("937615"),
  r = n("474936"),
  u = n("689938"),
  o = n("188537");

function c(e) {
  let {
    price: t,
    currency: n,
    intervalType: s,
    className: c,
    intervalCount: d = 1,
    isPrepaidPaymentSource: m = !1
  } = e, f = (0, l.formatPrice)(t, n), p = null;
  return s === r.SubscriptionIntervalTypes.YEAR ? p = u.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
    price: f
  }) : s === r.SubscriptionIntervalTypes.MONTH && 1 === d ? p = u.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
    price: f
  }) : s === r.SubscriptionIntervalTypes.MONTH && d > 1 && (p = u.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
    price: f,
    intervalCount: d
  })), (0, i.jsx)("div", {
    className: a()(o.pricePerInterval, c),
    "data-testid": "PricePerInterval-".concat(n),
    children: null == s || m ? (0, i.jsx)("strong", {
      children: f
    }) : p
  })
}