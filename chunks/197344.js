n(653041);
var r = n(442837),
    i = n(292556),
    a = n(695346),
    s = n(292959),
    o = n(626135),
    l = n(378364),
    u = n(981631),
    c = n(689938);
function d() {
    return f() && l.Z.experiment.getCurrentConfig({ location: 'holiday_events_is_eligible' }, { autoTrackExposure: !1 }).enabled;
}
function _() {
    let { enabled: e } = l.Z.experiment.useExperiment({ location: 'holiday_events_use_eligible' }, { autoTrackExposure: !1 });
    return f() && e;
}
function E() {
    return null != l.Z.ringtone && null != l.Z.getRingtoneSettingsLabel;
}
function f() {
    let e = Date.now();
    return e >= l.Z.startTimeMs && e <= l.Z.endTimeMs;
}
t.Z = {
    subscribe: function (e) {
        return l.Z.experiment.subscribe({ location: 'holiday_events_subscribe' }, e);
    },
    isEligible: d,
    isRingtoneDisabled: function () {
        return null == l.Z.ringtone || s.Z.isSoundDisabled(l.Z.ringtone);
    },
    isRingtoneEligible: function () {
        return d() && E();
    },
    onRingtoneSettingValueChange: function (e) {
        let t = s.Z.getDisabledSounds();
        if (null == l.Z.ringtone) return;
        let n = t.filter((e) => e !== l.Z.ringtone);
        !e && n.push(l.Z.ringtone),
            i.default.setDisabledSounds(n),
            o.default.track(u.rMx.EVENT_RINGTONE_TOGGLED, {
                toggled_on: e,
                sound_name: l.Z.ringtone
            });
    },
    useIsEligible: _,
    useIsRingtoneDisabled: function () {
        return (0, r.e7)([s.Z], () => null == l.Z.ringtone || s.Z.isSoundDisabled(l.Z.ringtone));
    },
    useIsRingtoneEligible: function () {
        return _() && E();
    },
    useRingtoneSettingDescription: function () {
        return a.D3.useSetting() ? void 0 : c.Z.Messages.ENABLE_PHONE_INTEGRATION;
    },
    useRingtoneSettingValue: function () {
        let e = (0, r.e7)([s.Z], () => s.Z.getDisabledSounds()),
            t = a.D3.useSetting();
        return null != l.Z.ringtone && t && !e.includes(l.Z.ringtone);
    },
    getAppSpinnerSources: function () {
        return f() ? l.Z.appSpinnerSources : null;
    },
    getLoadingTips: function () {
        var e;
        return f() ? (null === (e = l.Z.getLoadingTips) || void 0 === e ? void 0 : e.call(l.Z)) : null;
    }
};
