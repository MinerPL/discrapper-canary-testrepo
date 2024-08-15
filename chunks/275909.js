var n = t(735250);
t(470079);
var a = t(120356),
	i = t.n(a),
	r = t(283029),
	o = t(400750);
s.Z = function (e) {
	let { className: s, hasCooldown: a, isCanceled: l, useReducedMotion: c } = e;
	return (0, n.jsxs)('div', {
		className: i()(o.boostIconContainer, s),
		children: [
			l
				? (0, n.jsx)('img', {
						className: i()(o.boostIcon, o.boostIconCanceled),
						src: t(457026),
						alt: ''
					})
				: (0, n.jsx)(r.Z, {
						className: o.boostIcon,
						boostInCooldown: a,
						useReducedMotion: c
					}),
			!l &&
				a &&
				(0, n.jsx)('img', {
					className: o.snowflake,
					src: t(765028),
					alt: ''
				})
		]
	});
};
