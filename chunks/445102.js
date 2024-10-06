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
        c = n.Z.getInputDevices()[u],
        d = n.Z.getOutputDeviceId(),
        _ = n.Z.getOutputDevices()[d],
        b = n.Z.getVideoDeviceId(),
        m = n.Z.getVideoDevices()[b],
        E = n.Z.getNoiseCancellation(),
        h = n.Z.getMediaEngine().getAudioSubsystem(),
        O = n.Z.getMediaEngine().getAudioLayer();
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
        noise_cancellation_enabled: E,
        input_device_name: null == c ? void 0 : c.name,
        output_device_name: null == _ ? void 0 : _.name,
        video_device_name: null == m ? void 0 : m.name,
        audio_subsystem: h,
        audio_layer: O,
        automatic_audio_subsystem: r.automaticAudioSubsystem,
        ...i
    });
}
