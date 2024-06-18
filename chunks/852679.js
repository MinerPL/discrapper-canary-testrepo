"use strict";
n.d(t, {
  Z: function() {
    return I
  }
}), n(47120);
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(668781),
  o = n(355467),
  a = n(821849),
  l = n(78839),
  u = n(626135),
  _ = n(74538),
  d = n(981631),
  c = n(689938);
let E = "guild-boost-purchase-modal";
async function I(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: I,
    analyticsSourceLocation: T,
    guildId: h,
    closeLayer: S,
    onCloseModal: f,
    totalNumberOfSlotsToAssign: N = 1,
    disablePremiumUpsell: A,
    onSubscriptionConfirmation: m,
    inPopout: O,
    applicationId: R
  } = e, C = O ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT, p = l.ZP.getPremiumTypeSubscription();
  if (null != p && p.isPurchasedExternally && null != p.paymentGateway) {
    null != S && S(), s.Z.show({
      title: c.Z.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
        paymentGatewayName: d.Vzj[p.paymentGateway]
      }),
      body: c.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_UPGRADE_TO_PREMIUM_EXTERNAL_ERROR.format({
        paymentGatewayName: d.Vzj[p.paymentGateway],
        subscriptionManagementLink: (0, _.JE)(p.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
      })
    });
    return
  }
  Promise.all([(0, o.tZ)(), (0, a.Y2)()]);
  await (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("77298"), n.e("23357"), n.e("29549"), n.e("15972"), n.e("12013"), n.e("43906"), n.e("8016"), n.e("22646"), n.e("5349"), n.e("80013")]).then(n.bind(n, 343649));
    return n => {
      let {
        transitionState: r,
        onClose: s
      } = n;
      return (0, i.jsx)(e, {
        transitionState: r,
        onClose: e => {
          s(), null == f || f(e)
        },
        analyticsLocations: t,
        analyticsLocation: I,
        analyticsSourceLocation: null != T ? T : I,
        guildId: h,
        totalNumberOfSlotsToAssign: N,
        closeGuildPerksModal: S,
        disablePremiumUpsell: A,
        onSubscriptionConfirmation: m,
        applicationId: R
      })
    }
  }, {
    modalKey: E,
    onCloseCallback: () => {
      u.default.track(d.rMx.MODAL_DISMISSED, {
        type: d.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
        location: I
      })
    },
    onCloseRequest: () => {
      (0, r.closeModal)(E), null == f || f(!1)
    },
    contextKey: C
  })
}