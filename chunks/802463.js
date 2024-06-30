n(47120);
var r, i, a, o, s = n(873011), l = n(442837), u = n(570140), c = n(70956);
let d = [], _ = new Set(), E = 0;
class f extends (r = l.ZP.Store) {
    initialize() {
        setInterval(() => {
            this.emitChange();
        }, 1 * c.Z.Millis.MINUTE);
    }
    getMessageReminders() {
        return d;
    }
    isMessageReminder(e) {
        let t = d.find(t => t.messageId === e);
        return null != t && !t.complete;
    }
    getOverdueMessageReminderCount() {
        return d.filter(e => null == e.dueAt || new Date() > e.dueAt).length;
    }
    getLastFetched() {
        return E;
    }
    hasSentNotification(e) {
        return _.has(e);
    }
    getState() {
        return { messages: d };
    }
}
o = 'MessageRemindersStore', (a = 'displayName') in (i = f) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o, t.Z = new f(u.Z, {
    SAVED_MESSAGES_UPDATE: function (e) {
        let {messages: t} = e;
        E = new Date().getTime(), d = t.filter(e => e.type === s.J.REMINDER).map(e => ({
            ...e,
            complete: !1
        })), t.forEach(e => {
            null != e.dueAt && e.dueAt > new Date() && _.delete(e.messageId), null != e.dueAt && e.dueAt < new Date() && _.add(e.messageId);
        });
    },
    MESSAGE_REMINDER_TOGGLE: function (e) {
        let {
                messageId: t,
                complete: n
            } = e, r = d.findIndex(e => e.messageId === t);
        if (-1 === r)
            return !1;
        d[r] = {
            ...d[r],
            complete: n
        };
    },
    MESSAGE_REMINDER_NOTIFIED: function (e) {
        let {messageId: t} = e;
        _.add(t);
    }
});
