"use strict";
n.r(t), n.d(t, {
  CodecTypes: function() {
    return i
  },
  Encoders: function() {
    return s
  },
  VideoStoppedReasons: function() {
    return a
  },
  parseEncoder: function() {
    return S
  },
  RawVideoStats: function() {
    return I
  },
  InboundStats: function() {
    return C
  },
  OutboundStats: function() {
    return A
  }
}), n("222007"), n("424973");
var i, s, r, a, o, l, u, d, c = n("398183"),
  f = n("872507"),
  _ = n("226445");
let h = [0, 5e5, 1e6, 15e5, 2e6, 3e6, 4e6, 5e6, 6e6, 7e6, 8e6],
  g = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  m = [720, 480, 360],
  E = ["framesCodec", "framesNetwork", "packets", "packetsLost", "framesDropped", "framesCodecError", "bytes", "nackCount", "pliCount", "qpSum", "freezeCount", "pauseCount", "totalFreezesDuration", "totalPausesDuration", "totalFramesDuration", "keyframes"];
(o = i || (i = {})).H264 = "H264", o.H265 = "H265", o.VP8 = "VP8", o.VP9 = "VP9", o.AV1 = "AV1", o.UNKNOWN = "UNKNOWN", (l = s || (s = {})).NVIDIA_CUDA = "nvidia_cuda", l.NVIDIA_DIRECT_3D = "nvidia_direct_3d", l.OPENH264 = "openh264", l.VIDEOTOOLBOX = "videotoolbox", l.AMD_DIRECT_3D = "amd_direct_3d", l.INTEL = "intel", l.INTEL_DIRECT_3D = "intel_direct_3d", l.VP8_LIBVPX = "vp8_libvpx", l.UNCATEGORIZED = "uncategorized", l.UNKNOWN = "unknown", (u = r || (r = {})).NVIDIA_DIRECT_3D = "nvidia_direct_3d", u.OPENH264 = "openh264", u.VIDEOTOOLBOX = "videotoolbox", u.AMD_DIRECT_3D = "amd_direct_3d", u.INTEL = "intel", u.INTEL_DIRECT_3D = "intel_direct_3d", u.VP8_LIBVPX = "vp8_libvpx", u.UNCATEGORIZED = "uncategorized", u.UNKNOWN = "unknown";
let p = Object.freeze({
    "nvidia: cuda": "nvidia_cuda",
    "nvidia: direct3d": "nvidia_direct_3d",
    "amd: direct3d": "amd_direct_3d",
    "intel: direct3d": "intel_direct_3d",
    intel: "intel",
    VideoToolbox: "videotoolbox",
    OpenH264: "openh264",
    libvpx: "vp8_libvpx"
  }),
  v = Object.freeze({
    "nvidia: direct3d": "nvidia_direct_3d",
    "amd: direct3d": "amd_direct_3d",
    "intel: direct3d": "intel_direct_3d",
    intel: "intel",
    VideoToolbox: "videotoolbox",
    OpenH264: "openh264",
    libvpx: "vp8_libvpx"
  });

function S(e) {
  if (null == e) return "unknown";
  for (let t of Object.keys(p))
    if (e.includes(t)) return p[t];
  return "uncategorized"
}(d = a || (a = {}))[d.None = 0] = "None", d[d.ClientSideDisableVideo = 1] = "ClientSideDisableVideo", d[d.SenderStopped = 2] = "SenderStopped";

