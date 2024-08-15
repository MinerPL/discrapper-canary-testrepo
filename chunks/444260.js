t.d(n, {
	B: function () {
		return E;
	}
}),
	t(724458);
var l = t(735250),
	s = t(470079),
	a = t(120356),
	i = t.n(a),
	r = t(481060),
	o = t(397195),
	d = t(473403),
	u = t(603236),
	c = t(689938),
	h = t(324655),
	I = t(224499);
let g = (e) => {
		let { guild: n, inviteChannel: t, setInviteChannel: a } = e,
			i = (0, o.Z)(n.id),
			u = s.useMemo(
				() =>
					i.reduce(
						(e, n) => ({
							...e,
							[n.id]: n
						}),
						{}
					),
				[i]
			),
			h = s.useMemo(
				() =>
					Object.values(u).map((e) => ({
						value: e.id,
						label: e.name
					})),
				[u]
			);
		return (0, l.jsx)(r.SearchableSelect, {
			options: h,
			value: null == t ? void 0 : t.id,
			onChange: (e) => {
				a(u[e]);
			},
			placeholder: c.Z.Messages.INVITE_A_GUEST_SELECT_VOICE_CHANNEL,
			renderOptionPrefix: (e) => {
				if (null == e) return null;
				let t = u[e.value];
				return null == t
					? null
					: (0, l.jsx)(d._, {
							channel: t,
							guild: n
						});
			}
		});
	},
	E = (e) => {
		let { handleDone: n, headerId: t, inviteChannel: s, copyValue: a } = e;
		return (0, l.jsxs)(l.Fragment, {
			children: [
				(0, l.jsxs)(r.ModalHeader, {
					children: [
						(0, l.jsx)(r.ModalCloseButton, {
							className: h.closeButton,
							onClick: n
						}),
						(0, l.jsx)('div', {
							className: h.headerContainer,
							children: (0, l.jsx)(r.FormTitle, {
								id: t,
								tag: 'h2',
								className: i()(I.marginReset, h.headerCloseButtonSpacing, h.headerText),
								children: c.Z.Messages.INVITE_A_GUEST_VOICE_ONLY
							})
						})
					]
				}),
				(0, l.jsx)(r.ModalContent, {
					className: h.noScroll,
					children: (0, l.jsxs)('div', {
						className: h.guestBody,
						children: [
							(0, l.jsx)(r.Text, {
								tag: 'div',
								variant: 'heading-sm/normal',
								color: 'header-secondary',
								children: c.Z.Messages.INVITE_A_GUEST_EXPLANATION
							}),
							(0, l.jsx)(r.FormTitle, {
								tag: 'h5',
								className: h.guestSelectChannelHeader,
								children: c.Z.Messages.INVITE_A_GUEST_STEP_1
							}),
							(0, l.jsx)(g, { ...e }),
							(0, l.jsx)(r.FormTitle, {
								tag: 'h5',
								className: h.guestSendInviteLinkHeader,
								children: c.Z.Messages.INVITE_A_GUEST_STEP_2
							}),
							(0, l.jsx)(u.I, {
								...e,
								copyValue: null == s ? '' : a,
								disabled: null == s
							})
						]
					})
				})
			]
		});
	};
