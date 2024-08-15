t.d(n, {
  Z: function() {
return u;
  }
});
var s = t(735250);
t(470079);
var r = t(120356),
  l = t.n(r),
  i = t(937615),
  a = t(474936),
  c = t(689938),
  o = t(25817);

function u(e) {
  let {
price: n,
currency: t,
intervalType: r,
className: u,
intervalCount: I = 1,
isPrepaidPaymentSource: _ = !1
  } = e, E = (0, i.T4)(n, t), T = null;
  return r === a.rV.YEAR ? T = c.Z.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
price: E
  }) : r === a.rV.MONTH && 1 === I ? T = c.Z.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
price: E
  }) : r === a.rV.MONTH && I > 1 && (T = c.Z.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
price: E,
intervalCount: I
  })), (0, s.jsx)('div', {
className: l()(o.pricePerInterval, u),
'data-testid': 'PricePerInterval-'.concat(t),
children: null == r || _ ? (0, s.jsx)('strong', {
  children: E
}) : T
  });
}