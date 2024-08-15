Object.defineProperty(t, '__esModule', { value: !0 }),
	(t.calculateChange = function (e, t, n, r, i) {
		var a = i.clientWidth,
			s = i.clientHeight,
			o = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
			l = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
			u = o - (i.getBoundingClientRect().left + window.pageXOffset),
			c = l - (i.getBoundingClientRect().top + window.pageYOffset);
		if ('vertical' === n) {
			var d = void 0;
			if (((d = c < 0 ? 0 : c > s ? 1 : Math.round((100 * c) / s) / 100), t.a !== d))
				return {
					h: t.h,
					s: t.s,
					l: t.l,
					a: d,
					source: 'rgb'
				};
		} else {
			var _ = void 0;
			if (r !== (_ = u < 0 ? 0 : u > a ? 1 : Math.round((100 * u) / a) / 100))
				return {
					h: t.h,
					s: t.s,
					l: t.l,
					a: _,
					source: 'rgb'
				};
		}
		return null;
	});
