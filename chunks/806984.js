"use strict";
r.r(t), r.d(t, {
  default: function() {
    return c
  }
});
var n = r("470079"),
  s = r("512722"),
  a = r.n(s),
  l = r("598"),
  u = r("390917"),
  i = r("464797");

function c(e) {
  let {
    handleClose: t
  } = e, {
    guildProductListing: r,
    guildId: s
  } = (0, i.useGuildProductPurchaseContext)(), {
    selectedSkuPricePreview: c
  } = (0, l.usePaymentContext)();
  return n.useEffect(() => {
    a()(null != c, "selectedSkuPricePreview cannot be null"), (0, u.openGuildProductPurchaseConfirmationModal)({
      guildId: s,
      guildProductListingId: r.id,
      skuPricePreview: c
    }), t()
  }, []), null
}