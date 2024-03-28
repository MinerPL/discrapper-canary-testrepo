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
  I = n("456251"),
  E = n("614277"),
  S = n("698708"),
  P = n("750143"),
  A = n("689938");

function C(e) {
  var t, n;
  let C, N, {
      showBenefits: T,
      handleClose: m,
      onSubscriptionConfirmation: O
    } = e,
    {
      updatedSubscription: p,
      readySlideId: R,
      selectedSku: L,
      selectedStoreListing: h,
      application: M
    } = (0, c.usePaymentContext)(),
    g = (0, s.default)(P.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
    {
      createMultipleConfettiAt: y
    } = r.useContext(i.ConfettiCannonContext),
    b = null !== (t = null == L ? void 0 : L.name) && void 0 !== t ? t : "",
    U = () => {
      m(), null == O || O()
    },
    x = R === f.Step.CONFIRM,
    D = (0, u.isApplicationUserSubscription)(null !== (n = null == L ? void 0 : L.flags) && void 0 !== n ? n : 0),
    v = null != h && h.benefits.length > 0 ? A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
      benefitCount: h.benefits.length
    }) : null;
  return T ? g ? C = (0, a.jsx)(d.BenefitsConfirmationLite, {
    title: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
      tierName: b
    }),
    subtitle: null != h && h.benefits.length > 0 ? A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
      benefits: v
    }) : null,
    onConfirm: U,
    confirmCta: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
  }) : (C = null != h && null != M ? (0, a.jsx)(o.BenefitsConfirmation, {
    icon: h.thumbnail,
    storeListingBenefits: h.benefits,
    application: M,
    title: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
      tier: b
    }),
    subtitle: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
    description: D ? A.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      applicationName: null == M ? void 0 : M.name
    }) : A.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      tier: b
    })
  }) : (0, a.jsx)(I.default, {}), N = (0, a.jsx)(_.default, {
    onPrimary: U,
    primaryCTA: _.CTAType.CONTINUE,
    primaryText: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
  })) : C = g ? (0, a.jsx)(d.PurchaseConfirmationLite, {
    tierName: b,
    onConfirm: U,
    subscription: p
  }) : (0, a.jsx)(o.PurchaseConfirmation, {
    tierName: b,
    onConfirm: U,
    subscription: p
  }), r.useEffect(() => {
    l.default.useReducedMotion && x && y(window.innerWidth / 2, window.innerHeight / 2)
  }, [y, x]), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(E.PaymentPortalBody, {
      children: [(0, a.jsx)(S.default, {}), C]
    }), null != N && (0, a.jsx)(E.PaymentPortalFooter, {
      children: N
    })]
  })
}