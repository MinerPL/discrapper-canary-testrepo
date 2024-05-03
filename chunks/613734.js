"use strict";
n.r(e), n.d(e, {
  useActiveSafetyHubClassifications: function() {
    return _
  },
  useExpiredSafetyHubClassifications: function() {
    return E
  },
  useSafetyHubAppealSignal: function() {
    return p
  },
  useSafetyHubClassification: function() {
    return S
  }
});
var i = n("470079"),
  a = n("442837"),
  u = n("709054"),
  l = n("103879"),
  s = n("364226"),
  o = n("531441"),
  r = n("236289"),
  c = n("788080"),
  d = n("800530");

function f() {
  return (0, a.useStateFromStoresArray)([r.default], () => r.default.getClassifications()).sort((t, e) => u.default.extractTimestamp(e.id) - u.default.extractTimestamp(t.id))
}

function S(t) {
  let e;
  let n = (0, a.useStateFromStores)([r.default], () => r.default.getClassification(t)),
    u = (0, a.useStateFromStores)([r.default], () => r.default.getClassificationRequestState(t)),
    f = (0, a.useStateFromStores)([r.default], () => r.default.getIsDsaEligible()),
    S = (0, s.useIsSafetyHubGuildViolationInAppAppealsEnabled)("classification_detail");
  if ((0, c.isGuildClassification)(n)) {
    var _;
    e = (null === (_ = n.guild_metadata) || void 0 === _ ? void 0 : _.member_type) === o.MemberType.OWNER ? d.ViolationType.GUILD_OWNER : d.ViolationType.GUILD_MEMBER
  } else e = d.ViolationType.USER;
  return i.useEffect(() => {
    void 0 === n && null == u && l.getSafetyHubDataForClassification(t)
  }, [t, n, u]), {
    classification: n,
    classificationRequestState: u,
    isDsaEligible: f,
    isAppealEligible: f && null != n && null == n.appeal_status && (!(0, c.isGuildClassification)(n) || S),
    violationType: e
  }
}

function _() {
  let t = f(),
    e = new Date;
  return t.filter(t => new Date(t.max_expiration_time) > e)
}

function E() {
  let t = f(),
    e = new Date;
  return t.filter(t => new Date(t.max_expiration_time) <= e)
}

function p() {
  return (0, a.useStateFromStores)([r.default], () => r.default.getAppealSignal())
}