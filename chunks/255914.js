"use strict";
n.d(t, {
  Mq: function() {
    return o
  },
  Su: function() {
    return r
  },
  lG: function() {
    return m
  },
  m7: function() {
    return C
  },
  nt: function() {
    return p
  },
  u7: function() {
    return i
  },
  z4: function() {
    return R
  }
}), n(47120), n(653041);
var i, r, s, o, a, l, u, _, d = n(379649),
  c = n(909766),
  E = n(179654);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let T = [0, 5e5, 1e6, 15e5, 2e6, 3e6, 4e6, 5e6, 6e6, 7e6, 8e6],
  h = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  S = [720, 480, 360],
  f = ["framesCodec", "framesNetwork", "packets", "packetsLost", "framesDropped", "framesCodecError", "bytes", "nackCount", "pliCount", "qpSum", "freezeCount", "pauseCount", "totalFreezesDuration", "totalPausesDuration", "totalFramesDuration", "keyframes", "passthroughCount", "cryptorSuccessCount", "cryptorFailureCount", "cryptorDuration", "cryptorAttempts", "qualityDecodeErrors", "qualityDecoderReboots", "qualityScoreErrors", "qualityFrameDrops", "qualitySizeMismatches"];
(a = i || (i = {})).H264 = "H264", a.H265 = "H265", a.VP8 = "VP8", a.VP9 = "VP9", a.AV1 = "AV1", a.UNKNOWN = "UNKNOWN", (l = r || (r = {})).NVIDIA_CUDA = "nvidia_cuda", l.NVIDIA_DIRECT_3D = "nvidia_direct_3d", l.OPENH264 = "openh264", l.VIDEOTOOLBOX = "videotoolbox", l.AMD_DIRECT_3D = "amd_direct_3d", l.INTEL = "intel", l.INTEL_DIRECT_3D = "intel_direct_3d", l.VP8_LIBVPX = "vp8_libvpx", l.UNCATEGORIZED = "uncategorized", l.UNKNOWN = "unknown", (u = s || (s = {})).NVIDIA_DIRECT_3D = "nvidia_direct_3d", u.OPENH264 = "openh264", u.VIDEOTOOLBOX = "videotoolbox", u.AMD_DIRECT_3D = "amd_direct_3d", u.INTEL = "intel", u.INTEL_DIRECT_3D = "intel_direct_3d", u.VP8_LIBVPX = "vp8_libvpx", u.UNCATEGORIZED = "uncategorized", u.UNKNOWN = "unknown";
let N = Object.freeze({
    "nvidia: cuda": "nvidia_cuda",
    "nvidia: direct3d": "nvidia_direct_3d",
    "amd: direct3d": "amd_direct_3d",
    "intel: direct3d": "intel_direct_3d",
    intel: "intel",
    VideoToolbox: "videotoolbox",
    OpenH264: "openh264",
    libvpx: "vp8_libvpx"
  }),
  A = Object.freeze({
    "nvidia: direct3d": "nvidia_direct_3d",
    "amd: direct3d": "amd_direct_3d",
    "intel: direct3d": "intel_direct_3d",
    intel: "intel",
    VideoToolbox: "videotoolbox",
    OpenH264: "openh264",
    libvpx: "vp8_libvpx"
  });

function m(e) {
  if (null == e) return "unknown";
  for (let t of Object.keys(N))
    if (e.includes(t)) return N[t];
  return "uncategorized"
}(_ = o || (o = {}))[_.None = 0] = "None", _[_.ClientSideDisableVideo = 1] = "ClientSideDisableVideo", _[_.SenderStopped = 2] = "SenderStopped";

