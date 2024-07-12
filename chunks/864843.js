t.d(n, {
  Z: function() {
return _;
  }
});
var i = t(735250),
  a = t(470079),
  s = t(481060),
  l = t(355467),
  o = t(887706),
  r = t(270144),
  c = t(171246),
  d = t(174931),
  u = t(689938),
  I = t(394237);

function m(e) {
  let {
listing: n
  } = e, t = (0, c.KK)(n.sku_flags);
  return (0, c.KW)(n.sku_flags) || t ? (0, i.jsxs)('div', {
className: I.cta,
children: [
  (0, i.jsx)(s.Heading, {
    variant: 'heading-lg/bold',
    children: t ? u.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : u.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
  }),
  (0, i.jsx)(s.Heading, {
    color: 'interactive-normal',
    variant: 'heading-md/normal',
    children: t ? u.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS : u.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
      applicationName: n.name
    })
  })
]
  }) : null;
}

function _(e) {
  var n;
  let {
guildId: t,
applicationId: c,
applicationPrimarySkuId: u,
analyticsLocation: _,
onComplete: N,
forcesTransitionToGuild: E
  } = e, {
listingsLoaded: T
  } = (0, r.FE)(c, u), {
entitlementsLoaded: h
  } = (0, r.LM)({
guildId: t
  }), {
subscriptionGroupListing: p
  } = (0, r.F5)(c, t), g = (0, o.Z)();
  a.useEffect(() => {
g && l.jg();
  }, [g]);
  let C = null == p ? void 0 : p.id,
f = null == p ? void 0 : null === (n = p.subscription_listings) || void 0 === n ? void 0 : n.filter(e => e.published);
  return T && (null == t || h) ? null == C || null == f || 0 === f.length ? null : (0, i.jsx)('div', {
className: I.container,
children: f.map(e => (0, i.jsxs)(a.Fragment, {
  children: [
    (0, i.jsx)(m, {
      listing: e
    }),
    (0, i.jsx)(d.Z, {
      listing: e,
      guildId: t,
      groupListingId: C,
      analyticsLocation: _,
      onComplete: N,
      forcesTransitionToGuild: E
    })
  ]
}, e.id))
  }) : (0, i.jsx)('div', {
className: I.loadingContainer,
children: (0, i.jsx)(s.Spinner, {})
  });
}