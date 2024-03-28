"use strict";
s.r(t);
var l = s("735250");
s("470079");
var n = s("442837"),
  a = s("481060"),
  i = s("700582"),
  r = s("987209"),
  u = s("699516"),
  d = s("594174"),
  o = s("51144"),
  c = s("335131"),
  f = s("689938");
t.default = e => {
  let {
    selectedSkuId: t,
    className: s
  } = e, S = (0, n.useStateFromStoresArray)([u.default], () => u.default.getFriendIDs()), E = (0, n.useStateFromStoresArray)([d.default], () => d.default.filter(e => S.includes(e.id) && !e.bot), [S]), {
    giftRecipient: I,
    setGiftRecipient: C,
    giftRecipientError: _,
    setGiftRecipientError: T,
    setValidatingGiftRecipient: p
  } = (0, r.useGiftContext)();
  if (null == t) return null;
  let m = async e => {
    p(!0), null != _ && T(), C(e), !await (0, c.validateCollectiblesRecipient)(e.id, t) && T(f.default.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED), p(!1)
  };
  return (0, l.jsxs)("div", {
    className: s,
    children: [(0, l.jsx)(a.FormTitle, {
      children: f.default.Messages.FORM_LABEL_SEND_TO
    }), (0, l.jsx)(a.SearchableSelect, {
      placeholder: f.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
      renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, l.jsx)(i.default, {
        user: e.value,
        size: a.AvatarSizes.SIZE_20
      }),
      value: I,
      onChange: m,
      options: E.map(e => ({
        value: e,
        label: "".concat(o.default.getUserTag(e))
      }))
    })]
  })
}