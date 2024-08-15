n.d(t, {
	X: function () {
		return s;
	}
});
var r = n(829105),
	i = n(150076),
	a = n(695170);
function s(e, t, n, s, o, l) {
	var u = {},
		c = e.accept;
	function d(e, t) {
		n.forEach(function (n) {
			n.between(e, t, !0).forEach(function (e) {
				u[Number(e)] = !0;
			});
		});
	}
	o.forEach(function (e) {
		u[Number(new r.M(e, l).rezonedDate())] = !0;
	}),
		(e.accept = function (e) {
			var t = Number(e);
			return isNaN(t)
				? c.call(this, e)
				: !!u[t] || (d(new Date(t - 1), new Date(t + 1)), !!u[t]) || ((u[t] = !0), c.call(this, e));
		}),
		'between' === e.method &&
			(d(e.args.after, e.args.before),
			(e.accept = function (e) {
				var t = Number(e);
				return !!u[t] || ((u[t] = !0), c.call(this, e));
			}));
	for (var _ = 0; _ < s.length; _++) {
		var E = new r.M(s[_], l).rezonedDate();
		if (!e.accept(new Date(E.getTime()))) break;
	}
	t.forEach(function (t) {
		(0, i.h)(e, t.options);
	});
	var f = e._result;
	switch (((0, a.DY)(f), e.method)) {
		case 'all':
		case 'between':
			return f;
		case 'before':
			return (f.length && f[f.length - 1]) || null;
		default:
			return (f.length && f[0]) || null;
	}
}
