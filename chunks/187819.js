n.d(t, {
    _p: function () {
        return o;
    },
    hP: function () {
        return a;
    },
    sp: function () {
        return s;
    }
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2024-08_safety_settings_update',
    label: 'Safety Settings Update',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enable Safety Settings Update',
            config: { enabled: !0 }
        }
    ],
    commonTriggerPoint: i.$P.OPEN_USER_SETTINGS
});
function s(e) {
    let { location: t } = e,
        { enabled: n } = a.getCurrentConfig({ location: t });
    return n;
}
function o(e) {
    let { location: t } = e,
        { enabled: n } = a.useExperiment({ location: t });
    return n;
}
