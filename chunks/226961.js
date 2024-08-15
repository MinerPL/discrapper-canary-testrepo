n.d(t, {
	J$: function () {
		return v;
	},
	Pz: function () {
		return m;
	},
	fZ: function () {
		return O;
	}
}),
	n(47120),
	n(653041);
var r,
	i = n(442837),
	a = n(46973),
	s = n(570140),
	o = n(304680),
	l = n(131951),
	u = n(594174),
	c = n(981631),
	d = n(65154);
function _(e, t, n) {
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
let E = v(d.Yn.DEFAULT, c._s_.TRANSPORT, 0),
	f = E,
	h = {},
	p = new Map(),
	m = {
		availableOutgoingBitrate: !0,
		bitrate: !0,
		bitrateTarget: !0,
		bytesReceived: !0,
		bytesSent: !0,
		encoderQualityPsnr: !0,
		encoderQualityVmaf: !0,
		encodeUsage: !0,
		frameRateDecode: !0,
		frameRateEncode: !0,
		frameRateInput: !0,
		frameRateNetwork: !0,
		frameRateRender: !0,
		inboundBitrateEstimate: !0,
		packetsLost: !0,
		packetsReceived: !0,
		packetsSent: !0,
		ping: !0
	};
function I(e, t, n) {
	return ''.concat(e, ':').concat(t, ':').concat(n);
}
function T(e, t) {
	return ''.concat(e, ':').concat(t);
}
class g {
	static empty() {
		return new g({});
	}
	put(e, t, n, r) {
		if ('' === r) {
			let r = { ...this.state };
			return delete r[I(e, t, n)], new g(r);
		}
		return new g({
			[I(e, t, n)]: r,
			...this.state
		});
	}
	get(e, t, n) {
		let r = this.state[I(e, t, n)];
		return null != r ? r : null;
	}
	constructor(e) {
		_(this, 'state', void 0), (this.state = e);
	}
}
let S = g.empty(),
	A = !1,
	N = null;
function v(e, t, n) {
	return ''.concat(e, ':').concat(t, ':').concat(n);
}
function O(e) {
	let [t, n] = e.split(':');
	return {
		context: t,
		section: n
	};
}
function R() {
	Object.values(d.Yn).forEach((e) => {
		h[e] = {};
	});
}
R();
function C() {
	null != N && (N.destroy(), (N = null));
}
class y extends (r = i.ZP.Store) {
	getSection() {
		return f;
	}
	getStats() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Yn.DEFAULT;
		return h[e][0];
	}
	getAllStats() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Yn.DEFAULT;
		return Object.values(h[e]);
	}
	getVideoStreams() {
		return S;
	}
	shouldRecordNextConnection() {
		return A;
	}
	getSimulcastDebugOverride(e, t) {
		let n = T(e, t);
		return p.has(n) ? p.get(n) : d.Z.NO_OVERRIDE;
	}
}
_(y, 'displayName', 'RTCDebugStore'),
	(t.ZP = new y(s.Z, {
		RTC_DEBUG_MODAL_OPEN: function (e) {
			var t;
			f = null !== (t = e.section) && void 0 !== t ? t : E;
		},
		RTC_DEBUG_MODAL_CLOSE: function () {
			C();
		},
		RTC_DEBUG_MODAL_SET_SECTION: function (e) {
			f = e.section;
		},
		RTC_DEBUG_MODAL_UPDATE: function (e) {
			let { context: t, stats: n, index: r } = e,
				i = h[t];
			if (null != n) {
				let [e, a, s] = f.split(':');
				if (e === t && parseInt(s) === r && null != u.default.getUser(a)) {
					let {
						rtp: { inbound: e }
					} = n;
					!Object.keys(e).includes(a) && (f = E);
				}
				i[r] = (function e(t) {
					let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
						i = {};
					for (let [a, s] of Object.entries(t)) {
						let t = n[a];
						if (Array.isArray(s)) {
							if ('object' == typeof s[0]) {
								let n = Array.isArray(t) ? t : [],
									o = (i[a] = []);
								for (let t = 0; t < s.length; t++) {
									let i = n[t],
										a = 'object' == typeof i ? i : {};
									o.push(e(s[t], a, r));
								}
							} else i[a] = s;
						} else if ('object' == typeof s && null !== s) {
							let n = 'object' == typeof t && null !== t ? t : {};
							i[a] = e(s, n, r);
						} else if (a in m && 'number' == typeof s) {
							let e = (i[a] = Array.isArray(t) ? t : []);
							e.push({
								value: s,
								time: r
							}),
								e.length > 600 && e.shift();
						} else i[a] = s;
					}
					return i;
				})(n, i[r]);
			} else delete i[r];
		},
		RTC_DEBUG_MODAL_OPEN_REPLAY: function (e) {
			o.gl();
		},
		RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: function (e) {
			let { path: t } = e,
				n = l.Z.getMediaEngine();
			if ((C(), !n.supports(d.AN.CONNECTION_REPLAY) || 0 === t.length)) return;
			let r = n.createReplayConnection(d.Yn.DEFAULT, t);
			null != r &&
				((N = r),
				r.on(a.Sh.Video, (e, t, n, i, a) => {
					s.Z.dispatch({
						type: 'RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT',
						mediaEngineConnectionId: r.mediaEngineConnectionId,
						userId: e,
						videoSsrc: null != i ? i : 0,
						streamId: null != t ? t : ''
					});
				}),
				s.Z.wait(() => o.bA()));
		},
		RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: function (e) {
			S = S.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId);
		},
		RTC_DEBUG_SET_RECORDING_FLAG: function (e) {
			let { value: t } = e;
			A = t;
		},
		RTC_DEBUG_SET_SIMULCAST_OVERRIDE: function (e) {
			let { userId: t, context: n, quality: r } = e;
			p.set(T(t, n), r);
		},
		VOICE_CHANNEL_SELECT: function (e) {
			null != e.channelId && (R(), p.clear());
		}
	})),
	l.Z.getMediaEngine().on(a.aB.ConnectionStats, function (e) {
		Object.values(d.Yn).forEach((t) => {
			e.filter((e) => {
				let { connection: n } = e;
				return n.context === t;
			}).forEach((e, n) => {
				s.Z.dispatch({
					type: 'RTC_DEBUG_MODAL_UPDATE',
					stats: e.stats,
					context: t,
					index: n,
					mediaEngineConnectionId: e.connection.mediaEngineConnectionId
				});
			});
		});
	});
