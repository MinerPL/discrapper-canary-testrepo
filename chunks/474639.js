"use strict";
n.d(t, {
  Z: function() {
    return O
  }
}), n(47120);
var i = n(46973),
  r = n(570140),
  s = n(147913),
  o = n(579806),
  a = n(569545),
  l = n(441167),
  u = n(314897),
  _ = n(131951),
  d = n(19780),
  c = n(959457),
  E = n(626135),
  I = n(358085),
  T = n(924557),
  h = n(435064),
  S = n(894694),
  f = n(779618),
  N = n(356659),
  A = n(981631),
  m = n(70722);
class O extends s.Z {
  handleRTCConnectionState(e) {
    let {
      context: t,
      state: n,
      streamKey: r
    } = e;
    if (!(0, T.ln)() || n !== A.hes.RTC_CONNECTED) return;
    let s = u.default.getId();
    if (t === i.Yn.DEFAULT) return this.applyUserVoiceRecording(s);
    if (t === i.Yn.STREAM && null != r) {
      let {
        ownerId: e
      } = (0, a.my)(r);
      if (e !== s) return;
      let t = c.Z.getRTCConnection(r);
      if (null == t) return;
      this.applyStreamRecording(s, t)
    }
  }
  handleRTCUserCreate(e) {
    let {
      userId: t,
      context: n
    } = e;
    n === i.Yn.DEFAULT && this.applyUserVoiceRecording(t)
  }
  handleRTCConnectionFlags(e) {
    let {
      userId: t,
      channelId: n,
      guildId: i
    } = e;
    this.maybeShowClipsWarning(t), this.applyUserVoiceRecording(t);
    let r = c.Z.getRTCConnection(a.V9({
      streamType: null != i ? m.lo.GUILD : m.lo.CALL,
      ownerId: t,
      channelId: n,
      guildId: i
    }));
    null != r && this.applyStreamRecording(t, r)
  }
  handleClipsInitFailure(e) {
    let {
      applicationName: t,
      errMsg: n
    } = e;
    E.default.track(A.rMx.CLIPS_INIT_FAILURE, {
      application_name: t,
      error_message: n
    })
  }
  maybeShowClipsWarning(e) {
    let t = d.Z.getChannelId();
    if (!(null == t || h.Z.getClipsWarningShown(t)) && e !== u.default.getId()) h.Z.isClipsEnabledForUser(e) && (r.Z.dispatch({
      type: "CLIPS_SHOW_CALL_WARNING",
      channelId: t
    }), this.showClipsToast())
  }
  handlePostConnectionOpen() {
    if (!!(0, f.Z)(_.Z)) {
      if (this.applyNativeClipsSettings(), !(0, T.ln)()) {
        h.Z.getSettings().clipsEnabled && this.disableClips();
        return
      }(null == h.Z.getHardwareClassification() || null == h.Z.getHardwareClassificationForDecoupled() || h.Z.getHardwareClassificationVersion() !== N.WM) && this.classifyHardwareAndTrack().then(e => {
        r.Z.dispatch({
          type: "CLIPS_CLASSIFY_HARDWARE",
          classification: e
        })
      })
    }
  }
  handleRTCConnectionVideo(e) {
    let {
      userId: t,
      context: n,
      channelId: r,
      guildId: s
    } = e;
    if (n !== i.Yn.STREAM || !(0, f.Z)(_.Z)) return;
    let o = c.Z.getRTCConnection(a.V9({
      streamType: null != s ? m.lo.GUILD : m.lo.CALL,
      ownerId: t,
      channelId: r,
      guildId: s
    }));
    null != o && this.applyStreamRecording(t, o)
  }
  async classifyHardwareAndTrack() {
    try {
      let e = await o.Z.processUtils.getSystemInfo(),
        t = this.classifyHardware(e);
      return E.default.track(A.rMx.CLIPS_HARDWARE_CLASSIFICATION, {
        classification: t,
        version: N.WM,
        gpu_models: e.gpus.map(e => {
          let {
            model: t
          } = e;
          return t
        })
      }), t
    } catch (e) {
      return S.x.UNKNOWN
    }
  }
  classifyHardware(e) {
    if ((0, I.isWindows)()) {
      let t = e.gpus.some(e => {
          let {
            model: t
          } = e;
          return N.mg.test(t)
        }),
        n = e.gpus.some(e => {
          let {
            model: t
          } = e;
          return N.nU.test(t)
        });
      return t ? S.x.MEETS_AUTO_ENABLE : n ? S.x.MEETS_MINIMUM : S.x.BELOW_MINIMUM
    }
    if ((0, I.isMac)()) return e.gpus.some(e => {
      let {
        model: t
      } = e;
      return N.B2.test(t)
    }) ? S.x.MEETS_AUTO_ENABLE : S.x.MEETS_MINIMUM;
    return S.x.UNKNOWN
  }
  applyUserVoiceRecording(e) {
    if (!(0, f.Z)(_.Z)) return;
    let t = d.Z.getRTCConnection();
    if (null == t) return;
    if (e === u.default.getId()) {
      t.setClipRecordUser(e, "audio", h.Z.getSettings().clipsEnabled);
      return
    }
    let n = h.Z.isVoiceRecordingAllowedForUser(e);
    t.setClipRecordUser(e, "audio", n)
  }
  applyStreamRecording(e, t) {
    if (!(0, f.Z)(_.Z)) return;
    if (u.default.getId() === e) {
      let {
        clipsEnabled: n
      } = h.Z.getSettings(), i = (0, T.ln)();
      t.setClipRecordUser(e, "audio", i && n), t.setClipRecordUser(e, "video", i && n);
      return
    }
    let {
      enableViewerClipping: n,
      ignoreSenderPreference: i
    } = l.Z.getCurrentConfig({
      location: "ClipsManager:applyStreamRecording"
    });
    if (!n) return;
    let r = i || h.Z.isViewerClippingAllowedForUser(e);
    this.applyNativeClipsSettings(), t.setClipRecordUser(e, "audio", r), t.setClipRecordUser(e, "video", r)
  }
  disableClips() {}
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: e => this.handlePostConnectionOpen(),
      RTC_CONNECTION_FLAGS: e => this.handleRTCConnectionFlags(e),
      RTC_CONNECTION_USER_CREATE: e => this.handleRTCUserCreate(e),
      CLIPS_INIT_FAILURE: e => this.handleClipsInitFailure(e),
      CLIPS_SETTINGS_UPDATE: e => this.applyNativeClipsSettings(e),
      STREAM_START: () => this.applyNativeClipsSettings(),
      RUNNING_GAME_TOGGLE_DETECTION: e => this.handleClipsInitOnToggleDetection(e),
      RUNNING_GAMES_CHANGE: e => this.handleClipsInitOnGamesChange(e),
      CLIPS_RESTART: () => this.fireClipsInitEvent(),
      RTC_CONNECTION_VIDEO: e => this.handleRTCConnectionVideo(e),
      RTC_CONNECTION_STATE: e => this.handleRTCConnectionState(e),
      MEDIA_ENGINE_SET_HARDWARE_H264: e => this.handleMediaEngineSetHardwareH264(e)
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}