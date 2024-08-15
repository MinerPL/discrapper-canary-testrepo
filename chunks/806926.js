t.d(n, {
	Z: function () {
		return p;
	}
});
var s = t(735250);
t(470079);
var i = t(442837),
	o = t(699516),
	l = t(5192),
	r = t(741308),
	a = t(681837),
	c = t(91433),
	d = t(502762),
	u = t(530),
	I = t(616140),
	_ = t(107194),
	f = t(228168),
	E = t(981631),
	m = t(392214);
function p(e) {
	var n;
	let {
			user: t,
			currentUser: p,
			channelId: x,
			displayProfile: Z,
			initialSection: v,
			initialSubsection: h,
			friendToken: S,
			onClose: T
		} = e,
		A = (0, i.e7)([o.Z], () => o.Z.getRelationshipType(t.id)),
		g = (0, _.Z)({
			user: t,
			currentUser: p
		});
	return (0, s.jsxs)('div', {
		className: m.body,
		children: [
			(0, s.jsx)(u.Z, {
				user: t,
				profileType: f.y0.FULL_SIZE,
				nickname: l.ZP.getName(null == Z ? void 0 : Z.guildId, x, t),
				pronouns: null == Z ? void 0 : Z.pronouns,
				nicknameVariant: 'heading-xl/bold',
				nicknameIcons: (0, s.jsx)(a.Z, { userId: t.id }),
				tags: (0, s.jsx)(r.Z, {
					displayProfile: Z,
					profileType: f.y0.FULL_SIZE,
					onClose: T
				})
			}),
			A === E.OGo.PENDING_INCOMING &&
				(0, s.jsx)(d.Z.Overlay, {
					className: m.friendRequestBannerOverlay,
					children: (0, s.jsx)(c.Z, {
						user: t,
						guildId: null !== (n = null == Z ? void 0 : Z.guildId) && void 0 !== n ? n : void 0,
						channelId: x,
						friendToken: S,
						className: m.friendRequestBanner
					})
				}),
			(0, s.jsx)(d.Z.Overlay, {
				className: m.overlay,
				children: (0, s.jsx)(I.Z, {
					user: t,
					currentUser: p,
					displayProfile: Z,
					items: g,
					initialSection: v,
					initialSubsection: h,
					onClose: T
				})
			})
		]
	});
}
