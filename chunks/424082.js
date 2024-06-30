n.d(t, {
    Uh: function () {
        return i;
    },
    lf: function () {
        return a;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-03_annual_discounts_experiment',
    label: 'Test price for standard annual plan utilizing discount framework',
    defaultConfig: {
        enabled: !1,
        discount_percentage: null
    },
    treatments: [
        {
            id: 0,
            label: 'users receive regular standard annual price (16% discount)',
            config: {
                enabled: !1,
                discount_percentage: 16
            }
        },
        {
            id: 1,
            label: 'users receive 20% discount (4% off regular standard annual price)',
            config: {
                enabled: !0,
                discount_percentage: 20
            }
        },
        {
            id: 2,
            label: 'users receive 25% discount (10% off regular standard annual price)',
            config: {
                enabled: !0,
                discount_percentage: 25
            }
        }
    ]
});
function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], {enabled: n} = r.useExperiment({ location: e }, { autoTrackExposure: t });
    return n;
}
function a(e) {
    let {
        enabled: t,
        discount_percentage: n
    } = r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
    return {
        annualDiscountsEnabled: t,
        annualDiscountPercentage: n
    };
}
