r.d(t, {
	$k: function () {
		return N;
	},
	Dp: function () {
		return g;
	},
	Gx: function () {
		return M;
	},
	HN: function () {
		return P;
	},
	HR: function () {
		return A;
	},
	Hb: function () {
		return d;
	},
	Tt: function () {
		return f;
	},
	XU: function () {
		return O;
	},
	_4: function () {
		return S;
	},
	ed: function () {
		return C;
	},
	i0: function () {
		return R;
	},
	j5: function () {
		return h;
	},
	ve: function () {
		return l;
	},
	wy: function () {
		return T;
	},
	yc: function () {
		return m;
	}
});
var n = r(370336),
	a = r(370541),
	o = r(101284),
	i = r(833873),
	_ = r(356442),
	E = r(263449),
	s = r(899195),
	c = r(988097),
	I = r(793373),
	u = r(99342);
let l = 0,
	R = 1;
function A(e) {
	let { spanId: t, traceId: r } = e.spanContext(),
		{ data: a, op: o, parent_span_id: i, status: _, origin: E } = O(e);
	return (0, n.Jr)({
		parent_span_id: i,
		span_id: t,
		trace_id: r,
		data: a,
		op: o,
		status: _,
		origin: E
	});
}
function T(e) {
	let { spanId: t, traceId: r } = e.spanContext(),
		{ parent_span_id: a } = O(e);
	return (0, n.Jr)({
		parent_span_id: a,
		span_id: t,
		trace_id: r
	});
}
function d(e) {
	let { traceId: t, spanId: r } = e.spanContext(),
		n = f(e);
	return (0, a.$p)(t, r, n);
}
function N(e) {
	return 'number' == typeof e ? p(e) : Array.isArray(e) ? e[0] + e[1] / 1000000000 : e instanceof Date ? p(e.getTime()) : (0, o.ph)();
}
function p(e) {
	return e > 9999999999 ? e / 1000 : e;
}
function O(e) {
	if (
		(function (e) {
			return 'function' == typeof e.getSpanJSON;
		})(e)
	)
		return e.getSpanJSON();
	try {
		let { spanId: t, traceId: r } = e.spanContext();
		if (
			(function (e) {
				return !!e.attributes && !!e.startTime && !!e.name && !!e.endTime && !!e.status;
			})(e)
		) {
			let { attributes: a, startTime: o, name: i, endTime: _, parentSpanId: E, status: I } = e;
			return (0, n.Jr)({
				span_id: t,
				trace_id: r,
				data: a,
				description: i,
				parent_span_id: E,
				start_timestamp: N(o),
				timestamp: N(_) || void 0,
				status: S(I),
				op: a[c.$J],
				origin: a[c.S3],
				_metrics_summary: (0, s.y)(e)
			});
		}
		return {
			span_id: t,
			trace_id: r
		};
	} catch (e) {
		return {};
	}
}
function f(e) {
	let { traceFlags: t } = e.spanContext();
	return t === R;
}
function S(e) {
	return e && e.code !== I.pq ? (e.code === I.OP ? 'ok' : e.message || 'unknown_error') : void 0;
}
let D = '_sentryChildSpans',
	L = '_sentryRootSpan';
function h(e, t) {
	let r = e[L] || e;
	(0, n.xp)(t, L, r), e[D] ? e[D].add(t) : (0, n.xp)(e, D, new Set([t]));
}
function C(e, t) {
	e[D] && e[D].delete(t);
}
function g(e) {
	let t = new Set();
	return (
		!(function e(r) {
			if (!t.has(r)) {
				if (f(r)) for (let n of (t.add(r), r[D] ? Array.from(r[D]) : [])) e(n);
			}
		})(e),
		Array.from(t)
	);
}
function M(e) {
	return e[L] || e;
}
function P() {
	let e = (0, _.c)(),
		t = (0, i.G)(e);
	return t.getActiveSpan ? t.getActiveSpan() : (0, u.Y)((0, E.nZ)());
}
function m(e, t, r, n, a, o) {
	let i = P();
	i && (0, s.V)(i, e, t, r, n, a, o);
}
