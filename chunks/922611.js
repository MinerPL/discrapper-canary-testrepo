n.d(t, {
    Do: function () {
        return o;
    },
    JX: function () {
        return s;
    },
    S2: function () {
        return a;
    }
});
var r = n(818083),
    i = n(987338);
let a = (0, r.B)({
    kind: 'user',
    id: '2024-10_stealth_remediation',
    label: 'A new user remediation tool',
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Enable the new user remediation tool',
            config: { enabled: !0 }
        }
    ]
});
function s(e) {
    let { location: t } = e;
    return a.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}
function o(e) {
    let { location: t } = e;
    return a.getCurrentConfig({ location: t }, { autoTrackExposure: !1 }).enabled;
}
