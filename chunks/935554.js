n.d(t, {
  Z: function() {
return f;
  }
});
var r = n(735250);
n(470079);
var s = n(730647),
  i = n(584825),
  o = n(290348),
  a = n(934826),
  l = n(330181),
  c = n(939225),
  d = n(36246),
  C = n(305342),
  u = n(981631),
  _ = n(466450);

function x(e) {
  var t;
  let {
guildId: n
  } = e, s = (0, i.GG)(n)[0], {
editStateIds: x
  } = o.B7(null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : null, n), {
activeSubscription: f
  } = (0, a.Z)(null == s ? void 0 : s.id);
  return (0, r.jsxs)('div', {
className: _.container,
children: [
  null != s ? (0, r.jsx)(l.Z, {
    groupListingId: s.id,
    subscription: f
  }) : null,
  (0, r.jsx)(c.Z, {
    subscription: f
  }),
  (0, r.jsx)(d.Z, {
    guildId: n,
    children: x.map(e => {
      var t;
      return (0, r.jsx)(C.Z, {
        guildId: n,
        groupListingId: null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : '',
        listingId: e,
        analyticsLocation: u.Sbl.ROLE_SUBSCRIPTIONS_TAB
      }, e);
    })
  })
]
  });
}

function f(e) {
  let {
guildId: t
  } = e;
  return (0, r.jsx)(s.l, {
guildId: t,
refetchOnMount: !0,
children: (0, r.jsx)(x, {
  guildId: t
})
  });
}