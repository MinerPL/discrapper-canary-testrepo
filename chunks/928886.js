"use strict";
n.r(t), n.d(t, {
  PaymentModalHeader: function() {
    return y
  }
});
var u = n("735250"),
  l = n("470079"),
  i = n("512722"),
  a = n.n(i),
  r = n("481060"),
  s = n("479446"),
  o = n("646476"),
  c = n("104494"),
  d = n("639119"),
  f = n("981632"),
  _ = n("798769"),
  E = n("689011"),
  p = n("669079"),
  S = n("987209"),
  m = n("598"),
  P = n("409813"),
  T = n("981631"),
  M = n("474936"),
  I = n("231338"),
  A = n("336498");

function y(e) {
  var t;
  let {
    renderHeader: n,
    referralTrialOfferId: i,
    handleClose: y
  } = e, {
    selectedSkuId: R,
    step: v,
    selectedPlan: h,
    purchaseState: N,
    purchaseType: C,
    selectedSku: O
  } = (0, m.usePaymentContext)(), {
    isGift: L,
    selectedGiftStyle: U,
    giftRecipient: g
  } = (0, S.useGiftContext)(), k = L && (0, p.shouldShowCustomGiftExperience)(g) && v === P.Step.CONFIRM && null != U && (null == O ? void 0 : O.productLine) !== T.SKUProductLines.COLLECTIBLES, b = null != n && null != v, x = v !== P.Step.SKU_SELECT && null != R, G = (0, d.usePremiumTrialOffer)(i), D = !L && null != G && null != R && (0, M.SubscriptionTrials)[G.trial_id].skus.includes(R), Y = (0, c.usePremiumDiscountOffer)(), w = null == Y ? void 0 : null === (t = Y.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => M.SubscriptionPlanInfo[e].skuId === R), H = !L && null != Y && null != R && w, {
    enabled: F
  } = o.default.useExperiment({
    location: "PaymentModalHeader"
  }, {
    autoTrackExposure: !1
  }), K = (0, o.useIsSeasonalGiftingActive)(), B = F && K;
  return l.useMemo(() => {
    if (null == v) return;
    let e = null;
    if (k) e = (0, u.jsxs)("div", {
      className: A.container,
      children: [(0, u.jsx)(f.default, {
        defaultAnimationState: s.AnimationState.LOOP,
        giftStyle: U,
        className: A.seasonalGiftBoxHeaderIcon
      }), (0, u.jsx)(r.ModalCloseButton, {
        onClick: y,
        className: A.closeButton
      })]
    });
    else if (b) e = n(null != h ? h : null, y, v);
    else if (C === I.PurchaseTypes.ONE_TIME) e = (0, u.jsx)(E.PurchaseHeader, {
      step: v,
      onClose: y
    });
    else if (x) a()(R in M.PremiumSubscriptionSKUToPremiumType, "invalid sku id: ".concat(R)), e = (0, u.jsx)(_.default, {
      currentStep: null != v ? v : void 0,
      purchaseState: N,
      premiumType: M.PremiumSubscriptionSKUToPremiumType[R],
      onClose: y,
      showTrialBadge: D,
      showDiscountBadge: H,
      isGift: L,
      giftRecipient: g,
      useWinterTheme: B
    });
    return e
  }, [U, y, N, n, h, R, v, D, H, k, x, b, C, L, g, B])
}