"use strict";
n.r(e), n.d(e, {
  useActiveSafetyHubClassifications: function() {
    return d
  },
  useExpiredSafetyHubClassifications: function() {
    return S
  },
  useSafetyHubAppealSignal: function() {
    return _
  },
  useSafetyHubClassification: function() {
    return f
  }
});
var i = n("470079"),
  a = n("442837"),
  u = n("709054"),
  l = n("103879"),
  s = n("364226"),
  o = n("236289"),
  r = n("788080");

function c() {
  return (0, a.useStateFromStoresArray)([o.default], () => o.default.getClassifications()).sort((t, e) => u.default.extractTimestamp(e.id) - u.default.extractTimestamp(t.id))
}

function f(t) {
  let e = (0, a.useStateFromStores)([o.default], () => o.default.getClassification(t)),
    n = (0, a.useStateFromStores)([o.default], () => o.default.getClassificationRequestState(t)),
    u = (0, a.useStateFromStores)([o.default], () => o.default.getIsDsaEligible()),
    c = (0, s.useIsSafetyHubGuildViolationInAppAppealsEnabled)("classification_detail");
  return i.useEffect(() => {
    void 0 === e && null == n && l.getSafetyHubDataForClassification(t)
  }, [t, e, n]), {
    classification: e,
    classificationRequestState: n,
    isDsaEligible: u,
    isAppealEligible: u && null != e && null == e.appeal_status && (!(0, r.isGuildClassification)(e) || c)
  }
}

function d() {
  let t = c(),
    e = new Date;
  return t.filter(t => new Date(t.max_expiration_time) > e)
}

function S() {
  let t = c(),
    e = new Date;
  return t.filter(t => new Date(t.max_expiration_time) <= e)
}

function _() {
  return (0, a.useStateFromStores)([o.default], () => o.default.getAppealSignal())
}