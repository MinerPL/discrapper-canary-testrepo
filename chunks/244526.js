s.d(t, {
  Z: function() {
return A;
  }
});
var n, a, i, r, o = s(735250),
  l = s(470079),
  c = s(120356),
  d = s.n(c),
  _ = s(481060),
  E = s(987032),
  u = s(219929),
  T = s(46141),
  I = s(285952),
  S = s(122289),
  N = s(624138),
  C = s(689938),
  m = s(467811);
class A extends(r = l.PureComponent) {
  get typeString() {
let {
  paymentSource: e
} = this.props;
if (e instanceof T.qo)
  return u.ZP.Types.PAYPAL;
if (e instanceof T.Sf)
  return u.ZP.Types.SOFORT;
if (e instanceof T.dm)
  return u.ZP.getType(e.brand);
else if (e instanceof T.fv)
  return u.ZP.Types.GIROPAY;
else if (e instanceof T.Vg)
  return u.ZP.Types.PRZELEWY24;
else if (e instanceof T.sn)
  return u.ZP.Types.PAYSAFECARD;
else if (e instanceof T.o_)
  return u.ZP.Types.GCASH;
else if (e instanceof T.kX)
  return u.ZP.Types.GRABPAY;
else if (e instanceof T.z)
  return u.ZP.Types.MOMO_WALLET;
else if (e instanceof T.Xc)
  return u.ZP.Types.VENMO;
else if (e instanceof T.Om)
  return u.ZP.Types.KAKAOPAY;
else if (e instanceof T.JC)
  return u.ZP.Types.GOPAY_WALLET;
else if (e instanceof T.U4)
  return u.ZP.Types.BANCONTACT;
else if (e instanceof T.D0)
  return u.ZP.Types.EPS;
else if (e instanceof T.jc)
  return u.ZP.Types.IDEAL;
else if (e instanceof T.u_)
  return u.ZP.Types.CASH_APP;
else if (e instanceof T.$z)
  return u.ZP.Types.APPLE;
return u.ZP.Types.UNKNOWN;
  }
  getLabel(e) {
return e instanceof T.dm ? C.Z.Messages.PAYMENT_SOURCE_CARD_ENDING.format({
  brand: (0, N.De)(e.brand),
  last_4: e.last4
}) : e instanceof T.qo ? C.Z.Messages.PAYMENT_SOURCE_PAYPAL : e instanceof T.Sf ? C.Z.Messages.PAYMENT_SOURCE_SOFORT : e instanceof T.fv ? C.Z.Messages.PAYMENT_SOURCE_GIROPAY : e instanceof T.Vg ? C.Z.Messages.PAYMENT_SOURCE_PRZELEWY24 : e instanceof T.sn ? C.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD : e instanceof T.o_ ? C.Z.Messages.PAYMENT_SOURCE_GCASH : e instanceof T.kX ? C.Z.Messages.PAYMENT_SOURCE_GRABPAY : e instanceof T.z ? C.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET : e instanceof T.Xc ? C.Z.Messages.PAYMENT_SOURCE_VENMO : e instanceof T.Om ? C.Z.Messages.PAYMENT_SOURCE_KAKAOPAY : e instanceof T.JC ? C.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET : e instanceof T.U4 ? C.Z.Messages.PAYMENT_SOURCE_BANCONTACT : e instanceof T.jc ? C.Z.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({
  bank: (0, E.YE)(e.bank)
}) : e instanceof T.D0 ? C.Z.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({
  bank: (0, E.Ul)(e.bank)
}) : e instanceof T.u_ ? C.Z.Messages.PAYMENT_SOURCE_CASH_APP_PAY : e instanceof T.$z ? C.Z.Messages.PAYMENT_SOURCE_APPLE : C.Z.Messages.PAYMENT_SOURCE_UNKNOWN;
  }
  renderDescription() {
let {
  paymentSource: e,
  descriptionClassName: t
} = this.props;
return (0, o.jsx)(_.Text, {
  className: d()(m.description, t),
  variant: 'text-md/semibold',
  children: this.getLabel(e)
});
  }
  renderSubText() {
let {
  paymentSource: e,
  locale: t
} = this.props, s = null;
return e instanceof T.dm ? s = C.Z.Messages.PAYMENT_SOURCE_CARD_EXPIRES.format({
  month: (0, S.E2)(e.expiresMonth, t),
  year: e.expiresYear
}) : e instanceof T.qo ? s = e.email : e instanceof T.Sf ? s = e.email : e instanceof T.Vg ? s = e.email : e instanceof T.Xc ? s = '@' + e.username : e instanceof T.u_ && (s = e.username), s;
  }
  render() {
let {
  isDefault: e,
  paymentSource: t,
  showSubtext: s,
  isForSubscription: n,
  showPaymentSourceIcon: a,
  showLabels: i
} = this.props, r = this.renderSubText();
return (0, o.jsxs)(I.Z, {
  children: [
    a && (0, o.jsx)(u.ZP, {
      type: this.typeString
    }),
    (0, o.jsxs)(I.Z, {
      direction: I.Z.Direction.VERTICAL,
      className: m.descriptionWrapper,
      children: [
        (0, o.jsxs)(I.Z, {
          align: I.Z.Align.CENTER,
          children: [
            this.renderDescription(),
            i && e ? (0, o.jsx)('div', {
              className: m.defaultIndicator,
              children: C.Z.Messages.DEFAULT
            }) : null,
            n ? (0, o.jsx)('div', {
              className: m.premiumIndicator,
              children: C.Z.Messages.PAYMENT_SOURCE_SUBSCRIPTION
            }) : null,
            i && t.invalid ? (0, o.jsx)('div', {
              className: m.invalidIndicator,
              children: C.Z.Messages.PAYMENT_SOURCE_INVALID
            }) : null
          ]
        }),
        s && null != r ? (0, o.jsx)('div', {
          className: m.subText,
          children: r
        }) : null
      ]
    })
  ]
});
  }
}
i = {
  isForSubscription: !1,
  isDefault: !1,
  showSubtext: !1,
  showPaymentSourceIcon: !1,
  showLabels: !1
}, (a = 'defaultProps') in(n = A) ? Object.defineProperty(n, a, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[a] = i;