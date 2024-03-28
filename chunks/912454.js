"use strict";
t.r(r), t.d(r, {
  IconSizes: function() {
    return h
  },
  IconTypes: function() {
    return a
  }
}), t("757143");
var a, n, i, o = t("735250"),
  l = t("470079"),
  s = t("803997"),
  c = t.n(s),
  d = t("918210");

function u(e, r, t) {
  return r in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e
}(i = a || (a = {})).UNKNOWN = "unknown", i.VISA = "visa", i.DISCOVER = "discover", i.MASTERCARD = "mastercard", i.AMEX = "amex", i.PAYPAL = "paypal", i.PAYMENT_REQUEST = "paymentRequest", i.G_PAY = "gPay", i.DINERS = "diners", i.JCB = "jcb", i.UNIONPAY = "unionpay", i.SOFORT = "sofort", i.PRZELEWY24 = "przelewy24", i.GIROPAY = "giropay", i.PAYSAFECARD = "paysafecard", i.GCASH = "gcash", i.GRABPAY = "grabpay", i.MOMO_WALLET = "momo_wallet", i.VENMO = "venmo", i.KAKAOPAY = "kakaopay", i.GOPAY_WALLET = "gopay_wallet", i.BANCONTACT = "bancontact", i.EPS = "eps", i.IDEAL = "ideal", i.CASH_APP = "cash_app", i.APPLE = "apple";
let h = {
  SMALL: d.cardIconSmall,
  MEDIUM: d.cardIconMedium,
  LARGE: d.cardIconLarge,
  XLARGE: d.cardIconXLarge
};
class p extends(n = l.PureComponent) {
  static getType(e) {
    return null == e ? "unknown" : a[e.replace(/[^a-z0-9_]/gi, "").toUpperCase()] || "unknown"
  }
  render() {
    let {
      flipped: e,
      type: r,
      className: t,
      size: a
    } = this.props;
    return (0, o.jsx)("div", {
      className: c()(a, d[r], t, {
        [d.flipped]: e
      }),
      children: r
    })
  }
}
u(p, "Types", a), u(p, "Sizes", h), u(p, "defaultProps", {
  size: h.SMALL,
  flipped: !1
}), r.default = p