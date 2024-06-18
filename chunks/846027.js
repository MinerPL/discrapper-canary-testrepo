"use strict";
var i = n(570140),
  r = n(340332),
  s = n(672339),
  o = n(463395),
  a = n(131951),
  l = n(626135),
  u = n(557177),
  _ = n(557457),
  d = n(981631),
  c = n(65154);

function E() {
  (0, u.GN)("mention3")
}

function I(e, t, n, i, r) {
  if (t === n) return;
  let s = e[t],
    a = e[n];
  l.default.track(d.rMx.MEDIA_DEVICE_CHANGED, {
    device_from_name: o.Z.getCertifiedDeviceName(t, null != s ? s.name : ""),
    device_to_name: o.Z.getCertifiedDeviceName(n, null != a ? a.name : ""),
    device_type: i,
    device_is_certified: o.Z.isCertified(n),
    location: r
  })
}
let T = {
    isNotSupported: () => !1,
    enable: e => Promise.resolve(!0),
    trackToggleSelfMute(e) {}
  },
  {
    enable: h,
    isNotSupported: S,
    trackToggleSelfMute: f
  } = T = n(929782);
t.Z = {
  enable: h,
  toggleSelfMute() {
    let {
      context: e = c.Yn.DEFAULT,
      syncRemote: t = !0,
      usedKeybind: n = !1,
      playSoundEffect: r = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return S() ? Promise.resolve() : (f({
      usedKeybind: n
    }), a.Z.isEnabled()) ? i.Z.dispatch({
      type: "AUDIO_TOGGLE_SELF_MUTE",
      context: e,
      syncRemote: t,
      skipMuteUnmuteSoundEffect: !r
    }) : this.enable(!0)
  },
  setSelfMute(e, t) {
    !S() && i.Z.dispatch({
      type: "AUDIO_SET_SELF_MUTE",
      context: e,
      mute: t
    })
  },
  setTemporarySelfMute(e) {
    !S() && i.Z.dispatch({
      type: "AUDIO_SET_TEMPORARY_SELF_MUTE",
      mute: e
    })
  },
  toggleSelfDeaf() {
    let {
      context: e = c.Yn.DEFAULT,
      syncRemote: t = !0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    !S() && i.Z.dispatch({
      type: "AUDIO_TOGGLE_SELF_DEAF",
      context: e,
      syncRemote: t
    })
  },
  toggleLocalMute(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT;
    !S() && i.Z.dispatch({
      type: "AUDIO_TOGGLE_LOCAL_MUTE",
      context: t,
      userId: e
    })
  },
  toggleLocalSoundboardMute(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT;
    i.Z.dispatch({
      type: "AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE",
      context: t,
      userId: e
    })
  },
  setDisableLocalVideo(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.Yn.DEFAULT,
      r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
      s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    !S() && i.Z.dispatch({
      type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
      context: n,
      userId: e,
      videoToggleState: t,
      persist: r,
      isAutomatic: s
    })
  },
  setLocalVolume(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.Yn.DEFAULT;
    i.Z.dispatch({
      type: "AUDIO_SET_LOCAL_VOLUME",
      context: n,
      userId: e,
      volume: (0, r.r)(t, n)
    })
  },
  setLocalPan(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c.Yn.DEFAULT;
    i.Z.dispatch({
      type: "AUDIO_SET_LOCAL_PAN",
      context: r,
      userId: e,
      left: t,
      right: n
    })
  },
  setMode(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.Yn.DEFAULT;
    !S() && i.Z.dispatch({
      type: "AUDIO_SET_MODE",
      context: n,
      mode: e,
      options: {
        ...a.Z.getModeOptions(n),
        ...t
      }
    })
  },
  setInputVolume(e) {
    !S() && i.Z.dispatch({
      type: "AUDIO_SET_INPUT_VOLUME",
      volume: e
    })
  },
  setOutputVolume(e) {
    !S() && i.Z.dispatch({
      type: "AUDIO_SET_OUTPUT_VOLUME",
      volume: e
    })
  },
  setInputDevice(e, t) {
    if (!S()) {
      if (null != t) {
        let n = a.Z.getInputDevices();
        I(n, a.Z.getInputDeviceId(), e, "Audio Input", t)
      }
      i.Z.dispatch({
        type: "AUDIO_SET_INPUT_DEVICE",
        id: e
      }), E()
    }
  },
  setOutputDevice(e, t) {
    if (!S()) {
      if (null != t) {
        let n = a.Z.getOutputDevices();
        I(n, a.Z.getOutputDeviceId(), e, "Audio Output", t)
      }
      i.Z.dispatch({
        type: "AUDIO_SET_OUTPUT_DEVICE",
        id: e
      }), E()
    }
  },
  setVideoDevice(e, t) {
    if (!S()) {
      if (null != t) {
        let n = a.Z.getVideoDevices();
        I(n, a.Z.getVideoDeviceId(), e, "Video", t)
      }
      i.Z.dispatch({
        type: "MEDIA_ENGINE_SET_VIDEO_DEVICE",
        id: e
      })
    }
  },
  setEchoCancellation(e, t) {
    !S() && i.Z.dispatch({
      type: "AUDIO_SET_ECHO_CANCELLATION",
      enabled: e,
      location: t
    })
  },
  setLoopback(e) {
    !S() && i.Z.dispatch({
      type: "AUDIO_SET_LOOPBACK",
      enabled: e
    })
  },
  setNoiseSuppression(e, t) {
    !S() && i.Z.dispatch({
      type: "AUDIO_SET_NOISE_SUPPRESSION",
      enabled: e,
      location: t
    })
  },
  setNoiseCancellation(e, t) {
    !S() && (i.Z.dispatch({
      type: "AUDIO_SET_NOISE_CANCELLATION",
      enabled: e,
      location: t
    }), i.Z.dispatch({
      type: "AUDIO_SET_NOISE_SUPPRESSION",
      enabled: !e,
      location: t
    }))
  },
  setAutomaticGainControl(e, t) {
    !S() && i.Z.dispatch({
      type: "AUDIO_SET_AUTOMATIC_GAIN_CONTROL",
      enabled: e,
      location: t
    })
  },
  setExperimentalEncoders(e) {
    !S() && i.Z.dispatch({
      type: "MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS",
      enabled: e
    })
  },
  setHardwareH264(e) {
    !S() && i.Z.dispatch({
      type: "MEDIA_ENGINE_SET_HARDWARE_H264",
      enabled: e
    })
  },
  setAttenuation(e, t, n) {
    !S() && i.Z.dispatch({
      type: "AUDIO_SET_ATTENUATION",
      attenuation: e,
      attenuateWhileSpeakingSelf: t,
      attenuateWhileSpeakingOthers: n
    })
  },
  setQoS(e) {
    !S() && i.Z.dispatch({
      type: "AUDIO_SET_QOS",
      enabled: e
    })
  },
  reset() {
    !S() && i.Z.dispatch({
      type: "AUDIO_RESET"
    })
  },
  setSilenceWarning(e) {
    !S() && i.Z.dispatch({
      type: "AUDIO_SET_DISPLAY_SILENCE_WARNING",
      enabled: e
    })
  },
  setDebugLogging(e) {
    !S() && i.Z.dispatch({
      type: "AUDIO_SET_DEBUG_LOGGING",
      enabled: e
    })
  },
  setVideoHook(e) {
    !S() && i.Z.dispatch({
      type: "MEDIA_ENGINE_SET_VIDEO_HOOK",
      enabled: e
    })
  },
  setExperimentalSoundshare(e) {
    !S() && i.Z.dispatch({
      type: "MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE",
      enabled: e
    })
  },
  setAudioSubsystem(e) {
    !S() && i.Z.dispatch({
      type: "AUDIO_SET_SUBSYSTEM",
      subsystem: e
    })
  },
  setVideoEnabled(e) {
    (0, s.eH)(), i.Z.dispatch({
      type: "MEDIA_ENGINE_SET_VIDEO_ENABLED",
      enabled: e
    })
  },
  setGoLiveSource(e) {
    (null == e ? void 0 : e.qualityOptions) != null && (0, _.Ye)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate), i.Z.dispatch({
      type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
      settings: e
    })
  },
  setOpenH264(e) {
    !S() && i.Z.dispatch({
      type: "MEDIA_ENGINE_SET_OPEN_H264",
      enabled: e
    })
  },
  setAecDump(e) {
    !S() && i.Z.dispatch({
      type: "MEDIA_ENGINE_SET_AEC_DUMP",
      enabled: e
    })
  },
  interact() {
    !S() && i.Z.dispatch({
      type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
      required: !1
    })
  }
}