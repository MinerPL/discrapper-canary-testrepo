n.d(t, {
    AH: function () {
        return T;
    },
    Ag: function () {
        return x;
    },
    CS: function () {
        return E;
    },
    EW: function () {
        return D;
    },
    FI: function () {
        return P;
    },
    OR: function () {
        return L;
    },
    QB: function () {
        return b;
    },
    T0: function () {
        return O;
    },
    Wf: function () {
        return C;
    },
    eT: function () {
        return R;
    },
    gl: function () {
        return A;
    },
    is: function () {
        return v;
    },
    lL: function () {
        return k;
    },
    m0: function () {
        return S;
    },
    nE: function () {
        return N;
    },
    pf: function () {
        return y;
    },
    qm: function () {
        return w;
    },
    w: function () {
        return M;
    },
    xw: function () {
        return I;
    }
}),
    n(411104);
var r = n(990547),
    i = n(544891),
    a = n(570140),
    s = n(479531),
    o = n(573261),
    l = n(617136),
    u = n(705006),
    c = n(569984),
    d = n(497505),
    f = n(918701),
    _ = n(184299),
    h = n(720293),
    p = n(566078),
    m = n(981631),
    g = n(388032);
async function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await i.tn.post({
                url: m.ANM.QUEST_ON_CONSOLE_START(e),
                query: t ? { preview: t } : void 0,
                failImmediatelyWhenRateLimited: !0
            })
        ).body;
        if (null != n.quest_user_status)
            a.Z.dispatch({
                type: 'QUESTS_USER_STATUS_UPDATE',
                user_status: n.quest_user_status
            });
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0) return { errorHints: n.error_hints_v2.slice(0, 5) };
    } catch (r) {
        var n;
        let e = new s.Z(r);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: d.HW.RATE_LIMITED,
                        message: g.intl.string(g.t['Whhv4+']),
                        connected_account_id: '',
                        connected_account_type: ''
                    }
                ]
            };
        let t = null !== (n = e.getAnyErrorMessage()) && void 0 !== n ? n : g.intl.string(g.t.xSCvBQ);
        return {
            errorHints: [
                {
                    type: d.HW.GENERIC,
                    message: t,
                    connected_account_id: '',
                    connected_account_type: ''
                }
            ]
        };
    }
    return { errorHints: [] };
}
async function v(e) {
    await i.tn.post({ url: m.ANM.QUEST_ON_CONSOLE_STOP(e) });
}
async function I() {
    if (!c.Z.isFetchingCurrentQuests) {
        a.Z.dispatch({ type: 'QUESTS_FETCH_CURRENT_QUESTS_BEGIN' }), u.Z.recordQuestRequestAttempt(m.ANM.QUESTS_CURRENT_QUESTS);
        try {
            let e = (await i.tn.get({ url: m.ANM.QUESTS_CURRENT_QUESTS })).body.quests
                .filter((e) => (0, f.Qe)(e))
                .map((e) => (0, f.WP)(e))
                .filter((e) => {
                    var t;
                    return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || p.r.build(e.config).rewardPlatforms.length > 0;
                });
            a.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS',
                quests: e
            }),
                u.Z.recordQuestRequestApiResponse(m.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !0 });
        } catch (e) {
            a.Z.dispatch({
                type: 'QUESTS_FETCH_CURRENT_QUESTS_FAILURE',
                error: new s.Z(e)
            }),
                u.Z.recordQuestRequestApiResponse(m.ANM.QUESTS_CURRENT_QUESTS, { wasSuccessful: !1 });
        }
    }
}
async function S(e) {
    let { questId: t, streamKey: n, terminal: i = !1 } = e;
    try {
        var l;
        let e = await o.Z.post({
            url: m.ANM.QUESTS_HEARTBEAT(t),
            body: {
                stream_key: n,
                terminal: i
            },
            trackedActionData: {
                event: r.NetworkActionNames.QUEST_HEARTBEAT,
                properties: {
                    quest_id: t,
                    terminal: i,
                    is_overlay: __OVERLAY__,
                    stack_trace: null !== (l = Error().stack) && void 0 !== l ? l : '',
                    is_playtime_eligible: !0
                }
            }
        });
        a.Z.dispatch({
            type: 'QUESTS_SEND_HEARTBEAT_SUCCESS',
            userStatus: (0, f.U3)(e.body),
            questId: t,
            streamKey: n
        });
    } catch (e) {
        a.Z.dispatch({
            type: 'QUESTS_SEND_HEARTBEAT_FAILURE',
            error: new s.Z(e),
            questId: t,
            streamKey: n
        });
    }
}
async function T(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, l._3)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex
            }),
        !c.Z.isEnrolling(e))
    ) {
        a.Z.dispatch({
            type: 'QUESTS_ENROLL_BEGIN',
            questId: e
        });
        try {
            let n = await i.tn.post({
                url: m.ANM.QUESTS_ENROLL(e),
                body: { location: t.questContent }
            });
            a.Z.dispatch({
                type: 'QUESTS_ENROLL_SUCCESS',
                enrolledQuestUserStatus: (0, f.U3)(n.body)
            });
        } catch (t) {
            a.Z.dispatch({
                type: 'QUESTS_ENROLL_FAILURE',
                questId: e
            });
        }
    }
}
async function b(e, t, n) {
    if (!c.Z.isClaimingReward(e)) {
        a.Z.dispatch({
            type: 'QUESTS_CLAIM_REWARD_BEGIN',
            questId: e
        });
        try {
            let r = await i.tn.post({
                    url: m.ANM.QUESTS_CLAIM_REWARD(e),
                    body: {
                        platform: t,
                        location: n
                    }
                }),
                s = (0, f.Xh)(r.body);
            return (
                0 === s.errors.length
                    ? a.Z.dispatch({
                          type: 'QUESTS_CLAIM_REWARD_SUCCESS',
                          questId: e,
                          entitlements: s
                      })
                    : a.Z.dispatch({
                          type: 'QUESTS_CLAIM_REWARD_FAILURE',
                          error: s.errors,
                          questId: e
                      }),
                s
            );
        } catch (t) {
            throw (
                (a.Z.dispatch({
                    type: 'QUESTS_CLAIM_REWARD_FAILURE',
                    error: new s.Z(t),
                    questId: e
                }),
                t)
            );
        }
    }
}
async function y(e) {
    if (!c.Z.isFetchingRewardCode(e)) {
        a.Z.dispatch({
            type: 'QUESTS_FETCH_REWARD_CODE_BEGIN',
            questId: e
        });
        try {
            let t = await i.tn.get({ url: m.ANM.QUESTS_REWARD_CODE(e) });
            a.Z.dispatch({
                type: 'QUESTS_FETCH_REWARD_CODE_SUCCESS',
                questId: e,
                rewardCode: (0, f.yI)(t.body)
            });
        } catch (t) {
            throw (
                (a.Z.dispatch({
                    type: 'QUESTS_FETCH_REWARD_CODE_FAILURE',
                    error: new s.Z(t),
                    questId: e
                }),
                t)
            );
        }
    }
}
async function A(e, t) {
    let n = c.Z.isDismissingContent(e),
        r = (0, f.GN)(t);
    if (!n && r) {
        a.Z.dispatch({
            type: 'QUESTS_DISMISS_CONTENT_BEGIN',
            questId: e,
            content: t
        });
        try {
            let n = await i.tn.post({
                url: m.ANM.QUESTS_DISMISS_CONTENT(e, t),
                body: {}
            });
            a.Z.dispatch({
                type: 'QUESTS_DISMISS_CONTENT_SUCCESS',
                dismissedQuestUserStatus: (0, f.U3)(n.body)
            });
        } catch (t) {
            a.Z.dispatch({
                type: 'QUESTS_DISMISS_CONTENT_FAILURE',
                error: new s.Z(t),
                questId: e
            });
        }
    }
}
function N(e) {
    a.Z.dispatch({
        type: 'QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE',
        streamKey: e
    });
}
async function C(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await i.tn.post({
            url: m.ANM.QUESTS_PREVIEW_COMPLETE(e),
            body: { percent: t }
        });
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, f.U3)(n.body)
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new s.Z(t),
            questId: e
        });
    }
}
async function R(e) {
    try {
        let t = await i.tn.del({
            url: m.ANM.QUESTS_PREVIEW_STATUS(e),
            body: {}
        });
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, f.U3)(t.body)
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new s.Z(t),
            questId: e
        });
    }
}
async function O(e) {
    try {
        a.Z.dispatch({ type: 'QUESTS_DOCK_RESET_SOFT_DISMISSAL' });
        let t = await i.tn.del({
            url: m.ANM.QUESTS_PREVIEW_DISMISSIBILITY(e),
            body: {}
        });
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
            previewQuestUserStatus: (0, f.U3)(t.body)
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
            error: new s.Z(t),
            questId: e
        });
    }
}
function D(e) {
    a.Z.dispatch({
        type: 'QUESTS_DELIVERY_OVERRIDE',
        questId: e
    });
}
function L(e, t) {
    a.Z.dispatch({
        type: 'QUESTS_SELECT_TASK_PLATFORM',
        questId: e,
        platform: t
    });
}
async function x() {
    if (!c.Z.isFetchingClaimedQuests) {
        a.Z.dispatch({ type: 'QUESTS_FETCH_CLAIMED_QUESTS_BEGIN' });
        try {
            let e = (await i.tn.get({ url: m.ANM.QUESTS_CLAIMED_QUESTS })).body.quests.map((e) => (0, f.hQ)(e));
            a.Z.dispatch({
                type: 'QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS',
                quests: e
            });
        } catch (e) {
            a.Z.dispatch({
                type: 'QUESTS_FETCH_CLAIMED_QUESTS_FAILURE',
                error: new s.Z(e)
            });
        }
    }
}
function w(e, t, n) {
    a.Z.dispatch({
        type: 'QUESTS_UPDATE_OPTIMISTIC_PROGRESS',
        questId: e,
        taskEventName: t,
        progress: n
    });
}
async function M(e) {
    a.Z.dispatch({
        type: 'QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN',
        placement: e
    });
    try {
        let t = await i.tn.get({ url: m.ANM.QUEST_FETCH_QUEST_TO_DELIVER(e) });
        a.Z.dispatch({
            type: 'QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS',
            quest: (0, f.q6)(t.body.quest),
            placement: e
        });
    } catch (t) {
        a.Z.dispatch({
            type: 'QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE',
            error: new s.Z(t),
            placement: e
        });
    }
}
async function P(e, t) {
    await i.tn.post({
        url: m.ANM.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t }
    });
}
async function k(e) {
    let t = (0, h.z)(h.i.VIDEO_PLAYER_TRANSCRIPT, e);
    if (null == t) {
        _.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: _.iF.FAILURE
        });
        return;
    }
    _.ZP.getState().setTranscriptAsset({
        questId: e.id,
        fetchStatus: _.iF.FETCHING
    });
    try {
        let n = await i.tn.get({ url: t.url });
        _.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: _.iF.SUCCESS,
            text: n.text
        });
    } catch (t) {
        _.ZP.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: _.iF.FAILURE
        });
    }
}
