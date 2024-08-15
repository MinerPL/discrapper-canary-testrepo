t.r(n), t.d(n, {
  default: function() {
return C;
  }
});
var r = t(735250);
t(470079);
var a = t(100527),
  o = t(906732),
  i = t(987209),
  s = t(598),
  l = t(409813),
  c = t(791785),
  d = t(276442),
  u = t(793541),
  f = t(380898),
  h = t(710094),
  p = t(865921),
  g = t(853872),
  b = t(806984),
  x = t(464797),
  m = t(946211),
  _ = t(231338);
let v = [{
key: null,
renderStep: e => (0, r.jsx)(p.v, {
  ...e
})
  },
  {
key: l.h8.ADD_PAYMENT_STEPS,
renderStep: e => (0, r.jsx)(d.J, {
  ...e,
  onReturn: () => {
    0 === Object.keys(g.Z.paymentSources).length ? e.handleClose() : e.handleStepChange(l.h8.REVIEW, {
      trackedFromStep: l.h8.ADD_PAYMENT_STEPS
    });
  }
})
  },
  {
key: l.h8.AWAITING_PURCHASE_TOKEN_AUTH,
renderStep: () => (0, r.jsx)(f.Z, {})
  },
  {
key: l.h8.AWAITING_AUTHENTICATION,
renderStep: () => (0, r.jsx)(u.Z, {})
  },
  {
key: l.h8.REVIEW,
renderStep: e => (0, r.jsx)(h.l, {
  ...e
})
  },
  {
key: l.h8.CONFIRM,
renderStep: e => (0, r.jsx)(b.Z, {
  ...e
})
  }
];

function C(e) {
  let {
guildProductContext: n,
sourceAnalyticsLocations: t,
applicationId: l,
...d
  } = e, {
analyticsLocations: u
  } = (0, o.ZP)(t, a.Z.GUILD_PRODUCT_PAYMENT_MODAL);
  return (0, r.jsx)(x.R, {
...n,
children: (0, r.jsx)(o.Gt, {
  value: u,
  children: (0, r.jsx)(s.PaymentContextProvider, {
    stepConfigs: v,
    applicationId: l,
    skuIDs: [d.skuId],
    activeSubscription: null,
    purchaseType: _.GZ.ONE_TIME,
    children: (0, r.jsx)(i.KB, {
      children: (0, r.jsx)(c.PaymentModal, {
        initialPlanId: null,
        analyticsLocations: u,
        renderHeader: m.L,
        ...d
      })
    })
  })
})
  });
}