function O(e) {
  if (null == e) return "UNKNOWN";
  if ("H264" === (e = e.toUpperCase())) return "H264";
  if ("H265" === e) return "H265";
  if ("VP8" === e) return "VP8";
  else if ("VP9" === e) return "VP9";
  else if ("AV1" === e || "AV1X" === e) return "AV1";
  else return "UNKNOWN"
}
class R {
  static parseInboundStats(e, t) {
    var n, i, r, s, o, a, l;
    let u = new R;
    return null == e ? u : (u.bytes = e.bytesReceived, u.framesCodec = e.framesDecoded, u.framesCodecError = null !== (n = e.framesDecodeErrors) && void 0 !== n ? n : null, u.framesNetwork = e.framesReceived, u.packets = e.packetsReceived, u.packetsLost = e.packetsLost, u.framesDropped = e.framesDropped, u.resolution = null != e.resolution ? e.resolution.height : 0, u.minorResolution = null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0, u.majorResolution = null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0, u.timestamp = t, u.nackCount = e.nackCount, u.pliCount = e.pliCount, u.decoder = function(e) {
      if (null == e) return "unknown";
      for (let t of Object.keys(A))
        if (e.includes(t)) return A[t];
      return "uncategorized"
    }(e.decoderImplementationName), u.codecType = O(e.codec.name), u.qpSum = 0, u.freezeCount = e.freezeCount, u.pauseCount = e.pauseCount, u.totalFreezesDuration = e.totalFreezesDuration, u.totalPausesDuration = e.totalPausesDuration, u.totalFramesDuration = e.totalFramesDuration, u.keyframes = null !== (i = e.keyFramesDecoded) && void 0 !== i ? i : null, u.passthroughCount = null !== (r = e.passthroughCount) && void 0 !== r ? r : 0, u.cryptorSuccessCount = null !== (s = e.decryptSuccessCount) && void 0 !== s ? s : 0, u.cryptorFailureCount = null !== (o = e.decryptFailureCount) && void 0 !== o ? o : 0, u.cryptorDuration = null !== (a = e.decryptDuration) && void 0 !== a ? a : 0, u.cryptorAttempts = null !== (l = e.decryptAttempts) && void 0 !== l ? l : 0, u)
  }
  static parseOutboundStats(e, t) {
    var n, i, r, s, o, a, l, u, _, d, c, E, I, T, h, S, f, N, A, C;
    let p = new R;
    return null == e ? p : {
      bytes: e.bytesSent,
      framesCodec: e.framesEncoded,
      framesCodecError: null,
      framesNetwork: null !== (n = e.framesSent) && void 0 !== n ? n : 0,
      packets: e.packetsSent,
      packetsLost: null !== (i = e.packetsLost) && void 0 !== i ? i : 0,
      framesDropped: 0,
      resolution: null != e.resolution ? e.resolution.height : 0,
      minorResolution: null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0,
      majorResolution: null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0,
      timestamp: t,
      encoder: m(e.encoderImplementationName),
      decoder: null,
      codecType: O(e.codec.name),
      nackCount: e.nackCount,
      pliCount: e.pliCount,
      qpSum: e.qpSum,
      freezeCount: 0,
      pauseCount: 0,
      totalFreezesDuration: 0,
      totalPausesDuration: 0,
      totalFramesDuration: 0,
      outboundSinkWant: null !== (r = e.sinkWantAsInt) && void 0 !== r ? r : null,
      vmafScore: null !== (s = e.encoderQualityVmaf) && void 0 !== s ? s : null,
      qualityDecodeErrors: null !== (o = e.qualityDecodeErrors) && void 0 !== o ? o : 0,
      qualityDecoderReboots: null !== (a = e.qualityDecoderReboots) && void 0 !== a ? a : 0,
      qualityScoreErrors: null !== (l = e.qualityScoreErrors) && void 0 !== l ? l : 0,
      qualityFrameDrops: null !== (u = e.qualityFrameDrops) && void 0 !== u ? u : 0,
      qualitySizeMismatches: null !== (_ = e.qualitySizeMismatches) && void 0 !== _ ? _ : 0,
      psnrDb: null !== (d = e.encoderQualityPsnr) && void 0 !== d ? d : null,
      keyframes: null !== (c = e.keyFramesEncoded) && void 0 !== c ? c : null,
      framesDroppedRateLimiter: null !== (E = e.framesDroppedRateLimiter) && void 0 !== E ? E : null,
      framesDroppedEncoderQueue: null !== (I = e.framesDroppedEncoderQueue) && void 0 !== I ? I : null,
      framesDroppedCongestionWindow: null !== (T = e.framesDroppedCongestionWindow) && void 0 !== T ? T : null,
      passthroughCount: null !== (h = e.passthroughCount) && void 0 !== h ? h : 0,
      cryptorSuccessCount: null !== (S = e.encryptSuccessCount) && void 0 !== S ? S : 0,
      cryptorFailureCount: null !== (f = e.encryptFailureCount) && void 0 !== f ? f : 0,
      cryptorDuration: null !== (N = e.encryptDuration) && void 0 !== N ? N : 0,
      cryptorAttempts: null !== (A = e.encryptAttempts) && void 0 !== A ? A : 0,
      cryptorMaxAttempts: null !== (C = e.encryptMaxAttempts) && void 0 !== C ? C : 0
    }
  }
  constructor() {
    I(this, "bytes", 0), I(this, "framesCodec", 0), I(this, "framesCodecError", null), I(this, "framesNetwork", 0), I(this, "resolution", 0), I(this, "minorResolution", 0), I(this, "majorResolution", 0), I(this, "timestamp", 0), I(this, "packets", 0), I(this, "packetsLost", 0), I(this, "framesDropped", 0), I(this, "nackCount", 0), I(this, "pliCount", 0), I(this, "encoder", null), I(this, "decoder", null), I(this, "codecType", null), I(this, "qpSum", 0), I(this, "freezeCount", 0), I(this, "pauseCount", 0), I(this, "totalFreezesDuration", 0), I(this, "totalPausesDuration", 0), I(this, "totalFramesDuration", 0), I(this, "vmafScore", null), I(this, "psnrDb", null), I(this, "outboundSinkWant", null), I(this, "keyframes", null), I(this, "framesDroppedRateLimiter", null), I(this, "framesDroppedEncoderQueue", null), I(this, "framesDroppedCongestionWindow", null), I(this, "passthroughCount", 0), I(this, "cryptorSuccessCount", 0), I(this, "cryptorFailureCount", 0), I(this, "cryptorDuration", 0), I(this, "cryptorAttempts", 0), I(this, "cryptorMaxAttempts", 0), I(this, "qualityDecodeErrors", 0), I(this, "qualityDecoderReboots", 0), I(this, "qualityScoreErrors", 0), I(this, "qualityFrameDrops", 0), I(this, "qualitySizeMismatches", 0)
  }
}
class C {
  get isVideoStopped() {
    return 0 !== this.videoStoppedReason
  }
  get videoStoppedDuration() {
    return this.videoStoppedWatch.elapsed()
  }
  collectAggregationStats(e, t) {
    for (let i of f) {
      var n;
      let r = e[i];
      if (null === r) continue;
      let s = null !== (n = t[i]) && void 0 !== n ? n : 0;
      s > r ? this.aggregatedProperties[i] += r : this.aggregatedProperties[i] += r - s
    }
    this.aggregationDuration += e.timestamp - t.timestamp
  }
  setVideoStopped(e, t) {
    if (e) {
      this.videoStoppedReason |= t, this.videoStoppedWatch.start();
      return
    }
    this.videoStoppedReason &= ~t, 0 === this.videoStoppedReason && (this.statsWindow.splice(0), this.videoStoppedWatch.stop())
  }
  appendAndIncrementStats(e) {
    if (this.isVideoStopped) return;
    if (this.statsWindow.push(e), this.statsWindow.length < 2) return;
    let t = this.statsWindow[this.statsWindow.length - 1],
      n = this.statsWindow[this.statsWindow.length - 2];
    this.collectAggregationStats(t, n);
    let {
      bytes: i,
      framesCodec: r,
      timestamp: s,
      resolution: o,
      minorResolution: a,
      majorResolution: l,
      encoder: u,
      decoder: _,
      codecType: d
    } = t, {
      timestamp: c
    } = n, E = (s - c) / 1e3;
    if (this.intervalTotal += E, this.resolutionTotal += o * E, this.minorResolutionTotal += a * E, this.majorResolutionTotal += l * E, this.cryptorMaxAttempts = Math.max(this.cryptorMaxAttempts, t.cryptorMaxAttempts), null != u && null != d && "encoderBuckets" in this && (this.encoderBuckets[u] += E, this.codecBuckets[d] += E, null != t.codecType && "UNKNOWN" !== t.codecType && (this.encoderCodec = t.codecType), null != e.vmafScore && e.vmafScore >= 0 && (this.vmafScoreNum += 1, this.vmafScoreSum += e.vmafScore, this.vmafHistogram.addSample(e.vmafScore)), null != e.psnrDb && e.psnrDb >= 0 && (this.psnrDbNum += 1, this.psnrDbSum += e.psnrDb, this.psnrHistogram.addSample(e.psnrDb)), null != e.outboundSinkWant && 0 !== e.outboundSinkWant && (this.outboundSinkWantNum += 1, this.outboundSinkWantSum += e.outboundSinkWant)), null != _ && null != d && "decoderBuckets" in this && (this.decoderBuckets[_] += E, this.codecBuckets[d] += E, null != t.codecType && "UNKNOWN" !== t.codecType && (this.decoderCodec = t.codecType)), this.statsWindow.length < 6) return;
    let {
      bytes: I,
      framesCodec: f,
      timestamp: N
    } = this.statsWindow[this.statsWindow.length - 3];
    S.forEach(e => {
      o <= e && (this.resolutionBuckets[e] += E)
    });
    let A = (s - N) / 1e3,
      m = (i - I) * 8 / A,
      O = (r - f) / A;
    T.forEach(e => {
      m <= e && (this.bitrateBuckets[e] += E)
    }), h.forEach(e => {
      O <= e && (this.fpsBuckets[e] += E)
    }), this.resolutionHistogram.addSample(o), this.bitrateHistogram.addSample(m), this.fpsHistogram.addSample(O), this.statsWindow.shift()
  }
  addSystemResources() {
    this.systemResources.takeSample()
  }
  appendTransportStats(e) {
    null != e.inboundBitrateEstimate && this.inboundBitrateEstimateHistogram.addSample(e.inboundBitrateEstimate)
  }
  getCodecsUsed() {
    let e = new Set;
    for (let [t, n] of Object.entries(this.codecBuckets)) n > 0 && e.add(t);
    return e
  }
  constructor(e) {
    I(this, "decoderBuckets", {
      nvidia_direct_3d: 0,
      openh264: 0,
      videotoolbox: 0,
      amd_direct_3d: 0,
      intel: 0,
      intel_direct_3d: 0,
      vp8_libvpx: 0,
      uncategorized: 0,
      unknown: 0
    }), I(this, "codecBuckets", {
      H264: 0,
      H265: 0,
      VP8: 0,
      VP9: 0,
      AV1: 0,
      UNKNOWN: 0
    }), I(this, "statsWindow", []), I(this, "fpsHistogram", new c.b), I(this, "bitrateHistogram", new c.b), I(this, "inboundBitrateEstimateHistogram", new c.b), I(this, "resolutionHistogram", new c.b), I(this, "systemResources", new E.Z), I(this, "decoderCodec", "UNKNOWN"), I(this, "startTime", void 0), I(this, "timeToFirstFrame", void 0), I(this, "aggregatedProperties", {
      framesCodec: 0,
      framesNetwork: 0,
      packets: 0,
      packetsLost: 0,
      framesDropped: 0,
      framesCodecError: 0,
      bytes: 0,
      nackCount: 0,
      pliCount: 0,
      qpSum: 0,
      freezeCount: 0,
      pauseCount: 0,
      totalFreezesDuration: 0,
      totalPausesDuration: 0,
      totalFramesDuration: 0,
      keyframes: 0,
      passthroughCount: 0,
      cryptorSuccessCount: 0,
      cryptorFailureCount: 0,
      cryptorDuration: 0,
      cryptorAttempts: 0,
      qualityDecodeErrors: 0,
      qualityDecoderReboots: 0,
      qualityScoreErrors: 0,
      qualityFrameDrops: 0,
      qualitySizeMismatches: 0
    }), I(this, "aggregationDuration", 0), I(this, "bitrateBuckets", {}), I(this, "fpsBuckets", {}), I(this, "resolutionBuckets", {}), I(this, "resolutionTotal", 0), I(this, "minorResolutionTotal", 0), I(this, "majorResolutionTotal", 0), I(this, "intervalTotal", 0), I(this, "cryptorMaxAttempts", 0), I(this, "videoStoppedWatch", void 0), I(this, "videoStoppedReason", 0), this.startTime = e.now(), this.videoStoppedWatch = new d.G9(e), T.forEach(e => {
      this.bitrateBuckets[e] = 0
    }), h.forEach(e => {
      this.fpsBuckets[e] = 0
    }), S.forEach(e => {
      this.resolutionBuckets[e] = 0
    })
  }
}
class p extends C {
  appendTargetRates(e, t, n) {
    if (this.statsWindow.length < 2) return;
    e = null != e ? e : 0, t = null != t ? t : 0, n = null != n ? n : 0;
    let i = (this.statsWindow[this.statsWindow.length - 1].timestamp - this.statsWindow[this.statsWindow.length - 2].timestamp) / 1e3;
    this.targetFrames = this.targetFrames + e * i, this.targetBytesNetwork = this.targetBytesNetwork + t / 8 * i, this.targetBytesMax = this.targetBytesMax + n / 8 * i, this.targetBitrateHistogram.addSample(t)
  }
  constructor(...e) {
    super(...e), I(this, "encoderBuckets", {
      nvidia_cuda: 0,
      nvidia_direct_3d: 0,
      openh264: 0,
      videotoolbox: 0,
      amd_direct_3d: 0,
      intel: 0,
      intel_direct_3d: 0,
      vp8_libvpx: 0,
      uncategorized: 0,
      unknown: 0
    }), I(this, "encoderCodec", "UNKNOWN"), I(this, "targetFrames", 0), I(this, "targetBytesMax", 0), I(this, "targetBytesNetwork", 0), I(this, "targetBitrateHistogram", new c.b), I(this, "averageEncodeTime", 0), I(this, "vmafScoreSum", 0), I(this, "vmafScoreNum", 0), I(this, "vmafHistogram", new c.b), I(this, "psnrDbSum", 0), I(this, "psnrDbNum", 0), I(this, "psnrHistogram", new c.b), I(this, "qualityDecodeErrors", 0), I(this, "qualityDecoderReboots", 0), I(this, "qualityScoreErrors", 0), I(this, "qualityFrameDrops", 0), I(this, "qualitySizeMismatches", 0), I(this, "outboundSinkWantSum", 0), I(this, "outboundSinkWantNum", 0), I(this, "framesDroppedRateLimiter", null), I(this, "framesDroppedEncoderQueue", null), I(this, "framesDroppedCongestionWindow", null)
  }
}