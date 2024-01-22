"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("424973"), n("222007");
var a = n("884691"),
  s = n("446674"),
  i = n("151426"),
  l = n("384997"),
  r = n("697218"),
  o = n("158998"),
  u = n("351348"),
  d = n("994428"),
  c = () => {
    let e = (0, s.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
      {
        newBadgeEnabled: t
      } = (0, u.default)({
        location: "useCollectiblesShopTabNewBadge"
      }),
      n = a.useMemo(() => {
        let n = [];
        return t && (0, o.ageEligibleForPremiumUpsell)(e) && n.push(i.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_NEW_BADGE), n
      }, [t, e]),
      [c, f] = (0, l.useSelectedDismissibleContent)(n, void 0, !0);
    return {
      collectiblesShopTabNewBadge: c,
      dismissCollectiblesShopTabNewBadge: () => {
        c === i.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_NEW_BADGE && f(d.ContentDismissActionType.AUTO)
      }
    }
  }