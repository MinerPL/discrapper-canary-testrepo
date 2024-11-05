n.d(t, {
    $1: function () {
        return ed;
    },
    CE: function () {
        return eg;
    },
    DE: function () {
        return eh;
    },
    Es: function () {
        return el;
    },
    FP: function () {
        return es;
    },
    K6: function () {
        return eu;
    },
    NZ: function () {
        return ep;
    },
    QO: function () {
        return er;
    },
    V1: function () {
        return ei;
    },
    bA: function () {
        return en;
    },
    fd: function () {
        return eo;
    },
    ni: function () {
        return em;
    },
    ob: function () {
        return ec;
    },
    pV: function () {
        return r;
    }
}),
    n(47120),
    n(390547),
    n(653041),
    n(627341),
    n(757143);
var r,
    i,
    a = n(192379),
    s = n(392711),
    o = n(278074),
    l = n(442837),
    u = n(481060),
    c = n(925549),
    d = n(317381),
    f = n(841784),
    _ = n(367907),
    h = n(835473),
    p = n(12498),
    m = n(557135),
    g = n(471445),
    E = n(66999),
    v = n(15274),
    I = n(924301),
    S = n(230900),
    T = n(703656),
    b = n(881824),
    y = n(922482),
    A = n(565799),
    N = n(501655),
    C = n(344185),
    R = n(814443),
    O = n(199902),
    D = n(592125),
    L = n(480294),
    x = n(984933),
    w = n(271383),
    M = n(496675),
    P = n(158776),
    k = n(699516),
    U = n(594174),
    G = n(979651),
    B = n(938475),
    Z = n(626135),
    F = n(823379),
    V = n(5192),
    j = n(51144),
    H = n(912787),
    Y = n(126134),
    W = n(981631),
    K = n(765305),
    z = n(388032);
let q = 7,
    Q = 6,
    X = 5,
    J = 4,
    $ = 3,
    ee = 2,
    et = 1;
