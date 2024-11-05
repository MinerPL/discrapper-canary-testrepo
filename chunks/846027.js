var r = n(570140),
    i = n(340332),
    a = n(672339),
    s = n(463395),
    o = n(592125),
    l = n(131951),
    u = n(944486),
    c = n(626135),
    d = n(557177),
    f = n(557457),
    _ = n(981631),
    h = n(65154);
function p() {
    (0, d.GN)('mention3');
}
function m(e, t, n, r) {
    let { location: i, analyticsLocations: a } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    if (t === n) return;
    let l = u.Z.getVoiceChannelId(),
        d = null != l ? o.Z.getChannel(l) : null,
        f = e[t],
        h = e[n];
    c.default.track(_.rMx.MEDIA_DEVICE_CHANGED, {
        device_from_name: s.Z.getCertifiedDeviceName(t, null != f ? f.name : ''),
        device_to_name: s.Z.getCertifiedDeviceName(n, null != h ? h.name : ''),
        device_type: r,
        device_is_certified: s.Z.isCertified(n),
        location: i,
        location_stack: a,
        voice_channel_type: null == d ? void 0 : d.type
    });
}
let g = {
        isNotSupported: () => !1,
        enable: (e) => Promise.resolve(!0),
        trackToggleSelfMute(e) {},
        trackToggleSelfDeaf(e) {}
    },
    { enable: E, isNotSupported: v, trackToggleSelfMute: I, trackToggleSelfDeaf: S } = (g = n(929782));
