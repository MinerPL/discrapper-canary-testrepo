n.d(t, {
	U: function () {
		return u;
	}
});
var r = n(175806),
	i = n(601640);
function o(e, t) {
	(null == t || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function u(e, t, n) {
	var u,
		a,
		c =
			((a = 2),
			(function (e) {
				if (Array.isArray(e)) return e;
			})((u = (0, i.r)(e, t, n))) ||
				(function (e, t) {
					var n,
						r,
						i = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
					if (null != i) {
						var o = [],
							u = !0,
							a = !1;
						try {
							for (i = i.call(e); !(u = (n = i.next()).done) && (o.push(n.value), !t || o.length !== t); u = !0);
						} catch (e) {
							(a = !0), (r = e);
						} finally {
							try {
								!u && null != i.return && i.return();
							} finally {
								if (a) throw r;
							}
						}
						return o;
					}
				})(u, 2) ||
				(function (e, t) {
					if (e) {
						if ('string' == typeof e) return o(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
						if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t);
					}
				})(u, a) ||
				(function () {
					throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
				})()),
		s = c[0],
		l = c[1];
	return (
		(0, r.L)(
			function () {
				var t = e.getHandlerId();
				if (null != t) return e.subscribeToStateChange(l, { handlerIds: [t] });
			},
			[e, l]
		),
		s
	);
}
