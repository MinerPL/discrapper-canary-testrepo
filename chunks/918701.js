n.d(t, {
    $H: function () {
        return e_;
    },
    $J: function () {
        return eM;
    },
    AV: function () {
        return $;
    },
    Bz: function () {
        return eU;
    },
    C1: function () {
        return eV;
    },
    C9: function () {
        return eF;
    },
    CE: function () {
        return x;
    },
    FE: function () {
        return em;
    },
    Fs: function () {
        return eH;
    },
    GN: function () {
        return J;
    },
    Jg: function () {
        return el;
    },
    K: function () {
        return ea;
    },
    KM: function () {
        return ef;
    },
    Kr: function () {
        return en;
    },
    Mi: function () {
        return Q;
    },
    Nj: function () {
        return ed;
    },
    OG: function () {
        return ek;
    },
    PM: function () {
        return z;
    },
    Qe: function () {
        return y;
    },
    Rs: function () {
        return K;
    },
    U3: function () {
        return F;
    },
    UZ: function () {
        return eE;
    },
    V$: function () {
        return eG;
    },
    WP: function () {
        return V;
    },
    Xh: function () {
        return W;
    },
    Xv: function () {
        return er;
    },
    ZZ: function () {
        return P;
    },
    _: function () {
        return q;
    },
    _D: function () {
        return M;
    },
    _j: function () {
        return eB;
    },
    b7: function () {
        return eL;
    },
    dl: function () {
        return eh;
    },
    f2: function () {
        return eT;
    },
    fY: function () {
        return ew;
    },
    gI: function () {
        return ex;
    },
    hQ: function () {
        return Z;
    },
    iQ: function () {
        return k;
    },
    il: function () {
        return eC;
    },
    lQ: function () {
        return w;
    },
    o9: function () {
        return eI;
    },
    oo: function () {
        return eu;
    },
    q6: function () {
        return B;
    },
    t2: function () {
        return X;
    },
    vQ: function () {
        return ei;
    },
    vR: function () {
        return es;
    },
    xn: function () {
        return et;
    },
    yH: function () {
        return eZ;
    },
    yI: function () {
        return Y;
    },
    ys: function () {
        return eo;
    },
    zE: function () {
        return ee;
    },
    zK: function () {
        return ep;
    },
    zi: function () {
        return G;
    }
}),
    n(627341),
    n(47120),
    n(411104),
    n(571269),
    n(298267),
    n(653041);
var r = n(991998),
    i = n(392711),
    a = n(278074),
    s = n(754700),
    o = n(551910),
    l = n(887003),
    u = n(742635),
    c = n(570140),
    d = n(230711),
    _ = n(782568);
n(597688);
var E = n(231757);
n(706454);
var f = n(572004),
    h = n(70956),
    p = n(630388),
    I = n(823379),
    m = n(49012),
    T = n(960048),
    S = n(617136),
    g = n(569984),
    A = n(497505),
    N = n(566078),
    O = n(312046),
    R = n(46140),
    v = n(981631),
    C = n(701488),
    L = n(689938);
function y(e) {
    try {
        return (0, a.EQ)(e.config)
            .with({ config_version: 2 }, () => !0)
            .exhaustive();
    } catch (n) {
        var t;
        return console.error("Unknown config version '".concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, "'"), n), !1;
    }
}
let D = (e) => e.application_id === C.Ev || e.platform === v.M7m.XBOX,
    b = (e) => e.platform === v.M7m.PS4 || e.platform === v.M7m.PS5;
