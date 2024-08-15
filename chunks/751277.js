n.d(t, {
	Z: function () {
		return p;
	}
});
var i = n(735250);
n(470079);
var l = n(266067),
	r = n(442837),
	a = n(481060),
	s = n(601964),
	o = n(701190),
	c = n(836040),
	u = n(603592),
	d = n(981631),
	h = n(689938);
function p(e) {
	var t;
	let { isOnHubVerificationRoute: n } = e,
		p = (0, l.LX)(null !== (t = window.location.pathname) && void 0 !== t ? t : '', { path: d.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(':guildId', ':inviteCode') }),
		_ = (0, r.e7)([o.Z], () => {
			if (null == p) return null;
			let { inviteCode: e } = p.params;
			return null != e ? o.Z.getInvite(e) : null;
		}),
		f = (null == _ ? void 0 : _.guild) != null ? new s.ZP(null == _ ? void 0 : _.guild) : null;
	return n
		? null != f && null != _
			? (0, i.jsx)(c.Z, {
					guild: f,
					invite: _
				})
			: (0, i.jsx)(u.Z, {
					tooltip: h.Z.Messages.HUB_DISCORD_HUBS,
					id: 'guild-hub-button',
					icon: a.HubIcon
				})
		: null;
}
