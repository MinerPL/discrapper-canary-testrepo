n.d(t, {
	Z: function () {
		return l;
	}
});
var r = n(528734),
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
		h = (0, r.default)(e),
		p = h.getUTCFullYear(),
		I = (0, o.j)(),
		m = (0, s.Z)(
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
								: I.firstWeekContainsDate) && void 0 !== l
						? l
						: null === (E = I.locale) || void 0 === E
							? void 0
							: null === (f = E.options) || void 0 === f
								? void 0
								: f.firstWeekContainsDate) && void 0 !== n
				? n
				: 1
		);
	if (!(m >= 1 && m <= 7)) throw RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
	var T = new Date(0);
	T.setUTCFullYear(p + 1, 0, m), T.setUTCHours(0, 0, 0, 0);
	var g = (0, a.Z)(T, t),
		S = new Date(0);
	S.setUTCFullYear(p, 0, m), S.setUTCHours(0, 0, 0, 0);
	var A = (0, a.Z)(S, t);
	return h.getTime() >= g.getTime() ? p + 1 : h.getTime() >= A.getTime() ? p : p - 1;
}
