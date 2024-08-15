o.d(n, {
  h: function() {
return _;
  },
  m: function() {
return p;
  }
}), o(789020);
var t = o(735250);
o(470079);
var i = o(512722),
  a = o.n(i),
  r = o(481060),
  d = o(496929),
  l = o(171246),
  c = o(509545),
  s = o(55563),
  u = o(987209),
  f = o(981631);

function _(e) {
  let {
initialPlanId: n,
activeSubscription: i,
analyticsObject: a,
analyticsLocation: d,
analyticsLocations: l,
analyticsSubscriptionType: c,
renderHeader: s,
planGroup: _,
skuId: m,
guildId: p,
reviewWarningMessage: I,
applicationId: h,
showBenefitsFirst: b,
eligibleApplicationSubscriptionGuilds: C,
onComplete: g,
forcesTransitionToGuild: y
  } = e;
  (0, r.openModalLazy)(async () => {
let {
  PaymentContextProvider: e
} = await Promise.resolve().then(o.bind(o, 598)), r = (await Promise.all([
  o.e('52249'),
  o.e('47006'),
  o.e('32776'),
  o.e('66517')
]).then(o.bind(o, 405083))).default, {
  getApplicationPaymentSteps: f
} = await Promise.all([
  o.e('96427'),
  o.e('77298'),
  o.e('23357'),
  o.e('54803'),
  o.e('15685'),
  o.e('18209'),
  o.e('30671'),
  o.e('86751')
]).then(o.bind(o, 759386)), x = f({
  guildId: p,
  showBenefitsFirst: b,
  eligibleApplicationSubscriptionGuilds: C
});
return o => (0, t.jsx)(e, {
  applicationId: h,
  activeSubscription: i,
  stepConfigs: x,
  skuIDs: [m],
  children: (0, t.jsx)(u.KB, {
    children: (0, t.jsx)(r, {
      ...o,
      initialPlanId: n,
      skuId: m,
      analyticsLocations: l,
      analyticsObject: a,
      analyticsLocation: d,
      analyticsSubscriptionType: c,
      renderHeader: s,
      planGroup: _,
      reviewWarningMessage: I,
      applicationId: h,
      guildId: null != p ? p : void 0,
      onComplete: g,
      forcesTransitionToGuild: y
    })
  })
});
  }, {
onCloseRequest: f.dG4
  });
}
let m = async (e, n) => {
  let o = (await (0, d.yD)(e)).filter(e => null == e.ends_at || new Date(e.ends_at) > new Date()).find(e => e.sku_id === n);
  a()(null == o, 'User already has an active subscription to this SKU');
};
async function p(e) {
  var n;
  let {
applicationId: o,
skuId: t,
initialPlanId: i,
analyticsLocationObject: r,
analyticsLocations: d,
renderHeader: u
  } = e, p = s.Z.get(t), I = c.Z.getForSKU(t);
  a()(null != p, 'Failed to find SKU');
  let h = (0, l.KW)(p.flags);
  a()(h, 'Guild application subscriptions unsupported!'), await m(o, t), _({
initialPlanId: null != i ? i : null === (n = I[0]) || void 0 === n ? void 0 : n.id,
activeSubscription: null,
analyticsLocations: d,
analyticsLocationObject: r,
analyticsSubscriptionType: f.NYc.APPLICATION,
renderHeader: u,
planGroup: [],
skuId: t,
guildId: null,
eligibleApplicationSubscriptionGuilds: [],
showBenefitsFirst: !1,
applicationId: o
  });
}