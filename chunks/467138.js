n.d(t, {
    P: function () {
        return a;
    },
    e: function () {
        return i;
    }
});
let r = (0, n(818083).B)({
    kind: 'guild',
    id: '2021-11_member_verification_manual_approval',
    label: 'Member Verification Manual Approval',
    defaultConfig: { manualApprovalEnabled: !1 },
    treatments: [{
            id: 1,
            label: 'Enable manual approval for membership verification',
            config: { manualApprovalEnabled: !0 }
        }]
});
function i(e) {
    return r.trackExposure({
        guildId: e,
        location: 'bda51f_1'
    }), r.useExperiment({
        guildId: e,
        location: 'bda51f_2'
    }, { autoTrackExposure: !1 }).manualApprovalEnabled;
}
function a(e) {
    return r.getCurrentConfig({
        guildId: e,
        location: 'bda51f_3'
    }, { autoTrackExposure: !1 }).manualApprovalEnabled;
}
