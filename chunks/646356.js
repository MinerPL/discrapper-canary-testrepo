"use strict";
a.r(e), a.d(e, {
  default: function() {
    return p
  }
});
var n = a("816494"),
  i = a.n(n),
  s = a("446674"),
  l = a("913144"),
  u = a("908539"),
  r = a("170213");
let o = {},
  c = {},
  d = {
    state: u.AccountStandingState.ALL_GOOD
  },
  _ = !1,
  S = !1,
  E = null,
  T = null,
  f = !1,
  A = !1,
  I = null,
  g = r.AppealIngestionSignal.DIDNT_VIOLATE_POLICY,
  N = "";
class C extends s.default.Store {
  isFetching() {
    return _
  }
  getClassifications() {
    return Object.values(o)
  }
  getClassification(t) {
    return o[t]
  }
  getAccountStanding() {
    return d
  }
  getFetchError() {
    return E
  }
  isInitialized() {
    return S
  }
  getClassificationRequestState(t) {
    return c[t]
  }
  getAppealClassificationId() {
    return T
  }
  getIsDsaEligible() {
    return f
  }
  getAppealSignal() {
    return g
  }
  getFreeTextAppealReason() {
    return N
  }
  getIsSubmitting() {
    return A
  }
  getSubmitError() {
    return I
  }
}
C.displayName = "SafetyHubStore";
var p = new C(l.default, {
  SAFETY_HUB_FETCH_START: function(t) {
    _ = !0
  },
  SAFETY_HUB_FETCH_SUCCESS: function(t) {
    let {
      classifications: e,
      accountStanding: a,
      isDsaEligible: n
    } = t;
    o = i(e, "id"), d = a, f = n, _ = !1, S = !0, E = null
  },
  SAFETY_HUB_FETCH_FAILURE: function(t) {
    let {
      error: e
    } = t;
    _ = !1, S = !1, E = e
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_START: function(t) {
    c[t.classificationId] = u.ClassificationRequestState.PENDING, _ = !0
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(t) {
    let {
      classification: e,
      accountStanding: a,
      isDsaEligible: n
    } = t;
    o[e.id] = e, c[e.id] = u.ClassificationRequestState.SUCCESS, d = a, _ = !1, E = null, f = n, S = !0
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(t) {
    let {
      error: e,
      classificationId: a
    } = t;
    _ = !1, E = e, c[a] = u.ClassificationRequestState.FAILED, S = !1
  },
  SAFETY_HUB_APPEAL_OPEN: function(t) {
    let {
      classificationId: e
    } = t;
    T = e
  },
  SAFETY_HUB_APPEAL_CLOSE: function() {
    T = null, g = r.AppealIngestionSignal.DIDNT_VIOLATE_POLICY, N = ""
  },
  SAFETY_HUB_APPEAL_SIGNAL_SELECT: function(t) {
    let {
      signal: e
    } = t;
    g = e
  },
  SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function(t) {
    let {
      userInput: e
    } = t;
    N = e
  },
  SAFETY_HUB_REQUEST_REVIEW_START: function(t) {
    let {} = t;
    A = !0, I = null
  },
  SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function(t) {
    let {
      classificationId: e
    } = t;
    A = !1, I = null, o[e].appeal_status = {
      status: u.AppealStatusType.REVIEW_PENDING
    }
  },
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: function(t) {
    let {
      error: e
    } = t;
    A = !1, I = e
  },
  LOGOUT: function() {
    _ = !1, o = {}, d = {
      state: u.AccountStandingState.ALL_GOOD
    }, T = null, g = r.AppealIngestionSignal.DIDNT_VIOLATE_POLICY, N = ""
  }
})