var n = t(735250);
t(470079);
var a = t(120356),
	i = t.n(a),
	r = t(695242);
s.Z = function (e) {
	let { className: s, imageClassName: a, boostInCooldown: o, useReducedMotion: l } = e;
	return (0, n.jsx)('div', {
		className: i()(r.imageWrapper, s, { [r.cooldown]: o }),
		children: (0, n.jsx)('img', {
			className: i()(r.image, a, { [r.cooldownImage]: o }),
			src: o ? t(971149) : l ? t(908635) : t(83957),
			alt: ''
		})
	});
};
