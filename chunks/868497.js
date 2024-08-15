r.d(t, {
	m: function () {
		return A;
	}
});
var n = r(873567),
	a = r(370541),
	o = r(285883),
	i = r(573736),
	_ = r(263449),
	E = r(988097),
	s = r(73453),
	c = r(696486),
	I = r(789112),
	u = r(793373),
	l = r(152228),
	R = r(305625);
function A(e, t, r, A, T = 'auto.http.browser') {
	if (!e.fetchData) return;
	let d = (0, s.z)() && t(e.fetchData.url);
	if (e.endTimestamp && d) {
		let t = e.fetchData.__span;
		if (!t) return;
		let r = A[t];
		r &&
			((function (e, t) {
				if (t.response) {
					(0, u.Q0)(e, t.response.status);
					let r = t.response && t.response.headers && t.response.headers.get('content-length');
					if (r) {
						let t = parseInt(r);
						t > 0 && e.setAttribute('http.response_content_length', t);
					}
				} else
					t.error &&
						e.setStatus({
							code: u.jt,
							message: 'internal_error'
						});
				e.end();
			})(r, e),
			delete A[t]);
		return;
	}
	let N = (0, _.nZ)(),
		p = (0, _.s3)(),
		{ method: O, url: f } = e.fetchData,
		S = (function (e) {
			try {
				return new URL(e).href;
			} catch (e) {
				return;
			}
		})(f),
		D = S ? (0, n.en)(S).host : void 0,
		L = !!(0, c.HN)(),
		h =
			d && L
				? (0, l.qp)({
						name: `${O} ${f}`,
						attributes: {
							url: f,
							type: 'fetch',
							'http.method': O,
							'http.url': S,
							'server.address': D,
							[E.S3]: T,
							[E.$J]: 'http.client'
						}
					})
				: new I.b();
	if (((e.fetchData.__span = h.spanContext().spanId), (A[h.spanContext().spanId] = h), r(e.fetchData.url) && p)) {
		let t = e.args[0];
		e.args[1] = e.args[1] || {};
		let r = e.args[1];
		r.headers = (function (e, t, r, n, E) {
			let {
					traceId: s,
					spanId: I,
					sampled: u,
					dsc: l
				} = {
					...(0, _.aF)().getPropagationContext(),
					...r.getPropagationContext()
				},
				A = E ? (0, c.Hb)(E) : (0, a.$p)(s, I, u),
				T = (0, o.IQ)(l || (E ? (0, R.jC)(E) : (0, R._l)(s, t))),
				d = n.headers || ('undefined' != typeof Request && (0, i.V9)(e, Request) ? e.headers : void 0);
			if (!d)
				return {
					'sentry-trace': A,
					baggage: T
				};
			if ('undefined' != typeof Headers && (0, i.V9)(d, Headers)) {
				let e = new Headers(d);
				return e.append('sentry-trace', A), T && e.append(o.bU, T), e;
			}
			if (Array.isArray(d)) {
				let e = [...d, ['sentry-trace', A]];
				return T && e.push([o.bU, T]), e;
			} else {
				let e = 'baggage' in d ? d.baggage : void 0,
					t = [];
				return (
					Array.isArray(e) ? t.push(...e) : e && t.push(e),
					T && t.push(T),
					{
						...d,
						'sentry-trace': A,
						baggage: t.length > 0 ? t.join(',') : void 0
					}
				);
			}
		})(t, p, N, r, (0, s.z)() && L ? h : void 0);
	}
	return h;
}
