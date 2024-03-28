"use strict";
n.r(e), n.d(e, {
  getSafetyHubData: function() {
    return r
  },
  getSafetyHubDataForClassification: function() {
    return c
  },
  requestReview: function() {
    return d
  }
});
var i = n("544891"),
  a = n("570140"),
  u = n("118139"),
  l = n("314897"),
  s = n("788080"),
  o = n("981631");
async function r() {
  a.default.dispatch({
    type: "SAFETY_HUB_FETCH_START"
  });
  let t = l.default.getSuspendedUserToken(),
    e = null != t ? o.Endpoints.SAFETY_HUB_SUSPENDED : o.Endpoints.SAFETY_HUB,
    n = null != t ? i.HTTP.post({
      url: e,
      body: {
        token: t
      }
    }) : i.HTTP.get({
      url: e
    });
  await n.then(t => {
    let {
      body: e
    } = t, {
      classifications: n,
      guild_classifications: i,
      account_standing: u,
      is_dsa_eligible: l
    } = e, s = n.map(t => (f(t), t));
    a.default.dispatch({
      type: "SAFETY_HUB_FETCH_SUCCESS",
      classifications: s.concat(null != i ? i : []),
      accountStanding: u,
      isDsaEligible: l
    })
  }).catch(t => {
    var e, n;
    a.default.dispatch({
      type: "SAFETY_HUB_FETCH_FAILURE",
      error: null !== (n = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== n ? n : "Unknown error"
    })
  })
}
async function c(t) {
  a.default.dispatch({
    type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
    classificationId: t
  });
  let e = l.default.getSuspendedUserToken(),
    n = null != e ? o.Endpoints.SAFETY_HUB_SUSPENDED : o.Endpoints.SAFETY_HUB,
    u = null != e ? i.HTTP.post({
      url: n,
      body: {
        token: e
      }
    }) : i.HTTP.get({
      url: n
    });
  await u.then(e => {
    let {
      body: n
    } = e, {
      classifications: i,
      account_standing: u,
      is_dsa_eligible: l
    } = n, s = i.find(e => e.id === t);
    null != s ? (f(s), a.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
      classification: s,
      accountStanding: u,
      isDsaEligible: l
    })) : a.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: "Classification not found.",
      classificationId: t
    })
  }).catch(e => {
    var n, i;
    a.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: null !== (i = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : "Unknown error",
      classificationId: t
    })
  })
}

function f(t) {
  if (null != t.flagged_content && t.flagged_content.length > 0) {
    let e = t.flagged_content[0];
    e.attachments = e.attachments.filter(t => {
      let {
        filename: e
      } = t;
      return (0, u.isImageFile)(e) || (0, u.isVideoFile)(e)
    }), t.flagged_content = (0, s.isFlaggedContentEmpty)(e) ? [] : [e]
  }
}
async function d(t, e, n) {
  let u = l.default.getSuspendedUserToken(),
    s = null != u ? o.Endpoints.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t) : o.Endpoints.SAFETY_HUB_REQUEST_REVIEW(t),
    r = null != u ? i.HTTP.put({
      url: s,
      body: {
        signal: e,
        user_input: n,
        token: u
      }
    }) : i.HTTP.put({
      url: s,
      body: {
        signal: e,
        user_input: n
      }
    });
  a.default.dispatch({
    type: "SAFETY_HUB_REQUEST_REVIEW_START"
  }), await r.then(() => {
    a.default.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
      classificationId: t
    })
  }).catch(t => {
    var e, n;
    throw a.default.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
      error: null !== (n = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== n ? n : "Unknown error"
    }), t
  })
}