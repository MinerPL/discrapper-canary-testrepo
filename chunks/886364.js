var i = n(735250);
n(470079);
t.Z = (e) => {
	let { id: t, startColor: n, stopColor: a, color: s, stop: r } = e;
	return (0, i.jsxs)('linearGradient', {
		id: t,
		children: [
			(0, i.jsx)('stop', {
				offset: '0',
				stopColor: n
			}),
			(0, i.jsx)('stop', {
				offset: r,
				stopColor: a
			}),
			(0, i.jsx)('stop', {
				offset: r,
				stopColor: s
			}),
			(0, i.jsx)('stop', {
				offset: '1',
				stopColor: s
			})
		]
	});
};
