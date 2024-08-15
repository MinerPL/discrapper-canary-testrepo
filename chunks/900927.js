n.d(t, {
	Z: function () {
		return p;
	}
});
var i = n(735250);
n(470079);
var a = n(399606),
	s = n(481060),
	l = n(275759),
	r = n(565138),
	o = n(706454),
	c = n(271383),
	u = n(430824),
	d = n(709054),
	h = n(689938),
	m = n(91941);
function p(e) {
	let { userId: t, guildId: n, textClassName: p, tooltipDelay: _ } = e,
		f = (0, a.e7)([o.default], () => o.default.locale),
		E = (0, a.e7)([u.Z], () => (null != n ? u.Z.getGuild(n) : null)),
		C = (0, a.e7)([c.ZP], () => (null != n ? c.ZP.getMember(n, t) : null)),
		g = (0, l.FI)(d.default.extractTimestamp(t), f),
		I = (0, l.FI)(null == C ? void 0 : C.joinedAt, f);
	return null == E || null == C
		? (0, i.jsx)(s.Text, {
				variant: 'text-sm/normal',
				className: p,
				children: g
			})
		: (0, i.jsxs)('div', {
				className: m.memberSinceWrapper,
				children: [
					(0, i.jsxs)('div', {
						className: m.memberSince,
						children: [
							(0, i.jsx)(s.Tooltip, {
								text: h.Z.Messages.DISCORD_NAME,
								delay: _,
								children: (e) =>
									(0, i.jsx)(s.ClydeIcon, {
										size: 'custom',
										width: 28,
										height: 28,
										color: 'currentColor',
										...e,
										className: m.discordIcon
									})
							}),
							(0, i.jsx)(s.Text, {
								variant: 'text-sm/normal',
								className: p,
								children: g
							})
						]
					}),
					(0, i.jsx)('div', { className: m.divider }),
					(0, i.jsxs)('div', {
						className: m.memberSince,
						children: [
							(0, i.jsx)(s.Tooltip, {
								text: E.name,
								delay: _,
								children: (e) =>
									(0, i.jsx)(r.Z, {
										...e,
										guild: E,
										size: r.Z.Sizes.SMOL
									})
							}),
							(0, i.jsx)(s.Text, {
								variant: 'text-sm/normal',
								className: p,
								children: I
							})
						]
					})
				]
			});
}
