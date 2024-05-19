"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("47120");
var i = n("735250");
n("470079");
var r = n("481060"),
  a = n("668781"),
  s = n("355467"),
  o = n("821849"),
  l = n("78839"),
  u = n("626135"),
  d = n("74538"),
  _ = n("981631"),
  c = n("689938");
let E = "guild-boost-purchase-modal";
async function I(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: I,
    analyticsSourceLocation: T,
    guildId: f,
    closeLayer: S,
    onCloseModal: h,
    totalNumberOfSlotsToAssign: A = 1,
    disablePremiumUpsell: m,
    onSubscriptionConfirmation: N,
    inPopout: p,
    applicationId: O
  } = e, C = p ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT, R = l.default.getPremiumTypeSubscription();
  if (null != R && R.isPurchasedExternally && null != R.paymentGateway) {
    null != S && S(), a.default.show({
      title: c.default.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
        paymentGatewayName: _.PaymentGatewayToFriendlyName[R.paymentGateway]
      }),
      body: c.default.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_UPGRADE_TO_PREMIUM_EXTERNAL_ERROR.format({
        paymentGatewayName: _.PaymentGatewayToFriendlyName[R.paymentGateway],
        subscriptionManagementLink: (0, d.getExternalSubscriptionMethodUrl)(R.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
      })
    });
    return
  }
  Promise.all([(0, s.fetchPaymentSources)(), (0, o.fetchPremiumSubscriptionPlans)()]);
  await (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("40326"), n.e("23357"), n.e("29549"), n.e("15972"), n.e("440"), n.e("63438"), n.e("62511"), n.e("58600"), n.e("8016"), n.e("22646"), n.e("54999"), n.e("58447")]).then(n.bind(n, "343649"));
    return n => {
      let {
        transitionState: r,
        onClose: a
      } = n;
      return (0, i.jsx)(e, {
        transitionState: r,
        onClose: e => {
          a(), null == h || h(e)
        },
        analyticsLocations: t,
        analyticsLocation: I,
        analyticsSourceLocation: null != T ? T : I,
        guildId: f,
        totalNumberOfSlotsToAssign: A,
        closeGuildPerksModal: S,
        disablePremiumUpsell: m,
        onSubscriptionConfirmation: N,
        applicationId: O
      })
    }
  }, {
    modalKey: E,
    onCloseCallback: () => {
      u.default.track(_.AnalyticEvents.MODAL_DISMISSED, {
        type: _.AnalyticsSections.PREMIUM_GUILD_PURCHASE_MODAL,
        location: I
      })
    },
    onCloseRequest: () => {
      (0, r.closeModal)(E), null == h || h(!1)
    },
    contextKey: C
  })
}