"use strict";
n.r(t), n.d(t, {
  claimDropsRewardCode: function() {
    return u
  },
  enrollDropsUser: function() {
    return E
  },
  fetchCodePlatformAvailability: function() {
    return o
  },
  fetchDropsEligibility: function() {
    return r
  },
  fetchDropsUserStatus: function() {
    return d
  },
  fetchEnrolledUser: function() {
    return f
  },
  fetchProgress: function() {
    return T
  },
  sendHeartbeat: function() {
    return _
  },
  unenrollDropsUser: function() {
    return c
  }
});
var s = n("544891"),
  a = n("570140"),
  l = n("199902"),
  i = n("981631");
let r = async e => {
  let t = !1;
  try {
    t = (await s.HTTP.get({
      url: i.Endpoints.DROPS_ELIGIBILITY,
      query: {
        drops_quest_id: e
      }
    })).body.eligible
  } catch (e) {
    t = !1
  }
  a.default.dispatch({
    type: "DROPS_ELIGIBILITY_FETCH_SUCCESS",
    isEligible: t,
    dropsQuestId: e
  })
}, o = async e => {
  let t = [];
  try {
    t = (await s.HTTP.get({
      url: i.Endpoints.DROPS_PLATFORM_AVAILABILITY,
      query: {
        drops_quest_id: e
      }
    })).body.available_platforms
  } catch (e) {
    t = []
  }
  a.default.dispatch({
    type: "DROPS_PLATFORM_AVAILABILITY_SUCCESS",
    availablePlatforms: t
  })
}, u = async (e, t) => {
  try {
    let n = await s.HTTP.post({
      url: i.Endpoints.DROPS_CLAIM_REWARD_CODE,
      query: {
        drops_quest_id: e,
        platform: t
      }
    });
    return a.default.dispatch({
      type: "DROPS_REWARD_CODE_CLAIM_SUCCESS",
      rewardCode: n.body.code
    }), n.body.code
  } catch (e) {
    throw e
  }
}, d = async () => {
  try {
    let e = await s.HTTP.get({
      url: i.Endpoints.DROPS_USER_STATUS
    });
    a.default.dispatch({
      type: "DROPS_USER_STATUS_FETCH_SUCCESS",
      codes: e.body
    })
  } catch (e) {
    a.default.dispatch({
      type: "DROPS_USER_STATUS_FETCH_FAILURE"
    })
  }
}, c = async e => {
  await s.HTTP.del({
    url: i.Endpoints.DROPS_ENROLL_USER,
    query: {
      drops_quest_id: e
    }
  }), a.default.dispatch({
    type: "DROPS_UNENROLL_USER",
    dropsQuestId: e
  }), await d()
}, f = async e => {
  let t = await s.HTTP.get({
    url: i.Endpoints.DROPS_ENROLL_USER,
    query: {
      drops_quest_id: e
    }
  });
  await a.default.dispatch({
    type: "DROPS_ENROLLED_USER_FETCH_SUCCESS",
    enrolledUser: t.body.user,
    isEnrolled: t.body.enrolled,
    dropsQuestId: e
  })
}, E = async e => {
  await s.HTTP.post({
    url: i.Endpoints.DROPS_ENROLL_USER,
    query: {
      drops_quest_id: e
    }
  }), a.default.dispatch({
    type: "DROPS_ENROLL_SUCCESS"
  })
}, _ = async (e, t, n) => {
  let r = l.default.getViewerIds(t);
  try {
    let l = await s.HTTP.post({
      url: i.Endpoints.DROPS_HEARTBEAT(e),
      query: {
        stream_key: t,
        application_id: n,
        viewer_count: r.length
      },
      retries: 2
    });
    a.default.dispatch({
      type: "DROPS_HEARTBEAT_SUCCESS",
      dropsQuestId: e,
      completed: l.body.completed,
      progress: l.body.progress
    })
  } catch (t) {
    a.default.dispatch({
      type: "DROPS_HEARTBEAT_FAILURE",
      dropsQuestId: e,
      statusCode: null == t ? void 0 : t.status
    })
  }
}, T = async e => {
  try {
    let t = await s.HTTP.get({
      url: i.Endpoints.DROPS_PROGRESS(e)
    });
    a.default.dispatch({
      type: "DROPS_FETCH_PROGRESS_SUCCESS",
      dropsQuestId: e,
      completed: t.body.completed,
      progress: t.body.progress
    })
  } catch (t) {
    a.default.dispatch({
      type: "DROPS_FETCH_PROGRESS_FAILURE",
      dropsQuestId: e
    })
  }
}