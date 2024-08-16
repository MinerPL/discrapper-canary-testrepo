n(47120);
var i = n(243814),
    a = n(846027),
    s = n(131951),
    r = n(13140),
    l = n(996106),
    o = n(452426),
    c = n(186901),
    d = n(981631),
    u = n(65154);
function _(e) {
    let t = e.application.id;
    if (null == t) throw new l.Z({ errorCode: d.lTL.INVALID_COMMAND }, 'No application.');
    return t;
}
t.Z = {
    [d.Etm.SET_VOICE_SETTINGS_2]: {
        scope: c.lH,
        validation: (e) =>
            (0, o.Z)(e)
                .required()
                .keys({
                    input_mode: (0, o.Z)(e).keys({
                        type: e.string().valid(Object.keys(d.pM4)),
                        shortcut: e.string().required()
                    }),
                    self_mute: e.boolean(),
                    self_deaf: e.boolean()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { input_mode: n, self_mute: i, self_deaf: l }
                } = e,
                o = _(t);
            null != n && a.Z.setMode(n.type, { shortcut: (0, r.Kd)(n.shortcut) }, o), null != i && i !== s.Z.isSelfMute(o) && a.Z.toggleSelfMute({ context: o }), null != l && l !== s.Z.isSelfDeaf(o) && a.Z.toggleSelfDeaf({ context: o });
        }
    },
    [d.Etm.SET_USER_VOICE_SETTINGS_2]: {
        scope: c.lH,
        validation: (e) =>
            (0, o.Z)(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    volume: e.number().min(0).max(200),
                    mute: e.boolean()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, mute: i, volume: r }
                } = e,
                l = _(t);
            null != i && i !== s.Z.isLocalMute(n, l) && a.Z.toggleLocalMute(n, l), null != r && a.Z.setLocalVolume(n, r, l);
        }
    },
    [d.Etm.PUSH_TO_TALK]: {
        scope: {
            [c.Gp.ALL]: [i.x.RPC, i.x.RPC_VOICE_WRITE]
        },
        validation: (e) => (0, o.Z)(e).required().keys({ active: e.boolean() }),
        handler(e) {
            let {
                args: { active: t }
            } = e;
            if (s.Z.getMode(u.Yn.DEFAULT) === d.pM4.PUSH_TO_TALK) s.Z.getMediaEngine().eachConnection((e) => e.setForceAudioInput(t), u.Yn.DEFAULT);
        }
    }
};
