n(653041);
var r = n(735250);
n(470079);
var i = n(392711),
	a = n.n(i),
	s = n(481060),
	o = n(730749),
	l = n(823379),
	u = n(439511);
let c = (0, o.Z)((e) => {
	let { member: t, empty: n, guildId: i } = e;
	return n || null == t
		? (0, r.jsx)('div', { className: u.partyMember })
		: (0, r.jsx)('div', {
				className: u.partyMember,
				children: (0, r.jsx)(s.Avatar, {
					src: t.getAvatarURL(i, 16),
					'aria-label': t.username,
					size: s.AvatarSizes.SIZE_16,
					className: u.partyMember
				})
			});
});
t.Z = (e) => {
	let { partySize: t, members: n, minAvatarsShown: i = 1, maxAvatarsShown: s = 2, guildId: o } = e,
		{ totalSize: d, knownSize: _ } = t;
	if (d < i) return null;
	let E = a()(n)
			.filter(l.lm)
			.take(s)
			.map((e) =>
				(0, r.jsx)(
					c,
					{
						member: e,
						guildId: o
					},
					e.id
				)
			)
			.value(),
		f = d - _;
	for (let e = 0; e < f && E.length < s; e++)
		E.push(
			(0, r.jsx)(
				c,
				{
					empty: !0,
					guildId: o
				},
				'empty-member-'.concat(e)
			)
		);
	let h = Math.max(Math.min(d - E.length, 99), 0);
	if (1 === h) {
		let e = n[s];
		E.push(
			(0, r.jsx)(
				c,
				{
					member: e,
					guildId: o
				},
				e.id
			)
		);
	}
	return (0, r.jsx)('div', {
		className: u.wrapper,
		children: (0, r.jsxs)('div', {
			className: u.partyMembers,
			children: [
				E,
				h > 1
					? (0, r.jsxs)('div', {
							className: u.partyMemberOverflow,
							children: ['+', h]
						})
					: null
			]
		})
	});
};
