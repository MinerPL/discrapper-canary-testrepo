o.d(t, {
  Z: function() {
return l;
  }
});
var n = o(131951),
  a = o(626135),
  s = o(981631);

function l(e, t, o, l, i) {
  let r = n.Z.getSettings(),
c = n.Z.getInputDeviceId(),
u = n.Z.getInputDevices()[c],
d = n.Z.getOutputDeviceId(),
_ = n.Z.getOutputDevices()[d],
E = n.Z.getVideoDeviceId(),
b = n.Z.getVideoDevices()[E],
m = n.Z.getNoiseCancellation();
  a.default.track(s.rMx.CALL_REPORT_PROBLEM, {
rating: null != e ? e : 'no response',
reason_code: t,
reason_description: o,
feedback: l,
audio_input_mode: r.mode,
automatic_audio_input_sensitivity_enabled: r.modeOptions.autoThreshold,
audio_input_sensitivity: r.modeOptions.threshold,
echo_cancellation_enabled: r.echoCancellation,
noise_suppression_enabled: r.noiseSuppression,
automatic_gain_control_enabled: r.automaticGainControl,
voice_output_volume: r.outputVolume,
noise_cancellation_enabled: m,
input_device_name: null == u ? void 0 : u.name,
output_device_name: null == _ ? void 0 : _.name,
video_device_name: null == b ? void 0 : b.name,
...i
  });
}