"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("862205"),
  s = n("819852");
let l = (0, a.createExperiment)({
  kind: "user",
  id: "2024-02_collectibles_shop_elements_marketing",
  label: "Collectibles Shop Marketing Experiment - Elements",
  defaultConfig: {
    marketingEnabled: !1,
    variant: s.CollectiblesMarketingVariant.NONE
  },
  treatments: [{
    id: 1,
    label: "Enables the plain variant of Elements marketing toolip",
    config: {
      marketingEnabled: !0,
      variant: s.CollectiblesMarketingVariant.TOOLTIP
    }
  }, {
    id: 2,
    label: "Enables the coachtip variant of Elements marketing toolip",
    config: {
      marketingEnabled: !0,
      variant: s.CollectiblesMarketingVariant.COACHTIP
    }
  }]
});
var i = e => {
  let {
    location: t
  } = e;
  return l.useExperiment({
    location: t
  })
}