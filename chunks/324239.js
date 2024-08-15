n.r(t),
	n.d(t, {
		default: function () {
			return T;
		}
	}),
	n(47120);
var o = n(735250),
	s = n(470079),
	l = n(120356),
	r = n.n(l),
	a = n(481060),
	i = n(893776),
	c = n(809206),
	u = n(600164),
	d = n(390885),
	m = n(626135),
	f = n(361207),
	_ = n(792125),
	p = n(981631),
	g = n(630724),
	C = n(689938),
	N = n(809784);
function A(e) {
	let { email: t, setEmail: n, claimRequired: l, onSuccess: m, onClose: f } = e,
		[A, S] = s.useState(),
		[T, I] = s.useState(''),
		[x, M] = s.useState(''),
		[E, O] = s.useState(!1);
	s.useEffect(() => d.Z.flowStep(g.MK.ANY, g.mx.CLAIM_ACCOUNT), []);
	let h = async (e) => {
		e.preventDefault(), O(!0), S(''), M('');
		try {
			await (0, c.S2)({
				email: t,
				password: T
			}),
				O(!1),
				m();
		} catch (e) {
			var n, o;
			(null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.email) && S(e.body.email), (null == e ? void 0 : null === (o = e.body) || void 0 === o ? void 0 : o.password) && M(e.body.password), O(!1);
		}
	};
	return (0, o.jsxs)('div', {
		className: r()(N.modalLight, (0, _.Q)(p.BRd.LIGHT)),
		children: [
			(0, o.jsxs)(a.ModalHeader, {
				className: N.formHeader,
				direction: u.Z.Direction.VERTICAL,
				separator: !1,
				children: [
					(0, o.jsx)('div', { className: N.formImage }),
					(0, o.jsx)(a.Heading, {
						className: N.formTitle,
						variant: 'heading-xl/semibold',
						children: C.Z.Messages.FINISH_SIGNING_UP
					}),
					(0, o.jsx)(a.Text, {
						className: N.formBody,
						variant: 'text-md/normal',
						color: 'header-secondary',
						children: l ? C.Z.Messages.CLAIM_ACCOUNT_REQUIRED_BODY : C.Z.Messages.CLAIM_ACCOUNT_BODY_2
					}),
					(0, o.jsx)(a.ModalCloseButton, {
						className: N.closeButton,
						onClick: f
					})
				]
			}),
			(0, o.jsx)(a.ModalContent, {
				children: (0, o.jsxs)('form', {
					className: N.formContent,
					onSubmit: h,
					children: [
						(0, o.jsx)(a.FormItem, {
							title: C.Z.Messages.FORM_LABEL_EMAIL,
							className: N.formItem,
							children: (0, o.jsx)(a.TextInput, {
								value: t,
								error: A,
								onChange: (e) => n(e),
								autoFocus: !0
							})
						}),
						(0, o.jsx)(a.FormItem, {
							title: C.Z.Messages.FORM_LABEL_PASSWORD,
							className: N.formItem,
							children: (0, o.jsx)(a.TextInput, {
								type: 'password',
								value: T,
								error: x,
								onChange: (e) => I(e)
							})
						}),
						(0, o.jsx)(a.Button, {
							type: 'submit',
							size: a.Button.Sizes.LARGE,
							fullWidth: !0,
							submitting: E,
							disabled: 0 === t.length || 0 === T.length,
							children: C.Z.Messages.CLAIM_ACCOUNT
						}),
						l &&
							(0, o.jsx)(a.Button, {
								className: N.logoutButton,
								color: a.Button.Colors.PRIMARY,
								look: a.Button.Looks.LINK,
								size: a.Button.Sizes.NONE,
								onClick: () => {
									i.Z.logout(), f();
								},
								children: C.Z.Messages.LOGOUT
							})
					]
				})
			})
		]
	});
}
function S(e) {
	let { email: t, claimRequired: n, onClose: l } = e,
		i = n ? C.Z.Messages.CLAIM_ACCOUNT_REQUIRED_EMAIL_TO : C.Z.Messages.CLAIM_ACCOUNT_EMAIL_TO;
	function c() {
		window.open((0, f.t3)(), '_blank'),
			m.default.track(p.rMx.DOWNLOAD_APP, {
				platform: (0, f.DW)(),
				ptb: !1,
				released: !0,
				has_e_mail: !0,
				referring_location: 'Claim Modal',
				qr_code: !1
			});
	}
	return (
		s.useEffect(() => d.Z.flowStep(g.MK.ANY, g.mx.CLAIM_ACCOUNT_SUCCESS), []),
		(0, o.jsxs)('div', {
			className: r()(N.modalLight, (0, _.Q)(p.BRd.LIGHT)),
			children: [
				(0, o.jsxs)(a.ModalContent, {
					className: N.successContent,
					children: [
						!n &&
							(0, o.jsx)(a.ModalCloseButton, {
								className: N.closeButton,
								onClick: l
							}),
						(0, o.jsx)('div', { className: N.successImage }),
						(0, o.jsx)(a.Text, {
							className: N.successTitle,
							variant: 'text-lg/semibold',
							children: i.format({ email: t })
						}),
						(0, o.jsx)(a.Text, {
							className: N.successPromotion,
							variant: 'text-md/normal',
							children: C.Z.Messages.CLAIM_ACCOUNT_PROMOTE_APP_2021_04
						})
					]
				}),
				n
					? (0, o.jsx)(a.ModalFooter, {
							direction: u.Z.Direction.VERTICAL,
							children: (0, o.jsx)(a.Button, {
								size: a.Button.Sizes.LARGE,
								onClick: l,
								children: C.Z.Messages.OKAY
							})
						})
					: (0, o.jsx)(a.ModalFooter, {
							direction: u.Z.Direction.VERTICAL,
							children: (0, o.jsx)(a.Button, {
								color: a.Button.Colors.BRAND,
								size: a.Button.Sizes.LARGE,
								onClick: c,
								children: C.Z.Messages.CLAIM_ACCOUNT_GET_APP
							})
						})
			]
		})
	);
}
function T(e) {
	let { onClose: t, transitionState: n, claimRequired: l = !1 } = e,
		[r, i] = s.useState(''),
		[c, u] = s.useState(!1);
	return c
		? (0, o.jsx)(a.ModalRoot, {
				transitionState: n,
				children: (0, o.jsx)(S, {
					email: r,
					claimRequired: l,
					onClose: t
				})
			})
		: (0, o.jsx)(a.ModalRoot, {
				transitionState: n,
				children: (0, o.jsx)(A, {
					email: r,
					setEmail: i,
					claimRequired: l,
					onSuccess: () => u(!0),
					onClose: t
				})
			});
}
