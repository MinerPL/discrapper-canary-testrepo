let r, i, a, o, s, l, u, c, d, _, E, f, h;
n(47120);
var p, m, I, T, g = n(392711),
  S = n(754700),
  A = n(887003),
  N = n(442837),
  v = n(570140),
  O = n(497505),
  R = n(918701),
  C = n(5881),
  y = n(46140);

function D() {
  r = !1, i = new Map(), a = 0, o = new Set(), s = new Set(), l = new Set(), u = new Set(), c = new Set(), _ = new Map(), E = new Map(), f = new Map(), h = null, d = new Set();
}
D();

function L(e, t) {
  let n = (i = new Map(i)).get(e);
  if (null != n) {
let r = {
  ...n,
  ...t
};
! function(e, t) {
  var n, r, i;
  if (null != t.userStatus)
    for (let a of Object.values(null !== (r = null === (n = t.userStatus) || void 0 === n ? void 0 : n.progress) && void 0 !== r ? r : {}))
      !(0, g.isNil)(a) && S.T.DESKTOP.has(a.eventName) && (null === (i = a.heartbeat) || void 0 === i ? void 0 : i.lastBeatAt) == null && d.delete(e);
}(e, t), i.set(e, r);
  }
}

function b(e, t) {
  let n = new Map(_);
  n.set(e, t), _ = n;
}

function M(e, t) {
  b(e, t);
  let n = i.get(e),
r = null == n ? void 0 : n.userStatus;
  null != r && null == r.claimedAt && L(e, {
userStatus: {
  ...r,
  claimedAt: t.claimedAt
}
  });
}

function P(e) {
  null != f.get(e) && (f = new Map(f)).delete(e);
}

function U(e) {
  let t = new Set(o);
  t.delete(e), o = t;
}

