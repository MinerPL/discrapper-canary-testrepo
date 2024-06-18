"use strict";
n.d(t, {
  Xo: function() {
    return r
  },
  pB: function() {
    return s
  }
});
let i = (0, n(818083).B)({
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

function r(e) {
  let {
    location: t
  } = e;
  return i.useExperiment({
    location: t
  }, {
    autoTrackExposure: !0
  }).enabled
}

function s(e) {
  let {
    location: t
  } = e;
  return i.getCurrentConfig({
    location: t
  }).enabled
}