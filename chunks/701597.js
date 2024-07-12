n.d(t, {
  DM: function() {
return o;
  },
  SF: function() {
return l;
  },
  iY: function() {
return u;
  }
}), n(411104);
var r = n(966146),
  i = n(65154);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let o = Object.freeze({
  [i.Uc.AUTO]: {},
  [i.Uc.FULL]: {
encode: {
  width: 1280,
  height: 720
}
  }
});
class s {
  constructor(e) {
if (a(this, 'capture', void 0), a(this, 'encode', void 0), a(this, 'bitrateMin', void 0), a(this, 'bitrateMax', void 0), a(this, 'bitrateTarget', void 0), a(this, 'localWant', void 0), null == e.capture && null == e.encode)
  throw Error('Invalid arguments.');
this.capture = null == e.capture ? void 0 : new l(e.capture), this.encode = null == e.encode ? void 0 : new l(e.encode), this.bitrateMin = e.bitrateMin, this.bitrateMax = e.bitrateMax, this.bitrateTarget = e.bitrateTarget, this.localWant = e.localWant;
  }
}
class l {
  static equals(e, t) {
return null == e && null == t || null != e && null != t && e.width === t.width && e.height === t.height && e.framerate === t.framerate;
  }
  static extend(e, t) {
var n, r, i, a, o;
if (null == e)
  return t;
if (null == t)
  return e;
let s = null !== (r = null !== (n = null == t ? void 0 : t.width) && void 0 !== n ? n : null == e ? void 0 : e.width) && void 0 !== r ? r : 0,
  l = null !== (a = null !== (i = null == t ? void 0 : t.height) && void 0 !== i ? i : null == e ? void 0 : e.height) && void 0 !== a ? a : 0;
return {
  width: s,
  height: l,
  framerate: null !== (o = null == t ? void 0 : t.framerate) && void 0 !== o ? o : null == e ? void 0 : e.framerate,
  pixelCount: s * l
};
  }
  constructor(e) {
a(this, 'width', void 0), a(this, 'height', void 0), a(this, 'framerate', void 0), a(this, 'pixelCount', void 0), this.width = e.width, this.height = e.height, this.framerate = e.framerate, this.pixelCount = e.width * e.height;
  }
}
class u {
  getQuality(e) {
let t = this.connection.getLocalWant(e),
  n = this.isStreamContext ? this.getGoliveQuality(t) : this.getVideoQuality(t);
if (null != this.qualityOverwrite) {
  var r, i, a;
  return new s({
    encode: l.extend(n.encode, this.qualityOverwrite.encode),
    capture: l.extend(n.capture, this.qualityOverwrite.capture),
    bitrateMin: null !== (r = this.qualityOverwrite.bitrateMin) && void 0 !== r ? r : n.bitrateMin,
    bitrateMax: null !== (i = this.qualityOverwrite.bitrateMax) && void 0 !== i ? i : n.bitrateMax,
    bitrateTarget: null !== (a = this.qualityOverwrite.bitrateTarget) && void 0 !== a ? a : n.bitrateTarget,
    localWant: n.localWant
  });
}
return n;
  }
  applyQualityConstraints(e, t) {
let n = this.getQuality(t);
return null != n.capture && (e.encodingVideoWidth = n.capture.width, e.encodingVideoHeight = n.capture.height, e.encodingVideoFrameRate = n.capture.framerate, e.captureVideoFrameRate = n.capture.framerate), null != n.encode && (e.remoteSinkWantsMaxFramerate = n.encode.framerate, e.remoteSinkWantsPixelCount = n.encode.pixelCount), null != n.bitrateTarget ? e.encodingVideoBitRate = n.bitrateTarget : e.encodingVideoBitRate = n.bitrateMax, e.encodingVideoMinBitRate = n.bitrateMin, e.encodingVideoMaxBitRate = n.bitrateMax, null != e.encodingVideoBitRate && null != e.encodingVideoMaxBitRate && (e.encodingVideoBitRate = Math.min(e.encodingVideoBitRate, e.encodingVideoMaxBitRate)), {
  quality: n,
  constraints: e
};
  }
  setQualityOverwrite(e) {
this.qualityOverwrite = e;
  }
  setGoliveQuality(e) {
var t, n, r;
this.goliveMaxQuality = new s({
  capture: l.extend(this.goliveMaxQuality.capture, e.capture),
  encode: l.extend(this.goliveMaxQuality.encode, e.encode),
  bitrateMin: null !== (t = e.bitrateMin) && void 0 !== t ? t : this.goliveMaxQuality.bitrateMin,
  bitrateMax: null !== (n = e.bitrateMax) && void 0 !== n ? n : this.goliveMaxQuality.bitrateMax,
  bitrateTarget: null !== (r = e.bitrateTarget) && void 0 !== r ? r : this.goliveMaxQuality.bitrateTarget,
  localWant: this.goliveMaxQuality.localWant
});
  }
  setGoliveSimulcast(e) {
this.goliveSimulcastEnabled = e;
  }
  getVideoQuality(e) {
let t = this.ladder.getResolution(e),
  n = this.options.videoBitrate.min * t.budgetPortion,
  r = this.options.videoBitrate.max * t.budgetPortion,
  i = this.isMuted ? t.mutedFramerate : t.framerate;
return new s({
  encode: {
    ...t,
    framerate: i
  },
  capture: {
    width: this.options.videoCapture.width,
    height: this.options.videoCapture.height,
    framerate: this.options.videoCapture.framerate
  },
  bitrateMin: n,
  bitrateMax: Math.max(r, this.options.videoBitrateFloor),
  localWant: e
});
  }
  getGoliveQuality(e) {
if (this.goliveSimulcastEnabled && e < 100) {
  let e = this.getDefaultGoliveQuality();
  return new s({
    capture: e.capture,
    encode: e.encode,
    bitrateMin: 150000,
    bitrateMax: i.pk,
    bitrateTarget: i.pk
  });
}
return this.goliveMaxQuality;
  }
  getDefaultGoliveQuality() {
return new s({
  capture: {
    width: 1280,
    height: 720,
    framerate: i.Gs
  },
  encode: {
    width: 1280,
    height: 720,
    framerate: i.Gs,
    pixelCount: 921600
  },
  bitrateMin: this.options.desktopBitrate.min,
  bitrateMax: this.options.desktopBitrate.max,
  bitrateTarget: this.options.desktopBitrate.target
});
  }
  constructor(e, t, n = i.kS) {
a(this, 'contextType', void 0), a(this, 'connection', void 0), a(this, 'options', void 0), a(this, 'isMuted', void 0), a(this, 'qualityOverwrite', void 0), a(this, 'goliveMaxQuality', void 0), a(this, 'goliveSimulcastEnabled', void 0), a(this, 'isStreamContext', void 0), a(this, 'ladder', void 0), this.contextType = e, this.connection = t, this.options = n, this.isMuted = !1, this.isStreamContext = this.contextType === i.Yn.STREAM, this.ladder = new r.x(n), this.goliveMaxQuality = this.getDefaultGoliveQuality(), this.goliveSimulcastEnabled = !1;
  }
}