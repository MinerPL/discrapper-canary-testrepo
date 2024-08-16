let r, i, a, s, o, l, u, c, d, _, E, f, h;
n(47120);
var p,
    m,
    I,
    T,
    g = n(392711),
    S = n(754700),
    A = n(887003),
    N = n(442837),
    v = n(570140),
    O = n(497505),
    R = n(918701),
    C = n(5881),
    y = n(46140);
function D() {
    (r = !1), (i = new Map()), (a = 0), (s = new Set()), (o = new Set()), (l = new Set()), (u = new Set()), (d = new Map()), (_ = new Map()), (E = new Map()), (f = null), (h = new Map()), (c = new Set());
}
D();
function L(e, t) {
    let n = (i = new Map(i)).get(e);
    if (null != n) {
        let r = {
            ...n,
            ...t
        };
        !(function (e, t) {
            var n, r, i;
            if (null != t.userStatus) for (let a of Object.values(null !== (r = null === (n = t.userStatus) || void 0 === n ? void 0 : n.progress) && void 0 !== r ? r : {})) !(0, g.isNil)(a) && S.T.DESKTOP.has(a.eventName) && (null === (i = a.heartbeat) || void 0 === i ? void 0 : i.lastBeatAt) == null && c.delete(e);
        })(e, t),
            i.set(e, r);
    }
}
function b(e, t) {
    let n = new Map(d);
    n.set(e, t), (d = n);
}
function M(e) {
    null != E.get(e) && (E = new Map(E)).delete(e);
}
function P(e) {
    let t = new Set(s);
    t.delete(e), (s = t);
}
function U(e) {
    let t = new Set(u);
    t.delete(e), (u = t);
}
class w extends (p = N.ZP.Store) {
    get quests() {
        return i;
    }
    get isFetchingCurrentQuests() {
        return r;
    }
    get lastFetchedCurrentQuests() {
        return a;
    }
    get questDeliveryOverride() {
        return i.get(null != f ? f : '');
    }
    isEnrolling(e) {
        return s.has(e);
    }
    isClaimingReward(e) {
        return o.has(e);
    }
    isFetchingRewardCode(e) {
        return l.has(e);
    }
    isDismissingContent(e) {
        return u.has(e);
    }
    getRewardCode(e) {
        return d.get(e);
    }
    getRewards(e) {
        return _.get(e);
    }
    getStreamHeartbeatFailure(e) {
        return E.get(e);
    }
    getQuest(e) {
        return i.get(e);
    }
    isProgressingOnDesktop(e) {
        return c.has(e);
    }
    selectedTaskPlatform(e) {
        var t;
        return null !== (t = h.get(e)) && void 0 !== t ? t : null;
    }
}
(T = 'QuestsStore'),
    (I = 'displayName') in (m = w)
        ? Object.defineProperty(m, I, {
              value: T,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[I] = T),
    (t.Z = new w(v.Z, {
        LOGOUT: function () {
            D();
        },
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function () {
            (a = Date.now()), (r = !0);
        },
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function (e) {
            let { quests: t } = e;
            for (let e of ((r = !1), (i = new Map()), t)) i.set(e.id, e), e.targetedContent.includes(O.jn.QUEST_BAR) && (0, C.T)({ location: y.dr.QUESTS_STORE }).log('Delivered '.concat(e.config.messages.questName, ' (').concat(e.id, ')'));
        },
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function () {
            (a = 0), (r = !1);
        },
        QUESTS_SEND_HEARTBEAT_SUCCESS: function (e) {
            let { questId: t, streamKey: n, userStatus: r } = e;
            c.add(t), L(t, { userStatus: r }), M(n);
        },
        QUESTS_SEND_HEARTBEAT_FAILURE: function (e) {
            let { questId: t, streamKey: n } = e;
            null == E.get(n) &&
                (E = new Map(E)).set(n, {
                    questId: t,
                    streamKey: n,
                    firstFailedAt: Date.now()
                });
        },
        QUESTS_ENROLL_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(s);
            n.add(t), (s = n);
        },
        QUESTS_ENROLL_SUCCESS: function (e) {
            let { enrolledQuestUserStatus: t } = e;
            L(t.questId, { userStatus: t }), P(t.questId);
        },
        QUESTS_ENROLL_FAILURE: function (e) {
            let { questId: t } = e;
            P(t);
        },
        QUESTS_FETCH_REWARD_CODE_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(l);
            n.add(t), (l = n);
        },
        QUESTS_FETCH_REWARD_CODE_SUCCESS: function (e) {
            let { questId: t, rewardCode: n } = e,
                r = new Set(l);
            r.delete(t),
                (l = r),
                !(function (e, t) {
                    b(e, t);
                    let n = i.get(e),
                        r = null == n ? void 0 : n.userStatus;
                    null != r &&
                        null == r.claimedAt &&
                        L(e, {
                            userStatus: {
                                ...r,
                                claimedAt: t.claimedAt
                            }
                        });
                })(t, n);
        },
        QUESTS_FETCH_REWARD_CODE_FAILURE: function (e) {
            let { questId: t } = e,
                n = new Set(l);
            n.delete(t), (l = n);
        },
        QUESTS_CLAIM_REWARD_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(o);
            n.add(t), (o = n);
        },
        QUESTS_CLAIM_REWARD_SUCCESS: function (e) {
            let { questId: t, entitlements: n } = e,
                r = new Set(o);
            r.delete(t),
                (o = r),
                !(function (e, t) {
                    let n = new Map(_);
                    n.set(e, t.items), (_ = n);
                    let r = i.get(e),
                        a = null == r ? void 0 : r.userStatus;
                    if (null != a && null == a.claimedAt) {
                        var s;
                        let n = (function (e) {
                            var t;
                            let { entitlements: n } = e,
                                r = null === (t = n.items[0].tenantMetadata) || void 0 === t ? void 0 : t.questRewards.reward;
                            return (null == r ? void 0 : r.tag) !== A.w.REWARD_CODE ? null : r.rewardCode;
                        })({ entitlements: t });
                        null != n && b(e, n),
                            L(e, {
                                userStatus: {
                                    ...a,
                                    claimedAt: t.claimedAt,
                                    claimedTier: null !== (s = null == n ? void 0 : n.tier) && void 0 !== s ? s : null
                                }
                            });
                    }
                })(t, n);
        },
        QUESTS_CLAIM_REWARD_FAILURE: function (e) {
            let { questId: t } = e,
                n = new Set(o);
            n.delete(t), (o = n);
        },
        QUESTS_DISMISS_CONTENT_BEGIN: function (e) {
            let { questId: t } = e,
                n = new Set(u);
            n.add(t), (u = n);
        },
        QUESTS_DISMISS_CONTENT_SUCCESS: function (e) {
            let { dismissedQuestUserStatus: t } = e;
            L(t.questId, { userStatus: t }), U(t.questId);
        },
        QUESTS_DISMISS_CONTENT_FAILURE: function (e) {
            let { questId: t } = e;
            U(t);
        },
        QUESTS_USER_STATUS_UPDATE: function (e) {
            let { user_status: t } = e;
            (0, C.T)({ location: y.dr.QUESTS_STORE }).log('Received user status update for '.concat(t.quest_id), t), L(t.quest_id, { userStatus: (0, R.U3)(t) });
        },
        STREAM_CLOSE: function (e) {
            let { streamKey: t } = e;
            M(t);
        },
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function (e) {
            let { streamKey: t } = e;
            M(t);
        },
        QUESTS_PREVIEW_UPDATE_SUCCESS: function (e) {
            let { previewQuestUserStatus: t } = e;
            L(t.questId, { userStatus: t }), null == t.claimedAt && (d = new Map(d)).delete(t.questId), null == t.enrolledAt && (h = new Map(h)).delete(t.questId);
        },
        QUESTS_DELIVERY_OVERRIDE: function (e) {
            let { questId: t } = e;
            f = f === t ? null : t;
        },
        QUESTS_SELECT_TASK_PLATFORM: function (e) {
            let { questId: t, platform: n } = e;
            (h = new Map(h)), null == n ? h.delete(t) : h.set(t, n);
        }
    }));
