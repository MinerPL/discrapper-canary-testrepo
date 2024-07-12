n(47120);
var r, i, a, o, s = n(873011),
  l = n(442837),
  u = n(570140);
let c = [],
  d = new Set(),
  _ = 0;
class E extends(r = l.ZP.Store) {
  getMessageReminders() {
return c;
  }
  isMessageReminder(e) {
let t = c.find(t => t.messageId === e);
return null != t && !t.complete;
  }
  getOverdueMessageReminderCount() {
return c.filter(e => null == e.dueAt || new Date() > e.dueAt).length;
  }
  getLastFetched() {
return _;
  }
  hasSentNotification(e) {
return d.has(e);
  }
  getState() {
return {
  messages: c
};
  }
}
o = 'MessageRemindersStore', (a = 'displayName') in(i = E) ? Object.defineProperty(i, a, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = o, t.Z = new E(u.Z, {
  SAVED_MESSAGES_UPDATE: function(e) {
let {
  messages: t
} = e;
_ = new Date().getTime(), c = t.filter(e => e.type === s.J.REMINDER).map(e => ({
  ...e,
  complete: !1
})), t.forEach(e => {
  null != e.dueAt && e.dueAt > new Date() && d.delete(e.messageId), null != e.dueAt && e.dueAt < new Date() && d.add(e.messageId);
});
  },
  MESSAGE_REMINDER_TOGGLE: function(e) {
let {
  messageId: t,
  complete: n
} = e, r = c.findIndex(e => e.messageId === t);
if (-1 === r)
  return !1;
c[r] = {
  ...c[r],
  complete: n
};
  },
  MESSAGE_REMINDER_NOTIFIED: function(e) {
let {
  messageId: t
} = e;
d.add(t);
  }
});