n.d(t, {
	Z: function () {
		return S;
	}
});
var i = n(735250),
	l = n(470079),
	r = n(442837),
	a = n(692547),
	s = n(481060),
	o = n(758059),
	c = n(367907),
	u = n(835473),
	d = n(925329),
	h = n(703656),
	p = n(594174),
	_ = n(436088),
	f = n(51144),
	g = n(158631),
	m = n(143614),
	C = n(787740),
	I = n(981631),
	E = n(689938),
	N = n(283758);
function x(e) {
	var t;
	let { userId: n, applicationId: l } = e,
		a = (0, r.e7)([p.default], () => p.default.getUser(n)),
		o = null !== (t = f.ZP.getGlobalName(a)) && void 0 !== t ? t : f.ZP.getUserTag(a),
		c = (0, u.q)(l);
	return null == a
		? null
		: (0, i.jsxs)('div', {
				className: N.broadcast,
				children: [
					(0, i.jsxs)('div', {
						children: [
							(0, i.jsxs)('div', {
								className: N.inline,
								children: [
									(0, i.jsx)(s.Avatar, {
										size: s.AvatarSizes.SIZE_16,
										src: a.getAvatarURL(null, 16),
										'aria-label': o
									}),
									(0, i.jsx)(s.Text, {
										variant: 'text-sm/semibold',
										children: o
									})
								]
							}),
							(0, i.jsx)(s.Text, {
								variant: 'text-xs/medium',
								color: 'header-secondary',
								children:
									(null == c ? void 0 : c.name) != null
										? E.Z.Messages.STREAMING.format({ name: c.name })
										: E.Z.Messages.STREAMING_A_GAME
							})
						]
					}),
					(0, i.jsx)(d.Z, { game: c })
				]
			});
}
function S(e) {
	let { closePopout: t } = e,
		n = (0, m.Z)(),
		r = n.slice(0, 3),
		u = (0, g.ZP)(),
		d = n.length - r.length;
	return (
		l.useEffect(() => {
			c.ZP.trackWithMetadata(I.rMx.BROADCAST_POPOUT_VIEWED, {
				num_broadcasts_shown: r.length,
				num_active_broadcasts: n.length,
				is_broadcasting: u
			});
		}, [n.length, r.length, u]),
		(0, i.jsxs)('div', {
			className: N.container,
			children: [
				(0, i.jsxs)('div', {
					className: N.header,
					children: [
						(0, i.jsxs)('div', {
							className: N.inline,
							children: [
								(0, i.jsx)(_.Z, {
									color: a.Z.colors.HEADER_PRIMARY.css,
									height: 16,
									width: 16
								}),
								(0, i.jsx)(s.Heading, {
									variant: 'heading-md/semibold',
									color: 'header-primary',
									children: E.Z.Messages.LIVE_BROADCASTS
								})
							]
						}),
						(0, i.jsx)(C.Z, {})
					]
				}),
				r.map((e, t) =>
					(0, i.jsxs)(i.Fragment, {
						children: [
							(0, i.jsx)(x, { ...e }, e.userId),
							t !== r.length - 1 && (0, i.jsx)('hr', { className: N.separator })
						]
					})
				),
				d > 0 &&
					(0, i.jsxs)(i.Fragment, {
						children: [
							(0, i.jsx)('hr', { className: N.separator }),
							(0, i.jsx)(s.Text, {
								variant: 'text-xs/medium',
								color: 'header-secondary',
								children: E.Z.Messages.MORE_OPEN_BROADCASTS.format({ count: d })
							})
						]
					}),
				(0, i.jsx)(s.Button, {
					onClick: () => {
						(0, h.uL)(I.Z5c.ME),
							o.Z.setSection(I.pJs.ONLINE),
							c.ZP.trackWithMetadata(I.rMx.BROADCAST_LIST_VISITED, {
								num_active_broadcasts: n.length,
								friends_tab_clicked: !1,
								is_broadcasting: u
							}),
							t();
					},
					className: N.button,
					children: E.Z.Messages.VIEW_OPEN_BROADCASTS
				})
			]
		})
	);
}