function en(e, t) {
    let n = B.ZP.getVoiceStatesForChannelAlt(e, t).map((e) => {
            let { user: t } = e;
            return t.id;
        }),
        r = L.Z.hasConsented(W.pjP.PERSONALIZATION),
        i = R.Z.getUserAffinities();
    return (
        r && i.length > 0
            ? (0, s.orderBy)(
                  n,
                  [
                      (e) => {
                          var t, n;
                          return null !== (n = null === (t = R.Z.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0;
                      }
                  ],
                  ['desc']
              )
            : n
    )
        .map((e) => U.default.getUser(e))
        .filter(F.lm);
}
function er(e, t) {
    return (function (e, t, n, r) {
        let i;
        let s = es(e),
            o = a.useMemo(() => s.map((e) => U.default.getUser(e)).filter(F.lm), [s]),
            l = o.slice(0, 6),
            u = Math.max(0, o.length - l.length);
        if (null != r && r.length > 0) {
            let e = V.ZP.getName(t, n, U.default.getUser(r[0]));
            i =
                1 === r.length
                    ? z.intl.formatToPlainString(z.t['0QO34e'], { username: e })
                    : z.intl.formatToPlainString(z.t['3XWX39'], {
                          username: e,
                          count: r.length - 1
                      });
        } else if (l.length > 0) {
            let e = V.ZP.getName(t, n, U.default.getUser(l[0].id));
            i =
                1 === l.length
                    ? z.intl.formatToPlainString(z.t.hUmrz8, { username: e })
                    : z.intl.formatToPlainString(z.t.Mmzqe3, {
                          username: e,
                          count: l.length - 1
                      });
        }
        return {
            totalUsers: o.length,
            usersToShow: l,
            othersCount: u,
            usersText: i
        };
    })(
        (0, l.e7)([B.ZP], () => B.ZP.getVoiceStatesForChannelAlt(e, t), [e, t]).map((e) => {
            let { user: t } = e;
            return t.id;
        }),
        t,
        e
    );
}
((i = r || (r = {})).CARD = 'card'), (i.JOIN_BUTTON = 'join_button');
function ei(e) {
    let t = e.id,
        [n, r] = a.useState([]),
        [i, u] = a.useState(0),
        c = (0, l.Wu)(
            [x.ZP, C.Z],
            () => {
                let e = x.ZP.getChannels(t)[x.Zb].map((e) => {
                    let { channel: t } = e;
                    return t.id;
                });
                return [...e, ...Object.values(C.Z.getThreadsForGuild(t)).flatMap((e) => Object.keys(e))];
            },
            [t]
        ),
        _ = (0, l.e7)(
            [I.ZP, D.Z],
            () =>
                I.ZP.getGuildScheduledEventsForGuild(t)
                    .filter((e) => (0, I.xt)(e))
                    .map((e) => {
                        var t;
                        return {
                            category: Y.L.EVENT,
                            event: e,
                            isStage: !!(null === (t = D.Z.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.isGuildStageVoice())
                        };
                    }),
            [t],
            s.isEqual
        ),
        h = _.map((e) => {
            let { event: t } = e;
            return t.channel_id;
        }),
        p = (0, l.e7)([k.Z], () => k.Z.getRelationships()),
        m = a.useMemo(() => Object.keys(p).filter((e) => p[e] === W.OGo.BLOCKED), [p]),
        g = (0, l.e7)([B.ZP], () => B.ZP.getVoiceStates(t), [t]),
        E = a.useMemo(() => {
            let t = Object.keys(g);
            return 0 === t.length
                ? []
                : t.filter((t) => {
                      let n = g[t].filter(F.lm);
                      return (
                          !(0 === n.length || h.includes(t)) &&
                          null ==
                              n.find((e) => {
                                  let { user: t } = e;
                                  return m.includes(t.id);
                              }) &&
                          t !== e.afkChannelId &&
                          c.includes(t)
                      );
                  });
        }, [g, h, c, m, e.afkChannelId]),
        v = (0, l.e7)(
            [d.ZP, G.Z, O.Z, P.Z, D.Z],
            () =>
                E.map((e) => {
                    var t;
                    let n = O.Z.getAllApplicationStreamsForChannel(e).map((e) => e.ownerId),
                        r = g[e].filter(F.lm),
                        i = d.ZP.getEmbeddedActivitiesForChannel(e),
                        a = Y.L.HANGOUT,
                        s = [],
                        o = r.map((e) => {
                            let { user: t } = e;
                            return t.id;
                        }),
                        l = G.Z.hasVideo(e),
                        u = [],
                        c = [];
                    for (let e of (i.length > 0 && (a = Y.L.EMBEDDED_ACTIVITY), r)) {
                        let t = P.Z.findActivity(e.user.id, ea(e));
                        null != t && !(0, f.Z)(t) && ((a = Y.L.GAMING), s.push(t), u.push(e.user.id)), e.voiceState.selfVideo && c.push(e.user.id);
                    }
                    if (a === Y.L.EMBEDDED_ACTIVITY)
                        return {
                            category: a,
                            embeddedActivities: i,
                            streamersCount: n.length,
                            voiceUsersCount: r.length
                        };
                    if (a === Y.L.GAMING)
                        return {
                            category: a,
                            channelId: e,
                            games: s,
                            voiceStates: r,
                            streamersCount: n.length,
                            gameUserIds: u
                        };
                    return {
                        category: a,
                        channelId: e,
                        userIds: o,
                        streamUserIds: n,
                        channelHasVideo: l,
                        videoUserIds: c,
                        isStage: !!(null === (t = D.Z.getChannel(e)) || void 0 === t ? void 0 : t.isGuildStageVoice())
                    };
                }),
            [g, E],
            s.isEqual
        ),
        S = (0, l.e7)([L.Z], () => L.Z.hasConsented(W.pjP.PERSONALIZATION)),
        T = (0, l.e7)([R.Z], () => R.Z.getUserAffinities()),
        b = S && T.length > 0,
        y = [...v, ..._];
    return (
        i !== y.length &&
            y.length > 0 &&
            (r(
                (function (e) {
                    let t = [...e],
                        n = t[0].category,
                        r = t.findIndex((e) => e.category === Y.L.EVENT),
                        i = t.findIndex((e) => e.category === Y.L.HANGOUT && e.isStage),
                        a = t.findIndex((e) => e.category === Y.L.EMBEDDED_ACTIVITY),
                        s = t.findIndex((e) => e.category === Y.L.HANGOUT && e.streamUserIds.length > 0),
                        o = t.findIndex((e) => e.category === Y.L.HANGOUT && e.videoUserIds.length > 0),
                        l = t.findIndex((e) => e.category === Y.L.GAMING);
                    if ((n === Y.L.EVENT && 0 === r) || (n === Y.L.HANGOUT && 0 === i) || (n === Y.L.EMBEDDED_ACTIVITY && 0 === a) || (n === Y.L.HANGOUT && 0 === s && -1 === i) || (n === Y.L.HANGOUT && 0 === o && -1 === i && -1 === s) || (n === Y.L.GAMING && 0 === l) || (-1 === r && -1 === i && -1 === a && -1 === s && -1 === o && -1 === l)) return e;
                    if (-1 !== r) {
                        let e = t.splice(r, 1);
                        return t.splice(0, 0, e[0]), t;
                    }
                    if (-1 !== i) {
                        let e = t.splice(i, 1);
                        return t.splice(0, 0, e[0]), t;
                    }
                    if (-1 !== a) {
                        let e = t.splice(a, 1);
                        return t.splice(0, 0, e[0]), t;
                    }
                    if (-1 !== s) {
                        let e = t.splice(s, 1);
                        return t.splice(0, 0, e[0]), t;
                    }
                    if (-1 !== o) {
                        let e = t.splice(o, 1);
                        return t.splice(0, 0, e[0]), t;
                    }
                    if (-1 !== l) {
                        let e = t.splice(l, 1);
                        return t.splice(0, 0, e[0]), t;
                    }
                    return e;
                })(
                    (function (e, t) {
                        return (0, s.orderBy)(
                            e,
                            [
                                (e) =>
                                    (function (e, t) {
                                        let n = (e) => (e > 0 ? Math.log(e + 1) : 0),
                                            r = (e) =>
                                                e
                                                    .map((e) => {
                                                        var t, n;
                                                        return null !== (n = null === (t = R.Z.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0;
                                                    })
                                                    .map(n),
                                            i = (0, o.EQ)(e)
                                                .with({ category: Y.L.EVENT }, () => q)
                                                .with({ category: Y.L.GAMING }, () => Q)
                                                .with({ category: Y.L.EMBEDDED_ACTIVITY }, () => X)
                                                .with({ streamUserIds: o.P.when((e) => e.length > 0) }, () => J)
                                                .with({ channelHasVideo: !0 }, () => $)
                                                .with({ category: Y.L.HANGOUT }, () => ee)
                                                .otherwise(() => et),
                                            a = 0;
                                        if (t) {
                                            if (('userIds' in e && (a += Math.max(...r(e.userIds))), 'embeddedActivities' in e)) {
                                                let t = new Set();
                                                e.embeddedActivities.forEach((e) => {
                                                    t = new Set([...t, ...e.userIds]);
                                                }),
                                                    (a += Math.max(...r([...t])));
                                            }
                                            'voiceStates' in e &&
                                                (a += Math.max(
                                                    ...r(
                                                        e.voiceStates.filter(F.lm).map((e) => {
                                                            let { user: t } = e;
                                                            return t.id;
                                                        })
                                                    )
                                                ));
                                        } else {
                                            if (('userIds' in e && (a += e.userIds.length), 'embeddedActivities' in e)) {
                                                let t = new Set();
                                                e.embeddedActivities.forEach((e) => {
                                                    t = new Set([t, ...e.userIds]);
                                                }),
                                                    (a += t.size);
                                            }
                                            'voiceStates' in e &&
                                                (a += e.voiceStates.filter(F.lm).map((e) => {
                                                    let { user: t } = e;
                                                    return t.id;
                                                }).length);
                                        }
                                        return (a = a > 0 ? a * i : 0.00001 * i);
                                    })(e, t)
                            ],
                            ['desc']
                        );
                    })(y, b)
                ).slice(0, 3)
            ),
            u(y.length)),
        n
    );
}
let ea = (e) => (e) => [W.IIU.PLAYING, W.IIU.WATCHING].includes(e.type) && (null != e.assets || null != e.state || null != e.details || null != e.party) && !1;
function es(e) {
    return (0, l.Wu)(
        [L.Z, R.Z],
        () => {
            let t = L.Z.hasConsented(W.pjP.PERSONALIZATION),
                n = R.Z.getUserAffinities();
            return t && n.length > 0
                ? (0, s.orderBy)(
                      e,
                      [
                          (e) => {
                              var t, n;
                              return null !== (n = null === (t = R.Z.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0;
                          }
                      ],
                      ['desc']
                  )
                : e;
        },
        [e]
    );
}
function eo(e) {
    return (0, l.Wu)(
        [L.Z, R.Z],
        () => {
            let t = L.Z.hasConsented(W.pjP.PERSONALIZATION),
                n = R.Z.getUserAffinities();
            return t && n.length > 0
                ? (0, s.orderBy)(
                      e,
                      [
                          (e) => {
                              var t, n;
                              return null !== (n = null === (t = R.Z.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0;
                          }
                      ],
                      ['desc']
                  )
                : e;
        },
        [e]
    );
}
function el(e) {
    let t = (0, l.e7)([A.Z], () => (null == e ? null : A.Z.getParticipantCount(e.id, N.pV.AUDIENCE))),
        n = (0, l.Wu)([A.Z], () =>
            null == e
                ? []
                : A.Z.getMutableParticipants(e.id, N.pV.SPEAKER)
                      .filter((e) => e.type === N.Ui.VOICE)
                      .map((e) => {
                          let { user: t } = e;
                          return t;
                      })
        ),
        r = (0, l.Wu)([B.ZP], () =>
            null == e
                ? []
                : B.ZP.getVoiceStatesForChannel(e)
                      .filter(F.lm)
                      .map((e) => {
                          let { user: t } = e;
                          return t;
                      })
        );
    if ((null == e ? void 0 : e.type) === W.d4z.GUILD_STAGE_VOICE) {
        let e = n.slice(0, 3),
            r = Math.max(0, n.length - e.length);
        return {
            usersToShow: n,
            othersCount: r,
            audienceCount: null != t ? t : 0
        };
    }
    if ((null == e ? void 0 : e.type) === W.d4z.GUILD_VOICE) {
        let e = r.slice(0, 7),
            t = Math.max(0, r.length - e.length);
        return {
            usersToShow: e,
            othersCount: t,
            audienceCount: null
        };
    }
    return {
        usersToShow: [],
        othersCount: 0,
        audienceCount: null
    };
}
function eu(e, t) {
    var n, r;
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    let a =
            ((n = e),
            (r = t),
            n
                .map((e) => {
                    var t;
                    let n = U.default.getUser(e);
                    if (null == n) return null;
                    let i = w.ZP.getNick(r, n.id);
                    return null !== (t = null != i ? i : j.ZP.getGlobalName(n)) && void 0 !== t ? t : j.ZP.getUserTag(n);
                })
                .filter((e) => null != e)),
        s = a.length;
    if (s > 0) {
        if (1 === s || i) return z.intl.formatToPlainString(z.t['J+Wpsr'], { first: a[0] });
        {
            let e = 2 === s ? z.t.gwRP0d : 3 === s ? z.t.QDB5en : z.t.VYfueX;
            return z.intl.formatToPlainString(e, {
                first: a[0],
                second: null == a ? void 0 : a[1],
                third: null == a ? void 0 : a[2],
                count: s - 3
            });
        }
    }
}
function ec(e, t, n, r) {
    var i, a;
    let s = {},
        o = null !== (a = (0, H.i)(e)) && void 0 !== a ? a : '';
    (s.source = r), (s.card_type = e.category), (s.card_position = n), (s.channel_id = o), (s.channel_type = null === (i = D.Z.getChannel(o)) || void 0 === i ? void 0 : i.type);
    let l = en(o, t);
    (s.card_affinity_users_count = Math.min(l.length, 6)),
        (s.card_total_users_count = l.length),
        (s.card_affinity_user_ids = l.slice(0, 6).map((e) => e.id)),
        (s.card_max_affinity_user_id = l.length > 0 ? l[0].id : '0'),
        (s.card_user_affinity_scores = l.slice(0, 6).map((e) => {
            var t, n;
            return null !== (n = null === (t = R.Z.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0;
        })),
        Z.default.track(W.rMx.GUILD_TOOLTIP_CARD_CLICKED, {
            ...s,
            ...(0, _.hH)(t)
        });
}
function ed(e, t, n) {
    let { category: r } = e;
    switch (r) {
        case Y.L.HANGOUT:
        case Y.L.GAMING:
            return () => {
                let { channelId: r } = e,
                    i = D.Z.getChannel(r),
                    a = M.Z.can(W.Plq.CONNECT, i);
                ec(e, t, n, 'card'), a ? (0, T.XU)(t, r) : ((0, T.XU)(t), c.Z.channelListScrollTo(t, r));
            };
        case Y.L.EMBEDDED_ACTIVITY:
            return () => {
                let { channelId: r } = e.embeddedActivities[0],
                    i = D.Z.getChannel(r),
                    a = M.Z.can(W.Plq.CONNECT, i);
                ec(e, t, n, 'card'), a ? (0, T.XU)(t, r) : ((0, T.XU)(t), c.Z.channelListScrollTo(t, r));
            };
        case Y.L.EVENT:
            return () => {
                ec(e, t, n, 'card'), (0, v.bO)({ eventId: e.event.id });
            };
        default:
            return null;
    }
}
let ef = async (e, t) => {
        let n = await (0, y.AC)(e, t);
        (0, b.R5)(n, null, !1);
    },
    e_ = (e, t) => {
        m.Z.handleVoiceConnect({
            channel: t,
            connected: G.Z.isInChannel(t.id),
            needSubscriptionToAccess: (0, E.$)(t.id).needSubscriptionToAccess,
            locked: !1
        }),
            (0, T.XU)(e, t.id);
    };
function eh(e, t) {
    let { category: n } = e;
    switch (n) {
        case Y.L.HANGOUT:
        case Y.L.GAMING:
            return () => {
                let { channelId: n } = e,
                    r = D.Z.getChannel(n);
                if (null != r && !!M.Z.can(W.Plq.CONNECT, r)) r.isGuildStageVoice() ? ef(t, n) : r.isGuildVoice() && e_(t, r);
            };
        case Y.L.EMBEDDED_ACTIVITY:
            return () => {
                let { channelId: n } = e.embeddedActivities[0],
                    r = D.Z.getChannel(n);
                if (null != r && r.type === W.d4z.GUILD_VOICE && !!M.Z.can(W.Plq.CONNECT, r)) e_(t, r);
            };
        case Y.L.EVENT:
            return () => {
                let { event: t } = e,
                    { channel_id: n, guild_id: r, entity_type: i } = t,
                    a = D.Z.getChannel(n);
                if (null == n || null == a || !M.Z.can(W.Plq.CONNECT, a)) {
                    (0, v.bO)({ eventId: t.id });
                    return;
                }
                i === K.WX.STAGE_INSTANCE ? ef(r, n) : i === K.WX.VOICE && e_(r, a);
            };
        default:
            return null;
    }
}
function ep(e) {
    let t, n;
    let r = (0, S.cS)(e),
        i = null == r ? void 0 : r.replace(/[<#>]/g, ''),
        a = null != i ? D.Z.getChannel(i) : D.Z.getChannel(e.channel_id),
        s = M.Z.can(W.Plq.VIEW_CHANNEL, a);
    if (null != a && s) (t = (0, g.Th)(a.type)), (n = a.name);
    else {
        if (null == r) return null;
        (t = u.LocationIcon), (n = r);
    }
    return {
        IconComponent: t,
        locationName: n
    };
}
function em(e) {
    let t = e.category === Y.L.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].applicationId : null;
    return (0, h.q)(t);
}
function eg(e) {
    let t = (0, l.e7)([p.Z], () => p.Z.getChannelStatus(e)),
        n = null != t && t.trim().length > 0;
    return {
        channelStatus: t,
        hasChannelStatus: n
    };
}
