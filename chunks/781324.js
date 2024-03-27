"use strict";
a.r(e), a.d(e, {
  getSafetyHubData: function() {
    return o
  },
  getSafetyHubDataForClassification: function() {
    return c
  },
  requestReview: function() {
    return _
  }
});
var n = a("872717"),
  i = a("913144"),
  s = a("651693"),
  l = a("271938"),
  u = a("736393"),
  r = a("49111");
async function o() {
  i.default.dispatch({
    type: "SAFETY_HUB_FETCH_START"
  });
  let t = l.default.getSuspendedUserToken(),
    e = null != t ? r.Endpoints.SAFETY_HUB_SUSPENDED : r.Endpoints.SAFETY_HUB,
    a = null != t ? n.HTTP.post({
      url: e,
      body: {
        token: t
      }
    }) : n.HTTP.get({
      url: e
    });
  await a.then(t => {
    let {
      body: e
    } = t, {
      classifications: a,
      guild_classifications: n,
      account_standing: s,
      is_dsa_eligible: l
    } = e, u = a.map(t => (d(t), t));
    i.default.dispatch({
      type: "SAFETY_HUB_FETCH_SUCCESS",
      classifications: u.concat(null != n ? n : []),
      accountStanding: s,
      isDsaEligible: l
    })
  }).catch(t => {
    var e, a;
    i.default.dispatch({
      type: "SAFETY_HUB_FETCH_FAILURE",
      error: null !== (a = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== a ? a : "Unknown error"
    })
  })
}
async function c(t) {
  i.default.dispatch({
    type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
    classificationId: t
  });
  let e = l.default.getSuspendedUserToken(),
    a = null != e ? r.Endpoints.SAFETY_HUB_SUSPENDED : r.Endpoints.SAFETY_HUB,
    s = null != e ? n.HTTP.post({
      url: a,
      body: {
        token: e
      }
    }) : n.HTTP.get({
      url: a
    });
  await s.then(e => {
    let {
      body: a
    } = e, {
      classifications: n,
      account_standing: s,
      is_dsa_eligible: l
    } = a, u = n.find(e => e.id === t);
    null != u ? (d(u), i.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
      classification: u,
      accountStanding: s,
      isDsaEligible: l
    })) : i.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: "Classification not found.",
      classificationId: t
    })
  }).catch(e => {
    var a, n;
    i.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: null !== (n = null == e ? void 0 : null === (a = e.body) || void 0 === a ? void 0 : a.message) && void 0 !== n ? n : "Unknown error",
      classificationId: t
    })
  })
}

function d(t) {
  if (null != t.flagged_content && t.flagged_content.length > 0) {
    let e = t.flagged_content[0];
    e.attachments = e.attachments.filter(t => {
      let {
        filename: e
      } = t;
      return (0, s.isImageFile)(e) || (0, s.isVideoFile)(e)
    }), t.flagged_content = (0, u.isFlaggedContentEmpty)(e) ? [] : [e]
  }
}
async function _(t, e, a) {
  let s = l.default.getSuspendedUserToken(),
    u = null != s ? r.Endpoints.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t) : r.Endpoints.SAFETY_HUB_REQUEST_REVIEW(t),
    o = null != s ? n.HTTP.put({
      url: u,
      body: {
        signal: e,
        user_input: a,
        token: s
      }
    }) : n.HTTP.put({
      url: u,
      body: {
        signal: e,
        user_input: a
      }
    });
  i.default.dispatch({
    type: "SAFETY_HUB_REQUEST_REVIEW_START"
  }), await o.then(() => {
    i.default.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
      classificationId: t
    })
  }).catch(t => {
    var e, a;
    throw i.default.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
      error: null !== (a = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== a ? a : "Unknown error"
    }), t
  })
}