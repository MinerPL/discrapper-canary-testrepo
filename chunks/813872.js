n.d(l, {
	Z: function () {
		return g;
	}
});
var t = n(735250),
	a = n(470079),
	i = n(442837),
	r = n(481060),
	s = n(40851),
	u = n(189432),
	d = n(189357),
	o = n(944486),
	c = n(626135),
	E = n(981631),
	M = n(176505),
	Z = n(50493),
	I = n(689938);
function g(e) {
	let { userId: l, guildId: n, channelId: g, location: m, onAction: _ } = e,
		C = a.useContext(c.AnalyticsContext),
		f = (0, s.Aq)(),
		R = (0, i.e7)([o.Z], () => (null != g ? g : o.Z.getChannelId(n, !0)), [g, n]),
		v = (0, d.ms)(n, !0);
	return null != n && v
		? (0, t.jsx)(r.MenuItem, {
				id: 'mod-view',
				label: I.Z.Messages.GUILD_MEMBER_MOD_VIEW_TITLE,
				action: () => {
					null == _ || _(),
						(0, u.r)(n, l, null != R ? R : M.oC.MEMBER_SAFETY, {
							modViewPanel: Z.k.INFO,
							sourceLocation: null != m ? m : C.location
						}),
						f.dispatch(E.CkL.POPOUT_CLOSE);
				}
			})
		: null;
}
