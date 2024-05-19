"use strict";
n.r(t), n.d(t, {
  isEligibleForKeywordFiltering: function() {
    return l
  },
  useIsEligibleForKeywordFiltering: function() {
    return s
  }
});
let a = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-04_keyword_filter_experiment",
  label: "Replace registered keywords with asterisks",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enable Keyword Filter",
    config: {
      enabled: !0
    }
  }]
});

function s(e) {
  let {
    location: t
  } = e;
  return a.useExperiment({
    location: t
  }, {
    autoTrackExposure: !0
  }).enabled
}

function l(e) {
  let {
    location: t
  } = e;
  return a.getCurrentConfig({
    location: t
  }).enabled
}