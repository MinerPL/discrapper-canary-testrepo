var i = n(392711),
	a = n(897325);
t.Z = (0, i.memoize)(
	function (e) {
		let { theme: t, layoutType: n } = e;
		return (0, a._)(t, n);
	},
	(e) => {
		let { theme: t, layoutType: n } = e;
		return ''.concat(t, ':').concat(n);
	}
);
