n.d(t, {
	Z: function () {
		return L;
	}
}),
	n(47120);
var s = n(735250),
	a = n(470079),
	o = n(392711),
	l = n.n(o),
	r = n(481060),
	i = n(110924),
	E = n(600164),
	u = n(112831),
	c = n(313201),
	d = n(237617),
	_ = n(572539),
	b = n(111810),
	I = n(63063),
	C = n(957115),
	f = n(531578),
	m = n(689938),
	A = n(940256);
function N() {
	return (0, s.jsx)(r.Text, {
		className: A.helpdeskLink,
		variant: 'text-xs/normal',
		color: 'text-muted',
		children: m.Z.Messages.FEEDBACK_NEED_MORE_HELP.format({ helpdeskURL: I.Z.getSubmitRequestURL() })
	});
}
function L(e) {
	let { header: t, body: n, problems: o, transitionState: I, feedbackProblems: L = [], otherKey: T, hasCloseButton: x, onSubmit: D, onClose: h, canDismissForever: S = !0, showHelpdeskLink: Z = !0 } = e,
		p = (0, i.Z)(o),
		[B, M] = a.useState(!1),
		[R, O] = a.useState(null),
		[j, g] = a.useState(l().shuffle(o)),
		[U, v] = a.useState(''),
		V = (0, c.Dt)(),
		F = (0, d.Z)(B),
		G = (0, d.Z)(R),
		k = (0, d.Z)(D),
		K = (0, d.Z)(U),
		y = null != R && L.includes(R);
	return (
		a.useEffect(() => {
			!l().isEqual(p, o) && g((0, C.B)(o, T));
		}, [o, p, T]),
		a.useEffect(
			() => () => {
				k.current({
					problem: G.current,
					dontShowAgain: F.current,
					feedback: K.current
				});
			},
			[]
		),
		(0, s.jsxs)(r.ModalRoot, {
			transitionState: I,
			className: A.__invalid_modalRoot,
			'aria-labelledby': V,
			children: [
				(0, s.jsx)(b.Z, {}),
				(0, s.jsxs)(r.ModalHeader, {
					separator: !1,
					className: A.headerContainer,
					children: [
						(0, s.jsx)(u.Z, {
							id: V,
							className: A.header,
							color: u.Z.Colors.CUSTOM,
							size: u.Z.Sizes.SIZE_24,
							children: t
						}),
						(0, s.jsx)(r.Text, {
							variant: 'text-md/normal',
							color: 'none',
							className: A.ratingBody,
							children: n
						}),
						x
							? (0, s.jsx)(r.ModalCloseButton, {
									className: A.modalCloseButton,
									onClick: h
								})
							: null
					]
				}),
				(0, s.jsxs)(r.ModalContent, {
					className: A.__invalid_content,
					children: [
						y
							? null
							: (0, s.jsx)(r.FormItem, {
									className: A.problemInfo,
									children: (0, s.jsx)(_.Z, {
										options: j,
										onClick: function (e) {
											let { value: t } = e;
											O(t), !L.includes(t) && h();
										}
									})
								}),
						y
							? (0, s.jsxs)(r.FormItem, {
									title: m.Z.Messages.FEEDBACK_DESCRIBE_ISSUE,
									className: A.problemInfo,
									children: [
										(0, s.jsx)(r.TextArea, {
											value: U,
											maxLength: f.iF,
											onChange: v
										}),
										Z ? (0, s.jsx)(N, {}) : null
									]
								})
							: null
					]
				}),
				S || y
					? (0, s.jsx)(r.ModalFooter, {
							className: A.footer,
							direction: E.Z.Direction.HORIZONTAL,
							children: y
								? (0, s.jsxs)(s.Fragment, {
										children: [
											(0, s.jsx)(r.Button, {
												size: r.Button.Sizes.SMALL,
												look: r.Button.Looks.LINK,
												color: r.Button.Colors.PRIMARY,
												onClick: () => {
													O(null), v('');
												},
												children: m.Z.Messages.BACK
											}),
											(0, s.jsx)(r.Button, {
												size: r.Button.Sizes.SMALL,
												onClick: h,
												children: m.Z.Messages.SUBMIT
											})
										]
									})
								: S
									? (0, s.jsx)(r.Checkbox, {
											size: 18,
											type: r.Checkbox.Types.INVERTED,
											value: B,
											onChange: () => M(!B),
											children: (0, s.jsx)(r.Text, {
												variant: 'text-sm/normal',
												children: m.Z.Messages.DONT_SHOW_AGAIN
											})
										})
									: null
						})
					: null
			]
		})
	);
}
