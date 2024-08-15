t.d(n, {
	Z: function () {
		return _;
	}
});
var l = t(735250);
t(470079);
var i = t(442837),
	u = t(481060),
	s = t(41776),
	r = t(314897),
	a = t(924301),
	d = t(482241),
	E = t(894017),
	o = t(765305),
	c = t(689938);
function _(e) {
	let { guildEventId: n, guildId: t, recurrenceId: _ } = e,
		T = (0, i.e7)([s.Z], () => s.Z.isLurking(t), [t]),
		N = (0, i.e7)([r.default], () => r.default.getId()),
		{
			rsvped: I,
			baseRsvp: Z,
			recurrenceRsvp: f
		} = (0, i.cj)(
			[a.ZP],
			() => ({
				rsvped: a.ZP.isInterestedInEventRecurrence(n, _),
				baseRsvp: a.ZP.getRsvp(n, null, N),
				recurrenceRsvp: a.ZP.getRsvp(n, _, N)
			}),
			[_, n, N]
		),
		g = (0, E.Z)(_, n);
	if (T || (null == g ? void 0 : g.is_canceled)) return null;
	let M = function () {
		let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
			l = (null == Z ? void 0 : Z.response) === o.gv.INTERESTED ? o.gv.UNINTERESTED : o.gv.INTERESTED,
			i = e ? null : _;
		d.Z.updateRsvp(n, i, t, l);
	};
	return (0, l.jsxs)(u.MenuItem, {
		id: I ? c.Z.Messages.EVENT_MARK_NOT_INTERESTED : c.Z.Messages.EVENT_MARK_INTERESTED,
		label: I ? c.Z.Messages.EVENT_MARK_NOT_INTERESTED : c.Z.Messages.EVENT_MARK_INTERESTED,
		action: void 0,
		children: [
			(0, l.jsx)(u.MenuItem, {
				id: c.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
				label: c.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
				action: () => M(!1)
			}),
			(0, l.jsx)(u.MenuItem, {
				id: c.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
				label: c.Z.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
				action: () => M(!0),
				disabled: null != f
			})
		]
	});
}
