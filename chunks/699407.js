let r, i, a;
n.d(t, {
	X: function () {
		return h;
	},
	l: function () {
		return I;
	}
}),
	n(177593),
	n(733860),
	n(47120),
	n(653041),
	n(17089);
var s,
	o = n(756647),
	l = n(442837),
	u = n(544891),
	c = n(761609);
function d(e, t, n) {
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
let _ = 1500,
	E = null !== (s = window.requestIdleCallback) && void 0 !== s ? s : (e) => setImmediate(() => e()),
	f = new c.R(),
	h = {
		handleConnectionOpen: () => {},
		handleConnectionClosed: () => {},
		handleFingerprint: () => {},
		handleTrack: () => {}
	},
	p = [],
	m = () => Promise.resolve({ sessionId: void 0 }),
	I = (e) => {
		let { dispatcher: t, actionHandler: n, getFingerprint: s, getSessionId: c = m, TRACKING_URL: I, drainTimeoutOverride: T, waitFor: g } = e;
		_ = null != T ? T : 1500;
		function S() {
			return 0 !== p.length && (null != i ? null != r : null != s());
		}
		function A() {
			null == a && S() && (a = E(N, { timeout: _ }));
		}
		function N() {
			if (((a = null), !S())) return;
			let e = p.slice();
			(p = []),
				v(e).then(
					() => {
						e.forEach((e) => {
							var t;
							null === (t = e.resolve) || void 0 === t || t.call(e);
						});
					},
					(t) => {
						p.unshift(...e);
						let { message: n } = t.body || t;
						console.warn('[AnalyticsTrackingStore] Track:', n);
					}
				);
		}
		function v(e) {
			let t = Date.now(),
				n = e.map((e) => ({
					...e,
					properties: {
						...e.properties,
						client_send_timestamp: t
					}
				}));
			return u.tn.post({
				url: I,
				body: {
					token: r,
					events: n
				},
				retries: 3
			});
		}
		(h.handleConnectionOpen = function (e) {
			let { analyticsToken: t, user: n } = e;
			return null != t && (r = t), null != n.id && (i = n.id), A(), !1;
		}),
			(h.handleConnectionClosed = function () {
				return N(), (r = null), (i = null), !1;
			}),
			(h.handleFingerprint = function () {
				return N(), !1;
			}),
			(h.handleTrack = function (e) {
				let { event: t, properties: n, flush: r, fingerprint: a, resolve: l } = e;
				return (
					c().then((e) => {
						let { sessionId: u } = e,
							c = {
								type: t,
								fingerprint: a,
								properties: {
									client_track_timestamp: Date.now(),
									client_heartbeat_session_id: u,
									...n
								},
								resolve: l
							},
							d = (function (e) {
								if (null != i) return i;
								let t = e.fingerprint || s();
								return null != t ? (0, o.s)(t) : null;
							})(c);
						null != d && (c.properties.client_uuid = f.generate(d)), p.push(c);
						p.length > 10000 && (p = p.slice(-10000)), r ? N() : A();
					}),
					!1
				);
			});
		class O extends l.yh {
			initialize() {
				null != g && this.waitFor(...g);
			}
			constructor(...e) {
				super(...e), d(this, 'submitEventsImmediately', v);
			}
		}
		return d(O, 'displayName', 'AnalyticsTrackingStore'), new O(t, n);
	};
