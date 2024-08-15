t(653041);
var n = t(735250),
	a = t(470079),
	i = t(442837),
	r = t(481060),
	o = t(165630),
	l = t(771845),
	c = t(11844),
	d = t(300037),
	_ = t(689938),
	E = t(127114);
s.Z = function (e) {
	let { hasAppliedGuildBoosts: s, subscriptionIsPausedOrPausePending: t } = e,
		u = (0, i.e7)([o.Z], () => o.Z.affinities),
		I = (0, i.e7)([l.ZP], () => l.ZP.getFlattenedGuildIds()),
		T = a.useMemo(() => {
			let e = u.slice(0, 3).map((e) => e.guildId);
			for (let s = 0; s < I.length && !(e.length >= 3); s++) {
				let t = I[s];
				!e.includes(t) && e.push(t);
			}
			return e;
		}, [u, I]);
	return 0 === T.length
		? null
		: (0, n.jsxs)('div', {
				className: E.wrapper,
				children: [
					s &&
						(0, n.jsx)(r.Heading, {
							variant: 'heading-lg/semibold',
							className: E.header,
							children: _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_RECOMMENDED_SERVERS_HEADING
						}),
					T.map((e) =>
						(0, n.jsx)(
							d.Z,
							{
								className: E.recommendedServerCard,
								guildId: e,
								boostingVariant: !0
							},
							e
						)
					),
					I.length > 3 && !1 === t && (0, n.jsx)(c.Z, {})
				]
			});
};