function w(e) {
  let t = new Set(c);
  t.delete(e), c = t;
}
class x extends(p = N.ZP.Store) {
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
return i.get(null != h ? h : '');
  }
  isEnrolling(e) {
return o.has(e);
  }
  isClaimingRewardCode(e) {
return s.has(e);
  }
  isClaimingReward(e) {
return l.has(e);
  }
  isFetchingRewardCode(e) {
return u.has(e);
  }
  isDismissingContent(e) {
return c.has(e);
  }
  getRewardCode(e) {
return _.get(e);
  }
  getRewards(e) {
return E.get(e);
  }
  getStreamHeartbeatFailure(e) {
return f.get(e);
  }
  getQuest(e) {
return i.get(e);
  }
  isProgressingOnDesktop(e) {
return d.has(e);
  }
}
T = 'QuestsStore', (I = 'displayName') in(m = x) ? Object.defineProperty(m, I, {
  value: T,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : m[I] = T, t.Z = new x(v.Z, {
  LOGOUT: function() {
D();
  },
  QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
a = Date.now(), r = !0;
  },
  QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
let {
  quests: t
} = e;
for (let e of (r = !1, i = new Map(), t))
  i.set(e.id, e), e.targetedContent.includes(O.jn.QUEST_BAR) && (0, C.T)({
    location: y.dr.QUESTS_STORE
  }).log('Delivered '.concat(e.config.messages.questName, ' (').concat(e.id, ')'));
  },
  QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
a = 0, r = !1;
  },
  QUESTS_SEND_HEARTBEAT_SUCCESS: function(e) {
let {
  questId: t,
  streamKey: n,
  userStatus: r
} = e;
d.add(t), L(t, {
  userStatus: r
}), P(n);
  },
  QUESTS_SEND_HEARTBEAT_FAILURE: function(e) {
let {
  questId: t,
  streamKey: n
} = e;
null == f.get(n) && (f = new Map(f)).set(n, {
  questId: t,
  streamKey: n,
  firstFailedAt: Date.now()
});
  },
  QUESTS_ENROLL_BEGIN: function(e) {
let {
  questId: t
} = e, n = new Set(o);
n.add(t), o = n;
  },
  QUESTS_ENROLL_SUCCESS: function(e) {
let {
  enrolledQuestUserStatus: t
} = e;
L(t.questId, {
  userStatus: t
}), U(t.questId);
  },
  QUESTS_ENROLL_FAILURE: function(e) {
let {
  questId: t
} = e;
U(t);
  },
  QUESTS_FETCH_REWARD_CODE_BEGIN: function(e) {
let {
  questId: t
} = e, n = new Set(u);
n.add(t), u = n;
  },
  QUESTS_FETCH_REWARD_CODE_SUCCESS: function(e) {
let {
  questId: t,
  rewardCode: n
} = e, r = new Set(u);
r.delete(t), u = r, M(t, n);
  },
  QUESTS_FETCH_REWARD_CODE_FAILURE: function(e) {
let {
  questId: t
} = e, n = new Set(u);
n.delete(t), u = n;
  },
  QUESTS_CLAIM_REWARD_CODE_BEGIN: function(e) {
let {
  questId: t
} = e, n = new Set(s);
n.add(t), s = n;
  },
  QUESTS_CLAIM_REWARD_CODE_SUCCESS: function(e) {
let {
  questId: t,
  rewardCode: n
} = e, r = new Set(s);
r.delete(t), s = r, M(t, n);
  },
  QUESTS_CLAIM_REWARD_CODE_FAILURE: function(e) {
let {
  questId: t
} = e, n = new Set(s);
n.delete(t), s = n;
  },
  QUESTS_CLAIM_REWARD_BEGIN: function(e) {
let {
  questId: t
} = e, n = new Set(l);
n.add(t), l = n;
  },
  QUESTS_CLAIM_REWARD_SUCCESS: function(e) {
let {
  questId: t,
  entitlements: n
} = e, r = new Set(l);
r.delete(t), l = r, ! function(e, t) {
  let n = new Map(E);
  n.set(e, t.items), E = n;
  let r = i.get(e),
    a = null == r ? void 0 : r.userStatus;
  if (null != a && null == a.claimedAt) {
    var o;
    let n = function(e) {
      var t;
      let {
        entitlements: n
      } = e, r = null === (t = n.items[0].tenantMetadata) || void 0 === t ? void 0 : t.questRewards.reward;
      return (null == r ? void 0 : r.tag) !== A.w.REWARD_CODE ? null : r.rewardCode;
    }({
      entitlements: t
    });
    null != n && b(e, n), L(e, {
      userStatus: {
        ...a,
        claimedAt: t.claimedAt,
        claimedTier: null !== (o = null == n ? void 0 : n.tier) && void 0 !== o ? o : null
      }
    });
  }
}(t, n);
  },
  QUESTS_CLAIM_REWARD_FAILURE: function(e) {
let {
  questId: t
} = e, n = new Set(l);
n.delete(t), l = n;
  },
  QUESTS_DISMISS_CONTENT_BEGIN: function(e) {
let {
  questId: t
} = e, n = new Set(c);
n.add(t), c = n;
  },
  QUESTS_DISMISS_CONTENT_SUCCESS: function(e) {
let {
  dismissedQuestUserStatus: t
} = e;
L(t.questId, {
  userStatus: t
}), w(t.questId);
  },
  QUESTS_DISMISS_CONTENT_FAILURE: function(e) {
let {
  questId: t
} = e;
w(t);
  },
  QUESTS_USER_STATUS_UPDATE: function(e) {
let {
  user_status: t
} = e;
(0, C.T)({
  location: y.dr.QUESTS_STORE
}).log('Received user status update for '.concat(t.quest_id), t), L(t.quest_id, {
  userStatus: (0, R.U3)(t)
});
  },
  STREAM_CLOSE: function(e) {
let {
  streamKey: t
} = e;
P(t);
  },
  QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: function(e) {
let {
  streamKey: t
} = e;
P(t);
  },
  QUESTS_PREVIEW_UPDATE_SUCCESS: function(e) {
let {
  previewQuestUserStatus: t
} = e;
L(t.questId, {
  userStatus: t
}), null == t.claimedAt && (_ = new Map(_)).delete(t.questId);
  },
  QUESTS_DELIVERY_OVERRIDE: function(e) {
let {
  questId: t
} = e;
h = h === t ? null : t;
  }
});