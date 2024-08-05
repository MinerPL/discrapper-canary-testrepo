s.d(t, {
  Z: function() {
return C;
  }
}), s(47120);
var n = s(735250);
s(470079);
var a = s(512722),
  i = s.n(a),
  r = s(481060),
  o = s(100527),
  l = s(906732),
  c = s(509545),
  d = s(74538),
  _ = s(937615),
  E = s(374649),
  u = s(474936),
  T = s(981631),
  I = s(689938),
  S = s(525478);

function N(e) {
  let {
subscription: t,
withOverheadSeparator: s
  } = e, {
analyticsLocations: a
  } = (0, l.ZP)(), [N] = (0, E.ED)({
subscriptionId: t.id,
renewal: !0,
analyticsLocations: a,
analyticsLocation: o.Z.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT
  });
  if (null == N)
return null;
  let C = s ? S.finePrintWithOverheadSeparator : S.finePrint,
m = N.invoiceItems.find(e => {
  let {
    subscriptionPlanId: t
  } = e;
  return (0, d.uZ)(t);
});
  if (null == m)
return null;
  let A = m.subscriptionPlanId,
g = c.Z.get(A);
  i()(null != g, 'Missing plan');
  let h = (0, _.T4)(N.total, N.currency),
O = '';
  return g.interval === u.rV.YEAR ? O = I.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_YEARLY.format({
price: h,
termsUrl: T.EYA.TERMS,
paidURL: T.EYA.PAID_TERMS,
privacyUrl: T.EYA.PRIVACY
  }) : g.interval === u.rV.MONTH && (O = 1 === g.intervalCount ? I.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MONTHLY.format({
price: h,
termsUrl: T.EYA.TERMS,
paidURL: T.EYA.PAID_TERMS,
privacyUrl: T.EYA.PRIVACY
  }) : I.Z.Messages.BILLING_PAYMENT_PREMIUM_TERMS_LEGALESE_MULTI_MONTH.format({
price: h,
termsUrl: T.EYA.TERMS,
paidURL: T.EYA.PAID_TERMS,
privacyUrl: T.EYA.PRIVACY,
intervalCount: g.intervalCount
  })), (0, n.jsx)(r.Text, {
color: 'text-muted',
className: C,
variant: 'text-xs/normal',
children: O
  });
}

function C(e) {
  let {
subscription: t,
withOverheadSeparator: s
  } = e;
  return t.status === T.O0b.CANCELED || t.isPurchasedExternally ? null : (0, n.jsx)(N, {
subscription: t,
withOverheadSeparator: s
  });
}