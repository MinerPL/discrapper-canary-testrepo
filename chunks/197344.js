var r = n(378364);
function i() {
    return s() && r.Z.experiment.getCurrentConfig({ location: 'holiday_events_is_eligible' }, { autoTrackExposure: !1 }).enabled;
}
function a() {
    let { enabled: e } = r.Z.experiment.useExperiment({ location: 'holiday_events_use_eligible' }, { autoTrackExposure: !1 });
    return s() && e;
}
function s() {
    let e = Date.now();
    return e >= r.Z.startTimeMs && e <= r.Z.endTimeMs;
}
t.Z = {
    subscribe: function (e) {
        return r.Z.experiment.subscribe({ location: 'holiday_events_subscribe' }, e);
    },
    isEligible: i,
    useHolidaySoundpack: function () {
        return a() && r.Z.soundpack ? r.Z.soundpack : null;
    },
    useIsEligible: a,
    getAppSpinnerSources: function () {
        return s() ? r.Z.appSpinnerSources : null;
    },
    getLoadingTips: function () {
        var e;
        return s() ? (null === (e = r.Z.getLoadingTips) || void 0 === e ? void 0 : e.call(r.Z)) : null;
    },
    getHolidaySoundpack: function () {
        return i() && r.Z.soundpack ? r.Z.soundpack : null;
    }
};
