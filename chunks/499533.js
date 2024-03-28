"use strict";
s.r(t), s("47120");
var a = s("392711"),
  n = s.n(a),
  l = s("492435"),
  i = s("828695"),
  r = s("987338");

function o(e) {
  for (let t of e) {
    let e = i.default.getEligibleExperiment(t);
    if (null != e) return [t, e]
  }
  return null
}
t.default = {
  getFirstEligibleUserExperiment: o,
  isInExperimentBucket: function(e, t) {
    return i.default.getExperimentBucket(e) === t
  },
  experimentDescriptorEquals: function(e, t) {
    if (null == e && null == t || e === t) return !0;
    if (null == e && null != t || null != e && null == t) return !1;
    if (null != e && null != t) {
      if (e.type !== t.type || e.bucket !== t.bucket || e.revision !== t.revision) return !1;
      if (e.type === r.ExperimentTypes.USER && t.type === r.ExperimentTypes.USER) return n().isEqual(e.context, t.context)
    }
    return !0
  },
  trackExposureToFirstEligibleUserExperiment: function(e) {
    let t = o(e);
    if (null != t) {
      let [e, s] = t;
      return (0, l.trackExposureToExperiment)(e, s), s
    }
  },
  getExperimentBucketName: function(e) {
    let t;
    return t = e === r.ExperimentBuckets.CONTROL ? "Control" : e === r.ExperimentBuckets.NOT_ELIGIBLE ? "Not Eligible" : "Treatment ".concat(e)
  }
}