"use strict";
n.r(t), n("653041");
var s = n("442837"),
  a = n("292556"),
  l = n("695346"),
  i = n("292959"),
  r = n("626135"),
  o = n("378364"),
  u = n("981631"),
  c = n("689938");

function d() {
  return p() && o.default.experiment.getCurrentConfig({
    location: "holiday_events_is_eligible"
  }, {
    autoTrackExposure: !1
  }).enabled
}

function f() {
  let {
    enabled: e
  } = o.default.experiment.useExperiment({
    location: "holiday_events_use_eligible"
  }, {
    autoTrackExposure: !1
  });
  return p() && e
}

function m() {
  return null != o.default.ringtone && null != o.default.getRingtoneSettingsLabel
}

function p() {
  let e = Date.now();
  return e >= o.default.startTimeMs && e <= o.default.endTimeMs
}
t.default = {
  subscribe: function(e) {
    return o.default.experiment.subscribe({
      location: "holiday_events_subscribe"
    }, e)
  },
  isEligible: d,
  isRingtoneDisabled: function() {
    return null == o.default.ringtone || i.default.isSoundDisabled(o.default.ringtone)
  },
  isRingtoneEligible: function() {
    return d() && m()
  },
  onRingtoneSettingValueChange: function(e) {
    let t = i.default.getDisabledSounds();
    if (null == o.default.ringtone) return;
    let n = t.filter(e => e !== o.default.ringtone);
    !e && n.push(o.default.ringtone), a.default.setDisabledSounds(n), r.default.track(u.AnalyticEvents.EVENT_RINGTONE_TOGGLED, {
      toggled_on: e,
      sound_name: o.default.ringtone
    })
  },
  useIsEligible: f,
  useIsRingtoneDisabled: function() {
    return (0, s.useStateFromStores)([i.default], () => null == o.default.ringtone || i.default.isSoundDisabled(o.default.ringtone))
  },
  useIsRingtoneEligible: function() {
    return f() && m()
  },
  useRingtoneSettingDescription: function() {
    return l.NativePhoneIntegrationEnabled.useSetting() ? void 0 : c.default.Messages.ENABLE_PHONE_INTEGRATION
  },
  useRingtoneSettingValue: function() {
    let e = (0, s.useStateFromStores)([i.default], () => i.default.getDisabledSounds()),
      t = l.NativePhoneIntegrationEnabled.useSetting();
    return null != o.default.ringtone && t && !e.includes(o.default.ringtone)
  },
  getAppSpinnerSources: function() {
    return p() ? o.default.appSpinnerSources : null
  },
  getLoadingTips: function() {
    var e;
    return p() ? null === (e = o.default.getLoadingTips) || void 0 === e ? void 0 : e.call(o.default) : null
  }
}