n.d(t, {
    Z: function () {
        return R;
    }
}), n(47120);
var i = n(470079), l = n(392711), r = n.n(l), a = n(106351), s = n(442837), o = n(846519), c = n(941028), u = n(867176), d = n(317381), h = n(554747), p = n(146085), _ = n(427679), f = n(131704), m = n(199902), g = n(314897), C = n(592125), I = n(650774), E = n(430824), N = n(496675), x = n(944486), S = n(9156), Z = n(979651), v = n(709054), T = n(510601), L = n(901621), A = n(981631);
let b = [];
function M(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N.Z;
    return null != e && e.type !== a.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(A.S7T.VIEW_CHANNEL, e);
}
function R(e) {
    var t;
    let n = (0, s.e7)([S.ZP], () => S.ZP.isMuted(e)), l = (0, h.k5)(e);
    !function (e, t) {
        let n = i.useRef(new Set()), l = i.useRef(new o.V7()), {shouldSubscribeToGuildMemberUpdates: a} = T.ZP.useExperiment({ location: 'useGuildMediaState' }, { autoTrackExposure: !1 }), u = (0, s.e7)([I.Z], () => {
                let t = I.Z.getMemberCount(e);
                return null == t || t > 1000;
            }), d = (0, s.cj)([Z.Z], () => {
                if (!a || t || u)
                    return b;
                let n = Object.keys(Z.Z.getVoiceStates(e));
                return 0 === n.length ? b : n.slice(0, 50);
            }, [
                e,
                t,
                u,
                a
            ]);
        i.useEffect(() => {
            !function (e, t, n, i, l) {
                let a = r().random(1000, 10000);
                i.start(a, () => {
                    let i = new Set(t), r = t.filter(e => !n.has(e)), a = Array.from(n).filter(e => !i.has(e));
                    (0, c.w5)(e, a), (0, c.ym)(e, r), l();
                });
            }(e, d, n.current, l.current, () => {
                n.current = new Set(d);
            });
        }, [
            e,
            d
        ]), i.useEffect(() => () => {
            l.current.stop(), (0, c.w5)(e, Array.from(n.current));
        }, [e]);
    }(e, n);
    let a = (0, L.Z)(e), A = (0, s.e7)([d.ZP], () => d.ZP.getEmbeddedActivitiesForGuild(e)), R = (0, u.NX)(null === (t = A[0]) || void 0 === t ? void 0 : t.channelId, !1, 'GuildMediaState'), {
            guildHasVoice: y,
            guildHasVideo: O,
            selectedVoiceChannelHasVideo: P
        } = (0, s.cj)([
            Z.Z,
            C.Z,
            N.Z,
            E.Z,
            x.Z
        ], () => {
            var t;
            let i = x.Z.getVoiceChannelId(), l = null === (t = E.Z.getGuild(e)) || void 0 === t ? void 0 : t.afkChannelId, r = Z.Z.getUsersWithVideo(e), a = Z.Z.getVoiceStates(e), s = (() => {
                    if (n)
                        return !1;
                    for (let e in a)
                        if (M(C.Z.getBasicChannel(a[e].channelId), null != l ? l : void 0, N.Z))
                            return !0;
                    return !1;
                })();
            return {
                guildHasVoice: s,
                guildHasVideo: (() => {
                    if (n)
                        return !1;
                    for (let e of r)
                        if (M(C.Z.getBasicChannel(a[e].channelId), null != l ? l : void 0, N.Z))
                            return !0;
                    return !1;
                })(),
                selectedVoiceChannelHasVideo: null != i && Z.Z.hasVideo(i)
            };
        }, [
            e,
            n
        ]), j = g.default.getId();
    return (0, s.cj)([
        x.Z,
        m.Z,
        _.Z,
        C.Z,
        N.Z,
        d.ZP
    ], () => {
        var t, i, r;
        let s = x.Z.getVoiceChannelId(), o = (null === (t = C.Z.getChannel(s)) || void 0 === t ? void 0 : t.guild_id) === e, c = !1, u = !1, h = !1, g = !1, I = !1, E = !1;
        if (!o && n)
            return {
                audio: c,
                video: g,
                screenshare: I,
                liveStage: h,
                activeEvent: u,
                activity: E,
                gaming: a,
                isCurrentUserConnected: !1
            };
        let S = v.default.keys(_.Z.getStageInstancesByGuild(e)).some(e => {
                let t = C.Z.getChannel(e);
                return null != t && N.Z.can(p.gl, t);
            }), Z = o && null !== (r = null === (i = C.Z.getChannel(s)) || void 0 === i ? void 0 : i.isGuildStageVoice()) && void 0 !== r && r, T = !!o && null != m.Z.getActiveStreamForUser(j, e), L = m.Z.getAllApplicationStreams().some(t => t.guildId === e), b = o && P, M = (() => {
                if (R)
                    return A.length > 0;
                for (let e of A) {
                    let t = C.Z.getChannel(e.channelId);
                    if (null != t && (0, f.vd)(t.type))
                        return !0;
                }
                return !1;
            })(), D = d.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
        return o ? (c = !0, u = (null == l ? void 0 : l.channel_id) === s, h = Z, g = b, I = T, E = D) : (c = y, u = null != l, h = S, g = O, I = L, E = M), {
            audio: c,
            video: g,
            screenshare: I,
            liveStage: h,
            activeEvent: u,
            activity: E,
            gaming: a,
            isCurrentUserConnected: o || Z
        };
    }, [
        j,
        A,
        a,
        l,
        e,
        R,
        n,
        O,
        y,
        P
    ]);
}
