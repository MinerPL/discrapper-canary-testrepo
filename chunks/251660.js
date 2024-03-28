"use strict";
n.r(t), n.d(t, {
  SendGiftToUser: function() {
    return o
  }
});
var i = n("735250");
n("470079");
var s = n("481060"),
  a = n("700582"),
  l = n("51144"),
  r = n("689938"),
  u = n("800464");
let o = e => {
  let {
    giftRecipient: t
  } = e;
  return null == t ? null : (0, i.jsxs)("div", {
    className: u.content,
    children: [(0, i.jsx)(s.FormTitle, {
      children: r.default.Messages.FORM_LABEL_SEND_TO
    }), (0, i.jsxs)("div", {
      className: u.giftRecipientInfo,
      children: [(0, i.jsx)(a.default, {
        user: t,
        className: u.__invalid_giftRecipient,
        size: s.AvatarSizes.SIZE_20
      }), (0, i.jsx)(s.Heading, {
        className: u.giftRecipientName,
        variant: "text-md/normal",
        children: l.default.getName(t)
      }), (0, i.jsx)(s.Heading, {
        className: u.giftRecipientTag,
        variant: "text-md/normal",
        children: l.default.getUserTag(t)
      })]
    })]
  })
}