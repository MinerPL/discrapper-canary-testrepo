i.d(n, {
  Z: function() {
return m;
  }
});
var t = i(735250),
  a = i(470079),
  r = i(481060),
  o = i(355467),
  l = i(887706),
  s = i(270144),
  c = i(171246),
  d = i(174931),
  u = i(689938),
  _ = i(394237);

function p(e) {
  let {
listing: n
  } = e, i = (0, c.KK)(n.sku_flags);
  return (0, c.KW)(n.sku_flags) || i ? (0, t.jsxs)('div', {
className: _.cta,
children: [
  (0, t.jsx)(r.Heading, {
    variant: 'heading-lg/bold',
    children: i ? u.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : u.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
  }),
  (0, t.jsx)(r.Heading, {
    color: 'interactive-normal',
    variant: 'heading-md/normal',
    children: i ? u.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS : u.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
      applicationName: n.name
    })
  })
]
  }) : null;
}

function m(e) {
  var n;
  let {
guildId: i,
applicationId: c,
applicationPrimarySkuId: u,
analyticsLocation: m,
onComplete: I,
forcesTransitionToGuild: f
  } = e, {
listingsLoaded: g
  } = (0, s.FE)(c, u), {
entitlementsLoaded: h
  } = (0, s.LM)({
guildId: i
  }), {
subscriptionGroupListing: C
  } = (0, s.F5)(c, i), v = (0, l.Z)();
  a.useEffect(() => {
v && o.jg();
  }, [v]);
  let E = null == C ? void 0 : C.id,
x = null == C ? void 0 : null === (n = C.subscription_listings) || void 0 === n ? void 0 : n.filter(e => e.published);
  return g && (null == i || h) ? null == E || null == x || 0 === x.length ? null : (0, t.jsx)('div', {
className: _.container,
children: x.map(e => (0, t.jsxs)(a.Fragment, {
  children: [
    (0, t.jsx)(p, {
      listing: e
    }),
    (0, t.jsx)(d.Z, {
      listing: e,
      guildId: i,
      groupListingId: E,
      analyticsLocation: m,
      onComplete: I,
      forcesTransitionToGuild: f
    })
  ]
}, e.id))
  }) : (0, t.jsx)('div', {
className: _.loadingContainer,
children: (0, t.jsx)(r.Spinner, {})
  });
}