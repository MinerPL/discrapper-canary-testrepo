var r = n(147018),
	i = n(339718),
	a = n(49693),
	s = n(959318),
	o = n(345374);
r(
	{
		target: 'Array',
		proto: !0
	},
	{
		at: function (e) {
			var t = i(this),
				n = a(t),
				r = s(e),
				o = r >= 0 ? r : n + r;
			return o < 0 || o >= n ? void 0 : t[o];
		}
	}
),
	o('at');
