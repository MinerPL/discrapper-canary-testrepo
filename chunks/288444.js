n(47120);
var r = n(846519),
    i = n(904245),
    a = n(287734),
    s = n(147913),
    o = n(317381),
    l = n(592125),
    u = n(979651),
    c = n(938475),
    d = n(689938);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let E = 180000;
function f() {
    let e = u.Z.getCurrentClientVoiceChannelId(null);
    if (null == e) return !1;
    let t = l.Z.getChannel(e);
    return !(null == t || !t.isPrivate() || t.recipients.length > 1 || c.ZP.countVoiceStatesForChannel(e) > 1) && null == o.ZP.getSelfEmbeddedActivityForChannel(e) && !0;
}
function h() {
    if (!f()) return;
    let e = u.Z.getCurrentClientVoiceChannelId(null);
    if (null != e) i.Z.sendBotMessage(e, d.Z.Messages.BOT_CALL_IDLE_DISCONNECT_2.format({ number: 3 })), a.default.selectVoiceChannel(null);
}
class p extends s.Z {
    constructor(...e) {
        super(...e),
            _(this, 'idleTimeout', new r.V7()),
            _(this, 'handleConnectionClosed', () => {
                this.idleTimeout.stop();
            }),
            _(this, 'handleEmbeddedActivityDisconnect', () => {
                if (!!f()) this.idleTimeout.start(E, h, !0);
            }),
            _(this, 'handleVoiceStateUpdates', () => {
                if (!f()) {
                    this.idleTimeout.stop();
                    return;
                }
                this.idleTimeout.start(E, h, !1);
            }),
            _(this, 'actions', {
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                CONNECTION_CLOSED: this.handleConnectionClosed,
                EMBEDDED_ACTIVITY_CLOSE: this.handleEmbeddedActivityDisconnect
            });
    }
}
t.Z = new p();
