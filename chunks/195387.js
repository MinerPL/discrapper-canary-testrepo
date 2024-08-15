n.d(t, {
	Z: function () {
		return p;
	}
});
var r = n(735250);
n(470079);
var i = n(442837),
	a = n(481060),
	s = n(906732),
	o = n(189432),
	l = n(189357),
	u = n(434404),
	c = n(314897),
	d = n(944486),
	_ = n(475413),
	E = n(176505),
	f = n(50493),
	h = n(689938);
function p(e) {
	let { user: t, guildId: n, channelId: p, onClose: I } = e,
		{ newestAnalyticsLocation: m } = (0, s.ZP)(),
		T = (0, i.e7)([c.default], () => c.default.getId() === (null == t ? void 0 : t.id)),
		g = (0, l.ms)(null != n ? n : null, !0),
		S = (0, i.e7)([d.Z], () => (null != p ? p : d.Z.getChannelId(n, !0)), [p, n]);
	return null == n || !g || T
		? null
		: (0, r.jsx)(_.oY, {
				action: 'PRESS_MOD_VIEW',
				icon: a.ModerationIcon,
				tooltipText: h.Z.Messages.GUILD_MEMBER_MOD_VIEW_TITLE,
				onClick: () => {
					u.Z.close(),
						(0, o.r)(n, t.id, null != S ? S : E.oC.MEMBER_SAFETY, {
							modViewPanel: f.k.INFO,
							sourceLocation: m
						}),
						null == I || I();
				}
			});
}
