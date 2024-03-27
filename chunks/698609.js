"use strict";
n.r(t), n.d(t, {
  useSafetyHubClassification: function() {
    return d
  },
  useActiveSafetyHubClassifications: function() {
    return f
  },
  useExpiredSafetyHubClassifications: function() {
    return E
  },
  useSafetyHubAppealSignal: function() {
    return _
  }
});
var i = n("884691"),
  a = n("446674"),
  l = n("299039"),
  s = n("781324"),
  r = n("997510"),
  o = n("646356"),
  u = n("736393");

function c() {
  let e = (0, a.useStateFromStoresArray)([o.default], () => o.default.getClassifications());
  return e.sort((e, t) => l.default.extractTimestamp(t.id) - l.default.extractTimestamp(e.id))
}

function d(e) {
  let t = (0, a.useStateFromStores)([o.default], () => o.default.getClassification(e)),
    n = (0, a.useStateFromStores)([o.default], () => o.default.getClassificationRequestState(e)),
    l = (0, a.useStateFromStores)([o.default], () => o.default.getIsDsaEligible()),
    c = (0, r.useIsSafetyHubGuildViolationInAppAppealsEnabled)("classification_detail");
  return i.useEffect(() => {
    void 0 === t && null == n && s.getSafetyHubDataForClassification(e)
  }, [e, t, n]), {
    classification: t,
    classificationRequestState: n,
    isDsaEligible: l,
    isAppealEligible: l && null != t && null == t.appeal_status && (!(0, u.isGuildClassification)(t) || c)
  }
}

function f() {
  let e = c(),
    t = new Date;
  return e.filter(e => new Date(e.max_expiration_time) > t)
}

function E() {
  let e = c(),
    t = new Date;
  return e.filter(e => new Date(e.max_expiration_time) <= t)
}

function _() {
  let e = (0, a.useStateFromStores)([o.default], () => o.default.getAppealSignal());
  return e
}