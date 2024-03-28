"use strict";
n.r(e);
var i, a, u, l, s = n("979079"),
  o = n.n(s),
  r = n("442837"),
  c = n("570140"),
  f = n("531441"),
  d = n("800530");
let S = {},
  _ = {},
  E = {
    state: f.AccountStandingState.ALL_GOOD
  },
  p = !1,
  T = !1,
  A = null,
  g = null,
  F = !1,
  C = !1,
  I = null,
  H = d.AppealIngestionSignal.DIDNT_VIOLATE_POLICY,
  U = "";
class b extends(l = r.default.Store) {
  isFetching() {
    return p
  }
  getClassifications() {
    return Object.values(S)
  }
  getClassification(t) {
    return S[t]
  }
  getAccountStanding() {
    return E
  }
  getFetchError() {
    return A
  }
  isInitialized() {
    return T
  }
  getClassificationRequestState(t) {
    return _[t]
  }
  getAppealClassificationId() {
    return g
  }
  getIsDsaEligible() {
    return F
  }
  getAppealSignal() {
    return H
  }
  getFreeTextAppealReason() {
    return U
  }
  getIsSubmitting() {
    return C
  }
  getSubmitError() {
    return I
  }
}
u = "SafetyHubStore", (a = "displayName") in(i = b) ? Object.defineProperty(i, a, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = u, e.default = new b(c.default, {
  SAFETY_HUB_FETCH_START: function(t) {
    p = !0
  },
  SAFETY_HUB_FETCH_SUCCESS: function(t) {
    let {
      classifications: e,
      accountStanding: n,
      isDsaEligible: i
    } = t;
    S = o()(e, "id"), E = n, F = i, p = !1, T = !0, A = null
  },
  SAFETY_HUB_FETCH_FAILURE: function(t) {
    let {
      error: e
    } = t;
    p = !1, T = !1, A = e
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_START: function(t) {
    _[t.classificationId] = f.ClassificationRequestState.PENDING, p = !0
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(t) {
    let {
      classification: e,
      accountStanding: n,
      isDsaEligible: i
    } = t;
    S[e.id] = e, _[e.id] = f.ClassificationRequestState.SUCCESS, E = n, p = !1, A = null, F = i, T = !0
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(t) {
    let {
      error: e,
      classificationId: n
    } = t;
    p = !1, A = e, _[n] = f.ClassificationRequestState.FAILED, T = !1
  },
  SAFETY_HUB_APPEAL_OPEN: function(t) {
    let {
      classificationId: e
    } = t;
    g = e
  },
  SAFETY_HUB_APPEAL_CLOSE: function() {
    g = null, H = d.AppealIngestionSignal.DIDNT_VIOLATE_POLICY, U = ""
  },
  SAFETY_HUB_APPEAL_SIGNAL_SELECT: function(t) {
    let {
      signal: e
    } = t;
    H = e
  },
  SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function(t) {
    let {
      userInput: e
    } = t;
    U = e
  },
  SAFETY_HUB_REQUEST_REVIEW_START: function(t) {
    let {} = t;
    C = !0, I = null
  },
  SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function(t) {
    let {
      classificationId: e
    } = t;
    C = !1, I = null, S[e].appeal_status = {
      status: f.AppealStatusType.REVIEW_PENDING
    }
  },
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: function(t) {
    let {
      error: e
    } = t;
    C = !1, I = e
  },
  LOGOUT: function() {
    p = !1, S = {}, E = {
      state: f.AccountStandingState.ALL_GOOD
    }, g = null, H = d.AppealIngestionSignal.DIDNT_VIOLATE_POLICY, U = ""
  }
})