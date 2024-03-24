"use strict";
n.r(t), n.d(t, {
  GiftNote: function() {
    return o
  }
});
var s = n("37983");
n("884691");
var r = n("812952"),
  a = n("978679"),
  i = n("659632"),
  l = n("635357"),
  u = n("782340"),
  c = n("771776");

function o(e) {
  let {
    giftMessage: t = u.default.Messages.PREMIUM_PAYMENT_IS_GIFT
  } = e, {
    isGift: n,
    giftRecipient: o
  } = (0, l.useGiftContext)();
  return !n || (0, i.shouldShowCustomGiftExperience)(o) ? null : (0, s.jsx)(r.default, {
    className: c.paymentNote,
    iconSize: r.default.Sizes.SMALL,
    icon: a.default,
    color: null == t ? r.default.Colors.PRIMARY : r.default.Colors.SECONDARY,
    children: t
  })
}