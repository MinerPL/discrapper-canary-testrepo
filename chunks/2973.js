"use strict";
E.r(_), E.d(_, {
  default: function() {
    return R
  }
}), E("222007");
var t = E("446674"),
  o = E("913144");
let n = !1,
  r = new Map,
  a = 0,
  i = new Set,
  I = new Set,
  s = new Set,
  T = new Map;

function S(e, _) {
  r = new Map(r);
  let E = r.get(e);
  null != E && r.set(e, {
    ...E,
    ..._
  })
}

function N(e, _) {
  let E = new Map(T);
  E.set(e, _), T = E;
  let t = r.get(e),
    o = null == t ? void 0 : t.userStatus;
  if (null != o && null == o.claimedAt) {
    let E = {
      userStatus: {
        ...o,
        claimedAt: _.claimedAt
      }
    };
    S(e, E)
  }
}

function O(e) {
  let _ = new Set(i);
  _.delete(e), i = _
}
class A extends t.default.Store {
  get quests() {
    return r
  }
  get isFetchingCurrentQuests() {
    return n
  }
  get lastFetchedCurrentQuests() {
    return a
  }
  isEnrolling(e) {
    return i.has(e)
  }
  isClaimingRewardCode(e) {
    return I.has(e)
  }
  isFetchingRewardCode(e) {
    return s.has(e)
  }
  getRewardCode(e) {
    return T.get(e)
  }
}
A.displayName = "QuestsStore";
var R = new A(o.default, {
  LOGOUT: function() {
    n = !1, r = new Map, a = 0, i = new Set
  },
  QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
    a = Date.now(), n = !0
  },
  QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
    let {
      quests: _
    } = e;
    for (let e of (n = !1, r = new Map, _)) r.set(e.id, e)
  },
  QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
    a = 0, n = !1
  },
  QUESTS_SEND_HEARTBEAT_SUCCESS: function(e) {
    let {
      questId: _,
      userStatus: E
    } = e;
    S(_, {
      userStatus: E
    })
  },
  QUESTS_ENROLL_BEGIN: function(e) {
    let {
      questId: _
    } = e, E = new Set(i);
    E.add(_), i = E
  },
  QUESTS_ENROLL_SUCCESS: function(e) {
    let {
      enrolledQuestUserStatus: _
    } = e;
    S(_.questId, {
      userStatus: _
    }), O(_.questId)
  },
  QUESTS_ENROLL_FAILURE: function(e) {
    let {
      questId: _
    } = e;
    O(_)
  },
  QUESTS_FETCH_REWARD_CODE_BEGIN: function(e) {
    let {
      questId: _
    } = e, E = new Set(s);
    E.add(_), s = E
  },
  QUESTS_FETCH_REWARD_CODE_SUCCESS: function(e) {
    let {
      questId: _,
      rewardCode: E
    } = e, t = new Set(s);
    t.delete(_), s = t, N(_, E)
  },
  QUESTS_FETCH_REWARD_CODE_FAILURE: function(e) {
    let {
      questId: _
    } = e, E = new Set(s);
    E.delete(_), s = E
  },
  QUESTS_CLAIM_REWARD_CODE_BEGIN: function(e) {
    let {
      questId: _
    } = e, E = new Set(I);
    E.add(_), I = E
  },
  QUESTS_CLAIM_REWARD_CODE_SUCCESS: function(e) {
    let {
      questId: _,
      rewardCode: E
    } = e, t = new Set(I);
    t.delete(_), I = t, N(_, E)
  },
  QUESTS_CLAIM_REWARD_CODE_FAILURE: function(e) {
    let {
      questId: _
    } = e, E = new Set(I);
    E.delete(_), I = E
  }
})