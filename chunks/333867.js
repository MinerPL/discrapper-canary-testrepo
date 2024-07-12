t.d(n, {
  Z: function() {
return _;
  }
});
var i = t(735250);
t(470079);
var a = t(772848),
  r = t(481060),
  o = t(976255),
  s = t(667),
  l = t(335131),
  c = t(626135),
  d = t(409813),
  u = t(608579),
  f = t(981631);
let p = 'payment-modal';

function _(e) {
  let n;
  let {
skuId: t,
isGift: _ = !1,
giftMessage: m,
onClose: b,
onComplete: C,
analyticsLocations: g,
analyticsObject: x
  } = e, v = !1, h = (0, a.Z)(), E = e => {
n = e;
  };
  (0, r.openModalLazy)(async () => e => {
let {
  onClose: n,
  returnRef: a,
  ...r
} = e;
return (0, i.jsx)(u.Z, {
  ...r,
  loadId: h,
  skuId: t,
  isGift: _,
  giftMessage: m,
  analyticsLocations: g,
  onClose: e => {
    n(), null == b || b(e);
  },
  onComplete: () => {
    v = !0, null == C || C();
  },
  returnRef: a,
  onStepChange: E
});
  }, {
modalKey: p,
onCloseCallback: () => {
  !v && c.default.track(f.rMx.PAYMENT_FLOW_CANCELED, {
    load_id: h,
    payment_type: f.Zuq[f.GZQ.ONE_TIME],
    location: x,
    is_gift: _,
    location_stack: g
  }), (0, o.fw)(), (0, s.p)(), null == b || b(v), v && (0, l.qg)();
},
onCloseRequest: () => {
  n === d.h8.REVIEW && (0, r.closeModal)(p);
}
  });
}