t.Z = {
    enable: E,
    toggleSelfMute() {
        let { context: e = h.Yn.DEFAULT, syncRemote: t = !0, usedKeybind: n = !1, playSoundEffect: i = !0, location: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return v()
            ? Promise.resolve()
            : (I({
                    usedKeybind: n,
                    location: a
                }),
                l.Z.isEnabled())
              ? r.Z.dispatch({
                    type: 'AUDIO_TOGGLE_SELF_MUTE',
                    context: e,
                    syncRemote: t,
                    skipMuteUnmuteSoundEffect: !i
                })
              : this.enable(!0);
    },
    setSelfMute(e, t) {
        !v() &&
            r.Z.dispatch({
                type: 'AUDIO_SET_SELF_MUTE',
                context: e,
                mute: t
            });
    },
    setTemporarySelfMute(e) {
        !v() &&
            r.Z.dispatch({
                type: 'AUDIO_SET_TEMPORARY_SELF_MUTE',
                mute: e
            });
    },
    toggleSelfDeaf() {
        let { context: e = h.Yn.DEFAULT, syncRemote: t = !0, usedKeybind: n = !1, location: i } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        !v() &&
            (S({
                usedKeybind: n,
                location: i
            }),
            r.Z.dispatch({
                type: 'AUDIO_TOGGLE_SELF_DEAF',
                context: e,
                syncRemote: t
            }));
    },
    toggleLocalMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.Yn.DEFAULT;
        !v() &&
            r.Z.dispatch({
                type: 'AUDIO_TOGGLE_LOCAL_MUTE',
                context: t,
                userId: e
            });
    },
    toggleLocalSoundboardMute(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.Yn.DEFAULT;
        r.Z.dispatch({
            type: 'AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE',
            context: t,
            userId: e
        });
    },
    setDisableLocalVideo(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.Yn.DEFAULT,
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        !v() &&
            r.Z.dispatch({
                type: 'AUDIO_SET_LOCAL_VIDEO_DISABLED',
                context: n,
                userId: e,
                videoToggleState: t,
                persist: i,
                isAutomatic: a
            });
    },
    setLocalVolume(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.Yn.DEFAULT;
        r.Z.dispatch({
            type: 'AUDIO_SET_LOCAL_VOLUME',
            context: n,
            userId: e,
            volume: (0, i.r)(t, n)
        });
    },
    setLocalPan(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h.Yn.DEFAULT;
        r.Z.dispatch({
            type: 'AUDIO_SET_LOCAL_PAN',
            context: i,
            userId: e,
            left: t,
            right: n
        });
    },
    setMode(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.Yn.DEFAULT,
            { analyticsLocations: i } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (v()) return;
        let a = e !== l.Z.getMode();
        if (
            (r.Z.dispatch({
                type: 'AUDIO_SET_MODE',
                context: n,
                mode: e,
                options: {
                    ...l.Z.getModeOptions(n),
                    ...t
                }
            }),
            a)
        ) {
            let t = u.Z.getVoiceChannelId(),
                n = null != t ? o.Z.getChannel(t) : null;
            c.default.track(_.rMx.VOICE_ACTIVATION_MODE_CHANGED, {
                mode: e,
                location_stack: i,
                voice_channel_type: null == n ? void 0 : n.type
            });
        }
    },
    setInputVolume(e) {
        let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (v()) return;
        r.Z.dispatch({
            type: 'AUDIO_SET_INPUT_VOLUME',
            volume: e
        });
        let n = u.Z.getVoiceChannelId(),
            i = null != n ? o.Z.getChannel(n) : null;
        c.default.track(_.rMx.MEDIA_INPUT_VOLUME_CHANGED, {
            volume: e,
            location_stack: t,
            voice_channel_type: null == i ? void 0 : i.type
        });
    },
    setOutputVolume(e) {
        let { analyticsLocations: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (v()) return;
        r.Z.dispatch({
            type: 'AUDIO_SET_OUTPUT_VOLUME',
            volume: e
        });
        let n = u.Z.getVoiceChannelId(),
            i = null != n ? o.Z.getChannel(n) : null;
        c.default.track(_.rMx.MEDIA_OUTPUT_VOLUME_CHANGED, {
            volume: e,
            location_stack: t,
            voice_channel_type: null == i ? void 0 : i.type
        });
    },
    setInputDevice(e) {
        let { location: t, analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!v()) {
            if (null != t || null != n) {
                let r = l.Z.getInputDevices();
                m(r, l.Z.getInputDeviceId(), e, 'Audio Input', {
                    location: t,
                    analyticsLocations: n
                });
            }
            r.Z.dispatch({
                type: 'AUDIO_SET_INPUT_DEVICE',
                id: e
            }),
                p();
        }
    },
    setOutputDevice(e) {
        let { location: t, analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!v()) {
            if (null != t || null != n) {
                let r = l.Z.getOutputDevices();
                m(r, l.Z.getOutputDeviceId(), e, 'Audio Output', {
                    location: t,
                    analyticsLocations: n
                });
            }
            r.Z.dispatch({
                type: 'AUDIO_SET_OUTPUT_DEVICE',
                id: e
            }),
                p();
        }
    },
    setVideoDevice(e) {
        let { location: t, analyticsLocations: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!v()) {
            if (null != t || null != n) {
                let r = l.Z.getVideoDevices();
                m(r, l.Z.getVideoDeviceId(), e, 'Video', {
                    location: t,
                    analyticsLocations: n
                });
            }
            r.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_VIDEO_DEVICE',
                id: e
            });
        }
    },
    setEchoCancellation(e, t) {
        !v() &&
            r.Z.dispatch({
                type: 'AUDIO_SET_ECHO_CANCELLATION',
                enabled: e,
                location: t
            });
    },
    setSidechainCompression(e) {
        !v() &&
            r.Z.dispatch({
                type: 'AUDIO_SET_SIDECHAIN_COMPRESSION',
                enabled: e
            });
    },
    setSidechainCompressionStrength(e) {
        !v() &&
            r.Z.dispatch({
                type: 'AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH',
                strength: e
            });
    },
    setLoopback(e) {
        !v() &&
            r.Z.dispatch({
                type: 'AUDIO_SET_LOOPBACK',
                enabled: e
            });
    },
    setNoiseSuppression(e, t) {
        !v() &&
            r.Z.dispatch({
                type: 'AUDIO_SET_NOISE_SUPPRESSION',
                enabled: e,
                location: t
            });
    },
    setNoiseCancellation(e, t) {
        !v() &&
            (r.Z.dispatch({
                type: 'AUDIO_SET_NOISE_CANCELLATION',
                enabled: e,
                location: t
            }),
            r.Z.dispatch({
                type: 'AUDIO_SET_NOISE_SUPPRESSION',
                enabled: !e,
                location: t
            }));
    },
    setAutomaticGainControl(e, t) {
        !v() &&
            r.Z.dispatch({
                type: 'AUDIO_SET_AUTOMATIC_GAIN_CONTROL',
                enabled: e,
                location: t
            });
    },
    setExperimentalEncoders(e) {
        !v() &&
            r.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS',
                enabled: e
            });
    },
    setHardwareEncoding(e) {
        !v() &&
            r.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_HARDWARE_ENCODING',
                enabled: e
            });
    },
    setAttenuation(e, t, n) {
        !v() &&
            r.Z.dispatch({
                type: 'AUDIO_SET_ATTENUATION',
                attenuation: e,
                attenuateWhileSpeakingSelf: t,
                attenuateWhileSpeakingOthers: n
            });
    },
    setQoS(e) {
        !v() &&
            r.Z.dispatch({
                type: 'AUDIO_SET_QOS',
                enabled: e
            });
    },
    reset() {
        !v() && r.Z.dispatch({ type: 'AUDIO_RESET' });
    },
    setSilenceWarning(e) {
        !v() &&
            r.Z.dispatch({
                type: 'AUDIO_SET_DISPLAY_SILENCE_WARNING',
                enabled: e
            });
    },
    setDebugLogging(e) {
        !v() &&
            r.Z.dispatch({
                type: 'AUDIO_SET_DEBUG_LOGGING',
                enabled: e
            });
    },
    setVideoHook(e) {
        !v() &&
            r.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_VIDEO_HOOK',
                enabled: e
            });
    },
    setExperimentalSoundshare(e) {
        !v() &&
            r.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE',
                enabled: e
            });
    },
    setUseSystemScreensharePicker(e) {
        !v() &&
            r.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER',
                enabled: e
            });
    },
    setAudioSubsystem(e) {
        !v() &&
            r.Z.dispatch({
                type: 'AUDIO_SET_SUBSYSTEM',
                subsystem: e
            });
    },
    setVideoEnabled(e) {
        (0, a.eH)(),
            r.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_VIDEO_ENABLED',
                enabled: e
            });
    },
    setGoLiveSource(e) {
        (null == e ? void 0 : e.qualityOptions) != null && (0, f.Ye)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate),
            r.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
                settings: e
            });
    },
    setOpenH264(e) {
        !v() &&
            r.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_OPEN_H264',
                enabled: e
            });
    },
    setAecDump(e) {
        !v() &&
            r.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_AEC_DUMP',
                enabled: e
            });
    },
    interact() {
        !v() &&
            r.Z.dispatch({
                type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                required: !1
            });
    },
    setEnableHardwareMuteNotice(e) {
        !v() &&
            r.Z.dispatch({
                type: 'MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE',
                enabled: e
            });
    }
};
