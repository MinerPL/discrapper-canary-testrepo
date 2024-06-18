"use strict";
e.d(n, {
  NA: function() {
    return c
  },
  uR: function() {
    return E
  },
  yq: function() {
    return s
  }
});
var i = e(544891),
  u = e(570140),
  l = e(118139),
  a = e(314897),
  r = e(788080),
  o = e(981631);
async function s() {
  u.Z.dispatch({
    type: "SAFETY_HUB_FETCH_START"
  });
  let t = a.default.getSuspendedUserToken(),
    n = null != t ? o.ANM.SAFETY_HUB_SUSPENDED : o.ANM.SAFETY_HUB,
    e = null != t ? i.tn.post({
      url: n,
      body: {
        token: t
      }
    }) : i.tn.get({
      url: n
    });
  await e.then(t => {
    let {
      body: n
    } = t, {
      classifications: e,
      guild_classifications: i,
      account_standing: l,
      is_dsa_eligible: a
    } = n, r = e.map(t => (_(t), t));
    u.Z.dispatch({
      type: "SAFETY_HUB_FETCH_SUCCESS",
      classifications: r.concat(null != i ? i : []),
      accountStanding: l,
      isDsaEligible: a
    })
  }).catch(t => {
    var n, e;
    u.Z.dispatch({
      type: "SAFETY_HUB_FETCH_FAILURE",
      error: null !== (e = null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.message) && void 0 !== e ? e : "Unknown error"
    })
  })
}
async function c(t) {
  u.Z.dispatch({
    type: "SAFETY_HUB_FETCH_CLASSIFICATION_START",
    classificationId: t
  });
  let n = a.default.getSuspendedUserToken(),
    e = null != n ? o.ANM.SAFETY_HUB_SUSPENDED : o.ANM.SAFETY_HUB,
    l = null != n ? i.tn.post({
      url: e,
      body: {
        token: n
      }
    }) : i.tn.get({
      url: e
    });
  await l.then(n => {
    let {
      body: e
    } = n, {
      classifications: i,
      account_standing: l,
      is_dsa_eligible: a
    } = e, r = i.find(n => n.id === t);
    null != r ? (_(r), u.Z.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS",
      classification: r,
      accountStanding: l,
      isDsaEligible: a
    })) : u.Z.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: "Classification not found.",
      classificationId: t
    })
  }).catch(n => {
    var e, i;
    u.Z.dispatch({
      type: "SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE",
      error: null !== (i = null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.message) && void 0 !== i ? i : "Unknown error",
      classificationId: t
    })
  })
}

function _(t) {
  if (null != t.flagged_content && t.flagged_content.length > 0) {
    let n = t.flagged_content[0];
    n.attachments = n.attachments.filter(t => {
      let {
        filename: n
      } = t;
      return (0, l.CO)(n) || (0, l.NU)(n)
    }), t.flagged_content = (0, r.Vt)(n) ? [] : [n]
  }
}
async function E(t, n, e) {
  let l = a.default.getSuspendedUserToken(),
    r = null != l ? o.ANM.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW(t) : o.ANM.SAFETY_HUB_REQUEST_REVIEW(t),
    s = null != l ? i.tn.put({
      url: r,
      body: {
        signal: n,
        user_input: e,
        token: l
      }
    }) : i.tn.put({
      url: r,
      body: {
        signal: n,
        user_input: e
      }
    });
  u.Z.dispatch({
    type: "SAFETY_HUB_REQUEST_REVIEW_START"
  }), await s.then(() => {
    u.Z.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_SUCCESS",
      classificationId: t
    })
  }).catch(t => {
    var n, e;
    throw u.Z.dispatch({
      type: "SAFETY_HUB_REQUEST_REVIEW_FAILURE",
      error: null !== (e = null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.message) && void 0 !== e ? e : "Unknown error"
    }), t
  })
}