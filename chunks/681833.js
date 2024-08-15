t.d(s, {
	Z: function () {
		return S;
	}
});
var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(442837),
	l = t(481060),
	c = t(987997),
	d = t(78839),
	_ = t(981631),
	E = t(689938),
	u = t(801742),
	I = t(653869),
	T = t(845904);
function S(e) {
	let { onClickManageSubscription: s } = e,
		t = (0, o.e7)([d.ZP], () => d.ZP.getSubscriptions()),
		i = a.useMemo(() => Object.values(null != t ? t : {}).filter((e) => e.type === _.NYc.APPLICATION && e.status !== _.O0b.ENDED), [t]);
	return 0 === i.length
		? null
		: (0, n.jsxs)('div', {
				className: u.container,
				children: [
					(0, n.jsx)(l.Heading, {
						variant: 'heading-md/semibold',
						className: u.__invalid_sectionTitle,
						children: E.Z.Messages.APPLICATION_USER_SUBSCRIPTIONS_TITLE
					}),
					(0, n.jsx)(l.Spacer, { size: 4 }),
					(0, n.jsx)(l.Text, {
						variant: 'text-sm/normal',
						className: u.sectionDescription,
						children: E.Z.Messages.APPLICATION_USER_SUBSCRIPTIONS_DESCRIPTION
					}),
					(0, n.jsx)(l.Spacer, { size: 24 }),
					(0, n.jsxs)('div', {
						className: r()(I.guildBoostingSubscriptionRow, u.card),
						children: [
							(0, n.jsx)('img', {
								src: T,
								alt: '',
								className: u.bannerImage
							}),
							(0, n.jsxs)('div', {
								className: u.textContainer,
								children: [
									(0, n.jsx)(l.Heading, {
										variant: 'heading-xl/semibold',
										className: u.header,
										children: E.Z.Messages.APPLICATION_USER_SUBSCRIPTIONS_TITLE
									}),
									(0, n.jsx)(l.Text, {
										variant: 'text-md/normal',
										className: u.description,
										children: E.Z.Messages.APPLICATION_ACTIVE_USER_SUBSCRIPTIONS_DESCRIPTION.format({ numSubscriptions: i.length })
									})
								]
							}),
							(0, n.jsx)(c.Z, {
								color: l.Button.Colors.BRAND,
								onClick: s,
								children: E.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTIONS_BUTTON
							})
						]
					})
				]
			});
}
