n.d(t, {
	Z: function () {
		return f;
	}
}),
	n(724458);
var i = n(735250);
n(470079);
var a = n(442837),
	s = n(692547),
	l = n(481060),
	r = n(889161),
	o = n(592125),
	c = n(15274),
	u = n(924301),
	d = n(554747),
	h = n(854698),
	m = n(688641),
	p = n(689938),
	_ = n(572563);
function f(e) {
	let { channelId: t } = e,
		f = (0, a.e7)([o.Z], () => o.Z.getChannel(t), [t]),
		E = (0, d.sz)(t),
		C = null != (0, d.qY)(t),
		{ canManageGuildEvent: g } = (0, r.XJ)(f),
		I = (0, a.cj)([u.ZP], () => E.reduce((e, t) => ((e[t.id] = u.ZP.getUserCount(t.id, (0, h.DK)(t))), e), {}));
	return E.length < 1 || C
		? null
		: (0, i.jsx)(i.Fragment, {
				children: E.map((e) =>
					(0, i.jsx)(
						m.Z,
						{
							icon: (0, i.jsx)(l.CalendarIcon, {
								size: 'custom',
								color: 'currentColor',
								height: 20,
								width: 20
							}),
							color: s.Z.unsafe_rawColors.GREEN_360.css,
							title: (g(e) ? p.Z.Messages.GUILD_EVENT_START_PROMPT : p.Z.Messages.GUILD_EVENT_UPCOMING_PROMPT).format({ eventName: e.name }),
							description: p.Z.Messages.GUILD_EVENT_START_PROMPT_DESCRIPTION.format({ startTime: (0, h.ub)(e.scheduled_start_time).startDateTimeString }),
							onClick: () => {
								var t;
								g((t = e))
									? (0, l.openModalLazy)(async () => {
											let { default: e } = await Promise.all([n.e('22347'), n.e('84722'), n.e('69544')]).then(n.bind(n, 296864));
											return (n) =>
												(0, i.jsx)(e, {
													...n,
													event: t
												});
										})
									: (0, c.bO)({
											eventId: t.id,
											parentGuildId: t.guild_id
										});
							},
							userCount: I[e.id],
							className: _.eventPrompt
						},
						e.id
					)
				)
			});
}
