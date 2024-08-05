n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(987209),
  r = n(981631);

function l(e) {
  let {
initialPlanId: t,
activeSubscription: l,
trialId: o,
trialFooterMessageOverride: c,
onClose: u,
analyticsObject: d,
analyticsLocation: _,
analyticsLocations: E,
analyticsSubscriptionType: I,
renderHeader: m,
renderPurchaseConfirmation: T,
planGroup: h,
reviewWarningMessage: N,
skuId: C
  } = e;
  (0, s.openModalLazy)(async () => {
let {
  PaymentContextProvider: e
} = await Promise.resolve().then(n.bind(n, 598)), {
  PaymentModal: s
} = await Promise.all([
  n.e('15972'),
  n.e('47006'),
  n.e('32776'),
  n.e('87786')
]).then(n.bind(n, 791785)), {
  STEPS: r
} = await Promise.all([
  n.e('96427'),
  n.e('15972'),
  n.e('13682'),
  n.e('15685'),
  n.e('47006'),
  n.e('32776'),
  n.e('94915'),
  n.e('8016'),
  n.e('68136'),
  n.e('62761'),
  n.e('83683')
]).then(n.bind(n, 7305));
return n => {
  let {
    onClose: f,
    ...p
  } = n;
  return (0, i.jsx)(e, {
    activeSubscription: l,
    stepConfigs: r,
    skuIDs: [C],
    children: (0, i.jsx)(a.KB, {
      children: (0, i.jsx)(s, {
        ...p,
        initialPlanId: t,
        onClose: e => {
          f(), null == u || u(e);
        },
        analyticsLocations: E,
        analyticsObject: d,
        analyticsLocation: _,
        analyticsSubscriptionType: I,
        skuId: C,
        renderHeader: m,
        renderPurchaseConfirmation: T,
        planGroup: h,
        trialId: o,
        trialFooterMessageOverride: c,
        reviewWarningMessage: N
      })
    })
  });
};
  }, {
onCloseCallback: () => {
  null == u || u(!1);
},
onCloseRequest: r.dG4
  });
}