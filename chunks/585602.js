s.d(n, {
  Z: function() {
return i;
  }
});
var t = s(735250);
s(470079);
var r = s(937615),
  l = s(653798),
  a = s(689938);

function i(e) {
  let {
invoice: n
  } = e;
  return n.taxInclusive || n.tax <= 0 ? null : (0, t.jsx)(l.R$, {
label: a.Z.Messages.TAX_LABEL,
value: (0, r.T4)(n.tax, n.currency)
  });
}