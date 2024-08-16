let r;
n.d(t, {
    $H: function () {
        return eA;
    },
    $J: function () {
        return eF;
    },
    AV: function () {
        return ei;
    },
    Bz: function () {
        return eH;
    },
    C1: function () {
        return eX;
    },
    C9: function () {
        return eQ;
    },
    CE: function () {
        return F;
    },
    FE: function () {
        return ey;
    },
    Fs: function () {
        return e$;
    },
    GN: function () {
        return ea;
    },
    Gs: function () {
        return J;
    },
    Jg: function () {
        return ef;
    },
    K: function () {
        return ed;
    },
    KM: function () {
        return ev;
    },
    Kr: function () {
        return el;
    },
    Mi: function () {
        return en;
    },
    Nj: function () {
        return eS;
    },
    OG: function () {
        return eK;
    },
    Qe: function () {
        return P;
    },
    Rs: function () {
        return ee;
    },
    U3: function () {
        return Z;
    },
    UZ: function () {
        return eN;
    },
    V$: function () {
        return eW;
    },
    WP: function () {
        return Y;
    },
    XT: function () {
        return ez;
    },
    Xh: function () {
        return K;
    },
    Xv: function () {
        return eu;
    },
    ZZ: function () {
        return G;
    },
    _: function () {
        return et;
    },
    _D: function () {
        return x;
    },
    _j: function () {
        return eq;
    },
    b7: function () {
        return ek;
    },
    dl: function () {
        return eO;
    },
    f2: function () {
        return eD;
    },
    fY: function () {
        return eY;
    },
    gI: function () {
        return ej;
    },
    gO: function () {
        return q;
    },
    iQ: function () {
        return H;
    },
    il: function () {
        return eG;
    },
    j8: function () {
        return Q;
    },
    lQ: function () {
        return B;
    },
    mN: function () {
        return eI;
    },
    nP: function () {
        return eh;
    },
    o9: function () {
        return eC;
    },
    oo: function () {
        return eT;
    },
    ph: function () {
        return X;
    },
    rV: function () {
        return eJ;
    },
    t2: function () {
        return er;
    },
    uo: function () {
        return $;
    },
    vQ: function () {
        return ec;
    },
    vR: function () {
        return e_;
    },
    xn: function () {
        return eo;
    },
    yI: function () {
        return j;
    },
    ys: function () {
        return eE;
    },
    zE: function () {
        return es;
    },
    zK: function () {
        return eR;
    },
    zi: function () {
        return V;
    }
}),
    n(627341),
    n(47120),
    n(411104);
var i = n(164369),
    a = n(392711),
    s = n(266067),
    o = n(278074),
    l = n(754700),
    u = n(551910),
    c = n(887003),
    d = n(742635),
    _ = n(570140),
    E = n(230711),
    f = n(782568);
n(597688);
var h = n(231757);
n(706454);
var p = n(572004),
    m = n(70956),
    I = n(630388),
    T = n(823379),
    g = n(49012),
    S = n(358085),
    A = n(960048),
    N = n(617136),
    v = n(569984),
    O = n(497505),
    R = n(566078),
    C = n(312046),
    y = n(46140),
    D = n(981631),
    L = n(701488),
    b = n(689938);
let M = 'https://cdn.discordapp.com/assets/quests/';
function P(e) {
    try {
        return (0, o.EQ)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (n) {
        var t;
        return console.error("Unknown config version '".concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, "'"), n), !1;
    }
}
let U = (e) => e.application_id === L.Ev || e.platform === D.M7m.XBOX,
    w = (e) => e.platform === D.M7m.PS4 || e.platform === D.M7m.PS5;