function M(e, t) {
    if (null == e) return !1;
    let n = e.name.toLowerCase(),
        r = N.r.build(t.config).application.name.toLowerCase();
    return D(e) || b(e) ? n === r : null != e.application_id && U(e.application_id, t);
}
function P(e, t) {
    for (let [n, r] of e) if (M(t, r) && !G(r)) return r;
}
function U(e, t) {
    return null != N.r.build(t.config).application.ids.find((t) => t === e);
}
function w(e, t) {
    let n;
    for (let [r, i] of e)
        if (U(t, i) && !G(i)) {
            n = i;
            break;
        }
    return n;
}
function x(e, t) {
    return Array.from(e.values()).find((e) => U(t, e) && !G(e) && ed({ quest: e }));
}
function G(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function k(e) {
    if (!G(e)) return !1;
    let t = Date.now() - 2592000000,
        n = new Date(e.config.expiresAt).valueOf();
    return null != e.config.expiresAt && !(n <= t) && !0;
}
function B(e) {
    return (0, a.EQ)(e)
        .with({ config_version: 2 }, (e) => (0, O.Q)(e))
        .exhaustive();
}
function F(e) {
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
function V(e) {
    return {
        id: e.id,
        preview: e.preview,
        config: B(e.config),
        userStatus: null == e.user_status ? null : F(e.user_status),
        targetedContent: e.targeted_content
    };
}
function H(e) {
    return {
        skuId: e.sku_id,
        type: e.type,
        name: e.name,
        nameWithArticle: e.name_with_article,
        asset: e.asset,
        assetVideo: e.asset_video
    };
}
function Z(e) {
    var t;
    return {
        id: e.id,
        config: {
            id: (t = e.config).id,
            startsAt: t.starts_at,
            expiresAt: t.expires_at,
            messages: {
                questName: t.messages.quest_name,
                gamePublisher: t.messages.game_publisher,
                gameTitle: t.messages.game_title
            },
            assets: {
                hero: t.assets.hero,
                heroVideo: t.assets.hero_video,
                questBarHero: t.assets.quest_bar_hero,
                questBarHeroVideo: t.assets.quest_bar_hero_video,
                gameTile: t.assets.game_tile,
                logotype: t.assets.logotype
            },
            colors: {
                primary: t.colors.primary,
                secondary: t.colors.secondary
            },
            rewards: t.rewards.map(H)
        },
        userStatus: null == e.user_status ? null : F(e.user_status)
    };
}
function Y(e) {
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
function j(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: (function (e) {
            if ((null == e ? void 0 : e.quest_rewards) == null) return null;
            let t = e.quest_rewards;
            switch (t.reward.tag) {
                case l.w.IN_GAME:
                    return { questRewards: { reward: { tag: t.reward.tag } } };
                case l.w.REWARD_CODE:
                    return {
                        questRewards: {
                            reward: {
                                tag: t.reward.tag,
                                rewardCode: Y(t.reward.reward_code)
                            }
                        }
                    };
            }
        })(e.tenant_metadata)
    };
}
function W(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(j),
        errors: e.errors
    };
}
let K = (e) => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function z(e, t, n) {
    let r = t.get(n);
    if (null == r) return;
    let i = e.get(r.id);
    if (null != i && !G(i)) return i;
}
function q(e, t) {
    for (let [n, r] of e) if (!G(r) && r.targetedContent.includes(t)) return r;
    return null;
}
function Q(e, t) {
    return e.targetedContent.includes(t);
}
let X = (e) => {
    switch (e) {
        case A.y$.XBOX:
            return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
        case A.y$.PLAYSTATION:
            return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
        case A.y$.SWITCH:
            return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
        case A.y$.PC:
            return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
        case A.y$.CROSS_PLATFORM:
            return L.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM;
    }
};
function $(e) {
    var t, n;
    let { quest: r, taskDetails: i, thirdPartyTaskDetails: a } = e;
    if ((null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null) return L.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
    if ((null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
        let { percentComplete: e } = i,
            t = null != a ? a.completedRatio : e;
        return t >= 0.75 ? L.Z.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : t >= 0.45 && t <= 0.55 ? L.Z.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : t > 0 ? L.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : L.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED;
    }
    return L.Z.Messages.QUESTS_TITLE.format({ questName: r.config.messages.questName });
}
function J(e) {
    return Object.keys(R.a_).includes(A.jn[e]);
}
function ee(e, t) {
    if (!J(t)) return !1;
    let n = A.jn[t];
    return (0, p.yE)(e.dismissedQuestContent, R.a_[n]);
}
function et(e) {
    return (0, a.EQ)(e)
        .with({ configVersion: 2 }, (e) => {
            let t = e.rewardsConfig.rewards.find((e) => e.type === l.w.COLLECTIBLE);
            return (null == t ? void 0 : t.type) === l.w.COLLECTIBLE ? t : null;
        })
        .exhaustive();
}
function en(e) {
    let t = et(e);
    if (null == t || !('expiresAt' in t) || null == t.expiresAt) return null;
    let n = new Date(e.expiresAt),
        i = new Date(t.expiresAt),
        a = (0, r.Z)(i, n),
        s = Math.floor(a / 30),
        o = s + (a % 30 >= 25 ? 1 : 0);
    if (o >= 12) {
        let e = Math.floor(o / 12);
        return L.Z.Messages.DURATION_YEARS.format({ years: e });
    }
    if (o > 0) return L.Z.Messages.DURATION_MONTHS.format({ months: o });
    {
        let e = (0, r.Z)(i, n);
        if (!(e >= 7)) return L.Z.Messages.DURATION_DAYS.format({ days: e });
        {
            let t = Math.ceil(e / 7);
            return L.Z.Messages.DURATION_WEEKS.format({ weeks: t });
        }
    }
}
function er(e) {
    return null != et(e);
}
function ei(e) {
    return (0, a.EQ)(e)
        .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards.some((e) => e.type === l.w.IN_GAME))
        .exhaustive();
}
function ea(e) {
    return (0, a.EQ)(e)
        .with({ configVersion: 2 }, (e) => {
            var t;
            return null !== (t = e.rewardsConfig.rewards.find((e) => e.type === l.w.IN_GAME)) && void 0 !== t ? t : null;
        })
        .exhaustive();
}
function es(e, t) {
    return e.targetedContent.includes(t);
}
function eo(e, t) {
    T.Z.captureException(e, {
        ...t,
        tags: {
            ...(null == t ? void 0 : t.tags),
            app_context: 'quests'
        }
    });
}
function el(e, t) {
    if (null == t || null == e) return null;
    for (let n of t) {
        let t = P(e, n);
        if (null != t) return t;
    }
    return null;
}
function eu(e) {
    let {
        quest: { config: t }
    } = e;
    return (0, a.EQ)(t)
        .with({ configVersion: 2 }, (e) => {
            let t = e.rewardsConfig;
            return t.assignmentMethod === o.j.TIERED && t.rewards.length > 0 && t.rewards.every((e) => e.type === l.w.REWARD_CODE);
        })
        .exhaustive();
}
let ec = (e) =>
    (0, a.EQ)(e.taskConfig)
        .with({ type: u.L.FIRST_PARTY }, (e) => null != e.tasks[s.X.PLAY_ON_DESKTOP])
        .otherwise(() => !1);
function ed(e) {
    let { quest: t } = e;
    return (0, a.EQ)(t.config)
        .with({ configVersion: 2 }, (e) => ep(t, R.S7.PLAYTIME_TASK) || ec(e))
        .exhaustive();
}
function e_(e) {
    return null != e && ed({ quest: e });
}
function eE(e, t) {
    return N.r.build(t.config).application.id === e || ef(t);
}
function ef(e) {
    return ep(e, R.S7.FRACTIONS_QUEST);
}
function eh(e) {
    return !ep(e, R.S7.IN_HOUSE_CONSOLE_QUEST);
}
function ep(e, t) {
    return N.r.build(e.config).features.has(t);
}
function eI(e) {
    let { quest: t, idx: n } = e;
    if (null == n) return null;
    let r = t.config.rewardsConfig.rewards[n];
    return (0, a.EQ)(r)
        .with({ type: l.w.REWARD_CODE }, (e) => e)
        .otherwise(() => null);
}
function em(e, t) {
    let n = N.r.build(e.config).application.link;
    (0, m.q)({
        href: n,
        onConfirm: () => {
            (0, S._3)({
                questId: e.id,
                questContent: t.content,
                questContentCTA: t.ctaContent,
                questContentPosition: t.position
            }),
                (0, _.Z)(n);
        }
    });
}
let eT = (e, t) => {
        (0, S._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position
        }),
            (0, f.JG)(K(e));
    },
    eS = (e, t) => (e > 0 ? (0, i.floor)(Math.min(t / e, 1), 4) : 0),
    eg = (e) => eU(e) || g.Z.isProgressingOnDesktop(e.id),
    eA = (e, t) => {
        var n, r, a, s;
        let o = null === (s = e.userStatus) || void 0 === s ? void 0 : null === (a = s.progress) || void 0 === a ? void 0 : null === (r = a[t.eventName]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.lastBeatAt;
        if (null == o || !eg(e)) return 0;
        let l = Date.now() - new Date(o).valueOf();
        return (0, i.floor)(l / h.Z.Millis.SECOND, 2);
    },
    eN = (e, t) => {
        var n, r, a;
        let s = t.target,
            o = e.userStatus;
        if ((null == o ? void 0 : o.completedAt) != null) return s;
        let l = null == o ? void 0 : null === (n = o.progress) || void 0 === n ? void 0 : n[t.eventName],
            u = null !== (a = null !== (r = null == l ? void 0 : l.value) && void 0 !== r ? r : null == o ? void 0 : o.streamProgressSeconds) && void 0 !== a ? a : 0,
            c = eA(e, t),
            d = Math.min(0.99 * s, u + c);
        return Math.max((0, i.floor)(d, 2), 0);
    },
    eO = (e) => {
        var t, n;
        let { quest: r, taskType: i, includeTaskTypes: a = s.T.ALL } = e,
            o = r.config.taskConfig;
        if (o.type !== u.L.FIRST_PARTY) throw Error('Cannot retrieve task details for task config with type '.concat(o.type, '!'));
        let l = null != i ? i : null === (t = Object.values(o.tasks).filter((e) => a.has(e.eventName))[0]) || void 0 === t ? void 0 : t.eventName,
            c = null !== (n = o.tasks[l]) && void 0 !== n ? n : o.tasks[s.X.STREAM_ON_DESKTOP];
        if (null == c) throw Error('No task with type '.concat(i, ' found for quest ').concat(r.id, '!'));
        let d = c.target,
            _ = eN(r, c);
        return {
            progressSeconds: _,
            targetSeconds: d,
            targetMinutes: Math.round(d / h.Z.Seconds.MINUTE),
            percentComplete: eS(d, _),
            taskType: l
        };
    },
    eR = (e) => (s.T.ALL.has(e) ? e : null),
    ev = (e) => {
        var t, n;
        let { quest: r, includeTaskTypes: i = s.T.ALL } = e;
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
            .filter(I.lm)) {
            let t = eR(e.eventName);
            if (null != t) {
                if (null == i ? void 0 : i.has(t))
                    return eO({
                        quest: r,
                        taskType: t,
                        includeTaskTypes: i
                    });
            }
        }
        return eO({
            quest: r,
            includeTaskTypes: i
        });
    },
    eC = (e, t) =>
        (0, a.EQ)(e)
            .with({ config: { configVersion: 2 } }, (e) => {
                if (e.config.taskConfig.type !== u.L.FIRST_PARTY)
                    return {
                        progressSeconds: 0,
                        targetSeconds: 1,
                        targetMinutes: 1,
                        percentComplete: 0,
                        taskType: s.X.STREAM_ON_DESKTOP
                    };
                if (eD(e))
                    return ev({
                        quest: e,
                        includeTaskTypes: null != t ? t : eU(e) ? s.T.CONSOLE : s.T.ALL
                    });
                if (eb(e)) {
                    var n, r, i, a, o;
                    let t = null !== (a = null === (r = e.userStatus) || void 0 === r ? void 0 : null === (n = r.progress[s.X.PLAY_ON_DESKTOP_V2]) || void 0 === n ? void 0 : n.value) && void 0 !== a ? a : 0,
                        l = null !== (o = null === (i = e.config.taskConfig.tasks[s.X.PLAY_ON_DESKTOP_V2]) || void 0 === i ? void 0 : i.target) && void 0 !== o ? o : 1000,
                        u = l / 1000;
                    return {
                        taskType: s.X.PLAY_ON_DESKTOP_V2,
                        progressSeconds: Math.floor(t / 1000),
                        targetSeconds: u,
                        targetMinutes: Math.round(u / 60),
                        percentComplete: eS(l, t)
                    };
                }
                return e_(e)
                    ? eO({
                          quest: e,
                          taskType: s.X.PLAY_ON_DESKTOP
                      })
                    : eO({
                          quest: e,
                          taskType: s.X.STREAM_ON_DESKTOP
                      });
            })
            .exhaustive();
function eL(e) {
    return (0, a.EQ)(e.config)
        .with({ configVersion: 2 }, (t) => {
            var n, r, i, a;
            if (t.taskConfig.type !== u.L.THIRD_PARTY || 0 === Object.keys(t.taskConfig.tasks).length) return null;
            let s = Object.keys(t.taskConfig.tasks)[0],
                o = t.taskConfig.tasks[s],
                l = null !== (a = null === (i = e.userStatus) || void 0 === i ? void 0 : null === (r = i.progress) || void 0 === r ? void 0 : null === (n = r[s]) || void 0 === n ? void 0 : n.value) && void 0 !== a ? a : 0,
                c = eS(o.target, l);
            return {
                title: o.title,
                description: o.description,
                target: o.target,
                progress: l,
                completedRatio: c
            };
        })
        .exhaustive();
}
let ey = (e) => (t) => e.some((e) => null != t.config.taskConfig.tasks[e]),
    eD = ey([s.X.PLAY_ON_XBOX, s.X.PLAY_ON_PLAYSTATION]),
    eb = ey([s.X.PLAY_ON_DESKTOP_V2]),
    eM = (e) =>
        (0, a.EQ)(e)
            .with({ config: { configVersion: 2 } }, eD)
            .exhaustive(),
    eP = (e, t) => {
        var n, r;
        let i = null == e ? void 0 : null === (r = e.progress[t]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
        if (null == i) return !1;
        let a = new Date(i).valueOf();
        return !isNaN(a) && a > Date.now();
    },
    eU = (e) =>
        (0, a.EQ)(e)
            .with({ config: { configVersion: 2 } }, (e) => null != e.userStatus && (eP(e.userStatus, s.X.PLAY_ON_XBOX) || eP(e.userStatus, s.X.PLAY_ON_PLAYSTATION)))
            .exhaustive();
function ew(e, t) {
    let { platformType: n, quest: r } = e;
    (0, S._3)({
        questId: r.id,
        questContent: t.content,
        questContentCTA: t.ctaContent
    }),
        (0, E.Z)({
            platformType: n,
            location: t.ctaContent
        });
}
function ex(e, t) {
    let { quest: n } = e;
    (0, S._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentRowIndex: t.rowIndex,
        questContentCTA: t.ctaContent
    });
    let r = (function (e) {
        let t = Object.keys(e.config.taskConfig.tasks),
            n = [];
        for (let e of t)
            switch (e) {
                case s.X.PLAY_ON_XBOX:
                    n.push(v.ABu.XBOX);
                    break;
                case s.X.PLAY_ON_PLAYSTATION:
                    n.push(v.ABu.PLAYSTATION);
            }
        return n;
    })(n);
    if (1 === r.length) return (0, E.Z)({ platformType: r.at(0) });
    c.Z.dispatch({
        type: 'CONNECTIONS_GRID_MODAL_SHOW',
        onComplete: (e) => (0, E.Z)({ platformType: e }),
        includedPlatformTypes: new Set(r)
    });
}
function eG(e, t) {
    let { quest: n } = e;
    (0, S._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    }),
        d.Z.open(v.oAB.CONNECTIONS);
}
function ek() {
    return window.location.pathname.startsWith(v.Z5c.QUEST_HOME);
}
function eB(e) {
    return 'xbox' === e.connected_account_type ? v.ABu.XBOX : v.ABu.PLAYSTATION;
}
function eF(e) {
    return eB(e) === v.ABu.XBOX ? L.Z.Messages.QUESTS_CONSOLE_EXPIRED_CREDENTIALS_XBOX : L.Z.Messages.QUESTS_CONSOLE_EXPIRED_CREDENTIALS_PSN;
}
function eV(e) {
    var t, n, r, i;
    let { quest: a, rewardCode: s, selectedPlatformType: o, sharedQuestFields: l } = e,
        u = eu({ quest: a }),
        c = null != o ? o : null == s ? void 0 : s.platform,
        d = u
            ? eI({
                  quest: a,
                  idx: null !== (r = null == s ? void 0 : s.tier) && void 0 !== r ? r : null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedTier
              })
            : null,
        _ = null !== (i = null == d ? void 0 : null === (n = d.messages) || void 0 === n ? void 0 : n.redemptionInstructionsByPlatform) && void 0 !== i ? i : l.defaultRewardRedemptionInstructionsByPlatform;
    return null != c ? _[c] : void 0;
}
function eH(e) {
    let { isTargetedDisclosure: t, gamePublisher: n, gameTitle: r, isInHouseQuest: i } = e;
    if (i) return t ? L.Z.Messages.QUESTS_DISCLOSURE_IN_HOUSE_QUEST_BAR : L.Z.Messages.QUESTS_DISCLOSURE_IN_HOUSE_QUEST_HOME;
    return t
        ? L.Z.Messages.QUESTS_DISCLOSURE_PUBLISHER_TARGETING.format({ gamePublisher: i ? L.Z.Messages.DISCORD : n })
        : L.Z.Messages.QUESTS_DISCLOSURE_PUBLISHER_PROMOTING_QUEST_HOME.format({
              gamePublisher: n,
              gameTitle: r
          });
}
function eZ(e) {
    let t =
            ed({ quest: e }) ||
            (function (e) {
                let { quest: t } = e;
                return (0, a.EQ)(t.config)
                    .with(
                        {
                            configVersion: 2,
                            taskConfig: { type: u.L.FIRST_PARTY }
                        },
                        (e) => null != e.taskConfig.tasks[s.X.STREAM_ON_DESKTOP]
                    )
                    .otherwise(() => !1);
            })({ quest: e }),
        n = eD(e),
        r = [];
    return t && r.push(R.cd.DESKTOP), n && r.push(R.cd.CONSOLE), r;
}
