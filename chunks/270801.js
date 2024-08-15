var i = n(735250);
n(470079);
var a = n(481060),
	s = n(313201),
	l = n(689938),
	r = n(57605);
let o = () =>
	n
		.e('39248')
		.then(n.t.bind(n, 48603, 19))
		.then((e) => {
			let { default: t } = e;
			return t;
		});
t.Z = (e) => {
	let t = (0, s.Dt)();
	return (0, i.jsxs)(a.ModalRoot, {
		...e,
		transitionState: e.transitionState,
		'aria-labelledby': t,
		children: [
			(0, i.jsx)('div', {
				className: r.animationContainer,
				children: (0, i.jsx)(a.LottieAnimation, {
					importData: o,
					className: r.animationMiddle
				})
			}),
			(0, i.jsx)(a.ModalContent, {
				children: (0, i.jsxs)('div', {
					className: r.container,
					children: [
						(0, i.jsx)(a.Heading, {
							variant: 'heading-xl/semibold',
							className: r.header,
							id: t,
							children: l.Z.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_TITLE.format({
								guildName: e.guildName
							})
						}),
						(0, i.jsx)(a.Text, {
							variant: 'text-sm/normal',
							color: 'header-secondary',
							children: l.Z.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_DESC
						}),
						(0, i.jsx)(a.Button, {
							className: r.button,
							onClick: () => {
								e.onAccept(), e.onClose();
							},
							children: l.Z.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_CONFIRM
						})
					]
				})
			})
		]
	});
};
