"use strict";
n.r(t), n("47120");
var a = n("470079"),
  s = n("442837"),
  l = n("524437"),
  i = n("243778"),
  r = n("594174"),
  o = n("51144"),
  u = n("683167"),
  d = n("302800"),
  c = n("921944");
t.default = () => {
  let e = (0, s.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    t = (0, u.useShopNewBadgeCoachtipEdition)("useCollectiblesShopTabNewBadge"),
    n = a.useMemo(() => {
      if ((0, o.ageEligibleForPremiumUpsell)(e)) {
        if (t === d.ShopCoachtipEditions.RETRO_AND_PIRATES) return [l.DismissibleContent.COLLECTIBLES_SHOP_RETRO_AND_PIRATES_COACHTIP];
        if (t === d.ShopCoachtipEditions.GALAXY) return [l.DismissibleContent.COLLECTIBLES_SHOP_GALAXY_COACHTIP]
      }
      return []
    }, [e, t]),
    [f, E] = (0, i.useSelectedDismissibleContent)(n, void 0, !0),
    h = null != f ? d.CollectiblesDCToDisplayOptions[f] : null;
  return {
    collectiblesShopTabNewBadgeDisplayOptions: h,
    dismissCollectiblesShopTabNewBadge: () => {
      null != h && E(c.ContentDismissActionType.AUTO)
    }
  }
}