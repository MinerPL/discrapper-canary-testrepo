"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var n = s("37983");
s("884691");
var l = s("446674"),
  a = s("77078"),
  i = s("87657"),
  r = s("635357"),
  u = s("27618"),
  o = s("697218"),
  d = s("158998"),
  c = s("21526"),
  S = s("782340"),
  f = e => {
    let {
      selectedSkuId: t,
      className: s
    } = e, f = (0, l.useStateFromStoresArray)([u.default], () => u.default.getFriendIDs()), E = (0, l.useStateFromStoresArray)([o.default], () => o.default.filter(e => f.includes(e.id) && !e.bot), [f]), {
      giftRecipient: I,
      setGiftRecipient: _,
      giftRecipientError: p,
      setGiftRecipientError: T,
      setValidatingGiftRecipient: C
    } = (0, r.useGiftContext)();
    if (null == t) return null;
    let m = async e => {
      C(!0), null != p && T(), _(e);
      let s = await (0, c.validateCollectiblesRecipient)(e.id, t);
      !s && T(S.default.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED), C(!1)
    };
    return (0, n.jsxs)("div", {
      className: s,
      children: [(0, n.jsx)(a.FormTitle, {
        children: S.default.Messages.FORM_LABEL_SEND_TO
      }), (0, n.jsx)(a.SearchableSelect, {
        placeholder: S.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, n.jsx)(i.default, {
          user: e.value,
          size: a.AvatarSizes.SIZE_20
        }),
        value: I,
        onChange: m,
        options: E.map(e => ({
          value: e,
          label: "".concat(d.default.getUserTag(e))
        }))
      })]
    })
  }