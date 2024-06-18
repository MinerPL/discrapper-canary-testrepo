"use strict";
n.d(t, {
  Z: function() {
    return _
  }
}), n(724458), n(653041);
var i = n(878604);

function r(e) {
  return e / 32768
}

function s(e) {
  var t, n, i, r, s, o, a, l, u, _, d, c, E, I, T, h, S, f, N, A, m;
  let O = (null !== (_ = null == e ? void 0 : e.headerBytes) && void 0 !== _ ? _ : 0) + (null !== (d = null == e ? void 0 : e.payloadBytes) && void 0 !== d ? d : 0) + (null !== (c = null == e ? void 0 : e.paddingBytes) && void 0 !== c ? c : 0);
  return (null !== (E = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.headerBytes) && void 0 !== E ? E : 0) + (null !== (I = null == e ? void 0 : null === (n = e.fec) || void 0 === n ? void 0 : n.payloadBytes) && void 0 !== I ? I : 0) + (null !== (T = null == e ? void 0 : null === (i = e.fec) || void 0 === i ? void 0 : i.paddingBytes) && void 0 !== T ? T : 0) + (null !== (h = null == e ? void 0 : null === (r = e.retransmitted) || void 0 === r ? void 0 : r.headerBytes) && void 0 !== h ? h : 0) + (null !== (S = null == e ? void 0 : null === (s = e.retransmitted) || void 0 === s ? void 0 : s.payloadBytes) && void 0 !== S ? S : 0) + (null !== (f = null == e ? void 0 : null === (o = e.retransmitted) || void 0 === o ? void 0 : o.paddingBytes) && void 0 !== f ? f : 0) + (null !== (N = null == e ? void 0 : null === (a = e.transmitted) || void 0 === a ? void 0 : a.headerBytes) && void 0 !== N ? N : 0) + (null !== (A = null == e ? void 0 : null === (l = e.transmitted) || void 0 === l ? void 0 : l.payloadBytes) && void 0 !== A ? A : 0) + (null !== (m = null == e ? void 0 : null === (u = e.transmitted) || void 0 === u ? void 0 : u.paddingBytes) && void 0 !== m ? m : 0) + O
}

function o(e) {
  var t, n, i, r, s, o, a;
  let l = null !== (r = null == e ? void 0 : e.packets) && void 0 !== r ? r : 0;
  return (null !== (s = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.packets) && void 0 !== s ? s : 0) + (null !== (o = null == e ? void 0 : null === (n = e.retransmitted) || void 0 === n ? void 0 : n.packets) && void 0 !== o ? o : 0) + (null !== (a = null == e ? void 0 : null === (i = e.transmitted) || void 0 === i ? void 0 : i.packets) && void 0 !== a ? a : 0) + l
}

function a(e) {
  let t = {};
  for (let i in e) {
    var n;
    t[i] = null != (n = e[i]) ? {
      last: Math.round(1e3 * n.last),
      mean: Math.round(1e3 * n.mean),
      p75: Math.round(1e3 * n.p75),
      p95: Math.round(1e3 * n.p95),
      p99: Math.round(1e3 * n.p99),
      max: Math.round(1e3 * n.max)
    } : null
  }
  return t
}

