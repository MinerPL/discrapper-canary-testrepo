"use strict";
r.r(t), r.d(t, {
  Item: function() {
    return R
  },
  hidden: function() {
    return S
  }
}), r("47120"), r("653041"), r("571269"), r("298267");
var a = r("735250"),
  n = r("470079"),
  i = r("119516"),
  s = r.n(i),
  l = r("226961"),
  o = r("706619"),
  d = r("206314");
let u = {
  accelerateRate: "Accelerate Rate",
  audioDetected: "Audio Detected",
  audioLevel: "Audio Level",
  availableOutgoingBitrate: "Available Outgoing Bitrate",
  averageDecodeTime: "Average Decode Time",
  averageEncodeTime: "Average Encode Time",
  bandwidthLimitedResolution: "Bandwidth Limited Resolution",
  bitrate: "Bitrate",
  bitrateTarget: "Bitrate (Target)",
  bytesReceived: "Bytes Received",
  bytesSent: "Bytes Sent",
  capturedFramesCount: "Captured Frames per Second",
  capturedFramesDropped: "Captured Frames Dropped",
  capturedFramesMean: "Captured Frames Mean (ms)",
  capturedFramesStdev: "Captured Frames Standard Deviation (ms)",
  codec: "Codec",
  cpuLimitedResolution: "CPU Limited Resolution",
  currentDelay: "Current Delay",
  decoderImplementationName: "Decoder",
  decodingCNG: "Decoding CNG",
  decodingMutedOutput: "Decoding Muted Output",
  decodingNormal: "Decoding Normal",
  decodingPLC: "Decoding PLC",
  decodingPLCCNG: "Decoding PLC CNG",
  decryptionFailures: "Decryption Failures",
  decryptFailureCount: "Decrypt Failures",
  decryptSuccessCount: "Decrypt Successes",
  delayEstimate: "Delay Estimate",
  encoderImplementationName: "Encoder",
  encoderQualityPsnr: "Encoder PSNR (dB)",
  encoderQualityVmaf: "Encoder VMAF",
  encodeUsage: "Encode Usage",
  encryptFailureCount: "Encrypt Failures",
  encryptSuccessCount: "Encrypt Successes",
  expandRate: "Expand Rate",
  filter: "Filter",
  firCount: "FIR",
  fractionLost: "Packet Loss",
  frameRateDecode: "Frame Rate (Decode)",
  frameRateEncode: "Frame Rate (Encode)",
  frameRateInput: "Frame Rate (Input)",
  frameRateNetwork: "Frame Rate (Network)",
  frameRateRender: "Frame Rate (Render)",
  framesDecoded: "Frames Decoded",
  framesDecodeErrors: "Decoder Error Count",
  framesDropped: "Frames Dropped",
  framesDroppedCongestionWindow: "Frames Dropped by Congestion Window",
  framesDroppedEncoderQueue: "Frames Dropped by Encoder Queue",
  framesDroppedRateLimiter: "Frames Dropped by Bitrate Limiter",
  framesEncoded: "Frames Encoded",
  framesReceived: "Frames Received",
  framesSent: "Frames Sent",
  freezeCount: "Freeze Count",
  hostname: "Hostname",
  hybridCaptureMethodSwitches: "Hybrid Capture Method Switches",
  hybridDxgiFrames: "Hybrid DXGI Frames",
  hybridGdiFrames: "Hybrid GDI Frames",
  hybridGraphicsCaptureFrames: "Hybrid Graphics Capture Frames",
  hybridVideohookFrames: "Hybrid Videohook Frames",
  inboundBitrateEstimate: "Inbound Bitrate Estimate",
  jitter: "Jitter",
  jitterBuffer: "Jitter Buffer",
  jitterBufferPreferred: "Jitter Buffer (Preferred)",
  keyFrameInterval: "Key Frame Interval",
  keyFramesDecoded: "Key Frames Decoded",
  keyFramesEncoded: "Key Frames Encoded",
  localAddress: "Local Address",
  minPlayoutDelay: "Minimum Playout Delay",
  nackCount: "NACK",
  networkFramesDropped: "Frames Dropped By Network",
  opAccelerate: "Accelerated Frames",
  opCNG: "CNG Frames",
  opExpand: "Expand Frames",
  opMerge: "Merge Frames",
  opNormal: "Normal Frames",
  opPreemptiveExpand: "Preemptive Expand Frames",
  opSilence: "Silent Frames",
  outboundBitrateEstimate: "Outbound Bitrate Estimate",
  pacerDelay: "Pacer Delay",
  packetsLost: "Packets Lost",
  packetsReceived: "Packets Received",
  packetsSent: "Packets Sent",
  passthroughCount: "Passthrough",
  pauseCount: "Pause Count",
  ping: "Ping",
  pliCount: "PLI",
  preemptiveExpandRate: "Pre-emptive Expand Rate",
  qpSum: "QP Sum",
  qualityDecodeErrors: "Encoder Quality Decode Errors",
  qualityDecoderReboots: "Encoder Quality Decoder Reboots",
  qualityScoreErrors: "Encoder Quality Score Errors",
  qualityFrameDrops: "Encoder Quality Frame Drops",
  qualitySizeMismatches: "Encoder Quality Size Mismatches",
  quartzFrames: "Quartz Frames",
  receiverBitrateEstimate: "Receiver Bitrate Estimate (REMB)",
  relativePlayoutDelay: "Relative Playout Delay",
  relativeReceptionDelay: "Relative Reception Delay",
  renderDelay: "Render Delay",
  resolution: "Resolution",
  routingFailures: "Routing Failures",
  screenCaptureKitFrames: "ScreenCaptureKit frames",
  screenshareFrames: "WebRTC Frames",
  secondaryDecodedRate: "Secondary Decode Rate",
  secureFramesProtocolVersion: "SF Protocol",
  sinkWant: "Sink Quality Level (Remote)",
  sinkWantLocal: "Sink Quality Level (Local)",
  speechExpandRate: "Speech Expand Rate",
  ssrc: "SSRC",
  targetDelay: "Target Delay",
  totalFramesDuration: "Frames Duration (ms)",
  totalFreezesDuration: "Freezes Duration (ms)",
  totalPausesDuration: "Pauses Duration (ms)",
  videohookBackend: "Videohook Backend",
  videohookFrames: "Videohook Frames"
};

