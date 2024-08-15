n.d(t, {
  Vi: function() {
return C;
  },
  W1: function() {
return b;
  },
  k: function() {
return L;
  },
  l2: function() {
return D;
  }
});
var r = n(913527),
  i = n.n(r),
  a = n(399606),
  s = n(355467),
  o = n(211242),
  l = n(706454),
  u = n(594174),
  c = n(78839),
  d = n(295226),
  _ = n(74538),
  E = n(937579),
  f = n(436783),
  h = n(617799),
  p = n(61196),
  m = n(104494),
  I = n(639119),
  T = n(921022),
  g = n(748770),
  S = n(725727),
  A = n(1844),
  N = n(474936),
  v = n(981631),
  O = n(689938);

function R(e) {
  var t, n, r;
  let {
experimentEnabled: a,
premiumSubscription: s,
mostRecentSubscription: o
  } = e, l = !1, c = !1;
  if (null != o && o.status === v.O0b.ENDED) {
let e = (null === (t = o.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? i()(o.metadata.ended_at) : null,
  r = null === (n = (0, _.Af)(o)) || void 0 === n ? void 0 : n.planId,
  a = null != r && _.ZP.getPremiumType(r) === N.p9.TIER_2;
c = null != e && a && e.add(10, 'days').isAfter(i()());
  }
  if (null != s) {
let e = null === (r = (0, _.Af)(s)) || void 0 === r ? void 0 : r.planId,
  t = null != e && _.ZP.getPremiumType(e) === N.p9.TIER_2,
  n = u.default.getCurrentUser(),
  i = (null == s ? void 0 : s.trialId) != null && _.ZP.isPremiumExactly(n, N.p9.TIER_0);
l = t || i;
  }
  return !a || l || c;
}

function C() {
  var e;
  let {
paymentsBlocked: t
  } = o.Z.useExperiment({
location: '153d31_1'
  }, {
autoTrackExposure: !1
  }), {
promotion: n
  } = (0, S.mq)(), {
enabled: r
  } = (0, p.ZP)(), {
mostRecentSubscription: i,
premiumSubscription: s
  } = (0, a.cj)([c.ZP], () => ({
mostRecentSubscription: c.ZP.getMostRecentPremiumTypeSubscription(),
premiumSubscription: c.ZP.getPremiumTypeSubscription()
  })), l = (0, I.N)(), u = (0, m.Ng)(), d = new Date(null !== (e = null == n ? void 0 : n.endDate) && void 0 !== e ? e : 0).valueOf(), _ = Date.now(), E = _ > d, {
enabled: g
  } = (0, f.Z)();
  (0, T.Z)({
delay: E ? -1 : d - _,
disable: g
  });
  let A = !R({
  experimentEnabled: r,
  premiumSubscription: s,
  mostRecentSubscription: i
}) && null == l && null != n && !t && null == u,
{
  enabled: N
} = h.Z.useExperiment({
  location: '153d31_2'
}, {
  autoTrackExposure: A,
  disable: !A
});
  return !E && N;
}
async function y() {
  var e;
  let t = u.default.getCurrentUser(),
n = !(null == t ? void 0 : t.isClaimed()),
{
  paymentsBlocked: r
} = o.Z.getCurrentConfig({
  location: '153d31_3'
}, {
  autoTrackExposure: !1
}),
{
  enabled: i
} = (0, p.aW)(),
{
  enabled: a
} = h.Z.getCurrentConfig({
  location: '153d31_4'
}, {
  autoTrackExposure: !1
});
  if (n || r || !i || !a)
return !1;
  if (d.Z.shouldFetchOffer() && !(0, _.I5)(t) && await (0, E.T)('BogoPromotionUtils'), d.Z.hasFetchedOffer() && (d.Z.hasAnyUnexpiredOffer() || d.Z.hasAnyUnexpiredDiscountOffer()))
return !1;
  !c.ZP.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(N.Si.TIER_2)) && await (0, s.ou)(), !c.ZP.hasFetchedSubscriptions() && await (0, s.jg)();
  let l = c.ZP.getMostRecentPremiumTypeSubscription();
  return !R({
experimentEnabled: i,
premiumSubscription: c.ZP.getPremiumTypeSubscription(),
mostRecentSubscription: l
  });
}
async function D() {
  if (!await y())
return;
  let e = A.Z.bogoPromotion;
  if (!(null != e && new Date(e.endDate).valueOf() >= Date.now()))
await (0, g.L9)();
}
async function L() {
  let e = A.Z.bogoPromotion,
t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
n = await y(),
{
  enabled: r
} = p.Am.getCurrentConfig({
  location: '153d31_6'
}, {
  autoTrackExposure: !1
}),
{
  enabled: i
} = h.Z.getCurrentConfig({
  location: '153d31_7'
}, {
  autoTrackExposure: t && r && n
});
  return t && i && r && n;
}

function b() {
  switch (l.default.locale) {
case 'de':
case 'es-ES':
case 'fr':
case 'hr':
case 'it':
case 'lt':
case 'nl':
case 'pl':
case 'pt-BR':
case 'ro':
case 'fi':
case 'sv-SE':
case 'tr':
case 'cs':
case 'el':
case 'bg':
case 'ru':
case 'uk':
case 'ja':
case 'ko':
  return O.Z.Messages.NITRO_BADGE_TEXT;
default:
  return O.Z.Messages.BOGO_PILL;
  }
}