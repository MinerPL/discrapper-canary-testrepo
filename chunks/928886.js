t.d(e, {
  U: function() {
return h;
  }
});
var l = t(735250),
  u = t(470079),
  i = t(512722),
  a = t.n(i),
  r = t(481060),
  o = t(479446),
  s = t(646476),
  c = t(104494),
  d = t(639119),
  _ = t(981632),
  E = t(798769),
  f = t(689011),
  p = t(669079),
  m = t(987209),
  T = t(598),
  M = t(409813),
  I = t(981631),
  A = t(474936),
  S = t(231338),
  v = t(484169);

function h(n) {
  var e;
  let {
renderHeader: t,
referralTrialOfferId: i,
handleClose: h
  } = n, {
selectedSkuId: P,
step: N,
selectedPlan: R,
purchaseState: y,
purchaseType: g,
selectedSku: C
  } = (0, T.usePaymentContext)(), {
isGift: L,
selectedGiftStyle: Z,
giftRecipient: k
  } = (0, m.wD)(), x = L && (0, p.pO)(k) && N === M.h8.CONFIRM && null != Z && (null == C ? void 0 : C.productLine) !== I.POd.COLLECTIBLES, O = null != t && null != N, U = N !== M.h8.SKU_SELECT && null != P, D = (0, d.N)(i), G = !L && null != D && null != P && A.nG[D.trial_id].skus.includes(P), w = (0, c.Ng)(), b = null == w ? void 0 : null === (e = w.discount) || void 0 === e ? void 0 : e.plan_ids.some(n => A.GP[n].skuId === P), Y = !L && null != w && null != P && b, {
enabled: H
  } = s.ZP.useExperiment({
location: 'PaymentModalHeader'
  }, {
autoTrackExposure: !1
  }), W = (0, s.rK)(), j = H && W;
  return u.useMemo(() => {
if (null == N)
  return;
let n = null;
if (x)
  n = (0, l.jsxs)('div', {
    className: v.container,
    children: [
      (0, l.jsx)(_.Z, {
        defaultAnimationState: o.S.LOOP,
        giftStyle: Z,
        className: v.seasonalGiftBoxHeaderIcon
      }),
      (0, l.jsx)(r.ModalCloseButton, {
        onClick: h,
        className: v.closeButton
      })
    ]
  });
else if (O)
  n = t(null != R ? R : null, h, N);
else if (g === S.GZ.ONE_TIME)
  n = (0, l.jsx)(f.t, {
    step: N,
    onClose: h
  });
else if (U)
  a()(P in A.y7, 'invalid sku id: '.concat(P)), n = (0, l.jsx)(E.Z, {
    currentStep: null != N ? N : void 0,
    purchaseState: y,
    premiumType: A.y7[P],
    onClose: h,
    showTrialBadge: G,
    showDiscountBadge: Y,
    isGift: L,
    giftRecipient: k,
    useWinterTheme: j
  });
return n;
  }, [
Z,
h,
y,
t,
R,
P,
N,
G,
Y,
x,
U,
O,
g,
L,
k,
j
  ]);
}