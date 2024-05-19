"use strict";
n.r(t), n.d(t, {
  VIDEO_QUALITY_MODES_TO_OVERWRITES: function() {
    return s
  },
  VideoQuality: function() {
    return l
  },
  VideoQualityManager: function() {
    return u
  }
}), n("411104");
var i = n("966146"),
  r = n("65154");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let s = Object.freeze({
  [r.VideoQualityMode.AUTO]: {},
  [r.VideoQualityMode.FULL]: {
    encode: {
      width: 1280,
      height: 720
    }
  }
});
class o {
  constructor(e) {
    if (a(this, "capture", void 0), a(this, "encode", void 0), a(this, "bitrateMin", void 0), a(this, "bitrateMax", void 0), a(this, "bitrateTarget", void 0), a(this, "localWant", void 0), null == e.capture && null == e.encode) throw Error("Invalid arguments.");
    this.capture = null == e.capture ? void 0 : new l(e.capture), this.encode = null == e.encode ? void 0 : new l(e.encode), this.bitrateMin = e.bitrateMin, this.bitrateMax = e.bitrateMax, this.bitrateTarget = e.bitrateTarget, this.localWant = e.localWant
  }
}
class l {
  static equals(e, t) {
    return null == e && null == t || null != e && null != t && e.width === t.width && e.height === t.height && e.framerate === t.framerate
  }
  static extend(e, t) {
    var n, i, r;
    return null == e ? t : null == t ? e : {
      width: null !== (n = null == t ? void 0 : t.width) && void 0 !== n ? n : null == e ? void 0 : e.width,
      height: null !== (i = null == t ? void 0 : t.height) && void 0 !== i ? i : null == e ? void 0 : e.height,
      framerate: null !== (r = null == t ? void 0 : t.framerate) && void 0 !== r ? r : null == e ? void 0 : e.framerate
    }
  }
  constructor(e) {
    a(this, "width", void 0), a(this, "height", void 0), a(this, "framerate", void 0), a(this, "pixelCount", void 0), this.width = e.width, this.height = e.height, this.framerate = e.framerate, this.pixelCount = e.width * e.height
  }
}
class u {
  getQuality(e) {
    let t = this.isStreamContext ? this.getGoliveQuality(e) : this.getVideoQuality(this.connection.getLocalWant(e));
    if (null != this.qualityOverwrite) {
      var n, i, r;
      return new o({
        encode: l.extend(t.encode, this.qualityOverwrite.encode),
        capture: l.extend(t.capture, this.qualityOverwrite.capture),
        bitrateMin: null !== (n = this.qualityOverwrite.bitrateMin) && void 0 !== n ? n : t.bitrateMin,
        bitrateMax: null !== (i = this.qualityOverwrite.bitrateMax) && void 0 !== i ? i : t.bitrateMax,
        bitrateTarget: null !== (r = this.qualityOverwrite.bitrateTarget) && void 0 !== r ? r : t.bitrateTarget,
        localWant: t.localWant
      })
    }
    return t
  }
  applyQualityConstraints(e, t) {
    let n = this.getQuality(t);
    return null != n.capture && (e.encodingVideoWidth = n.capture.width, e.encodingVideoHeight = n.capture.height, e.encodingVideoFrameRate = n.capture.framerate, e.captureVideoFrameRate = n.capture.framerate), null != n.encode && (e.remoteSinkWantsMaxFramerate = n.encode.framerate, e.remoteSinkWantsPixelCount = n.encode.pixelCount), null != n.bitrateTarget ? e.encodingVideoBitRate = n.bitrateTarget : e.encodingVideoBitRate = n.bitrateMax, e.encodingVideoMinBitRate = n.bitrateMin, e.encodingVideoMaxBitRate = n.bitrateMax, null != e.encodingVideoBitRate && null != e.encodingVideoMaxBitRate && (e.encodingVideoBitRate = Math.min(e.encodingVideoBitRate, e.encodingVideoMaxBitRate)), {
      quality: n,
      constraints: e
    }
  }
  setQualityOverwrite(e) {
    this.qualityOverwrite = e
  }
  setGoliveQuality(e) {
    var t, n, i;
    this.goliveMaxQuality = new o({
      capture: l.extend(this.goliveMaxQuality.capture, e.capture),
      encode: l.extend(this.goliveMaxQuality.encode, e.encode),
      bitrateMin: null !== (t = e.bitrateMin) && void 0 !== t ? t : this.goliveMaxQuality.bitrateMin,
      bitrateMax: null !== (n = e.bitrateMax) && void 0 !== n ? n : this.goliveMaxQuality.bitrateMax,
      bitrateTarget: null !== (i = e.bitrateTarget) && void 0 !== i ? i : this.goliveMaxQuality.bitrateTarget,
      localWant: this.goliveMaxQuality.localWant
    })
  }
  setGoliveSimulcast(e) {
    this.goliveSimulcastEnabled = e
  }
  getVideoQuality(e) {
    let t = this.ladder.getResolution(e),
      n = this.options.videoBitrate.min * t.budgetPortion,
      i = this.options.videoBitrate.max * t.budgetPortion,
      r = this.isMuted ? t.mutedFramerate : t.framerate;
    return new o({
      encode: {
        ...t,
        framerate: r
      },
      capture: {
        width: this.options.videoCapture.width,
        height: this.options.videoCapture.height,
        framerate: this.options.videoCapture.framerate
      },
      bitrateMin: n,
      bitrateMax: Math.max(i, this.options.videoBitrateFloor),
      localWant: e
    })
  }
  getGoliveQuality(e) {
    let t = this.connection.getLocalWant(e);
    return this.goliveSimulcastEnabled ? this.getVideoQuality(t) : this.goliveMaxQuality
  }
  getDefaultGoliveQuality() {
    return new o({
      capture: {
        width: 1280,
        height: 720,
        framerate: r.VIDEO_QUALITY_FRAMERATE
      },
      bitrateMin: this.options.desktopBitrate.min,
      bitrateMax: this.options.desktopBitrate.max,
      bitrateTarget: this.options.desktopBitrate.target
    })
  }
  constructor(e, t, n = r.defaultVideoQualityOptions) {
    a(this, "contextType", void 0), a(this, "connection", void 0), a(this, "options", void 0), a(this, "isMuted", void 0), a(this, "qualityOverwrite", void 0), a(this, "goliveMaxQuality", void 0), a(this, "goliveSimulcastEnabled", void 0), a(this, "isStreamContext", void 0), a(this, "ladder", void 0), this.contextType = e, this.connection = t, this.options = n, this.isMuted = !1, this.isStreamContext = this.contextType === r.MediaEngineContextTypes.STREAM, this.ladder = new i.MediaSinkWantsLadder(n), this.goliveMaxQuality = this.getDefaultGoliveQuality(), this.goliveSimulcastEnabled = !1
  }
}