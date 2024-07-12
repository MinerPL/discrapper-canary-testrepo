n(47120);
var r = n(846519),
  i = n(904245),
  a = n(287734),
  o = n(147913),
  s = n(317381),
  l = n(592125),
  u = n(885110),
  c = n(979651),
  d = n(938475),
  _ = n(689938);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let f = 180000;

function h() {
  let e = c.Z.getCurrentClientVoiceChannelId(null);
  if (null == e)
return !1;
  let t = l.Z.getChannel(e);
  return !(null == t || !t.isPrivate() || t.recipients.length > 1 || d.ZP.countVoiceStatesForChannel(e) > 1) && null == s.ZP.getSelfEmbeddedActivityForChannel(e) && null == u.Z.getBroadcast() && !0;
}

function p() {
  if (!h())
return;
  let e = c.Z.getCurrentClientVoiceChannelId(null);
  if (null != e)
i.Z.sendBotMessage(e, _.Z.Messages.BOT_CALL_IDLE_DISCONNECT_2.format({
  number: 3
})), a.default.selectVoiceChannel(null);
}
class m extends o.Z {
  constructor(...e) {
super(...e), E(this, 'idleTimeout', new r.V7()), E(this, 'handleConnectionClosed', () => {
  this.idleTimeout.stop();
}), E(this, 'handleEmbeddedActivityDisconnect', () => {
  if (!!h())
    this.idleTimeout.start(f, p, !0);
}), E(this, 'handleVoiceStateUpdates', () => {
  if (!h()) {
    this.idleTimeout.stop();
    return;
  }
  this.idleTimeout.start(f, p, !1);
}), E(this, 'actions', {
  VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
  CONNECTION_CLOSED: this.handleConnectionClosed,
  EMBEDDED_ACTIVITY_DISCONNECT: this.handleEmbeddedActivityDisconnect
});
  }
}
t.Z = new m();