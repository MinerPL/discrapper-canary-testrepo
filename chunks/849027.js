n.d(t, {
	Z: function () {
		return I;
	}
});
var r = n(430198),
	i = n(897345),
	a = n(697379),
	s = n(241559),
	o = n(819553),
	l = n(931261),
	u = n(994592),
	c = n(911560),
	d = n(592125),
	_ = n(430824),
	E = n(823379),
	f = n(754688),
	h = n(981631),
	p = n(176505);
async function I(e) {
	let { guildId: t, channelId: n } = e,
		I = _.Z.getGuild(t),
		m = _.Z.getRoles(t);
	if (null == I && t !== h.ME) return !1;
	if (null == n) return !0;
	if ((0, p.AB)(n))
		switch (n) {
			case p.oC.ROLE_SUBSCRIPTIONS:
				return (0, u.on)(t, m);
			case p.oC.GUILD_SHOP:
				return (0, i.r)(I, m);
			case p.oC.MEMBER_APPLICATIONS:
				return (0, a.v)(t);
			case p.oC.GUILD_HOME:
				return (0, l.s)(t);
			case p.oC.CHANNEL_BROWSER:
				return null != I && I.hasFeature(h.oNc.COMMUNITY);
			case p.oC.GUILD_ONBOARDING:
				return o.ZP.shouldShowOnboarding(t);
			case p.oC.CUSTOMIZE_COMMUNITY:
				return null != I && I.hasFeature(h.oNc.COMMUNITY);
			case p.oC.MEMBER_SAFETY:
				return (0, s.lv)(t);
			default:
				(0, E.vE)(n);
		}
	let T = d.Z.getChannel(n);
	return (
		(null != T || (await c.Z.loadThread(n), null != (T = d.Z.getChannel(n)))) &&
		((0, f.YO)(T) || r.Z.isChannelGatedAndVisible(t, n))
	);
}
