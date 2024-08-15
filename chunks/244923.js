var s = t(735250);
t(470079);
var r = t(481060),
  l = t(366939),
  i = t(853872),
  a = t(212895),
  c = t(296848);
n.Z = function(e) {
  let {
activeSubscription: n,
onNext: t,
isSubmitting: o,
paymentSourceId: u,
buttonLabel: I,
analyticsLocations: _
  } = e, E = async () => {
let e = i.Z.getPaymentSource(u);
null != e && (await (0, a.i1)(u, (0, c.yb)(n)), await l.tq(n, e, n.currency, _), t());
  };
  return (0, s.jsx)(r.Button, {
'data-testid': 'purchase',
onClick: E,
color: r.Button.Colors.GREEN,
submitting: o,
children: I
  });
};