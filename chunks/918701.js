let r;
n.d(t, {
    $H: function () {
        return ed;
    },
    $J: function () {
        return eO;
    },
    AV: function () {
        return q;
    },
    Bz: function () {
        return eC;
    },
    CE: function () {
        return M;
    },
    FE: function () {
        return ep;
    },
    GN: function () {
        return Q;
    },
    Gh: function () {
        return eA;
    },
    Gs: function () {
        return Y;
    },
    Jg: function () {
        return er;
    },
    Kr: function () {
        return J;
    },
    Mi: function () {
        return K;
    },
    Nj: function () {
        return ec;
    },
    Qe: function () {
        return D;
    },
    Rs: function () {
        return j;
    },
    U3: function () {
        return U;
    },
    V$: function () {
        return eD;
    },
    WP: function () {
        return w;
    },
    Xh: function () {
        return k;
    },
    Xv: function () {
        return ee;
    },
    _: function () {
        return W;
    },
    dl: function () {
        return e_;
    },
    f2: function () {
        return em;
    },
    gI: function () {
        return ey;
    },
    gO: function () {
        return F;
    },
    il: function () {
        return eN;
    },
    j8: function () {
        return V;
    },
    lQ: function () {
        return b;
    },
    mN: function () {
        return es;
    },
    nP: function () {
        return ei;
    },
    o9: function () {
        return ef;
    },
    oo: function () {
        return el;
    },
    pG: function () {
        return eh;
    },
    ph: function () {
        return H;
    },
    t2: function () {
        return z;
    },
    uo: function () {
        return Z;
    },
    vR: function () {
        return et;
    },
    xn: function () {
        return $;
    },
    yI: function () {
        return x;
    },
    ys: function () {
        return en;
    },
    zE: function () {
        return X;
    },
    zK: function () {
        return eE;
    },
    zi: function () {
        return P;
    }
}), n(627341), n(47120), n(411104);
var i = n(164369), a = n(278074), o = n(754700), s = n(551910), l = n(887003), u = n(742635), c = n(570140), d = n(230711), _ = n(782568);
n(597688);
var E = n(231757), f = n(572004), h = n(70956), p = n(630388), m = n(823379), I = n(49012), T = n(960048), g = n(617136), S = n(687744), A = n(497505), N = n(566078), v = n(312046), O = n(46140), R = n(981631), C = n(689938);
let y = 'https://cdn.discordapp.com/assets/quests/';
function D(e) {
    try {
        return (0, a.EQ)(e.config).with({ config_version: 1 }, () => !0).with({ config_version: 2 }, () => !0).exhaustive();
    } catch (n) {
        var t;
        return console.error('Unknown config version \''.concat(null == e ? void 0 : null === (t = e.config) || void 0 === t ? void 0 : t.config_version, '\''), n), !1;
    }
}
function L(e, t) {
    return null != N.r.build(t.config).application.ids.find(t => t === e);
}
function b(e, t) {
    let n;
    for (let [r, i] of e)
        if (L(t, i) && !P(i)) {
            n = i;
            break;
        }
    return n;
}
function M(e, t) {
    return Array.from(e.values()).find(e => L(t, e) && !P(e) && ec({ quest: e }));
}
function P(e) {
    return new Date(e.config.expiresAt).valueOf() <= Date.now();
}
function U(e) {
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
        progress: function (e) {
            let t = {};
            for (let [r, i] of Object.entries(e)) {
                var n;
                t[r] = {
                    eventName: i.event_name,
                    value: i.value,
                    updatedAt: i.updated_at,
                    completedAt: i.completed_at,
                    heartbeat: null == (n = i.heartbeat) ? null : {
                        lastBeatAt: n.last_beat_at,
                        expiresAt: n.expires_at
                    }
                };
            }
            return t;
        }(e.progress)
    };
}
function w(e) {
    var t;
    return {
        id: e.id,
        preview: e.preview,
        config: (t = e.config, (0, a.EQ)(t).with({ config_version: 1 }, e => {
            var t, n, r;
            return {
                configVersion: 1,
                expiresAt: e.expires_at,
                streamDurationRequirementMinutes: e.stream_duration_requirement_minutes,
                gameTitle: e.game_title,
                getGameLink: e.get_game_link,
                applicationId: e.application_id,
                applicationName: e.application_name,
                messages: {
                    questName: (t = e.messages).quest_name,
                    rewardName: t.reward_name,
                    rewardNameWithArticle: t.reward_name_with_article,
                    rewardRedemptionInstructionsByPlatform: function (e) {
                        let t = {};
                        for (let n in e) {
                            let r = parseInt(n);
                            A.xw.has(r) && (t[r] = e[n]);
                        }
                        return t;
                    }(t.reward_redemption_instructions_by_platform),
                    gameTitle: t.game_title,
                    gamePublisher: t.game_publisher
                },
                colors: {
                    primary: (n = e.colors).primary,
                    secondary: n.secondary
                },
                rewardsConfig: (0, S.Q)(e.rewards_config),
                rewardCodeExpiresAt: e.reward_code_expires_at,
                rewardCodePlatforms: e.reward_code_platforms.filter(e => A.xw.has(e)),
                assets: {
                    rewardTile: (r = e.assets).reward_tile,
                    hero: r.hero,
                    questBarHero: r.quest_bar_hero,
                    gameTile: r.game_tile,
                    logotype: r.logotype
                },
                inGameQuestConfig: null,
                variants: e.variants,
                supplementaryApplicationIds: e.supplementary_application_ids
            };
        }).with({ config_version: 2 }, e => (0, v.Q)(e)).exhaustive()),
        userStatus: null == e.user_status ? null : U(e.user_status),
        targetedContent: e.targeted_content
    };
}
function x(e) {
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
function G(e) {
    return {
        skuId: e.sku_id,
        tenantMetadata: function (e) {
            if ((null == e ? void 0 : e.quest_rewards) == null)
                return null;
            let t = e.quest_rewards;
            switch (t.reward.tag) {
            case l.w.IN_GAME:
                return { questRewards: { reward: { tag: t.reward.tag } } };
            case l.w.REWARD_CODE:
                return {
                    questRewards: {
                        reward: {
                            tag: t.reward.tag,
                            rewardCode: x(t.reward.reward_code)
                        }
                    }
                };
            }
        }(e.tenant_metadata)
    };
}
function k(e) {
    return {
        claimedAt: e.claimed_at,
        items: e.entitlements.map(G),
        errors: e.errors
    };
}
function B(e, t) {
    return e.startsWith('data') ? e : t;
}
let F = e => {
        var t, n;
        let r = ef({
                quest: e,
                idx: null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedTier
            }), i = N.r.build(e.config).defaultRewardAsset, a = null !== (n = null == r ? void 0 : r.asset) && void 0 !== n ? n : i;
        return {
            name: a,
            url: B(a, ''.concat(y).concat(e.id, '/').concat(a))
        };
    }, V = e => B(e.config.assets.hero, ''.concat(y).concat(e.id, '/').concat(e.config.assets.hero)), H = e => B(e.config.assets.questBarHero, ''.concat(y).concat(e.id, '/').concat(e.config.assets.questBarHero)), Z = (e, t) => B(e.config.assets.gameTile, ''.concat(y).concat(e.id, '/').concat(t, '/').concat(e.config.assets.gameTile)), Y = (e, t) => B(e.config.assets.logotype, ''.concat(y).concat(e.id, '/').concat(t, '/').concat(e.config.assets.logotype)), j = e => ''.concat(location.protocol, '//').concat(location.host, '/quests/').concat(e);
function W(e, t) {
    for (let [n, r] of e)
        if (!P(r) && r.targetedContent.includes(t))
            return r;
    return null;
}
function K(e, t) {
    return e.targetedContent.includes(t);
}
let z = e => {
    switch (e) {
    case A.y$.XBOX:
        return C.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_XBOX;
    case A.y$.PLAYSTATION:
        return C.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PLAYSTATION;
    case A.y$.SWITCH:
        return C.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SWITCH;
    case A.y$.PC:
        return C.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_PC;
    case A.y$.CROSS_PLATFORM:
        return C.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_CROSS_PLATFORM;
    }
};
function q(e) {
    var t, n;
    let {
        quest: r,
        taskDetails: i
    } = e;
    if ((null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null)
        return C.Z.Messages.QUESTS_COMPLETION_PROGRESS_COMPLETE;
    if ((null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null) {
        let {percentComplete: e} = i;
        return e >= 0.75 ? C.Z.Messages.QUESTS_COMPLETION_PROGRESS_ALMOST_COMPLETE : e >= 0.45 && e <= 0.55 ? C.Z.Messages.QUESTS_COMPLETION_PROGRESS_HALFWAY : e > 0 ? C.Z.Messages.QUESTS_COMPLETION_PROGRESS_STARTED : C.Z.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED;
    }
    return C.Z.Messages.QUESTS_TITLE.format({ questName: r.config.messages.questName });
}
function Q(e) {
    return e === A.jn.QUEST_BAR_V2 || Object.keys(O.a_).includes(A.jn[e]);
}
function X(e, t) {
    if (!Q(t))
        return !1;
    let n = A.jn[t];
    return (0, p.yE)(e.dismissedQuestContent, O.a_[n]);
}
function $(e) {
    return (0, a.EQ)(e).with({ configVersion: 1 }, e => {
        let t = e.rewardsConfig.rewards.find(e => e.tag === l.w.COLLECTIBLE);
        return (null == t ? void 0 : t.tag) === l.w.COLLECTIBLE ? t : null;
    }).with({ configVersion: 2 }, e => {
        let t = e.rewardsConfig.rewards.find(e => e.type === l.w.COLLECTIBLE);
        return (null == t ? void 0 : t.type) === l.w.COLLECTIBLE ? t : null;
    }).exhaustive();
}
function J(e) {
    let t = $(e);
    if (null == t || !('expiresAt' in t) || null == t.expiresAt)
        return null;
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
    return (n.days >= 7 && (n.weeks = Math.floor(n.days / 7), n.days = n.days % 7), n.years > 0) ? C.Z.Messages.DURATION_YEARS.format({ years: n.years }) : n.months > 0 ? C.Z.Messages.DURATION_MONTHS.format({ months: n.months }) : n.weeks > 0 ? C.Z.Messages.DURATION_WEEKS.format({ weeks: n.weeks }) : C.Z.Messages.DURATION_DAYS.format({ days: n.days });
}
function ee(e) {
    return null != $(e);
}
function et(e, t) {
    return e.targetedContent.includes(t);
}
function en(e, t) {
    T.Z.captureException(e, {
        ...t,
        tags: {
            ...null == t ? void 0 : t.tags,
            app_context: 'quests'
        }
    });
}
function er(e, t) {
    if (null == t || null == e)
        return null;
    for (let n of t) {
        if (null == n.application_id)
            continue;
        let t = b(e, n.application_id);
        if (null != t)
            return t;
    }
    return null;
}
function ei(e) {
    return e.endsWith('.webm') || e.endsWith('.mp4') || e.startsWith('data:video');
}
let ea = /\.([a-zA-Z0-9]+)$/, eo = /^data:video\/([a-zA-Z0-9]+)\;/;
function es(e) {
    var t, n, r, i, a;
    switch (null !== (a = null === (n = ea.exec(e)) || void 0 === n ? void 0 : null === (t = n[1]) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== a ? a : null === (i = eo.exec(e)) || void 0 === i ? void 0 : null === (r = i[1]) || void 0 === r ? void 0 : r.toLowerCase()) {
    case 'webm':
        return 'video/webm';
    case 'mp4':
        return 'video/mp4';
    default:
        throw Error('Unexpected file extension: '.concat(e.substring(0, 15)));
    }
}
function el(e) {
    let {
        quest: {config: t}
    } = e;
    return (0, a.EQ)(t).with({ configVersion: 1 }, e => {
        let t = e.rewardsConfig;
        return t.assignmentMethod === s.j.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.tag === l.w.REWARD_CODE);
    }).with({ configVersion: 2 }, e => {
        let t = e.rewardsConfig;
        return t.assignmentMethod === s.j.TIERED && t.rewards.length > 0 && t.rewards.every(e => e.type === l.w.REWARD_CODE);
    }).exhaustive();
}
let eu = e => (0, a.EQ)(e.taskConfig).with({ type: u.L.FIRST_PARTY }, e => null != e.tasks[o.X.PLAY_ON_DESKTOP]).otherwise(() => !1);
function ec(e) {
    let {quest: t} = e;
    return (0, a.EQ)(t.config).with({ configVersion: 1 }, e => eE(t, O.S7.PLAYTIME_TASK)).with({ configVersion: 2 }, e => eE(t, O.S7.PLAYTIME_TASK) || eu(e)).exhaustive();
}
function ed(e) {
    return null != e && ec({ quest: e });
}
function e_(e) {
    return !eE(e, O.S7.IN_HOUSE_CONSOLE_QUEST);
}
function eE(e, t) {
    return N.r.build(e.config).features.has(t);
}
function ef(e) {
    let {
        quest: t,
        idx: n
    } = e;
    if (null == n)
        return null;
    let r = t.config.rewardsConfig.rewards[n];
    return (0, a.EQ)(r).with({ tag: l.w.REWARD_CODE }, e => e).with({ type: l.w.REWARD_CODE }, e => e).otherwise(() => null);
}
function eh(e) {
    var t;
    let {
            quest: n,
            useV2Variants: r = !1,
            taskDetails: i
        } = e, a = n.config.messages.gameTitle, o = N.r.build(n.config).defaultReward.messages.nameWithArticle, {targetMinutes: s} = null != i ? i : eN(n), l = eE(n, O.S7.IN_HOUSE_CONSOLE_QUEST), u = J(n.config), c = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null;
    if (l && null != u)
        return c ? C.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
            reward: o,
            duration: u
        }) : C.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_ANY_GAME_ON_CONNECTED_CONSOLE.format({
            targetMinutes: s,
            rewardNameWithArticle: o,
            duration: u
        });
    if (eO(n))
        return null != u ? C.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
            gameTitle: a,
            targetMinutes: s,
            rewardNameWithArticle: o,
            duration: u
        }) : C.Z.Messages.QUEST_BAR_SUBTITLE_PLAY_GAME.format({
            gameTitle: a,
            targetMinutes: s,
            rewardNameWithArticle: o
        });
    if (ed(n))
        return null != u ? C.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
            gameTitle: a,
            streamingDurationRequirement: s,
            rewardNameWithArticle: o,
            duration: u
        }) : C.Z.Messages.QUESTS_PLAY_INSTRUCTIONS_TO_WIN_REWARD.format({
            gameTitle: a,
            questReward: o,
            streamingDurationRequirement: s
        });
    else if (el({ quest: n }))
        return (r ? C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED_V2 : C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_TIERED).format({
            gameTitle: a,
            streamingDurationRequirement: s
        });
    return null != u ? C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
        gameTitle: a,
        streamingDurationRequirement: s,
        questReward: o,
        duration: u
    }) : (r ? C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD_V2 : C.Z.Messages.QUESTS_INSTRUCTIONS_TO_WIN_REWARD).format({
        gameTitle: a,
        questReward: o,
        streamingDurationRequirement: s
    });
}
function ep(e, t) {
    let n = N.r.build(e.config).application.link;
    (0, I.q)({
        href: n,
        onConfirm: () => {
            (0, g._3)({
                questId: e.id,
                questContent: t.content,
                questContentCTA: t.ctaContent,
                questContentPosition: t.position
            }), (0, _.Z)(n);
        }
    });
}
let em = (e, t) => {
        (0, g._3)({
            questId: e,
            questContent: t.content,
            questContentCTA: t.ctaContent,
            questContentPosition: t.position
        }), (0, f.JG)(j(e));
    }, eI = (e, t) => e > 0 ? Math.min(t / e, 1) : 0, eT = e => {
        var t, n, r, i, a, s, l, c;
        let {
                quest: d,
                taskType: _
            } = e, E = d.config.taskConfig;
        if (E.type !== u.L.FIRST_PARTY)
            throw Error('Cannot retrieve task details for task config with type '.concat(E.type, '!'));
        let f = null != _ ? _ : null === (t = Object.values(E.tasks)[0]) || void 0 === t ? void 0 : t.eventName, p = null !== (s = E.tasks[f]) && void 0 !== s ? s : E.tasks[o.X.STREAM_ON_DESKTOP];
        if (null == p)
            throw Error('No task with type '.concat(_, ' found for quest ').concat(d.id, '!'));
        let m = p.target, I = null !== (c = null !== (l = null === (i = d.userStatus) || void 0 === i ? void 0 : null === (r = i.progress) || void 0 === r ? void 0 : null === (n = r[f]) || void 0 === n ? void 0 : n.value) && void 0 !== l ? l : null === (a = d.userStatus) || void 0 === a ? void 0 : a.streamProgressSeconds) && void 0 !== c ? c : 0;
        return {
            progressSeconds: I,
            targetSeconds: m,
            targetMinutes: Math.round(m / h.Z.Seconds.MINUTE),
            percentComplete: eI(m, I),
            taskType: f
        };
    }, eg = e => o.T.ALL.has(e) ? e : null, eS = e => {
        var t, n;
        let {
            quest: r,
            consoleOnly: i
        } = e;
        for (let e of Object.values(null !== (n = null === (t = r.userStatus) || void 0 === t ? void 0 : t.progress) && void 0 !== n ? n : {}).sort((e, t) => (null == e ? void 0 : e.updatedAt) != null && (null == t ? void 0 : t.updatedAt) != null && e.updatedAt > t.updatedAt ? -1 : 1).filter(m.lm)) {
            let t = eg(e.eventName);
            if (null != t) {
                if (!0 !== i || o.T.CONSOLE.has(t))
                    return eT({
                        quest: r,
                        taskType: t
                    });
            }
        }
        return eT({ quest: r });
    }, eA = e => (0, a.EQ)(e).with({ config: { configVersion: 1 } }, () => null).with({ config: { configVersion: 2 } }, e => ev(e) ? eS({
        quest: e,
        consoleOnly: !0
    }) : null).exhaustive(), eN = e => (0, a.EQ)(e).with({ config: { configVersion: 1 } }, e => {
        var t, n;
        let r = null !== (n = null === (t = e.userStatus) || void 0 === t ? void 0 : t.streamProgressSeconds) && void 0 !== n ? n : 0, i = Math.round(e.config.streamDurationRequirementMinutes * h.Z.Seconds.MINUTE);
        return {
            progressSeconds: r,
            targetSeconds: i,
            targetMinutes: e.config.streamDurationRequirementMinutes,
            percentComplete: eI(i, r),
            taskType: o.X.STREAM_ON_DESKTOP
        };
    }).with({ config: { configVersion: 2 } }, e => e.config.taskConfig.type !== u.L.FIRST_PARTY ? {
        progressSeconds: 0,
        targetSeconds: 1,
        targetMinutes: 1,
        percentComplete: 0,
        taskType: o.X.STREAM_ON_DESKTOP
    } : ev(e) ? eS({ quest: e }) : ed(e) ? eT({
        quest: e,
        taskType: o.X.PLAY_ON_DESKTOP
    }) : eT({
        quest: e,
        taskType: o.X.STREAM_ON_DESKTOP
    })).exhaustive();
