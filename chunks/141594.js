"use strict";
n.r(t), n("47120");
var a = n("470079"),
  s = n("442837"),
  l = n("524437"),
  i = n("243778"),
  r = n("594174"),
  o = n("51144"),
  u = n("190642"),
  d = n("680251"),
  c = n("410154"),
  f = n("727470"),
  E = n("888507"),
  h = n("302800"),
  _ = n("921944");
let C = "useCollectiblesShopTabNewBadge";
t.default = () => {
  let e = (0, s.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    t = (0, c.default)(C) === c.CollectiblesShopMarketingVariants.SHY,
    {
      coachtipEnabled: n
    } = (0, E.default)({
      location: C
    }),
    {
      coachtipEnabled: m
    } = (0, f.default)({
      location: C
    }),
    {
      marketingEnabled: S,
      variant: I
    } = (0, u.default)({
      location: C
    }),
    {
      newBadgeEnabled: p
    } = (0, d.default)({
      location: C
    }),
    T = a.useMemo(() => {
      if ((0, o.ageEligibleForPremiumUpsell)(e)) {
        if (t) return [l.DismissibleContent.COLLECTIBLES_SHOP_SHY_COACHTIP];
        if (n) return [l.DismissibleContent.COLLECTIBLES_SHOP_SPRINGTOONS_COACHTIP];
        else if (m) return [l.DismissibleContent.COLLECTIBLES_SHOP_ANIME_V2_COACHTIP];
        else if (S) switch (I) {
          case h.CollectiblesMarketingVariant.TOOLTIP:
            return [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_TOOLTIP];
          case h.CollectiblesMarketingVariant.COACHTIP:
            return [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_COACHTIP]
        } else if (p) return [l.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE]
      }
      return []
    }, [p, S, I, e, m, n, t]),
    [g, A] = (0, i.useSelectedDismissibleContent)(T, void 0, !0),
    N = null != g ? h.CollectiblesDCToDisplayOptions[g] : null;
  return {
    collectiblesShopTabNewBadgeDisplayOptions: N,
    dismissCollectiblesShopTabNewBadge: () => {
      null != N && A(_.ContentDismissActionType.AUTO)
    }
  }
}