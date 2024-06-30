n.d(t, {
    l: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-05_iar_spam_reorder',
    label: 'IAR Spam Reorder',
    defaultConfig: { enabled: !1 },
    treatments: [{
            id: 1,
            label: 'Enabled',
            config: { enabled: !0 }
        }]
});
function i(e) {
    let {enabled: t} = r.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
    return t;
}
