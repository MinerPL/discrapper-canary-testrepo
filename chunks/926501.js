"use strict";
s.r(t), s.d(t, {
  useIsMarketingPageHeroHeaderV2Enabled: function() {
    return r
  }
});
let a = (0, s("818083").createExperiment)({
  kind: "user",
  id: "2024-05_marketing_page_hero_header_v2",
  label: "Marketing page hero header v2",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Variant 1",
    config: {
      enabled: !0
    }
  }]
});

function r(e) {
  let {
    location: t
  } = e, {
    enabled: s
  } = a.useExperiment({
    location: t
  });
  return s
}