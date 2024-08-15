t.d(n, {
	Z: function () {
		return M;
	}
});
var i = t(735250);
t(470079);
var a = t(913527),
	l = t.n(a),
	r = t(442837),
	s = t(481060),
	o = t(324701),
	u = t(768943),
	d = t(742989),
	c = t(898150),
	E = t(689938);
function M(e) {
	let { showReminders: n } = d.Z.useExperiment({ location: 'use_message_reminders_item' }, { autoTrackExposure: !1 }),
		t = (0, r.e7)([u.Z], () => u.Z.isMessageReminder(e.channel_id, e.id)),
		a = (0, c.useMessageReminderDurationSuggestions)({
			onSelectDuration: (n) =>
				(0, o.z)({
					channelId: e.channel_id,
					messageId: e.id,
					dueAt: l()().add(n, 'millisecond').toDate(),
					displayToast: !0
				})
		});
	return n
		? (0, i.jsxs)(s.MenuItem, {
				id: 'mark-todo',
				label: t ? E.Z.Messages.MESSAGE_REMINDERS_EDIT : E.Z.Messages.MESSAGE_REMINDERS_CREATE,
				children: [
					(0, i.jsx)(s.MenuGroup, {
						label: E.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
						children: a
					}),
					t
						? (0, i.jsx)(s.MenuItem, {
								id: 'remove-reminder',
								label: E.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE,
								action: () =>
									(0, o.z)({
										channelId: e.channel_id,
										messageId: e.id,
										displayToast: !0
									}),
								color: 'danger'
							})
						: null
				]
			})
		: null;
}
