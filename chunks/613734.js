"use strict";
e.d(n, {
  KM: function() {
    return f
  },
  U0: function() {
    return A
  },
  YG: function() {
    return S
  },
  y9: function() {
    return d
  }
});
var i = e(470079),
  u = e(442837),
  l = e(709054),
  a = e(103879),
  r = e(364226),
  o = e(531441),
  s = e(236289),
  c = e(788080),
  _ = e(800530);

function E() {
  return (0, u.Wu)([s.Z], () => s.Z.getClassifications()).sort((t, n) => l.default.extractTimestamp(n.id) - l.default.extractTimestamp(t.id))
}

function S(t) {
  let n;
  let e = (0, u.e7)([s.Z], () => s.Z.getClassification(t)),
    l = (0, u.e7)([s.Z], () => s.Z.getClassificationRequestState(t)),
    E = (0, u.e7)([s.Z], () => s.Z.getIsDsaEligible()),
    S = (0, r.A)("classification_detail");
  if ((0, c.FB)(e)) {
    var d;
    n = (null === (d = e.guild_metadata) || void 0 === d ? void 0 : d.member_type) === o.wO.OWNER ? _.qS.GUILD_OWNER : _.qS.GUILD_MEMBER
  } else n = _.qS.USER;
  return i.useEffect(() => {
    void 0 === e && null == l && a.NA(t)
  }, [t, e, l]), {
    classification: e,
    classificationRequestState: l,
    isDsaEligible: E,
    isAppealEligible: E && null != e && null == e.appeal_status && (!(0, c.FB)(e) || S),
    violationType: n
  }
}

function d() {
  let t = E(),
    n = new Date;
  return t.filter(t => new Date(t.max_expiration_time) > n)
}

function f() {
  let t = E(),
    n = new Date;
  return t.filter(t => new Date(t.max_expiration_time) <= n)
}

function A() {
  return (0, u.e7)([s.Z], () => s.Z.getAppealSignal())
}