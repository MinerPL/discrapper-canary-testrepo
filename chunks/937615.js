"use strict";
n.d(t, {
  T3: function() {
    return u
  },
  T4: function() {
    return a
  },
  og: function() {
    return l
  }
}), n(411104);
var i = n(221513),
  r = n(706454),
  s = n(474936),
  o = n(689938);

function a(e, t, n) {
  var s;
  let o = null !== (s = null == n ? void 0 : n.localeOverride) && void 0 !== s ? s : r.default.locale;
  return (0, i.T4)(e, t, o, n)
}

function l(e, t, n) {
  if (t === s.rV.YEAR) return o.Z.Messages.BILLING_PRICE_PER_YEAR.format({
    price: e
  });
  if (t === s.rV.MONTH && 1 === n) return o.Z.Messages.BILLING_PRICE_PER_MONTH.format({
    price: e
  });
  if (t === s.rV.MONTH && n > 1) return o.Z.Messages.BILLING_PRICE_PER_MULTI_MONTHS.format({
    price: e,
    intervalCount: n
  });
  throw Error("Unsupported interval type: ".concat(t, ", and interval count: ").concat(n))
}

function u(e, t) {
  return Intl.NumberFormat(e, {
    style: "percent",
    minimumFractionDigits: 0
  }).format(t)
}