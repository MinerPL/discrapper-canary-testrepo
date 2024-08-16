n(47120);
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(570140),
    r = n(317770),
    l = n(314897),
    o = n(592125),
    c = n(797258),
    d = n(590415),
    u = n(981631);
let _ = 'STAGE_INVITED_TO_SPEAK_MODAL';
class E extends r.Z {
    _initialize() {
        s.Z.subscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    _terminate() {
        s.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    constructor(...e) {
        var t, s, r;
        super(...e),
            (t = this),
            (s = 'handleVoiceStateUpdates'),
            (r = (e) => {
                var t;
                let { voiceStates: s } = e,
                    r = l.default.getId(),
                    E = null === (t = c.Z.getSession()) || void 0 === t ? void 0 : t.sessionId,
                    h = s.find((e) => e.userId === r && e.sessionId === E);
                if (null == h) return;
                let m = h.channelId;
                if (null == m) {
                    (0, a.hasModalOpen)(_) && (0, a.closeModal)(_);
                    return;
                }
                let I = o.Z.getChannel(m);
                if (!(null == I ? void 0 : I.isGuildStageVoice())) return;
                let g = (0, d.gf)(h) === d.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                if (null != I && g) {
                    if ((0, a.hasModalOpen)(_)) return;
                    (0, a.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e('13878').then(n.bind(n, 113140));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    channel: I
                                });
                        },
                        {
                            modalKey: _,
                            onCloseRequest: u.VqG
                        }
                    );
                }
            }),
            s in t
                ? Object.defineProperty(t, s, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[s] = r);
    }
}
t.Z = new E();
