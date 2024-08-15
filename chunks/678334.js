t.d(n, {
  Z: function() {
return C;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  r = t(512722),
  s = t.n(r),
  l = t(442837),
  o = t(481060),
  c = t(355467),
  u = t(906732),
  d = t(600164),
  _ = t(160913),
  p = t(311821),
  m = t(459965),
  I = t(858987),
  f = t(975060),
  E = t(882712),
  x = t(855775),
  N = t(626135),
  S = t(669079),
  T = t(74538),
  h = t(987209),
  b = t(598),
  g = t(632580),
  P = t(45572),
  v = t(919778),
  A = t(612853),
  y = t(981631),
  M = t(181729);

function C(e) {
  let {
premiumSubscription: n,
setPurchaseState: t,
onBack: r,
onNext: C,
legalTermsNodeRef: O,
flashLegalTerms: R,
invoiceError: L,
planError: j,
onPurchaseError: Z,
baseAnalyticsData: D,
flowStartTime: w,
trialId: G,
planGroup: B,
analyticsLocation: U,
purchaseTokenAuthState: k,
openInvoiceId: F,
metadata: H,
backButtonEligible: W,
disablePurchase: Y,
isTrial: K = !1
  } = e, {
selectedPlan: V,
priceOptions: z,
setHasAcceptedTerms: X,
setPurchaseError: q,
purchaseType: J,
paymentSourceId: Q,
paymentSources: $,
selectedSkuId: ee,
skusById: en,
skuPricePreviewsById: et,
referralCode: ei,
contextMetadata: ea,
invoicePreview: er,
inReverseTrial: es
  } = (0, b.usePaymentContext)(), {
isGift: el,
selectedGiftStyle: eo,
customGiftMessage: ec,
emojiConfetti: eu,
soundEffect: ed,
giftRecipient: e_
  } = (0, h.wD)(), ep = (0, S.MY)(e_), em = {};
  em.gift_style = eo, ep === S.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (s()(null != e_, 'Gift recipient must be set at purchase review step for these gift options.'), em.recipient_id = e_.id, em.custom_message = ec, em.emoji_id = null == eu ? void 0 : eu.id, em.emoji_name = (null == eu ? void 0 : eu.id) == null ? null == eu ? void 0 : eu.surrogates : void 0, em.sound_id = null == ed ? void 0 : ed.soundId);
  let eI = null == V ? void 0 : V.id,
ef = (0, v.sE)(G, z.paymentSourceId, eI),
eE = (0, l.e7)([f.Z], () => f.Z.popupCallbackCalled),
{
  analyticsLocations: ex
} = (0, u.ZP)(),
eN = null != Q ? $[Q] : null,
[eS, eT] = a.useState(ef),
[eh, eb] = a.useState(!1),
{
  hasEntitlements: eg
} = (0, m.H)(eI, el),
eP = (0, T.Ap)(z.paymentSourceId),
ev = eg || ef,
eA = (0, _.U)(),
ey = null,
eM = null;
  if (J === y.GZQ.ONE_TIME) {
var eC;
s()(null != ee, 'SKU must be selected for one-time purchases'), ey = null !== (eC = en[ee]) && void 0 !== eC ? eC : null, s()(null != ey, 'SKU must exist and be fetched.');
let e = et[ee],
  n = null != Q ? Q : x.c;
eM = null != e ? e[n] : null;
  }
  let eO = async () => {
await (0, g.H)({
  setPurchaseState: t,
  setHasAcceptedTerms: X,
  setIsSubmitting: eT,
  setPurchaseError: q,
  hasRedirectURL: eh,
  setHasRedirectURL: eb,
  isGift: el,
  baseAnalyticsData: D,
  analyticsLocation: U,
  analyticsLocations: ex,
  flowStartTime: w,
  subscriptionPlan: V,
  planGroup: B,
  trialId: G,
  priceOptions: z,
  paymentSource: eN,
  isPrepaidPaymentPastDue: eA,
  openInvoiceId: F,
  premiumSubscription: n,
  onNext: C,
  metadata: H,
  sku: ey,
  skuPricePreview: eM,
  purchaseType: J,
  referralCode: ei,
  loadId: ea.loadId,
  giftInfoOptions: em,
  invoicePreview: er
});
  };
  a.useEffect(() => {
(async () => {
  if (!0 === eE)
    try {
      if (null == f.Z.redirectedPaymentId)
        return;
      await (0, c.OP)(f.Z.redirectedPaymentId), t(P.A.COMPLETED), C();
    } catch (e) {
      t(P.A.FAIL), Z(e), N.default.track(y.rMx.PAYMENT_FLOW_FAILED, {
        ...D,
        payment_error_code: null == e ? void 0 : e.code,
        payment_source_id: Q,
        payment_source_type: null == eN ? void 0 : eN.type,
        duration_ms: Date.now() - w
      });
    } finally {
      eT(!1), (0, c.K2)();
    }
  else
    k === E.I.SUCCESS && await eO();
})();
  }, [eE]), a.useEffect(() => {
ef && !el && null == n && eO();
  }, [
ef,
el,
n
  ]);
  let eR = null != F || J === y.GZQ.ONE_TIME && !el;
  return ef ? null : (0, i.jsxs)(o.ModalFooter, {
align: d.Z.Align.CENTER,
children: [
  (0, i.jsx)(I.Z, {
    legalTermsNodeRef: O,
    invoiceError: L,
    planError: j,
    disablePurchase: Y,
    flashLegalTerms: R,
    isSubmitting: eS,
    premiumSubscription: n,
    isGift: el,
    planGroup: B,
    isPrepaid: eP,
    isTrial: K,
    makePurchase: eO,
    needsPaymentSource: null == eN && !ev,
    onNext: C,
    inReverseTrial: es
  }),
  (0, i.jsx)(A.Z, {}),
  W && !eR ? (0, i.jsx)('div', {
    className: M.back,
    children: (0, i.jsx)(p.Z, {
      onClick: r
    })
  }) : null
]
  });
}