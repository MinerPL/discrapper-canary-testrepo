n.d(t, {
  Z: function() {
return f;
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  o = n(906732),
  a = n(522489),
  s = n(570711),
  l = n(285952),
  d = n(669079),
  c = n(987209),
  C = n(598),
  u = n(614277),
  _ = n(981631),
  p = n(689938);

function f(e) {
  let {
onClose: t
  } = e, {
selectedPlan: n
  } = (0, C.usePaymentContext)(), {
selectedGiftStyle: f,
giftRecipient: x
  } = (0, c.wD)(), {
analyticsLocations: h
  } = (0, o.ZP)(), b = !__BILLING_STANDALONE__ && (0, d.MY)(x, !1) === d.xr.CUSTOM_STYLE, {
enabled: g
  } = a.m.useExperiment({
location: 'GiftPurchaseConfirmationFooter'
  }, {
autoTrackExposure: b,
disable: !b
  });
  return g ? (0, i.jsx)(u.O3, {
children: (0, i.jsx)(r.ModalFooter, {
  align: l.Z.Align.CENTER,
  children: (0, i.jsx)(s.Z, {
    repeatPurchase: !0,
    initialPlanId: null == n ? void 0 : n.id,
    subscriptionTier: null == n ? void 0 : n.skuId,
    buttonText: p.Z.Messages.PREMIUM_GIFTING_REPEAT_GIFT,
    giftStyle: f,
    analyticsLocation: _.Sbl.REPEAT_GIFT_PURCHASE_BUTTON,
    analyticsLocationsOverride: h.slice(0, -1),
    onClick: () => {
      t();
    }
  })
})
  }) : null;
}