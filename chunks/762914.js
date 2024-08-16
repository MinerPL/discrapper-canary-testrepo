n.d(t, {
    Ce: function () {
        return l;
    },
    Dd: function () {
        return s;
    },
    V1: function () {
        return o;
    }
});
var r = n(442837),
    i = n(592125),
    a = n(770471);
function s(e) {
    let { canViewBroadcasts: t } = a.Z.useExperiment({ location: 'use_is_broadcasting_gdm' }, { autoTrackExposure: !1 }),
        n = (0, r.e7)([i.Z], () => i.Z.getChannel(e));
    return !!t && !!(null == n ? void 0 : n.isBroadcastChannel());
}
function o(e) {
    let { canViewBroadcasts: t } = a.Z.getCurrentConfig({ location: 'get_is_broadcasting_gdm' }, { autoTrackExposure: !1 });
    if (!t) return !1;
    let n = i.Z.getChannel(e);
    return !!(null == n ? void 0 : n.isBroadcastChannel());
}
function l(e) {
    return e.filter((e) => !o(e));
}
