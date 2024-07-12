s(47120);
var n = s(392711),
  a = s.n(n),
  i = s(492435),
  r = s(353926),
  o = s(987338);

function l(e) {
  for (let t of e) {
let e = r.Z.getUserExperimentDescriptor(t);
if (null != e)
  return [
    t,
    e
  ];
  }
  return null;
}
t.Z = {
  getFirstEligibleUserExperiment: l,
  isInExperimentBucket: function(e, t) {
return r.Z.getUserExperimentBucket(e) === t;
  },
  experimentDescriptorEquals: function(e, t) {
if (null == e && null == t || e === t)
  return !0;
if (null == e && null != t || null != e && null == t)
  return !1;
if (null != e && null != t) {
  if (e.type !== t.type || e.bucket !== t.bucket || e.revision !== t.revision)
    return !1;
  if (e.type === o.xY.USER && t.type === o.xY.USER)
    return a().isEqual(e.context, t.context);
}
return !0;
  },
  trackExposureToFirstEligibleUserExperiment: function(e) {
let t = l(e);
if (null != t) {
  let [e, s] = t;
  return (0, i.W9)(e, s), s;
}
  },
  getExperimentBucketName: function(e) {
let t;
return t = e === o.NZ.CONTROL ? 'Control' : e === o.NZ.NOT_ELIGIBLE ? 'Not Eligible' : 'Treatment '.concat(e);
  }
};