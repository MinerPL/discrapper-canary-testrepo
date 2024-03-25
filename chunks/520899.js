"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
}), a("222007");
var n = a("446674"),
  s = a("913144"),
  r = a("718517");
let u = [],
  l = new Set,
  d = 0;
class i extends n.default.Store {
  initialize() {
    setInterval(() => {
      this.emitChange()
    }, 1 * r.default.Millis.MINUTE)
  }
  getMessageReminders() {
    return u
  }
  isMessageReminder(e) {
    let t = u.find(t => t.messageId === e);
    return null != t && !t.complete
  }
  getOverdueMessageReminderCount() {
    return u.filter(e => null == e.dueAt || new Date > e.dueAt).length
  }
  recentlyFetched() {
    return new Date().getTime() - d < 1 * r.default.Millis.MINUTE
  }
  hasSentNotification(e) {
    return l.has(e)
  }
  getState() {
    return {
      messages: u
    }
  }
}
i.displayName = "MessageRemindersStore";
var c = new i(s.default, {
  SAVED_MESSAGES_UPDATE: function(e) {
    let {
      messages: t
    } = e;
    d = new Date().getTime(), u = t.map(e => ({
      ...e,
      complete: !1
    })), t.forEach(e => {
      null != e.dueAt && e.dueAt > new Date && l.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && l.add(e.messageId)
    })
  },
  MESSAGE_REMINDER_TOGGLE: function(e) {
    let {
      messageId: t,
      complete: a
    } = e, n = u.findIndex(e => e.messageId === t);
    if (-1 === n) return !1;
    u[n] = {
      ...u[n],
      complete: a
    }
  },
  MESSAGE_REMINDER_NOTIFIED: function(e) {
    let {
      messageId: t
    } = e;
    l.add(t)
  }
})