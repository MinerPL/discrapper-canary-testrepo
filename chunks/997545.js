"use strict";
n.d(t, {
  Z: function() {
    return L
  }
}), n(312677), n(47120), n(411104), n(653041);
var i = n(595182),
  r = n.n(i),
  s = n(117806),
  o = n.n(s),
  a = n(565925),
  l = n.n(a),
  u = n(971793),
  _ = n.n(u),
  d = n(420994),
  c = n(259443),
  E = n(839548),
  I = n(198274),
  T = n(701597),
  h = n(46973),
  S = n(829839),
  f = n(916057),
  N = n(992774),
  A = n(158466),
  m = n(650886),
  O = n(65154),
  R = n(149396);

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = 0;

function g(e) {
  return null != e && 0 !== e ? e + 1 : 0
}
class L extends E.Z {
  static create(e, t, n) {
    let i = new L(e, t, !0);
    return i.initialize(n), i
  }
  static createReplay(e, t) {
    let n = new L(e, "0", !0),
      i = (0, N.zS)();
    n.initializeStreamParameters([{
      type: O.Tr.VIDEO,
      rid: "100",
      ssrc: 0,
      rtxSsrc: 0,
      quality: 100,
      active: !1
    }]);
    let r = i.createReplayConnection("default", (t, r) => {
      let s = null != i.getCodecCapabilities ? i.getCodecCapabilities : i.getSupportedVideoCodecs;
      n.on(h.Sh.Stats, n.handleStats), n.conn.setOnVideoCallback(n.handleVideo), s(t => {
        let i = (0, S.DY)(n.experimentFlags);
        n.codecs = [{
          type: "audio",
          name: R.ad.OPUS,
          priority: 1,
          payloadType: 120
        }, ...(0, S.yQ)(t, i).map((e, t) => {
          let n = 101 + 2 * t;
          return {
            type: "video",
            name: e.name,
            priority: t + 1,
            payloadType: n,
            rtxPayloadType: n + 1,
            encode: e.encode,
            decode: e.decode
          }
        })], n.setCodecs(R.ad.OPUS, R.ad.H264, e), n.conn.startReplay()
      })
    }, t);
    return null == r ? null : (n.conn = r, n)
  }
  initialize(e) {
    let t;
    this.logger.info("Creating connection to ".concat(e.address, ":").concat(e.port, " with audio ssrc: ").concat(e.ssrc)), this.audioSSRC = e.ssrc, this.streamUserId = e.streamUserId, this.initializeStreamParameters(e.streamParameters), e.streamParameters = [{
      type: O.Tr.AUDIO,
      ssrc: this.audioSSRC,
      rid: "",
      maxBitrate: 64e3,
      soundshare: this.context === R.Yn.STREAM
    }, ...this.videoStreamParameters];
    let n = (0, N.zS)(),
      i = null != n.getCodecCapabilities ? n.getCodecCapabilities : n.getSupportedVideoCodecs;
    if (null != n.createOwnStreamConnectionWithOptions) o = this.context === R.Yn.STREAM && this.streamUserId === this.userId ? n.createOwnStreamConnectionWithOptions : n.createVoiceConnectionWithOptions;
    else if (null != n.createOwnStreamConnection) {
      var r, s, o, a = this.context === R.Yn.STREAM && this.streamUserId === this.userId ? n.createOwnStreamConnection : n.createVoiceConnection;
      o = (e, t, n) => a(t.ssrc, this.userId, t.address, t.port, n, t.experiments, t.streamParameters)
    } else o = (e, t, i) => new n.VoiceConnection(t.ssrc, e, t.address, t.port, i, t.experiments, t.streamParameters);
    null === (r = (t = this.conn = o(this.userId, e, (r, s) => {
      if (this.destroyed) return;
      if (null != r && "" !== r) {
        this.setConnectionState(R.$j.NO_ROUTE), this.emit(h.Sh.Error, r);
        return
      }
      if (null == s) throw Error("Invalid transport info");
      let {
        protocol: o,
        address: a,
        port: l
      } = s;
      this.logger.info("Connected with local address ".concat(a, ":").concat(l, " and protocol: ").concat(o)), i(i => {
        let r = (0, S.DY)(this.experimentFlags);
        this.codecs = [{
          type: "audio",
          name: R.ad.OPUS,
          priority: 1,
          payloadType: 120
        }, ...(0, S.yQ)(i, r).map((e, t) => {
          let n = 101 + 2 * t;
          return {
            type: "video",
            name: e.name,
            priority: t + 1,
            payloadType: n,
            rtxPayloadType: n + 1,
            encode: e.encode,
            decode: e.decode
          }
        })], this.logger.info("Audio codecs: ".concat(this.codecs.filter(e => "audio" === e.type).map(e => e.name))), this.logger.info("Video codecs: ".concat(this.codecs.filter(e => "video" === e.type).map(e => e.name + "[encode: " + e.encode + ", decode: " + e.decode + "]"))), t.getEncryptionModes(i => {
          var r, s, u, _, d, c, E, I, T, S, f, N;
          this.logger.info("Encryption modes: ".concat(i)), t.setTransportOptions(this.getConnectionTransportOptions()), t.setSelfMute(this.selfMute || this.context === R.Yn.STREAM), t.setSelfDeafen(this.selfDeaf), t.setOnSpeakingCallback(this.handleSpeakingNative), null === (r = t.setOnNativeMuteToggleCallback) || void 0 === r || r.call(t, this.handleNativeMuteToggled), null === (s = t.setOnNativeMuteChangedCallback) || void 0 === s || s.call(t, this.handleNativeMuteChanged), null === (u = t.setOnSpeakingWhileMutedCallback) || void 0 === u || u.call(t, this.handleSpeakingWhileMuted), null === (_ = t.setPingInterval) || void 0 === _ || _.call(t, R.$B), t.setPingCallback(this.handlePing), null === (d = t.setPingTimeoutCallback) || void 0 === d || d.call(t, this.handlePingTimeout), null === (c = t.setOnVideoEncoderFallbackCallback) || void 0 === c || c.call(t, this.handleVideoEncoderFallback), n.setTransportOptions({
            builtInEchoCancellation: !0,
            echoCancellation: this.echoCancellation,
            noiseSuppression: this.noiseSuppression,
            automaticGainControl: this.automaticGainControl,
            noiseCancellation: this.noiseCancellation
          }), n.setNoInputThreshold(-100), n.setNoInputCallback(this.handleNoInput), this.videoSupported && (t.setOnVideoCallback(this.handleVideo), null === (I = t.setOnFirstFrameCallback) || void 0 === I || I.call(t, this.handleFirstFrame), null === (T = t.setOnDesktopSourceEnded) || void 0 === T || T.call(t, this.handleDesktopSourceEnded), null === (S = t.setOnSoundshare) || void 0 === S || S.call(t, this.handleSoundshare), null === (f = t.setOnSoundshareEnded) || void 0 === f || f.call(t, this.handleSoundshareEnded), null === (N = t.setOnSoundshareFailed) || void 0 === N || N.call(t, this.handleSoundshareFailed)), null === (E = t.setOnMLSFailureCallback) || void 0 === E || E.call(t, this.handleMLSFailure), this.setConnectionState(R.$j.CONNECTED), this.emit(h.Sh.Connected, o, {
            address: a,
            port: l,
            mode: this.chooseEncryptionMode(e.modes, i),
            codecs: this.codecs
          }), this.on(h.Sh.Stats, this.handleStats);
          let A = this.getUserOptions();
          for (let e of (A.forEach(e => {
              var t, n;
              return this.logger.info("Creating user: ".concat(e.id, " with audio SSRC: ").concat(e.ssrc, " and video SSRCs: ").concat(null !== (n = null === (t = e.videoSsrcs) || void 0 === t ? void 0 : t.join(",")) && void 0 !== n ? n : 0))
            }), t.mergeUsers(A), this.emit(h.Sh.RemoteStreamsReady, A.length), Object.keys(this.localSpeakingFlags))) e !== this.userId && this.setSpeakingFlags(e, this.localSpeakingFlags[e])
        })
      })
    })).setSecureFramesStateUpdateCallback) || void 0 === r || r.call(t, e => {
      this.logger.info("Secure frames state update: ".concat(JSON.stringify(e))), this.emit(h.Sh.SecureFramesUpdate, e)
    }), null === (s = t.setDesktopSourceStatusCallback) || void 0 === s || s.call(t, e => {
      if ("videohook_start" === e.type) this.emit(h.Sh.VideoHookStart);
      else if ("videohook_stop" === e.type) this.emit(h.Sh.VideoHookStop);
      else if ("videohook_initialize" === e.type) this.emit(h.Sh.VideoHookInitialize, e.backend, e.format, e.framebufferFormat, e.sampleCount, e.success, e.reinitialization);
      else if ("screenshare_finish" === e.type) {
        var t;
        this.emit(h.Sh.ScreenshareFinish, e.screenshareFrames, e.videohookFrames, e.hybridDxgiFrames, e.hybridGdiFrames, e.hybridVideohookFrames, e.hybridGraphicsCaptureFrames, e.hybridCaptureMethodSwitches, e.quartzFrames, null !== (t = e.desktopCapturerType) && void 0 !== t ? t : e.desktop_capturer_type, e.screens, e.windows, e.activity, e.goLiveCameraFrames, e.screenCaptureKitFrames)
      } else "video_state" === e.type ? this.emit(h.Sh.VideoState, e.state) : e.type.startsWith("soundshare_") && this.emit(h.Sh.SoundshareTrace, e)
    }), this.on("newListener", this.handleNewListenerNative)
  }
  destroy() {
    this.conn.destroy(), Object.keys(this.localSpeakingFlags).filter(e => e !== this.userId).forEach(e => this.emit(h.Sh.Speaking, e, R.Dg.NONE, this.remoteAudioSSRCs[e])), this.setConnectionState(R.$j.DISCONNECTED), super.destroy()
  }
  setCodecs(e, t, n) {
    this.conn.setTransportOptions(this.getCodecOptions(e, t, n)), this.videoEncoderFallbackPending && (this.videoEncoderFallbackPending = !1)
  }
  getStats() {
    return this.connectionState === R.$j.DISCONNECTED ? Promise.resolve(null) : (0, d.timeout)(new Promise(e => {
      null != this.conn.getFilteredStats ? this.conn.getFilteredStats(O.QP.ALL, t => e((0, A.Z)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants))) : null != this.conn.getStats ? this.conn.getStats(t => e((0, A.Z)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants))) : (0, N.zS)().getStats(t => e((0, A.Z)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants)))
    }), I.T).catch(e => {
      if (!(e instanceof d.TimeoutError)) throw e
    })
  }
  createUser(e, t, n) {
    if (0 === t) {
      this.logger.warn("Attempting to create user ".concat(e, " with 0 audio SSRC"));
      return
    }
    let i = this.remoteAudioSSRCs[e],
      r = this.remoteVideoSSRCs[e];
    r = void 0 !== r ? [...r].sort() : [], n = void 0 === n ? null != r ? r : [] : [...n].sort();
    let s = i !== t,
      o = !l()(r, n);
    if (this.remoteAudioSSRCs[e] = t, this.remoteVideoSSRCs[e] = null != n ? n : [], this.userId !== e && (s || o)) {
      let i = void 0 !== n && n.length > 0 ? n[0] : 0,
        r = {
          id: e,
          ssrc: t,
          videoSsrc: i,
          videoSsrcs: n,
          rtxSsrc: g(i),
          mute: this.getLocalMute(e),
          volume: this.getLocalVolume(e)
        };
      if (this.connectionState === R.$j.CONNECTED) {
        var a;
        this.logger.info("Creating user: ".concat(e, " with audio SSRC: ").concat(t, " and video SSRCs: ").concat(null !== (a = null == n ? void 0 : n.join(",")) && void 0 !== a ? a : 0)), this.conn.mergeUsers([r])
      }
      let s = this.localPans[e];
      null != s && this.setLocalPan(e, s.left, s.right);
      let o = this.localSpeakingFlags[e];
      null != o && o !== R.Dg.NONE && this.setSpeakingFlags(e, o)
    }
  }
  destroyUser(e) {
    null != this.remoteAudioSSRCs[e] && (this.conn.destroyUser(e), delete this.remoteAudioSSRCs[e], delete this.remoteVideoSSRCs[e])
  }
  setSelfMute(e) {
    this.selfMute = e, this.conn.setSelfMute(e), this.emit(h.Sh.Mute, e)
  }
  setSelfDeaf(e) {
    this.selfDeaf = e, this.conn.setSelfDeafen(e)
  }
  setSoundshareSource(e, t) {
    if (this.soundshareId === e && this.soundshareSentSpeakingEvent || this.context !== R.Yn.STREAM) return;
    this.soundshareId = e, this.soundshareSentSpeakingEvent = !1;
    let n = e;
    null === n && (n = 0), this.conn.setTransportOptions({
      soundsharePid: n,
      soundshareEventDriven: !0,
      soundshareLoopback: t
    })
  }
  setLocalMute(e, t) {
    this.localMutes[e] = t, this.conn.setLocalMute(e, t), this.emit(h.Sh.LocalMute, e, t)
  }
  fastUdpReconnect() {
    null != this.conn.fastUdpReconnect && (this.numFastUdpReconnects += 1, this.conn.fastUdpReconnect())
  }
  getNumFastUdpReconnects() {
    return null != this.conn.fastUdpReconnect ? this.numFastUdpReconnects : null
  }
  wasRemoteDisconnected() {
    var e, t;
    null === (e = (t = this.conn).wasRemoteDisconnected) || void 0 === e || e.call(t)
  }
  setLocalVideoDisabled(e, t) {
    this.disabledLocalVideos[e] = t, this.emit(h.Sh.LocalVideoDisabled, e, t)
  }
  setMinimumJitterBufferLevel(e) {
    this.minimumJitterBufferLevel = e
  }
  setPostponeDecodeLevel(e) {
    this.postponeDecodeLevel = e
  }
  setClipRecordUser(e, t, n) {
    !this.destroyed && this.conn.setClipRecordUser(e, (this.context === R.Yn.STREAM ? "application" : "user").concat("audio" === t ? "Audio" : "Video"), n)
  }
  setClipsKeyFrameInterval(e) {
    this.context === R.Yn.STREAM && (this.clipsKeyFrameInterval = e, this.conn.setTransportOptions({
      keyframeInterval: this.getKeyFrameInterval(),
      alwaysSendVideo: this.keyframeInterval > 0
    }))
  }
  setViewerSideClip(e) {
    this.context === R.Yn.STREAM && this.conn.setTransportOptions({
      enableViewerSideClip: e
    })
  }
  setRemoteAudioHistory(e) {
    this.conn.setTransportOptions({
      remoteAudioHistoryMs: e
    })
  }
  setQualityDecoupling(e) {
    this.context === R.Yn.STREAM && this.conn.setTransportOptions({
      enableQualityDecoupling: e
    })
  }
  getLocalVolume(e) {
    var t;
    let n = this.localVolumes[e];
    return null == n && (n = this.context === R.Yn.DEFAULT ? R.Qx : R.Yh), (null != (t = n) ? t : R.Qx) / R.Qx
  }
  setLocalVolume(e, t) {
    this.localVolumes[e] = t;
    try {
      this.conn.setLocalVolume(e, this.getLocalVolume(e))
    } catch {
      this.logger.warn("Failed to set volume for user: ".concat(e, ": ").concat(t))
    }
  }
  setLocalPan(e, t, n) {
    this.localPans[e] = {
      left: t,
      right: n
    }, this.conn.setLocalPan(e, t, n)
  }
  isAttenuating() {
    return this.attenuationFactor < 1
  }
  setAttenuation(e, t, n) {
    this.attenuationFactor = (100 - e) / 100, this.attenuateWhileSpeakingSelf = t, this.attenuateWhileSpeakingOthers = n, this.conn.setTransportOptions(this.getAttenuationOptions())
  }
  setCanHavePriority(e, t) {
    var n, i;
    null === (n = (i = this.conn).setRemoteUserCanHavePriority) || void 0 === n || n.call(i, e, t)
  }
  setBitRate(e) {
    this.setVoiceBitRate(e)
  }
  setVoiceBitRate(e) {
    if (this.voiceBitrate === e) return;
    this.voiceBitrate = e;
    let t = this.voiceBitrate;
    this.soundshareActive && (t = Math.max(R.ed, t)), this.conn.setTransportOptions({
      encodingVoiceBitRate: t
    })
  }
  setCameraBitRate(e, t, n) {
    null != n || null != t ? this.videoQualityManager.setQualityOverwrite({
      bitrateMin: null != n && n > 0 ? n : t,
      bitrateMax: t
    }) : this.videoQualityManager.setQualityOverwrite({}), !this.hasDesktopSource() && this.conn.setTransportOptions({
      encodingVideoBitRate: e,
      encodingVideoMinBitRate: n,
      encodingVideoMaxBitRate: t
    })
  }
  setEchoCancellation(e) {
    this.echoCancellation = e, (0, N.zS)().setTransportOptions({
      echoCancellation: this.echoCancellation
    })
  }
  setNoiseSuppression(e) {
    this.noiseSuppression = e, (0, N.zS)().setTransportOptions({
      noiseSuppression: this.noiseSuppression
    })
  }
  setAutomaticGainControl(e) {
    this.automaticGainControl = e, (0, N.zS)().setTransportOptions({
      automaticGainControl: this.automaticGainControl
    })
  }
  setNoiseCancellation(e) {
    this.noiseCancellation = e, (0, N.zS)().setTransportOptions({
      noiseCancellation: this.noiseCancellation
    })
  }
  setExperimentalEncoders(e) {
    this.experimentalEncoders = e, this.conn.setTransportOptions({
      experimentalEncoders: this.experimentalEncoders
    })
  }
  setHardwareH264(e) {
    this.hardwareH264 = e, this.conn.setTransportOptions({
      hardwareH264: this.hardwareH264
    })
  }
  setQoS(e) {
    this.qos = e, this.conn.setTransportOptions({
      qos: this.qos
    })
  }
  setInputMode(e, t) {
    switch (this.inputMode = e, e) {
      case R.pM.PUSH_TO_TALK:
        this.pttReleaseDelay = t.pttReleaseDelay;
        break;
      case R.pM.VOICE_ACTIVITY:
        this.vadThreshold = t.vadThreshold, this.vadAutoThreshold = t.vadAutoThreshold, this.vadUseKrisp = t.vadUseKrisp, this.vadLeading = t.vadLeading, this.vadTrailing = t.vadTrailing;
        break;
      default:
        throw Error("Unknown Input Mode: ".concat(e))
    }
    this.conn.setTransportOptions({
      inputMode: R.GO[this.inputMode],
      inputModeOptions: this.createInputModeOptions()
    })
  }
  setSilenceThreshold(e) {
    (0, N.zS)().setNoInputThreshold(e)
  }
  setForceAudioInput(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    t ? this.forceAudioPriority = e : this.forceAudioNormal = e, this.conn.setPTTActive(this.forceAudioPriority || this.forceAudioNormal, this.forceAudioPriority)
  }
  setSpeakingFlags(e, t) {
    null != this.conn.setRemoteUserSpeakingStatus ? this.conn.setRemoteUserSpeakingStatus(e, t) : null != this.conn.setRemoteUserSpeaking && this.conn.setRemoteUserSpeaking(e, (t & R.Dg.VOICE) === R.Dg.VOICE), this.handleSpeakingFlags(e, t)
  }
  clearAllSpeaking() {}
  setEncryption(e, t) {
    this.logger.info("Selected encryption mode: ".concat(e)), this.conn.setTransportOptions({
      encryptionSettings: {
        mode: e,
        secretKey: t
      }
    })
  }
  setReconnectInterval(e) {
    this.reconnectInterval = e, this.conn.setTransportOptions({
      reconnectInterval: this.reconnectInterval
    })
  }
  setKeyframeInterval(e) {
    this.keyframeInterval = e, this.conn.setTransportOptions({
      keyframeInterval: this.getKeyFrameInterval(),
      alwaysSendVideo: this.keyframeInterval > 0
    })
  }
  setVideoQualityMeasurement(e) {
    this.videoQualityMeasurement = e, this.conn.setTransportOptions({
      videoQualityMeasurement: this.videoQualityMeasurement
    })
  }
  setVideoEncoderExperiments(e) {
    this.videoEncoderExperiments = e, this.conn.setTransportOptions({
      videoEncoderExperiments: this.videoEncoderExperiments
    })
  }
  setVideoBroadcast(e) {
    if (this.selfVideo !== e) this.selfVideo = e, this.applyVideoTransportOptions()
  }
  setGoLiveSource(e) {
    let {
      resolution: t,
      frameRate: n
    } = e.quality, i = t <= 480 ? t / 3 * 4 : t / 9 * 16, r = null;
    if (null != e.desktopDescription ? r = e.desktopDescription.id : null != e.cameraDescription && (r = "".concat(e.cameraDescription.videoDeviceGuid, ":").concat(e.cameraDescription.audioDeviceGuid)), this.goLiveSourceIdentifier === r) {
      this.onDesktopEncodingOptionsSet(i, t, n), this.setDesktopEncodingOptions(i, t, n);
      return
    }
    if (this.videoQualityManager.setGoliveSimulcast(this.experimentFlags.has(O.V8.GOLIVE_SIMULCAST)), this.goLiveSourceIdentifier = r, null != this.conn.setDesktopSource) {
      if (null != e.desktopDescription) {
        let {
          id: t,
          soundshareId: n,
          useLoopback: i,
          useVideoHook: r,
          useGraphicsCapture: s,
          useQuartzCapturer: o,
          allowScreenCaptureKit: a,
          videoHookStaleFrameTimeoutMs: l,
          graphicsCaptureStaleFrameTimeoutMs: u,
          hdrCaptureMode: _
        } = e.desktopDescription;
        this.setSoundshareSource(n, i);
        let [d, c] = null != t ? t.split(":") : ["", ""];
        null != t ? this.logger.info("capturing desktop (type: ".concat(d, ", handle: ").concat(c, ", use-video-hook: ").concat(r.toString(), ", use-graphics-capture: ").concat(null == s ? void 0 : s.toString(), ").")) : this.logger.info("capturing desktop (type: <stop>)."), null != this.conn.setDesktopSourceWithOptions ? null != t ? this.conn.setDesktopSourceWithOptions({
          type: d,
          sourceId: c,
          useVideoHook: r,
          useGraphicsCapture: s,
          useQuartzCapturer: o,
          allowScreenCaptureKit: a,
          videoHookStaleFrameTimeoutMs: l,
          graphicsCaptureStaleFrameTimeoutMs: u,
          hdrCaptureMode: _
        }) : this.conn.clearDesktopSource() : this.conn.setDesktopSource("wumpus-".concat(c), r, d)
      } else if (null != e.cameraDescription) {
        let {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        } = e.cameraDescription;
        this.conn.setGoLiveDevices({
          videoInputDeviceId: t,
          audioInputDeviceId: n
        })
      }
      this.onDesktopEncodingOptionsSet(i, t, n), this.setDesktopEncodingOptions(i, t, n)
    }
  }
  clearGoLiveDevices() {
    null != this.goLiveSourceIdentifier && this.setDesktopEncodingOptions(1280, 720, 30), null != this.conn.clearGoLiveDevices && this.conn.clearGoLiveDevices()
  }
  clearDesktopSource() {
    null != this.goLiveSourceIdentifier && this.setDesktopEncodingOptions(1280, 720, 30), this.goLiveSourceIdentifier = null, null != this.conn.clearDesktopSource ? this.conn.clearDesktopSource() : this.conn.setDesktopSource("", !1, "")
  }
  setDesktopSourceStatusCallback(e) {
    var t, n;
    null === (t = (n = this.conn).setDesktopSourceStatusCallback) || void 0 === t || t.call(n, e)
  }
  hasDesktopSource() {
    return null != this.goLiveSourceIdentifier
  }
  setDesktopEncodingOptions(e, t, n) {
    if (this.destroyed) return;
    let i = 0 === t && n >= 10 || t > 720 || n > 30 ? O.yf : O.YE,
      r = {
        width: e,
        height: t,
        framerate: n
      },
      s = this.videoQualityManager.getQuality();
    if (!T.SF.equals(r, s.capture) || s.bitrateMax !== i) {
      this.videoQualityManager.setGoliveQuality({
        capture: r,
        encode: r,
        bitrateMax: i
      });
      let s = this.videoStreamParameters.findIndex(e => 100 === e.quality); - 1 === s && (s = 0), this.videoStreamParameters.length > 0 && (this.videoStreamParameters[s].maxResolution = {
        type: 0 === e && 0 === t ? R.uA.SOURCE : R.uA.FIXED,
        width: e,
        height: t
      }, this.videoStreamParameters[s].maxFrameRate = n, this.videoStreamParameters[s].maxBitrate = i), this.emit(h.Sh.Video, this.userId, null, this.audioSSRC, this.videoStreamParameters[s].ssrc, g(this.videoStreamParameters[s].ssrc), this.videoStreamParameters), this.conn.setTransportOptions(this.applyQualityConstraints().constraints)
    }
  }
  setOnDesktopEncodingOptionsSet(e) {
    this.onDesktopEncodingOptionsSet = e
  }
  setCallExperience(e) {
    null != this.conn.setCallExperience && this.conn.setCallExperience(e)
  }
  setSDP(e) {}
  setRemoteVideoSinkWants(e) {
    this.remoteVideoSinkWants = e, this.updateVideoQuality(O.XR)
  }
  setLocalVideoSinkWants(e) {
    let t = this.localVideoSinkWants;
    for (let [o, a] of Object.entries(this.remoteVideoSSRCs)) {
      var n, i, r, s;
      let l = 0,
        u = 0;
      for (let n of a) l += null == t ? void 0 : t[n], u += null == e ? void 0 : e[n];
      0 === l && 0 !== u && (null === (n = (i = this.conn).setDisableLocalVideo) || void 0 === n || n.call(i, o, !1)), 0 !== l && 0 === u && (null === (r = (s = this.conn).setDisableLocalVideo) || void 0 === r || r.call(s, o, !0))
    }
    this.localVideoSinkWants = e
  }
  startSamplesLocalPlayback(e, t, n, i) {
    if (t.numberOfChannels > 2) {
      i(1, "Too many channels");
      return
    }
    for (var r = [], s = 0; s < t.numberOfChannels; s++) {
      var o = t.getChannelData(s);
      r.push(o)
    }
    this.conn.startSamplesLocalPlayback(e, {
      sampleRate: t.sampleRate,
      volume: n
    }, r, i)
  }
  stopAllSamplesLocalPlayback() {
    this.conn.stopAllSamplesLocalPlayback()
  }
  stopSamplesLocalPlayback(e) {
    this.conn.stopSamplesLocalPlayback(e)
  }
  setBandwidthEstimationExperiments(e) {
    this.conn.setTransportOptions({
      bandwidthEstimationExperiments: e
    })
  }
  updateVideoQualityCore(e, t) {
    this.videoSupported && !this.destroyed && this.conn.setTransportOptions(e)
  }
  setStreamParameters(e) {
    return new Promise((t, n) => {
      for (let t of this.videoStreamParameters) {
        let i = e.findIndex(e => e.rid === t.rid);
        if (-1 === i) {
          n(Error("Invalid rid"));
          return
        }
        let r = [];
        !l()(this.videoStreamParameters[i], e[i]) && (this.videoStreamParameters[i] = {
          ...e[i]
        }, r.push({
          ...e[i]
        })), this.conn.setTransportOptions({
          streamParameters: r
        })
      }
      t()
    })
  }
  applyVideoTransportOptions() {
    if (!this.videoSupported) return;
    let e = !1;
    if (this.hasDesktopSource() && this.videoStreamParameters.length > 0) {
      var t;
      e = (null === (t = this.videoStreamParameters[0].maxResolution) || void 0 === t ? void 0 : t.type) === R.uA.SOURCE
    }
    this.conn.setTransportOptions(this.applyQualityConstraints({
      encodingVideoDegradationPreference: this.hasDesktopSource() ? e ? this.sourceDesktopDegradationPreference : this.desktopDegradationPreference : this.videoDegradationPreference
    }).constraints), this.conn.setVideoBroadcast(this.selfVideo)
  }
  chooseEncryptionMode(e, t) {
    for (let n of t)
      for (let t of e)
        if (n === t) return n;
    return "xsalsa20_poly1305"
  }
  getUserOptions() {
    return Object.keys(this.remoteAudioSSRCs).map(e => {
      let t = void 0 !== this.remoteVideoSSRCs[e] && this.remoteVideoSSRCs[e].length > 0 ? this.remoteVideoSSRCs[e][0] : 0;
      return {
        id: e,
        ssrc: this.remoteAudioSSRCs[e],
        videoSsrc: t,
        videoSsrcs: this.remoteVideoSSRCs[e],
        rtxSsrc: g(t),
        mute: this.getLocalMute(e),
        volume: this.getLocalVolume(e)
      }
    })
  }
  createInputModeOptions() {
    switch (this.inputMode) {
      case R.pM.VOICE_ACTIVITY:
        return {
          vadThreshold: this.vadThreshold, vadAutoThreshold: this.vadAutoThreshold ? f.a.VERY_AGGRESSIVE : f.a.DISABLED, vadUseKrisp: this.vadUseKrisp, vadLeading: this.vadLeading, vadTrailing: this.vadTrailing
        };
      case R.pM.PUSH_TO_TALK:
        return {
          pttReleaseDelay: this.pttReleaseDelay
        };
      default:
        throw Error("Unknown Input Mode: ".concat(this.inputMode))
    }
  }
  getAttenuationOptions() {
    return {
      attenuation: this.isAttenuating(),
      attenuationFactor: this.attenuationFactor,
      attenuateWhileSpeakingSelf: this.attenuateWhileSpeakingSelf,
      attenuateWhileSpeakingOthers: this.attenuateWhileSpeakingOthers
    }
  }
  getCodecParams(e, t) {
    return e !== R.ad.H264 ? {} : t ? {
      "level-asymmetry-allowed": "1",
      "packetization-mode": "1",
      "profile-level-id": "42e034",
      "hardware-h264": this.hardwareH264 && this.useElectronVideo && m.Z.useDirectVideo ? "1" : "0"
    } : {
      "level-asymmetry-allowed": "1",
      "packetization-mode": "1",
      "profile-level-id": "android" === (0, N.zS)().platform ? "42e01f" : "4d0033",
      "hardware-h264": this.hardwareH264 && this.useElectronVideo && m.Z.useDirectVideo ? "1" : "0"
    }
  }
  getCodecOptions(e, t, n) {
    var i, r, s, o;
    let a;
    let l = {
        type: null !== (i = null == (a = this.codecs.find(t => t.name === e)) ? void 0 : a.payloadType) && void 0 !== i ? i : 0,
        name: e,
        freq: 48e3,
        pacsize: 960,
        channels: 1,
        rate: 64e3
      },
      u = [{
        type: null !== (r = null == a ? void 0 : a.payloadType) && void 0 !== r ? r : 0,
        name: e,
        freq: 48e3,
        channels: 2,
        params: {
          stereo: "1"
        }
      }];
    n === R.Yn.STREAM && (l.channels = 2);
    let _ = [],
      d = {
        name: "",
        type: 0,
        rtxType: 0,
        params: {}
      };
    for (a of this.codecs) {
      if (a.name === e) continue;
      let n = {
        name: (0, S.AQ)(a.name),
        type: null !== (s = null == a ? void 0 : a.payloadType) && void 0 !== s ? s : 0,
        rtxType: null !== (o = null == a ? void 0 : a.rtxPayloadType) && void 0 !== o ? o : 0,
        params: this.getCodecParams(a.name, !0)
      };
      this.experimentFlags.has(O.V8.RESET_DECODER_ON_ERRORS) && (n.params["reset-on-errors"] = "1"), this.experimentFlags.has(O.V8.SOFTWARE_FALLBACK_ON_ERRORS) && (n.params["fallback-after-errors"] = "3"), this.experimentFlags.has(O.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS) && (n.params["fallback-on-consecutive-errors"] = "1"), this.experimentFlags.has(O.V8.SIGNAL_AV1_HARDWARE_DECODE) && (n.params["hardware-av1-decode"] = "1"), _.push(n), a.name === t && (d = {
        ...n,
        params: this.getCodecParams(a.name, !1)
      }, this.experimentFlags.has(O.V8.VIDEOTOOLBOX_RATE_CONTROL) && (d.params["fixed-rate-presentation-timestamps"] = "1"))
    }
    return {
      videoEncoder: d,
      videoDecoders: _,
      audioEncoder: l,
      audioDecoders: u
    }
  }
  getKeyFrameInterval() {
    return this.keyframeInterval > 0 && this.clipsKeyFrameInterval > 0 ? Math.min(this.keyframeInterval, this.clipsKeyFrameInterval) : Math.max(this.keyframeInterval, this.clipsKeyFrameInterval)
  }
  getConnectionTransportOptions() {
    let e = {
      selfMute: this.selfMute,
      inputMode: R.GO[this.inputMode],
      inputModeOptions: this.createInputModeOptions(),
      minimumJitterBufferLevel: this.minimumJitterBufferLevel,
      postponeDecodeLevel: this.postponeDecodeLevel,
      ...this.getAttenuationOptions(),
      fec: !0,
      packetLossRate: .3,
      qos: this.qos,
      prioritySpeakerDucking: R.jg,
      encodingVoiceBitRate: this.voiceBitrate,
      callBitRate: R.$A,
      callMinBitRate: R.mN,
      callMaxBitRate: R.mC,
      encodingVideoDegradationPreference: this.videoDegradationPreference,
      experimentalEncoders: this.experimentalEncoders,
      hardwareH264: this.hardwareH264,
      reconnectInterval: this.reconnectInterval
    };
    return (0, N.eJ)(R.eR.VIDEO_EFFECTS) && this.context === R.Yn.STREAM && (e.enableVideoEffects = !0), this.experimentFlags.has(O.V8.MUTE_BEFORE_PROCESSING) && (e.muteBeforeProcessing = !0), this.experimentFlags.has(O.V8.PTT_BEFORE_PROCESSING) && (e.pttBeforeProcessing = !0), this.experimentFlags.has(O.V8.SKIP_ENCODE) && (e.skipEncode = !0), e
  }
  setStream(e) {
    throw Error("Method not implemented.")
  }
  getUserIdBySsrc(e) {}
  prepareSecureFramesTransition(e, t, n) {
    var i, r;
    null === (i = (r = this.conn).prepareSecureFramesTransition) || void 0 === i || i.call(r, e, t, n)
  }
  prepareSecureFramesEpoch(e, t, n) {
    var i, r;
    null === (i = (r = this.conn).prepareSecureFramesEpoch) || void 0 === i || i.call(r, e, t, n)
  }
  executeSecureFramesTransition(e) {
    var t, n;
    null === (t = (n = this.conn).executeSecureFramesTransition) || void 0 === t || t.call(n, e)
  }
  getMLSKeyPackage(e) {
    var t, n;
    null === (t = (n = this.conn).getMLSKeyPackage) || void 0 === t || t.call(n, e)
  }
  updateMLSExternalSender(e) {
    var t, n;
    null === (t = (n = this.conn).updateMLSExternalSender) || void 0 === t || t.call(n, e)
  }
  processMLSProposals(e, t) {
    var n, i;
    null === (n = (i = this.conn).processMLSProposals) || void 0 === n || n.call(i, e, t)
  }
  prepareMLSCommitTransition(e, t, n) {
    var i, r;
    null === (i = (r = this.conn).prepareMLSCommitTransition) || void 0 === i || i.call(r, e, t, n)
  }
  processMLSWelcome(e, t, n) {
    var i, r;
    null === (i = (r = this.conn).processMLSWelcome) || void 0 === i || i.call(r, e, t, n)
  }
  constructor(e, t, n) {
    super(e, t), C(this, "mediaEngineConnectionId", "Native-".concat(p++)), C(this, "goLiveSourceIdentifier", void 0), C(this, "selfMute", !1), C(this, "selfVideo", !1), C(this, "forceAudioNormal", !1), C(this, "forceAudioPriority", !1), C(this, "codecs", []), C(this, "videoEncoderFallbackPending", !1), C(this, "desktopDegradationPreference", (0, N.zS)().DegradationPreference.MAINTAIN_FRAMERATE), C(this, "sourceDesktopDegradationPreference", (0, N.zS)().DegradationPreference.DISABLED), C(this, "videoDegradationPreference", (0, N.zS)().DegradationPreference.BALANCED), C(this, "localPans", {}), C(this, "remoteAudioSSRCs", {}), C(this, "remoteVideoSSRCs", {}), C(this, "inputMode", R.pM.VOICE_ACTIVITY), C(this, "vadThreshold", -40), C(this, "vadAutoThreshold", !0), C(this, "vadUseKrisp", !0), C(this, "vadLeading", 5), C(this, "vadTrailing", 25), C(this, "pttReleaseDelay", 20), C(this, "soundshareActive", !1), C(this, "soundshareId", null), C(this, "soundshareSentSpeakingEvent", !1), C(this, "echoCancellation", !0), C(this, "noiseSuppression", !0), C(this, "automaticGainControl", !0), C(this, "noiseCancellation", !1), C(this, "experimentalEncoders", !1), C(this, "hardwareH264", !0), C(this, "attenuationFactor", .5), C(this, "attenuateWhileSpeakingSelf", !1), C(this, "attenuateWhileSpeakingOthers", !0), C(this, "qos", !0), C(this, "conn", void 0), C(this, "minimumJitterBufferLevel", 0), C(this, "postponeDecodeLevel", 100), C(this, "reconnectInterval", 6e4), C(this, "keyframeInterval", 0), C(this, "clipsKeyFrameInterval", 0), C(this, "videoQualityMeasurement", ""), C(this, "videoEncoderExperiments", ""), C(this, "numFastUdpReconnects", 0), C(this, "logger", void 0), C(this, "handleSpeakingNative", (e, t) => {
      let n = R.Dg.NONE;
      n = "boolean" == typeof t ? t ? R.Dg.VOICE : R.Dg.NONE : t, this.handleSpeakingFlags(e, n)
    }), C(this, "handleNativeMuteToggled", () => {
      this.emit(h.Sh.ToggleMuteFromNative)
    }), C(this, "handleNativeMuteChanged", e => {
      this.emit(h.Sh.NativeMuteChanged, e)
    }), C(this, "handleSpeakingFlags", (e, t) => {
      this.localSpeakingFlags[e] = t;
      let n = e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e];
      this.emit(h.Sh.Speaking, e, t, n), (t & R.Dg.SOUNDSHARE) != 0 && !1 === this.soundshareSentSpeakingEvent && (this.emit(h.Sh.SoundshareSpeaking), this.soundshareSentSpeakingEvent = !0)
    }), C(this, "handleSpeakingWhileMuted", () => {
      this.emit(h.Sh.SpeakingWhileMuted)
    }), C(this, "handlePing", (e, t, n) => {
      this.emit(h.Sh.Ping, e)
    }), C(this, "handlePingTimeout", (e, t, n, i) => {
      this.emit(h.Sh.PingTimeout, n, i > 0 ? i : 4e3)
    }), C(this, "handleVideoEncoderFallback", e => {
      if (!this.videoEncoderFallbackPending) this.logger.info("Falling back from current video encoder:" + e), this.codecs = this.codecs.map(t => ((e === t.name || "AV1" === t.name && "AV1X" === e) && (t.encode = !1), t)).filter(e => !("video" === e.type && !1 === e.encode && !1 === e.decode)), this.emit(h.Sh.VideoEncoderFallback, this.codecs), this.videoEncoderFallbackPending = !0
    }), C(this, "handleVideo", (e, t, n, i) => {
      let r = o()(this.videoStreamParameters);
      e === this.userId ? null != i && Array.isArray(i) && i.length > 0 ? i.forEach(e => {
        r.forEach((t, n) => {
          t.rid === e.rid && (r[n] = {
            ...t,
            ssrc: e.ssrc,
            rtxSsrc: e.rtxSsrc,
            active: e.active
          })
        })
      }) : t > 0 ? (r[0].active = !0, r[0].ssrc = t, r[0].rtxSsrc = g(t)) : r[0].active = !1 : t > 0 && (void 0 !== this.remoteVideoSSRCs[e] ? !this.remoteVideoSSRCs[e].includes(t) && (this.remoteVideoSSRCs[e] = [...this.remoteVideoSSRCs[e], t]) : this.remoteVideoSSRCs[e] = [t]), this.videoStreamParameters = r, this.emit(h.Sh.Video, e, null != n && "" !== n ? n : null, e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e], t, g(t), this.videoStreamParameters)
    }), C(this, "handleFirstFrame", (e, t, n) => {
      this.emit(h.Sh.FirstFrame, e, t, n)
    }), C(this, "handleNoInput", e => {
      this.emit(h.Sh.Silence, !e)
    }), C(this, "handleDesktopSourceEnded", () => {
      this.emit(h.Sh.DesktopSourceEnd)
    }), C(this, "handleSoundshare", e => {
      e && (this.soundshareActive = !0, this.conn.setTransportOptions({
        encodingVoiceBitRate: Math.max(R.ed, this.voiceBitrate)
      }), this.emit(h.Sh.SoundshareAttached))
    }), C(this, "handleSoundshareFailed", (e, t, n) => {
      this.emit(h.Sh.SoundshareFailed, {
        failureCode: e,
        failureReason: t,
        willRetry: n
      })
    }), C(this, "handleSoundshareEnded", () => {
      this.soundshareActive = !1, !this.destroyed && this.conn.setTransportOptions({
        encodingVoiceBitRate: this.voiceBitrate
      })
    }), C(this, "handleNewListenerNative", e => {
      if (e === h.Sh.ConnectionStateChange) this.emit(e, this.connectionState)
    }), C(this, "handleStats", e => {
      if (this.connectionState === R.$j.DISCONNECTED) {
        this.off(h.Sh.Stats, this.handleStats);
        return
      }
      if (null != e) {
        if (null != this.stats) {
          let t = _()(e.rtp.outbound, (e, t) => {
              var n, i;
              return e.lost += null !== (n = t.packetsLost) && void 0 !== n ? n : 0, e.sent += null !== (i = t.packetsSent) && void 0 !== i ? i : 0, e
            }, {
              lost: 0,
              sent: 0
            }),
            n = _()(this.stats.rtp.outbound, (e, t) => {
              var n, i;
              return e.lost += null !== (n = t.packetsLost) && void 0 !== n ? n : 0, e.sent += null !== (i = t.packetsSent) && void 0 !== i ? i : 0, e
            }, {
              lost: 0,
              sent: 0
            }),
            i = t.sent - n.sent,
            s = t.lost - n.lost;
          if (0 === i) this.emit(h.Sh.OutboundLossRate, 0);
          else if (i > 0 && s >= 0) {
            let e = r()(s / (i + s), 0, 1);
            this.emit(h.Sh.OutboundLossRate, 100 * e)
          }
          let o = e.rtp.outbound.filter(e => "audio" === e.type)[0],
            a = this.stats.rtp.outbound.filter(e => "audio" === e.type)[0];
          if (null != o && null != a && null != o.framesCaptured && null != a.framesCaptured) {
            let e = o.framesCaptured - a.framesCaptured,
              t = null != o.noiseCancellerFrames ? null != a.noiseCancellerFrames ? o.noiseCancellerFrames - a.noiseCancellerFrames : 0 : e;
            if (this.noiseCancellation && t > 50 && null != o.noiseCancellerProcessTime && null != a.noiseCancellerProcessTime) {
              let e = o.noiseCancellerProcessTime - a.noiseCancellerProcessTime;
              e / t > 8 ? this.emit(h.Sh.NoiseCancellationError, R.H3.CPU_OVERUSE) : 0 === e && this.emit(h.Sh.NoiseCancellationError, R.H3.FAILED)
            }
            this.inputMode === R.pM.VOICE_ACTIVITY && this.vadAutoThreshold && this.vadUseKrisp && e > 50 && null != o.voiceActivityDetectorProcessTime && null != a.voiceActivityDetectorProcessTime && (o.voiceActivityDetectorProcessTime - a.voiceActivityDetectorProcessTime) / e > 4 && this.emit(h.Sh.VoiceActivityDetectorError, R.H3.VAD_CPU_OVERUSE)
          }
        }
        this.stats = e
      }
    }), C(this, "handleMLSFailure", (e, t) => {
      this.emit(h.Sh.MLSFailure, e, t)
    }), this.logger = new c.Y("Connection(".concat(e, ")")), this.videoSupported = n
  }
}