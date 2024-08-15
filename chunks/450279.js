n.d(t, {
	Z: function () {
		return a;
	}
}),
	n(47120),
	n(653041);
var r = n(878604);
function i(e) {
	return {
		id: e.payloadType,
		name: e.mimeType.split('/').slice(1)[0]
	};
}
function a(e, t, n, a) {
	var s, o, l;
	let u = {},
		c = {},
		d = [],
		_ = [];
	for (let t of e.values())
		switch (t.type) {
			case 'candidate-pair':
				u[t.id] = t;
				break;
			case 'codec':
				c[t.id] = t;
				break;
			case 'inbound-rtp':
				d.push(t);
				break;
			case 'outbound-rtp':
				_.push(t);
		}
	let E = Object.values(u).find((e) => 'succeeded' === e.state);
	if (void 0 === E) return null;
	let f = [];
	for (let e of _) {
		let t = c[e.codecId];
		if (null == t) continue;
		let a = {
			type: e.kind,
			ssrc: e.ssrc,
			timestamp: e.timestamp,
			sinkWant: (0, r.f)(n, e.ssrc, 'video' === e.kind),
			sinkWantAsInt: (0, r.F)(n, e.ssrc),
			codec: i(t),
			bytesSent: e.bytesSent,
			packetsSent: e.packetsSent
		};
		if ('audio' === e.kind)
			f.push({
				...a,
				type: 'audio'
			});
		else if ('video' === e.kind) {
			let t =
				null !== e.frameWidth
					? {
							width: e.frameWidth,
							height: e.frameHeight
						}
					: void 0;
			f.push({
				...a,
				framesEncoded: e.framesEncoded,
				keyFramesEncoded: e.keyFramesEncoded,
				firCount: e.firCount,
				nackCount: e.nackCount,
				pliCount: e.pliCount,
				bitrateTarget: e.targetBitrate,
				qpSum: e.qpSum,
				averageEncodeTime:
					null == e.framesEncoded || null === (l = e.totalEncodeTime) || 0 === l
						? void 0
						: ((1000 * e.totalEncodeTime) / e.framesEncoded).toFixed(1),
				resolution: t,
				framesSent: e.framesSent,
				frameRateInput: e.framesPerSecond,
				type: 'video'
			});
		}
	}
	let h = {};
	for (let e of d) {
		let s = c[e.codecId];
		if (null == s) continue;
		let o = t(e.ssrc);
		if (null == o) continue;
		let l = {
			type: e.kind,
			ssrc: e.ssrc,
			timestamp: e.timestamp,
			sinkWant: (0, r.f)(n, e.ssrc, 'video' === e.kind),
			sinkWantAsInt: (0, r.F)(n, e.ssrc),
			sinkWantLocal: (0, r.f)(a, e.ssrc, 'video' === e.kind),
			codec: i(s),
			bytesReceived: e.bytesReceived,
			packetsReceived: e.packetsReceived,
			packetsLost: e.packetsLost
		};
		if ('audio' === e.kind) {
			let t =
				void 0 !== e.jitterBufferDelay && void 0 !== e.jitterBufferEmittedCount
					? Math.round((1000 * e.jitterBufferDelay) / e.jitterBufferEmittedCount)
					: 0;
			null == h[o] && (h[o] = []),
				h[o].push({
					...l,
					audioLevel: e.audioLevel,
					jitter: 1000 * e.jitter,
					jitterBuffer: t
				});
		} else if ('video' === e.kind) {
			null == h[o] && (h[o] = []);
			let t =
				null !== e.frameWidth
					? {
							width: e.frameWidth,
							height: e.frameHeight
						}
					: void 0;
			h[o].push({
				...l,
				resolution: t,
				framesDecoded: e.framesDecoded,
				keyFramesDecoded: e.keyFramesDecoded,
				framesDropped: e.framesDropped,
				framesReceived: e.framesReceived,
				frameRateDecode: e.framesPerSecond,
				averageDecodeTime:
					null == e.framesDecoded || null == e.totalDecodeTime
						? void 0
						: ((1000 * e.totalDecodeTime) / e.framesDecoded).toFixed(1),
				firCount: e.firCount,
				nackCount: e.nackCount,
				pliCount: e.pliCount,
				freezeCount: e.freezeCount,
				pauseCount: e.pauseCount,
				totalFreezesDuration: e.totalFreezesDuration,
				totalPausesDuration: e.totalPausesDuration,
				qpSum: e.qpSum,
				decoderImplementationName: 'WebRTC'
			});
		}
	}
	let p = (null !== (s = E.currentRoundTripTime) && void 0 !== s ? s : 0) * 1000;
	return {
		transport: {
			availableOutgoingBitrate: null !== (o = E.availableOutgoingBitrate) && void 0 !== o ? o : 0,
			bytesReceived: E.bytesReceived,
			bytesSent: E.bytesSent,
			ping: p
		},
		rtp: {
			inbound: h,
			outbound: f
		}
	};
}
