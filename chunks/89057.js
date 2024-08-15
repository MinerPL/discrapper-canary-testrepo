n.d(a, {
	Vq: function () {
		return B;
	},
	c8: function () {
		return k;
	},
	oQ: function () {
		return x;
	}
});
var r = n(735250);
n(470079);
var t = n(120356),
	o = n.n(t),
	i = n(692547),
	s = n(780384),
	c = n(481060),
	d = n(410030),
	f = n(600164),
	l = n(63063),
	_ = n(211242),
	u = n(981631),
	m = n(689938),
	g = n(205452),
	b = n(51125),
	h = n(47268);
function p(e) {
	let { className: a } = e,
		n = (0, d.ZP)(),
		t = (0, s.wj)(n) ? b : h;
	return (0, r.jsxs)('div', {
		className: o()(g.container, a),
		children: [
			(0, r.jsx)(c.Heading, {
				className: g.header,
				variant: 'heading-xl/semibold',
				children: m.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER
			}),
			(0, r.jsxs)(c.Text, {
				className: g.description,
				variant: 'text-md/normal',
				color: 'header-secondary',
				children: [(0, r.jsx)('p', { children: m.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY }), (0, r.jsx)('p', { children: m.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({ helpdeskArticle: l.Z.getArticleURL(u.BhN.BLOCKED_PAYMENTS) }) })]
			}),
			(0, r.jsx)('img', {
				src: t,
				className: g.splashImage,
				alt: 'Blocked Payments'
			})
		]
	});
}
function k() {
	return (0, r.jsx)(p, { className: g.settings });
}
function B(e) {
	let { onClose: a } = e;
	return (0, r.jsxs)(r.Fragment, {
		children: [
			(0, r.jsx)(c.ModalHeader, {
				className: g.blockedPaymentsModalHeader,
				justify: f.Z.Justify.END,
				children: (0, r.jsx)(c.ModalCloseButton, { onClick: a })
			}),
			(0, r.jsx)(c.ModalContent, {
				className: g.blockedPaymentsModalContent,
				children: (0, r.jsx)(p, { className: g.modal })
			})
		]
	});
}
function x(e) {
	let { className: a } = e;
	return (0, _.Q)()
		? (0, r.jsxs)(c.Card, {
				className: o()(g.blockedPaymentsWarning, a),
				type: c.Card.Types.CUSTOM,
				children: [
					(0, r.jsx)(c.CircleWarningIcon, {
						size: 'custom',
						width: 20,
						height: 20,
						className: g.blockedPaymentsWarningIcon,
						color: i.Z.unsafe_rawColors.YELLOW_300.css
					}),
					(0, r.jsx)(c.Text, {
						variant: 'text-sm/normal',
						children: m.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({ helpdeskArticle: l.Z.getArticleURL(u.BhN.BLOCKED_PAYMENTS) })
					})
				]
			})
		: null;
}
