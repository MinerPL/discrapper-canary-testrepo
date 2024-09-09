n.d(t, {
    E2: function () {
        return a;
    },
    p3: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-08_reaction_frecency_algorithms',
    label: 'Reaction Frecency Algorithms',
    defaultConfig: {
        frecencyAlgorithm: 'original',
        canShowReactionsOnMessageHover: !1
    },
    treatments: [
        {
            id: 1,
            label: 'Stable algorithm with no hover bar',
            config: {
                frecencyAlgorithm: 'safe',
                canShowReactionsOnMessageHover: !1
            }
        },
        {
            id: 2,
            label: 'Volatile algorithm with no hover bar',
            config: {
                frecencyAlgorithm: 'day_recency',
                canShowReactionsOnMessageHover: !1
            }
        },
        {
            id: 3,
            label: 'Stable algorithm with hover bar',
            config: {
                frecencyAlgorithm: 'safe',
                canShowReactionsOnMessageHover: !0
            }
        },
        {
            id: 4,
            label: 'Volatile algorithm with hover bar',
            config: {
                frecencyAlgorithm: 'day_recency',
                canShowReactionsOnMessageHover: !0
            }
        }
    ]
});
function i(e) {
    let { location: t, autoTrackExposure: n } = e,
        { frecencyAlgorithm: i } = r.useExperiment({ location: t }, { autoTrackExposure: n });
    return 'original' !== i;
}
function a(e) {
    let { location: t, autoTrackExposure: n } = e,
        { frecencyAlgorithm: i } = r.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return 'original' !== i;
}
t.ZP = r;