function c(e) {
  return "".concat((e / 1e3).toFixed(2), " Kbps")
}

function m(e) {
  return s().filesize(e)
}

function f(e) {
  return e
}

function p(e) {
  return "".concat(e, " ms")
}

function h(e) {
  return "".concat(e.toFixed(0), "%")
}

function g(e) {
  return e ? "Yes" : "No"
}

function y(e) {
  return "".concat(Math.max(e, 0).toFixed(2), " dB")
}

function C(e) {
  let {
    last: t
  } = e;
  return "".concat(t, " ms")
}
let S = {
    audioJitterBuffer: !0,
    audioJitterDelay: !0,
    audioJitterTarget: !0,
    audioPlayoutUnderruns: !0,
    fractionLost: !0,
    framesCaptured: !0,
    framesRendered: !0,
    noiseCancellerFrames: !0,
    noiseCancellerProcessTime: !0,
    sinkWantAsInt: !0,
    sumOfSquaredFramesDurations: !0,
    timestamp: !0,
    type: !0,
    videoJitterBuffer: !0,
    videoJitterDelay: !0,
    videoJitterTarget: !0,
    voiceActivityDetectorProcessTime: !0,
    decryptAttempts: !0,
    decryptDuration: !0,
    encryptAttempts: !0,
    encryptDuration: !0,
    encryptMaxAttempts: !0
  },
  D = {
    accelerateRate: h,
    audioDetected: g,
    audioLevel: y,
    availableOutgoingBitrate: c,
    averageDecodeTime: p,
    averageEncodeTime: p,
    bandwidthLimitedResolution: g,
    bitrate: c,
    bitrateTarget: c,
    bytesReceived: m,
    bytesSent: m,
    codec: function(e) {
      let {
        id: t,
        name: r
      } = e;
      return r = null != (r = "" === r ? "unknown" : r) ? r : "unknown", "".concat(r[0].toUpperCase()).concat(r.slice(1), " (").concat(t, ")")
    },
    cpuLimitedResolution: g,
    currentDelay: p,
    decoderImplementationName: f,
    delayEstimate: p,
    encoderImplementationName: f,
    encoderQualityPsnr: y,
    encoderQualityVmaf: e => "".concat(e.toFixed(2)),
    encodeUsage: h,
    expandRate: h,
    filter: f,
    fractionLost: h,
    inboundBitrateEstimate: c,
    jitter: p,
    jitterBuffer: p,
    jitterBufferPreferred: p,
    keyFrameInterval: p,
    minPlayoutDelay: p,
    outboundBitrateEstimate: c,
    pacerDelay: p,
    ping: p,
    preemptiveExpandRate: h,
    receiverBitrateEstimate: c,
    relativePlayoutDelay: C,
    relativeReceptionDelay: C,
    renderDelay: p,
    resolution: e => {
      let {
        width: t,
        height: r
      } = e;
      return "".concat(t, "x").concat(r)
    },
    secondaryDecodedRate: h,
    secureFramesProtocolVersion: function(e) {
      return e >= 100 ? "MLS Test (".concat(e, ")") : e > 0 ? "Static Key Test (".concat(e, ")") : "Disabled"
    },
    speechExpandRate: h,
    targetDelay: p,
    videohookBackend: function(e) {
      let t = ["N/A", "Direct3D 9", "Direct3D 10", "Direct3D 11", "Direct3D 12", "OpenGL", "Vulkan"];
      return e < t.length ? t[e] : "Unknown"
    }
  },
  E = e => e,
  v = e => {
    let [t] = n.useState([]);
    return t.push({
      value: e.value,
      time: Date.now()
    }), t.length > 600 && t.shift(), (0, a.jsx)(o.default, {
      dataPoints: t,
      width: e.width,
      height: e.height
    })
  };

function R(e) {
  var t, r, n, i;
  let {
    label: s,
    value: c,
    section: m
  } = e, f = null !== (r = D[s]) && void 0 !== r ? r : E;
  let p = l.graphs[s] && (Array.isArray(i = c) && i.length > 0 && "number" == typeof i[0].value ? (0, a.jsx)(o.default, {
      dataPoints: i,
      width: 300,
      height: 100
    }) : "number" == typeof i ? (0, a.jsx)(v, {
      value: i,
      width: 300,
      height: 100
    }) : void 0),
    h = Array.isArray(c) ? null === (t = c.at(-1)) || void 0 === t ? void 0 : t.value : c;
  return (0, a.jsx)(d.default, {
    label: s,
    valueRendered: f(h),
    section: m,
    renderGraph: p,
    children: null !== (n = u[s]) && void 0 !== n ? n : s
  })
}