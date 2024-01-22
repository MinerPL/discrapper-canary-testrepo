"use strict";
u.r(e), u.d(e, {
  useProductType: function() {
    return l
  },
  usePrice: function() {
    return o
  }
});
var n = u("884691"),
  r = u("153160"),
  i = u("782340");

function l(t) {
  return n.useMemo(() => {
    if (null == t) return;
    let e = null != t.role_id,
      u = t.attachments_count > 0;
    if (e && u) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE;
    if (e) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE;
    if (u) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE
  }, [t])
}

function o(t) {
  return n.useMemo(() => {
    if ((null == t ? void 0 : t.price) == null) return;
    let {
      amount: e,
      currency: u
    } = t.price;
    return (0, r.formatPrice)(e, u)
  }, [t])
}