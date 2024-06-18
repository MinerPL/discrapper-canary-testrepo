"use strict";
n.d(t, {
  S: function() {
    return o.S
  },
  Z: function() {
    return d
  }
}), n(47120);
var i = n(117806),
  r = n.n(i),
  s = n(47770),
  o = n(445686),
  a = n(701597),
  l = n(65154);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = 0;
class d extends s.Z {
  destroy() {
    this.destroyed = !0, this.framerateReducer.destroy(), this.setConnectionState(l.$j.DISCONNECTED), this.emit(o.S.Destroy, this), this.removeAllListeners()
  }
  getLocalMute(e) {
    return this.localMutes[e] || !1
  }
  getLocalVideoDisabled(e) {
    var t;
    return null !== (t = this.disabledLocalVideos[e]) && void 0 !== t && t
  }
  setLocalVideoDisabled(e, t) {
    this.disabledLocalVideos[e] = t, this.emit(o.S.LocalVideoDisabled, e, t)
  }
  getHasActiveVideoOutputSink(e) {
    var t;
    return null !== (t = this.activeOutputSinks[e]) && void 0 !== t && t
  }
  setHasActiveVideoOutputSink(e, t) {
    this.isActiveOutputSinksEnabled = !0, this.activeOutputSinks[e] = t, this.emit(o.S.ActiveSinksChange, e, t)
  }
  getActiveOutputSinkTrackingEnabled() {
    return this.isActiveOutputSinksEnabled
  }
  setUseElectronVideo(e) {
    this.useElectronVideo = e
  }
  setOnDesktopEncodingOptionsSet(e) {}
  setCallExperience(e) {}
  setClipRecordUser(e, t, n) {}
  setViewerSideClip(e) {}
  setRemoteAudioHistory(e) {}
  setClipsKeyFrameInterval(e) {}
  setQualityDecoupling(e) {}
  getStreamParameters() {
    return r()(this.videoStreamParameters)
  }
  setExperimentFlag(e, t) {
    t ? this.experimentFlags.add(e) : this.experimentFlags.delete(e)
  }
  setConnectionState(e) {
    this.logger.info("Connection state change: ".concat(this.connectionState, " => ").concat(e)), this.connectionState = e, this.emit(o.S.ConnectionStateChange, this.connectionState)
  }
  updateVideoQuality(e) {
    let {
      quality: t,
      constraints: n
    } = this.applyQualityConstraints({}, this.videoStreamParameters[0].ssrc), i = r()(this.videoStreamParameters);
    null != t && (i[0].maxBitrate = t.bitrateMax, null != t.encode && (i[0].maxPixelCount = t.encode.pixelCount, i[0].maxFrameRate = t.encode.framerate)), this.videoStreamParameters = i;
    for (let e = 1; e < this.videoStreamParameters.length; e++) {
      let {
        quality: i,
        constraints: r
      } = this.applyQualityConstraints({}, this.videoStreamParameters[e].ssrc);
      null != i && (this.videoStreamParameters[e].maxBitrate = i.bitrateMax, null != i.encode && (this.videoStreamParameters[e].maxPixelCount = i.encode.pixelCount, this.videoStreamParameters[e].maxFrameRate = i.encode.framerate)), 100 === this.videoStreamParameters[e].quality && (n = r, t = i)
    }
    n.streamParameters = r()(this.videoStreamParameters), n.remoteSinkWantsPixelCount = Math.max(...this.videoStreamParameters.map(e => {
      var t;
      return null !== (t = e.maxPixelCount) && void 0 !== t ? t : 0
    }));
    let s = this.pickProperties(n, e);
    this.logger.info("updateVideoQuality: ".concat(JSON.stringify(s, void 0, 4))), this.updateVideoQualityCore(s, t)
  }
  applyVideoQualityMode(e) {
    if (this.context !== l.Yn.DEFAULT) return;
    let t = a.DM[e];
    this.videoQualityManager.setQualityOverwrite(t), this.updateVideoQuality()
  }
  overwriteQualityForTesting(e) {
    this.videoQualityManager.setQualityOverwrite(e), this.updateVideoQuality()
  }
  applyQualityConstraints() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = arguments.length > 1 ? arguments[1] : void 0;
    return this.videoQualityManager.applyQualityConstraints(e, t)
  }
  pickProperties(e, t) {
    if (null == t || null == e) return e;
    let n = {};
    for (let i of t) n[i] = e[i];
    return n
  }
  initializeStreamParameters(e) {
    let t = this.videoQualityManager.getQuality();
    this.videoStreamParameters = e.filter(e => (e.type === l.Tr.VIDEO || e.type === l.Tr.SCREEN) && "string" == typeof e.rid).map(e => {
      var n, i, r, s;
      return {
        type: e.type,
        active: e.active,
        rid: e.rid,
        ssrc: e.ssrc,
        rtxSsrc: e.rtxSsrc,
        quality: e.quality,
        maxBitrate: (null !== (s = e.quality) && void 0 !== s ? s : 100) < 100 ? t.bitrateMax / 4 : t.bitrateMax,
        maxFrameRate: null === (n = t.capture) || void 0 === n ? void 0 : n.framerate,
        maxResolution: {
          type: l.uA.FIXED,
          width: null === (i = t.capture) || void 0 === i ? void 0 : i.width,
          height: null === (r = t.capture) || void 0 === r ? void 0 : r.height
        },
        profile: e.profile
      }
    })
  }
  getLocalWant(e) {
    var t, n;
    let i = this.remoteVideoSinkWants[null !== (n = null != e ? e : null === (t = this.videoStreamParameters[0]) || void 0 === t ? void 0 : t.ssrc) && void 0 !== n ? n : 0];
    if (null != i && i > 0) return i;
    let r = this.remoteVideoSinkWants.any;
    return null != r && r > 0 ? r : 100
  }
  async emitStats() {
    let e = await this.getStats();
    return null != e && this.emit(o.S.Stats, e), e
  }
  constructor(e, t) {
    super(), u(this, "mediaEngineConnectionId", "WebRTC-".concat(_++)), u(this, "context", void 0), u(this, "userId", void 0), u(this, "streamUserId", void 0), u(this, "destroyed", !1), u(this, "audioSSRC", 0), u(this, "selfDeaf", !1), u(this, "localMutes", {}), u(this, "disabledLocalVideos", {}), u(this, "localVolumes", {}), u(this, "isActiveOutputSinksEnabled", !1), u(this, "activeOutputSinks", {}), u(this, "videoSupported", !1), u(this, "useElectronVideo", !1), u(this, "voiceBitrate", l.dX), u(this, "remoteSinkWantsMaxFramerate", l.Gs), u(this, "videoQualityManager", void 0), u(this, "wantsPriority", new Set), u(this, "localSpeakingFlags", {}), u(this, "videoReady", !1), u(this, "videoStreamParameters", []), u(this, "remoteVideoSinkWants", {
      any: 100
    }), u(this, "localVideoSinkWants", {
      any: 100
    }), u(this, "connectionState", l.$j.CONNECTING), u(this, "stats", void 0), u(this, "onDesktopEncodingOptionsSet", (e, t, n) => {}), u(this, "experimentFlags", new Set), u(this, "framerateReducer", void 0), this.context = e, this.userId = t, this.videoQualityManager = new a.iY(e, this);
    let i = n(988746).Z;
    this.framerateReducer = new i(this, this.videoQualityManager)
  }
}