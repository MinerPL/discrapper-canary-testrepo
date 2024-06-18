"use strict";
t.d(s, {
  Z: function() {
    return _
  }
});
var n, a, i, l, r = t(735250),
  o = t(470079),
  c = t(120356),
  u = t.n(c),
  d = t(481060),
  C = t(987032),
  E = t(46141),
  f = t(285952),
  m = t(912454),
  p = t(122289),
  g = t(624138),
  h = t(689938),
  x = t(696674);
class _ extends(l = o.PureComponent) {
  get typeString() {
    let {
      paymentSource: e
    } = this.props;
    if (e instanceof E.qo) return m.ZP.Types.PAYPAL;
    if (e instanceof E.Sf) return m.ZP.Types.SOFORT;
    if (e instanceof E.dm) return m.ZP.getType(e.brand);
    else if (e instanceof E.fv) return m.ZP.Types.GIROPAY;
    else if (e instanceof E.Vg) return m.ZP.Types.PRZELEWY24;
    else if (e instanceof E.sn) return m.ZP.Types.PAYSAFECARD;
    else if (e instanceof E.o_) return m.ZP.Types.GCASH;
    else if (e instanceof E.kX) return m.ZP.Types.GRABPAY;
    else if (e instanceof E.z) return m.ZP.Types.MOMO_WALLET;
    else if (e instanceof E.Xc) return m.ZP.Types.VENMO;
    else if (e instanceof E.Om) return m.ZP.Types.KAKAOPAY;
    else if (e instanceof E.JC) return m.ZP.Types.GOPAY_WALLET;
    else if (e instanceof E.U4) return m.ZP.Types.BANCONTACT;
    else if (e instanceof E.D0) return m.ZP.Types.EPS;
    else if (e instanceof E.jc) return m.ZP.Types.IDEAL;
    else if (e instanceof E.u_) return m.ZP.Types.CASH_APP;
    else if (e instanceof E.$z) return m.ZP.Types.APPLE;
    return m.ZP.Types.UNKNOWN
  }
  getLabel(e) {
    return e instanceof E.dm ? h.Z.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
      brand: (0, g.De)(e.brand),
      last_4: e.last4
    }) : e instanceof E.qo ? h.Z.Messages.PAYMENT_SOURCE_PAYPAL : e instanceof E.Sf ? h.Z.Messages.PAYMENT_SOURCE_SOFORT : e instanceof E.fv ? h.Z.Messages.PAYMENT_SOURCE_GIROPAY : e instanceof E.Vg ? h.Z.Messages.PAYMENT_SOURCE_PRZELEWY24 : e instanceof E.sn ? h.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD : e instanceof E.o_ ? h.Z.Messages.PAYMENT_SOURCE_GCASH : e instanceof E.kX ? h.Z.Messages.PAYMENT_SOURCE_GRABPAY : e instanceof E.z ? h.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET : e instanceof E.Xc ? h.Z.Messages.PAYMENT_SOURCE_VENMO : e instanceof E.Om ? h.Z.Messages.PAYMENT_SOURCE_KAKAOPAY : e instanceof E.JC ? h.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET : e instanceof E.U4 ? h.Z.Messages.PAYMENT_SOURCE_BANCONTACT : e instanceof E.jc ? h.Z.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
      bank: (0, C.YE)(e.bank)
    }) : e instanceof E.D0 ? h.Z.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
      bank: (0, C.Ul)(e.bank)
    }) : e instanceof E.u_ ? h.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY : e instanceof E.$z ? h.Z.Messages.PAYMENT_SOURCE_APPLE : h.Z.Messages.PAYMENT_SOURCE_UNKNOWN
  }
  renderDescription() {
    let {
      paymentSource: e,
      descriptionClassName: s
    } = this.props;
    return (0, r.jsx)(d.Text, {
      className: u()(x.description, s),
      variant: "text-md/semibold",
      children: this.getLabel(e)
    })
  }
  renderSubText() {
    let {
      paymentSource: e,
      locale: s
    } = this.props, t = null;
    return e instanceof E.dm ? t = h.Z.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
      month: (0, p.E2)(e.expiresMonth, s),
      year: e.expiresYear
    }) : e instanceof E.qo ? t = e.email : e instanceof E.Sf ? t = e.email : e instanceof E.Vg ? t = e.email : e instanceof E.Xc ? t = "@" + e.username : e instanceof E.u_ && (t = e.username), t
  }
  render() {
    let {
      isDefault: e,
      paymentSource: s,
      showSubtext: t,
      isForSubscription: n,
      showPaymentSourceIcon: a,
      showLabels: i
    } = this.props, l = this.renderSubText();
    return (0, r.jsxs)(f.Z, {
      children: [a && (0, r.jsx)(m.ZP, {
        type: this.typeString
      }), (0, r.jsxs)(f.Z, {
        direction: f.Z.Direction.VERTICAL,
        className: x.descriptionWrapper,
        children: [(0, r.jsxs)(f.Z, {
          align: f.Z.Align.CENTER,
          children: [this.renderDescription(), i && e ? (0, r.jsx)("div", {
            className: x.defaultIndicator,
            children: h.Z.Messages.DEFAULT
          }) : null, n ? (0, r.jsx)("div", {
            className: x.premiumIndicator,
            children: h.Z.Messages.PAYMENT_SOURCE_SUBSCRIPTION
          }) : null, i && s.invalid ? (0, r.jsx)("div", {
            className: x.invalidIndicator,
            children: h.Z.Messages.PAYMENT_SOURCE_INVALID
          }) : null]
        }), t && null != l ? (0, r.jsx)("div", {
          className: x.subText,
          children: l
        }) : null]
      })]
    })
  }
}
i = {
  isForSubscription: !1,
  isDefault: !1,
  showSubtext: !1,
  showPaymentSourceIcon: !1,
  showLabels: !1
}, (a = "defaultProps") in(n = _) ? Object.defineProperty(n, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[a] = i