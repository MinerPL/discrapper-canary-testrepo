"use strict";
n.r(t), n("47120");
var a = n("470079"),
  s = n("442837"),
  l = n("524437"),
  i = n("243778"),
  r = n("594174"),
  o = n("51144"),
  u = n("410154"),
  d = n("683167"),
  c = n("302800"),
  f = n("921944");
let E = "useCollectiblesShopTabNewBadge";
t.default = () => {
  let e = (0, s.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    t = (0, u.default)(E) === u.CollectiblesShopMarketingVariants.SHY,
    n = (0, d.useShopNewBadgeCoachtipEdition)(E),
    h = a.useMemo(() => {
      if ((0, o.ageEligibleForPremiumUpsell)(e)) {
        if (n === c.ShopCoachtipEditions.GALAXY) return [l.DismissibleContent.COLLECTIBLES_SHOP_GALAXY_COACHTIP];
        if (n === c.ShopCoachtipEditions.LOFI_VIBES) return [l.DismissibleContent.COLLECTIBLES_SHOP_LOFI_VIBES_COACHTIP];
        else if (t) return [l.DismissibleContent.COLLECTIBLES_SHOP_SHY_COACHTIP]
      }
      return []
    }, [e, n, t]),
    [_, C] = (0, i.useSelectedDismissibleContent)(h, void 0, !0),
    S = null != _ ? c.CollectiblesDCToDisplayOptions[_] : null;
  return {
    collectiblesShopTabNewBadgeDisplayOptions: S,
    dismissCollectiblesShopTabNewBadge: () => {
      null != S && C(f.ContentDismissActionType.AUTO)
    }
  }
}