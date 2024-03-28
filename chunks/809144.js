"use strict";
n.r(t), n.d(t, {
  GiftNote: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var s = n("609194"),
  a = n("559629"),
  l = n("669079"),
  r = n("987209"),
  u = n("689938"),
  o = n("80308");

function c(e) {
  let {
    giftMessage: t = u.default.Messages.PREMIUM_PAYMENT_IS_GIFT
  } = e, {
    isGift: n,
    giftRecipient: c
  } = (0, r.useGiftContext)();
  return !n || (0, l.shouldShowCustomGiftExperience)(c) ? null : (0, i.jsx)(s.default, {
    className: o.paymentNote,
    iconSize: s.default.Sizes.SMALL,
    icon: a.default,
    color: null == t ? s.default.Colors.PRIMARY : s.default.Colors.SECONDARY,
    children: t
  })
}