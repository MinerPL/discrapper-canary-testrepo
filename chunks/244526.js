"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
});
var a, n, i, l, r = s("735250"),
  u = s("470079"),
  o = s("803997"),
  d = s.n(o),
  c = s("481060"),
  E = s("987032"),
  f = s("46141"),
  _ = s("285952"),
  p = s("912454"),
  m = s("122289"),
  I = s("624138"),
  N = s("689938"),
  S = s("682593");
class P extends(l = u.PureComponent) {
  get typeString() {
    let {
      paymentSource: e
    } = this.props;
    if (e instanceof f.PaypalSourceRecord) return p.default.Types.PAYPAL;
    if (e instanceof f.SofortSourceRecord) return p.default.Types.SOFORT;
    if (e instanceof f.CreditCardSourceRecord) return p.default.getType(e.brand);
    else if (e instanceof f.GiropaySourceRecord) return p.default.Types.GIROPAY;
    else if (e instanceof f.Przelewy24SourceRecord) return p.default.Types.PRZELEWY24;
    else if (e instanceof f.PaysafeSourceRecord) return p.default.Types.PAYSAFECARD;
    else if (e instanceof f.GcashSourceRecord) return p.default.Types.GCASH;
    else if (e instanceof f.GrabPayMySourceRecord) return p.default.Types.GRABPAY;
    else if (e instanceof f.MomoWalletSourceRecord) return p.default.Types.MOMO_WALLET;
    else if (e instanceof f.VenmoSourceRecord) return p.default.Types.VENMO;
    else if (e instanceof f.KaKaoPaySourceRecord) return p.default.Types.KAKAOPAY;
    else if (e instanceof f.GoPayWalletSourceRecord) return p.default.Types.GOPAY_WALLET;
    else if (e instanceof f.BancontactSourceRecord) return p.default.Types.BANCONTACT;
    else if (e instanceof f.EPSSourceRecord) return p.default.Types.EPS;
    else if (e instanceof f.IdealSourceRecord) return p.default.Types.IDEAL;
    else if (e instanceof f.CashAppSourceRecord) return p.default.Types.CASH_APP;
    else if (e instanceof f.AppleSourceRecord) return p.default.Types.APPLE;
    return p.default.Types.UNKNOWN
  }
  getLabel(e) {
    return e instanceof f.CreditCardSourceRecord ? N.default.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
      brand: (0, I.upperCaseFirstChar)(e.brand),
      last_4: e.last4
    }) : e instanceof f.PaypalSourceRecord ? N.default.Messages.PAYMENT_SOURCE_PAYPAL : e instanceof f.SofortSourceRecord ? N.default.Messages.PAYMENT_SOURCE_SOFORT : e instanceof f.GiropaySourceRecord ? N.default.Messages.PAYMENT_SOURCE_GIROPAY : e instanceof f.Przelewy24SourceRecord ? N.default.Messages.PAYMENT_SOURCE_PRZELEWY24 : e instanceof f.PaysafeSourceRecord ? N.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD : e instanceof f.GcashSourceRecord ? N.default.Messages.PAYMENT_SOURCE_GCASH : e instanceof f.GrabPayMySourceRecord ? N.default.Messages.PAYMENT_SOURCE_GRABPAY : e instanceof f.MomoWalletSourceRecord ? N.default.Messages.PAYMENT_SOURCE_MOMO_WALLET : e instanceof f.VenmoSourceRecord ? N.default.Messages.PAYMENT_SOURCE_VENMO : e instanceof f.KaKaoPaySourceRecord ? N.default.Messages.PAYMENT_SOURCE_KAKAOPAY : e instanceof f.GoPayWalletSourceRecord ? N.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET : e instanceof f.BancontactSourceRecord ? N.default.Messages.PAYMENT_SOURCE_BANCONTACT : e instanceof f.IdealSourceRecord ? N.default.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
      bank: (0, E.getIdealBankDisplayNameFromBankName)(e.bank)
    }) : e instanceof f.EPSSourceRecord ? N.default.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
      bank: (0, E.getEPSBankDisplayNameFromBankName)(e.bank)
    }) : e instanceof f.CashAppSourceRecord ? N.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY : e instanceof f.AppleSourceRecord ? N.default.Messages.PAYMENT_SOURCE_APPLE : N.default.Messages.PAYMENT_SOURCE_UNKNOWN
  }
  renderDescription() {
    let {
      paymentSource: e,
      descriptionClassName: t
    } = this.props;
    return (0, r.jsx)(c.Text, {
      className: d()(S.description, t),
      variant: "text-md/semibold",
      children: this.getLabel(e)
    })
  }
  renderSubText() {
    let {
      paymentSource: e,
      locale: t
    } = this.props, s = null;
    return e instanceof f.CreditCardSourceRecord ? s = N.default.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
      month: (0, m.getLocalizedDisplayMonth)(e.expiresMonth, t),
      year: e.expiresYear
    }) : e instanceof f.PaypalSourceRecord ? s = e.email : e instanceof f.SofortSourceRecord ? s = e.email : e instanceof f.Przelewy24SourceRecord ? s = e.email : e instanceof f.VenmoSourceRecord ? s = "@" + e.username : e instanceof f.CashAppSourceRecord && (s = e.username), s
  }
  render() {
    let {
      isDefault: e,
      paymentSource: t,
      showSubtext: s,
      isForSubscription: a
    } = this.props, n = this.renderSubText();
    return (0, r.jsxs)(_.default, {
      children: [(0, r.jsx)(p.default, {
        type: this.typeString
      }), (0, r.jsxs)(_.default, {
        direction: _.default.Direction.VERTICAL,
        className: S.descriptionWrapper,
        children: [(0, r.jsxs)(_.default, {
          align: _.default.Align.CENTER,
          children: [this.renderDescription(), e ? (0, r.jsx)("div", {
            className: S.defaultIndicator,
            children: N.default.Messages.DEFAULT
          }) : null, a ? (0, r.jsx)("div", {
            className: S.premiumIndicator,
            children: N.default.Messages.PAYMENT_SOURCE_SUBSCRIPTION
          }) : null, t.invalid ? (0, r.jsx)("div", {
            className: S.invalidIndicator,
            children: N.default.Messages.PAYMENT_SOURCE_INVALID
          }) : null]
        }), s && null != n ? (0, r.jsx)("div", {
          className: S.subText,
          children: n
        }) : null]
      })]
    })
  }
}
i = {
  isForSubscription: !1,
  isDefault: !1,
  showSubtext: !1
}, (n = "defaultProps") in(a = P) ? Object.defineProperty(a, n, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[n] = i