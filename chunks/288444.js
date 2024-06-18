"use strict";
n(47120);
var i = n(846519),
  r = n(904245),
  s = n(287734),
  o = n(147913),
  a = n(317381),
  l = n(592125),
  u = n(885110),
  _ = n(979651),
  d = n(938475),
  c = n(689938);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let I = 18e4;

function T() {
  let e = _.Z.getCurrentClientVoiceChannelId(null);
  if (null == e) return !1;
  let t = l.Z.getChannel(e);
  return !(null == t || !t.isPrivate() || t.recipients.length > 1 || d.ZP.countVoiceStatesForChannel(e) > 1) && null == a.ZP.getSelfEmbeddedActivityForChannel(e) && null == u.Z.getBroadcast() && !0
}

function h() {
  if (!T()) return;
  let e = _.Z.getCurrentClientVoiceChannelId(null);
  if (null != e) r.Z.sendBotMessage(e, c.Z.Messages.BOT_CALL_IDLE_DISCONNECT_2.format({
    number: 3
  })), s.default.selectVoiceChannel(null)
}
class S extends o.Z {
  constructor(...e) {
    super(...e), E(this, "idleTimeout", new i.V7), E(this, "handleConnectionClosed", () => {
      this.idleTimeout.stop()
    }), E(this, "handleEmbeddedActivityDisconnect", () => {
      if (!!T()) this.idleTimeout.start(I, h, !0)
    }), E(this, "handleVoiceStateUpdates", () => {
      if (!T()) {
        this.idleTimeout.stop();
        return
      }
      this.idleTimeout.start(I, h, !1)
    }), E(this, "actions", {
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
      CONNECTION_CLOSED: this.handleConnectionClosed,
      EMBEDDED_ACTIVITY_DISCONNECT: this.handleEmbeddedActivityDisconnect
    })
  }
}
t.Z = new S