t.d(n, {
	H: function () {
		return i;
	}
});
var r,
	i,
	l = t(735250);
t(470079);
var a = t(120356),
	s = t.n(a),
	o = t(768581),
	c = t(73346),
	u = t(859993);
((r = i || (i = {}))[(r.SMALL = 40)] = 'SMALL'), (r[(r.MEDIUM = 66)] = 'MEDIUM');
let d = {
	40: u.small,
	66: u.medium
};
n.Z = (e) => {
	let n,
		{ application: t, size: r, asset: i, className: a } = e;
	return (
		(n =
			null != i
				? (0, c._W)(t.id, i, r)
				: o.ZP.getApplicationIconURL({
						id: t.id,
						icon: t.icon,
						size: r
					})),
		(0, l.jsx)('img', {
			alt: '',
			src: n,
			className: s()(u.icon, d[r], a)
		})
	);
};
