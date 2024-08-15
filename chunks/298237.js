n.r(t),
	n.d(t, {
		default: function () {
			return G;
		}
	}),
	n(47120);
var l = n(735250),
	a = n(470079),
	r = n(990547),
	s = n(442837),
	u = n(481060),
	i = n(390885),
	o = n(594174),
	c = n(626135),
	_ = n(63063),
	d = n(771308),
	A = n(13430),
	E = n(723359),
	f = n(981631),
	p = n(630724),
	m = n(689938),
	T = n(386912);
function G(e) {
	let { transitionState: t, onClose: n } = e,
		[G, N] = a.useState(null),
		[h, M] = a.useState(null),
		[g, y] = a.useState(!1),
		S = a.createRef(),
		v = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
		O = a.createRef();
	a.useEffect(() => {
		i.Z.flowStep(p.MK.ANY, p.FF.AGE_GATE), c.default.track(f.rMx.OPEN_MODAL, { type: 'Claim Age Gate' });
	}, []),
		a.useEffect(() => {
			(null == v ? void 0 : v.nsfwAllowed) != null && n();
		}, [v, n]);
	let C = async (e) => {
			if ((e.preventDefault(), null != G)) {
				y(!0);
				try {
					await d.Av(G, f.jXE.CLAIM_ACCOUNT_MODAL);
				} catch (e) {
					if (null != e.body && null != e.body.date_of_birth)
						i.Z.flowStep(p.MK.ANY, p.FF.AGE_GATE_UNDERAGE), d.wE(E.L0.CLAIM_ACCOUNT), d.hp(E.L0.CLAIM_ACCOUNT), n();
					else {
						var t;
						(null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null
							? M(m.Z.Messages.USER_SETTINGS_UPDATE_FAILURE)
							: M(null == e ? void 0 : e.body.message);
					}
				}
				y(!1);
			}
		},
		D = a.useCallback(() => {
			var e;
			null === (e = O.current) || void 0 === e || e.focus();
		}, [O]);
	return (0, l.jsx)(u.ModalRoot, {
		transitionState: t,
		size: u.ModalSize.DYNAMIC,
		'aria-label': m.Z.Messages.AGE_GATE_HEADER,
		className: T.modal,
		impression: {
			impressionName: r.ImpressionNames.USER_AGE_GATE,
			impressionProperties: { existing_user: !1 }
		},
		children: (0, l.jsxs)(u.ModalContent, {
			className: T.content,
			children: [
				(0, l.jsx)('div', { className: T.image }),
				(0, l.jsxs)('form', {
					onSubmit: C,
					children: [
						(0, l.jsx)(u.Heading, {
							className: T.title,
							variant: 'heading-xl/semibold',
							children: m.Z.Messages.AGE_GATE_HEADER
						}),
						(0, l.jsx)(u.Text, {
							color: 'header-secondary',
							className: T.description,
							variant: 'text-md/normal',
							children: m.Z.Messages.AGE_GATE_BODY.format({ helpURL: _.Z.getArticleURL(f.BhN.AGE_GATE) })
						}),
						(0, l.jsx)(A.Z, {
							required: !0,
							autoFocus: !0,
							wrapperClassName: T.formItem,
							label: m.Z.Messages.AGE_GATE_YOUR_BIRTHDAY,
							name: 'birthday',
							onChange: (e) => N(e),
							onPopulated: D,
							error: h,
							value: G,
							ref: S
						}),
						(0, l.jsx)(u.Button, {
							buttonRef: O,
							type: 'submit',
							size: u.Button.Sizes.LARGE,
							submitting: g,
							disabled: null == G,
							fullWidth: !0,
							children: m.Z.Messages.DONE
						})
					]
				})
			]
		})
	});
}