function T(e) {
  if (null == e) return "UNKNOWN";
  if ("H264" === (e = e.toUpperCase())) return "H264";
  if ("H265" === e) return "H265";
  if ("VP8" === e) return "VP8";
  else if ("VP9" === e) return "VP9";
  else if ("AV1" === e || "AV1X" === e) return "AV1";
  else return "UNKNOWN"
}
class I {
  static parseInboundStats(e, t) {
    var n, i;
    let s = new I;
    return null == e ? s : (s.bytes = e.bytesReceived, s.framesCodec = e.framesDecoded, s.framesCodecError = null !== (n = e.framesDecodeErrors) && void 0 !== n ? n : null, s.framesNetwork = e.framesReceived, s.packets = e.packetsReceived, s.packetsLost = e.packetsLost, s.framesDropped = e.framesDropped, s.resolution = null != e.resolution ? e.resolution.height : 0, s.minorResolution = null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0, s.majorResolution = null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0, s.timestamp = t, s.nackCount = e.nackCount, s.pliCount = e.pliCount, s.decoder = function(e) {
      if (null == e) return "unknown";
      for (let t of Object.keys(v))
        if (e.includes(t)) return v[t];
      return "uncategorized"
    }(e.decoderImplementationName), s.codecType = T(e.codec.name), s.qpSum = 0, s.freezeCount = e.freezeCount, s.pauseCount = e.pauseCount, s.totalFreezesDuration = e.totalFreezesDuration, s.totalPausesDuration = e.totalPausesDuration, s.totalFramesDuration = e.totalFramesDuration, s.keyframes = null !== (i = e.keyFramesDecoded) && void 0 !== i ? i : null, s)
  }
  static parseOutboundStats(e, t) {
    var n, i, s, r, a, o, l, u, d;
    let c = new I;
    return null == e ? c : {
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
      encoder: S(e.encoderImplementationName),
      decoder: null,
      codecType: T(e.codec.name),
      nackCount: e.nackCount,
      pliCount: e.pliCount,
      qpSum: e.qpSum,
      freezeCount: 0,
      pauseCount: 0,
      totalFreezesDuration: 0,
      totalPausesDuration: 0,
      totalFramesDuration: 0,
      outboundSinkWant: null !== (s = e.sinkWantAsInt) && void 0 !== s ? s : null,
      vmafScore: null !== (r = e.encoderQualityVmaf) && void 0 !== r ? r : null,
      psnrDb: null !== (a = e.encoderQualityPsnr) && void 0 !== a ? a : null,
      keyframes: null !== (o = e.keyFramesEncoded) && void 0 !== o ? o : null,
      framesDroppedRateLimiter: null !== (l = e.framesDroppedRateLimiter) && void 0 !== l ? l : null,
      framesDroppedEncoderQueue: null !== (u = e.framesDroppedEncoderQueue) && void 0 !== u ? u : null,
      framesDroppedCongestionWindow: null !== (d = e.framesDroppedCongestionWindow) && void 0 !== d ? d : null
    }
  }
  constructor() {
    this.bytes = 0, this.framesCodec = 0, this.framesCodecError = null, this.framesNetwork = 0, this.resolution = 0, this.minorResolution = 0, this.majorResolution = 0, this.timestamp = 0, this.packets = 0, this.packetsLost = 0, this.framesDropped = 0, this.nackCount = 0, this.pliCount = 0, this.encoder = null, this.decoder = null, this.codecType = null, this.qpSum = 0, this.freezeCount = 0, this.pauseCount = 0, this.totalFreezesDuration = 0, this.totalPausesDuration = 0, this.totalFramesDuration = 0, this.vmafScore = null, this.psnrDb = null, this.outboundSinkWant = null, this.keyframes = null, this.framesDroppedRateLimiter = null, this.framesDroppedEncoderQueue = null, this.framesDroppedCongestionWindow = null
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
    for (let i of E) {
      var n;
      let s = e[i];
      if (null === s) continue;
      let r = null !== (n = t[i]) && void 0 !== n ? n : 0;
      r > s ? this.aggregatedProperties[i] += s : this.aggregatedProperties[i] += s - r
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
      framesCodec: s,
      timestamp: r,
      resolution: a,
      minorResolution: o,
      majorResolution: l,
      encoder: u,
      decoder: d,
      codecType: c
    } = t, {
      timestamp: f
    } = n, _ = (r - f) / 1e3;
    if (this.intervalTotal += _, this.resolutionTotal += a * _, this.minorResolutionTotal += o * _, this.majorResolutionTotal += l * _, null != u && null != c && "encoderBuckets" in this && (this.encoderBuckets[u] += _, this.codecBuckets[c] += _, null != t.codecType && "UNKNOWN" !== t.codecType && (this.encoderCodec = t.codecType), null != e.vmafScore && e.vmafScore >= 0 && (this.vmafScoreNum += 1, this.vmafScoreSum += e.vmafScore, this.vmafHistogram.addSample(e.vmafScore)), null != e.psnrDb && (this.psnrDbNum += 1, this.psnrDbSum += e.psnrDb, this.psnrHistogram.addSample(e.psnrDb)), null != e.outboundSinkWant && 0 !== e.outboundSinkWant && (this.outboundSinkWantNum += 1, this.outboundSinkWantSum += e.outboundSinkWant)), null != d && null != c && "decoderBuckets" in this && (this.decoderBuckets[d] += _, this.codecBuckets[c] += _, null != t.codecType && "UNKNOWN" !== t.codecType && (this.decoderCodec = t.codecType)), this.statsWindow.length < 6) return;
    let {
      bytes: E,
      framesCodec: p,
      timestamp: v
    } = this.statsWindow[this.statsWindow.length - 3];
    m.forEach(e => {
      a <= e && (this.resolutionBuckets[e] += _)
    });
    let S = (r - v) / 1e3,
      T = (i - E) * 8 / S,
      I = (s - p) / S;
    h.forEach(e => {
      T <= e && (this.bitrateBuckets[e] += _)
    }), g.forEach(e => {
      I <= e && (this.fpsBuckets[e] += _)
    }), this.resolutionHistogram.addSample(a), this.bitrateHistogram.addSample(T), this.fpsHistogram.addSample(I), this.statsWindow.shift()
  }
  addSystemResources() {
    let e = f.default.getCurrentCPUUsagePercent(),
      t = f.default.getCurrentMemoryUsageKB();
    null != e && this.cpuHistogram.addSample(e), null != t && this.memoryHistogram.addSample(t)
  }
  getCodecsUsed() {
    let e = new Set;
    for (let [t, n] of Object.entries(this.codecBuckets)) n > 0 && e.add(t);
    return e
  }
  constructor(e) {
    this.decoderBuckets = {
      nvidia_direct_3d: 0,
      openh264: 0,
      videotoolbox: 0,
      amd_direct_3d: 0,
      intel: 0,
      intel_direct_3d: 0,
      vp8_libvpx: 0,
      uncategorized: 0,
      unknown: 0
    }, this.codecBuckets = {
      H264: 0,
      H265: 0,
      VP8: 0,
      VP9: 0,
      AV1: 0,
      UNKNOWN: 0
    }, this.statsWindow = [], this.cpuHistogram = new _.Histogram, this.memoryHistogram = new _.Histogram, this.fpsHistogram = new _.Histogram, this.bitrateHistogram = new _.Histogram, this.resolutionHistogram = new _.Histogram, this.decoderCodec = "UNKNOWN", this.aggregatedProperties = {
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
      keyframes: 0
    }, this.aggregationDuration = 0, this.bitrateBuckets = {}, this.fpsBuckets = {}, this.resolutionBuckets = {}, this.resolutionTotal = 0, this.minorResolutionTotal = 0, this.majorResolutionTotal = 0, this.intervalTotal = 0, this.videoStoppedReason = 0, this.startTime = e.now(), this.videoStoppedWatch = new c.StopWatch(e), h.forEach(e => {
      this.bitrateBuckets[e] = 0
    }), g.forEach(e => {
      this.fpsBuckets[e] = 0
    }), m.forEach(e => {
      this.resolutionBuckets[e] = 0
    })
  }
}
class A extends C {
  appendTargetRates(e, t, n) {
    if (this.statsWindow.length < 2) return;
    e = null != e ? e : 0, t = null != t ? t : 0, n = null != n ? n : 0;
    let i = (this.statsWindow[this.statsWindow.length - 1].timestamp - this.statsWindow[this.statsWindow.length - 2].timestamp) / 1e3;
    this.targetFrames = this.targetFrames + e * i, this.targetBytesNetwork = this.targetBytesNetwork + t / 8 * i, this.targetBytesMax = this.targetBytesMax + n / 8 * i, this.targetBitrateHistogram.addSample(t)
  }
  constructor(...e) {
    super(...e), this.encoderBuckets = {
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
    }, this.encoderCodec = "UNKNOWN", this.targetFrames = 0, this.targetBytesMax = 0, this.targetBytesNetwork = 0, this.targetBitrateHistogram = new _.Histogram, this.averageEncodeTime = 0, this.vmafScoreSum = 0, this.vmafScoreNum = 0, this.vmafHistogram = new _.Histogram, this.psnrDbSum = 0, this.psnrDbNum = 0, this.psnrHistogram = new _.Histogram, this.outboundSinkWantSum = 0, this.outboundSinkWantNum = 0, this.framesDroppedRateLimiter = null, this.framesDroppedEncoderQueue = null, this.framesDroppedCongestionWindow = null
  }
}