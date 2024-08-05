t.d(n, {
  H: function() {
return f;
  }
}), t(47120);
var i = t(512722),
  a = t.n(i),
  r = t(570140),
  s = t(355467),
  l = t(976255),
  o = t(366939),
  c = t(16084),
  u = t(255078),
  d = t(626135),
  _ = t(74538),
  p = t(45572),
  m = t(981631),
  I = t(474936);
async function f(e) {
  let {
setPurchaseState: n,
setHasAcceptedTerms: t,
setIsSubmitting: i,
setPurchaseError: f,
hasRedirectURL: E,
setHasRedirectURL: x,
isGift: N,
baseAnalyticsData: S,
analyticsLocation: T,
analyticsLocations: h,
flowStartTime: b,
subscriptionPlan: g,
planGroup: P,
trialId: v,
priceOptions: A,
paymentSource: C,
isPrepaidPaymentPastDue: M,
openInvoiceId: y,
premiumSubscription: O,
onNext: R,
metadata: L,
sku: j,
skuPricePreview: Z,
purchaseType: D,
referralCode: w,
loadId: G,
giftInfoOptions: B,
invoicePreview: U
  } = e;
  n(p.A.PURCHASING), t(!0), i(!0), r.Z.wait(l.fw), f(null);
  try {
let e, t, i;
if (d.default.track(m.rMx.PAYMENT_FLOW_COMPLETED, {
    ...S,
    subtotal: null == U ? void 0 : U.subtotal,
    tax: null == U ? void 0 : U.tax,
    expected_amount: null == U ? void 0 : U.total,
    expected_currency: null == U ? void 0 : U.currency,
    duration_ms: Date.now() - b
  }), E)
  return;
if (D === m.GZQ.ONE_TIME)
  a()(null != j, 'SKU must exist and be fetched.'), a()(null != Z, 'SKUPricePreview must exist.'), e = await (0, c.ZZ)(j.applicationId, j.id, {
    expectedAmount: Z.amount,
    expectedCurrency: Z.currency,
    isGift: N,
    paymentSource: C,
    loadId: G,
    giftInfoOptions: B
  });
else if (a()(null != g, 'Missing subscriptionPlan'), N) {
  a()(null != U, 'Missing invoicePreview');
  let n = U.total,
    t = U.currency;
  e = await (0, c.ZZ)(I.RQ, g.skuId, {
    expectedAmount: n,
    expectedCurrency: t,
    paymentSource: C,
    subscriptionPlanId: g.id,
    isGift: !0,
    loadId: G,
    giftInfoOptions: B
  });
} else if (M && null != y && null != C && null != O)
  e = m.Uk1.has(C.type) ? await (0, s.G)(O, y, C, A.currency) : await (0, s.Mg)(O, {
    paymentSource: C,
    currency: A.currency
  }, h, T, G);
else if (null != O) {
  let n = (0, _.al)(O, g.id, 1, new Set(P)),
    t = {
      paymentSource: C,
      currency: A.currency
    };
  O.status === m.O0b.PAUSED ? t.status = m.O0b.ACTIVE : t.items = n, e = await (0, s.Mg)(O, t, h, T, G);
} else
  e = await (0, o.Ld)({
    planId: g.id,
    currency: A.currency,
    paymentSource: C,
    trialId: v,
    metadata: L,
    referralCode: w,
    loadId: G
  });
if (e.redirectConfirmation) {
  x(null != e.redirectURL);
  return;
}
n(p.A.COMPLETED), 'subscription' in e ? t = null != e.subscription ? u.Z.createFromServer(e.subscription) : null : 'entitlements' in e && (i = null != e.entitlements ? e.entitlements : void 0), R(t, i);
  } catch (e) {
n(p.A.FAIL), f(e), d.default.track(m.rMx.PAYMENT_FLOW_FAILED, {
  ...S,
  payment_error_code: null == e ? void 0 : e.code,
  payment_source_id: null == C ? void 0 : C.id,
  payment_source_type: null == C ? void 0 : C.type,
  duration_ms: Date.now() - b
});
  } finally {
!E && i(!1);
  }
}