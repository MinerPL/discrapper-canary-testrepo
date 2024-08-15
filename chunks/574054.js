r.d(t, {
	R: function () {
		return function e(t, r, _, E = 0) {
			return new n.cW((n, s) => {
				let c = t[E];
				if (null === r || 'function' != typeof c) n(r);
				else {
					let I = c({ ...r }, _);
					i.X && c.id && null === I && a.kg.log(`Event processor "${c.id}" dropped event`),
						(0, o.J8)(I)
							? I.then((r) => e(t, r, _, E + 1).then(n)).then(null, s)
							: e(t, I, _, E + 1)
									.then(n)
									.then(null, s);
				}
			});
		};
	}
});
var n = r(928541),
	a = r(622916),
	o = r(573736),
	i = r(255768);
