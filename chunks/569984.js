let r, i, a, s, o, l, u, c, d, f, _, h, p, m, g, E;
n(47120);
var v,
    I,
    S,
    T,
    b = n(392711),
    y = n(754700),
    A = n(887003),
    N = n(442837),
    C = n(570140),
    R = n(497505),
    O = n(918701),
    D = n(184299),
    L = n(5881),
    x = n(46140);
let w = new Map();
function M() {
    (r = !1), (i = !1), (a = new Map()), (s = new Map()), (o = 0), (l = new Set()), (u = new Set()), (c = new Set()), (d = new Set()), (w = new Map()), (_ = new Map()), (h = new Map()), (p = new Map()), (m = null), (g = new Map()), (f = new Set()), (E = new Map());
}
M();
function P(e, t) {
    let n = (a = new Map(a)).get(e);
    if (null != n) {
        let r = {
            ...n,
            ...t
        };
        !(function (e, t) {
            var n, r, i, a;
            if (null != t.userStatus)
                for (let s of Object.values(null !== (r = null === (n = t.userStatus) || void 0 === n ? void 0 : n.progress) && void 0 !== r ? r : {})) {
                    if (!(0, b.isNil)(s)) y.T.DESKTOP.has(s.eventName) && ((null === (i = s.heartbeat) || void 0 === i ? void 0 : i.lastBeatAt) != null ? f.add(e) : (null === (a = s.heartbeat) || void 0 === a ? void 0 : a.lastBeatAt) == null && f.delete(e));
                }
        })(e, t),
            a.set(e, r);
    }
}
function k(e, t) {
    let n = new Map(_);
    n.set(e, t), (_ = n);
}
function U(e) {
    null != p.get(e) && (p = new Map(p)).delete(e);
}
function G(e) {
    let t = new Set(l);
    t.delete(e), (l = t);
}
function B(e) {
    let t = new Set(d);
    t.delete(e), (d = t);
}
class Z extends (v = N.ZP.Store) {
    get quests() {
        return a;
    }
    get claimedQuests() {
        return s;
    }
    get isFetchingCurrentQuests() {
        return r;
    }
    get isFetchingClaimedQuests() {
        return i;
    }
    get lastFetchedCurrentQuests() {
        return o;
    }
    get questDeliveryOverride() {
        return a.get(null != m ? m : '');
    }
    get questToDeliverForPlacement() {
        return E;
    }
    isEnrolling(e) {
        return l.has(e);
    }
    isClaimingReward(e) {
        return u.has(e);
    }
    isFetchingRewardCode(e) {
        return c.has(e);
    }
    isDismissingContent(e) {
        return d.has(e);
    }
    getRewardCode(e) {
        return _.get(e);
    }
    getRewards(e) {
        return h.get(e);
    }
    getStreamHeartbeatFailure(e) {
        return p.get(e);
    }
    getQuest(e) {
        return a.get(e);
    }
    isProgressingOnDesktop(e) {
        return f.has(e);
    }
    selectedTaskPlatform(e) {
        var t;
        return null !== (t = g.get(e)) && void 0 !== t ? t : null;
    }
    getOptimisticProgress(e, t) {
        var n;
        return null === (n = w.get(e)) || void 0 === n ? void 0 : n.get(t);
    }
}
(T = 'QuestsStore'),
    (S = 'displayName') in (I = Z)
        ? Object.defineProperty(I, S, {
              value: T,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (I[S] = T),
    (t.Z = new Z(C.Z, {
        LOGOUT: function () {
            M();
        },
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function () {
            (o = Date.now()), (r = !0);
        },
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function (e) {
            let { quests: t } = e;
            for (let e of ((r = !1), (a = new Map()), t)) a.set(e.id, e), e.targetedContent.includes(R.jn.QUEST_BAR) && (0, L.T)({ location: x.dr.QUESTS_STORE }).log('Delivered '.concat(e.config.messages.questName, ' (').concat(e.id, ')'));
        },
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function () {
            (o = 0), (r = !1);
        },
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: function () {
            i = !0;
        },
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: function (e) {
            let { quests: t } = e;
            for (let e of ((i = !1), (s = new Map()), t)) s.set(e.id, e);
        },
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: function () {
            i = !1;
        },
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: function (e) {
            let { quest: t, placement: n } = e;
            null == t ? E.delete(n) : E.set(n, t);
        },
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: function (e) {
            let { placement: t } = e;
            E.delete(t);
        },
        QUESTS_SEND_HEARTBEAT_SUCCESS: function (e) {
            let { questId: t, streamKey: n, userStatus: r } = e;
            f.add(t), P(t, { userStatus: r }), U(n);
        },
        QUESTS_SEND_HEARTBEAT_FAILURE: function (e) {
            let { questId: t, streamKey: n } = e;
            null == p.get(n) &&
                (p = new Map(p)).set(n, {
                    questId: t,
                    streamKey: n,
                    firstFailedAt: Date.now()
                });
        },
        QUESTS_ENROLL_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(l);
            n.add(t), (l = n);
        },
        QUESTS_ENROLL_SUCCESS: function (e) {
            let { enrolledQuestUserStatus: t } = e;
            P(t.questId, { userStatus: t }), G(t.questId);
        },
        QUESTS_ENROLL_FAILURE: function (e) {
            let { questId: t } = e;
            G(t);
        },
        QUESTS_FETCH_REWARD_CODE_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(c);
            n.add(t), (c = n);
        },
        QUESTS_FETCH_REWARD_CODE_SUCCESS: function (e) {
            let { questId: t, rewardCode: n } = e,
                r = new Set(c);
            r.delete(t),
                (c = r),
                !(function (e, t) {
                    k(e, t);
                    let n = a.get(e),
                        r = null == n ? void 0 : n.userStatus;
                    null != r &&
                        null == r.claimedAt &&
                        P(e, {
                            userStatus: {
                                ...r,
                                claimedAt: t.claimedAt
                            }
                        });
                })(t, n);
        },
        QUESTS_FETCH_REWARD_CODE_FAILURE: function (e) {
            let { questId: t } = e,
                n = new Set(c);
            n.delete(t), (c = n);
        },
        QUESTS_CLAIM_REWARD_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(u);
            n.add(t), (u = n);
        },
        QUESTS_CLAIM_REWARD_SUCCESS: function (e) {
            let { questId: t, entitlements: n } = e,
                r = new Set(u);
            r.delete(t),
                (u = r),
                !(function (e, t) {
                    let n = new Map(h);
                    n.set(e, t.items), (h = n);
                    let r = a.get(e),
                        i = null == r ? void 0 : r.userStatus;
                    if (null != i && null == i.claimedAt) {
                        var s;
                        let n = (function (e) {
                            var t;
                            let { entitlements: n } = e,
                                r = null === (t = n.items[0].tenantMetadata) || void 0 === t ? void 0 : t.questRewards.reward;
                            return (null == r ? void 0 : r.tag) !== A.w.REWARD_CODE ? null : r.rewardCode;
                        })({ entitlements: t });
                        null != n && k(e, n),
                            P(e, {
                                userStatus: {
                                    ...i,
                                    claimedAt: t.claimedAt,
                                    claimedTier: null !== (s = null == n ? void 0 : n.tier) && void 0 !== s ? s : null
                                }
                            });
                    }
                })(t, n);
        },
        QUESTS_CLAIM_REWARD_FAILURE: function (e) {
            let { questId: t } = e,
                n = new Set(u);
            n.delete(t), (u = n);
        },
        QUESTS_DISMISS_CONTENT_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(d);
            n.add(t), (d = n);
        },
        QUESTS_DISMISS_CONTENT_SUCCESS: function (e) {
            let { dismissedQuestUserStatus: t } = e;
            P(t.questId, { userStatus: t }), B(t.questId);
        },
        QUESTS_DISMISS_CONTENT_FAILURE: function (e) {
            let { questId: t } = e;
            B(t);
        },
        QUESTS_USER_STATUS_UPDATE: function (e) {
            let { user_status: t } = e,
                n = (0, L.T)({ location: x.dr.QUESTS_STORE });
            n.log('Received user status update for '.concat(t.quest_id), t);
            let r = (0, O.U3)(t);
            P(t.quest_id, { userStatus: r }), 0 === Object.keys(r.progress).length && w.has(r.questId) && (n.log('Removing optimistic progress for '.concat(r.questId)), w.delete(r.questId));
        },
        STREAM_CLOSE: function (e) {
            let { streamKey: t } = e;
            U(t);
        },
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function (e) {
            let { streamKey: t } = e;
            U(t);
        },
        QUESTS_PREVIEW_UPDATE_SUCCESS: function (e) {
            let { previewQuestUserStatus: t } = e;
            P(t.questId, { userStatus: t }), null == t.claimedAt && (_ = new Map(_)).delete(t.questId), null == t.enrolledAt && ((g = new Map(g)).delete(t.questId), D.ZP.getState().resetQuest(t.questId));
        },
        QUESTS_DELIVERY_OVERRIDE: function (e) {
            let { questId: t } = e;
            m = m === t ? null : t;
        },
        QUESTS_SELECT_TASK_PLATFORM: function (e) {
            let { questId: t, platform: n } = e;
            (g = new Map(g)), null == n ? g.delete(t) : g.set(t, n);
        },
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: function (e) {
            var t;
            let { questId: n, taskEventName: r, progress: i } = e,
                a = null !== (t = w.get(n)) && void 0 !== t ? t : new Map();
            a.set(r, i), w.set(n, a);
        }
    }));
