s.d(t, {
    g: function () {
        return c;
    }
}), s(411104), s(47120);
var n = s(512722), a = s.n(n), i = s(509545), r = s(74538), o = s(474936), l = s(981631);
function c(e, t) {
    let s = i.Z.get(e.planId);
    a()(null != s, 'missing premium subscription plan');
    let n = i.Z.getForSkuAndInterval((0, r.Wz)(o.Si.GUILD), s.interval, s.intervalCount);
    a()(null != n, 'missing premium guild plan');
    let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans, d = (e.status === l.O0b.CANCELED ? 0 : (0, r.uV)(c)) + t, _ = c.filter(e => e.planId !== n.id);
    if (d < 0)
        throw Error('Invalid adjustment');
    return 0 === d ? _ : [
        ..._,
        {
            planId: n.id,
            quantity: d
        }
    ];
}