function x(e, t) {
    if (null == e) return !1;
    let n = e.name.toLowerCase(),
        r = R.r.build(t.config).application.name.toLowerCase();
    return U(e) || w(e) ? n === r : null != e.application_id && k(e.application_id, t);
}
function G(e, t) {
    for (let [n, r] of e) if (x(t, r) && !V(r)) return r;
}
function k(e, t) {
    return null != R.r.build(t.config).application.ids.find((t) => t === e);
}
function B(e, t) {
    let n;
    for (let [r, i] of e)
        if (k(t, i) && !V(i)) {
            n = i;
            break;
        }
    return n;
}
function F(e, t) {
    return Array.from(e.values()).find((e) => k(t, e) && !V(e) && eS({ quest: e }));
}
function V(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function H(e) {
    if (!V(e)) return !1;
    let t = Date.now() - 2592000000,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t) && !0;
}
function Z(e) {
    var t;
    return {
        userId: e.user_id,
        questId: e.quest_id,
        enrolledAt: e.enrolled_at,
        completedAt: e.completed_at,
        claimedAt: e.claimed_at,
        claimedTier: null !== (t = e.claimed_tier) && void 0 !== t ? t : null,
        lastStreamHeartbeatAt: e.last_stream_heartbeat_at,
        streamProgressSeconds: e.stream_progress_seconds,
        dismissedQuestContent: e.dismissed_quest_content,
        progress: (function (e) {
            let t = {};
            for (let [r, i] of Object.entries(e)) {
                var n;
                t[r] = {
                    eventName: i.event_name,
                    value: i.value,
                    updatedAt: i.updated_at,
                    completedAt: i.completed_at,
                    heartbeat:
                        null == (n = i.heartbeat)
                            ? null
                            : {
                                  lastBeatAt: n.last_beat_at,
                                  expiresAt: n.expires_at
                              }
                };
            }
            return t;
        })(e.progress)
    };
}
function Y(e) {
    var t;
    return {
        id: e.id,
        preview: e.preview,
        config:
            ((t = e.config),
            (0, o.EQ)(t)
                .with({ config_version: 2 }, (e) => (0, C.Q)(e))
                .exhaustive()),
        userStatus: null == e.user_status ? null : Z(e.user_status),
        targetedContent: e.targeted_content
    };
}
function j(e) {
    var t;
    return {
        userId: e.user_id,
        questId: e.quest_id,
        code: e.code,
        platform: e.platform,
        claimedAt: e.claimed_at,
        tier: null !== (t = e.tier) && void 0 !== t ? t : null
    };
}
function W(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: (function (e) {
            if ((null == e ? void 0 : e.quest_rewards) == null) return null;
            let t = e.quest_rewards;
            switch (t.reward.tag) {
                case c.w.IN_GAME:
                    return { questRewards: { reward: { tag: t.reward.tag } } };
                case c.w.REWARD_CODE:
                    return {
                        questRewards: {
                            reward: {
                                tag: t.reward.tag,
                                rewardCode: j(t.reward.reward_code)
                            }
                        }
                    };
            }
        })(e.tenant_metadata)
    };
}
function K(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(W),
        errors: e.errors
    };
}
function z(e, t) {
    return e.startsWith('data') ? e : t;
}
let q = (e) => {
        var t, n;
        let r = eC({
                quest: e,
                idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
            }),
            i = R.r.build(e.config).defaultRewardAsset,
            a = null !== (n = null == r ? void 0 : r.asset) && void 0 !== n ? n : i;
        return {
            name: a,
            url: z(a, ''.concat(M).concat(e.id, '/').concat(a))
        };
    },
    Q = (e) => z(e.config.assets.hero, ''.concat(M).concat(e.id, '/').concat(e.config.assets.hero)),
    X = (e) => z(e.config.assets.questBarHero, ''.concat(M).concat(e.id, '/').concat(e.config.assets.questBarHero)),
    $ = (e, t) => z(e.config.assets.gameTile, ''.concat(M).concat(e.id, '/').concat(t, '/').concat(e.config.assets.gameTile)),
    J = (e, t) => z(e.config.assets.logotype, ''.concat(M).concat(e.id, '/').concat(t, '/').concat(e.config.assets.logotype)),
    ee = (e) => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function et(e, t) {
    for (let [n, r] of e) if (!V(r) && r.targetedContent.includes(t)) return r;
    return null;
}
function en(e, t) {
    return e.targetedContent.includes(t);
}
let er = (e) => {
    switch (e) {
        case O.y$.XBOX:
            return b.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
        case O.y$.PLAYSTATION:
            return b.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
        case O.y$.SWITCH:
            return b.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
        case O.y$.PC:
            return b.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
        case O.y$.CROSS_PLATFORM:
            return b.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM;
    }
};
function ei(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: a } = e;
    if ((null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return b.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
    if ((null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != a ? a.completedRatio : e;
        return t >= 0.75 ? b.Z.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= 0.45 && t <= 0.55 ? b.Z.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? b.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : b.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED;
    }
    return b.Z.Messages.QUESTS_TITLE.format({ questName: r.config.messages.questName });
}
function ea(e) {
    return Object.keys(y.a_).includes(O.jn[e]);
}
function es(e, t) {
    if (!ea(t)) return !1;
    let n = O.jn[t];
    return (0, I.yE)(e.dismissedQuestContent, y.a_[n]);
}
function eo(e) {
    return (0, o.EQ)(e)
        .with({ configVersion: 2 }, (e) => {
            let t = e.rewardsConfig.rewards.find((e) => e.type === c.w.COLLECTIBLE);
            return (null == t ? void 0 : t.type) === c.w.COLLECTIBLE ? t : null;
        })
        .exhaustive();
}
function el(e) {
    let t = eo(e);
    if (null == t || !('expiresAt' in t) || null == t.expiresAt) return null;
    let n = {
        days: 0,
        weeks: 0,
        months: 0,
        years: 0,
        ...(0, i.Z)({
            start: new Date(e.expiresAt),
            end: new Date(t.expiresAt)
        })
    };
    return (n.days >= 7 && ((n.weeks = Math.floor(n.days / 7)), (n.days = n.days % 7)), n.years > 0) ? b.Z.Messages.DURATION_YEARS.format({ years: n.years }) : n.months > 0 ? b.Z.Messages.DURATION_MONTHS.format({ months: n.months }) : n.weeks > 0 ? b.Z.Messages.DURATION_WEEKS.format({ weeks: n.weeks }) : b.Z.Messages.DURATION_DAYS.format({ days: n.days });
}
function eu(e) {
    return null != eo(e);
}
function ec(e) {
    return (0, o.EQ)(e)
        .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards.some((e) => e.type === c.w.IN_GAME))
        .exhaustive();
}
function ed(e) {
    return (0, o.EQ)(e)
        .with({ configVersion: 2 }, (e) => {
            var t;
            return null !== (t = e.rewardsConfig.rewards.find((e) => e.type === c.w.IN_GAME)) && void 0 !== t ? t : null;
        })
        .exhaustive();
}
function e_(e, t) {
    return e.targetedContent.includes(t);
}
function eE(e, t) {
    A.Z.captureException(e, {
        ...t,
        tags: {
            ...(null == t ? void 0 : t.tags),
            app_context: 'quests'
        }
    });
}
function ef(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = G(e, n);
        if (null != t) return t;
    }
    return null;
}
function eh(e) {
    return e.endsWith('.webm') || e.endsWith('.mp4') || e.startsWith('data:video');
}
let ep = /\.([a-zA-Z0-9]+)$/,
    em = /^data:video\/([a-zA-Z0-9]+)\;/;
