n.r(t), n.d(t, {
  STANDARD_ONE_TIME_PAYMENT_STEPS: function() {
return p;
  },
  default: function() {
return f;
  }
}), n(47120);
var r = n(735250);
n(470079);
var o = n(100527),
  a = n(906732),
  i = n(987209),
  c = n(598),
  s = n(791785),
  d = n(961830),
  l = n(231338);

function u(e) {
  let {
onClose: t,
onComplete: n,
transitionState: o,
applicationId: i,
analyticsLocationObject: d,
skuId: l
  } = e, {} = (0, c.usePaymentContext)(), {
analyticsLocations: u
  } = (0, a.ZP)();
  return (0, r.jsx)(s.PaymentModal, {
onClose: t,
onComplete: n,
applicationId: i,
skuId: l,
initialPlanId: null,
analyticsObject: d,
analyticsLocations: u,
transitionState: o
  });
}
let p = [
  d.WA,
  d.s2,
  ...d.yp,
  d.wo,
  d.F7
];

function f(e) {
  let {
loadId: t,
applicationId: n,
skuId: s,
analyticsLocations: d
  } = e, {
analyticsLocations: f
  } = (0, a.ZP)(d, o.Z.PREMIUM_PAYMENT_MODAL);
  return (0, r.jsx)(a.Gt, {
value: f,
children: (0, r.jsx)(c.PaymentContextProvider, {
  loadId: t,
  stepConfigs: p,
  applicationId: n,
  skuIDs: [s],
  activeSubscription: null,
  purchaseType: l.GZ.ONE_TIME,
  children: (0, r.jsx)(i.KB, {
    children: (0, r.jsx)(u, {
      ...e
    })
  })
})
  });
}