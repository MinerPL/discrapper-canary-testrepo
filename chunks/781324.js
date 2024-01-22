"use strict";
a.r(e), a.d(e, {
  getSafetyHubData: function() {
    return u
  },
  getSafetyHubDataForClassification: function() {
    return c
  },
  requestReview: function() {
    return d
  }
});
var n = a("872717"),
  i = a("913144"),
  s = a("651693"),
  l = a("736393"),
  r = a("49111");
async function u() {
  i.default.dispatch({
    type: "SAFETY_HUB_FETCH_START"
  }), await n.default.get({
    url: r.Endpoints.SAFETY_HUB
  }).then(t => {
    let {
      body: e
    } = t, {
      classifications: a,
      guild_classifications: n,
      account_standing: s
    } = e, l = a.map(t => (o(t), t));
    i.default.dispatch({
      type: "SAFETY_HUB_FETCH_SUCCESS",
      classifications: l.concat(null != n ? n : []),
      accountStanding: s
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
  }), await n.default.get({
    url: r.Endpoints.SAFETY_HUB
  }).then(e => {
    let {
      body: a
    } = e, {
      classifications: n,
      account_standing: s,
      is_dsa_eligible: l
    } = a, r = n.find(e => e.id === t);
    null != r ? (o(r), i.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
      classification: r,
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

function o(t) {
  if (null != t.flagged_content && t.flagged_content.length > 0) {
    let e = t.flagged_content[0];
    e.attachments = e.attachments.filter(t => {
      let {
        filename: e
      } = t;
      return (0, s.isImageFile)(e)
    }), t.flagged_content = (0, l.isFlaggedContentEmpty)(e) ? [] : [e]
  }
}
async function d(t, e, a) {
  i.default.dispatch({
    type: "SAFETY_HUB_REQUEST_REVIEW_START"
  }), await n.default.put({
    url: r.Endpoints.SAFETY_HUB_REQUEST_REVIEW(t),
    body: {
      signal: e,
      user_input: a
    }
  }).then(() => {
    i.default.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS"
    })
  }).catch(t => {
    var e, a;
    i.default.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
      error: null !== (a = null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.message) && void 0 !== a ? a : "Unknown error"
    })
  })
}