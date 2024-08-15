n.d(t, {
  Z: function() {
return f;
  }
}), n(47120);
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(668781),
  s = n(355467),
  o = n(821849),
  l = n(78839),
  u = n(626135),
  c = n(74538),
  d = n(981631),
  _ = n(689938);
let E = 'guild-boost-purchase-modal';
async function f(e) {
  let {
analyticsLocations: t,
analyticsLocation: f,
analyticsSourceLocation: h,
guildId: p,
closeLayer: m,
onCloseModal: I,
totalNumberOfSlotsToAssign: T = 1,
disablePremiumUpsell: g,
onSubscriptionConfirmation: S,
inPopout: A,
applicationId: N
  } = e, v = A ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT, O = l.ZP.getPremiumTypeSubscription();
  if (null != O && O.isPurchasedExternally && null != O.paymentGateway) {
null != m && m(), a.Z.show({
  title: _.Z.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({
    paymentGatewayName: d.Vzj[O.paymentGateway]
  }),
  body: _.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_BUTTON_UPGRADE_TO_PREMIUM_EXTERNAL_ERROR.format({
    paymentGatewayName: d.Vzj[O.paymentGateway],
    subscriptionManagementLink: (0, c.JE)(O.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
  })
});
return;
  }
  Promise.all([
(0, s.tZ)(),
(0, o.Y2)()
  ]);
  await (0, i.openModalLazy)(async () => {
let {
  default: e
} = await Promise.all([
  n.e('96427'),
  n.e('77298'),
  n.e('23357'),
  n.e('52249'),
  n.e('29549'),
  n.e('54803'),
  n.e('15685'),
  n.e('8016'),
  n.e('30671'),
  n.e('22646'),
  n.e('19901')
]).then(n.bind(n, 343649));
return n => {
  let {
    transitionState: i,
    onClose: a
  } = n;
  return (0, r.jsx)(e, {
    transitionState: i,
    onClose: e => {
      a(), null == I || I(e);
    },
    analyticsLocations: t,
    analyticsLocation: f,
    analyticsSourceLocation: null != h ? h : f,
    guildId: p,
    totalNumberOfSlotsToAssign: T,
    closeGuildPerksModal: m,
    disablePremiumUpsell: g,
    onSubscriptionConfirmation: S,
    applicationId: N
  });
};
  }, {
modalKey: E,
onCloseCallback: () => {
  u.default.track(d.rMx.MODAL_DISMISSED, {
    type: d.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
    location: f
  });
},
onCloseRequest: () => {
  (0, i.closeModal)(E), null == I || I(!1);
},
contextKey: v
  });
}