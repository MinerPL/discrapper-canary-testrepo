t(47120);
var n = t(392711),
    a = t.n(n),
    i = t(492435),
    r = t(353926),
    o = t(987338);
function l(e) {
    for (let s of e) {
        let e = r.Z.getUserExperimentDescriptor(s);
        if (null != e) return [s, e];
    }
    return null;
}
s.Z = {
    getFirstEligibleUserExperiment: l,
    isInExperimentBucket: function (e, s) {
        return r.Z.getUserExperimentBucket(e) === s;
    },
    experimentDescriptorEquals: function (e, s) {
        if ((null == e && null == s) || e === s) return !0;
        if ((null == e && null != s) || (null != e && null == s)) return !1;
        if (null != e && null != s) {
            if (e.type !== s.type || e.bucket !== s.bucket || e.revision !== s.revision) return !1;
            if (e.type === o.xY.USER && s.type === o.xY.USER) return a().isEqual(e.context, s.context);
        }
        return !0;
    },
    trackExposureToFirstEligibleUserExperiment: function (e) {
        let s = l(e);
        if (null != s) {
            let [e, t] = s;
            return (0, i.W9)(e, t), t;
        }
    },
    getExperimentBucketName: function (e) {
        let s;
        return (s = e === o.NZ.CONTROL ? 'Control' : e === o.NZ.NOT_ELIGIBLE ? 'Not Eligible' : 'Treatment '.concat(e));
    }
};
