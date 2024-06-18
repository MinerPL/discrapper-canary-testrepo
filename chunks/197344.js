"use strict";
n(653041);
var i = n(442837),
  r = n(292556),
  s = n(695346),
  o = n(292959),
  a = n(626135),
  l = n(378364),
  u = n(981631),
  _ = n(689938);

function d() {
  return I() && l.Z.experiment.getCurrentConfig({
    location: "holiday_events_is_eligible"
  }, {
    autoTrackExposure: !1
  }).enabled
}

function c() {
  let {
    enabled: e
  } = l.Z.experiment.useExperiment({
    location: "holiday_events_use_eligible"
  }, {
    autoTrackExposure: !1
  });
  return I() && e
}

function E() {
  return null != l.Z.ringtone && null != l.Z.getRingtoneSettingsLabel
}

function I() {
  let e = Date.now();
  return e >= l.Z.startTimeMs && e <= l.Z.endTimeMs
}
t.Z = {
  subscribe: function(e) {
    return l.Z.experiment.subscribe({
      location: "holiday_events_subscribe"
    }, e)
  },
  isEligible: d,
  isRingtoneDisabled: function() {
    return null == l.Z.ringtone || o.Z.isSoundDisabled(l.Z.ringtone)
  },
  isRingtoneEligible: function() {
    return d() && E()
  },
  onRingtoneSettingValueChange: function(e) {
    let t = o.Z.getDisabledSounds();
    if (null == l.Z.ringtone) return;
    let n = t.filter(e => e !== l.Z.ringtone);
    !e && n.push(l.Z.ringtone), r.default.setDisabledSounds(n), a.default.track(u.rMx.EVENT_RINGTONE_TOGGLED, {
      toggled_on: e,
      sound_name: l.Z.ringtone
    })
  },
  useIsEligible: c,
  useIsRingtoneDisabled: function() {
    return (0, i.e7)([o.Z], () => null == l.Z.ringtone || o.Z.isSoundDisabled(l.Z.ringtone))
  },
  useIsRingtoneEligible: function() {
    return c() && E()
  },
  useRingtoneSettingDescription: function() {
    return s.D3.useSetting() ? void 0 : _.Z.Messages.ENABLE_PHONE_INTEGRATION
  },
  useRingtoneSettingValue: function() {
    let e = (0, i.e7)([o.Z], () => o.Z.getDisabledSounds()),
      t = s.D3.useSetting();
    return null != l.Z.ringtone && t && !e.includes(l.Z.ringtone)
  },
  getAppSpinnerSources: function() {
    return I() ? l.Z.appSpinnerSources : null
  },
  getLoadingTips: function() {
    var e;
    return I() ? null === (e = l.Z.getLoadingTips) || void 0 === e ? void 0 : e.call(l.Z) : null
  }
}