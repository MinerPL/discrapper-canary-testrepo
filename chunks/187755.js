n.d(t, {
	Z: function () {
		return l;
	}
});
var r = n(193603),
	i = n(951516),
	a = n(780603),
	s = n(217224),
	o = n(633605);
function l(e, t) {
	(0, i.Z)(1, arguments);
	var n,
		l,
		u,
		c,
		d,
		_,
		E,
		f,
		h = (0, o.j)(),
		p = (0, s.Z)(
			null !==
				(n =
					null !==
						(l =
							null !==
								(u =
									null !== (c = null == t ? void 0 : t.firstWeekContainsDate) && void 0 !== c
										? c
										: null == t
											? void 0
											: null === (d = t.locale) || void 0 === d
												? void 0
												: null === (_ = d.options) || void 0 === _
													? void 0
													: _.firstWeekContainsDate) && void 0 !== u
								? u
								: h.firstWeekContainsDate) && void 0 !== l
						? l
						: null === (E = h.locale) || void 0 === E
							? void 0
							: null === (f = E.options) || void 0 === f
								? void 0
								: f.firstWeekContainsDate) && void 0 !== n
				? n
				: 1
		),
		I = (0, r.Z)(e, t),
		m = new Date(0);
	return m.setUTCFullYear(I, 0, p), m.setUTCHours(0, 0, 0, 0), (0, a.Z)(m, t);
}
