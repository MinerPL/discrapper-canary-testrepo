n.r(t);
var a = n(735250),
	o = n(470079),
	r = n(481060),
	s = n(230711),
	l = n(782568),
	d = n(880257),
	i = n(63063),
	E = n(163268),
	_ = n(981631),
	c = n(526761),
	u = n(689938),
	I = n(190007),
	C = n(444812);
t.default = (e) => {
	let { channelId: t, messageId: R, transitionState: T, onClose: N } = e,
		A = (0, d.Z)(),
		M = o.useCallback(
			(e) => {
				(0, E.aP)({
					action: e,
					channelId: t,
					messageId: R
				});
			},
			[t, R]
		);
	return (
		o.useEffect(() => {
			(0, E.aP)({
				action: E.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
				channelId: t,
				messageId: R
			});
		}, [t, R]),
		(0, a.jsxs)(r.ModalRoot, {
			transitionState: T,
			'aria-label': u.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_MODAL_LABEL,
			children: [
				(0, a.jsx)(r.ModalHeader, {
					separator: !1,
					className: I.modalHeader,
					children: (0, a.jsx)('img', {
						src: C,
						alt: u.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER_IMAGE_ALT,
						className: I.headerImg
					})
				}),
				(0, a.jsxs)(r.ModalContent, {
					className: I.modalBody,
					children: [
						(0, a.jsx)(r.Heading, {
							variant: 'heading-lg/bold',
							className: I.modalInteriorHeader,
							children: u.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_HEADER
						}),
						(0, a.jsx)(r.Text, {
							variant: 'text-md/normal',
							color: 'header-secondary',
							children: A
								? u.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_ADULT
								: u.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DESCRIPTION_TEEN
						}),
						(0, a.jsxs)('div', {
							className: I.buttonContainer,
							children: [
								A
									? (0, a.jsx)(r.Button, {
											color: r.Button.Colors.BRAND,
											onClick: function () {
												M(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS),
													s.Z.open(_.oAB.PRIVACY_AND_SAFETY, null, { scrollPosition: c.to.EXPLICIT_MEDIA_REDACTION }),
													N();
											},
											fullWidth: !0,
											children: u.Z.Messages.OBSCURED_CONTENT_UPDATE_SETTINGS_CTA
										})
									: (0, a.jsx)(r.Button, {
											color: r.Button.Colors.BRAND,
											onClick: () => {
												(0, l.Z)(i.Z.getArticleURL(_.BhN.EXPLICIT_MEDIA_REDACTION));
											},
											fullWidth: !0,
											children: u.Z.Messages.LEARN_MORE
										}),
								(0, a.jsx)(r.Button, {
									color: r.Button.Colors.PRIMARY,
									onClick: function () {
										N(), M(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS);
									},
									fullWidth: !0,
									children: u.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_DISMISS
								}),
								(0, a.jsx)(r.Text, {
									variant: 'text-sm/medium',
									color: 'header-secondary',
									children: u.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format({
										handleFalsePositiveHook: () => {
											N(),
												M(E.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE),
												(0, r.openModalLazy)(async () => {
													let { default: e } = await n(788679);
													return (n) =>
														(0, a.jsx)(e, {
															channelId: t,
															messageId: R,
															...n
														});
												});
										}
									})
								})
							]
						})
					]
				})
			]
		})
	);
};