function l(e, t) {
  var n, r, a, l, u, _, d, c, E, I, T, h, S, f, N, A, m, O, R, C, p, g, L, v;
  let D = e.substreams.find(e => !e.isRTX && !e.isFlexFEC);
  if (null == D) return;
  let M = e.substreams.reduce((e, t) => e + s(t.rtpStats), 0),
    P = e.substreams.reduce((e, t) => e + o(t.rtpStats), 0);
  return {
    type: "video",
    ssrc: D.ssrc,
    sinkWant: (0, i.f)(t, D.ssrc, !0),
    sinkWantAsInt: (0, i.F)(t, D.ssrc),
    codec: {
      id: e.codecPayloadType,
      name: e.codecName
    },
    keyFrameInterval: e.keyFrameInterval,
    bytesSent: M,
    packetsSent: P,
    packetsLost: null !== (S = null === (n = D.rtcpStats) || void 0 === n ? void 0 : n.packetsLost) && void 0 !== S ? S : 0,
    fractionLost: null !== (f = null === (r = D.rtcpStats) || void 0 === r ? void 0 : r.fractionLost) && void 0 !== f ? f : 0,
    bitrate: e.mediaBitrate,
    bitrateTarget: e.targetMediaBitrate,
    encoderImplementationName: e.encoderImplementationName,
    encodeUsage: e.encodeUsage,
    averageEncodeTime: e.avgEncodeTime,
    resolution: {
      height: D.height,
      width: D.width
    },
    framesSent: D.frameCounts.keyFrames + D.frameCounts.deltaFrames,
    keyFramesEncoded: D.frameCounts.keyFrames,
    framesEncoded: e.framesEncoded,
    frameRateInput: e.inputFrameRate,
    frameRateEncode: e.encodeFrameRate,
    firCount: null !== (N = null === (a = D.rtcpStats) || void 0 === a ? void 0 : a.firPackets) && void 0 !== N ? N : 0,
    nackCount: null !== (A = null === (l = D.rtcpStats) || void 0 === l ? void 0 : l.nackPackets) && void 0 !== A ? A : 0,
    pliCount: null !== (m = null === (u = D.rtcpStats) || void 0 === u ? void 0 : u.pliPackets) && void 0 !== m ? m : 0,
    qpSum: e.qpSum,
    bandwidthLimitedResolution: e.bwLimitedResolution,
    framesDroppedRateLimiter: e.framesDroppedRateLimiter,
    framesDroppedEncoderQueue: e.framesDroppedEncoderQueue,
    framesDroppedCongestionWindow: e.framesDroppedCongestionWindow,
    cpuLimitedResolution: e.cpuLimitedResolution,
    encoderQualityVmaf: null !== (O = null === (_ = D.encoderQualityStats) || void 0 === _ ? void 0 : _.imageQualityVmaf_v061) && void 0 !== O ? O : void 0,
    encoderQualityPsnr: null !== (R = null === (d = D.encoderQualityStats) || void 0 === d ? void 0 : d.imageQualityWebrtcPsnrDb) && void 0 !== R ? R : void 0,
    qualityDecodeErrors: null !== (C = null === (c = D.encoderQualityStats) || void 0 === c ? void 0 : c.decodeErrors) && void 0 !== C ? C : void 0,
    qualityDecoderReboots: null !== (p = null === (E = D.encoderQualityStats) || void 0 === E ? void 0 : E.decoderReboots) && void 0 !== p ? p : void 0,
    qualityScoreErrors: null !== (g = null === (I = D.encoderQualityStats) || void 0 === I ? void 0 : I.scoreErrors) && void 0 !== g ? g : void 0,
    qualityFrameDrops: null !== (L = null === (T = D.encoderQualityStats) || void 0 === T ? void 0 : T.frameDrops) && void 0 !== L ? L : void 0,
    qualitySizeMismatches: null !== (v = null === (h = D.encoderQualityStats) || void 0 === h ? void 0 : h.sizeMismatches) && void 0 !== v ? v : void 0,
    filter: e.filter,
    passthroughCount: e.passthroughCount,
    encryptSuccessCount: e.encryptSuccessCount,
    encryptFailureCount: e.encryptFailureCount,
    encryptDuration: e.encryptDuration,
    encryptAttempts: e.encryptAttempts,
    encryptMaxAttempts: e.encryptMaxAttempts,
    hqSimulcastStreamEncoded: e.hqSimulcastStreamEncoded,
    lqSimulcastStreamEncoded: e.lqSimulcastStreamEncoded
  }
}