let ev = (r = [
        o.X.PLAY_ON_XBOX,
        o.X.PLAY_ON_PLAYSTATION
    ], e => r.some(t => null != e.config.taskConfig.tasks[t])), eO = e => (0, a.EQ)(e).with({ config: { configVersion: 1 } }, () => !1).with({ config: { configVersion: 2 } }, ev).exhaustive(), eR = (e, t) => {
        var n, r;
        let i = null == e ? void 0 : null === (r = e.progress[t]) || void 0 === r ? void 0 : null === (n = r.heartbeat) || void 0 === n ? void 0 : n.expiresAt;
        if (null == i)
            return !1;
        let a = new Date(i).valueOf();
        return !isNaN(a) && a > Date.now();
    }, eC = e => (0, a.EQ)(e).with({ config: { configVersion: 1 } }, () => !1).with({ config: { configVersion: 2 } }, e => null != e.userStatus && (eR(e.userStatus, o.X.PLAY_ON_XBOX) || eR(e.userStatus, o.X.PLAY_ON_PLAYSTATION))).exhaustive();
function ey(e, t) {
    let {
        quest: n,
        showInline: r
    } = e;
    (0, g._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    }), !r && d.Z.open(R.oAB.CONNECTIONS), c.Z.dispatch({
        type: 'CONNECTIONS_GRID_MODAL_SHOW',
        onComplete: e => (0, E.Z)({ platformType: e }),
        includedPlatformTypes: new Set([
            R.ABu.XBOX,
            R.ABu.PLAYSTATION
        ])
    });
}
function eD(e, t) {
    let {quest: n} = e;
    (0, g._3)({
        questId: n.id,
        questContent: t.content,
        questContentPosition: t.position,
        questContentCTA: t.ctaContent
    }), d.Z.open(R.oAB.CONNECTIONS);
}
