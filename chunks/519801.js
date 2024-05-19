"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("789020");
var a = n("735250"),
  r = n("470079"),
  s = n("131388"),
  l = n("607070"),
  i = n("745510"),
  u = n("171246"),
  o = n("689011"),
  d = n("931905"),
  c = n("598"),
  f = n("409813"),
  _ = n("586585"),
  P = n("456251"),
  S = n("614277"),
  A = n("698708"),
  E = n("750143"),
  p = n("689938");

function C(e) {
  var t, n;
  let C, I, {
      showBenefits: m,
      handleClose: T,
      onSubscriptionConfirmation: N
    } = e,
    {
      updatedSubscription: O,
      readySlideId: y,
      selectedSku: R,
      selectedStoreListing: b,
      application: g
    } = (0, c.usePaymentContext)(),
    h = (0, s.default)(E.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
    {
      createMultipleConfettiAt: L
    } = r.useContext(i.ConfettiCannonContext),
    M = null !== (t = null == R ? void 0 : R.name) && void 0 !== t ? t : "",
    k = () => {
      T(), null == N || N()
    },
    U = y === f.Step.CONFIRM,
    v = (0, u.isApplicationUserSubscription)(null !== (n = null == R ? void 0 : R.flags) && void 0 !== n ? n : 0),
    B = null != b && b.benefits.length > 0 ? p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
      benefitCount: b.benefits.length
    }) : null;
  return m ? h ? C = (0, a.jsx)(d.BenefitsConfirmationLite, {
    title: p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
      tierName: M
    }),
    subtitle: null != b && b.benefits.length > 0 ? p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
      benefits: B
    }) : null,
    onConfirm: k,
    confirmCta: p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
  }) : (C = null != b && null != g ? (0, a.jsx)(o.BenefitsConfirmation, {
    icon: b.thumbnail,
    storeListingBenefits: b.benefits,
    application: g,
    title: p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
      tier: M
    }),
    subtitle: p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
    description: v ? p.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      applicationName: null == g ? void 0 : g.name
    }) : p.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      tier: M
    })
  }) : (0, a.jsx)(P.default, {}), I = (0, a.jsx)(_.default, {
    onPrimary: k,
    primaryCTA: _.CTAType.CONTINUE,
    primaryText: p.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
  })) : C = h ? (0, a.jsx)(d.PurchaseConfirmationLite, {
    tierName: M,
    onConfirm: k,
    subscription: O
  }) : (0, a.jsx)(o.PurchaseConfirmation, {
    tierName: M,
    onConfirm: k,
    subscription: O
  }), r.useEffect(() => {
    l.default.useReducedMotion && U && L(window.innerWidth / 2, window.innerHeight / 2)
  }, [L, U]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(S.PaymentPortalBody, {
      children: [(0, a.jsx)(A.default, {}), C]
    }), null != I && (0, a.jsx)(S.PaymentPortalFooter, {
      children: I
    })]
  })
}