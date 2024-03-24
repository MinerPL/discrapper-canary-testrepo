"use strict";
a.r(e), a.d(e, {
  useSafetyHubClassification: function() {
    return d
  },
  useActiveSafetyHubClassifications: function() {
    return _
  },
  useExpiredSafetyHubClassifications: function() {
    return S
  },
  useSafetyHubAppealSignal: function() {
    return E
  }
});
var n = a("884691"),
  i = a("446674"),
  s = a("299039"),
  l = a("781324"),
  u = a("997510"),
  r = a("646356"),
  o = a("736393");

function c() {
  let t = (0, i.useStateFromStoresArray)([r.default], () => r.default.getClassifications());
  return t.sort((t, e) => s.default.extractTimestamp(e.id) - s.default.extractTimestamp(t.id))
}

function d(t) {
  let e = (0, i.useStateFromStores)([r.default], () => r.default.getClassification(t)),
    a = (0, i.useStateFromStores)([r.default], () => r.default.getClassificationRequestState(t)),
    s = (0, i.useStateFromStores)([r.default], () => r.default.getIsDsaEligible()),
    c = (0, u.useIsSafetyHubGuildViolationInAppAppealsEnabled)("classification_detail");
  return n.useEffect(() => {
    void 0 === e && null == a && l.getSafetyHubDataForClassification(t)
  }, [t, e, a]), {
    classification: e,
    classificationRequestState: a,
    isDsaEligible: s,
    isAppealEligible: s && null != e && null == e.appeal_status && (!(0, o.isGuildClassification)(e) || c)
  }
}

function _() {
  let t = c(),
    e = new Date;
  return t.filter(t => new Date(t.max_expiration_time) > e)
}

function S() {
  let t = c(),
    e = new Date;
  return t.filter(t => new Date(t.max_expiration_time) <= e)
}

function E() {
  let t = (0, i.useStateFromStores)([r.default], () => r.default.getAppealSignal());
  return t
}