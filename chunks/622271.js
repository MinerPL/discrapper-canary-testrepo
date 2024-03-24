"use strict";
n.r(t), n.d(t, {
  PaymentModalHeader: function() {
    return N
  }
});
var l = n("37983"),
  u = n("884691"),
  a = n("627445"),
  i = n.n(a),
  s = n("77078"),
  r = n("210721"),
  o = n("53253"),
  c = n("154889"),
  d = n("917247"),
  f = n("65324"),
  _ = n("510928"),
  E = n("713536"),
  p = n("659632"),
  m = n("635357"),
  S = n("642906"),
  P = n("85336"),
  T = n("49111"),
  M = n("646718"),
  A = n("843455"),
  I = n("293199");

function N(e) {
  var t;
  let {
    renderHeader: n,
    referralTrialOfferId: a,
    handleClose: N
  } = e, {
    selectedSkuId: y,
    step: h,
    selectedPlan: C,
    purchaseState: R,
    purchaseType: O,
    selectedSku: v
  } = (0, S.usePaymentContext)(), {
    isGift: g,
    selectedGiftStyle: L,
    giftRecipient: k
  } = (0, m.useGiftContext)(), x = g && (0, p.shouldShowCustomGiftExperience)(k) && h === P.Step.CONFIRM && null != L && (null == v ? void 0 : v.productLine) !== T.SKUProductLines.COLLECTIBLES, U = null != n && null != h, b = h !== P.Step.SKU_SELECT && null != y, D = (0, d.usePremiumTrialOffer)(a), G = !g && null != D && null != y && (0, M.SubscriptionTrials)[D.trial_id].skus.includes(y), Y = (0, c.usePremiumDiscountOffer)(), j = null == Y ? void 0 : null === (t = Y.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => M.SubscriptionPlanInfo[e].skuId === y), H = !g && null != Y && null != y && j, {
    enabled: B
  } = o.default.useExperiment({
    location: "PaymentModalHeader"
  }, {
    autoTrackExposure: !1
  }), w = (0, o.useIsSeasonalGiftingActive)(), K = B && w, F = u.useMemo(() => {
    if (null == h) return;
    let e = null;
    if (x) e = (0, l.jsxs)("div", {
      className: I.container,
      children: [(0, l.jsx)(f.default, {
        defaultAnimationState: r.AnimationState.LOOP,
        giftStyle: L,
        className: I.seasonalGiftBoxHeaderIcon
      }), (0, l.jsx)(s.ModalCloseButton, {
        onClick: N,
        className: I.closeButton
      })]
    });
    else if (U) e = n(null != C ? C : null, N, h);
    else if (O === A.PurchaseTypes.ONE_TIME) e = (0, l.jsx)(E.PurchaseHeader, {
      step: h,
      onClose: N
    });
    else if (b) i(y in M.PremiumSubscriptionSKUToPremiumType, "invalid sku id: ".concat(y)), e = (0, l.jsx)(_.default, {
      currentStep: null != h ? h : void 0,
      purchaseState: R,
      premiumType: M.PremiumSubscriptionSKUToPremiumType[y],
      onClose: N,
      showTrialBadge: G,
      showDiscountBadge: H,
      isGift: g,
      giftRecipient: k,
      useWinterTheme: K
    });
    return e
  }, [L, N, R, n, C, y, h, G, H, x, b, U, O, g, k, K]);
  return F
}