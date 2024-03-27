"use strict";
n.r(t), n.d(t, {
  GiftNote: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var r = n("812952"),
  a = n("978679"),
  i = n("659632"),
  l = n("635357"),
  u = n("782340"),
  o = n("771776");

function c(e) {
  let {
    giftMessage: t = u.default.Messages.PREMIUM_PAYMENT_IS_GIFT
  } = e, {
    isGift: n,
    giftRecipient: c
  } = (0, l.useGiftContext)();
  return !n || (0, i.shouldShowCustomGiftExperience)(c) ? null : (0, s.jsx)(r.default, {
    className: o.paymentNote,
    iconSize: r.default.Sizes.SMALL,
    icon: a.default,
    color: null == t ? r.default.Colors.PRIMARY : r.default.Colors.SECONDARY,
    children: t
  })
}