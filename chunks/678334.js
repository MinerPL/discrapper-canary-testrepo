t.d(n, {
  Z: function() {
return y;
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
  d = t(160913),
  _ = t(311821),
  p = t(459965),
  m = t(858987),
  I = t(975060),
  f = t(882712),
  E = t(855775),
  x = t(285952),
  N = t(626135),
  S = t(669079),
  T = t(74538),
  h = t(987209),
  b = t(598),
  g = t(632580),
  P = t(45572),
  v = t(919778),
  A = t(612853),
  C = t(981631),
  M = t(248317);

function y(e) {
  let {
premiumSubscription: n,
setPurchaseState: t,
onBack: r,
onNext: y,
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
metadata: W,
backButtonEligible: H,
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
invoicePreview: er
  } = (0, b.usePaymentContext)(), {
isGift: es,
selectedGiftStyle: el,
customGiftMessage: eo,
emojiConfetti: ec,
soundEffect: eu,
giftRecipient: ed
  } = (0, h.wD)(), e_ = (0, S.MY)(ed), ep = {};
  ep.gift_style = el, e_ === S.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && (s()(null != ed, 'Gift recipient must be set at purchase review step for these gift options.'), ep.recipient_id = ed.id, ep.custom_message = eo, ep.emoji_id = null == ec ? void 0 : ec.id, ep.emoji_name = (null == ec ? void 0 : ec.id) == null ? null == ec ? void 0 : ec.surrogates : void 0, ep.sound_id = null == eu ? void 0 : eu.soundId);
  let em = null == V ? void 0 : V.id,
eI = (0, v.sE)(G, z.paymentSourceId, em),
ef = (0, l.e7)([I.Z], () => I.Z.popupCallbackCalled),
{
  analyticsLocations: eE
} = (0, u.ZP)(),
ex = null != Q ? $[Q] : null,
[eN, eS] = a.useState(eI),
[eT, eh] = a.useState(!1),
{
  hasEntitlements: eb
} = (0, p.H)(em, es),
eg = (0, T.Ap)(z.paymentSourceId),
eP = eb || eI,
ev = (0, d.U)(),
eA = null,
eC = null;
  if (J === C.GZQ.ONE_TIME) {
var eM;
s()(null != ee, 'SKU must be selected for one-time purchases'), eA = null !== (eM = en[ee]) && void 0 !== eM ? eM : null, s()(null != eA, 'SKU must exist and be fetched.');
let e = et[ee],
  n = null != Q ? Q : E.c;
eC = null != e ? e[n] : null;
  }
  let ey = async () => {
await (0, g.H)({
  setPurchaseState: t,
  setHasAcceptedTerms: X,
  setIsSubmitting: eS,
  setPurchaseError: q,
  hasRedirectURL: eT,
  setHasRedirectURL: eh,
  isGift: es,
  baseAnalyticsData: D,
  analyticsLocation: U,
  analyticsLocations: eE,
  flowStartTime: w,
  subscriptionPlan: V,
  planGroup: B,
  trialId: G,
  priceOptions: z,
  paymentSource: ex,
  isPrepaidPaymentPastDue: ev,
  openInvoiceId: F,
  premiumSubscription: n,
  onNext: y,
  metadata: W,
  sku: eA,
  skuPricePreview: eC,
  purchaseType: J,
  referralCode: ei,
  loadId: ea.loadId,
  giftInfoOptions: ep,
  invoicePreview: er
});
  };
  a.useEffect(() => {
(async () => {
  if (!0 === ef)
    try {
      if (null == I.Z.redirectedPaymentId)
        return;
      await (0, c.OP)(I.Z.redirectedPaymentId), t(P.A.COMPLETED), y();
    } catch (e) {
      t(P.A.FAIL), Z(e), N.default.track(C.rMx.PAYMENT_FLOW_FAILED, {
        ...D,
        payment_error_code: null == e ? void 0 : e.code,
        payment_source_id: Q,
        payment_source_type: null == ex ? void 0 : ex.type,
        duration_ms: Date.now() - w
      });
    } finally {
      eS(!1), (0, c.K2)();
    }
  else
    k === f.I.SUCCESS && await ey();
})();
  }, [ef]), a.useEffect(() => {
eI && !es && null == n && ey();
  }, [
eI,
es,
n
  ]);
  let eO = null != F || J === C.GZQ.ONE_TIME && !es;
  return eI ? null : (0, i.jsxs)(o.ModalFooter, {
align: x.Z.Align.CENTER,
children: [
  (0, i.jsx)(m.Z, {
    legalTermsNodeRef: O,
    invoiceError: L,
    planError: j,
    disablePurchase: Y,
    flashLegalTerms: R,
    isSubmitting: eN,
    premiumSubscription: n,
    isGift: es,
    planGroup: B,
    isPrepaid: eg,
    isTrial: K,
    makePurchase: ey,
    needsPaymentSource: null == ex && !eP
  }),
  (0, i.jsx)(A.Z, {}),
  H && !eO ? (0, i.jsx)('div', {
    className: M.back,
    children: (0, i.jsx)(_.Z, {
      onClick: r
    })
  }) : null
]
  });
}