var r = n(735250),
    i = n(470079),
    a = n(392711),
    s = n.n(a),
    o = n(792986),
    l = n(442837),
    u = n(481060),
    c = n(317381),
    d = n(966302),
    _ = n(378364),
    E = n(197344),
    f = n(474873),
    h = n(292959),
    p = n(944486),
    I = n(246946),
    m = n(340895),
    T = n(557177),
    S = n(918559),
    g = n(871465);
let A = {
        transform: 'scale(0.7)',
        opacity: 0
    },
    N = {
        transform: 'scale(1)',
        opacity: 1
    };
t.Z = i.memo(function () {
    let e = (0, l.Wu)([m.Z, p.Z, c.ZP], () =>
            m.Z.getIncomingCalls().filter((e) => {
                let { channel: t } = e,
                    n = c.ZP.getConnectedActivityChannelId() === t.id && p.Z.getVoiceChannelId() !== t.id && c.ZP.getActivityPanelMode() === S.Ez.PANEL;
                return p.Z.getChannelId() !== t.id || n;
            })
        ),
        t = (0, l.e7)([m.Z], () => m.Z.hasIncomingCalls()),
        n = (0, l.e7)([h.Z], () => h.Z.isSoundDisabled('call_ringing')),
        a = E.Z.useIsRingtoneEligible(),
        O = E.Z.useIsRingtoneDisabled(),
        R = (0, l.e7)([I.Z], () => I.Z.disableSounds),
        v = (0, l.e7)([f.Z], () => f.Z.getSoundpack()),
        C = i.useRef(!1),
        y = (0, o.Z)(() => {
            let e = 'call_ringing';
            return a && !O ? (0, T.tu)(_.Z.ringtone, e) : v === g.YC.CLASSIC ? (0, T.tu)(500 !== s().random(1, 1000) ? 'call_ringing' : s().sample(['call_ringing_beat', 'call_ringing_snow_halation']), e) : (0, T.uk)('call_ringing', v);
        }, [v, O, a]);
    return (
        i.useEffect(
            () => () => {
                y.stop();
            },
            [y]
        ),
        i.useEffect(() => {
            if (R || n) {
                C.current && (y.stop(), (C.current = !1));
                return;
            }
            t && !C.current ? (y.loop(), (C.current = !0)) : !t && C.current && (y.stop(), (C.current = !1));
        }, [n, R, t, y]),
        (0, u.useTransition)(e, {
            keys: (e) => {
                var t;
                return null === (t = e.channel) || void 0 === t ? void 0 : t.id;
            },
            enter: {
                from: A,
                to: N
            },
            leave: A,
            config: {
                mass: 1,
                tension: 500,
                friction: 18,
                clamp: !0
            }
        })((e, t) =>
            (0, r.jsx)(d.Z, {
                ...t,
                animatedStyle: e
            })
        )
    );
});
