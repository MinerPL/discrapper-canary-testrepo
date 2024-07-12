s.d(n, {
  H: function() {
return p;
  }
}), s(47120);
var l = s(512722),
  t = s.n(l),
  i = s(570140),
  r = s(355467),
  a = s(976255),
  c = s(366939),
  o = s(16084),
  u = s(255078),
  d = s(626135),
  _ = s(74538),
  m = s(45572),
  E = s(981631),
  I = s(474936);
async function p(e) {
  let {
setPurchaseState: n,
setHasAcceptedTerms: s,
setIsSubmitting: l,
setPurchaseError: p,
hasRedirectURL: N,
setHasRedirectURL: T,
isGift: x,
baseAnalyticsData: S,
analyticsLocation: h,
analyticsLocations: P,
flowStartTime: f,
subscriptionPlan: A,
planGroup: v,
trialId: M,
priceOptions: g,
paymentSource: C,
isPrepaidPaymentPastDue: O,
openInvoiceId: R,
premiumSubscription: j,
onNext: L,
metadata: y,
sku: Z,
skuPricePreview: b,
purchaseType: D,
referralCode: G,
loadId: U,
giftInfoOptions: F,
invoicePreview: B
  } = e;
  n(m.A.PURCHASING), s(!0), l(!0), i.Z.wait(a.fw), p(null);
  try {
let e, s, l;
if (d.default.track(E.rMx.PAYMENT_FLOW_COMPLETED, {
    ...S,
    subtotal: null == B ? void 0 : B.subtotal,
    tax: null == B ? void 0 : B.tax,
    expected_amount: null == B ? void 0 : B.total,
    expected_currency: null == B ? void 0 : B.currency,
    duration_ms: Date.now() - f
  }), N)
  return;
if (D === E.GZQ.ONE_TIME)
  t()(null != Z, 'SKU must exist and be fetched.'), t()(null != b, 'SKUPricePreview must exist.'), e = await (0, o.ZZ)(Z.applicationId, Z.id, {
    expectedAmount: b.amount,
    expectedCurrency: b.currency,
    isGift: x,
    paymentSource: C,
    loadId: U,
    giftInfoOptions: F
  });
else if (t()(null != A, 'Missing subscriptionPlan'), x) {
  t()(null != B, 'Missing invoicePreview');
  let n = B.total,
    s = B.currency;
  e = await (0, o.ZZ)(I.RQ, A.skuId, {
    expectedAmount: n,
    expectedCurrency: s,
    paymentSource: C,
    subscriptionPlanId: A.id,
    isGift: !0,
    loadId: U,
    giftInfoOptions: F
  });
} else if (O && null != R && null != C && null != j)
  e = E.Uk1.has(C.type) ? await (0, r.G)(j, R, C, g.currency) : await (0, r.Mg)(j, {
    paymentSource: C,
    currency: g.currency
  }, P, h, U);
else if (null != j) {
  let n = (0, _.al)(j, A.id, 1, new Set(v)),
    s = {
      paymentSource: C,
      currency: g.currency
    };
  j.status === E.O0b.PAUSED ? s.status = E.O0b.ACTIVE : s.items = n, e = await (0, r.Mg)(j, s, P, h, U);
} else
  e = await (0, c.Ld)({
    planId: A.id,
    currency: g.currency,
    paymentSource: C,
    trialId: M,
    metadata: y,
    referralCode: G,
    loadId: U
  });
if (e.redirectConfirmation) {
  T(null != e.redirectURL);
  return;
}
n(m.A.COMPLETED), 'subscription' in e ? s = null != e.subscription ? u.Z.createFromServer(e.subscription) : null : 'entitlements' in e && (l = null != e.entitlements ? e.entitlements : void 0), L(s, l);
  } catch (e) {
n(m.A.FAIL), p(e), d.default.track(E.rMx.PAYMENT_FLOW_FAILED, {
  ...S,
  payment_error_code: null == e ? void 0 : e.code,
  payment_source_id: null == C ? void 0 : C.id,
  payment_source_type: null == C ? void 0 : C.type,
  duration_ms: Date.now() - f
});
  } finally {
!N && l(!1);
  }
}