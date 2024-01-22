"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var s = n("37983");
n("884691");
var r = n("77078"),
  i = n("446674"),
  l = n("87657"),
  a = n("635357"),
  u = n("27618"),
  o = n("697218"),
  d = n("158998"),
  c = n("21526"),
  f = n("782340"),
  p = e => {
    let {
      selectedSkuId: t,
      className: n
    } = e, p = (0, i.useStateFromStoresArray)([u.default], () => u.default.getFriendIDs()), E = (0, i.useStateFromStoresArray)([o.default], () => o.default.filter(e => p.includes(e.id) && !e.bot), [p]), {
      giftRecipient: S,
      setGiftRecipient: h,
      giftRecipientError: m,
      setGiftRecipientError: I,
      setValidatingGiftRecipient: _
    } = (0, a.useGiftContext)();
    if (null == t) return null;
    let C = async e => {
      _(!0), null != m && I(), h(e);
      let n = await (0, c.validateCollectiblesRecipient)(e.id, t);
      !n && I(f.default.Messages.COLLECTIBLES_GIFT_SEND_ERROR_OWNED), _(!1)
    };
    return (0, s.jsxs)("div", {
      className: n,
      children: [(0, s.jsx)(r.FormTitle, {
        children: f.default.Messages.FORM_LABEL_SEND_TO
      }), (0, s.jsx)(r.SearchableSelect, {
        placeholder: f.default.Messages.COLLECTIBLES_GIFT_RECIPIENT_PLACEHOLDER,
        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, s.jsx)(l.default, {
          user: e.value,
          size: r.AvatarSizes.SIZE_20
        }),
        value: S,
        onChange: C,
        options: E.map(e => ({
          value: e,
          label: "".concat(d.default.getUserTag(e))
        }))
      })]
    })
  }