function u(e, t, n, r) {
  var l, u;
  let _ = s(e.rtpStats),
    d = o(e.rtpStats);
  return {
    type: "video",
    ssrc: e.ssrc,
    sinkWant: (0, i.f)(t, e.ssrc, !0),
    sinkWantAsInt: (0, i.F)(t, e.ssrc),
    sinkWantLocal: (0, i.f)(n, e.ssrc, !0),
    codec: {
      id: e.codecPayloadType,
      name: e.codecName
    },
    bytesReceived: _,
    packetsReceived: d,
    packetsLost: null !== (l = e.rtpStats.packetsLost) && void 0 !== l ? l : e.rtcpStats.packetsLost,
    fractionLost: e.rtcpStats.fractionLost,
    bitrate: e.totalBitrate,
    jitterBuffer: e.jitterBuffer,
    currentDelay: e.currentDelay,
    targetDelay: e.targetDelay,
    minPlayoutDelay: e.minPlayoutDelay,
    renderDelay: e.renderDelay,
    averageDecodeTime: e.decode,
    resolution: {
      height: e.height,
      width: e.width
    },
    decoderImplementationName: e.decoderImplementationName,
    framesDecoded: e.framesDecoded,
    framesDropped: e.framesDropped,
    framesDecodeErrors: e.framesDecodeErrors,
    framesReceived: e.frameCounts.keyFrames + e.frameCounts.deltaFrames,
    networkFramesDropped: null !== (u = e.networkFramesDropped) && void 0 !== u ? u : 0,
    keyFramesDecoded: e.frameCounts.keyFrames,
    frameRateDecode: e.decodeFrameRate,
    frameRateNetwork: e.networkFrameRate,
    frameRateRender: e.renderFrameRate,
    firCount: e.rtcpStats.firPackets,
    nackCount: e.rtcpStats.nackPackets,
    pliCount: e.rtcpStats.pliPackets,
    qpSum: e.qpSum,
    freezeCount: e.freezeCount,
    pauseCount: e.pauseCount,
    totalFreezesDuration: e.totalFreezesDuration,
    totalPausesDuration: e.totalPausesDuration,
    totalFramesDuration: e.totalFramesDuration,
    sumOfSquaredFramesDurations: e.sumOfSquaredFramesDurations,
    passthroughCount: e.passthroughCount,
    decryptSuccessCount: e.decryptSuccessCount,
    decryptFailureCount: e.decryptFailureCount,
    decryptDuration: e.decryptDuration,
    decryptAttempts: e.decryptAttempts,
    ...null != r ? a({
      videoJitterBuffer: r.videoJitterBuffer,
      videoJitterDelay: r.videoJitterDelay,
      videoJitterTarget: r.videoJitterTarget
    }) : {}
  }
}

