"use strict";
n.d(t, {
  Vi: function() {
    return v
  },
  W1: function() {
    return y
  },
  k: function() {
    return P
  },
  l2: function() {
    return M
  }
});
var i = n(913527),
  r = n.n(i),
  s = n(399606),
  o = n(704215),
  a = n(355467),
  l = n(774078),
  u = n(211242),
  _ = n(605236),
  d = n(706454),
  c = n(594174),
  E = n(78839),
  I = n(295226),
  T = n(74538),
  h = n(316941),
  S = n(59561),
  f = n(388622),
  N = n(61196),
  A = n(639119),
  m = n(748770),
  O = n(725727),
  R = n(1844),
  C = n(474936),
  p = n(981631),
  g = n(689938);

function L(e) {
  var t, n, i;
  let {
    experimentEnabled: s,
    premiumSubscription: o,
    mostRecentSubscription: a
  } = e, l = !1, u = !1;
  if (null != a && a.status === p.O0b.ENDED) {
    let e = (null === (t = a.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? r()(a.metadata.ended_at) : null,
      i = null === (n = (0, T.Af)(a)) || void 0 === n ? void 0 : n.planId,
      s = null != i && T.ZP.getPremiumType(i) === C.p9.TIER_2;
    u = null != e && s && e.add(10, "days").isAfter(r()())
  }
  if (null != o) {
    let e = null === (i = (0, T.Af)(o)) || void 0 === i ? void 0 : i.planId,
      t = null != e && T.ZP.getPremiumType(e) === C.p9.TIER_2,
      n = c.default.getCurrentUser(),
      r = (null == o ? void 0 : o.trialId) != null && T.ZP.isPremiumExactly(n, C.p9.TIER_0);
    l = t || r
  }
  return !s || l || u
}

function v() {
  var e;
  let {
    paymentsBlocked: t
  } = u.Z.useExperiment({
    location: "153d31_1"
  }, {
    autoTrackExposure: !1
  }), {
    promotion: n
  } = (0, O.mq)(), {
    enabled: i
  } = (0, N.ZP)(), {
    mostRecentSubscription: r,
    premiumSubscription: o
  } = (0, s.cj)([E.ZP], () => ({
    mostRecentSubscription: E.ZP.getMostRecentPremiumTypeSubscription(),
    premiumSubscription: E.ZP.getPremiumTypeSubscription()
  })), a = (0, A.N)(), _ = new Date(null !== (e = null == n ? void 0 : n.endDate) && void 0 !== e ? e : 0).valueOf();
  (0, l.Z)(_, 1e3, void 0, _ + 2e3 < Date.now());
  let d = !L({
      experimentEnabled: i,
      premiumSubscription: o,
      mostRecentSubscription: r
    }) && null == a && null != n && !t,
    c = Date.now(),
    {
      enabled: I
    } = f.Z.useExperiment({
      location: "153d31_2"
    }, {
      autoTrackExposure: d,
      disable: !d
    });
  return !(c > _) && I
}
async function D() {
  var e;
  let t = c.default.getCurrentUser(),
    n = !(null == t ? void 0 : t.isClaimed()),
    {
      paymentsBlocked: i
    } = u.Z.getCurrentConfig({
      location: "153d31_3"
    }, {
      autoTrackExposure: !1
    }),
    {
      enabled: r
    } = (0, N.aW)(),
    {
      enabled: s
    } = f.Z.getCurrentConfig({
      location: "153d31_4"
    }, {
      autoTrackExposure: !1
    }),
    {
      enabled: o
    } = S.p.getCurrentConfig({
      location: "153d31_5"
    }, {
      autoTrackExposure: !1
    });
  if (n || i || !r || !o && !s) return !1;
  if (I.Z.shouldFetchOffer() && await h.Z.fetchUserTrialOffer(), I.Z.hasFetchedOffer() && I.Z.hasAnyUnexpiredOffer()) return !1;
  !E.ZP.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(C.Si.TIER_2)) && await (0, a.ou)(), !E.ZP.hasFetchedSubscriptions() && await (0, a.jg)();
  let l = E.ZP.getMostRecentPremiumTypeSubscription();
  return !L({
    experimentEnabled: r,
    premiumSubscription: E.ZP.getPremiumTypeSubscription(),
    mostRecentSubscription: l
  })
}
async function M() {
  if (!await D()) return;
  let e = R.Z.bogoPromotion;
  if (!(null != e && new Date(e.endDate).valueOf() >= Date.now())) await (0, m.L9)()
}
async function P() {
  let e = R.Z.bogoPromotion,
    t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
    n = (0, _.un)(o.z.SUMMER_2023_BOGO_ANNOUNCEMENT_MODAL),
    i = await D(),
    {
      enabled: r
    } = N.Am.getCurrentConfig({
      location: "153d31_6"
    }, {
      autoTrackExposure: !1
    }),
    {
      enabled: s
    } = S.p.getCurrentConfig({
      location: "153d31_7"
    }, {
      autoTrackExposure: t && r && !n && i
    });
  return t && s && r && !n && i
}

function y() {
  switch (d.default.locale) {
    case "de":
    case "es-ES":
    case "fr":
    case "hr":
    case "it":
    case "lt":
    case "nl":
    case "pl":
    case "pt-BR":
    case "ro":
    case "fi":
    case "sv-SE":
    case "tr":
    case "cs":
    case "el":
    case "bg":
    case "ru":
    case "uk":
    case "ja":
    case "ko":
      return g.Z.Messages.NITRO_BADGE_TEXT;
    default:
      return g.Z.Messages.BOGO_PILL
  }
}