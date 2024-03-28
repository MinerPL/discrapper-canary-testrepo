"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
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
  I = n("614277"),
  E = n("750143"),
  S = n("689938");

function P(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    subscriptionMetadataRequest: P,
    selectedSku: A,
    selectedStoreListing: C,
    application: N
  } = (0, c.usePaymentContext)(), T = (0, l.default)(E.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), m = (0, s.useStateFromStores)([d.default], () => d.default.getGuild(null == P ? void 0 : P.guild_id)), O = r.useCallback(() => t(f.Step.REVIEW), [t]);
  if (null == A) return null;
  let p = (0, i.isApplicationUserSubscription)(A.flags);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(I.PaymentPortalBody, {
      children: T ? (0, a.jsx)(o.BenefitsConfirmationLite, {
        confirmCta: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
        onConfirm: O,
        onCancel: n,
        title: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
          tier: A.name
        }),
        subtitle: p ? S.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
          guildName: null == m ? void 0 : m.name
        }),
        showOpenDiscord: !1
      }) : (0, a.jsx)(u.BenefitsConfirmation, {
        icon: null == C ? void 0 : C.thumbnail,
        storeListingBenefits: null == C ? void 0 : C.benefits,
        application: null != N ? N : void 0,
        title: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({
          tier: A.name
        }),
        subtitle: p ? S.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : S.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
        description: p ? S.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
          applicationName: null == N ? void 0 : N.name
        }) : S.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
      })
    }), !T && (0, a.jsx)(I.PaymentPortalFooter, {
      children: (0, a.jsx)(_.default, {
        onBack: n,
        backText: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
        onPrimary: O,
        primaryCTA: _.CTAType.CONTINUE,
        primaryText: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
      })
    })]
  })
}