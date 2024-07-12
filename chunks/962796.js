n.d(t, {
  BW: function() {
return l;
  },
  Kp: function() {
return d;
  },
  Mf: function() {
return u;
  },
  Y_: function() {
return c;
  },
  dR: function() {
return o;
  }
});
var i = n(873011),
  a = n(570140),
  s = n(192720),
  r = n(802463);

function l(e, t) {
  (0, s.L9)([{
type: i.J.REMINDER,
messageId: e.id,
channelId: e.channel_id,
savedAt: new Date(),
dueAt: t,
...(0, s.sd)(e)
  }], []);
}

function o(e, t) {
  let n = r.Z.getMessageReminders().find(t => t.messageId === e);
  if (null != n)
(0, s.L9)([{
  ...n,
  savedAt: new Date(),
  dueAt: t
}], [n]);
}

function c(e, t) {
  a.Z.dispatch({
type: 'MESSAGE_REMINDER_TOGGLE',
messageId: e,
complete: t
  });
}

function d(e) {
  let t = r.Z.getMessageReminders();
  (0, s.L9)([], t.filter(t => t.messageId === e));
}

function u() {
  let e = r.Z.getMessageReminders();
  e.some(e => e.complete) && (0, s.L9)([], e.filter(e => e.complete));
}