n.d(t, {
    C: function () {
        return s;
    }
});
let a = (0, n(818083).B)({
    kind: 'user',
    id: '2023-10_forum_post_preview',
    label: 'Enable preview of Forum post content before creation',
    defaultConfig: { isEnabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enabled',
            config: { isEnabled: !0 }
        }
    ]
});
function s() {
    let { isEnabled: e } = a.useExperiment({ location: 'forum_post_1' }, { autoTrackExposure: !0 });
    return e;
}
