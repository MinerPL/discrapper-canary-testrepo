var r, i;
function a(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
n.d(t, {
	r: function () {
		return s;
	}
}),
	n(47120);
class s {
	update(e) {
		for (let t in e.rtp.inbound)
			for (let n of e.rtp.inbound[t])
				if ('video' === n.type) {
					let e = this.getInboundBytesRecevierCalculator(n),
						t = this.getInboundFrameDecodeRateCalculator(n);
					(n.bitrate = e.calculate(n)), (n.frameRateDecode = t.calculate(n));
				}
		for (let t of e.rtp.outbound)
			if ('video' === t.type) {
				let e = this.getOutboundBytesSentCalculator(t),
					n = this.getOutboundEncodeRateCalculator(t);
				(t.bitrate = e.calculate(t)), (t.frameRateEncode = n.calculate(t));
			}
	}
	static getCalculatorOrCreate(e, t, n, r) {
		let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
			a = e[t.ssrc];
		return null == a && ((a = new l(n, r, i)), (e[t.ssrc] = a)), a;
	}
	getInboundBytesRecevierCalculator(e) {
		return s.getCalculatorOrCreate(this.inboundVideoBitrate, e, 'bytesReceived', 'timestamp', 3);
	}
	getInboundFrameDecodeRateCalculator(e) {
		return s.getCalculatorOrCreate(this.inboundDecodeFps, e, 'framesDecoded', 'timestamp', 5);
	}
	getOutboundBytesSentCalculator(e) {
		return s.getCalculatorOrCreate(this.outboundVideoBitrate, e, 'bytesSent', 'timestamp', 3);
	}
	getOutboundEncodeRateCalculator(e) {
		return s.getCalculatorOrCreate(this.outboundEncodeFps, e, 'framesEncoded', 'timestamp', 5);
	}
	constructor() {
		a(this, 'inboundVideoBitrate', {}),
			a(this, 'inboundDecodeFps', {}),
			a(this, 'outboundVideoBitrate', {}),
			a(this, 'outboundEncodeFps', {});
	}
}
((i = r || (r = {}))[(i.NONE = 0)] = 'NONE'),
	(i[(i.MILLISECONDS_FROM_SECONDS = 1)] = 'MILLISECONDS_FROM_SECONDS'),
	(i[(i.BYTES_TO_BITS = 2)] = 'BYTES_TO_BITS'),
	(i[(i.ROUND = 4)] = 'ROUND');
let o = {
	0: { multiplier: 1 },
	1: {
		postfix: '_in_ms',
		multiplier: 1000
	},
	2: {
		bitrate: !0,
		postfix: '',
		multiplier: 8
	}
};
class l {
	calculate(e) {
		let t = this.previous;
		if (((this.previous = e), null == t)) return;
		let n = e.timestamp - t.timestamp;
		if (n <= 0 || 'number' != typeof n) return;
		let r = t[this.accumulativeMetricKey],
			i = e[this.accumulativeMetricKey];
		if ('number' != typeof r || 'number' != typeof i) return;
		let a = t[this.samplesMetricKey],
			s = e[this.samplesMetricKey];
		if ('number' != typeof a || 'number' != typeof s) return;
		let o = ((i - r) / (s - a)) * this.multiplier;
		return this.round ? Math.round(o) : o;
	}
	constructor(e, t, n = 0) {
		for (let l in (a(this, 'accumulativeMetricKey', void 0),
		a(this, 'samplesMetricKey', void 0),
		a(this, 'previous', void 0),
		a(this, 'multiplier', void 0),
		a(this, 'round', void 0),
		(this.accumulativeMetricKey = e),
		(this.samplesMetricKey = t),
		(this.multiplier = 1),
		(this.round = !1),
		r)) {
			var i, s;
			let e = Number(l);
			if (!isNaN(e) && (n & e) != 0 && l in o)
				this.multiplier *=
					null !== (s = null === (i = o[l]) || void 0 === i ? void 0 : i.multiplier) && void 0 !== s ? s : 1;
		}
		this.round = (4 & n) != 0;
	}
}
