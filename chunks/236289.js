"use strict";
var i, u, l, a, r = e(979079),
  o = e.n(r),
  s = e(442837),
  c = e(570140),
  _ = e(531441),
  E = e(800530);
let S = {},
  d = {},
  f = {
    state: _.Sn.ALL_GOOD
  },
  A = !1,
  T = !1,
  p = null,
  U = null,
  g = !1,
  F = !1,
  I = null,
  C = E.bK.DIDNT_VIOLATE_POLICY,
  H = "";
class b extends(a = s.ZP.Store) {
  isFetching() {
    return A
  }
  getClassifications() {
    return Object.values(S)
  }
  getClassification(t) {
    return S[t]
  }
  getAccountStanding() {
    return f
  }
  getFetchError() {
    return p
  }
  isInitialized() {
    return T
  }
  getClassificationRequestState(t) {
    return d[t]
  }
  getAppealClassificationId() {
    return U
  }
  getIsDsaEligible() {
    return g
  }
  getAppealSignal() {
    return C
  }
  getFreeTextAppealReason() {
    return H
  }
  getIsSubmitting() {
    return F
  }
  getSubmitError() {
    return I
  }
}
l = "SafetyHubStore", (u = "displayName") in(i = b) ? Object.defineProperty(i, u, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[u] = l, n.Z = new b(c.Z, {
  SAFETY_HUB_FETCH_START: function(t) {
    A = !0
  },
  SAFETY_HUB_FETCH_SUCCESS: function(t) {
    let {
      classifications: n,
      accountStanding: e,
      isDsaEligible: i
    } = t;
    S = o()(n, "id"), f = e, g = i, A = !1, T = !0, p = null
  },
  SAFETY_HUB_FETCH_FAILURE: function(t) {
    let {
      error: n
    } = t;
    A = !1, T = !1, p = n
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_START: function(t) {
    d[t.classificationId] = _.OY.PENDING, A = !0
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(t) {
    let {
      classification: n,
      accountStanding: e,
      isDsaEligible: i
    } = t;
    S[n.id] = n, d[n.id] = _.OY.SUCCESS, f = e, A = !1, p = null, g = i, T = !0
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(t) {
    let {
      error: n,
      classificationId: e
    } = t;
    A = !1, p = n, d[e] = _.OY.FAILED, T = !1
  },
  SAFETY_HUB_APPEAL_OPEN: function(t) {
    let {
      classificationId: n
    } = t;
    U = n
  },
  SAFETY_HUB_APPEAL_CLOSE: function() {
    U = null, C = E.bK.DIDNT_VIOLATE_POLICY, H = ""
  },
  SAFETY_HUB_APPEAL_SIGNAL_SELECT: function(t) {
    let {
      signal: n
    } = t;
    C = n
  },
  SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function(t) {
    let {
      userInput: n
    } = t;
    H = n
  },
  SAFETY_HUB_REQUEST_REVIEW_START: function(t) {
    let {} = t;
    F = !0, I = null
  },
  SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function(t) {
    let {
      classificationId: n
    } = t;
    F = !1, I = null, S[n].appeal_status = {
      status: _.hQ.REVIEW_PENDING
    }
  },
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: function(t) {
    let {
      error: n
    } = t;
    F = !1, I = n
  },
  LOGOUT: function() {
    A = !1, S = {}, f = {
      state: _.Sn.ALL_GOOD
    }, U = null, C = E.bK.DIDNT_VIOLATE_POLICY, H = ""
  }
})