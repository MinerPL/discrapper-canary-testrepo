t.d(n, {
	Z: function () {
		return u;
	}
});
var a = t(735250);
t(470079);
var s = t(481060),
	i = t(131388),
	l = t(409813),
	r = t(750143),
	o = t(742242),
	d = t(60314);
function u(e) {
	let { step: n, onClose: t } = e,
		u = (0, i.Z)(r.X);
	return n === l.h8.BENEFITS || n === l.h8.CONFIRM
		? null
		: (0, a.jsxs)('div', {
				className: o.headerContainer,
				children: [
					!u &&
						(0, a.jsx)('div', {
							className: o.headerImageContainer,
							'aria-hidden': 'true',
							'data-accessibility': 'desaturate',
							children: (0, a.jsx)('img', {
								src: d,
								alt: '',
								className: o.headerImage
							})
						}),
					(0, a.jsx)(s.ModalCloseButton, {
						withCircleBackground: !0,
						className: o.closeButton,
						onClick: t
					})
				]
			});
}
