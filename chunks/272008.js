n.d(t, {
  AH: function() {
return T;
  },
  CS: function() {
return h;
  },
  EW: function() {
return y;
  },
  QB: function() {
return S;
  },
  T0: function() {
return C;
  },
  Tj: function() {
return g;
  },
  Wf: function() {
return O;
  },
  eT: function() {
return R;
  },
  gl: function() {
return N;
  },
  is: function() {
return p;
  },
  m0: function() {
return I;
  },
  nE: function() {
return v;
  },
  pf: function() {
return A;
  },
  xw: function() {
return m;
  }
}), n(411104);
var r = n(990547),
  i = n(544891),
  a = n(570140),
  o = n(479531),
  s = n(573261),
  l = n(617136),
  u = n(705006),
  c = n(569984),
  d = n(918701),
  _ = n(566078),
  E = n(981631),
  f = n(689938);
async function h(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  try {
let n = (await i.tn.post({
  url: E.ANM.QUEST_ON_CONSOLE_START(e),
  query: t ? {
    preview: t
  } : void 0,
  failImmediatelyWhenRateLimited: !0
})).body;
if (null != n.quest_user_status)
  a.Z.dispatch({
    type: 'QUESTS_USER_STATUS_UPDATE',
    user_status: n.quest_user_status
  });
else if (null != n.error_hints && n.error_hints.length > 0)
  return {
    errorHints: n.error_hints.slice(0, 5)
  };
  } catch (t) {
var n;
let e = new o.Z(t);
if (429 === e.status)
  return {
    errorHints: [f.Z.Messages.RATE_LIMITED]
  };
return {
  errorHints: [null !== (n = e.getAnyErrorMessage()) && void 0 !== n ? n : f.Z.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR]
};
  }
  return {
errorHints: []
  };
}
async function p(e) {
  await i.tn.post({
url: E.ANM.QUEST_ON_CONSOLE_STOP(e)
  });
}
async function m() {
  if (!c.Z.isFetchingCurrentQuests) {
a.Z.dispatch({
  type: 'QUESTS_FETCH_CURRENT_QUESTS_BEGIN'
}), u.Z.recordQuestRequestAttempt(E.ANM.QUESTS_CURRENT_QUESTS);
try {
  let e = (await i.tn.get({
    url: E.ANM.QUESTS_CURRENT_QUESTS
  })).body.quests.filter(e => (0, d.Qe)(e)).map(e => (0, d.WP)(e)).filter(e => {
    var t;
    return (null === (t = e.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || _.r.build(e.config).rewardPlatforms.length > 0;
  });
  a.Z.dispatch({
    type: 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS',
    quests: e
  }), u.Z.recordQuestRequestApiResponse(E.ANM.QUESTS_CURRENT_QUESTS, {
    wasSuccessful: !0
  });
} catch (e) {
  a.Z.dispatch({
    type: 'QUESTS_FETCH_CURRENT_QUESTS_FAILURE',
    error: new o.Z(e)
  }), u.Z.recordQuestRequestApiResponse(E.ANM.QUESTS_CURRENT_QUESTS, {
    wasSuccessful: !1
  });
}
  }
}
async function I(e) {
  let {
questId: t,
streamKey: n,
terminal: i = !1
  } = e;
  try {
var l;
let e = await s.Z.post({
  url: E.ANM.QUESTS_HEARTBEAT(t),
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
  userStatus: (0, d.U3)(e.body),
  questId: t,
  streamKey: n
});
  } catch (e) {
a.Z.dispatch({
  type: 'QUESTS_SEND_HEARTBEAT_FAILURE',
  error: new o.Z(e),
  questId: t,
  streamKey: n
});
  }
}
async function T(e, t) {
  if (null != t.questContentCTA && (0, l._3)({
  questId: e,
  questContent: t.questContent,
  questContentCTA: t.questContentCTA,
  questContentPosition: t.questContentPosition
}), !c.Z.isEnrolling(e)) {
a.Z.dispatch({
  type: 'QUESTS_ENROLL_BEGIN',
  questId: e
});
try {
  let n = await i.tn.post({
    url: E.ANM.QUESTS_ENROLL(e),
    body: {
      location: t.questContent
    }
  });
  a.Z.dispatch({
    type: 'QUESTS_ENROLL_SUCCESS',
    enrolledQuestUserStatus: (0, d.U3)(n.body)
  });
} catch (t) {
  a.Z.dispatch({
    type: 'QUESTS_ENROLL_FAILURE',
    questId: e
  });
}
  }
}
async function g(e, t, n) {
  if (!c.Z.isClaimingRewardCode(e)) {
a.Z.dispatch({
  type: 'QUESTS_CLAIM_REWARD_CODE_BEGIN',
  questId: e
});
try {
  let r = await i.tn.post({
    url: E.ANM.QUESTS_REWARD_CODE(e),
    body: {
      platform: t,
      location: n
    }
  });
  a.Z.dispatch({
    type: 'QUESTS_CLAIM_REWARD_CODE_SUCCESS',
    questId: e,
    rewardCode: (0, d.yI)(r.body)
  });
} catch (t) {
  throw a.Z.dispatch({
    type: 'QUESTS_CLAIM_REWARD_CODE_FAILURE',
    error: new o.Z(t),
    questId: e
  }), t;
}
  }
}
async function S(e, t, n) {
  if (!c.Z.isClaimingReward(e)) {
a.Z.dispatch({
  type: 'QUESTS_CLAIM_REWARD_BEGIN',
  questId: e
});
try {
  let r = await i.tn.post({
      url: E.ANM.QUESTS_CLAIM_REWARD(e),
      body: {
        platform: t,
        location: n
      }
    }),
    o = (0, d.Xh)(r.body);
  0 === o.errors.length ? a.Z.dispatch({
    type: 'QUESTS_CLAIM_REWARD_SUCCESS',
    questId: e,
    entitlements: o
  }) : a.Z.dispatch({
    type: 'QUESTS_CLAIM_REWARD_FAILURE',
    error: o.errors,
    questId: e
  });
} catch (t) {
  throw a.Z.dispatch({
    type: 'QUESTS_CLAIM_REWARD_FAILURE',
    error: new o.Z(t),
    questId: e
  }), t;
}
  }
}
async function A(e) {
  if (!c.Z.isFetchingRewardCode(e)) {
a.Z.dispatch({
  type: 'QUESTS_FETCH_REWARD_CODE_BEGIN',
  questId: e
});
try {
  let t = await i.tn.get({
    url: E.ANM.QUESTS_REWARD_CODE(e)
  });
  a.Z.dispatch({
    type: 'QUESTS_FETCH_REWARD_CODE_SUCCESS',
    questId: e,
    rewardCode: (0, d.yI)(t.body)
  });
} catch (t) {
  throw a.Z.dispatch({
    type: 'QUESTS_FETCH_REWARD_CODE_FAILURE',
    error: new o.Z(t),
    questId: e
  }), t;
}
  }
}
async function N(e, t) {
  let n = c.Z.isDismissingContent(e),
r = (0, d.GN)(t);
  if (!n && r) {
a.Z.dispatch({
  type: 'QUESTS_DISMISS_CONTENT_BEGIN',
  questId: e,
  content: t
});
try {
  let n = await i.tn.post({
    url: E.ANM.QUESTS_DISMISS_CONTENT(e, t),
    body: {}
  });
  a.Z.dispatch({
    type: 'QUESTS_DISMISS_CONTENT_SUCCESS',
    dismissedQuestUserStatus: (0, d.U3)(n.body)
  });
} catch (t) {
  a.Z.dispatch({
    type: 'QUESTS_DISMISS_CONTENT_FAILURE',
    error: new o.Z(t),
    questId: e
  });
}
  }
}

function v(e) {
  a.Z.dispatch({
type: 'QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE',
streamKey: e
  });
}
async function O(e) {
  try {
let t = await i.tn.post({
  url: E.ANM.QUESTS_PREVIEW_COMPLETE(e),
  body: {}
});
a.Z.dispatch({
  type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
  previewQuestUserStatus: (0, d.U3)(t.body)
});
  } catch (t) {
a.Z.dispatch({
  type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
  error: new o.Z(t),
  questId: e
});
  }
}
async function R(e) {
  try {
let t = await i.tn.del({
  url: E.ANM.QUESTS_PREVIEW_STATUS(e),
  body: {}
});
a.Z.dispatch({
  type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
  previewQuestUserStatus: (0, d.U3)(t.body)
});
  } catch (t) {
a.Z.dispatch({
  type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
  error: new o.Z(t),
  questId: e
});
  }
}
async function C(e) {
  try {
let t = await i.tn.del({
  url: E.ANM.QUESTS_PREVIEW_DISMISSIBILITY(e),
  body: {}
});
a.Z.dispatch({
  type: 'QUESTS_PREVIEW_UPDATE_SUCCESS',
  previewQuestUserStatus: (0, d.U3)(t.body)
});
  } catch (t) {
a.Z.dispatch({
  type: 'QUESTS_PREVIEW_UPDATE_FAILURE',
  error: new o.Z(t),
  questId: e
});
  }
}

function y(e) {
  a.Z.dispatch({
type: 'QUESTS_DELIVERY_OVERRIDE',
questId: e
  });
}