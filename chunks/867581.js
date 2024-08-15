let o, l;
n.d(t, {
	Z: function () {
		return O;
	}
}),
	n(47120);
var a = n(735250),
	s = n(470079),
	r = n(120356),
	i = n.n(r),
	c = n(481060),
	u = n(447543),
	_ = n(881052),
	d = n(600164),
	I = n(313201),
	E = n(703656),
	N = n(782605),
	m = n(981631),
	T = n(689938),
	p = n(723417),
	f = n(216019),
	S = n(286359);
let C = 'hTKzmak',
	L = (0, I.hQ)();
let A = ((o = window.GLOBAL_ENV.INVITE_HOST), (l = ''), null == o && ((o = location.host), (l = m.Z5c.INVITE(''))), ''.concat(location.protocol, '//').concat(o).concat(l, '/')),
	D = [C, ''.concat(A).concat(C), ''.concat(A).concat('cool-people')],
	M = (e) => {
		let { onClick: t } = e;
		return (0, a.jsxs)(c.Clickable, {
			className: p.rowContainer,
			onClick: () => {
				t(), (0, E.uL)(m.Z5c.GUILD_DISCOVERY);
			},
			children: [
				(0, a.jsx)('img', {
					width: 40,
					height: 40,
					className: p.rowIcon,
					alt: '',
					src: S
				}),
				(0, a.jsxs)('div', {
					children: [
						(0, a.jsx)(c.Heading, {
							className: p.rowText,
							variant: 'heading-md/semibold',
							children: T.Z.Messages.DISCOVERY_UPSELL_HEADER
						}),
						(0, a.jsx)(c.Text, {
							className: p.rowText,
							variant: 'text-xs/normal',
							children: T.Z.Messages.DISCOVERY_UPSELL_DESCRIPTION
						})
					]
				}),
				(0, a.jsx)('img', {
					className: p.rowArrow,
					alt: '',
					src: f
				})
			]
		});
	};
function O(e) {
	let { onBack: t, onClose: n, isSlideReady: o } = e,
		[l, r] = s.useState(''),
		[I, E] = s.useState(!1),
		[m, f] = s.useState(null),
		S = s.useRef(null);
	s.useEffect(() => {
		var e;
		o && (null === (e = S.current) || void 0 === e || e.focus());
	}, [o]);
	let O = (e) => {
		e.preventDefault();
		let t = l.trim();
		if ('' === t) {
			f(T.Z.Messages.INVALID_INVITE_LINK_ERROR);
			return;
		}
		f(null), E(!0);
		let o = t.split('/'),
			a = o[o.length - 1];
		u.Z.resolveInvite(a, 'Join Guild', { inputValue: t }).then(
			(e) => {
				let { invite: t } = e;
				if ((E(!1), null == t)) {
					f(T.Z.Messages.INSTANT_INVITE_EXPIRED);
					return;
				}
				if (null != t.channel) {
					let e = u.Z.getInviteContext('Join Guild', t);
					u.Z.acceptInvite({
						inviteKey: t.code,
						context: e,
						callback: (e) => {
							n(), u.Z.transitionToInvite(e);
						}
					}).then(
						() => {},
						(e) => {
							e instanceof _.yZ || e instanceof _.Hx ? f((0, N.O)(e.code)) : f(T.Z.Messages.INVITE_MODAL_ERROR_DEFAULT);
						}
					);
				}
			},
			(e) => {
				E(!1);
				let t = new _.yZ(e);
				f((0, N.O)(t.code));
			}
		);
	};
	return (0, a.jsxs)('div', {
		children: [
			(0, a.jsxs)(c.ModalHeader, {
				className: p.header,
				direction: d.Z.Direction.VERTICAL,
				separator: !1,
				children: [
					(0, a.jsx)(c.Heading, {
						className: p.title,
						variant: 'heading-xl/semibold',
						children: T.Z.Messages.JOIN_SERVER_TITLE
					}),
					(0, a.jsx)(c.Text, {
						color: 'header-secondary',
						variant: 'text-sm/normal',
						children: T.Z.Messages.JOIN_SERVER_DESCRIPTION_NUF
					}),
					(0, a.jsx)(c.ModalCloseButton, {
						className: p.closeButton,
						onClick: n
					})
				]
			}),
			(0, a.jsxs)(c.ModalContent, {
				className: p.__invalid_content,
				children: [
					(0, a.jsx)('form', {
						onSubmit: O,
						className: p.inputForm,
						children: (0, a.jsxs)(c.FormItem, {
							children: [
								(0, a.jsx)(c.FormTitle, {
									id: L,
									error: m,
									className: i()(p.formTitle, { [p.error]: null != m }),
									required: !0,
									children: T.Z.Messages.FORM_LABEL_INVITE_LINK
								}),
								(0, a.jsx)(c.TextInput, {
									value: l,
									onChange: r,
									className: p.input,
									inputClassName: p.inputInner,
									placeholder: ''.concat(A).concat(C),
									inputRef: S,
									required: !0,
									'aria-labelledby': L
								})
							]
						})
					}),
					(0, a.jsx)(c.FormItem, {
						title: T.Z.Messages.JOIN_SERVER_INVITE_EXAMPLES_HEADER,
						titleClassName: p.formTitle,
						className: p.examplesForm,
						children: D.map((e) =>
							(0, a.jsx)(
								c.Clickable,
								{
									className: p.sampleLink,
									onClick: () => r(e),
									children: e
								},
								e
							)
						)
					}),
					(0, a.jsx)(M, { onClick: n })
				]
			}),
			(0, a.jsxs)(c.ModalFooter, {
				className: p.footer,
				children: [
					(0, a.jsx)(c.Button, {
						color: c.Button.Colors.BRAND,
						submitting: I,
						onClick: O,
						children: T.Z.Messages.NUF_JOIN_SERVER_BUTTON
					}),
					(0, a.jsx)(c.Button, {
						color: c.Button.Colors.PRIMARY,
						look: c.Button.Looks.LINK,
						size: c.Button.Sizes.MIN,
						onClick: t,
						children: T.Z.Messages.BACK
					})
				]
			})
		]
	});
}
