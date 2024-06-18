"use strict";
let i, r, s, o, a, l, u, _, d, c, E, I;
n(47120);
var T, h, S, f, N = n(887003),
  A = n(442837),
  m = n(570140),
  O = n(497505),
  R = n(918701),
  C = n(5881),
  p = n(46140);

function g() {
  i = !1, r = new Map, s = 0, o = new Set, a = new Set, l = new Set, u = new Set, _ = new Set, d = new Map, c = new Map, E = new Map, I = null
}

function L(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      updateProgress: !1
    },
    i = (r = new Map(r)).get(e);
  if (null != i) {
    var s, o;
    let a = null === (s = i.userStatus) || void 0 === s ? void 0 : s.streamProgressSeconds,
      l = null === (o = i.userStatus) || void 0 === o ? void 0 : o.progress,
      u = null == a && null == l,
      _ = {
        ...i,
        ...t
      };
    !(n.updateProgress || null == _.userStatus || u || null != _.userStatus.completedAt || null == _.userStatus.enrolledAt) && null != _.userStatus && (_.userStatus = {
      ..._.userStatus,
      streamProgressSeconds: null != a ? a : 0,
      progress: null != l ? l : {}
    }), r.set(e, _)
  }
}

function v(e, t) {
  let n = new Map(d);
  n.set(e, t), d = n
}

function D(e, t) {
  v(e, t);
  let n = r.get(e),
    i = null == n ? void 0 : n.userStatus;
  null != i && null == i.claimedAt && L(e, {
    userStatus: {
      ...i,
      claimedAt: t.claimedAt
    }
  })
}
g();

function M(e) {
  null != E.get(e) && (E = new Map(E)).delete(e)
}

function P(e) {
  let t = new Set(o);
  t.delete(e), o = t
}

