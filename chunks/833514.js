"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
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
  c = n("476863"),
  f = n("222408"),
  E = n("819852"),
  h = n("994428"),
  _ = () => {
    let e = (0, s.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
      {
        coachtipEnabled: t
      } = (0, f.default)({
        location: "useCollectiblesShopTabNewBadge"
      }),
      {
        coachtipEnabled: n
      } = (0, c.default)({
        location: "useCollectiblesShopTabNewBadge"
      }),
      {
        marketingEnabled: _,
        variant: C
      } = (0, u.default)({
        location: "useCollectiblesShopTabNewBadge"
      }),
      {
        newBadgeEnabled: S
      } = (0, d.default)({
        location: "useCollectiblesShopTabNewBadge"
      }),
      I = a.useMemo(() => {
        if ((0, o.ageEligibleForPremiumUpsell)(e)) {
          if (t) return [l.DismissibleContent.COLLECTIBLES_SHOP_SPRINGTOONS_COACHTIP];
          if (n) return [l.DismissibleContent.COLLECTIBLES_SHOP_ANIME_V2_COACHTIP];
          else if (_) switch (C) {
            case E.CollectiblesMarketingVariant.TOOLTIP:
              return [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_TOOLTIP];
            case E.CollectiblesMarketingVariant.COACHTIP:
              return [l.DismissibleContent.COLLECTIBLES_SHOP_ELEMENTS_COACHTIP]
          } else if (S) return [l.DismissibleContent.COLLECTIBLES_SHOP_LUNARNEWYEAR_NEW_BADGE]
        }
        return []
      }, [S, _, C, e, n, t]),
      [m, p] = (0, i.useSelectedDismissibleContent)(I, void 0, !0),
      T = null != m ? E.CollectiblesDCToDisplayOptions[m] : null;
    return {
      collectiblesShopTabNewBadgeDisplayOptions: T,
      dismissCollectiblesShopTabNewBadge: () => {
        null != T && p(h.ContentDismissActionType.AUTO)
      }
    }
  }