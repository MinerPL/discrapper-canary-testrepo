n(47120);
var r = n(147913),
    i = n(751571),
    a = n(88751),
    s = n(590415),
    o = n(189786),
    l = n(314897),
    u = n(592125),
    c = n(131951),
    d = n(19780),
    _ = n(876506),
    E = n(981631),
    f = n(761274);
let h = null;
function p() {
    i.Z.requestPermission(f.Eu.AUDIO).then((e) => {
        if (!!e) (0, _.Z)(!0);
    }),
        c.Z.getMode() === E.pM4.PUSH_TO_TALK && i.Z.requestPermission(f.Eu.INPUT_MONITORING);
}
class m extends r.Z {
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        null == t && (h = null);
    }
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            var t, n, r, i;
            let { userId: c, channelId: _ } = e;
            if (null != _ && l.default.getId() === c && null != d.Z.getRTCConnectionId() && h !== _) {
                if (((t = c), (n = _), (null === (r = u.Z.getChannel(n)) || void 0 === r ? !void 0 : !r.isListenModeCapable()) || a.ZP.isSpeaker(t, n))) {
                    (h = _), p();
                    return;
                }
                (i = new o.Z(e)), (0, s.gf)(i) === s.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && ((h = _), p());
            }
        });
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new m();
