t.d(a, {
	C: function () {
		return i;
	}
});
var n = t(735250);
t(470079);
var r = t(481060),
	s = t(600164),
	o = t(689938),
	l = t(564510),
	c = t(387852);
function i(e) {
	let { onContinue: a, onClose: t, title: i, body: d } = e;
	return (0, n.jsxs)(n.Fragment, {
		children: [
			(0, n.jsxs)(r.ModalHeader, {
				direction: s.Z.Direction.VERTICAL,
				className: l.header,
				separator: !1,
				children: [
					(0, n.jsx)('img', {
						src: c,
						className: l.illustration,
						width: '254',
						height: '127',
						alt: ''
					}),
					(0, n.jsx)(r.Heading, {
						className: l.title,
						variant: 'heading-xl/extrabold',
						children: i
					}),
					null != t &&
						(0, n.jsx)(r.ModalCloseButton, {
							className: l.closeButton,
							onClick: t
						})
				]
			}),
			(0, n.jsx)(r.ModalContent, {
				className: l.body,
				paddingFix: !1,
				children: (0, n.jsx)(r.Text, {
					tag: 'p',
					variant: 'text-md/normal',
					color: 'header-secondary',
					children: d
				})
			}),
			(0, n.jsx)(r.ModalFooter, {
				className: l.footer,
				children: (0, n.jsxs)(r.Button, {
					className: l.footerButton,
					color: r.Button.Colors.BRAND,
					onClick: a,
					children: [
						o.Z.Messages.TRY_AGAIN,
						(0, n.jsx)(r.WindowLaunchIcon, {
							color: 'currentColor',
							className: l.launchIcon,
							size: 'xs'
						})
					]
				})
			})
		]
	});
}
