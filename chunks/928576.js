"use strict";
r.r(e), r.d(e, {
  useProductType: function() {
    return l
  },
  usePrice: function() {
    return o
  }
});
var u = r("884691"),
  n = r("153160"),
  i = r("782340");

function l(t) {
  return u.useMemo(() => {
    if (null == t) return;
    let e = null != t.role_id,
      r = t.attachments_count > 0;
    if (e && r) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE;
    if (e) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE;
    if (r) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE
  }, [t])
}

function o(t) {
  return u.useMemo(() => {
    if ((null == t ? void 0 : t.price) == null) return;
    let {
      amount: e,
      currency: r
    } = t.price;
    return (0, n.formatPrice)(e, r)
  }, [t])
}