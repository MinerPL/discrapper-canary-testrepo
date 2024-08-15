n(47120);
var r = n(570140),
	i = n(147913),
	a = n(703656),
	s = n(654769),
	o = n(768943),
	l = n(742989),
	u = n(981631);
function c(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
let d = null;
function _() {
	if (l.Z.getCurrentConfig({ location: '8fe27d_1' }, { autoTrackExposure: !1 }).showReminders) {
		o.Z.getMessageReminders()
			.filter((e) => null != e.saveData.dueAt && new Date() >= e.saveData.dueAt)
			.filter((e) => !o.Z.hasSentNotification(e.saveData.messageId))
			.forEach((e) => {
				var t, n;
				s.Z.showNotification(
					null,
					'Overdue reminder in '.concat(e.saveData.channelSummary),
					null !== (n = null !== (t = e.saveData.notes) && void 0 !== t ? t : e.saveData.messageSummary) && void 0 !== n
						? n
						: '',
					{
						notif_type: 'OVERDUE_MESSAGE_REMINDER',
						notif_user_id: e.saveData.authorId,
						message_id: e.saveData.messageId,
						channel_id: e.saveData.channelId,
						guild_id: e.saveData.guildId
					},
					{
						omitViewTracking: !0,
						tag: e.saveData.messageId,
						onClick() {
							(0, a.uL)(u.Z5c.CHANNEL(e.saveData.guildId, e.saveData.channelId, e.saveData.messageId));
						}
					}
				),
					r.Z.dispatch({
						type: 'MESSAGE_REMINDER_NOTIFIED',
						messageId: e.saveData.messageId
					});
			});
		let e = o.Z.getMessageReminders()
			.filter((e) => null != e.saveData.dueAt && new Date() < e.saveData.dueAt)
			.sort((e, t) => e.saveData.dueAt.getTime() - t.saveData.dueAt.getTime());
		null != d && clearTimeout(d),
			e.length > 0 &&
				(d = setTimeout(() => {
					_();
				}, e[0].saveData.dueAt.getTime() - new Date().getTime()));
	}
}
class E extends i.Z {
	constructor(...e) {
		super(...e),
			c(this, 'actions', {
				POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
				SAVED_MESSAGES_UPDATE: () => this.handleUpdates(),
				SAVED_MESSAGE_CREATE: () => this.handleUpdates(),
				SAVED_MESSAGE_DELETE: () => this.handleUpdates()
			}),
			c(this, 'handlePostConnectionOpen', () => {
				_();
			}),
			c(this, 'handleUpdates', () => {
				_();
			});
	}
}
t.Z = new E();
