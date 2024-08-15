r.d(t, {
	Z: function () {
		return o;
	}
});
var n = r(573736),
	a = r(886115);
function o(e, t, r = 250, o, E, s, c) {
	if (!s.exception || !s.exception.values || !c || !(0, n.V9)(c.originalException, Error)) return;
	let I = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
	I &&
		(s.exception.values = (function (e, t) {
			return e.map((e) => (e.value && (e.value = (0, a.$G)(e.value, t)), e));
		})(
			(function e(t, r, a, o, E, s, c, I) {
				if (s.length >= a + 1) return s;
				let u = [...s];
				if ((0, n.V9)(o[E], Error)) {
					i(c, I);
					let n = t(r, o[E]),
						s = u.length;
					_(n, E, s, I), (u = e(t, r, a, o[E], E, [n, ...u], n, s));
				}
				return (
					Array.isArray(o.errors) &&
						o.errors.forEach((o, s) => {
							if ((0, n.V9)(o, Error)) {
								i(c, I);
								let n = t(r, o),
									l = u.length;
								_(n, `errors[${s}]`, l, I), (u = e(t, r, a, o, E, [n, ...u], n, l));
							}
						}),
					u
				);
			})(e, t, E, c.originalException, o, s.exception.values, I, 0),
			r
		));
}
function i(e, t) {
	(e.mechanism = e.mechanism || {
		type: 'generic',
		handled: !0
	}),
		(e.mechanism = {
			...e.mechanism,
			...('AggregateError' === e.type && { is_exception_group: !0 }),
			exception_id: t
		});
}
function _(e, t, r, n) {
	(e.mechanism = e.mechanism || {
		type: 'generic',
		handled: !0
	}),
		(e.mechanism = {
			...e.mechanism,
			type: 'chained',
			source: t,
			exception_id: r,
			parent_id: n
		});
}
