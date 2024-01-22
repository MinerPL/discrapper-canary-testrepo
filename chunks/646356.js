"use strict";
a.r(e), a.d(e, {
  default: function() {
    return m
  }
});
var n = a("816494"),
  i = a.n(n),
  s = a("446674"),
  l = a("913144"),
  r = a("908539"),
  u = a("170213");
let c = {},
  o = {},
  d = {
    state: r.AccountStandingState.ALL_GOOD
  },
  _ = !1,
  S = !1,
  f = null,
  E = null,
  T = !1,
  A = !1,
  I = null,
  g = u.AppealIngestionSignal.DIDNT_VIOLATE_POLICY,
  N = "";
class C extends s.default.Store {
  isFetching() {
    return _
  }
  getClassifications() {
    return Object.values(c)
  }
  getClassification(t) {
    return c[t]
  }
  getAccountStanding() {
    return d
  }
  getFetchError() {
    return f
  }
  isInitialized() {
    return S
  }
  getClassificationRequestState(t) {
    return o[t]
  }
  getAppealClassificationId() {
    return E
  }
  getIsDsaEligible() {
    return T
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
var m = new C(l.default, {
  SAFETY_HUB_FETCH_START: function(t) {
    _ = !0
  },
  SAFETY_HUB_FETCH_SUCCESS: function(t) {
    let {
      classifications: e,
      accountStanding: a
    } = t;
    c = i(e, "id"), d = a, _ = !1, S = !0, f = null
  },
  SAFETY_HUB_FETCH_FAILURE: function(t) {
    let {
      error: e
    } = t;
    _ = !1, S = !1, f = e
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_START: function(t) {
    o[t.classificationId] = r.ClassificationRequestState.PENDING, _ = !0
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(t) {
    let {
      classification: e,
      accountStanding: a,
      isDsaEligible: n
    } = t;
    c[e.id] = e, o[e.id] = r.ClassificationRequestState.SUCCESS, d = a, _ = !1, f = null, T = n
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(t) {
    let {
      error: e,
      classificationId: a
    } = t;
    _ = !1, f = e, o[a] = r.ClassificationRequestState.FAILED
  },
  SAFETY_HUB_APPEAL_OPEN: function(t) {
    let {
      classificationId: e
    } = t;
    E = e
  },
  SAFETY_HUB_APPEAL_CLOSE: function() {
    E = null, g = u.AppealIngestionSignal.DIDNT_VIOLATE_POLICY, N = ""
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
    let {} = t;
    A = !1, I = null
  },
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: function(t) {
    let {
      error: e
    } = t;
    A = !1, I = e
  },
  LOGOUT: function() {
    _ = !1, c = {}, d = {
      state: r.AccountStandingState.ALL_GOOD
    }, E = null, g = u.AppealIngestionSignal.DIDNT_VIOLATE_POLICY, N = ""
  }
})