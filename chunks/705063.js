n.d(t, {
	X: function () {
		return p;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(442837),
	r = n(481060),
	l = n(749210),
	o = n(225784),
	c = n(469988),
	d = n(526383),
	u = n(210887),
	_ = n(900849),
	E = n(374939),
	h = n(731455),
	m = n(689938),
	I = n(239181),
	g = n(849116);
function p(e) {
	let { loadId: t, onScroll: n } = e,
		p = (0, d.Z)(),
		T = (0, s.e7)([u.Z], () => u.Z.theme);
	return (
		a.useEffect(() => {
			_.Zt({
				loadId: t,
				gamesYouPlayGuilds: [],
				allGuilds: [],
				categoryId: h.U
			});
		}, [t]),
		(0, i.jsxs)(E.Z, {
			title: m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_TITLE,
			description: m.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_DESCRIPTION,
			onScroll: n,
			children: [
				p.length > 0
					? (0, i.jsxs)(i.Fragment, {
							children: [
								(0, i.jsx)(r.Heading, {
									className: I.sectionTitle,
									variant: 'heading-lg/semibold',
									color: 'header-primary',
									children: m.Z.Messages.YOUR_HUB
								}),
								(0, i.jsxs)('div', {
									className: I.content,
									children: [
										p.map((e) =>
											(0, i.jsx)(
												o.Z,
												{
													onView: () => l.Z.transitionToGuildSync(e.id),
													guild: {
														...e,
														presenceCount: void 0,
														memberCount: void 0,
														premiumSubscriptionCount: void 0,
														emojis: void 0
													},
													theme: T
												},
												e.id
											)
										),
										(0, i.jsx)(c.Z, { hasHub: !0 })
									]
								})
							]
						})
					: (0, i.jsx)('div', {
							className: I.content,
							children: (0, i.jsx)(c.Z, { hasHub: !1 })
						}),
				(0, i.jsx)('div', { className: g.divider }),
				(0, i.jsxs)('div', {
					className: g.disclaimer,
					children: [
						(0, i.jsxs)(r.Text, {
							className: g.text,
							variant: 'text-sm/medium',
							color: 'header-secondary',
							children: [m.Z.Messages.MOBILE_HUB_EMAIL_CONNECTION_SIDEBAR_DESCRIPTION_2, ' ']
						}),
						(0, i.jsx)(r.Text, {
							className: g.text,
							variant: 'text-sm/medium',
							color: 'header-secondary',
							children: m.Z.Messages.MOBILE_HUB_EMAIL_CONNECTION_SIDEBAR_DESCRIPTION_4
						})
					]
				})
			]
		})
	);
}
