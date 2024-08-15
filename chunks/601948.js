t.d(s, {
	S: function () {
		return I;
	}
});
var n = t(735250);
t(470079);
var a = t(442837),
	i = t(481060),
	r = t(246992),
	o = t(535664),
	l = t(502087),
	c = t(921801),
	d = t(594174),
	_ = t(726985),
	E = t(474936),
	u = t(638152);
let I = (e) => {
	let { isDevTools: s = !1 } = e,
		t = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
		I = (0, a.e7)([l.Z], () => {
			let e = l.Z.getCreatedAtOverride();
			return null != e ? e.toISOString().substring(0, 10) : '';
		}),
		T = (0, a.e7)([l.Z], () => l.Z.getPremiumTypeOverride()),
		S = (e) => {
			(0, o.u)(new Date(e));
		};
	return (0, n.jsxs)('div', {
		children: [
			(0, n.jsxs)(c.F, {
				setting: _.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
				children: [
					(0, n.jsx)(i.FormSection, {
						title: 'Override Client-Side Premium Type',
						tag: i.FormTitleTags.H3,
						children: (0, n.jsx)(i.SingleSelect, {
							options: E.b6,
							value: T,
							onChange: (e) => {
								(0, o.C)(e, t);
							},
							popoutLayerContext: s ? r.O$ : void 0
						})
					}),
					(0, n.jsx)(i.Button, {
						look: i.Button.Looks.LINK,
						style: { padding: '0' },
						onClick: () => {
							(0, o.C)(E.F_, t);
						},
						children: 'Reset premium type override'
					})
				]
			}),
			(0, n.jsxs)(c.F, {
				setting: _.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
				children: [
					(0, n.jsx)(i.FormSection, {
						title: 'Override Client-Side Account Created At Date',
						tag: i.FormTitleTags.H3,
						children: (0, n.jsx)('input', {
							type: 'date',
							value: I,
							onChange: (e) => S(e.target.value),
							className: u.datePicker
						})
					}),
					(0, n.jsx)(i.Button, {
						look: i.Button.Looks.LINK,
						style: { padding: '0' },
						type: 'submit',
						onClick: () => (0, o.u)(void 0),
						children: 'Reset account created at override'
					})
				]
			})
		]
	});
};
