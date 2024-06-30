n(47120);
var i = n(243814), s = n(846027), a = n(131951), r = n(594174), l = n(996106), o = n(452426), c = n(852926), d = n(186901), u = n(981631);
t.Z = {
    [u.Etm.SET_USER_VOICE_SETTINGS]: {
        scope: {
            [d.Gp.ANY]: [
                i.x.RPC,
                i.x.RPC_VOICE_WRITE
            ]
        },
        validation: e => (0, o.Z)(e).required().keys({
            user_id: e.string().required(),
            pan: (0, o.Z)(e).keys({
                left: e.number().min(0).max(1).required(),
                right: e.number().min(0).max(1).required()
            }),
            volume: e.number().min(0).max(200),
            mute: e.boolean()
        }),
        handler(e) {
            let {
                    args: {
                        user_id: t,
                        pan: n,
                        volume: i,
                        mute: o
                    }
                } = e, c = r.default.getCurrentUser();
            if (null == r.default.getUser(t) || (null == c ? void 0 : c.id) === t)
                throw new l.Z({ errorCode: u.lTL.INVALID_USER }, 'Invalid user id: '.concat(t));
            if (null != n && s.Z.setLocalPan(t, n.left, n.right), null != i && s.Z.setLocalVolume(t, i), null != o) {
                let e = a.Z.isLocalMute(t);
                (e && !o || !e && o) && s.Z.toggleLocalMute(t);
            }
            return {
                user_id: t,
                pan: a.Z.getLocalPan(t),
                volume: a.Z.getLocalVolume(t),
                mute: a.Z.isLocalMute(t)
            };
        }
    },
    [u.Etm.GET_VOICE_SETTINGS]: {
        scope: {
            [d.Gp.ANY]: [
                i.x.RPC,
                i.x.RPC_VOICE_READ
            ]
        },
        handler: () => (0, c._X)()
    },
    [u.Etm.SET_VOICE_SETTINGS]: {
        scope: {
            [d.Gp.ANY]: [
                i.x.RPC,
                i.x.RPC_VOICE_WRITE
            ]
        },
        validation: e => (0, o.Z)(e).required().keys({
            input: (0, o.Z)(e).keys({
                device_id: e.string().valid(Object.keys(a.Z.getInputDevices())),
                volume: e.number().min(0).max(100)
            }),
            output: (0, o.Z)(e).keys({
                device_id: e.string().valid(Object.keys(a.Z.getOutputDevices())),
                volume: e.number().min(0).max(200)
            }),
            mode: (0, o.Z)(e).keys({
                type: e.string().valid(Object.keys(u.pM4)),
                auto_threshold: e.boolean(),
                threshold: e.number().min(-100).max(0),
                shortcut: e.array().items((0, o.Z)(e).keys({
                    type: e.number().min(0).max(3).required(),
                    code: e.number().required(),
                    name: e.string()
                })),
                delay: e.number().min(0).max(2000)
            }),
            automatic_gain_control: e.boolean(),
            echo_cancellation: e.boolean(),
            noise_suppression: e.boolean(),
            qos: e.boolean(),
            silence_warning: e.boolean(),
            deaf: e.boolean(),
            mute: e.boolean()
        }),
        handler(e) {
            let {
                args: {
                    input: t,
                    output: n,
                    mode: i,
                    automatic_gain_control: r,
                    echo_cancellation: l,
                    noise_suppression: o,
                    qos: d,
                    silence_warning: u,
                    deaf: _,
                    mute: E
                }
            } = e;
            if (t && (null != t.device_id && s.Z.setInputDevice(t.device_id), null != t.volume && s.Z.setInputVolume(t.volume)), n && (null != n.device_id && s.Z.setOutputDevice(n.device_id), null != n.volume && s.Z.setOutputVolume(n.volume)), i) {
                let e = a.Z.getMode(), t = a.Z.getModeOptions();
                null != i.type && (e = i.type), null != i.auto_threshold && (t.autoThreshold = i.auto_threshold), null != i.threshold && (t.threshold = i.threshold), null != i.shortcut && (t.shortcut = i.shortcut.map(e => [
                    e.type,
                    e.code
                ])), null != i.delay && (t.delay = i.delay), s.Z.setMode(e, t);
            }
            if (null != r && s.Z.setAutomaticGainControl(r), null != l && s.Z.setEchoCancellation(l), null != o && s.Z.setNoiseSuppression(o), null != d && s.Z.setQoS(d), null != u && s.Z.setSilenceWarning(u), null != _) {
                let e = a.Z.isSelfDeaf();
                (e && !_ || !e && _) && s.Z.toggleSelfDeaf();
            }
            if (null != E) {
                let e = a.Z.isSelfMute();
                (e && !E || !e && E) && s.Z.toggleSelfMute();
            }
            return (0, c._X)();
        }
    }
};
