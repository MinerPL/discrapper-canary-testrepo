n.d(t, {
    mG: function () {
        return s;
    },
    y0: function () {
        return o;
    }
});
var r = n(818083);
let i = (0, r.B)({
        kind: 'user',
        id: '2024-01_inappropriate_conversation_warning',
        label: 'Inappropriate Conversation Warning',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable Inappropriate Conversation Warning',
                config: { enabled: !0 }
            }
        ]
    }),
    a = (0, r.B)({
        kind: 'user',
        id: '2024-01_inappropriate_conversation_warning_staff_bypass',
        label: 'Inappropriate Conversation Warning Staff Bypass',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enable Inappropriate Conversation Warning Staff Bypass',
                config: { enabled: !0 }
            }
        ]
    });
function s(e) {
    let { location: t, autoTrackExposure: n = !1 } = e,
        { enabled: r } = i.getCurrentConfig({ location: t }, { autoTrackExposure: n }),
        { enabled: s } = a.getCurrentConfig({ location: t }, { autoTrackExposure: n });
    return r || s;
}
function o(e) {
    let { location: t, autoTrackExposure: n = !1 } = e,
        { enabled: r } = i.useExperiment({ location: t }, { autoTrackExposure: n }),
        { enabled: s } = a.useExperiment({ location: t }, { autoTrackExposure: n });
    return r || s;
}
