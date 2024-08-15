n(47120);
var r,
	i,
	a,
	s,
	o = n(442837),
	l = n(759174),
	u = n(570140),
	c = n(686478);
let d = new l.h(
		(e) => {
			let { saveData: t } = e;
			return [null != t.dueAt ? c._.REMINDER : c._.BOOKMARK];
		},
		(e) => {
			let { saveData: t } = e;
			return -t.savedAt.getTime();
		}
	),
	_ = 0,
	E = new Set();
function f(e) {
	let { channelId: t, messageId: n } = e;
	return ''.concat(t, '-').concat(n);
}
class h extends (r = o.ZP.Store) {
	initialize() {}
	getSavedMessages() {
		return d.values();
	}
	getMessageBookmarks() {
		return d.values(c._.BOOKMARK);
	}
	getMessageReminders() {
		return d.values(c._.REMINDER);
	}
	getOverdueMessageReminderCount() {
		return this.getMessageReminders().filter((e) => {
			let { saveData: t } = e;
			return null == t.dueAt || new Date() > t.dueAt;
		}).length;
	}
	getLastFetched() {
		return _;
	}
	isMessageBookmarked(e, t) {
		let n = d.get(
			f({
				channelId: e,
				messageId: t
			})
		);
		return null != n && null == n.saveData.dueAt;
	}
	isMessageReminder(e, t) {
		let n = d.get(
			f({
				channelId: e,
				messageId: t
			})
		);
		return null != n && null != n.saveData.dueAt;
	}
	hasSentNotification(e) {
		return E.has(e);
	}
	getVersion() {
		return d.version;
	}
	getState() {
		return { savedMessages: d };
	}
}
(s = 'SavedMessagesStore'),
	(a = 'displayName') in (i = h)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new h(u.Z, {
		SAVED_MESSAGES_UPDATE: function (e) {
			let { savedMessages: t } = e;
			for (let e of ((_ = new Date().getTime()), d.clear(), t)) d.set(f(e.saveData), e);
			t.forEach((e) => {
				null != e.saveData.dueAt &&
					(null != e.saveData.dueAt && e.saveData.dueAt > new Date() && E.delete(e.saveData.messageId),
					null != e.saveData.dueAt && e.saveData.dueAt < new Date() && E.add(e.saveData.messageId));
			});
		},
		SAVED_MESSAGE_CREATE: function (e) {
			let { savedMessage: t } = e;
			d.set(f(t.saveData), t);
		},
		SAVED_MESSAGE_DELETE: function (e) {
			let { savedMessageData: t } = e;
			d.delete(f(t));
		},
		MESSAGE_REMINDER_NOTIFIED: function (e) {
			let { messageId: t } = e;
			E.add(t);
		}
	}));
