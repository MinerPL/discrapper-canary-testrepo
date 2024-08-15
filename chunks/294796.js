n.d(t, {
	f: function () {
		return o;
	}
});
var r = n(470079),
	i = n(209851),
	a = n(601640);
function s(e, t) {
	(null == t || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function o(e) {
	var t,
		n,
		o = (0, i.N)().getMonitor();
	var l =
			((n = 2),
			(function (e) {
				if (Array.isArray(e)) return e;
			})((t = (0, a.r)(o, e))) ||
				(function (e, t) {
					var n,
						r,
						i = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
					if (null != i) {
						var a = [],
							s = !0,
							o = !1;
						try {
							for (i = i.call(e); !(s = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t); s = !0);
						} catch (e) {
							(o = !0), (r = e);
						} finally {
							try {
								!s && null != i.return && i.return();
							} finally {
								if (o) throw r;
							}
						}
						return a;
					}
				})(t, 2) ||
				(function (e, t) {
					if (e) {
						if ('string' == typeof e) return s(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
						if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
					}
				})(t, n) ||
				(function () {
					throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
				})()),
		u = l[0],
		c = l[1];
	return (
		(0, r.useEffect)(function () {
			return o.subscribeToOffsetChange(c);
		}),
		(0, r.useEffect)(function () {
			return o.subscribeToStateChange(c);
		}),
		u
	);
}
