n.d(t, {
	Z: function () {
		return I;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(597312),
	l = n(481060),
	r = n(410030),
	o = n(100527),
	c = n(906732),
	u = n(785717),
	d = n(221292),
	h = n(318661),
	m = n(299261),
	p = n(502762),
	_ = n(475413),
	f = n(228168),
	E = n(689938),
	C = n(640873),
	g = n(321975);
function I(e) {
	let { user: t, channel: n, onViewBlockedProfileClick: I } = e,
		x = (0, h.ZP)(t.id),
		T = (0, r.ZP)(),
		{ analyticsLocations: N } = (0, c.ZP)(o.Z.BLOCKED_PROFILE_PANEL),
		v = (0, u.ZB)({
			layout: 'BLOCKED_PROFILE_PANEL',
			userId: t.id,
			channelId: n.id
		}),
		S = a.useRef(null);
	return (0, i.jsx)(c.Gt, {
		value: N,
		children: (0, i.jsx)(u.Mt, {
			value: v,
			children: (0, i.jsx)(p.Z, {
				ref: S,
				user: t,
				displayProfile: x,
				profileType: f.y0.PANEL,
				themeOverride: T,
				className: C.container,
				children: (0, i.jsx)(s.u2, {
					children: (0, i.jsxs)('div', {
						className: C.container,
						children: [
							(0, i.jsx)('img', {
								alt: '',
								src: g,
								className: C.previewForCollected,
								'aria-hidden': !0
							}),
							(0, i.jsxs)('div', {
								className: C.body,
								children: [
									(0, i.jsx)(m.Z, {
										user: t,
										guildId: null
									}),
									(0, i.jsx)(l.Heading, {
										variant: 'heading-lg/bold',
										className: C.header,
										children: E.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE
									}),
									(0, i.jsx)(l.Text, {
										variant: 'text-sm/medium',
										children: E.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format({ username: t.username })
									}),
									(0, i.jsx)(l.Text, {
										variant: 'text-sm/medium',
										children: E.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_CONFIRMATION
									}),
									(0, i.jsx)(_.tG, {
										className: C.centeredButton,
										action: 'VIEW_BLOCKED_PROFILE',
										text: E.Z.Messages.VIEW_PROFILE,
										autoFocus: !0,
										fullWidth: !1,
										onClick: () => {
											null == I || I(),
												(0, d.pQ)({
													action: 'VIEW_BLOCKED_PROFILE',
													analyticsLocations: N,
													...v
												});
										}
									})
								]
							})
						]
					})
				})
			})
		})
	});
}
