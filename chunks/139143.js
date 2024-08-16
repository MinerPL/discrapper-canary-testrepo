n.d(t, {
    $: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-02_activityiframemountfromgatewayupdate',
    label: 'mount activity iframe in response to gateway update',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'enabled',
            config: { enabled: !0 }
        }
    ]
});
function i(e) {
    return r.getCurrentConfig({ location: e }).enabled;
}
