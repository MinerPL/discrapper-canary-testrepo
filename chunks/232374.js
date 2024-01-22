"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("424973"), n("222007");
var a = n("151426"),
  s = n("77078"),
  i = n("446674"),
  l = n("384997"),
  r = n("778588"),
  o = n("697218"),
  u = n("197881"),
  d = n("158998"),
  c = n("351348"),
  f = n("994428"),
  E = () => {
    let e = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
      t = (0, i.useStateFromStores)([r.default], () => r.default.hasLayers()),
      n = (0, s.useModalsStore)(s.hasAnyModalOpenSelector),
      E = n || t || u.ProcessArgs.isDisallowPopupsSet(),
      {
        coachmarkEnabled: _
      } = (0, c.default)({
        location: "useCollectiblesShopTabCoachmarkDismissibleContent"
      }),
      h = [];
    _ && (0, d.ageEligibleForPremiumUpsell)(e) && h.push(a.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_COACHMARK);
    let [C, I] = (0, l.useSelectedDismissibleContent)(E ? [] : h, void 0, !0);
    return {
      collectiblesShopTabCoachmark: C,
      dismissCollectiblesShopTabCoachmark: () => {
        C === a.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_COACHMARK && I(f.ContentDismissActionType.AUTO)
      }
    }
  }