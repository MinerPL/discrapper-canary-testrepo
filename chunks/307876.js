n.d(t, {
  Z: function() {
return f;
  }
});
var r = n(232567),
  i = n(147913),
  a = n(592125),
  s = n(944486),
  o = n(594174),
  l = n(894257),
  u = n(981631);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let d = !1;

function _(e) {
  let t = o.default.getCurrentUser();
  if (null == t)
return;
  let n = s.Z.getChannelId(),
r = a.Z.getDMFromUserId(l.I);
  if (!t.hasUrgentMessages() || r === n)
return E({
  channelId: n
});
  !d && (d = !0, e());
}

function E(e) {
  let {
channelId: t
  } = e, n = o.default.getCurrentUser(), i = t === a.Z.getDMFromUserId(l.I);
  null != n && n.hasUrgentMessages() && i && (d = !1, r.mB(u.xW$.HAS_UNREAD_URGENT_MESSAGES, !1));
}
class f extends i.Z {
  constructor(e) {
super(), c(this, 'handleShowUrgentMessageAlert', void 0), c(this, 'actions', void 0), this.handleShowUrgentMessageAlert = e, this.actions = {
  POST_CONNECTION_OPEN: () => _(this.handleShowUrgentMessageAlert),
  MESSAGE_CREATE: () => _(this.handleShowUrgentMessageAlert),
  CHANNEL_SELECT: E
};
  }
}