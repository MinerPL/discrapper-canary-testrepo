t.d(n, {
	Z: function () {
		return v;
	}
});
var s = t(735250);
t(470079);
var i = t(442837),
	o = t(481060),
	l = t(666520),
	r = t(592125),
	a = t(430824),
	c = t(944486),
	d = t(785717),
	u = t(621853),
	I = t(588822),
	_ = t(940730),
	f = t(900927),
	E = t(678738),
	m = t(351707),
	p = t(228168),
	x = t(689938),
	Z = t(408277);
function v(e) {
	var n;
	let { user: t, currentUser: v, displayProfile: h, subsection: S, onClose: T } = e,
		{ trackUserProfileAction: A } = (0, d.KZ)(),
		g = (0, i.e7)([a.Z], () => ((null == h ? void 0 : h.guildId) != null ? a.Z.getGuild(h.guildId) : null)),
		N = (0, i.e7)([u.Z], () => {
			var e;
			return null === (e = u.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
		}),
		j = (0, i.e7)([r.Z, c.Z], () => r.Z.getChannel(c.Z.getChannelId()));
	return (0, s.jsxs)(o.ScrollerThin, {
		fade: !0,
		className: Z.scroller,
		children: [
			(null == h ? void 0 : h.bio) != null &&
				(null == h ? void 0 : h.bio) !== '' &&
				(0, s.jsx)(I.Z, {
					userBio: h.bio,
					setLineClamp: !1
				}),
			(null == N ? void 0 : N.popularApplicationCommandIds) != null &&
				null != j &&
				(0, s.jsx)(_.Z, {
					applicationId: N.id,
					commandIds: N.popularApplicationCommandIds,
					channel: j,
					guildId: null !== (n = null == h ? void 0 : h.guildId) && void 0 !== n ? n : void 0,
					onClick: T
				}),
			null != g &&
				(0, s.jsx)(m.Z, {
					user: t,
					currentUser: v,
					guild: g,
					scrollIntoView: S === p.Tb.ROLES
				}),
			(0, s.jsx)(E.Z, {
				heading: x.Z.Messages.BOT_PROFILE_CREATED_ON,
				children: (0, s.jsx)(f.Z, {
					userId: t.id,
					guildId: null == h ? void 0 : h.guildId,
					tooltipDelay: p.vB
				})
			}),
			(0, s.jsx)(E.Z, {
				heading: x.Z.Messages.NOTE,
				scrollIntoView: S === p.Tb.NOTE,
				children: (0, s.jsx)(l.Z, {
					userId: t.id,
					className: Z.note,
					autoFocus: S === p.Tb.NOTE,
					onUpdate: () => A({ action: 'SET_NOTE' })
				})
			})
		]
	});
}
