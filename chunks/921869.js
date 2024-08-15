t.d(a, {
	m: function () {
		return d;
	}
});
var n = t(735250);
t(470079);
var r = t(442837),
	s = t(481060),
	o = t(600164),
	l = t(553795),
	c = t(689938),
	i = t(564510);
function d(e) {
	let {
			platformType: a,
			onContinue: t,
			onClose: d,
			img: u,
			headerConnect: x,
			headerReconnect: N,
			body: h,
			learnMoreLink: m,
			valueProps: C
		} = e,
		j = (0, r.e7)([l.Z], () => {
			let e = l.Z.getAccount(null, a);
			return (null == e ? void 0 : e.twoWayLink) === !1;
		});
	return (0, n.jsxs)(n.Fragment, {
		children: [
			(0, n.jsxs)(s.ModalHeader, {
				direction: o.Z.Direction.VERTICAL,
				className: i.header,
				separator: !1,
				children: [
					(0, n.jsxs)('div', {
						className: i.illustration,
						children: [u, ' ']
					}),
					(0, n.jsx)(s.Heading, {
						className: i.title,
						variant: 'heading-xl/extrabold',
						children: j && null != N ? N : x
					}),
					(0, n.jsx)(s.ModalCloseButton, {
						className: i.closeButton,
						onClick: d
					})
				]
			}),
			(0, n.jsxs)(s.ModalContent, {
				className: i.body,
				paddingFix: !1,
				children: [
					(0, n.jsx)(s.Text, {
						tag: 'p',
						variant: 'text-md/normal',
						color: 'header-secondary',
						children: h
					}),
					(0, n.jsx)('div', {
						className: i.valueProps,
						children: C
					}),
					null != m
						? (0, n.jsx)(s.Text, {
								tag: 'p',
								variant: 'text-sm/normal',
								color: 'header-secondary',
								children: c.Z.Messages.CONNECT_CONSOLE_LANDING_BODY_LEARN_MORE.format({ helpCenterLink: m })
							})
						: null
				]
			}),
			(0, n.jsx)(s.ModalFooter, {
				className: i.footer,
				children: (0, n.jsx)(s.Button, {
					className: i.footerButton,
					color: s.Button.Colors.BRAND,
					onClick: t,
					children: c.Z.Messages.CONTINUE
				})
			})
		]
	});
}
