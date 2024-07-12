n.d(t, {
  T3: function() {
return u;
  },
  T4: function() {
return s;
  },
  og: function() {
return l;
  }
}), n(411104);
var r = n(221513),
  i = n(706454),
  a = n(474936),
  o = n(689938);

function s(e, t, n) {
  var a;
  let o = null !== (a = null == n ? void 0 : n.localeOverride) && void 0 !== a ? a : i.default.locale;
  return (0, r.T4)(e, t, o, n);
}

function l(e, t, n) {
  if (t === a.rV.YEAR)
return o.Z.Messages.BILLING_PRICE_PER_YEAR.format({
  price: e
});
  if (t === a.rV.MONTH && 1 === n)
return o.Z.Messages.BILLING_PRICE_PER_MONTH.format({
  price: e
});
  if (t === a.rV.MONTH && n > 1)
return o.Z.Messages.BILLING_PRICE_PER_MULTI_MONTHS.format({
  price: e,
  intervalCount: n
});
  throw Error('Unsupported interval type: '.concat(t, ', and interval count: ').concat(n));
}

function u(e, t) {
  return Intl.NumberFormat(e, {
style: 'percent',
minimumFractionDigits: 0
  }).format(t);
}