function eI(e) {
    var t, n, r, i, a;
    switch (null !== (a = null === (n = ep.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== a ? a : null === (i = em.exec(e)) || void 0 === i ? void 0 : null === (r = i[1]) || void 0 === r ? void 0 : r.toLowerCase()) {
        case 'webm':
            return 'video/webm';
        case 'mp4':
            return 'video/mp4';
        default:
            throw Error('Unexpected file extension: '.concat(e.substring(0, 15)));
    }
}
function eT(e) {
    let {
        quest: { config: t }
    } = e;
    return (0, o.EQ)(t)
        .with({ configVersion: 2 }, (e) => {
            let t = e.rewardsConfig;
            return t.assignmentMethod === u.j.TIERED && t.rewards.length > 0 && t.rewards.every((e) => e.type === c.w.REWARD_CODE);
        })
        .exhaustive();
}
let eg = (e) =>
    (0, o.EQ)(e.taskConfig)
        .with({ type: d.L.FIRST_PARTY }, (e) => null != e.tasks[l.X.PLAY_ON_DESKTOP])
        .otherwise(() => !1);
function eS(e) {
    let { quest: t } = e;
    return (0, o.EQ)(t.config)
        .with({ configVersion: 2 }, (e) => eR(t, y.S7.PLAYTIME_TASK) || eg(e))
        .exhaustive();
}
function eA(e) {
    return null != e && eS({ quest: e });
}
function eN(e, t) {
    return R.r.build(t.config).application.id === e || ev(t);
}
function ev(e) {
    return eR(e, y.S7.FRACTIONS_QUEST);
}
function eO(e) {
    return !eR(e, y.S7.IN_HOUSE_CONSOLE_QUEST);
}
function eR(e, t) {
    return R.r.build(e.config).features.has(t);
}
function eC(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return (0, o.EQ)(r)
        .with({ type: c.w.REWARD_CODE }, (e) => e)
        .otherwise(() => null);
}
function ey(e, t) {
    let n = R.r.build(e.config).application.link;
    (0, g.q)({
        href: n,
        onConfirm: () => {
            (0, N._3)({
                questId: e.id,
                questContent: t.content,
                questContentCTA: t.ctaContent,
                questContentPosition: t.position
            }),
                (0, f.Z)(n);
        }
    });
}
let eD = (e, t) => {
        (0, N._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position
        }),
            (0, p.JG)(ee(e));
    },
    eL = (e, t) => (e > 0 ? (0, a.floor)(Math.min(t / e, 1), 4) : 0),
    eb = (e) => eH(e) || v.Z.isProgressingOnDesktop(e.id),
    eM = (e, t) => {
        var n, r, i, s;
        let o = null === (s = e.userStatus) || void 0 === s ? void 0 : null === (i = s.progress) || void 0 === i ? void 0 : null === (r = i[t.eventName]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt;
        if (null == o || !eb(e)) return 0;
        let l = Date.now() - new Date(o).valueOf();
        return (0, a.floor)(l / m.Z.Millis.SECOND, 2);
    },
    eP = (e, t) => {
        var n, r, i;
        let s = t.target,
            o = e.userStatus;
        if ((null == o ? void 0 : o.completedAt) != null) return s;
        let l = null == o ? void 0 : null === (n = o.progress) || void 0 === n ? void 0 : n[t.eventName],
            u = null !== (i = null !== (r = null == l ? void 0 : l.value) && void 0 !== r ? r : null == o ? void 0 : o.streamProgressSeconds) && void 0 !== i ? i : 0,
            c = eM(e, t),
            d = Math.min(0.99 * s, u + c);
        return Math.max((0, a.floor)(d, 2), 0);
    },
    eU = (e) => {
        var t, n;
        let { quest: r, taskType: i, includeTaskTypes: a = l.T.ALL } = e,
            s = r.config.taskConfig;
        if (s.type !== d.L.FIRST_PARTY) throw Error('Cannot retrieve task details for task config with type '.concat(s.type, '!'));
        let o = null != i ? i : null === (t = Object.values(s.tasks).filter((e) => a.has(e.eventName))[0]) || void 0 === t ? void 0 : t.eventName,
            u = null !== (n = s.tasks[o]) && void 0 !== n ? n : s.tasks[l.X.STREAM_ON_DESKTOP];
        if (null == u) throw Error('No task with type '.concat(i, ' found for quest ').concat(r.id, '!'));
        let c = u.target,
            _ = eP(r, u);
        return {
            progressSeconds: _,
            targetSeconds: c,
            targetMinutes: Math.round(c / m.Z.Seconds.MINUTE),
            percentComplete: eL(c, _),
            taskType: o
        };
    },
    ew = (e) => (l.T.ALL.has(e) ? e : null),
    ex = (e) => {
        var t, n;
        let { quest: r, includeTaskTypes: i = l.T.ALL } = e;
        for (let e of Object.values(null !== (n = null === (t = r.userStatus) || void 0 === t ? void 0 : t.progress) && void 0 !== n ? n : {})
            .sort((e, t) => {
                var n, r;
                let i = null == e ? void 0 : null === (n = e.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt,
                    a = null == t ? void 0 : null === (r = t.heartbeat) || void 0 === r ? void 0 : r.lastBeatAt;
                if (null != i && null != a) return new Date(i).valueOf() > new Date(a).valueOf() ? -1 : 1;
                if (null == i && null == a && (null == e ? void 0 : e.updatedAt) != null && (null == t ? void 0 : t.updatedAt) != null) return new Date(e.updatedAt).valueOf() > new Date(t.updatedAt).valueOf() ? -1 : 1;
                if (null != i && null == a) return -1;
                else return 1;
            })
            .filter(T.lm)) {
            let t = ew(e.eventName);
            if (null != t) {
                if (null == i ? void 0 : i.has(t))
                    return eU({
                        quest: r,
                        taskType: t,
                        includeTaskTypes: i
                    });
            }
        }
        return eU({
            quest: r,
            includeTaskTypes: i
        });
    },
    eG = (e, t) =>
        (0, o.EQ)(e)
            .with({ config: { configVersion: 2 } }, (e) =>
                e.config.taskConfig.type !== d.L.FIRST_PARTY
                    ? {
                          progressSeconds: 0,
                          targetSeconds: 1,
                          targetMinutes: 1,
                          percentComplete: 0,
                          taskType: l.X.STREAM_ON_DESKTOP
                      }
                    : eB(e)
                      ? ex({
                            quest: e,
                            includeTaskTypes: null != t ? t : eH(e) ? l.T.CONSOLE : l.T.ALL
                        })
                      : eA(e)
                        ? eU({
                              quest: e,
                              taskType: l.X.PLAY_ON_DESKTOP
                          })
                        : eU({
                              quest: e,
                              taskType: l.X.STREAM_ON_DESKTOP
                          })
            )
            .exhaustive();
function ek(e) {
    return (0, o.EQ)(e.config)
        .with({ configVersion: 2 }, (t) => {
            var n, r, i, a;
            if (t.taskConfig.type !== d.L.THIRD_PARTY || 0 === Object.keys(t.taskConfig.tasks).length) return null;
            let s = Object.keys(t.taskConfig.tasks)[0],
                o = t.taskConfig.tasks[s],
                l = null !== (a = null === (i = e.userStatus) || void 0 === i ? void 0 : null === (r = i.progress) || void 0 === r ? void 0 : null === (n = r[s]) || void 0 === n ? void 0 : n.value) && void 0 !== a ? a : 0,
                u = eL(o.target, l);
            return {
                title: o.title,
                description: o.description,
                target: o.target,
                progress: l,
                completedRatio: u
            };
        })
        .exhaustive();
}
let eB = ((r = [l.X.PLAY_ON_XBOX, l.X.PLAY_ON_PLAYSTATION]), (e) => r.some((t) => null != e.config.taskConfig.tasks[t])),
    eF = (e) =>
        (0, o.EQ)(e)
            .with({ config: { configVersion: 2 } }, eB)
            .exhaustive(),
    eV = (e, t) => {
        var n, r;
        let i = null == e ? void 0 : null === (r = e.progress[t]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
        if (null == i) return !1;
        let a = new Date(i).valueOf();
        return !isNaN(a) && a > Date.now();
    },
    eH = (e) =>
        (0, o.EQ)(e)
            .with({ config: { configVersion: 2 } }, (e) => null != e.userStatus && (eV(e.userStatus, l.X.PLAY_ON_XBOX) || eV(e.userStatus, l.X.PLAY_ON_PLAYSTATION)))
            .exhaustive();
function eZ() {
    E.Z.open(D.oAB.CONNECTIONS);
}
function eY(e, t) {
    let { platformType: n, quest: r, showInline: i } = e;
    (0, N._3)({
        questId: r.id,
        questContent: t.content,
        questContentCTA: t.ctaContent
    }),
        !i && eZ(),
        (0, h.Z)({
            platformType: n,
            location: t.ctaContent
        });
}
function ej(e, t) {
    let { quest: n, showInline: r } = e;
    (0, N._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent
    }),
        !r && eZ(),
        _.Z.dispatch({
            type: 'CONNECTIONS_GRID_MODAL_SHOW',
            onComplete: (e) => (0, h.Z)({ platformType: e }),
            includedPlatformTypes: new Set([D.ABu.XBOX, D.ABu.PLAYSTATION])
        });
}
function eW(e, t) {
    let { quest: n } = e;
    (0, N._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    }),
        eZ();
}
function eK() {
    return window.location.pathname.startsWith(D.Z5c.QUEST_HOME);
}
function ez() {
    var e;
    let t = (0, s.TH)();
    return (null === (e = (0, s.LX)(t.pathname, D.Z5c.QUEST_HOME)) || void 0 === e ? void 0 : e.isExact) === !0;
}
function eq(e) {
    return 'xbox' === e.connected_account_type ? D.ABu.XBOX : D.ABu.PLAYSTATION;
}
function eQ(e) {
    return eq(e) === D.ABu.XBOX ? b.Z.Messages.QUESTS_CONSOLE_EXPIRED_CREDENTIALS_XBOX : b.Z.Messages.QUESTS_CONSOLE_EXPIRED_CREDENTIALS_PSN;
}
function eX(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: s, selectedPlatformType: o, sharedQuestFields: l } = e,
        u = eT({ quest: a }),
        c = null != o ? o : null == s ? void 0 : s.platform,
        d = u
            ? eC({
                  quest: a,
                  idx: null !== (r = null == s ? void 0 : s.tier) && void 0 !== r ? r : null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedTier
              })
            : null,
        _ = null !== (i = null == d ? void 0 : null === (n = d.messages) || void 0 === n ? void 0 : n.redemptionInstructionsByPlatform) && void 0 !== i ? i : l.defaultRewardRedemptionInstructionsByPlatform;
    return null != c ? _[c] : void 0;
}
function e$(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: r, isInHouseQuest: i, hasQuestHomeExperiment: a } = e;
    if (i) return t ? b.Z.Messages.QUESTS_DISCLOSURE_IN_HOUSE_QUEST_BAR : a ? b.Z.Messages.QUESTS_DISCLOSURE_IN_HOUSE_QUEST_HOME : b.Z.Messages.QUESTS_DISCLOSURE_IN_HOUSE;
    return t
        ? b.Z.Messages.QUESTS_DISCLOSURE_PUBLISHER_TARGETING.format({ gamePublisher: i ? b.Z.Messages.DISCORD : n })
        : a
          ? b.Z.Messages.QUESTS_DISCLOSURE_PUBLISHER_PROMOTING_QUEST_HOME.format({
                gamePublisher: n,
                gameTitle: r
            })
          : b.Z.Messages.QUESTS_DISCLOSURE_PUBLISHER_PROMOTING.format({
                gamePublisher: n,
                gameTitle: r
            });
}
function eJ(e) {
    var t;
    let n = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        r = ek(e);
    return (0, S.isWeb)() && !n && !eF(e) && null == r;
}
