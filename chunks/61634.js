n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var i = n(470079),
    l = n(392711),
    r = n.n(l),
    a = n(106351),
    s = n(442837),
    o = n(846519),
    c = n(941028),
    u = n(595519),
    d = n(317381),
    h = n(470883),
    p = n(750881),
    _ = n(554747),
    f = n(146085),
    g = n(427679),
    m = n(131704),
    C = n(199902),
    I = n(314897),
    E = n(592125),
    N = n(650774),
    x = n(430824),
    S = n(496675),
    v = n(699516),
    Z = n(944486),
    T = n(9156),
    L = n(979651),
    A = n(709054),
    b = n(510601),
    M = n(901621),
    R = n(981631);
let P = [];
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S.Z;
    return null != e && e.type !== a.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(R.S7T.VIEW_CHANNEL, e);
}
function y(e) {
    var t;
    let n = (0, s.e7)([T.ZP], () => T.ZP.isMuted(e)),
        l = (0, _.k5)(e);
    !(function (e, t) {
        let n = i.useRef(new Set()),
            l = i.useRef(new o.V7()),
            { shouldSubscribeToGuildMemberUpdates: a } = b.ZP.useExperiment({ location: 'useGuildMediaState' }, { autoTrackExposure: !1 }),
            u = (0, s.e7)([N.Z], () => {
                let t = N.Z.getMemberCount(e);
                return null == t || t > 1000;
            }),
            d = (0, s.cj)(
                [L.Z],
                () => {
                    if (!a || t || u) return P;
                    let n = Object.keys(L.Z.getVoiceStates(e));
                    return 0 === n.length ? P : n.slice(0, 50);
                },
                [e, t, u, a]
            );
        i.useEffect(() => {
            !(function (e, t, n, i, l) {
                let a = r().random(1000, 10000);
                i.start(a, () => {
                    let i = new Set(t),
                        r = t.filter((e) => !n.has(e)),
                        a = Array.from(n).filter((e) => !i.has(e));
                    (0, c.w5)(e, a), (0, c.ym)(e, r), l();
                });
            })(e, d, n.current, l.current, () => {
                n.current = new Set(d);
            });
        }, [e, d]),
            i.useEffect(
                () => () => {
                    l.current.stop(), (0, c.w5)(e, Array.from(n.current));
                },
                [e]
            );
    })(e, n);
    let a = (0, M.Z)(e),
        R = (0, p.aK)('use-guild-media-state'),
        y = (0, s.e7)([d.ZP, v.Z], () => {
            let t = d.ZP.getEmbeddedActivitiesForGuild(e);
            return R ? t.filter((e) => !(0, h.Wu)([...e.userIds], v.Z.getBlockedIDs())) : t;
        }),
        j = (0, u.NX)(null === (t = y[0]) || void 0 === t ? void 0 : t.channelId),
        {
            guildHasVoice: D,
            guildHasVideo: w,
            selectedVoiceChannelHasVideo: U
        } = (0, s.cj)(
            [Z.Z, L.Z, x.Z, S.Z, E.Z],
            () => {
                var t;
                let i = Z.Z.getVoiceChannelId(),
                    l = null === (t = x.Z.getGuild(e)) || void 0 === t ? void 0 : t.afkChannelId,
                    r = L.Z.getUsersWithVideo(e),
                    a = R ? (0, h.DX)(L.Z.getVoiceStates(e)) : L.Z.getVoiceStates(e),
                    s = (() => {
                        if (n) return !1;
                        for (let e in a) if (O(E.Z.getBasicChannel(a[e].channelId), null != l ? l : void 0, S.Z)) return !0;
                        return !1;
                    })();
                return {
                    guildHasVoice: s,
                    guildHasVideo: (() => {
                        if (n) return !1;
                        for (let e of r) if (O(E.Z.getBasicChannel(a[e].channelId), null != l ? l : void 0, S.Z)) return !0;
                        return !1;
                    })(),
                    selectedVoiceChannelHasVideo: null != i && L.Z.hasVideo(i)
                };
            },
            [R, e, n]
        ),
        G = I.default.getId();
    return (0, s.cj)(
        [Z.Z, E.Z, d.ZP, g.Z, C.Z, S.Z],
        () => {
            var t, i, r;
            let s = Z.Z.getVoiceChannelId(),
                o = (null === (t = E.Z.getChannel(s)) || void 0 === t ? void 0 : t.guild_id) === e,
                c = !1,
                u = !1,
                p = !1,
                _ = !1,
                I = !1,
                N = !1;
            if (!o && n)
                return {
                    audio: c,
                    video: _,
                    screenshare: I,
                    liveStage: p,
                    activeEvent: u,
                    activity: N,
                    gaming: a,
                    isCurrentUserConnected: !1
                };
            let x = A.default.keys(g.Z.getStageInstancesByGuild(e)).some((e) => {
                    let t = E.Z.getChannel(e);
                    return null != t && S.Z.can(f.gl, t);
                }),
                v = o && null !== (r = null === (i = E.Z.getChannel(s)) || void 0 === i ? void 0 : i.isGuildStageVoice()) && void 0 !== r && r,
                T = !!o && null != C.Z.getActiveStreamForUser(G, e),
                L = (R ? (0, h.aK)(C.Z.getAllApplicationStreams()) : C.Z.getAllApplicationStreams()).some((t) => t.guildId === e),
                b = o && U,
                M = (() => {
                    if (j) return y.length > 0;
                    for (let e of y) {
                        let t = E.Z.getChannel(e.channelId);
                        if (null != t && (0, m.vd)(t.type)) return !0;
                    }
                    return !1;
                })(),
                P = d.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
            return (
                o ? ((c = !0), (u = (null == l ? void 0 : l.channel_id) === s), (p = v), (_ = b), (I = T), (N = P)) : ((c = D), (u = null != l), (p = x), (_ = w), (I = L), (N = M)),
                {
                    audio: c,
                    video: _,
                    screenshare: I,
                    liveStage: p,
                    activeEvent: u,
                    activity: N,
                    gaming: a,
                    isCurrentUserConnected: o || v
                }
            );
        },
        [e, n, R, U, a, G, j, y, l, D, w]
    );
}
