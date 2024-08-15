t.d(i, {
	Z: function () {
		return o;
	}
});
var n = t(470079),
	l = t(512722),
	s = t.n(l),
	a = t(442837),
	d = t(430824),
	u = t(771845),
	r = t(594174);
function o(e) {
	let { isGuildIncluded: i, selectedGuildId: t } = e,
		l = (0, a.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()),
		o = (0, a.e7)([d.Z], () => d.Z.getGuilds()),
		c = (0, a.e7)([r.default], () => r.default.getCurrentUser());
	return {
		options: n.useMemo(
			() =>
				null == c
					? []
					: (null == i
							? l
							: l.filter((e) => {
									let t = o[e];
									return s()(null != t, 'guild should not be null'), i(t, c);
								})
						).map((e) => {
							let i = o[e];
							return (
								s()(null != i, 'guild should not be null'),
								{
									label: i.name,
									value: i.id
								}
							);
						}),
			[l, o, c, i]
		),
		selectedGuild: null == t ? void 0 : o[t]
	};
}
