l.d(n, {
	Z: function () {
		return m;
	}
});
var t = l(442837),
	r = l(2052),
	i = l(99981),
	a = l(906732),
	u = l(835473),
	s = l(914010),
	o = l(561308),
	c = l(701488),
	d = l(689938);
function m(e) {
	let { entry: n } = e,
		l = (0, u.q)(n.extra.application_id),
		m = null == l ? void 0 : l.getIconURL(c.Si.LARGE),
		f = (0, t.e7)([s.Z], () => s.Z.getGuildId()),
		p = (0, r.O)(),
		{ analyticsLocations: E } = (0, a.ZP)(),
		v =
			(0, o.kr)(n) && !(0, o.n2)(n)
				? d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING
				: d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
		C = () => {
			null != f &&
				(0, i.q)({
					guildId: f,
					channelId: void 0,
					locationObject: p.location,
					initialSelectedApplicationId: n.extra.application_id,
					initialSlide: c.ag.SELECT_CHANNEL,
					analyticsLocations: E
				});
		};
	return {
		thumbnailUrl: m,
		title: n.extra.activity_name,
		onClickTitle: C,
		onClickThumbnail: C,
		userDescription: v
	};
}
