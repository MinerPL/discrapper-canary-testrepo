n.d(t, {
	Z: function () {
		return c;
	}
});
var i = n(735250),
	a = n(913527),
	s = n.n(a),
	r = n(481060),
	l = n(689938),
	o = n(782590);
function c(e) {
	let t,
		n,
		{ reminder: a, throttledNow: c } = e;
	return null == a.saveData.dueAt
		? null
		: (a.saveData.dueAt > c
				? ((n = 'text-normal'),
					(t = l.Z.Messages.MESSAGE_REMINDERS_DUE_IN.format({
						duration: s()
							.duration(a.saveData.dueAt.getTime() - c.getTime(), 'millisecond')
							.humanize()
					})))
				: ((n = 'text-danger'),
					(t = l.Z.Messages.MESSAGE_REMINDERS_OVERDUE.format({
						duration: s()
							.duration(c.getTime() - a.saveData.dueAt.getTime(), 'millisecond')
							.humanize()
					}))),
			(0, i.jsxs)('div', {
				className: o.container,
				children: [
					(0, i.jsx)('div', {
						className: o.icon,
						children: (0, i.jsx)(r.ClockIcon, {
							size: 'xxs',
							color: 'text-danger' === n ? r.tokens.colors.TEXT_DANGER : r.tokens.colors.INTERACTIVE_ACTIVE
						})
					}),
					(0, i.jsx)(r.Heading, {
						variant: 'text-md/semibold',
						color: n,
						children: t
					})
				]
			}));
}
