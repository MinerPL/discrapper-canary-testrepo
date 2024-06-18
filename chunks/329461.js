"use strict";
n(47120);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(70956);
let _ = [],
  d = new Set,
  c = 0;
class E extends(i = a.ZP.Store) {
  initialize() {
    setInterval(() => {
      this.emitChange()
    }, 1 * u.Z.Millis.MINUTE)
  }
  getMessageReminders() {
    return _
  }
  isMessageReminder(e) {
    let t = _.find(t => t.messageId === e);
    return null != t && !t.complete
  }
  getOverdueMessageReminderCount() {
    return _.filter(e => null == e.dueAt || new Date > e.dueAt).length
  }
  recentlyFetched() {
    return new Date().getTime() - c < 1 * u.Z.Millis.MINUTE
  }
  hasSentNotification(e) {
    return d.has(e)
  }
  getState() {
    return {
      messages: _
    }
  }
}
o = "MessageRemindersStore", (s = "displayName") in(r = E) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new E(l.Z, {
  SAVED_MESSAGES_UPDATE: function(e) {
    let {
      messages: t
    } = e;
    c = new Date().getTime(), _ = t.map(e => ({
      ...e,
      complete: !1
    })), t.forEach(e => {
      null != e.dueAt && e.dueAt > new Date && d.delete(e.messageId), null != e.dueAt && e.dueAt < new Date && d.add(e.messageId)
    })
  },
  MESSAGE_REMINDER_TOGGLE: function(e) {
    let {
      messageId: t,
      complete: n
    } = e, i = _.findIndex(e => e.messageId === t);
    if (-1 === i) return !1;
    _[i] = {
      ..._[i],
      complete: n
    }
  },
  MESSAGE_REMINDER_NOTIFIED: function(e) {
    let {
      messageId: t
    } = e;
    d.add(t)
  }
})