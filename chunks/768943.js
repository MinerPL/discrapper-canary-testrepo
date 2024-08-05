n(47120), n(733860);
var r, i, a, s, o = n(873011),
  l = n(442837),
  u = n(570140);
let c = [],
  d = [],
  _ = 0,
  E = new Set();
class f extends(r = l.ZP.Store) {
  initialize() {}
  getMessageBookmarks() {
return c;
  }
  getMessageReminders() {
return d;
  }
  getOverdueMessageReminderCount() {
return d.filter(e => null == e.saveData.dueAt || new Date() > e.saveData.dueAt).length;
  }
  getLastFetched() {
return _;
  }
  isMessageBookmarked(e) {
return null != c.find(t => t.saveData.messageId === e);
  }
  isMessageReminder(e) {
return null != d.find(t => t.saveData.messageId === e);
  }
  hasSentNotification(e) {
return E.has(e);
  }
  getState() {
return {
  messageBookmarks: c,
  messageReminders: d
};
  }
}
s = 'SavedMessagesStore', (a = 'displayName') in(i = f) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new f(u.Z, {
  SAVED_MESSAGES_UPDATE: function(e) {
let {
  savedMessages: t
} = e;
_ = new Date().getTime();
let n = t.sort((e, t) => t.saveData.savedAt.getTime() - e.saveData.savedAt.getTime());
c = n.filter(e => e.saveData.type === o.J.BOOKMARK), (d = n.filter(e => e.saveData.type === o.J.REMINDER).map(e => ({
  ...e,
  complete: !1
}))).forEach(e => {
  null != e.saveData.dueAt && e.saveData.dueAt > new Date() && E.delete(e.saveData.messageId), null != e.saveData.dueAt && e.saveData.dueAt < new Date() && E.add(e.saveData.messageId);
});
  },
  SAVED_MESSAGE_CREATE: function(e) {
let {
  savedMessage: t
} = e;
switch (t.saveData.type) {
  case o.J.BOOKMARK:
    (c = c.filter(e => e.saveData.messageId !== t.saveData.messageId)).unshift(t);
    break;
  case o.J.REMINDER:
    (d = d.filter(e => e.saveData.messageId !== t.saveData.messageId)).unshift({
      ...t,
      complete: !1
    });
}
  },
  SAVED_MESSAGE_DELETE: function(e) {
let {
  savedMessageData: t
} = e;
switch (t.type) {
  case o.J.BOOKMARK:
    c = c.filter(e => e.saveData.messageId !== t.messageId);
    break;
  case o.J.REMINDER:
    d = d.filter(e => e.saveData.messageId !== t.messageId);
}
  },
  MESSAGE_REMINDER_TOGGLE: function(e) {
let {
  messageId: t,
  complete: n
} = e, r = d.findIndex(e => e.saveData.messageId === t);
if (-1 === r)
  return !1;
(d = [...d])[r] = {
  ...d[r],
  complete: n
};
  },
  MESSAGE_REMINDER_NOTIFIED: function(e) {
let {
  messageId: t
} = e;
E.add(t);
  }
});