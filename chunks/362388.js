var r = n(4609),
	i = Math.max;
e.exports = function (e, t, n) {
	return (
		(t = i(void 0 === t ? e.length - 1 : t, 0)),
		function () {
			for (var a = arguments, s = -1, o = i(a.length - t, 0), l = Array(o); ++s < o; ) l[s] = a[t + s];
			s = -1;
			for (var u = Array(t + 1); ++s < t; ) u[s] = a[s];
			return (u[t] = n(l)), r(e, this, u);
		}
	);
};
