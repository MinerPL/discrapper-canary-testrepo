t.d(n, {
	Z: function () {
		return E;
	}
});
var l = t(735250);
t(470079);
var s = t(120356),
	o = t.n(s),
	i = t(481060),
	r = t(709054),
	u = t(7697),
	a = t(421032),
	c = t(689938),
	d = t(405327);
function E(e) {
	let { guildId: n, recurrenceRule: t, guildEventId: s, onRecurrenceClick: E, hideScroller: _ = !1, activeRecurrenceId: C } = e,
		{ recurrenceStartTimes: N, canViewMoreRecurrences: h, updateRecurrenceStartTimes: m } = (0, u.Z)(s, n, t);
	return (0, l.jsxs)('div', {
		className: d.recurrences,
		children: [
			(0, l.jsx)(i.Heading, {
				variant: 'heading-sm/medium',
				className: d.heading,
				children: c.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS
			}),
			(0, l.jsxs)(i.Scroller, {
				className: o()(d.scroller, { [d.showScroller]: !_ }),
				children: [
					N.map((e) => {
						let n = r.default.fromTimestamp(e.getTime());
						return (0, l.jsx)(
							a.Z,
							{
								recurrenceId: n,
								originalScheduledStartTime: e,
								guildEventId: s,
								onClick: E,
								isActive: n === C
							},
							n
						);
					}),
					h &&
						(0, l.jsx)(i.Button, {
							grow: !1,
							onClick: (e) => {
								e.stopPropagation(), m();
							},
							look: i.Button.Looks.LINK,
							size: i.Button.Sizes.MIN,
							color: i.Button.Colors.LINK,
							className: d.button,
							children: c.Z.Messages.GUILD_SCHEDULED_EVENT_VIEW_MORE_RECURRENCES
						})
				]
			})
		]
	});
}
