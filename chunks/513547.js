n.d(t, {
	al: function () {
		return S;
	},
	ck: function () {
		return b;
	}
}),
	n(47120),
	n(653041),
	n(571269),
	n(298267);
var r = n(735250),
	a = n(470079),
	i = n(112456),
	o = n.n(i),
	s = n(226961),
	l = n(706619),
	c = n(206314);
let d = {
	accelerateRate: 'Accelerate Rate',
	audioDetected: 'Audio Detected',
	audioLevel: 'Audio Level',
	availableOutgoingBitrate: 'Available Outgoing Bitrate',
	averageDecodeTime: 'Average Decode Time',
	averageEncodeTime: 'Average Encode Time',
	bandwidthLimitedResolution: 'Bandwidth Limited Resolution',
	bitrate: 'Bitrate',
	bitrateTarget: 'Bitrate (Target)',
	bytesReceived: 'Bytes Received',
	bytesSent: 'Bytes Sent',
	capturedFramesCount: 'Captured Frames per Second',
	capturedFramesDropped: 'Captured Frames Dropped',
	capturedFramesMean: 'Captured Frames Mean (ms)',
	capturedFramesStdev: 'Captured Frames Standard Deviation (ms)',
	codec: 'Codec',
	cpuLimitedResolution: 'CPU Limited Resolution',
	currentDelay: 'Current Delay',
	decoderImplementationName: 'Decoder',
	decodingCNG: 'Decoding CNG',
	decodingMutedOutput: 'Decoding Muted Output',
	decodingNormal: 'Decoding Normal',
	decodingPLC: 'Decoding PLC',
	decodingPLCCNG: 'Decoding PLC CNG',
	decryptionFailures: 'Decryption Failures',
	decryptFailureCount: 'Decrypt Failures',
	decryptSuccessCount: 'Decrypt Successes',
	delayEstimate: 'Delay Estimate',
	encoderImplementationName: 'Encoder',
	encoderQualityPsnr: 'Encoder PSNR (dB)',
	encoderQualityVmaf: 'Encoder VMAF',
	encodeUsage: 'Encode Usage',
	encryptFailureCount: 'Encrypt Failures',
	encryptSuccessCount: 'Encrypt Successes',
	expandRate: 'Expand Rate',
	filter: 'Filter',
	firCount: 'FIR',
	fractionLost: 'Packet Loss',
	frameRateDecode: 'Frame Rate (Decode)',
	frameRateEncode: 'Frame Rate (Encode)',
	frameRateInput: 'Frame Rate (Input)',
	frameRateNetwork: 'Frame Rate (Network)',
	frameRateRender: 'Frame Rate (Render)',
	framesDecoded: 'Frames Decoded',
	framesDecodeErrors: 'Decoder Error Count',
	framesDropped: 'Frames Dropped',
	framesDroppedCongestionWindow: 'Frames Dropped by Congestion Window',
	framesDroppedEncoderQueue: 'Frames Dropped by Encoder Queue',
	framesDroppedRateLimiter: 'Frames Dropped by Bitrate Limiter',
	framesEncoded: 'Frames Encoded',
	framesReceived: 'Frames Received',
	framesSent: 'Frames Sent',
	freezeCount: 'Freeze Count',
	hostname: 'Hostname',
	hybridCaptureMethodSwitches: 'Hybrid Capture Method Switches',
	hybridDxgiFrames: 'Hybrid DXGI Frames',
	hybridGdiBitBltFrames: 'Hybrid GDI BitBlt Frames',
	hybridGdiFrames: 'Hybrid GDI Frames',
	hybridGdiPrintWindowFrames: 'Hybrid GDI PrintWindow Frames',
	hybridGraphicsCaptureFrames: 'Hybrid Graphics Capture Frames',
	hybridVideohookFrames: 'Hybrid Videohook Frames',
	inboundBitrateEstimate: 'Inbound Bitrate Estimate',
	jitter: 'Jitter',
	jitterBuffer: 'Jitter Buffer',
	jitterBufferPreferred: 'Jitter Buffer (Preferred)',
	keyFrameInterval: 'Key Frame Interval',
	keyFramesDecoded: 'Key Frames Decoded',
	keyFramesEncoded: 'Key Frames Encoded',
	localAddress: 'Local Address',
	minPlayoutDelay: 'Minimum Playout Delay',
	nackCount: 'NACK',
	networkFramesDropped: 'Frames Dropped By Network',
	opAccelerate: 'Accelerated Frames',
	opCNG: 'CNG Frames',
	opExpand: 'Expand Frames',
	opMerge: 'Merge Frames',
	opNormal: 'Normal Frames',
	opPreemptiveExpand: 'Preemptive Expand Frames',
	opSilence: 'Silent Frames',
	outboundBitrateEstimate: 'Outbound Bitrate Estimate',
	pacerDelay: 'Pacer Delay',
	packetsLost: 'Packets Lost',
	packetsReceived: 'Packets Received',
	packetsSent: 'Packets Sent',
	passthroughCount: 'Passthrough',
	pauseCount: 'Pause Count',
	ping: 'Ping',
	pliCount: 'PLI',
	preemptiveExpandRate: 'Pre-emptive Expand Rate',
	qpSum: 'QP Sum',
	qualityDecodeErrors: 'Encoder Quality Decode Errors',
	qualityDecoderReboots: 'Encoder Quality Decoder Reboots',
	qualityScoreErrors: 'Encoder Quality Score Errors',
	qualityFrameDrops: 'Encoder Quality Frame Drops',
	qualitySizeMismatches: 'Encoder Quality Size Mismatches',
	quartzFrames: 'Quartz Frames',
	receiverBitrateEstimate: 'Receiver Bitrate Estimate (REMB)',
	relativePlayoutDelay: 'Relative Playout Delay',
	relativeReceptionDelay: 'Relative Reception Delay',
	renderDelay: 'Render Delay',
	resolution: 'Resolution',
	routingFailures: 'Routing Failures',
	screenCaptureKitFrames: 'ScreenCaptureKit frames',
	screenshareFrames: 'WebRTC Frames',
	secondaryDecodedRate: 'Secondary Decode Rate',
	secureFramesProtocolVersion: 'SF Protocol',
	sinkWant: 'Sink Quality Level (Remote)',
	sinkWantLocal: 'Sink Quality Level (Local)',
	speechExpandRate: 'Speech Expand Rate',
	ssrc: 'SSRC',
	targetDelay: 'Target Delay',
	totalFramesDuration: 'Frames Duration (ms)',
	totalFreezesDuration: 'Freezes Duration (ms)',
	totalPausesDuration: 'Pauses Duration (ms)',
	videohookBackend: 'Videohook Backend',
	videohookFrames: 'Videohook Frames'
};
function u(e) {
	return ''.concat((e / 1000).toFixed(2), ' Kbps');
}
function m(e) {
	return o().filesize(e);
}
function p(e) {
	return e;
}
function h(e) {
	return ''.concat(e, ' ms');
}
function g(e) {
	return ''.concat(e.toFixed(0), '%');
}
function f(e) {
	return e ? 'Yes' : 'No';
}
function C(e) {
	return ''.concat(Math.max(e, 0).toFixed(2), ' dB');
}
function y(e) {
	let { last: t } = e;
	return ''.concat(t, ' ms');
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
		encryptMaxAttempts: !0,
		lqSimulcastStreamEncoded: !0
	},
	R = {
		accelerateRate: g,
		audioDetected: f,
		audioLevel: C,
		availableOutgoingBitrate: u,
		averageDecodeTime: h,
		averageEncodeTime: h,
		bandwidthLimitedResolution: f,
		bitrate: u,
		bitrateTarget: u,
		bytesReceived: m,
		bytesSent: m,
		codec: function (e) {
			let { id: t, name: n } = e;
			return (n = null != (n = '' === n ? 'unknown' : n) ? n : 'unknown'), ''.concat(n[0].toUpperCase()).concat(n.slice(1), ' (').concat(t, ')');
		},
		cpuLimitedResolution: f,
		currentDelay: h,
		decoderImplementationName: p,
		delayEstimate: h,
		encoderImplementationName: p,
		encoderQualityPsnr: C,
		encoderQualityVmaf: (e) => ''.concat(e.toFixed(2)),
		encodeUsage: g,
		expandRate: g,
		filter: p,
		fractionLost: g,
		inboundBitrateEstimate: u,
		jitter: h,
		jitterBuffer: h,
		jitterBufferPreferred: h,
		keyFrameInterval: h,
		minPlayoutDelay: h,
		outboundBitrateEstimate: u,
		pacerDelay: h,
		ping: h,
		preemptiveExpandRate: g,
		receiverBitrateEstimate: u,
		relativePlayoutDelay: y,
		relativeReceptionDelay: y,
		renderDelay: h,
		resolution: (e) => {
			let { width: t, height: n } = e;
			return ''.concat(t, 'x').concat(n);
		},
		secondaryDecodedRate: g,
		secureFramesProtocolVersion: function (e) {
			return e >= 100 ? 'MLS Test ('.concat(e, ')') : e > 0 ? 'Static Key Test ('.concat(e, ')') : 'Disabled';
		},
		speechExpandRate: g,
		targetDelay: h,
		videohookBackend: function (e) {
			let t = ['N/A', 'Direct3D 9', 'Direct3D 10', 'Direct3D 11', 'Direct3D 12', 'OpenGL', 'Vulkan'];
			return e < t.length ? t[e] : 'Unknown';
		}
	},
	D = (e) => e,
	v = (e) => {
		let [t] = a.useState([]);
		return (
			t.push({
				value: e.value,
				time: Date.now()
			}),
			t.length > 600 && t.shift(),
			(0, r.jsx)(l.Z, {
				dataPoints: t,
				width: e.width,
				height: e.height
			})
		);
	};
function b(e) {
	var t, n, a, i;
	let { label: o, value: u, section: m } = e,
		p = null !== (n = R[o]) && void 0 !== n ? n : D;
	let h =
			s.Pz[o] &&
			(Array.isArray((i = u)) && i.length > 0 && 'number' == typeof i[0].value
				? (0, r.jsx)(l.Z, {
						dataPoints: i,
						width: 300,
						height: 100
					})
				: 'number' == typeof i
					? (0, r.jsx)(v, {
							value: i,
							width: 300,
							height: 100
						})
					: void 0),
		g = Array.isArray(u) ? (null === (t = u.at(-1)) || void 0 === t ? void 0 : t.value) : u;
	return (0, r.jsx)(c.Z, {
		label: o,
		valueRendered: p(g),
		section: m,
		renderGraph: h,
		children: null !== (a = d[o]) && void 0 !== a ? a : o
	});
}
