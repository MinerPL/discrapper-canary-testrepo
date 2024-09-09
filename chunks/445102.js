o.d(t, {
    Z: function () {
        return l;
    }
});
var n = o(131951),
    a = o(626135),
    s = o(981631);
function l(e, t, o, l, i) {
    let r = n.Z.getSettings(),
        u = n.Z.getInputDeviceId(),
        d = n.Z.getInputDevices()[u],
        c = n.Z.getOutputDeviceId(),
        _ = n.Z.getOutputDevices()[c],
        b = n.Z.getVideoDeviceId(),
        E = n.Z.getVideoDevices()[b],
        m = n.Z.getNoiseCancellation(),
        O = n.Z.getMediaEngine().getAudioSubsystem(),
        h = n.Z.getMediaEngine().getAudioLayer();
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
        input_device_name: null == d ? void 0 : d.name,
        output_device_name: null == _ ? void 0 : _.name,
        video_device_name: null == E ? void 0 : E.name,
        audio_subsystem: O,
        audio_layer: h,
        ...i
    });
}