function y(e) {
  let t = new Set(_);
  t.delete(e), _ = t
}
class U extends(T = A.ZP.Store) {
  get quests() {
    return r
  }
  get isFetchingCurrentQuests() {
    return i
  }
  get lastFetchedCurrentQuests() {
    return s
  }
  get questDeliveryOverride() {
    return r.get(null != I ? I : "")
  }
  isEnrolling(e) {
    return o.has(e)
  }
  isClaimingRewardCode(e) {
    return a.has(e)
  }
  isClaimingReward(e) {
    return l.has(e)
  }
  isFetchingRewardCode(e) {
    return u.has(e)
  }
  isDismissingContent(e) {
    return _.has(e)
  }
  getRewardCode(e) {
    return d.get(e)
  }
  getRewards(e) {
    return c.get(e)
  }
  getStreamHeartbeatFailure(e) {
    return E.get(e)
  }
  getQuest(e) {
    return r.get(e)
  }
}
f = "QuestsStore", (S = "displayName") in(h = U) ? Object.defineProperty(h, S, {
  value: f,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : h[S] = f, t.Z = new U(m.Z, {
  LOGOUT: function() {
    g()
  },
  QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
    s = Date.now(), i = !0
  },
  QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
    let {
      quests: t
    } = e;
    for (let e of (i = !1, r = new Map, t)) r.set(e.id, e), e.targetedContent.includes(O.jn.QUEST_BAR) && (0, C.T)({
      location: p.dr.QUESTS_STORE
    }).log("Delivered ".concat(e.config.messages.questName, " (").concat(e.id, ")"))
  },
  QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
    s = 0, i = !1
  },
  QUESTS_SEND_HEARTBEAT_SUCCESS: function(e) {
    let {
      questId: t,
      streamKey: n,
      userStatus: i
    } = e;
    L(t, {
      userStatus: i
    }, {
      updateProgress: !0
    }), M(n)
  },
  QUESTS_SEND_HEARTBEAT_FAILURE: function(e) {
    let {
      questId: t,
      streamKey: n
    } = e;
    null == E.get(n) && (E = new Map(E)).set(n, {
      questId: t,
      streamKey: n,
      firstFailedAt: Date.now()
    })
  },
  QUESTS_ENROLL_BEGIN: function(e) {
    let {
      questId: t
    } = e, n = new Set(o);
    n.add(t), o = n
  },
  QUESTS_ENROLL_SUCCESS: function(e) {
    let {
      enrolledQuestUserStatus: t
    } = e;
    L(t.questId, {
      userStatus: t
    }), P(t.questId)
  },
  QUESTS_ENROLL_FAILURE: function(e) {
    let {
      questId: t
    } = e;
    P(t)
  },
  QUESTS_FETCH_REWARD_CODE_BEGIN: function(e) {
    let {
      questId: t
    } = e, n = new Set(u);
    n.add(t), u = n
  },
  QUESTS_FETCH_REWARD_CODE_SUCCESS: function(e) {
    let {
      questId: t,
      rewardCode: n
    } = e, i = new Set(u);
    i.delete(t), u = i, D(t, n)
  },
  QUESTS_FETCH_REWARD_CODE_FAILURE: function(e) {
    let {
      questId: t
    } = e, n = new Set(u);
    n.delete(t), u = n
  },
  QUESTS_CLAIM_REWARD_CODE_BEGIN: function(e) {
    let {
      questId: t
    } = e, n = new Set(a);
    n.add(t), a = n
  },
  QUESTS_CLAIM_REWARD_CODE_SUCCESS: function(e) {
    let {
      questId: t,
      rewardCode: n
    } = e, i = new Set(a);
    i.delete(t), a = i, D(t, n)
  },
  QUESTS_CLAIM_REWARD_CODE_FAILURE: function(e) {
    let {
      questId: t
    } = e, n = new Set(a);
    n.delete(t), a = n
  },
  QUESTS_CLAIM_REWARD_BEGIN: function(e) {
    let {
      questId: t
    } = e, n = new Set(l);
    n.add(t), l = n
  },
  QUESTS_CLAIM_REWARD_SUCCESS: function(e) {
    let {
      questId: t,
      entitlements: n
    } = e, i = new Set(l);
    i.delete(t), l = i, ! function(e, t) {
      let n = new Map(c);
      n.set(e, t.items), c = n;
      let i = r.get(e),
        s = null == i ? void 0 : i.userStatus;
      if (null != s && null == s.claimedAt) {
        var o;
        let n = function(e) {
          var t;
          let {
            entitlements: n
          } = e, i = null === (t = n.items[0].tenantMetadata) || void 0 === t ? void 0 : t.questRewards.reward;
          return (null == i ? void 0 : i.tag) !== N.w.REWARD_CODE ? null : i.rewardCode
        }({
          entitlements: t
        });
        null != n && v(e, n), L(e, {
          userStatus: {
            ...s,
            claimedAt: t.claimedAt,
            claimedTier: null !== (o = null == n ? void 0 : n.tier) && void 0 !== o ? o : null
          }
        })
      }
    }(t, n)
  },
  QUESTS_CLAIM_REWARD_FAILURE: function(e) {
    let {
      questId: t
    } = e, n = new Set(l);
    n.delete(t), l = n
  },
  QUESTS_DISMISS_CONTENT_BEGIN: function(e) {
    let {
      questId: t
    } = e, n = new Set(_);
    n.add(t), _ = n
  },
  QUESTS_DISMISS_CONTENT_SUCCESS: function(e) {
    let {
      dismissedQuestUserStatus: t
    } = e;
    L(t.questId, {
      userStatus: t
    }), y(t.questId)
  },
  QUESTS_DISMISS_CONTENT_FAILURE: function(e) {
    let {
      questId: t
    } = e;
    y(t)
  },
  QUESTS_USER_STATUS_UPDATE: function(e) {
    let {
      user_status: t
    } = e;
    (0, C.T)({
      location: p.dr.QUESTS_STORE
    }).log("Received user status update for ".concat(t.quest_id), t), L(t.quest_id, {
      userStatus: (0, R.U3)(t)
    }, {
      updateProgress: !0
    })
  },
  STREAM_CLOSE: function(e) {
    let {
      streamKey: t
    } = e;
    M(t)
  },
  QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function(e) {
    let {
      streamKey: t
    } = e;
    M(t)
  },
  QUESTS_PREVIEW_UPDATE_SUCCESS: function(e) {
    let {
      previewQuestUserStatus: t
    } = e;
    L(t.questId, {
      userStatus: t
    }), null == t.claimedAt && (d = new Map(d)).delete(t.questId)
  },
  QUESTS_OPTIMISTIC_PROGRESS_UPDATE: function(e) {
    let {
      userStatus: t
    } = e;
    L(t.questId, {
      userStatus: t
    }, {
      updateProgress: !0
    })
  },
  QUESTS_DELIVERY_OVERRIDE: function(e) {
    let {
      questId: t
    } = e;
    I = I === t ? null : t
  }
})