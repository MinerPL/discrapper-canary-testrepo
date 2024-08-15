n.r(e),
	n.d(e, {
		default: function () {
			return c;
		}
	});
var a = n(735250);
n(470079);
var i = n(120356),
	o = n.n(i),
	r = n(481060),
	s = n(761705),
	l = n(278054);
function c(t) {
	let { className: e, transitionState: n, items: i, startingIndex: c, onClose: u, onIndexChange: d, modalCarouselClassName: h, modalCarouselItemClassName: p } = t;
	return (0, a.jsx)(r.ModalRoot, {
		hideShadow: !0,
		className: o()(l.carouselModal, e),
		size: r.ModalSize.DYNAMIC,
		transitionState: n,
		'aria-label': '',
		onClick: u,
		children: (0, a.jsx)(s.Z, {
			className: h,
			items: i,
			startWith: c,
			onIndexChange: d,
			modalCarouselItemClassName: p
		})
	});
}
