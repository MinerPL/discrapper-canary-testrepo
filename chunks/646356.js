"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var i = n("816494"),
  a = n.n(i),
  l = n("446674"),
  s = n("913144"),
  r = n("908539"),
  o = n("170213");
let u = {},
  c = {},
  d = {
    state: r.AccountStandingState.ALL_GOOD
  },
  f = !1,
  E = !1,
  _ = null,
  h = null,
  S = !1,
  m = !1,
  p = null,
  v = o.AppealIngestionSignal.DIDNT_VIOLATE_POLICY,
  A = "";
class C extends l.default.Store {
  isFetching() {
    return f
  }
  getClassifications() {
    return Object.values(u)
  }
  getClassification(e) {
    return u[e]
  }
  getAccountStanding() {
    return d
  }
  getFetchError() {
    return _
  }
  isInitialized() {
    return E
  }
  getClassificationRequestState(e) {
    return c[e]
  }
  getAppealClassificationId() {
    return h
  }
  getIsDsaEligible() {
    return S
  }
  getAppealSignal() {
    return v
  }
  getFreeTextAppealReason() {
    return A
  }
  getIsSubmitting() {
    return m
  }
  getSubmitError() {
    return p
  }
}
C.displayName = "SafetyHubStore";
var T = new C(s.default, {
  SAFETY_HUB_FETCH_START: function(e) {
    f = !0
  },
  SAFETY_HUB_FETCH_SUCCESS: function(e) {
    let {
      classifications: t,
      accountStanding: n,
      isDsaEligible: i
    } = e;
    u = a(t, "id"), d = n, S = i, f = !1, E = !0, _ = null
  },
  SAFETY_HUB_FETCH_FAILURE: function(e) {
    let {
      error: t
    } = e;
    f = !1, E = !1, _ = t
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_START: function(e) {
    c[e.classificationId] = r.ClassificationRequestState.PENDING, f = !0
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS: function(e) {
    let {
      classification: t,
      accountStanding: n,
      isDsaEligible: i
    } = e;
    u[t.id] = t, c[t.id] = r.ClassificationRequestState.SUCCESS, d = n, f = !1, _ = null, S = i, E = !0
  },
  SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE: function(e) {
    let {
      error: t,
      classificationId: n
    } = e;
    f = !1, _ = t, c[n] = r.ClassificationRequestState.FAILED, E = !1
  },
  SAFETY_HUB_APPEAL_OPEN: function(e) {
    let {
      classificationId: t
    } = e;
    h = t
  },
  SAFETY_HUB_APPEAL_CLOSE: function() {
    h = null, v = o.AppealIngestionSignal.DIDNT_VIOLATE_POLICY, A = ""
  },
  SAFETY_HUB_APPEAL_SIGNAL_SELECT: function(e) {
    let {
      signal: t
    } = e;
    v = t
  },
  SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE: function(e) {
    let {
      userInput: t
    } = e;
    A = t
  },
  SAFETY_HUB_REQUEST_REVIEW_START: function(e) {
    let {} = e;
    m = !0, p = null
  },
  SAFETY_HUB_REQUEST_REVIEW_SUCCESS: function(e) {
    let {
      classificationId: t
    } = e;
    m = !1, p = null, u[t].appeal_status = {
      status: r.AppealStatusType.REVIEW_PENDING
    }
  },
  SAFETY_HUB_REQUEST_REVIEW_FAILURE: function(e) {
    let {
      error: t
    } = e;
    m = !1, p = t
  },
  LOGOUT: function() {
    f = !1, u = {}, d = {
      state: r.AccountStandingState.ALL_GOOD
    }, h = null, v = o.AppealIngestionSignal.DIDNT_VIOLATE_POLICY, A = ""
  }
})