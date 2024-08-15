t.d(s, {
	Z: function () {
		return m;
	}
}),
	t(724458);
var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(442837),
	l = t(481060),
	c = t(921801),
	d = t(663389),
	_ = t(960412),
	E = t(151662),
	u = t(930441),
	I = t(726985),
	T = t(689938),
	S = t(780346),
	N = t(224499);
function C(e) {
	let { label: s, onChange: t, enabled: a, subLabel: i } = e;
	return (0, n.jsx)(l.FormSwitch, {
		value: !!a,
		onChange: t,
		note: i,
		children: s
	});
}
function m() {
	let e = (0, o.e7)([d.Z], () => d.Z.getSubsection()),
		s = a.createRef(),
		{ categories: t, initialized: i } = (0, o.cj)([E.Z], () => E.Z.getEmailSettings());
	a.useEffect(() => {
		if (null == i) (0, _.Y7)();
		else if (e === u.vG.toUpperCase()) {
			var t;
			null == s || null === (t = s.current) || void 0 === t || t.scrollIntoView(!0);
		}
	}, [i, s, e]);
	let m = u.M0.reduce((e, s) => e || !!t[s], !1),
		A = {
			[u.$Z.COMMUNICATION]: I.s6.NOTIFICATIONS_EMAILS_COMMUNICATION,
			[u.$Z.SOCIAL]: I.s6.NOTIFICATIONS_EMAILS_SOCIAL,
			[u.$Z.UPDATES_AND_ANNOUNCEMENTS]: I.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES,
			[u.$Z.TIPS]: I.s6.NOTIFICATIONS_EMAILS_TIPS,
			[u.$Z.RECOMMENDATIONS_AND_EVENTS]: I.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS
		};
	return i
		? (0, n.jsxs)(c.F, {
				setting: I.s6.NOTIFICATIONS_EMAILS,
				children: [
					(0, n.jsx)('div', { ref: s }),
					(0, n.jsxs)(l.FormSection, {
						className: r()(N.marginTop40),
						tag: l.FormTitleTags.H1,
						title: T.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS,
						children: [
							u.Od.map((e) => {
								let { category: s, label: a, subLabel: i } = e,
									r = A[s],
									o = (0, n.jsx)(
										C,
										{
											label: a(),
											subLabel: i(),
											enabled: t[s],
											onChange: (e) => {
												var t, n;
												return (t = s), (n = e), void (0, _.pR)(t, n);
											}
										},
										a()
									);
								return null != r
									? (0, n.jsx)(
											c.F,
											{
												setting: r,
												children: o
											},
											a()
										)
									: o;
							}),
							(0, n.jsxs)(c.F, {
								setting: I.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
								children: [
									(0, n.jsx)(l.Button, {
										className: S.marketingUnsubscribeButton,
										disabled: !m,
										look: l.ButtonLooks.LINK,
										color: l.ButtonColors.LINK,
										onClick: _.oc,
										children: T.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING
									}),
									(0, n.jsx)(l.FormText, {
										type: l.FormTextTypes.DESCRIPTION,
										children: T.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING_DESCRIPTION
									}),
									(0, n.jsx)(l.FormDivider, { className: r()(N.marginTop40, N.marginBottom40) })
								]
							})
						]
					})
				]
			})
		: null;
}
