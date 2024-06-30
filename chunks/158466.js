n.d(t, {
    Z: function () {
        return c;
    }
}), n(724458), n(653041);
var r = n(878604);
function i(e) {
    return e / 32768;
}
function a(e) {
    var t, n, r, i, a, o, s, l, u, c, d, _, E, f, h, p, m, I, T, g, S;
    let A = (null !== (c = null == e ? void 0 : e.headerBytes) && void 0 !== c ? c : 0) + (null !== (d = null == e ? void 0 : e.payloadBytes) && void 0 !== d ? d : 0) + (null !== (_ = null == e ? void 0 : e.paddingBytes) && void 0 !== _ ? _ : 0);
    return (null !== (E = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.headerBytes) && void 0 !== E ? E : 0) + (null !== (f = null == e ? void 0 : null === (n = e.fec) || void 0 === n ? void 0 : n.payloadBytes) && void 0 !== f ? f : 0) + (null !== (h = null == e ? void 0 : null === (r = e.fec) || void 0 === r ? void 0 : r.paddingBytes) && void 0 !== h ? h : 0) + (null !== (p = null == e ? void 0 : null === (i = e.retransmitted) || void 0 === i ? void 0 : i.headerBytes) && void 0 !== p ? p : 0) + (null !== (m = null == e ? void 0 : null === (a = e.retransmitted) || void 0 === a ? void 0 : a.payloadBytes) && void 0 !== m ? m : 0) + (null !== (I = null == e ? void 0 : null === (o = e.retransmitted) || void 0 === o ? void 0 : o.paddingBytes) && void 0 !== I ? I : 0) + (null !== (T = null == e ? void 0 : null === (s = e.transmitted) || void 0 === s ? void 0 : s.headerBytes) && void 0 !== T ? T : 0) + (null !== (g = null == e ? void 0 : null === (l = e.transmitted) || void 0 === l ? void 0 : l.payloadBytes) && void 0 !== g ? g : 0) + (null !== (S = null == e ? void 0 : null === (u = e.transmitted) || void 0 === u ? void 0 : u.paddingBytes) && void 0 !== S ? S : 0) + A;
}
function o(e) {
    var t, n, r, i, a, o, s;
    let l = null !== (i = null == e ? void 0 : e.packets) && void 0 !== i ? i : 0;
    return (null !== (a = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.packets) && void 0 !== a ? a : 0) + (null !== (o = null == e ? void 0 : null === (n = e.retransmitted) || void 0 === n ? void 0 : n.packets) && void 0 !== o ? o : 0) + (null !== (s = null == e ? void 0 : null === (r = e.transmitted) || void 0 === r ? void 0 : r.packets) && void 0 !== s ? s : 0) + l;
}
function s(e) {
    let t = {};
    for (let r in e) {
        var n;
        t[r] = null != (n = e[r]) ? {
            last: Math.round(1000 * n.last),
            mean: Math.round(1000 * n.mean),
            p75: Math.round(1000 * n.p75),
            p95: Math.round(1000 * n.p95),
            p99: Math.round(1000 * n.p99),
            max: Math.round(1000 * n.max)
        } : null;
    }
    return t;
}
function l(e, t) {
    var n, i, s, l, u, c, d, _, E, f, h, p, m, I, T, g, S, A, N, v, O, R, C, y;
    let D = e.substreams.find(e => !e.isRTX && !e.isFlexFEC);
    if (null == D)
        return;
    let L = e.substreams.reduce((e, t) => e + a(t.rtpStats), 0), b = e.substreams.reduce((e, t) => e + o(t.rtpStats), 0);
    return {
        type: 'video',
        ssrc: D.ssrc,
        sinkWant: (0, r.f)(t, D.ssrc, !0),
        sinkWantAsInt: (0, r.F)(t, D.ssrc),
        codec: {
            id: e.codecPayloadType,
            name: e.codecName
        },
        keyFrameInterval: e.keyFrameInterval,
        bytesSent: L,
        packetsSent: b,
        packetsLost: null !== (m = null === (n = D.rtcpStats) || void 0 === n ? void 0 : n.packetsLost) && void 0 !== m ? m : 0,
        fractionLost: null !== (I = null === (i = D.rtcpStats) || void 0 === i ? void 0 : i.fractionLost) && void 0 !== I ? I : 0,
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
        firCount: null !== (T = null === (s = D.rtcpStats) || void 0 === s ? void 0 : s.firPackets) && void 0 !== T ? T : 0,
        nackCount: null !== (g = null === (l = D.rtcpStats) || void 0 === l ? void 0 : l.nackPackets) && void 0 !== g ? g : 0,
        pliCount: null !== (S = null === (u = D.rtcpStats) || void 0 === u ? void 0 : u.pliPackets) && void 0 !== S ? S : 0,
        qpSum: e.qpSum,
        bandwidthLimitedResolution: e.bwLimitedResolution,
        framesDroppedRateLimiter: e.framesDroppedRateLimiter,
        framesDroppedEncoderQueue: e.framesDroppedEncoderQueue,
        framesDroppedCongestionWindow: e.framesDroppedCongestionWindow,
        cpuLimitedResolution: e.cpuLimitedResolution,
        encoderQualityVmaf: null !== (A = null === (c = D.encoderQualityStats) || void 0 === c ? void 0 : c.imageQualityVmaf_v061) && void 0 !== A ? A : void 0,
        encoderQualityPsnr: null !== (N = null === (d = D.encoderQualityStats) || void 0 === d ? void 0 : d.imageQualityWebrtcPsnrDb) && void 0 !== N ? N : void 0,
        qualityDecodeErrors: null !== (v = null === (_ = D.encoderQualityStats) || void 0 === _ ? void 0 : _.decodeErrors) && void 0 !== v ? v : void 0,
        qualityDecoderReboots: null !== (O = null === (E = D.encoderQualityStats) || void 0 === E ? void 0 : E.decoderReboots) && void 0 !== O ? O : void 0,
        qualityScoreErrors: null !== (R = null === (f = D.encoderQualityStats) || void 0 === f ? void 0 : f.scoreErrors) && void 0 !== R ? R : void 0,
        qualityFrameDrops: null !== (C = null === (h = D.encoderQualityStats) || void 0 === h ? void 0 : h.frameDrops) && void 0 !== C ? C : void 0,
        qualitySizeMismatches: null !== (y = null === (p = D.encoderQualityStats) || void 0 === p ? void 0 : p.sizeMismatches) && void 0 !== y ? y : void 0,
        filter: e.filter,
        passthroughCount: e.passthroughCount,
        encryptSuccessCount: e.encryptSuccessCount,
        encryptFailureCount: e.encryptFailureCount,
        encryptDuration: e.encryptDuration,
        encryptAttempts: e.encryptAttempts,
        encryptMaxAttempts: e.encryptMaxAttempts,
        hqSimulcastStreamEncoded: e.hqSimulcastStreamEncoded,
        lqSimulcastStreamEncoded: e.lqSimulcastStreamEncoded
    };
}
function u(e, t, n, i) {
    var l, u;
    let c = a(e.rtpStats), d = o(e.rtpStats);
    return {
        type: 'video',
        ssrc: e.ssrc,
        sinkWant: (0, r.f)(t, e.ssrc, !0),
        sinkWantAsInt: (0, r.F)(t, e.ssrc),
        sinkWantLocal: (0, r.f)(n, e.ssrc, !0),
        codec: {
            id: e.codecPayloadType,
            name: e.codecName
        },
        bytesReceived: c,
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
        ...null != i ? s({
            videoJitterBuffer: i.videoJitterBuffer,
            videoJitterDelay: i.videoJitterDelay,
            videoJitterTarget: i.videoJitterTarget
        }) : {}
    };
}
function c(e, t, n, i) {
    var o, c, d, _, E;
    let f = null, h = null, p = 'string' == typeof t ? JSON.parse(t) : t, m = [];
    if (null != p.outbound) {
        let {
            audio: e,
            video: t,
            videos: i
        } = p.outbound;
        if (null != e)
            h = (null != h ? h : 0) + e.bytesSent, m.push({
                type: 'audio',
                ssrc: e.ssrc,
                sinkWant: (0, r.f)(n, e.ssrc, !1),
                sinkWantAsInt: (0, r.F)(n, e.ssrc),
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
        if (null != i)
            i.forEach(e => {
                let t = l(e, n);
                null != t && (h = (null != h ? h : 0) + t.bytesSent, m.push(t));
            });
        else if (null != t) {
            let e = l(t, n);
            null != e && (h = (null != h ? h : 0) + e.bytesSent, m.push(e));
        }
    }
    let I = {};
    null != p.inbound && p.inbound.forEach(e => {
        let {
            id: t,
            audio: o,
            video: l,
            videos: c,
            playout: d
        } = e;
        if (I[t] = [], null != o)
            f = (null != f ? f : 0) + o.bytesReceived, I[t].push({
                type: 'audio',
                ssrc: o.ssrc,
                sinkWant: (0, r.f)(n, o.ssrc, !1),
                sinkWantAsInt: (0, r.F)(n, o.ssrc),
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
                ...null != d ? s({
                    audioJitterBuffer: d.audioJitterBuffer,
                    audioJitterDelay: d.audioJitterDelay,
                    audioJitterTarget: d.audioJitterTarget,
                    audioPlayoutUnderruns: d.audioPlayoutUnderruns,
                    relativeReceptionDelay: d.relativeReceptionDelay,
                    relativePlayoutDelay: d.relativePlayoutDelay
                }) : {}
            });
        if (null != c)
            c.forEach(e => {
                let r = u(e, n, i, d);
                if (null != r) {
                    let n = a(e.rtpStats);
                    f = (null != f ? f : 0) + n, I[t].push(r);
                }
            });
        else if (null != l) {
            let e = u(l, n, i, d);
            if (null != e) {
                let n = a(l.rtpStats);
                f = (null != f ? f : 0) + n, I[t].push(e);
            }
        }
    });
    let {
            transport: T,
            clips: g
        } = p, S = {};
    null != T && (S.availableOutgoingBitrate = T.sendBandwidth, S.ping = T.rtt, S.decryptionFailures = T.decryptionFailures, null != T.routingFailures && (S.routingFailures = T.routingFailures), S.localAddress = T.localAddress, S.pacerDelay = T.pacerDelay, null != T.receiverReports && (S.receiverReports = T.receiverReports), S.receiverBitrateEstimate = T.receiverBitrateEstimate, S.outboundBitrateEstimate = T.outboundBitrateEstimate, S.inboundBitrateEstimate = null !== (o = T.inboundBitrateEstimate) && void 0 !== o ? o : 0, S.packetsReceived = T.packetsReceived, S.packetsSent = T.packetsSent, null != T.secureFramesProtocolVersion && (S.secureFramesProtocolVersion = T.secureFramesProtocolVersion)), ((null == T ? void 0 : T.bytesReceived) != null || null != f && !Number.isNaN(f)) && (S.bytesReceived = null !== (d = null !== (c = null == T ? void 0 : T.bytesReceived) && void 0 !== c ? c : f) && void 0 !== d ? d : void 0), ((null == T ? void 0 : T.bytesSent) != null || null != h && !Number.isNaN(h)) && (S.bytesSent = null !== (E = null !== (_ = null == T ? void 0 : T.bytesSent) && void 0 !== _ ? _ : h) && void 0 !== E ? E : void 0);
    let {
        screenshare: A,
        camera: N
    } = p;
    return {
        mediaEngineConnectionId: e,
        transport: S,
        screenshare: A,
        camera: null != N ? {
            capturedFramesDropped: N.capturedFramesDropped,
            capturedFramesCount: N.capturedFramesCount,
            capturedFramesMean: N.capturedFramesMean,
            capturedFramesStdev: N.capturedFramesStdev
        } : null,
        clips: g,
        rtp: {
            inbound: I,
            outbound: m
        }
    };
}
