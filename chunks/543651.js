var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(913527),
	o = n.n(s),
	l = n(442837),
	u = n(481060),
	c = n(835473),
	d = n(318374),
	_ = n(925329),
	E = n(594174),
	f = n(823379),
	h = n(689938),
	p = n(207190);
t.Z = function (e) {
	let { createdAt: t, participantIds: n, applicationId: i, title: s, guildId: m, className: I } = e,
		T = (0, c.q)(i),
		g = (0, l.Wu)([E.default], () => {
			var e;
			return null !== (e = n.map((e) => E.default.getUser(e)).filter(f.lm)) && void 0 !== e ? e : [];
		}),
		S = null == T ? void 0 : T.name,
		A = o()(t).fromNow();
	return null == t
		? null
		: (0, r.jsxs)('div', {
				className: a()(I, p.container),
				children: [
					(0, r.jsx)(_.Z, { game: T }),
					(0, r.jsxs)('div', {
						className: p.textSection,
						children: [
							null != s && '' !== s
								? (0, r.jsx)(u.Text, {
										variant: 'text-md/semibold',
										color: 'interactive-active',
										children: s
									})
								: (0, r.jsx)(u.Text, {
										variant: 'text-md/semibold',
										color: 'text-muted',
										children: h.Z.Messages.CLIPS_UNTITLED
									}),
							(0, r.jsxs)(u.Text, {
								variant: 'text-xs/medium',
								color: 'text-muted',
								className: p.__invalid_subtitle,
								children: [null != S ? ''.concat(S, ' \u2022 ') : null, A]
							}),
							(0, r.jsx)(u.Text, {
								variant: 'text-xs/medium',
								color: 'text-muted',
								className: p.__invalid_subtitle
							})
						]
					}),
					null != g &&
						g.length > 0 &&
						(0, r.jsx)(d.Z, {
							maxUsers: 4,
							users: g,
							className: p.__invalid_facePile,
							guildId: m
						})
				]
			});
};
