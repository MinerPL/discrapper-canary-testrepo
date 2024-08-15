r.d(t, {
	GK: function () {
		return D;
	},
	Iw: function () {
		return M;
	},
	V0: function () {
		return L;
	},
	_d: function () {
		return g;
	},
	qp: function () {
		return h;
	},
	yn: function () {
		return C;
	}
});
var n = r(370541),
	a = r(731889),
	o = r(622916),
	i = r(356442),
	_ = r(263449),
	E = r(833873),
	s = r(255768),
	c = r(988097),
	I = r(366569),
	u = r(73453),
	l = r(99342),
	R = r(696486),
	A = r(305625),
	T = r(966497),
	d = r(787659),
	N = r(789112),
	p = r(275689),
	O = r(793373),
	f = r(881243);
let S = '__SENTRY_SUPPRESS_TRACING__';
function D(e, t) {
	let r = U();
	if (r.startSpan) return r.startSpan(e, t);
	let n = m(e),
		{ forceTransaction: a, parentSpan: o } = e;
	return (0, _.$e)(e.scope, () =>
		v(o)(() => {
			let r = (0, _.nZ)(),
				o = y(r),
				i =
					e.onlyIfParent && !o
						? new N.b()
						: P({
								parentSpan: o,
								spanArguments: n,
								forceTransaction: a,
								scope: r
							});
			return (
				(0, l.D)(r, i),
				(0, I.i)(
					() => t(i),
					() => {
						let { status: e } = (0, R.XU)(i);
						i.isRecording() &&
							(!e || 'ok' === e) &&
							i.setStatus({
								code: O.jt,
								message: 'internal_error'
							});
					},
					() => i.end()
				)
			);
		})
	);
}
function L(e, t) {
	let r = U();
	if (r.startSpanManual) return r.startSpanManual(e, t);
	let n = m(e),
		{ forceTransaction: a, parentSpan: o } = e;
	return (0, _.$e)(e.scope, () =>
		v(o)(() => {
			let r = (0, _.nZ)(),
				o = y(r),
				i =
					e.onlyIfParent && !o
						? new N.b()
						: P({
								parentSpan: o,
								spanArguments: n,
								forceTransaction: a,
								scope: r
							});
			function E() {
				i.end();
			}
			return (
				(0, l.D)(r, i),
				(0, I.i)(
					() => t(i, E),
					() => {
						let { status: e } = (0, R.XU)(i);
						i.isRecording() &&
							(!e || 'ok' === e) &&
							i.setStatus({
								code: O.jt,
								message: 'internal_error'
							});
					}
				)
			);
		})
	);
}
function h(e) {
	let t = U();
	if (t.startInactiveSpan) return t.startInactiveSpan(e);
	let r = m(e),
		{ forceTransaction: n, parentSpan: a } = e;
	return (e.scope ? (t) => (0, _.$e)(e.scope, t) : void 0 !== a ? (e) => g(a, e) : (e) => e())(() => {
		let t = (0, _.nZ)(),
			a = y(t);
		return e.onlyIfParent && !a
			? new N.b()
			: P({
					parentSpan: a,
					spanArguments: r,
					forceTransaction: n,
					scope: t
				});
	});
}
let C = ({ sentryTrace: e, baggage: t }, r) =>
	(0, _.$e)((a) => {
		let o = (0, n.pT)(e, t);
		return a.setPropagationContext(o), r();
	});
function g(e, t) {
	let r = U();
	return r.withActiveSpan ? r.withActiveSpan(e, t) : (0, _.$e)((r) => ((0, l.D)(r, e || void 0), t(r)));
}
function M(e) {
	return (0, _.$e)((t) => (t.setPropagationContext((0, a.Q)()), s.X && o.kg.info(`Starting a new trace with id ${t.getPropagationContext().traceId}`), g(null, e)));
}
function P({ parentSpan: e, spanArguments: t, forceTransaction: r, scope: n }) {
	let a;
	if (!(0, u.z)()) return new N.b();
	let o = (0, _.aF)();
	if (e && !r)
		(a = (function (e, t, r) {
			let { spanId: n, traceId: a } = e.spanContext(),
				o = !t.getScopeData().sdkProcessingMetadata[S] && (0, R.Tt)(e),
				i = o
					? new p.s({
							...r,
							parentSpanId: n,
							traceId: a,
							sampled: o
						})
					: new N.b({ traceId: a });
			(0, R.j5)(e, i);
			let E = (0, _.s3)();
			return E && (E.emit('spanStart', i), r.endTimestamp && E.emit('spanEnd', i)), i;
		})(e, n, t)),
			(0, R.j5)(e, a);
	else if (e) {
		let r = (0, A.jC)(e),
			{ traceId: o, spanId: i } = e.spanContext(),
			_ = (0, R.Tt)(e);
		(a = G(
			{
				traceId: o,
				parentSpanId: i,
				...t
			},
			n,
			_
		)),
			(0, A.Lh)(a, r);
	} else {
		let {
			traceId: e,
			dsc: r,
			parentSpanId: i,
			sampled: _
		} = {
			...o.getPropagationContext(),
			...n.getPropagationContext()
		};
		(a = G(
			{
				traceId: e,
				parentSpanId: i,
				...t
			},
			n,
			_
		)),
			r && (0, A.Lh)(a, r);
	}
	return (0, T.Z)(a), (0, f.YJ)(a, n, o), a;
}
function m(e) {
	let t = {
		isStandalone: (e.experimental || {}).standalone,
		...e
	};
	if (e.startTime) {
		let r = { ...t };
		return (r.startTimestamp = (0, R.$k)(e.startTime)), delete r.startTime, r;
	}
	return t;
}
function U() {
	let e = (0, i.c)();
	return (0, E.G)(e);
}
function G(e, t, r) {
	let n = (0, _.s3)(),
		a = (n && n.getOptions()) || {},
		{ name: o = '', attributes: i } = e,
		[E, s] = t.getScopeData().sdkProcessingMetadata[S]
			? [!1]
			: (0, d.R)(a, {
					name: o,
					parentSampled: r,
					attributes: i,
					transactionContext: {
						name: o,
						parentSampled: r
					}
				}),
		I = new p.s({
			...e,
			attributes: {
				[c.Zj]: 'custom',
				...e.attributes
			},
			sampled: E
		});
	return void 0 !== s && I.setAttribute(c.TE, s), n && n.emit('spanStart', I), I;
}
function y(e) {
	let t = (0, l.Y)(e);
	if (!t) return;
	let r = (0, _.s3)();
	return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0, R.Gx)(t) : t;
}
function v(e) {
	return void 0 !== e ? (t) => g(e, t) : (e) => e();
}
