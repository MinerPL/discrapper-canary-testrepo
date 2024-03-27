"use strict";
n.r(t), n.d(t, {
  purchaseProduct: function() {
    return I
  }
}), n("70102"), n("222007");
var s = n("627445"),
  r = n.n(s),
  a = n("913144"),
  i = n("850068"),
  l = n("112679"),
  u = n("596523"),
  o = n("465527"),
  c = n("388290"),
  d = n("599110"),
  m = n("745279"),
  f = n("719923"),
  p = n("286350"),
  _ = n("49111"),
  S = n("646718");
async function I(e) {
  let {
    setPurchaseState: t,
    setHasAcceptedTerms: n,
    setIsSubmitting: s,
    setPurchaseError: I,
    hasRedirectURL: E,
    setHasRedirectURL: P,
    isGift: T,
    baseAnalyticsData: N,
    analyticsLocation: A,
    analyticsLocations: C,
    flowStartTime: h,
    subscriptionPlan: v,
    planGroup: g,
    trialId: x,
    priceOptions: y,
    paymentSource: O,
    isPrepaidPaymentPastDue: M,
    openInvoiceId: R,
    premiumSubscription: L,
    onNext: b,
    metadata: j,
    sku: G,
    skuPricePreview: D,
    purchaseType: U,
    referralCode: F,
    loadId: B,
    giftInfoOptions: w
  } = e;
  t(p.PurchaseState.PURCHASING), n(!0), s(!0), a.default.wait(l.clearError), I(null);
  try {
    let e, n, s;
    if (d.default.track(_.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
        ...N,
        duration_ms: Date.now() - h
      }), E) return;
    if (U === _.PurchaseTypes.ONE_TIME) r(null != G, "SKU must exist and be fetched."), r(null != D, "SKUPricePreview must exist."), e = await (0, o.purchaseSKU)(G.applicationId, G.id, {
      expectedAmount: D.amount,
      expectedCurrency: D.currency,
      isGift: T,
      paymentSource: O,
      loadId: B,
      giftInfoOptions: w
    });
    else if (r(null != v, "Missing subscriptionPlan"), T) {
      let t = (0, f.getPrice)(v.id, !1, !0, y);
      if ("usd" === t.currency && (null == O ? void 0 : O.type) === _.PaymentSourceTypes.GCASH) {
        var k;
        let e = Error("Invalid USD currency for GCash");
        (0, m.captureBillingException)(e, {
          tags: {
            paymentSourceId: null !== (k = null == O ? void 0 : O.id) && void 0 !== k ? k : "",
            subscriptionPlanId: v.id,
            priceOptions: JSON.stringify(y)
          }
        })
      }
      e = await (0, o.purchaseSKU)(S.PREMIUM_SUBSCRIPTION_APPLICATION, v.skuId, {
        expectedAmount: t.amount,
        expectedCurrency: t.currency,
        paymentSource: O,
        subscriptionPlanId: v.id,
        isGift: !0,
        loadId: B,
        giftInfoOptions: w
      })
    } else if (M && null != R && null != O && null != L) e = _.PREPAID_PAYMENT_SOURCES.has(O.type) ? await (0, i.payInvoiceManually)(L, R, O, y.currency) : await (0, i.updateSubscription)(L, {
      paymentSource: O,
      currency: y.currency
    }, C, A, B);
    else if (null != L) {
      let t = (0, f.getItemsWithUpsertedPlanIdForGroup)(L, v.id, 1, new Set(g)),
        n = {
          paymentSource: O,
          currency: y.currency
        };
      L.status === _.SubscriptionStatusTypes.PAUSED ? n.status = _.SubscriptionStatusTypes.ACTIVE : n.items = t, e = await (0, i.updateSubscription)(L, n, C, A, B)
    } else e = await (0, u.subscribe)({
      planId: v.id,
      currency: y.currency,
      paymentSource: O,
      trialId: x,
      metadata: j,
      referralCode: F,
      loadId: B
    });
    if (e.redirectConfirmation) {
      P(null != e.redirectURL);
      return
    }
    t(p.PurchaseState.COMPLETED), "subscription" in e ? n = null != e.subscription ? c.default.createFromServer(e.subscription) : null : "entitlements" in e && (s = null != e.entitlements ? e.entitlements : void 0), b(n, s)
  } catch (e) {
    t(p.PurchaseState.FAIL), I(e), d.default.track(_.AnalyticEvents.PAYMENT_FLOW_FAILED, {
      ...N,
      payment_error_code: null == e ? void 0 : e.code,
      payment_source_id: null == O ? void 0 : O.id,
      payment_source_type: null == O ? void 0 : O.type,
      duration_ms: Date.now() - h
    })
  } finally {
    !E && s(!1)
  }
}