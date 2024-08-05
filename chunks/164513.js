n.d(s, {
  Z: function() {
return x;
  }
});
var t = n(735250);
n(470079);
var i = n(481060),
  r = n(906732),
  l = n(522489),
  a = n(570711),
  o = n(285952),
  C = n(669079),
  d = n(987209),
  u = n(598),
  c = n(614277),
  _ = n(981631),
  p = n(689938);

function x(e) {
  let {
onClose: s
  } = e, {
selectedPlan: n
  } = (0, u.usePaymentContext)(), {
selectedGiftStyle: x,
giftRecipient: L
  } = (0, d.wD)(), {
analyticsLocations: h
  } = (0, r.ZP)(), f = !__BILLING_STANDALONE__ && (0, C.MY)(L, !1) === C.xr.CUSTOM_STYLE, {
enabled: I
  } = l.m.useExperiment({
location: 'GiftPurchaseConfirmationFooter'
  }, {
autoTrackExposure: f,
disable: !f
  });
  return I ? (0, t.jsx)(c.O3, {
children: (0, t.jsx)(i.ModalFooter, {
  align: o.Z.Align.CENTER,
  children: (0, t.jsx)(a.Z, {
    repeatPurchase: !0,
    initialPlanId: null == n ? void 0 : n.id,
    subscriptionTier: null == n ? void 0 : n.skuId,
    buttonText: p.Z.Messages.PREMIUM_GIFTING_REPEAT_GIFT,
    giftStyle: x,
    analyticsLocation: _.Sbl.REPEAT_GIFT_PURCHASE_BUTTON,
    analyticsLocationsOverride: h.slice(0, -1),
    onClick: () => {
      s();
    }
  })
})
  }) : null;
}