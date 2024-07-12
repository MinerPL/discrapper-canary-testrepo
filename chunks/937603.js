n(47120);
var r = n(570140),
  i = n(147913),
  a = n(703656),
  o = n(654769),
  s = n(742989),
  l = n(802463),
  u = n(981631);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let d = null;

function _() {
  if (s.Z.getCurrentConfig({
  location: '8fe27d_1'
}, {
  autoTrackExposure: !1
}).showReminders) {
l.Z.getMessageReminders().filter(e => null != e.dueAt && new Date() >= e.dueAt).filter(e => !l.Z.hasSentNotification(e.messageId)).forEach(e => {
  var t, n;
  o.Z.showNotification(null, 'Overdue reminder in '.concat(e.channelSummary), null !== (n = null !== (t = e.notes) && void 0 !== t ? t : e.messageSummary) && void 0 !== n ? n : '', {
    notif_type: 'OVERDUE_MESSAGE_REMINDER',
    notif_user_id: e.authorId,
    message_id: e.messageId,
    channel_id: e.channelId,
    guild_id: e.guildId
  }, {
    omitViewTracking: !0,
    tag: e.messageId,
    onClick() {
      (0, a.uL)(u.Z5c.CHANNEL(e.guildId, e.channelId, e.messageId));
    }
  }), r.Z.dispatch({
    type: 'MESSAGE_REMINDER_NOTIFIED',
    messageId: e.messageId
  });
});
let e = l.Z.getMessageReminders().filter(e => null != e.dueAt && new Date() < e.dueAt).sort((e, t) => e.dueAt.getTime() - t.dueAt.getTime());
null != d && clearTimeout(d), e.length > 0 && (d = setTimeout(() => {
  _();
}, new Date().getTime() - e[0].dueAt.getTime()));
  }
}
class E extends i.Z {
  constructor(...e) {
super(...e), c(this, 'actions', {
  POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
  SAVED_MESSAGES_UPDATE: () => this.handleUpdates()
}), c(this, 'handlePostConnectionOpen', () => {
  _();
}), c(this, 'handleUpdates', () => {
  _();
});
  }
}
t.Z = new E();