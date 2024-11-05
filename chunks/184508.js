n.d(t, {
    VR: function () {
        return a;
    },
    tY: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-10_basic_tagline_experiment',
    label: 'Basic Tagline Experiment',
    defaultConfig: {
        enabled: !1,
        useEssentials: !1
    },
    treatments: [
        {
            id: 0,
            label: 'User see current tier cards',
            config: {
                enabled: !1,
                useEssentials: !1
            }
        },
        {
            id: 1,
            label: 'users see new tier card with the essentials tagline ',
            config: {
                enabled: !0,
                useEssentials: !0
            }
        },
        {
            id: 2,
            label: 'users see new tier card with the basics tagline ',
            config: {
                enabled: !0,
                useEssentials: !1
            }
        }
    ]
});
function i(e) {
    let { enabled: t } = r.useExperiment({ location: e }, { autoTrackExposure: !0 });
    return t;
}
let a = (e) => r.getCurrentConfig({ location: e }, { autoTrackExposure: !1 });
