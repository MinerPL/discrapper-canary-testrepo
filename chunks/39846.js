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
    f = n(876506),
    _ = n(981631),
    h = n(761274);
let p = null;
function m() {
    i.Z.requestPermission(h.Eu.AUDIO).then((e) => {
        if (!!e) (0, f.Z)(!0);
    }),
        c.Z.getMode() === _.pM4.PUSH_TO_TALK && i.Z.requestPermission(h.Eu.INPUT_MONITORING);
}
class g extends r.Z {
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        null == t && (p = null);
    }
    handleVoiceStateUpdates(e) {
        let { voiceStates: t } = e;
        t.forEach((e) => {
            var t, n, r, i;
            let { userId: c, channelId: f } = e;
            if (null != f && l.default.getId() === c && null != d.Z.getRTCConnectionId() && p !== f) {
                if (((t = c), (n = f), (null === (r = u.Z.getChannel(n)) || void 0 === r ? !void 0 : !r.isListenModeCapable()) || a.ZP.isSpeaker(t, n))) {
                    (p = f), m();
                    return;
                }
                (i = new o.Z(e)), (0, s.gf)(i) === s.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && ((p = f), m());
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
t.Z = new g();
