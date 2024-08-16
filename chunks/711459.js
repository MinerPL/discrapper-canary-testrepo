t.d(n, {
    aQ: function () {
        return l;
    }
}),
    t(47120);
var i = t(742280),
    a = t(818083),
    r = t(474936);
n.ZP = (0, a.B)({
    kind: 'user',
    id: '2022-02_multi_month_plans',
    label: 'Multi Month Plans',
    defaultConfig: { newPlans: [] },
    treatments: [
        {
            id: 1,
            label: '3 and 6 Month Plans',
            config: {
                newPlans: [r.Xh.PREMIUM_6_MONTH_TIER_2, r.Xh.PREMIUM_3_MONTH_TIER_2]
            }
        },
        {
            id: 2,
            label: '3 Month Plan Only',
            config: { newPlans: [r.Xh.PREMIUM_3_MONTH_TIER_2] }
        }
    ]
});
let s = new Set([i.S.US, i.S.CA]);
function l(e) {
    return null == e || s.has(e.country);
}
