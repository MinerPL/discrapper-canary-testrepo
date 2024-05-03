"use strict";
s.r(t), s.d(t, {
  TileOrderVariant: function() {
    return r
  },
  useGetMarketingPageNonSubPerkTileOrderExperiment: function() {
    return l
  }
});
var a, r, i = s("818083");
(a = r || (r = {}))[a.DEFAULT = 0] = "DEFAULT", a[a.VARIANT_1 = 1] = "VARIANT_1", a[a.VARIANT_2 = 2] = "VARIANT_2";
let n = (0, i.createExperiment)({
  kind: "user",
  id: "2024-04_marketing_page_non_sub_perk_tile_order",
  label: "Changes the order of the non-subscriber perk tiles",
  defaultConfig: {
    tileOrderVariant: 0
  },
  treatments: [{
    id: 0,
    label: "Default",
    config: {
      tileOrderVariant: 0
    }
  }, {
    id: 1,
    label: "Variant 1",
    config: {
      tileOrderVariant: 1
    }
  }, {
    id: 2,
    label: "Variant 2",
    config: {
      tileOrderVariant: 2
    }
  }]
});

function l(e) {
  let {
    location: t
  } = e, {
    tileOrderVariant: s
  } = n.useExperiment({
    location: t
  });
  return s
}