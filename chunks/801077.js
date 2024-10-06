n(47120), n(653041), n(724458);
var i,
    l,
    r,
    a,
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    u = n(570140),
    d = n(782769),
    h = n(527805),
    p = n(841784),
    f = n(503438),
    _ = n(802856),
    m = n(420660),
    g = n(728345),
    C = n(812206),
    I = n(750881),
    E = n(710845),
    N = n(38618),
    S = n(656063),
    x = n(761282),
    v = n(814443),
    T = n(789407),
    Z = n(974543),
    A = n(250889),
    b = n(199902),
    R = n(592125),
    M = n(480294),
    L = n(831506),
    P = n(731290),
    O = n(430824),
    y = n(496675),
    D = n(158776),
    j = n(699516),
    w = n(594174),
    U = n(979651),
    G = n(823379),
    k = n(981631);
let B = !1,
    V = !1,
    H = [],
    F = [],
    W = {},
    z = {},
    Y = new Set(),
    K = new Set();
function q() {
    let e = j.Z.getFriendIDs();
    return M.Z.hasConsented(k.pjP.PERSONALIZATION) ? new Set([...v.Z.getUserAffinitiesUserIds(), ...e]) : new Set(e);
}
function Q(e) {
    return D.Z.findActivity(e, (e) => e.type !== k.IIU.CUSTOM_STATUS);
}
function X(e) {
    return (
        null == W[e] &&
            (W = {
                ...W,
                [e]: new A.Z({ name: e })
            }),
        W[e]
    );
}
function J(e) {
    return (
        null == z[e] &&
            (z = {
                ...z,
                [e]: new Z.Z({ url: e })
            }),
        z[e]
    );
}
function $(e) {
    !K.has(e) && Y.add(e);
}
function ee(e) {
    if ((0, f.Z)(e)) return T.r9;
    let t = null != e.application_id ? C.Z.getApplication(e.application_id) : null;
    return null != t ? t : (0, _.Z)(e) ? X(e.name) : (0, m.Z)(e) && null != e.url ? J(e.url) : (null != e.application_id && $(e.application_id), t);
}
function et(e) {
    let t = U.Z.getVoiceStateForUser(e);
    return (null == t ? void 0 : t.channelId) != null && y.Z.canWithPartialContext(k.Plq.VIEW_CHANNEL, { channelId: t.channelId }) ? t.channelId : null;
}
function en(e) {
    return j.Z.isFriend(e.id);
}
function ei(e, t, n) {
    var i, l, r, a, s, c;
    let u;
    let f = w.default.getCurrentUser(),
        _ = null !== (i = null == f ? void 0 : f.nsfwAllowed) && void 0 !== i && i,
        m = t.map((e) => e.id),
        g = t.filter((t) => e.has(t.id)),
        I = !1,
        N = [],
        v = new Set(),
        M = !1,
        j = [];
    for (let e of t) {
        let n = b.Z.getAnyStreamForUser(e.id),
            i = R.Z.getChannel(null == n ? void 0 : n.channelId);
        if ((null == i ? void 0 : i.isNSFW()) && (!_ || !P.Z.didAgree(null == i ? void 0 : i.getGuildId()))) continue;
        let s = Q(e.id);
        if (
            (null != n &&
                j.push({
                    stream: n,
                    streamUser: e,
                    activity: s
                }),
            null == s)
        )
            continue;
        let c = (0, S.Z)(s);
        if (null == c) continue;
        M = c === T.XB;
        let u = (function (e) {
                let t = C.Z.getApplication(e);
                return null != t ? t : 'string' != typeof e ? (new E.Z('NowPlayingViewStore').error('Unknown type for applicationId: '.concat(typeof e, ', value: ').concat(e), { tags: { source: 'ACTIVITIES' } }), null) : e === T.XB ? T.r9 : e.startsWith(A.H) ? X(e.slice(A.H.length)) : e.startsWith(Z._) ? J(e.slice(Z._.length)) : ($(e), null);
            })(c),
            m = null === (l = s.timestamps) || void 0 === l ? void 0 : l.start;
        if ((0, p.Z)(s)) {
            let t = (0, d.a)();
            if (
                (0, h.ZP)({
                    activity: s,
                    userId: e.id,
                    application: u,
                    channelId: null === (r = U.Z.getVoiceStateForUser(e.id)) || void 0 === r ? void 0 : r.channelId,
                    currentUser: f,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: R.Z,
                    VoiceStateStore: U.Z,
                    PermissionStore: y.Z,
                    GuildStore: O.Z
                }) !== h.Fw.CAN_JOIN
            )
                continue;
        } else if (null == m) continue;
        if (!x.JE(s) || null == u || v.has(u.id)) continue;
        let g = null != s ? ee(s) : null;
        (null == g || g.id !== u.id) && (s = null);
        let D = [];
        (D =
            null != s && null != s.party && null != s.party.id
                ? Array.from(null !== (a = L.Z.getParty(s.party.id)) && void 0 !== a ? a : []).reduce((e, t) => {
                      let n = w.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : t.filter((e) => {
                      let t = Q(e.id),
                          n = null != t ? ee(t) : null;
                      return null != n && n.id === u.id;
                  })),
            (D = o().orderBy(D, [en], ['desc'])).length !== t.length && (I = !0),
            v.add(u.id),
            N.push({
                game: u,
                activity: s,
                activityUser: e,
                startedPlayingTime: m,
                playingMembers: D
            });
    }
    let k = 1 === g.length,
        B = [],
        V = new Set(),
        H = new Set();
    for (let e of t) {
        let n = et(e.id),
            i = R.Z.getChannel(n),
            l = null != i ? i.getGuildId() : null,
            r = O.Z.getGuild(l);
        if ((H.has(l) && V.has(n)) || null == i || null == r || i.id === r.afkChannelId) null == i && ((u = null), (k = !0));
        else {
            let e = U.Z.getVoiceStatesForChannel(i.id),
                a = o()(e)
                    .map((e) => {
                        let { userId: t } = e;
                        return w.default.getUser(t);
                    })
                    .filter(G.lm)
                    .orderBy([en], ['desc'])
                    .value();
            a.filter((e) => !m.includes(e.id)).forEach((e) => t.push(e)),
                k ? !H.has(l) && (u = null) : ((u = r), (k = !0)),
                H.add(l),
                V.add(n),
                B.push({
                    channel: i,
                    guild: r,
                    members: a,
                    voiceStates: e
                });
        }
    }
    return {
        id: n,
        voiceChannels: B,
        isSpotifyActivity: M,
        priorityMembers: g.map((e) => ({
            user: e,
            status: D.Z.getStatus(e.id)
        })),
        partiedMembers: t,
        showPlayingMembers: I,
        guildContext: u,
        currentActivities: ((s = N),
        (c = (e) => {
            var t;
            return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0;
        }),
        o()(s).orderBy([c, (e) => e.game.name], ['desc', 'asc'])).value(),
        applicationStreams: j
    };
}
function el() {
    return B && N.Z.isConnected();
}
let er = o().throttle(() => {
    !(function () {
        var e;
        if (!el()) return;
        Y.clear(),
            (F = (H = (function (e) {
                let t = (e) => e.voiceChannels.length > 0;
                return e
                    .values()
                    .orderBy(
                        [
                            (e) =>
                                !!(t(e) && (0, I.NH)('now-playing-view-store')) &&
                                e.voiceChannels.some((e) => {
                                    let { voiceStates: t } = e;
                                    return Object.values(t).some((e) => !1 === e.discoverable);
                                }),
                            (e) => e.partiedMembers.length > 1,
                            (e) => e.applicationStreams.length > 0,
                            t,
                            (e) => e.currentActivities.length > 0,
                            (e) => e.isSpotifyActivity,
                            (e) => e.priorityMembers.map((e) => e.user.username.toLowerCase()).join(' ')
                        ],
                        ['asc', 'desc', 'desc', 'desc', 'desc', 'asc', 'asc']
                    )
                    .value();
            })(
                (function (e) {
                    let t = q(),
                        n = ei.bind(null, t);
                    return o()(e).mapValues(n);
                })(
                    ((e = Array.from(q()).reduce((e, t) => {
                        let n = w.default.getUser(t);
                        return null != n && !n.bot && e.push(n), e;
                    }, [])),
                    o()(e).groupBy((e) => {
                        var t;
                        let n = et(e.id),
                            i = Q(e.id);
                        return null != n ? ''.concat('channel-', '-').concat(n) : (null == i ? void 0 : null === (t = i.party) || void 0 === t ? void 0 : t.id) != null ? ''.concat('party-', '-').concat(i.party.id) : ''.concat('user-', '-').concat(e.id);
                    }))
                )
            ).filter((e) => {
                let t = (0, I.NH)('now-playing-view-store'),
                    n = t && e.partiedMembers.some((e) => j.Z.isBlocked(e.id)),
                    i =
                        t &&
                        e.voiceChannels.length > 0 &&
                        e.voiceChannels.every((e) => {
                            let { voiceStates: t } = e;
                            return Object.values(t).every((e) => !1 === e.discoverable);
                        });
                return (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) && !n && !i;
            })).map((e) => ({
                type: k.GOo.USER,
                party: e
            }))),
            !(function () {
                if (Y.size > 0) {
                    let e = Array.from(Y);
                    g.ZP.fetchApplications(e), e.forEach((e) => K.add(e)), Y.clear();
                }
            })(),
            (V = !0);
    })(),
        eo.emitChange();
}, 1000);
function ea() {
    return !!el() && (er(), !1);
}
class es extends (i = c.ZP.Store) {
    initialize() {
        this.syncWith([w.default, C.Z, D.Z, L.Z, U.Z, b.Z, j.Z, M.Z, v.Z], ea), this.waitFor(N.Z, O.Z, C.Z, w.default, v.Z);
    }
    get currentActivityParties() {
        return H;
    }
    get nowPlayingCards() {
        return F;
    }
    get isMounted() {
        return B;
    }
    get loaded() {
        return V;
    }
}
(a = 'NowPlayingViewStore'),
    (r = 'displayName') in (l = es)
        ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = a);
let eo = new es(u.Z, {
    LOGOUT: function () {
        (B = !1), (H = []), (F = []), Y.clear();
    },
    NOW_PLAYING_MOUNTED: function () {
        (B = !0), er();
    },
    NOW_PLAYING_UNMOUNTED: function () {
        B = !1;
    }
});
t.Z = eo;
