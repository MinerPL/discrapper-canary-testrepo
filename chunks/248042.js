n.d(t, {
  Vi: function() {
return R;
  },
  W1: function() {
return L;
  },
  k: function() {
return D;
  },
  l2: function() {
return y;
  }
});
var r = n(913527),
  i = n.n(r),
  a = n(399606),
  o = n(355467),
  s = n(774078),
  l = n(211242),
  u = n(706454),
  c = n(594174),
  d = n(78839),
  _ = n(295226),
  E = n(74538),
  f = n(937579),
  h = n(617799),
  p = n(61196),
  m = n(104494),
  I = n(639119),
  T = n(748770),
  g = n(725727),
  S = n(1844),
  A = n(474936),
  N = n(981631),
  v = n(689938);

function O(e) {
  var t, n, r;
  let {
experimentEnabled: a,
premiumSubscription: o,
mostRecentSubscription: s
  } = e, l = !1, u = !1;
  if (null != s && s.status === N.O0b.ENDED) {
let e = (null === (t = s.metadata) || void 0 === t ? void 0 : t.ended_at) != null ? i()(s.metadata.ended_at) : null,
  r = null === (n = (0, E.Af)(s)) || void 0 === n ? void 0 : n.planId,
  a = null != r && E.ZP.getPremiumType(r) === A.p9.TIER_2;
u = null != e && a && e.add(10, 'days').isAfter(i()());
  }
  if (null != o) {
let e = null === (r = (0, E.Af)(o)) || void 0 === r ? void 0 : r.planId,
  t = null != e && E.ZP.getPremiumType(e) === A.p9.TIER_2,
  n = c.default.getCurrentUser(),
  i = (null == o ? void 0 : o.trialId) != null && E.ZP.isPremiumExactly(n, A.p9.TIER_0);
l = t || i;
  }
  return !a || l || u;
}

function R() {
  var e;
  let {
paymentsBlocked: t
  } = l.Z.useExperiment({
location: '153d31_1'
  }, {
autoTrackExposure: !1
  }), {
promotion: n
  } = (0, g.mq)(), {
enabled: r
  } = (0, p.ZP)(), {
mostRecentSubscription: i,
premiumSubscription: o
  } = (0, a.cj)([d.ZP], () => ({
mostRecentSubscription: d.ZP.getMostRecentPremiumTypeSubscription(),
premiumSubscription: d.ZP.getPremiumTypeSubscription()
  })), u = (0, I.N)(), c = (0, m.Ng)(), _ = new Date(null !== (e = null == n ? void 0 : n.endDate) && void 0 !== e ? e : 0).valueOf();
  (0, s.Z)(_, 1000, void 0, _ + 2000 < Date.now());
  let E = !O({
  experimentEnabled: r,
  premiumSubscription: o,
  mostRecentSubscription: i
}) && null == u && null != n && !t && null == c,
f = Date.now(),
{
  enabled: T
} = h.Z.useExperiment({
  location: '153d31_2'
}, {
  autoTrackExposure: E,
  disable: !E
});
  return !(f > _) && T;
}
async function C() {
  var e;
  let t = c.default.getCurrentUser(),
n = !(null == t ? void 0 : t.isClaimed()),
{
  paymentsBlocked: r
} = l.Z.getCurrentConfig({
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
  if (_.Z.shouldFetchOffer() && !(0, E.I5)(t) && await (0, f.T)('BogoPromotionUtils'), _.Z.hasFetchedOffer() && (_.Z.hasAnyUnexpiredOffer() || _.Z.hasAnyUnexpiredDiscountOffer()))
return !1;
  !d.ZP.hasFetchedMostRecentPremiumTypeSubscription() && (null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasHadSKU(A.Si.TIER_2)) && await (0, o.ou)(), !d.ZP.hasFetchedSubscriptions() && await (0, o.jg)();
  let s = d.ZP.getMostRecentPremiumTypeSubscription();
  return !O({
experimentEnabled: i,
premiumSubscription: d.ZP.getPremiumTypeSubscription(),
mostRecentSubscription: s
  });
}
async function y() {
  if (!await C())
return;
  let e = S.Z.bogoPromotion;
  if (!(null != e && new Date(e.endDate).valueOf() >= Date.now()))
await (0, T.L9)();
}
async function D() {
  let e = S.Z.bogoPromotion,
t = null != e && new Date(e.endDate).valueOf() >= Date.now() && new Date(e.startDate).valueOf() <= Date.now(),
n = await C(),
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

function L() {
  switch (u.default.locale) {
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
  return v.Z.Messages.NITRO_BADGE_TEXT;
default:
  return v.Z.Messages.BOGO_PILL;
  }
}