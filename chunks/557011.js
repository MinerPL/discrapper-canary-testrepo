n.d(t, {
	T: function () {
		return r;
	}
});
var r = function (e, t, n, r) {
	var i = r.clientWidth,
		a = r.clientHeight,
		s = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
		o = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
		l = s - (r.getBoundingClientRect().left + window.pageXOffset),
		u = o - (r.getBoundingClientRect().top + window.pageYOffset);
	if ('vertical' === t) {
		var c = void 0;
		if (((c = u < 0 ? 359 : u > a ? 0 : (360 * (-((100 * u) / a) + 100)) / 100), n.h !== c))
			return {
				h: c,
				s: n.s,
				l: n.l,
				a: n.a,
				source: 'hsl'
			};
	} else {
		var d = void 0;
		if (((d = l < 0 ? 0 : l > i ? 359 : (((100 * l) / i) * 360) / 100), n.h !== d))
			return {
				h: d,
				s: n.s,
				l: n.l,
				a: n.a,
				source: 'hsl'
			};
	}
	return null;
};
