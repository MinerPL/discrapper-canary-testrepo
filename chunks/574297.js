"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("702976");
var i = n("37983"),
  r = n("884691"),
  a = n("834897"),
  l = n("206230"),
  s = n("526887"),
  u = n("129408"),
  o = n("713536"),
  c = n("640820"),
  d = n("642906"),
  f = n("85336"),
  E = n("159149"),
  S = n("628738"),
  I = n("650484"),
  _ = n("367767"),
  h = n("101703"),
  m = n("782340");

function C(e) {
  var t, n;
  let C, T, {
      showBenefits: N,
      handleClose: A,
      onSubscriptionConfirmation: p
    } = e,
    {
      updatedSubscription: P,
      readySlideId: v,
      selectedSku: O,
      selectedStoreListing: g,
      application: R
    } = (0, d.usePaymentContext)(),
    L = (0, a.default)(h.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
    {
      createMultipleConfettiAt: M
    } = r.useContext(s.ConfettiCannonContext),
    x = null !== (t = null == O ? void 0 : O.name) && void 0 !== t ? t : "",
    b = () => {
      A(), null == p || p()
    },
    y = v === f.Step.CONFIRM,
    U = (0, u.isApplicationUserSubscription)(null !== (n = null == O ? void 0 : O.flags) && void 0 !== n ? n : 0),
    D = null != g && g.benefits.length > 0 ? m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
      benefitCount: g.benefits.length
    }) : null;
  return N ? L ? C = (0, i.jsx)(c.BenefitsConfirmationLite, {
    title: m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
      tierName: x
    }),
    subtitle: null != g && g.benefits.length > 0 ? m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
      benefits: D
    }) : null,
    onConfirm: b,
    confirmCta: m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
  }) : (C = null != g && null != R ? (0, i.jsx)(o.BenefitsConfirmation, {
    icon: g.thumbnail,
    storeListingBenefits: g.benefits,
    application: R,
    title: m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
      tier: x
    }),
    subtitle: m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
    description: U ? m.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      applicationName: null == R ? void 0 : R.name
    }) : m.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      tier: x
    })
  }) : (0, i.jsx)(S.default, {}), T = (0, i.jsx)(E.default, {
    onPrimary: b,
    primaryCTA: E.CTAType.CONTINUE,
    primaryText: m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
  })) : C = L ? (0, i.jsx)(c.PurchaseConfirmationLite, {
    tierName: x,
    onConfirm: b,
    subscription: P
  }) : (0, i.jsx)(o.PurchaseConfirmation, {
    tierName: x,
    onConfirm: b,
    subscription: P
  }), r.useEffect(() => {
    l.default.useReducedMotion && y && M(window.innerWidth / 2, window.innerHeight / 2)
  }, [M, y]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(I.PaymentPortalBody, {
      children: [(0, i.jsx)(_.default, {}), C]
    }), null != T && (0, i.jsx)(I.PaymentPortalFooter, {
      children: T
    })]
  })
}