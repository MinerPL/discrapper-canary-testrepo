n.d(t, {
	Z: function () {
		return E;
	}
}),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(442837),
	s = n(481060),
	o = n(138201),
	l = n(592125),
	u = n(155647),
	c = n(689938),
	d = n(229223);
function _(e) {
	let { title: t, description: n, onButtonClick: a } = e,
		[s, l] = i.useState(!1);
	return (0, r.jsx)(o.Z, {
		title: t,
		description: n,
		buttonText: s ? c.Z.Messages.IAR_UPSELLS_APPLIED_BUTTON : c.Z.Messages.IAR_UPSELLS_APPLY_BUTTON,
		buttonDisabled: s,
		onButtonPress: () => {
			a(), l(!0);
		}
	});
}
function E(e) {
	let { settingsUpsells: t, channelId: n } = e,
		i = (0, a.e7)([l.Z], () => l.Z.getChannel(n)),
		o = (0, u.jc)(t, null == i ? void 0 : i.type);
	return 0 === o.length
		? null
		: (0, r.jsxs)('div', {
				className: d.container,
				children: [
					(0, r.jsx)(s.Heading, {
						variant: 'heading-sm/semibold',
						className: d.header,
						children: c.Z.Messages.IAR_UPSELLS_SECTION_TITLE
					}),
					(0, r.jsx)('div', {
						className: d.upsellsContainer,
						children: o.map((e, t) => {
							let { getTitle: n, getDescription: i, onApply: a } = e;
							return (0, r.jsx)(
								_,
								{
									title: n(),
									description: i(),
									onButtonClick: a
								},
								t
							);
						})
					})
				]
			});
}
