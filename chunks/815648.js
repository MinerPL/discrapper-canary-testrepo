var r = n(325008),
	i = n(581031),
	a = n(4340),
	s = URLSearchParams.prototype,
	o = i(s.forEach);
r &&
	!('size' in s) &&
	a(s, 'size', {
		get: function () {
			var e = 0;
			return (
				o(this, function () {
					e++;
				}),
				e
			);
		},
		configurable: !0,
		enumerable: !0
	});
