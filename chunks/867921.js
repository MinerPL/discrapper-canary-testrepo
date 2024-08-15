r.d(t, {
	q: function () {
		return c;
	}
});
var n = r(672410),
	a = r(617726),
	o = r(14588),
	i = r(928541),
	_ = r(622916),
	E = r(116698),
	s = r(255768);
function c(e, t, r = (0, n.x)(e.bufferSize || 64)) {
	let c = {};
	return {
		send: function (n) {
			let u = [];
			if (
				((0, a.gv)(n, (t, r) => {
					let n = (0, a.mL)(r);
					if ((0, o.Q)(c, n)) {
						let a = I(t, r);
						e.recordDroppedEvent('ratelimit_backoff', n, a);
					} else u.push(t);
				}),
				0 === u.length)
			)
				return (0, i.WD)({});
			let l = (0, a.Jd)(n[0], u),
				R = (t) => {
					(0, a.gv)(l, (r, n) => {
						let o = I(r, n);
						e.recordDroppedEvent(t, (0, a.mL)(n), o);
					});
				};
			return r
				.add(() =>
					t({ body: (0, a.V$)(l) }).then(
						(e) => (
							void 0 !== e.statusCode &&
								(e.statusCode < 200 || e.statusCode >= 300) &&
								s.X &&
								_.kg.warn(`Sentry responded with status code ${e.statusCode} to sent event.`),
							(c = (0, o.WG)(c, e)),
							e
						),
						(e) => {
							throw (R('network_error'), e);
						}
					)
				)
				.then(
					(e) => e,
					(e) => {
						if (e instanceof E.b)
							return (
								s.X && _.kg.error('Skipped sending event because buffer is full.'), R('queue_overflow'), (0, i.WD)({})
							);
						throw e;
					}
				);
		},
		flush: (e) => r.drain(e)
	};
}
function I(e, t) {
	if ('event' === t || 'transaction' === t) return Array.isArray(e) ? e[1] : void 0;
}
