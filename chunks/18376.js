"use strict";
n.r(t), n.d(t, {
  CheckoutV2ChildExperiments: function() {
    return s
  }
});
var i, s, a = n("818083");
(i = s || (s = {}))[i.NONE = 0] = "NONE", i[i.BROWSER_AUTOFILL = 1] = "BROWSER_AUTOFILL", i[i.MERGE_PLAN_SELECT_TO_REVIEW = 2] = "MERGE_PLAN_SELECT_TO_REVIEW";
let l = (0, a.createExperiment)({
  id: "2023-08_checkout_v2_parent",
  label: "Checkout V2 Parent",
  kind: "user",
  defaultConfig: {
    experiment: 0
  },
  treatments: [{
    id: 1,
    label: "Browser Autofill",
    config: {
      experiment: 1
    }
  }, {
    id: 2,
    label: "Merge Plan Select to Review",
    config: {
      experiment: 2
    }
  }]
});
t.default = l