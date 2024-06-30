s.d(n, {
    aQ: function () {
        return a;
    }
}), s(47120);
var l = s(742280), i = s(818083), t = s(474936);
n.ZP = (0, i.B)({
    kind: 'user',
    id: '2022-02_multi_month_plans',
    label: 'Multi Month Plans',
    defaultConfig: { newPlans: [] },
    treatments: [
        {
            id: 1,
            label: '3 and 6 Month Plans',
            config: {
                newPlans: [
                    t.Xh.PREMIUM_6_MONTH_TIER_2,
                    t.Xh.PREMIUM_3_MONTH_TIER_2
                ]
            }
        },
        {
            id: 2,
            label: '3 Month Plan Only',
            config: { newPlans: [t.Xh.PREMIUM_3_MONTH_TIER_2] }
        }
    ]
});
let r = new Set([
    l.S.US,
    l.S.CA
]);
function a(e) {
    return null == e || r.has(e.country);
}
