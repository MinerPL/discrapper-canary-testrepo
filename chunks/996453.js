s.d(t, {
	G: function () {
		return L;
	},
	Z: function () {
		return f;
	}
}),
	s(47120);
var a = s(735250),
	n = s(470079),
	l = s(120356),
	o = s.n(l),
	i = s(481060),
	r = s(749210),
	c = s(820160),
	d = s(600164),
	u = s(313201),
	m = s(594174),
	C = s(892880),
	_ = s(458879),
	x = s(981631),
	E = s(689938),
	I = s(816497);
function L(e) {
	var t;
	let {
			guildTemplate: s,
			onClose: l,
			onBack: L,
			onHubGuildInfoSet: f,
			onGuildCreated: T,
			isSlideReady: h,
			hasFooter: g = !0,
			isCommunity: N = !1
		} = e,
		[B, M] = n.useState(C.Z.getGuildNameSuggestion()),
		[Z, p] = n.useState(null),
		[b, j] = n.useState(!1),
		[S, U] = n.useState(null),
		R = !!(null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()),
		[A, D] = n.useState(R),
		H = (0, u.Dt)(),
		O = n.useRef(null);
	n.useEffect(() => {
		var e;
		h && (null === (e = O.current) || void 0 === e || e.focus());
	}, [h]);
	let v = n.useCallback(
			async (e) => {
				if ((e.preventDefault(), null != s)) {
					j(!0), U(null);
					try {
						if (null != f) f(B, Z);
						else {
							let e = await _.Z.createGuildFromTemplate(B, Z, s, N, A);
							r.Z.transitionToGuildSync(e.id), null == T || T(e.id);
						}
					} catch (e) {
						U(e);
					}
					j(!1);
				}
			},
			[s, f, B, Z, N, A, T]
		),
		G = (0, a.jsxs)(a.Fragment, {
			children: [
				(0, a.jsx)(i.Button, {
					color: i.Button.Colors.BRAND,
					onClick: v,
					disabled: 0 === B.length,
					submitting: b,
					children: null != f ? E.Z.Messages.NEXT : E.Z.Messages.CREATE
				}),
				(0, a.jsx)(i.Button, {
					className: I.backButton,
					look: i.Button.Looks.BLANK,
					size: i.Button.Sizes.MIN,
					onClick: L,
					children: E.Z.Messages.BACK
				})
			]
		});
	return {
		content: (0, a.jsxs)(a.Fragment, {
			children: [
				(0, a.jsxs)(i.ModalHeader, {
					direction: d.Z.Direction.VERTICAL,
					className: I.header,
					separator: !1,
					children: [
						(0, a.jsx)(i.Heading, {
							className: o()(I.title),
							variant: 'heading-xl/semibold',
							children: E.Z.Messages.NUF_CREATE_SERVER_CUSTOMIZE_HEADER
						}),
						(0, a.jsx)(i.Text, {
							className: I.subtitle,
							color: 'header-secondary',
							variant: 'text-md/normal',
							children: E.Z.Messages.NUF_CREATE_SERVER_CUSTOMIZE_SUBHEADER
						}),
						null != l &&
							(0, a.jsx)(i.ModalCloseButton, {
								className: I.closeButton,
								onClick: l
							})
					]
				}),
				(0, a.jsxs)(i.ModalContent, {
					className: I.createGuild,
					children: [
						(0, a.jsx)('div', {
							className: I.uploadIcon,
							children: (0, a.jsx)(c.Z, {
								icon: Z,
								onChange: p
							})
						}),
						(0, a.jsxs)('form', {
							onSubmit: v,
							children: [
								(0, a.jsxs)(i.FormItem, {
									className: I.nameInput,
									error: null == S ? void 0 : S.getFirstFieldErrorMessage('name'),
									children: [
										(0, a.jsx)(i.FormTitle, {
											tag: 'label',
											htmlFor: H,
											children: E.Z.Messages.FORM_LABEL_SERVER_NAME
										}),
										(0, a.jsx)(i.TextInput, {
											type: 'text',
											value: B,
											maxLength: 100,
											onChange: M,
											inputRef: O,
											id: H
										})
									]
								}),
								R &&
									(0, a.jsx)(i.FormSwitch, {
										hideBorder: !0,
										value: A,
										onChange: (e) => D(e),
										note: E.Z.Messages.GUILD_CREATE_STAFF_ONLY_HINT,
										className: I.formItemSpaced,
										children: (0, a.jsx)(i.FormTitle, {
											tag: 'label',
											children: 'Staff Only'
										})
									}),
								(0, a.jsx)(i.Text, {
									variant: 'text-xs/normal',
									color: 'text-muted',
									className: I.guidelines,
									children: E.Z.Messages.CREATE_SERVER_GUIDELINES.format({ guidelinesURL: x.EYA.GUIDELINES })
								})
							]
						}),
						null == S || S.hasFieldErrors()
							? null
							: (0, a.jsx)(i.Text, {
									variant: 'text-xs/normal',
									color: 'text-danger',
									children: S.message
								})
					]
				}),
				g &&
					(0, a.jsx)(i.ModalFooter, {
						justify: d.Z.Justify.BETWEEN,
						children: G
					})
			]
		}),
		footer: G
	};
}
function f(e) {
	let { content: t } = L(e);
	return t;
}
