"use strict";
n.d(t, {
  W9: function() {
    return o
  },
  Xz: function() {
    return a
  },
  gK: function() {
    return l
  },
  rX: function() {
    return u
  }
});
var i = n(570140),
  r = n(353926),
  s = n(987338);

function o(e, t, n) {
  var i, s;
  r.Z.trackExposure({
    experimentId: e,
    descriptor: t,
    location: null == n ? void 0 : n.location,
    location_stack: null == n ? void 0 : n.analyticsLocations,
    fingerprint: null == n ? void 0 : n.fingerprint,
    excluded: null == n ? void 0 : n.excluded,
    exposureType: null == n ? void 0 : n.exposureType
  })
}

function a(e) {
  let {
    id: t,
    title: n,
    description: i,
    buckets: o,
    commonTriggerPoint: a
  } = e;
  return (0, r.V)({
    experimentId: t,
    experimentType: s.xY.USER,
    title: n,
    description: i,
    buckets: o,
    commonTriggerPoint: a
  }), {
    id: t
  }
}

function l(e) {
  let {
    id: t,
    title: n,
    description: i,
    buckets: o,
    commonTriggerPoint: a
  } = e;
  return (0, r.V)({
    experimentId: t,
    experimentType: s.xY.GUILD,
    title: n,
    description: i,
    buckets: o,
    commonTriggerPoint: a
  }), {
    id: t
  }
}

function u(e, t) {
  i.Z.dispatch({
    type: "EXPERIMENT_OVERRIDE_BUCKET",
    experimentId: e,
    experimentBucket: t
  })
}