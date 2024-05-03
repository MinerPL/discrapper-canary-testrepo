"use strict";
n.r(a), n.d(a, {
  default: function() {
    return C
  }
});
var r, t, o, s, c = n("735250"),
  i = n("470079"),
  u = n("120356"),
  d = n.n(u),
  l = n("481060"),
  f = n("987032"),
  p = n("46141"),
  y = n("285952"),
  A = n("912454"),
  P = n("122289"),
  b = n("624138"),
  S = n("689938"),
  _ = n("941935");
class C extends(s = i.PureComponent) {
  get typeString() {
    let {
      paymentSource: e
    } = this.props;
    if (e instanceof p.PaypalSourceRecord) return A.default.Types.PAYPAL;
    if (e instanceof p.SofortSourceRecord) return A.default.Types.SOFORT;
    if (e instanceof p.CreditCardSourceRecord) return A.default.getType(e.brand);
    else if (e instanceof p.GiropaySourceRecord) return A.default.Types.GIROPAY;
    else if (e instanceof p.Przelewy24SourceRecord) return A.default.Types.PRZELEWY24;
    else if (e instanceof p.PaysafeSourceRecord) return A.default.Types.PAYSAFECARD;
    else if (e instanceof p.GcashSourceRecord) return A.default.Types.GCASH;
    else if (e instanceof p.GrabPayMySourceRecord) return A.default.Types.GRABPAY;
    else if (e instanceof p.MomoWalletSourceRecord) return A.default.Types.MOMO_WALLET;
    else if (e instanceof p.VenmoSourceRecord) return A.default.Types.VENMO;
    else if (e instanceof p.KaKaoPaySourceRecord) return A.default.Types.KAKAOPAY;
    else if (e instanceof p.GoPayWalletSourceRecord) return A.default.Types.GOPAY_WALLET;
    else if (e instanceof p.BancontactSourceRecord) return A.default.Types.BANCONTACT;
    else if (e instanceof p.EPSSourceRecord) return A.default.Types.EPS;
    else if (e instanceof p.IdealSourceRecord) return A.default.Types.IDEAL;
    else if (e instanceof p.CashAppSourceRecord) return A.default.Types.CASH_APP;
    else if (e instanceof p.AppleSourceRecord) return A.default.Types.APPLE;
    return A.default.Types.UNKNOWN
  }
  getLabel(e) {
    return e instanceof p.CreditCardSourceRecord ? S.default.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
      brand: (0, b.upperCaseFirstChar)(e.brand),
      last_4: e.last4
    }) : e instanceof p.PaypalSourceRecord ? S.default.Messages.PAYMENT_SOURCE_PAYPAL : e instanceof p.SofortSourceRecord ? S.default.Messages.PAYMENT_SOURCE_SOFORT : e instanceof p.GiropaySourceRecord ? S.default.Messages.PAYMENT_SOURCE_GIROPAY : e instanceof p.Przelewy24SourceRecord ? S.default.Messages.PAYMENT_SOURCE_PRZELEWY24 : e instanceof p.PaysafeSourceRecord ? S.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD : e instanceof p.GcashSourceRecord ? S.default.Messages.PAYMENT_SOURCE_GCASH : e instanceof p.GrabPayMySourceRecord ? S.default.Messages.PAYMENT_SOURCE_GRABPAY : e instanceof p.MomoWalletSourceRecord ? S.default.Messages.PAYMENT_SOURCE_MOMO_WALLET : e instanceof p.VenmoSourceRecord ? S.default.Messages.PAYMENT_SOURCE_VENMO : e instanceof p.KaKaoPaySourceRecord ? S.default.Messages.PAYMENT_SOURCE_KAKAOPAY : e instanceof p.GoPayWalletSourceRecord ? S.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET : e instanceof p.BancontactSourceRecord ? S.default.Messages.PAYMENT_SOURCE_BANCONTACT : e instanceof p.IdealSourceRecord ? S.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
      bank: (0, f.getIdealBankDisplayNameFromBankName)(e.bank)
    }) : e instanceof p.EPSSourceRecord ? S.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
      bank: (0, f.getEPSBankDisplayNameFromBankName)(e.bank)
    }) : e instanceof p.CashAppSourceRecord ? S.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY : e instanceof p.AppleSourceRecord ? S.default.Messages.PAYMENT_SOURCE_APPLE : S.default.Messages.PAYMENT_SOURCE_UNKNOWN
  }
  renderDescription() {
    let {
      paymentSource: e,
      descriptionClassName: a
    } = this.props;
    return (0, c.jsx)(l.Text, {
      className: d()(_.description, a),
      variant: "text-md/semibold",
      children: this.getLabel(e)
    })
  }
  renderSubText() {
    let {
      paymentSource: e,
      locale: a
    } = this.props, n = null;
    return e instanceof p.CreditCardSourceRecord ? n = S.default.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
      month: (0, P.getLocalizedDisplayMonth)(e.expiresMonth, a),
      year: e.expiresYear
    }) : e instanceof p.PaypalSourceRecord ? n = e.email : e instanceof p.SofortSourceRecord ? n = e.email : e instanceof p.Przelewy24SourceRecord ? n = e.email : e instanceof p.VenmoSourceRecord ? n = "@" + e.username : e instanceof p.CashAppSourceRecord && (n = e.username), n
  }
  render() {
    let {
      isDefault: e,
      paymentSource: a,
      showSubtext: n,
      isForSubscription: r,
      showPaymentSourceIcon: t,
      showDefaultLabel: o
    } = this.props, s = this.renderSubText();
    return (0, c.jsxs)(y.default, {
      children: [t && (0, c.jsx)(A.default, {
        type: this.typeString
      }), (0, c.jsxs)(y.default, {
        direction: y.default.Direction.VERTICAL,
        className: _.descriptionWrapper,
        children: [(0, c.jsxs)(y.default, {
          align: y.default.Align.CENTER,
          children: [this.renderDescription(), o && e ? (0, c.jsx)("div", {
            className: _.defaultIndicator,
            children: S.default.Messages.DEFAULT
          }) : null, r ? (0, c.jsx)("div", {
            className: _.premiumIndicator,
            children: S.default.Messages.PAYMENT_SOURCE_SUBSCRIPTION
          }) : null, a.invalid ? (0, c.jsx)("div", {
            className: _.invalidIndicator,
            children: S.default.Messages.PAYMENT_SOURCE_INVALID
          }) : null]
        }), n && null != s ? (0, c.jsx)("div", {
          className: _.subText,
          children: s
        }) : null]
      })]
    })
  }
}
o = {
  isForSubscription: !1,
  isDefault: !1,
  showSubtext: !1,
  showPaymentSourceIcon: !1,
  showDefaultLabel: !1
}, (t = "defaultProps") in(r = C) ? Object.defineProperty(r, t, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[t] = o