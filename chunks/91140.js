n.d(t, {
	W: function () {
		return c;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(297781),
	s = n(443487),
	o = n(43205),
	l = n(797342),
	u = n(182022);
let c = [a.OV, a.EE, a.Af, a.U9, a.wO, a.f, a.n8, a.v1, a.pQ];
t.Z = i.memo((e) => {
	let { entry: t, channel: n, selected: i, hovered: d } = e,
		{ iconUrl: _, iconTitle: E } = (0, l.n)(t);
	return (0, r.jsxs)(s.Zb, {
		selected: i,
		children: [
			(0, r.jsxs)(s.e$, {
				children: [
					(0, r.jsx)(s.F9, {
						entry: t,
						channelId: n.id,
						guildId: n.guild_id
					}),
					(0, r.jsx)(s.ll, { children: t.extra.game_name }),
					(0, r.jsx)(a.Gk, {
						location: a.Gt.CARD,
						children: c.map((e, n) =>
							(0, r.jsx)(
								e,
								{
									entry: t,
									hovered: d
								},
								n
							)
						)
					})
				]
			}),
			(0, r.jsx)(o.f, {
				alt: E,
				src: _,
				size: 48,
				className: u.thumbnail,
				showTooltip: null != E
			})
		]
	});
});
