s.d(t, {
  Z: function() {
return f;
  }
});
var n = s(735250),
  a = s(470079),
  i = s(512722),
  r = s.n(i),
  o = s(442837),
  l = s(481060),
  c = s(570140),
  d = s(355467),
  _ = s(230711),
  E = s(497321),
  u = s(231428),
  T = s(390954),
  I = s(89057),
  S = s(921801),
  N = s(246946),
  C = s(594174),
  m = s(351402),
  A = s(853872),
  g = s(78839),
  h = s(706454),
  O = s(726985),
  p = s(981631),
  R = s(689938),
  x = s(488643);
class M extends a.PureComponent {
  componentDidMount() {
c.Z.wait(() => {
  d.tZ(), d.jg();
});
  }
  handleRedemptionRedirect() {
_.Z.setSection(p.oAB.INVENTORY);
  }
  render() {
let {
  syncing: e,
  hide: t,
  paymentSources: s,
  defaultPaymentSourceId: a,
  locale: i,
  premiumSubscription: r,
  isRemovingPaymentSource: o,
  isUpdatingPaymentSource: c
} = this.props;
return t ? (0, n.jsx)(E.Z, {}) : (0, n.jsxs)('div', {
  className: x.__invalid_userSettingsBilling,
  children: [
    e && 0 === Object.keys(s).length ? (0, n.jsx)('div', {
      className: x.syncing,
      children: (0, n.jsx)(l.Spinner, {})
    }) : (0, n.jsx)(S.F, {
      setting: O.s6.BILLING_PAYMENT_METHODS,
      children: (0, n.jsx)(T.Z, {
        paymentSources: s,
        defaultPaymentSourceId: a,
        premiumSubscriptionPaymentSourceId: null != r && r.status !== p.O0b.CANCELED ? r.paymentSourceId : null,
        locale: i,
        removing: o,
        submitting: c
      })
    }),
    (0, n.jsx)(S.F, {
      setting: O.s6.BILLING_TRANSACTION_HISTORY,
      children: (0, n.jsx)('div', {
        className: x.paymentHistory,
        children: (0, n.jsxs)(l.HeadingLevel, {
          component: (0, n.jsx)(l.FormTitle, {
            tag: 'h1',
            children: R.Z.Messages.BILLING_PAYMENT_HISTORY
          }),
          children: [
            (0, n.jsx)(I.oQ, {}),
            (0, n.jsx)(u.Z, {
              locale: i
            })
          ]
        })
      })
    }),
    (0, n.jsx)(l.Card, {
      className: x.codeRedemptionRedirect,
      type: l.Card.Types.CUSTOM,
      children: R.Z.Messages.BILLING_CODE_REDEMPTION_REDIRECT.format({
        onClick: this.handleRedemptionRedirect
      })
    })
  ]
});
  }
}

function f() {
  let e = (0, o.cj)([
h.default,
m.Z,
A.Z,
C.default,
N.Z,
g.ZP
  ], () => {
let e = g.ZP.getPremiumTypeSubscription(),
  t = C.default.getCurrentUser();
return r()(null != t, 'UserSettingsBilling: currentUser cannot be undefined'), {
  locale: h.default.locale,
  hide: N.Z.enabled,
  isClaimed: t.isClaimed(),
  isVerified: t.verified,
  premiumSubscription: e,
  defaultPaymentSourceId: A.Z.defaultPaymentSourceId,
  paymentSources: A.Z.paymentSources,
  syncing: m.Z.isSyncing,
  isRemovingPaymentSource: m.Z.isRemovingPaymentSource,
  isUpdatingPaymentSource: m.Z.isUpdatingPaymentSource
};
  });
  return (0, n.jsx)(M, {
...e
  });
}