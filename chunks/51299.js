a.r(e),
	a.d(e, {
		default: function () {
			return x;
		}
	});
var t = a(735250);
a(470079);
var i = a(120356),
	l = a.n(i),
	c = a(512722),
	o = a.n(c),
	r = a(481060),
	s = a(99690),
	p = a(23551),
	d = a(122021),
	u = a(689938),
	m = a(3723);
function N(n) {
	let { onComplete: e, excludedPlatformTypes: a, includedPlatformTypes: i } = n,
		l = (0, d.fq)();
	return (0, t.jsx)('div', {
		className: m.connectionsContainer,
		children: l
			.filter((n) => !(null == a ? void 0 : a.has(n.type)) && (null == i || i.has(n.type)))
			.map((n) =>
				(0, t.jsx)(
					p.Z,
					{
						type: n.type,
						className: m.accountBtn,
						innerClassName: m.accountBtnInner,
						onConnect: () => e(n.type)
					},
					n.type
				)
			)
	});
}
function f(n) {
	let { integrations: e, onCompleteApplication: a } = n;
	if (null == e || null == a) return null;
	let i = e.filter((n) => {
		var e;
		return (null === (e = n.application) || void 0 === e ? void 0 : e.roleConnectionsVerificationUrl) != null;
	});
	return 0 === i.length
		? null
		: (0, t.jsxs)(t.Fragment, {
				children: [
					(0, t.jsx)(r.Text, {
						variant: 'eyebrow',
						color: 'interactive-normal',
						className: m.applicationsHeader,
						children: u.Z.Messages.APPS
					}),
					(0, t.jsx)('div', {
						className: m.applicationsContainer,
						children: i.map((n) => {
							let e = n.application;
							o()(null != e, 'application is null');
							let i = null == e ? void 0 : e.bot;
							return (
								o()(null != i, 'bot is null'),
								(0, t.jsxs)(
									r.Clickable,
									{
										onClick: () => a(e.id),
										className: m.application,
										children: [
											(0, t.jsx)(s.Z, {
												user: i,
												className: m.applicationIcon
											}),
											(0, t.jsxs)('div', {
												className: m.applicationNameContainer,
												children: [
													(0, t.jsx)(r.Heading, {
														variant: 'heading-sm/semibold',
														className: m.applicationNameText,
														children: e.name
													}),
													null != e.description && e.description.length > 0
														? (0, t.jsx)(r.Text, {
																variant: 'text-xs/normal',
																color: 'header-secondary',
																className: m.applicationNameText,
																children: e.description
															})
														: null
												]
											})
										]
									},
									n.id
								)
							);
						})
					})
				]
			});
}
function x(n) {
	let { transitionState: e, onComplete: a, onClose: i, excludedPlatformTypes: c, includedPlatformTypes: o, integrations: s, onCompleteApplication: p } = n;
	return (0, t.jsx)(r.ModalRoot, {
		'aria-label': u.Z.Messages.CONNECTIONS_ADD_CONNECTIONS,
		size: r.ModalSize.SMALL,
		transitionState: e,
		className: l()(m.container),
		fullscreenOnMobile: !1,
		children: (0, t.jsxs)(r.ModalContent, {
			children: [
				(0, t.jsxs)('div', {
					className: m.header,
					children: [
						(0, t.jsx)(r.Heading, {
							className: m.title,
							variant: 'heading-md/bold',
							children: u.Z.Messages.CONNECTIONS_ADD_CONNECTIONS
						}),
						(0, t.jsx)(r.ModalCloseButton, { onClick: i })
					]
				}),
				(0, t.jsx)(N, {
					onComplete: function (n) {
						a(n), i();
					},
					excludedPlatformTypes: c,
					includedPlatformTypes: o
				}),
				(0, t.jsx)(f, {
					integrations: s,
					onCompleteApplication:
						null != p
							? function (n) {
									null == p || p(n), i();
								}
							: void 0
				})
			]
		})
	});
}
