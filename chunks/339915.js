"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("702976");
var i = n("37983"),
  r = n("884691"),
  a = n("446674"),
  l = n("834897"),
  s = n("129408"),
  u = n("713536"),
  o = n("640820"),
  c = n("305961"),
  d = n("642906"),
  f = n("85336"),
  E = n("159149"),
  S = n("650484"),
  I = n("101703"),
  _ = n("782340");

function h(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    subscriptionMetadataRequest: h,
    selectedSku: m,
    selectedStoreListing: C,
    application: T
  } = (0, d.usePaymentContext)(), N = (0, l.default)(I.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), A = (0, a.useStateFromStores)([c.default], () => c.default.getGuild(null == h ? void 0 : h.guild_id)), p = r.useCallback(() => t(f.Step.REVIEW), [t]);
  if (null == m) return null;
  let P = (0, s.isApplicationUserSubscription)(m.flags);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(S.PaymentPortalBody, {
      children: N ? (0, i.jsx)(o.BenefitsConfirmationLite, {
        confirmCta: _.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
        onConfirm: p,
        onCancel: n,
        title: _.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
          tier: m.name
        }),
        subtitle: P ? _.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : _.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
          guildName: null == A ? void 0 : A.name
        }),
        showOpenDiscord: !1
      }) : (0, i.jsx)(u.BenefitsConfirmation, {
        icon: null == C ? void 0 : C.thumbnail,
        storeListingBenefits: null == C ? void 0 : C.benefits,
        application: null != T ? T : void 0,
        title: _.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({
          tier: m.name
        }),
        subtitle: P ? _.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : _.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
        description: P ? _.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
          applicationName: null == T ? void 0 : T.name
        }) : _.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
      })
    }), !N && (0, i.jsx)(S.PaymentPortalFooter, {
      children: (0, i.jsx)(E.default, {
        onBack: n,
        backText: _.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
        onPrimary: p,
        primaryCTA: E.CTAType.CONTINUE,
        primaryText: _.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
      })
    })]
  })
}