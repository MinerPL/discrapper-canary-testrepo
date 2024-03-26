"use strict";
a.r(t), a.d(t, {
  default: function() {
    return l
  }
});
var r = a("862205");
let s = (0, r.createExperiment)({
  kind: "user",
  id: "2024-03_collectibles_hide_descriptions",
  label: "Hide collectibles description experiment",
  defaultConfig: {
    productCardDescriptionHidden: !1,
    productDetailModalDescriptionHidden: !1
  },
  treatments: [{
    id: 1,
    label: "Enables hiding product card descriptions",
    config: {
      productCardDescriptionHidden: !0,
      productDetailModalDescriptionHidden: !1
    }
  }, {
    id: 2,
    label: "Enables hiding product card and detail modal descriptions",
    config: {
      productCardDescriptionHidden: !0,
      productDetailModalDescriptionHidden: !0
    }
  }]
});
var l = e => {
  let {
    location: t
  } = e;
  return s.useExperiment({
    location: t
  })
}