function _(e, t, n, r) {
  var o, _, d, c, E;
  let I = null,
    T = null,
    h = "string" == typeof t ? JSON.parse(t) : t,
    S = [];
  if (null != h.outbound) {
    let {
      audio: e,
      video: t,
      videos: r
    } = h.outbound;
    if (null != e) T = (null != T ? T : 0) + e.bytesSent, S.push({
      type: "audio",
      ssrc: e.ssrc,
      sinkWant: (0, i.f)(n, e.ssrc, !1),
      sinkWantAsInt: (0, i.F)(n, e.ssrc),
      codec: {
        id: e.codecPayloadType,
        name: e.codecName
      },
      bytesSent: e.bytesSent,
      packetsSent: e.packetsSent,
      packetsLost: Math.max(0, e.packetsLost),
      fractionLost: 100 * e.fractionLost,
      audioLevel: e.audioLevel / 32768,
      audioDetected: e.speaking,
      framesCaptured: e.framesCaptured,
      framesRendered: e.framesRendered,
      noiseCancellerFrames: e.noiseCancellerFrames,
      noiseCancellerProcessTime: e.noiseCancellerProcessTime,
      voiceActivityDetectorProcessTime: e.voiceActivityDetectorProcessTime,
      passthroughCount: e.passthroughCount,
      encryptSuccessCount: e.encryptSuccessCount,
      encryptFailureCount: e.encryptFailureCount,
      encryptDuration: e.encryptDuration,
      encryptAttempts: e.encryptAttempts,
      encryptMaxAttempts: e.encryptMaxAttempts
    });
    if (null != r) r.forEach(e => {
      let t = l(e, n);
      null != t && (T = (null != T ? T : 0) + t.bytesSent, S.push(t))
    });
    else if (null != t) {
      let e = l(t, n);
      null != e && (T = (null != T ? T : 0) + e.bytesSent, S.push(e))
    }
  }
  let f = {};
  null != h.inbound && h.inbound.forEach(e => {
    let {
      id: t,
      audio: o,
      video: l,
      videos: _,
      playout: d
    } = e;
    if (f[t] = [], null != o) I = (null != I ? I : 0) + o.bytesReceived, f[t].push({
      type: "audio",
      ssrc: o.ssrc,
      sinkWant: (0, i.f)(n, o.ssrc, !1),
      sinkWantAsInt: (0, i.F)(n, o.ssrc),
      codec: {
        id: o.codecPayloadType,
        name: o.codecName
      },
      bytesReceived: o.bytesReceived,
      packetsReceived: o.packetsReceived,
      packetsLost: o.packetsLost,
      fractionLost: 100 * o.fractionLost,
      fecPacketsReceived: o.fecPacketsReceived,
      fecPacketsDiscarded: o.fecPacketsDiscarded,
      audioLevel: o.audioLevel / 32768,
      audioDetected: o.speaking,
      jitter: o.jitter,
      jitterBuffer: o.jitterBuffer,
      jitterBufferPreferred: o.jitterBufferPreferred,
      decodingCNG: o.decodingCNG,
      decodingMutedOutput: o.decodingMutedOutput,
      decodingNormal: o.decodingNormal,
      decodingPLC: o.decodingPLC,
      decodingPLCCNG: o.decodingPLCCNG,
      nackCount: o.nackCount,
      accelerateRate: 100 * o.accelerateRate,
      expandRate: 100 * o.expandRate,
      preemptiveExpandRate: 100 * o.preemptiveExpandRate,
      speechExpandRate: 100 * o.speechExpandRate,
      secondaryDecodedRate: 100 * o.secondaryDecodedRate,
      opSilence: o.opSilence,
      opNormal: o.opNormal,
      opMerge: o.opMerge,
      opExpand: o.opExpand,
      opAccelerate: o.opAccelerate,
      opPreemptiveExpand: o.opPreemptiveExpand,
      opCNG: o.opCNG,
      delayEstimate: o.delayEstimate,
      passthroughCount: o.passthroughCount,
      decryptSuccessCount: o.decryptSuccessCount,
      decryptFailureCount: o.decryptFailureCount,
      decryptDuration: o.decryptDuration,
      decryptAttempts: o.decryptAttempts,
      ...null != d ? a({
        audioJitterBuffer: d.audioJitterBuffer,
        audioJitterDelay: d.audioJitterDelay,
        audioJitterTarget: d.audioJitterTarget,
        audioPlayoutUnderruns: d.audioPlayoutUnderruns,
        relativeReceptionDelay: d.relativeReceptionDelay,
        relativePlayoutDelay: d.relativePlayoutDelay
      }) : {}
    });
    if (null != _) _.forEach(e => {
      let i = u(e, n, r, d);
      if (null != i) {
        let n = s(e.rtpStats);
        I = (null != I ? I : 0) + n, f[t].push(i)
      }
    });
    else if (null != l) {
      let e = u(l, n, r, d);
      if (null != e) {
        let n = s(l.rtpStats);
        I = (null != I ? I : 0) + n, f[t].push(e)
      }
    }
  });
  let {
    transport: N,
    clips: A
  } = h, m = {};
  null != N && (m.availableOutgoingBitrate = N.sendBandwidth, m.ping = N.rtt, m.decryptionFailures = N.decryptionFailures, null != N.routingFailures && (m.routingFailures = N.routingFailures), m.localAddress = N.localAddress, m.pacerDelay = N.pacerDelay, null != N.receiverReports && (m.receiverReports = N.receiverReports), m.receiverBitrateEstimate = N.receiverBitrateEstimate, m.outboundBitrateEstimate = N.outboundBitrateEstimate, m.inboundBitrateEstimate = null !== (o = N.inboundBitrateEstimate) && void 0 !== o ? o : 0, m.packetsReceived = N.packetsReceived, m.packetsSent = N.packetsSent, null != N.secureFramesProtocolVersion && (m.secureFramesProtocolVersion = N.secureFramesProtocolVersion)), ((null == N ? void 0 : N.bytesReceived) != null || null != I && !Number.isNaN(I)) && (m.bytesReceived = null !== (d = null !== (_ = null == N ? void 0 : N.bytesReceived) && void 0 !== _ ? _ : I) && void 0 !== d ? d : void 0), ((null == N ? void 0 : N.bytesSent) != null || null != T && !Number.isNaN(T)) && (m.bytesSent = null !== (E = null !== (c = null == N ? void 0 : N.bytesSent) && void 0 !== c ? c : T) && void 0 !== E ? E : void 0);
  let {
    screenshare: O,
    camera: R
  } = h;
  return {
    mediaEngineConnectionId: e,
    transport: m,
    screenshare: O,
    camera: null != R ? {
      capturedFramesDropped: R.capturedFramesDropped,
      capturedFramesCount: R.capturedFramesCount,
      capturedFramesMean: R.capturedFramesMean,
      capturedFramesStdev: R.capturedFramesStdev
    } : null,
    clips: A,
    rtp: {
      inbound: f,
      outbound: S
    }
  }
}