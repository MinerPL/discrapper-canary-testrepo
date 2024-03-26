"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var a = n("884691"),
  s = n("446674"),
  l = n("151426"),
  i = n("384997"),
  r = n("697218"),
  o = n("158998"),
  u = n("543557"),
  d = n("801894"),
  c = n("411691"),
  f = n("476863"),
  E = n("222408"),
  h = n("819852"),
  _ = n("994428");
let C = "useCollectiblesShopTabNewBadge";
var S = () => {
  let e = (0, s.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    t = (0, c.default)(C) === c.CollectiblesShopMarketingVariants.SHY,
    {
      coachtipEnabled: n
    } = (0, E.default)({
      location: C
    }),
    {
      coachtipEnabled: S
    } = (0, f.default)({
      location: C
    }),
    {
      marketingEnabled: I,
      variant: m
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
        else if (S) return [l.DismissibleContent.COLLECTIBLES_SHOP_ANIME_V2_COACHTIP];
        else if (I) switch (m) {
          case h.CollectiblesMarketingVariant.TOOLTIP:
            return [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_TOOLTIP];
          case h.CollectiblesMarketingVariant.COACHTIP:
            return [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_COACHTIP]
        } else if (p) return [l.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE]
      }
      return []
    }, [p, I, m, e, S, n, t]),
    [g, A] = (0, i.useSelectedDismissibleContent)(T, void 0, !0),
    N = null != g ? h.CollectiblesDCToDisplayOptions[g] : null;
  return {
    collectiblesShopTabNewBadgeDisplayOptions: N,
    dismissCollectiblesShopTabNewBadge: () => {
      null != N && A(_.ContentDismissActionType.AUTO)
    }
  }
}