r.d(t, {
	L7: function () {
		return L;
	},
	k3: function () {
		return D;
	}
});
var n = r(157079),
	a = r(501684),
	o = r(868497),
	i = r(696486),
	_ = r(73453),
	E = r(793373),
	s = r(152228),
	c = r(988097),
	I = r(789112),
	u = r(263449),
	l = r(305625),
	R = r(64685),
	A = r(873567),
	T = r(101284),
	d = r(886115),
	N = r(370541),
	p = r(285883),
	O = r(163162);
let f = new WeakMap(),
	S = new Map(),
	D = {
		traceFetch: !0,
		traceXHR: !0,
		enableHTTPTimings: !0
	};
function L(e, t) {
	let {
			traceFetch: r,
			traceXHR: a,
			shouldCreateSpanForRequest: T,
			enableHTTPTimings: L,
			tracePropagationTargets: C
		} = {
			traceFetch: D.traceFetch,
			traceXHR: D.traceXHR,
			...t
		},
		M = 'function' == typeof T ? T : (e) => !0,
		P = (e) =>
			(function (e, t) {
				let r = O.m9.location && O.m9.location.href;
				if (r) {
					let n, a;
					try {
						(n = new URL(e, r)), (a = new URL(r).origin);
					} catch (e) {
						return !1;
					}
					let o = n.origin === a;
					return t ? (0, d.U0)(n.toString(), t) || (o && (0, d.U0)(n.pathname, t)) : o;
				}
				{
					let r = !!e.match(/^\/(?!\/)/);
					return t ? (0, d.U0)(e, t) : r;
				}
			})(e, C),
		m = {};
	r &&
		(e.addEventProcessor(
			(e) => (
				'transaction' === e.type &&
					e.spans &&
					e.spans.forEach((e) => {
						if ('http.client' === e.op) {
							let t = S.get(e.span_id);
							t && ((e.timestamp = t / 1000), S.delete(e.span_id));
						}
					}),
				e
			)
		),
		(0, R.cf)((e) => {
			if (e.response) {
				let t = f.get(e.response);
				t && e.endTimestamp && S.set(t, e.endTimestamp);
			}
		}),
		(0, R.Uf)((e) => {
			let t = (0, o.m)(e, M, P, m);
			if ((e.response && e.fetchData.__span && f.set(e.response, e.fetchData.__span), t)) {
				let r = g(e.fetchData.url),
					n = r ? (0, A.en)(r).host : void 0;
				t.setAttributes({
					'http.url': r,
					'server.address': n
				});
			}
			L && t && h(t);
		})),
		a &&
			(0, n.UK)((e) => {
				let t = (function (e, t, r, a) {
					let o = e.xhr,
						R = o && o[n.xU];
					if (!o || o.__sentry_own_request__ || !R) return;
					let T = (0, _.z)() && t(R.url);
					if (e.endTimestamp && T) {
						let e = o.__sentry_xhr_span_id__;
						if (!e) return;
						let t = a[e];
						t && void 0 !== R.status_code && ((0, E.Q0)(t, R.status_code), t.end(), delete a[e]);
						return;
					}
					let d = g(R.url),
						O = d ? (0, A.en)(d).host : void 0,
						f = !!(0, i.HN)(),
						S =
							T && f
								? (0, s.qp)({
										name: `${R.method} ${R.url}`,
										attributes: {
											type: 'xhr',
											'http.method': R.method,
											'http.url': d,
											url: R.url,
											'server.address': O,
											[c.S3]: 'auto.http.browser',
											[c.$J]: 'http.client'
										}
									})
								: new I.b();
					(o.__sentry_xhr_span_id__ = S.spanContext().spanId), (a[o.__sentry_xhr_span_id__] = S);
					let D = (0, u.s3)();
					return (
						o.setRequestHeader &&
							r(R.url) &&
							D &&
							(function (e, t, r) {
								let n = (0, u.nZ)(),
									{
										traceId: a,
										spanId: o,
										sampled: E,
										dsc: s
									} = {
										...(0, u.aF)().getPropagationContext(),
										...n.getPropagationContext()
									},
									c = r && (0, _.z)() ? (0, i.Hb)(r) : (0, N.$p)(a, o, E);
								(function (e, t, r) {
									try {
										e.setRequestHeader('sentry-trace', t), r && e.setRequestHeader(p.bU, r);
									} catch (e) {}
								})(e, c, (0, p.IQ)(s || (r ? (0, l.jC)(r) : (0, l._l)(a, t))));
							})(o, D, (0, _.z)() && f ? S : void 0),
						S
					);
				})(e, M, P, m);
				L && t && h(t);
			});
}
function h(e) {
	let { url: t } = (0, i.XU)(e).data || {};
	if (!t || 'string' != typeof t) return;
	let r = (0, a._j)('resource', ({ entries: n }) => {
		n.forEach((n) => {
			var a;
			if ('resource' === (a = n).entryType && 'initiatorType' in a && 'string' == typeof a.nextHopProtocol && ('fetch' === a.initiatorType || 'xmlhttprequest' === a.initiatorType) && n.name.endsWith(t))
				(function (e) {
					let { name: t, version: r } = (function (e) {
							let t = 'unknown',
								r = 'unknown',
								n = '';
							for (let a of e) {
								if ('/' === a) {
									[t, r] = e.split('/');
									break;
								}
								if (!isNaN(Number(a))) {
									(t = 'h' === n ? 'http' : n), (r = e.split(n)[1]);
									break;
								}
								n += a;
							}
							return (
								n === e && (t = n),
								{
									name: t,
									version: r
								}
							);
						})(e.nextHopProtocol),
						n = [];
					return (n.push(['network.protocol.version', r], ['network.protocol.name', t]), T.Z1) ? [...n, ['http.request.redirect_start', C(e.redirectStart)], ['http.request.fetch_start', C(e.fetchStart)], ['http.request.domain_lookup_start', C(e.domainLookupStart)], ['http.request.domain_lookup_end', C(e.domainLookupEnd)], ['http.request.connect_start', C(e.connectStart)], ['http.request.secure_connection_start', C(e.secureConnectionStart)], ['http.request.connection_end', C(e.connectEnd)], ['http.request.request_start', C(e.requestStart)], ['http.request.response_start', C(e.responseStart)], ['http.request.response_end', C(e.responseEnd)]] : n;
				})(n).forEach((t) => e.setAttribute(...t)),
					setTimeout(r);
		});
	});
}
function C(e = 0) {
	return ((T.Z1 || performance.timeOrigin) + e) / 1000;
}
function g(e) {
	try {
		return new URL(e, O.m9.location.origin).href;
	} catch (e) {
		return;
	}
}
