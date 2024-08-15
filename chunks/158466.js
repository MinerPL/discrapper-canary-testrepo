n.d(t, {
	Z: function () {
		return c;
	}
}),
	n(724458),
	n(653041);
var r = n(878604);
function i(e) {
	return e / 32768;
}
function a(e) {
	var t, n, r, i, a, s, o, l, u, c, d, _, E, f, h, p, I, m, T, g, S;
	let A =
		(null !== (c = null == e ? void 0 : e.headerBytes) && void 0 !== c ? c : 0) +
		(null !== (d = null == e ? void 0 : e.payloadBytes) && void 0 !== d ? d : 0) +
		(null !== (_ = null == e ? void 0 : e.paddingBytes) && void 0 !== _ ? _ : 0);
	return (
		(null !== (E = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.headerBytes) && void 0 !== E
			? E
			: 0) +
		(null !== (f = null == e ? void 0 : null === (n = e.fec) || void 0 === n ? void 0 : n.payloadBytes) && void 0 !== f
			? f
			: 0) +
		(null !== (h = null == e ? void 0 : null === (r = e.fec) || void 0 === r ? void 0 : r.paddingBytes) && void 0 !== h
			? h
			: 0) +
		(null !== (p = null == e ? void 0 : null === (i = e.retransmitted) || void 0 === i ? void 0 : i.headerBytes) &&
		void 0 !== p
			? p
			: 0) +
		(null !== (I = null == e ? void 0 : null === (a = e.retransmitted) || void 0 === a ? void 0 : a.payloadBytes) &&
		void 0 !== I
			? I
			: 0) +
		(null !== (m = null == e ? void 0 : null === (s = e.retransmitted) || void 0 === s ? void 0 : s.paddingBytes) &&
		void 0 !== m
			? m
			: 0) +
		(null !== (T = null == e ? void 0 : null === (o = e.transmitted) || void 0 === o ? void 0 : o.headerBytes) &&
		void 0 !== T
			? T
			: 0) +
		(null !== (g = null == e ? void 0 : null === (l = e.transmitted) || void 0 === l ? void 0 : l.payloadBytes) &&
		void 0 !== g
			? g
			: 0) +
		(null !== (S = null == e ? void 0 : null === (u = e.transmitted) || void 0 === u ? void 0 : u.paddingBytes) &&
		void 0 !== S
			? S
			: 0) +
		A
	);
}
function s(e) {
	var t, n, r, i, a, s, o;
	let l = null !== (i = null == e ? void 0 : e.packets) && void 0 !== i ? i : 0;
	return (
		(null !== (a = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.packets) && void 0 !== a
			? a
			: 0) +
		(null !== (s = null == e ? void 0 : null === (n = e.retransmitted) || void 0 === n ? void 0 : n.packets) &&
		void 0 !== s
			? s
			: 0) +
		(null !== (o = null == e ? void 0 : null === (r = e.transmitted) || void 0 === r ? void 0 : r.packets) &&
		void 0 !== o
			? o
			: 0) +
		l
	);
}
function o(e) {
	let t = {};
	for (let r in e) {
		var n;
		t[r] =
			null != (n = e[r])
				? {
						last: Math.round(1000 * n.last),
						mean: Math.round(1000 * n.mean),
						p75: Math.round(1000 * n.p75),
						p95: Math.round(1000 * n.p95),
						p99: Math.round(1000 * n.p99),
						max: Math.round(1000 * n.max)
					}
				: null;
	}
	return t;
}
function l(e, t) {
	var n, i, o, l, u, c, d, _, E, f, h, p, I, m, T, g, S, A, N, v, O, R, C, y;
	let D = e.substreams.find((e) => !e.isRTX && !e.isFlexFEC);
	if (null == D) return;
	let L = e.substreams.reduce((e, t) => e + a(t.rtpStats), 0),
		b = e.substreams.reduce((e, t) => e + s(t.rtpStats), 0);
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
		packetsLost:
			null !== (I = null === (n = D.rtcpStats) || void 0 === n ? void 0 : n.packetsLost) && void 0 !== I ? I : 0,
		fractionLost:
			null !== (m = null === (i = D.rtcpStats) || void 0 === i ? void 0 : i.fractionLost) && void 0 !== m ? m : 0,
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
		firCount: null !== (T = null === (o = D.rtcpStats) || void 0 === o ? void 0 : o.firPackets) && void 0 !== T ? T : 0,
		nackCount:
			null !== (g = null === (l = D.rtcpStats) || void 0 === l ? void 0 : l.nackPackets) && void 0 !== g ? g : 0,
		pliCount: null !== (S = null === (u = D.rtcpStats) || void 0 === u ? void 0 : u.pliPackets) && void 0 !== S ? S : 0,
		qpSum: e.qpSum,
		bandwidthLimitedResolution: e.bwLimitedResolution,
		framesDroppedRateLimiter: e.framesDroppedRateLimiter,
		framesDroppedEncoderQueue: e.framesDroppedEncoderQueue,
		framesDroppedCongestionWindow: e.framesDroppedCongestionWindow,
		cpuLimitedResolution: e.cpuLimitedResolution,
		encoderQualityVmaf:
			null !== (A = null === (c = D.encoderQualityStats) || void 0 === c ? void 0 : c.imageQualityVmaf_v061) &&
			void 0 !== A
				? A
				: void 0,
		encoderQualityPsnr:
			null !== (N = null === (d = D.encoderQualityStats) || void 0 === d ? void 0 : d.imageQualityWebrtcPsnrDb) &&
			void 0 !== N
				? N
				: void 0,
		qualityDecodeErrors:
			null !== (v = null === (_ = D.encoderQualityStats) || void 0 === _ ? void 0 : _.decodeErrors) && void 0 !== v
				? v
				: void 0,
		qualityDecoderReboots:
			null !== (O = null === (E = D.encoderQualityStats) || void 0 === E ? void 0 : E.decoderReboots) && void 0 !== O
				? O
				: void 0,
		qualityScoreErrors:
			null !== (R = null === (f = D.encoderQualityStats) || void 0 === f ? void 0 : f.scoreErrors) && void 0 !== R
				? R
				: void 0,
		qualityFrameDrops:
			null !== (C = null === (h = D.encoderQualityStats) || void 0 === h ? void 0 : h.frameDrops) && void 0 !== C
				? C
				: void 0,
		qualitySizeMismatches:
			null !== (y = null === (p = D.encoderQualityStats) || void 0 === p ? void 0 : p.sizeMismatches) && void 0 !== y
				? y
				: void 0,
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
	let c = a(e.rtpStats),
		d = s(e.rtpStats);
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
		...(null != i
			? o({
					videoJitterBuffer: i.videoJitterBuffer,
					videoJitterDelay: i.videoJitterDelay,
					videoJitterTarget: i.videoJitterTarget
				})
			: {})
	};
}
function c(e, t, n, i) {
	var s, c, d, _, E;
	let f = null,
		h = null,
		p = 'string' == typeof t ? JSON.parse(t) : t,
		I = [];
	if (null != p.outbound) {
		let { audio: e, video: t, videos: i } = p.outbound;
		if (null != e)
			(h = (null != h ? h : 0) + e.bytesSent),
				I.push({
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
			i.forEach((e) => {
				let t = l(e, n);
				null != t && ((h = (null != h ? h : 0) + t.bytesSent), I.push(t));
			});
		else if (null != t) {
			let e = l(t, n);
			null != e && ((h = (null != h ? h : 0) + e.bytesSent), I.push(e));
		}
	}
	let m = {};
	null != p.inbound &&
		p.inbound.forEach((e) => {
			let { id: t, audio: s, video: l, videos: c, playout: d } = e;
			if (((m[t] = []), null != s))
				(f = (null != f ? f : 0) + s.bytesReceived),
					m[t].push({
						type: 'audio',
						ssrc: s.ssrc,
						sinkWant: (0, r.f)(n, s.ssrc, !1),
						sinkWantAsInt: (0, r.F)(n, s.ssrc),
						codec: {
							id: s.codecPayloadType,
							name: s.codecName
						},
						bytesReceived: s.bytesReceived,
						packetsReceived: s.packetsReceived,
						packetsLost: s.packetsLost,
						fractionLost: 100 * s.fractionLost,
						fecPacketsReceived: s.fecPacketsReceived,
						fecPacketsDiscarded: s.fecPacketsDiscarded,
						audioLevel: s.audioLevel / 32768,
						audioDetected: s.speaking,
						jitter: s.jitter,
						jitterBuffer: s.jitterBuffer,
						jitterBufferPreferred: s.jitterBufferPreferred,
						decodingCNG: s.decodingCNG,
						decodingMutedOutput: s.decodingMutedOutput,
						decodingNormal: s.decodingNormal,
						decodingPLC: s.decodingPLC,
						decodingPLCCNG: s.decodingPLCCNG,
						nackCount: s.nackCount,
						accelerateRate: 100 * s.accelerateRate,
						expandRate: 100 * s.expandRate,
						preemptiveExpandRate: 100 * s.preemptiveExpandRate,
						speechExpandRate: 100 * s.speechExpandRate,
						secondaryDecodedRate: 100 * s.secondaryDecodedRate,
						opSilence: s.opSilence,
						opNormal: s.opNormal,
						opMerge: s.opMerge,
						opExpand: s.opExpand,
						opAccelerate: s.opAccelerate,
						opPreemptiveExpand: s.opPreemptiveExpand,
						opCNG: s.opCNG,
						delayEstimate: s.delayEstimate,
						passthroughCount: s.passthroughCount,
						decryptSuccessCount: s.decryptSuccessCount,
						decryptFailureCount: s.decryptFailureCount,
						decryptDuration: s.decryptDuration,
						decryptAttempts: s.decryptAttempts,
						...(null != d
							? o({
									audioJitterBuffer: d.audioJitterBuffer,
									audioJitterDelay: d.audioJitterDelay,
									audioJitterTarget: d.audioJitterTarget,
									audioPlayoutUnderruns: d.audioPlayoutUnderruns,
									relativeReceptionDelay: d.relativeReceptionDelay,
									relativePlayoutDelay: d.relativePlayoutDelay
								})
							: {})
					});
			if (null != c)
				c.forEach((e) => {
					let r = u(e, n, i, d);
					if (null != r) {
						let n = a(e.rtpStats);
						(f = (null != f ? f : 0) + n), m[t].push(r);
					}
				});
			else if (null != l) {
				let e = u(l, n, i, d);
				if (null != e) {
					let n = a(l.rtpStats);
					(f = (null != f ? f : 0) + n), m[t].push(e);
				}
			}
		});
	let { transport: T, clips: g } = p,
		S = {};
	null != T &&
		((S.availableOutgoingBitrate = T.sendBandwidth),
		(S.ping = T.rtt),
		(S.decryptionFailures = T.decryptionFailures),
		null != T.routingFailures && (S.routingFailures = T.routingFailures),
		(S.localAddress = T.localAddress),
		(S.pacerDelay = T.pacerDelay),
		null != T.receiverReports && (S.receiverReports = T.receiverReports),
		(S.receiverBitrateEstimate = T.receiverBitrateEstimate),
		(S.outboundBitrateEstimate = T.outboundBitrateEstimate),
		(S.inboundBitrateEstimate = null !== (s = T.inboundBitrateEstimate) && void 0 !== s ? s : 0),
		(S.packetsReceived = T.packetsReceived),
		(S.packetsSent = T.packetsSent),
		null != T.secureFramesProtocolVersion && (S.secureFramesProtocolVersion = T.secureFramesProtocolVersion)),
		((null == T ? void 0 : T.bytesReceived) != null || (null != f && !Number.isNaN(f))) &&
			(S.bytesReceived =
				null !== (d = null !== (c = null == T ? void 0 : T.bytesReceived) && void 0 !== c ? c : f) && void 0 !== d
					? d
					: void 0),
		((null == T ? void 0 : T.bytesSent) != null || (null != h && !Number.isNaN(h))) &&
			(S.bytesSent =
				null !== (E = null !== (_ = null == T ? void 0 : T.bytesSent) && void 0 !== _ ? _ : h) && void 0 !== E
					? E
					: void 0);
	let { screenshare: A, camera: N } = p;
	return {
		mediaEngineConnectionId: e,
		transport: S,
		screenshare: A,
		camera:
			null != N
				? {
						capturedFramesDropped: N.capturedFramesDropped,
						capturedFramesCount: N.capturedFramesCount,
						capturedFramesMean: N.capturedFramesMean,
						capturedFramesStdev: N.capturedFramesStdev
					}
				: null,
		clips: g,
		rtp: {
			inbound: m,
			outbound: I
		}
	};
}
