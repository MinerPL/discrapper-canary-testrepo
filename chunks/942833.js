"use strict";
r.r(e), r.d(e, {
  usePrice: function() {
    return o
  },
  useProductType: function() {
    return l
  }
});
var n = r("470079"),
  u = r("937615"),
  i = r("689938");

function l(t) {
  return n.useMemo(() => {
    if (null == t) return;
    let e = null != t.role_id,
      r = t.attachments_count > 0;
    if (e && r) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE_AND_ROLE;
    if (e) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_ROLE;
    if (r) return i.default.Messages.GUILD_PRODUCT_CARD_TYPE_DOWNLOADABLE
  }, [t])
}

function o(t) {
  return n.useMemo(() => {
    if ((null == t ? void 0 : t.price) == null) return;
    let {
      amount: e,
      currency: r
    } = t.price;
    return (0, u.formatPrice)(e, r)
  }, [t])
}