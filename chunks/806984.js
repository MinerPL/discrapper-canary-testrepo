"use strict";
t.r(n), t.d(n, {
  default: function() {
    return l
  }
});
var a = t("470079"),
  r = t("512722"),
  s = t.n(r),
  o = t("598"),
  i = t("390917"),
  u = t("464797");

function l(e) {
  let {
    handleClose: n
  } = e, {
    guildProductListing: t,
    guildId: r
  } = (0, u.useGuildProductPurchaseContext)(), {
    selectedSkuPricePreview: l
  } = (0, o.usePaymentContext)();
  return a.useEffect(() => {
    s()(null != l, "selectedSkuPricePreview cannot be null"), (0, i.openGuildProductPurchaseConfirmationModal)({
      guildId: r,
      guildProductListingId: t.id,
      skuPricePreview: l
    }), n()
  }, []), null
}