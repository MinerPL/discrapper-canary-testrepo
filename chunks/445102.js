"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var l = a("131951"),
  s = a("626135"),
  n = a("981631");

function o(e, t, a, o, u) {
  let i = l.default.getSettings(),
    d = l.default.getInputDeviceId(),
    r = l.default.getInputDevices()[d],
    c = l.default.getOutputDeviceId(),
    _ = l.default.getOutputDevices()[c],
    f = l.default.getVideoDeviceId(),
    E = l.default.getVideoDevices()[f],
    O = l.default.getNoiseCancellation();
  s.default.track(n.AnalyticEvents.CALL_REPORT_PROBLEM, {
    rating: null != e ? e : "no response",
    reason_code: t,
    reason_description: a,
    feedback: o,
    audio_input_mode: i.mode,
    automatic_audio_input_sensitivity_enabled: i.modeOptions.autoThreshold,
    audio_input_sensitivity: i.modeOptions.threshold,
    echo_cancellation_enabled: i.echoCancellation,
    noise_suppression_enabled: i.noiseSuppression,
    automatic_gain_control_enabled: i.automaticGainControl,
    voice_output_volume: i.outputVolume,
    noise_cancellation_enabled: O,
    input_device_name: null == r ? void 0 : r.name,
    output_device_name: null == _ ? void 0 : _.name,
    video_device_name: null == E ? void 0 : E.name,
    ...u
  })
}