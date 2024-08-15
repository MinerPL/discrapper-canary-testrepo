var e = n(525305),
	i = n(354848),
	o = n(332916),
	u = n(641236)('toStringTag'),
	c = Object,
	a =
		'Arguments' ===
		o(
			(function () {
				return arguments;
			})()
		),
	s = function (t, r) {
		try {
			return t[r];
		} catch (t) {}
	};
t.exports = e
	? o
	: function (t) {
			var r, n, e;
			return void 0 === t
				? 'Undefined'
				: null === t
					? 'Null'
					: 'string' == typeof (n = s((r = c(t)), u))
						? n
						: a
							? o(r)
							: 'Object' === (e = o(r)) && i(r.callee)
								? 'Arguments'
								: e;
		};
