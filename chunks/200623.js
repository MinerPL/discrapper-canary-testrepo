r.r(s),
	r.d(s, {
		default: function () {
			return C;
		}
	});
var a = r(735250),
	t = r(470079),
	n = r(442837),
	c = r(481060),
	d = r(198993),
	o = r(639351),
	i = r(63063),
	l = r(258609),
	f = r(259408),
	u = r(893387),
	m = r(927923),
	x = r(981631),
	_ = r(689938),
	N = r(688672);
function h(e) {
	let { step: s, instructions: r } = e;
	return (0, a.jsxs)('div', {
		className: N.cardRow,
		children: [
			(0, a.jsx)('div', {
				className: N.stepNumberContainer,
				children: (0, a.jsx)(c.Text, {
					variant: 'text-sm/semibold',
					className: N.stepNumber,
					children: s
				})
			}),
			(0, a.jsx)(c.Text, {
				variant: 'text-sm/normal',
				color: 'header-primary',
				className: N.instructions,
				children: r
			})
		]
	});
}
function C(e) {
	let { channel: s, transitionState: r, onClose: C } = e,
		p = (0, n.e7)([l.Z], () => null != l.Z.getRemoteSessionId()),
		b = (0, f.Z)(s, { forQRCode: !0 });
	return (
		t.useEffect(() => {
			p && C();
		}, [p, C]),
		t.useEffect(() => {
			(0, u.Z)(s.id, m.YE.XBOX);
		}, [s.id]),
		(0, a.jsxs)(c.ModalRoot, {
			size: c.ModalSize.DYNAMIC,
			className: N.modalRoot,
			transitionState: r,
			children: [
				(0, a.jsxs)(c.ModalHeader, {
					separator: !1,
					className: N.modalHeaderContainer,
					children: [
						(0, a.jsx)(c.Heading, {
							className: N.modalHeader,
							variant: 'heading-xl/extrabold',
							children: _.Z.Messages.TRANSFER_VOICE_TO_XBOX
						}),
						(0, a.jsx)(c.Text, {
							variant: 'text-md/medium',
							color: 'header-secondary',
							children: _.Z.Messages.XBOX_APP_REQUIRED_SUBHEADER
						})
					]
				}),
				(0, a.jsx)(c.ModalContent, {
					className: N.content,
					children: (0, a.jsxs)('div', {
						className: N.card,
						children: [
							(0, a.jsxs)('div', {
								className: N.cardText,
								children: [
									(0, a.jsxs)(c.Text, {
										variant: 'text-lg/semibold',
										color: 'header-primary',
										className: N.cardRow,
										children: [(0, a.jsx)(o.Z, { className: N.cardHeaderIcon }), _.Z.Messages.XBOX_APP_FOR_MOBILE]
									}),
									(0, a.jsx)(h, {
										step: 1,
										instructions: _.Z.Messages.XBOX_APP_STEP_ONE
									}),
									(0, a.jsx)(h, {
										step: 2,
										instructions: _.Z.Messages.XBOX_APP_STEP_TWO
									}),
									(0, a.jsx)(c.Text, {
										variant: 'text-sm/medium',
										children: (0, a.jsx)(c.Anchor, {
											className: N.learnMore,
											href: i.Z.getArticleURL(x.BhN.XBOX_CONNECTION),
											children: _.Z.Messages.LEARN_MORE
										})
									})
								]
							}),
							(0, a.jsx)(d.ZP, {
								className: N.qrCode,
								size: 120,
								text: b
							})
						]
					})
				}),
				(0, a.jsx)(c.ModalCloseButton, {
					className: N.closeButton,
					onClick: C
				})
			]
		})
	);
}
