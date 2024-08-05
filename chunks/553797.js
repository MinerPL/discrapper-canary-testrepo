s.d(n, {
  Z: function() {
return u;
  }
});
var t = s(735250);
s(470079);
var r = s(120356),
  l = s.n(r),
  a = s(937615),
  i = s(474936),
  c = s(689938),
  o = s(195301);

function u(e) {
  let {
price: n,
currency: s,
intervalType: r,
className: u,
intervalCount: I = 1,
isPrepaidPaymentSource: _ = !1
  } = e, E = (0, a.T4)(n, s), T = null;
  return r === i.rV.YEAR ? T = c.Z.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
price: E
  }) : r === i.rV.MONTH && 1 === I ? T = c.Z.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
price: E
  }) : r === i.rV.MONTH && I > 1 && (T = c.Z.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
price: E,
intervalCount: I
  })), (0, t.jsx)('div', {
className: l()(o.pricePerInterval, u),
'data-testid': 'PricePerInterval-'.concat(s),
children: null == r || _ ? (0, t.jsx)('strong', {
  children: E
}) : T
  });
}