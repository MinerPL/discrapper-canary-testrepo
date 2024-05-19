"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("789020");
var a = n("735250"),
  r = n("470079"),
  s = n("442837"),
  l = n("131388"),
  i = n("171246"),
  u = n("689011"),
  o = n("931905"),
  d = n("430824"),
  c = n("598"),
  f = n("409813"),
  _ = n("586585"),
  P = n("614277"),
  S = n("750143"),
  A = n("689938");

function E(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    subscriptionMetadataRequest: E,
    selectedSku: p,
    selectedStoreListing: C,
    application: I
  } = (0, c.usePaymentContext)(), m = (0, l.default)(S.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), T = (0, s.useStateFromStores)([d.default], () => d.default.getGuild(null == E ? void 0 : E.guild_id)), N = r.useCallback(() => t(f.Step.REVIEW), [t]);
  if (null == p) return null;
  let O = (0, i.isApplicationUserSubscription)(p.flags);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(P.PaymentPortalBody, {
      children: m ? (0, a.jsx)(o.BenefitsConfirmationLite, {
        confirmCta: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
        onConfirm: N,
        onCancel: n,
        title: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
          tier: p.name
        }),
        subtitle: O ? A.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
          guildName: null == T ? void 0 : T.name
        }),
        showOpenDiscord: !1
      }) : (0, a.jsx)(u.BenefitsConfirmation, {
        icon: null == C ? void 0 : C.thumbnail,
        storeListingBenefits: null == C ? void 0 : C.benefits,
        application: null != I ? I : void 0,
        title: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({
          tier: p.name
        }),
        subtitle: O ? A.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : A.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
        description: O ? A.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
          applicationName: null == I ? void 0 : I.name
        }) : A.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
      })
    }), !m && (0, a.jsx)(P.PaymentPortalFooter, {
      children: (0, a.jsx)(_.default, {
        onBack: n,
        backText: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
        onPrimary: N,
        primaryCTA: _.CTAType.CONTINUE,
        primaryText: A.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
      })
    })]
  })
}