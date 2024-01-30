"use strict";
E.r(_), E.d(_, {
  fetchCurrentQuests: function() {
    return I
  },
  sendHeartbeat: function() {
    return s
  },
  enrollInQuest: function() {
    return T
  },
  claimQuestRewardCode: function() {
    return S
  },
  fetchQuestRewardCode: function() {
    return N
  }
});
var t = E("872717"),
  o = E("913144"),
  n = E("599417"),
  r = E("2973"),
  a = E("227231"),
  i = E("49111");
async function I() {
  o.default.dispatch({
    type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
  });
  try {
    let e = await t.default.get({
        url: i.Endpoints.QUESTS_CURRENT_QUESTS
      }),
      _ = e.body.quests.map(e => (0, a.questWithUserStatusFromServer)(e)),
      E = _.filter(e => {
        var _;
        return (null === (_ = e.userStatus) || void 0 === _ ? void 0 : _.claimedAt) != null || e.config.rewardCodePlatforms.length > 0
      });
    o.default.dispatch({
      type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
      quests: E
    })
  } catch (e) {
    o.default.dispatch({
      type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
      error: new n.default(e)
    })
  }
}
async function s(e) {
  let {
    questId: _,
    streamKey: E,
    applicationId: r
  } = e;
  try {
    let e = await t.default.post({
      url: i.Endpoints.QUESTS_HEARTBEAT(_),
      body: {
        stream_key: E,
        application_id: r
      }
    });
    o.default.dispatch({
      type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
      userStatus: (0, a.questUserStatusFromServer)(e.body),
      applicationId: r,
      questId: _,
      streamKey: E
    })
  } catch (e) {
    o.default.dispatch({
      type: "QUESTS_SEND_HEARTBEAT_FAILURE",
      error: new n.default(e),
      questId: _,
      streamKey: E
    })
  }
}
async function T(e) {
  let _ = r.default.isEnrolling(e);
  if (!_) {
    o.default.dispatch({
      type: "QUESTS_ENROLL_BEGIN",
      questId: e
    });
    try {
      let _ = await t.default.post({
        url: i.Endpoints.QUESTS_ENROLL(e)
      });
      o.default.dispatch({
        type: "QUESTS_ENROLL_SUCCESS",
        enrolledQuestUserStatus: (0, a.questUserStatusFromServer)(_.body)
      })
    } catch (_) {
      o.default.dispatch({
        type: "QUESTS_ENROLL_FAILURE",
        questId: e
      })
    }
  }
}
async function S(e, _) {
  let E = r.default.isClaimingRewardCode(e);
  if (!E) {
    o.default.dispatch({
      type: "QUESTS_CLAIM_REWARD_CODE_BEGIN",
      questId: e
    });
    try {
      let E = await t.default.post({
        url: i.Endpoints.QUESTS_REWARD_CODE(e),
        body: {
          platform: _
        }
      });
      o.default.dispatch({
        type: "QUESTS_CLAIM_REWARD_CODE_SUCCESS",
        questId: e,
        rewardCode: (0, a.questsRewardCodeFromServer)(E.body)
      })
    } catch (_) {
      throw o.default.dispatch({
        type: "QUESTS_CLAIM_REWARD_CODE_FAILURE",
        error: new n.default(_),
        questId: e
      }), _
    }
  }
}
async function N(e) {
  let _ = r.default.isFetchingRewardCode(e);
  if (!_) {
    o.default.dispatch({
      type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
      questId: e
    });
    try {
      let _ = await t.default.get({
        url: i.Endpoints.QUESTS_REWARD_CODE(e)
      });
      o.default.dispatch({
        type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
        questId: e,
        rewardCode: (0, a.questsRewardCodeFromServer)(_.body)
      })
    } catch (_) {
      throw o.default.dispatch({
        type: "QUESTS_FETCH_REWARD_CODE_FAILURE",
        error: new n.default(_),
        questId: e
      }), _
    }
  }
}