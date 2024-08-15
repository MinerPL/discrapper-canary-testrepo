n.d(t, {
	Z: function () {
		return o;
	}
});
var r = n(528734),
	i = n(951516),
	a = n(217224),
	s = n(633605);
function o(e, t, n) {
	(0, i.Z)(2, arguments);
	var o,
		l,
		u,
		c,
		d,
		_,
		E,
		f,
		h = (0, s.j)(),
		p = (0, a.Z)(
			null !==
				(o =
					null !==
						(l =
							null !==
								(u =
									null !== (c = null == n ? void 0 : n.weekStartsOn) && void 0 !== c
										? c
										: null == n
											? void 0
											: null === (d = n.locale) || void 0 === d
												? void 0
												: null === (_ = d.options) || void 0 === _
													? void 0
													: _.weekStartsOn) && void 0 !== u
								? u
								: h.weekStartsOn) && void 0 !== l
						? l
						: null === (E = h.locale) || void 0 === E
							? void 0
							: null === (f = E.options) || void 0 === f
								? void 0
								: f.weekStartsOn) && void 0 !== o
				? o
				: 0
		);
	if (!(p >= 0 && p <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
	var I = (0, r.default)(e),
		m = (0, a.Z)(t),
		T = I.getUTCDay();
	return I.setUTCDate(I.getUTCDate() + ((((m % 7) + 7) % 7 < p ? 7 : 0) + m - T)), I;
}
