"use strict";
n.d(t, {
  DM: function() {
    return o
  },
  SF: function() {
    return l
  },
  iY: function() {
    return u
  }
}), n(411104);
var i = n(966146),
  r = n(65154);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let o = Object.freeze({
  [r.Uc.AUTO]: {},
  [r.Uc.FULL]: {
    encode: {
      width: 1280,
      height: 720
    }
  }
});
class a {
  constructor(e) {
    if (s(this, "capture", void 0), s(this, "encode", void 0), s(this, "bitrateMin", void 0), s(this, "bitrateMax", void 0), s(this, "bitrateTarget", void 0), s(this, "localWant", void 0), null == e.capture && null == e.encode) throw Error("Invalid arguments.");
    this.capture = null == e.capture ? void 0 : new l(e.capture), this.encode = null == e.encode ? void 0 : new l(e.encode), this.bitrateMin = e.bitrateMin, this.bitrateMax = e.bitrateMax, this.bitrateTarget = e.bitrateTarget, this.localWant = e.localWant
  }
}
class l {
  static equals(e, t) {
    return null == e && null == t || null != e && null != t && e.width === t.width && e.height === t.height && e.framerate === t.framerate
  }
  static extend(e, t) {
    var n, i, r, s, o;
    if (null == e) return t;
    if (null == t) return e;
    let a = null !== (i = null !== (n = null == t ? void 0 : t.width) && void 0 !== n ? n : null == e ? void 0 : e.width) && void 0 !== i ? i : 0,
      l = null !== (s = null !== (r = null == t ? void 0 : t.height) && void 0 !== r ? r : null == e ? void 0 : e.height) && void 0 !== s ? s : 0;
    return {
      width: a,
      height: l,
      framerate: null !== (o = null == t ? void 0 : t.framerate) && void 0 !== o ? o : null == e ? void 0 : e.framerate,
      pixelCount: a * l
    }
  }
  constructor(e) {
    s(this, "width", void 0), s(this, "height", void 0), s(this, "framerate", void 0), s(this, "pixelCount", void 0), this.width = e.width, this.height = e.height, this.framerate = e.framerate, this.pixelCount = e.width * e.height
  }
}
class u {
  getQuality(e) {
    let t = this.connection.getLocalWant(e),
      n = this.isStreamContext ? this.getGoliveQuality(t) : this.getVideoQuality(t);
    if (null != this.qualityOverwrite) {
      var i, r, s;
      return new a({
        encode: l.extend(n.encode, this.qualityOverwrite.encode),
        capture: l.extend(n.capture, this.qualityOverwrite.capture),
        bitrateMin: null !== (i = this.qualityOverwrite.bitrateMin) && void 0 !== i ? i : n.bitrateMin,
        bitrateMax: null !== (r = this.qualityOverwrite.bitrateMax) && void 0 !== r ? r : n.bitrateMax,
        bitrateTarget: null !== (s = this.qualityOverwrite.bitrateTarget) && void 0 !== s ? s : n.bitrateTarget,
        localWant: n.localWant
      })
    }
    return n
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
    this.goliveMaxQuality = new a({
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
    return new a({
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
    if (this.goliveSimulcastEnabled && e < 100) {
      let e = this.getDefaultGoliveQuality();
      return new a({
        capture: e.capture,
        encode: e.encode,
        bitrateMin: 15e4,
        bitrateMax: r.pk,
        bitrateTarget: r.pk
      })
    }
    return this.goliveMaxQuality
  }
  getDefaultGoliveQuality() {
    return new a({
      capture: {
        width: 1280,
        height: 720,
        framerate: r.Gs
      },
      encode: {
        width: 1280,
        height: 720,
        framerate: r.Gs,
        pixelCount: 921600
      },
      bitrateMin: this.options.desktopBitrate.min,
      bitrateMax: this.options.desktopBitrate.max,
      bitrateTarget: this.options.desktopBitrate.target
    })
  }
  constructor(e, t, n = r.kS) {
    s(this, "contextType", void 0), s(this, "connection", void 0), s(this, "options", void 0), s(this, "isMuted", void 0), s(this, "qualityOverwrite", void 0), s(this, "goliveMaxQuality", void 0), s(this, "goliveSimulcastEnabled", void 0), s(this, "isStreamContext", void 0), s(this, "ladder", void 0), this.contextType = e, this.connection = t, this.options = n, this.isMuted = !1, this.isStreamContext = this.contextType === r.Yn.STREAM, this.ladder = new i.x(n), this.goliveMaxQuality = this.getDefaultGoliveQuality(), this.goliveSimulcastEnabled = !1
  }
}