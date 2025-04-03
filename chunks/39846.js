var i = r(47120);
var a = r(147913),
    s = r(751571),
    o = r(88751),
    l = r(590415),
    u = r(189786),
    c = r(314897),
    d = r(592125),
    f = r(131951),
    _ = r(19780),
    h = r(876506),
    p = r(981631),
    m = r(761274);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let E = null;
function v() {
    s.Z.requestPermission(m.Eu.AUDIO).then((e) => {
        if (!!e) (0, h.Z)(!0);
    }),
        f.Z.getMode() === p.pM4.PUSH_TO_TALK && s.Z.requestPermission(m.Eu.INPUT_MONITORING);
}
function I(e, n) {
    var r;
    return (null === (r = d.Z.getChannel(n)) || void 0 === r ? !void 0 : !r.isListenModeCapable()) || o.ZP.isSpeaker(e, n);
}
function T(e) {
    return (0, l.gf)(e) === l.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}
class b extends a.Z {
    handleVoiceChannelSelect(e) {
        let { channelId: n } = e;
        null == n && (E = null);
    }
    handleVoiceStateUpdates(e) {
        let { voiceStates: n } = e;
        n.forEach((e) => {
            let { userId: n, channelId: r } = e;
            if (null != r && c.default.getId() === n && null != _.Z.getRTCConnectionId() && E !== r) {
                if (I(n, r)) {
                    (E = r), v();
                    return;
                }
                T(new u.Z(e)) && ((E = r), v());
            }
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'actions', {
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
            });
    }
}
n.Z = new b();
