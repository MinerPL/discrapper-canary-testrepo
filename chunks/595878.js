n.d(t, {
    c: function () {
        return i;
    },
    d: function () {
        return a;
    }
});
var r = n(290031);
function i(e) {
    let { location: t } = e,
        { enableNitroTenureRewardCard: n } = r.O.useExperiment({ location: t }, { autoTrackExposure: !1 });
    return n;
}
function a(e) {
    let { location: t } = e,
        { enableNitroTenureRewardCard: n } = r.O.getCurrentConfig({ location: t }, { autoTrackExposure: !1 });
    return n;
}
