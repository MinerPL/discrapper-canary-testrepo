"use strict";
n.r(t), n.d(t, {
  getSafetyHubData: function() {
    return u
  },
  getSafetyHubDataForClassification: function() {
    return c
  },
  requestReview: function() {
    return f
  }
});
var i = n("872717"),
  a = n("913144"),
  l = n("651693"),
  s = n("271938"),
  r = n("736393"),
  o = n("49111");
async function u() {
  a.default.dispatch({
    type: "SAFETY_HUB_FETCH_START"
  });
  let e = s.default.getSuspendedUserToken(),
    t = null != e ? o.Endpoints.SAFETY_HUB_SUSPENDED : o.Endpoints.SAFETY_HUB,
    n = null != e ? i.HTTP.post({
      url: t,
      body: {
        token: e
      }
    }) : i.HTTP.get({
      url: t
    });
  await n.then(e => {
    let {
      body: t
    } = e, {
      classifications: n,
      guild_classifications: i,
      account_standing: l,
      is_dsa_eligible: s
    } = t, r = n.map(e => (d(e), e));
    a.default.dispatch({
      type: "SAFETY_HUB_FETCH_SUCCESS",
      classifications: r.concat(null != i ? i : []),
      accountStanding: l,
      isDsaEligible: s
    })
  }).catch(e => {
    var t, n;
    a.default.dispatch({
      type: "SAFETY_HUB_FETCH_FAILURE",
      error: null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : "Unknown error"
    })
  })
}
async function c(e) {
  a.default.dispatch({
    type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
    classificationId: e
  });
  let t = s.default.getSuspendedUserToken(),
    n = null != t ? o.Endpoints.SAFETY_HUB_SUSPENDED : o.Endpoints.SAFETY_HUB,
    l = null != t ? i.HTTP.post({
      url: n,
      body: {
        token: t
      }
    }) : i.HTTP.get({
      url: n
    });
  await l.then(t => {
    let {
      body: n
    } = t, {
      classifications: i,
      account_standing: l,
      is_dsa_eligible: s
    } = n, r = i.find(t => t.id === e);
    null != r ? (d(r), a.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
      classification: r,
      accountStanding: l,
      isDsaEligible: s
    })) : a.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: "Classification not found.",
      classificationId: e
    })
  }).catch(t => {
    var n, i;
    a.default.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: null !== (i = null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.message) && void 0 !== i ? i : "Unknown error",
      classificationId: e
    })
  })
}

function d(e) {
  if (null != e.flagged_content && e.flagged_content.length > 0) {
    let t = e.flagged_content[0];
    t.attachments = t.attachments.filter(e => {
      let {
        filename: t
      } = e;
      return (0, l.isImageFile)(t) || (0, l.isVideoFile)(t)
    }), e.flagged_content = (0, r.isFlaggedContentEmpty)(t) ? [] : [t]
  }
}
async function f(e, t, n) {
  let l = s.default.getSuspendedUserToken(),
    r = null != l ? o.Endpoints.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(e) : o.Endpoints.SAFETY_HUB_REQUEST_REVIEW(e),
    u = null != l ? i.HTTP.put({
      url: r,
      body: {
        signal: t,
        user_input: n,
        token: l
      }
    }) : i.HTTP.put({
      url: r,
      body: {
        signal: t,
        user_input: n
      }
    });
  a.default.dispatch({
    type: "SAFETY_HUB_REQUEST_REVIEW_START"
  }), await u.then(() => {
    a.default.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
      classificationId: e
    })
  }).catch(e => {
    var t, n;
    throw a.default.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
      error: null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : "Unknown error"
    }), e
  })
}