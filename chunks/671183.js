"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("884691"),
  u = n("627445"),
  a = n.n(u),
  i = n("642906"),
  l = n("134666"),
  s = n("273093");

function o(e) {
  let {
    handleClose: t
  } = e, {
    guildProductListing: n,
    guildId: u
  } = (0, s.useGuildProductPurchaseContext)(), {
    selectedSkuPricePreview: o
  } = (0, i.usePaymentContext)();
  return r.useEffect(() => {
    a(null != o, "selectedSkuPricePreview cannot be null"), (0, l.openGuildProductPurchaseConfirmationModal)({
      guildId: u,
      guildProductListingId: n.id,
      skuPricePreview: o
    }), t()
  }, []), null
}