t.r(n),
	t.d(n, {
		default: function () {
			return M;
		}
	});
var a = t(735250);
t(470079);
var s = t(913527),
	i = t.n(s),
	r = t(481060),
	l = t(239091),
	u = t(324701),
	d = t(898150),
	o = t(689938);
function M(e) {
	let { message: n } = e,
		t = (0, d.useMessageReminderDurationSuggestions)({
			onSelectDuration: (e) =>
				(0, u.z)({
					channelId: n.channel_id,
					messageId: n.id,
					dueAt: i()().add(e, 'millisecond').toDate()
				})
		});
	return (0, a.jsx)(r.Menu, {
		navId: 'message-reminder-snooze',
		onClose: l.Zy,
		'aria-label': o.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
		onSelect: () => {},
		children: t
	});
}
