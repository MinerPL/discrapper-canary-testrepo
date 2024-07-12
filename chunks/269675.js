n.d(t, {
  Z: function() {
return R;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(873546),
  r = n(442837),
  l = n(481060),
  o = n(355467),
  c = n(270237),
  d = n(252618),
  u = n(423000),
  _ = n(200876),
  h = n(674180),
  E = n(38618),
  I = n(984370),
  m = n(430824),
  g = n(351402),
  p = n(730647),
  T = n(772021),
  S = n(396828),
  C = n(293423),
  f = n(20967),
  N = n(504762),
  A = n(807152),
  Z = n(176505),
  L = n(689938),
  v = n(83939);

function O(e) {
  let {
guildId: t
  } = e, n = (0, r.e7)([m.Z], () => m.Z.getGuild(t), [t]), O = (0, r.e7)([E.Z], () => E.Z.isConnected()), R = (0, _.Z)(t), x = (0, T.Z)(t), b = (0, r.e7)([g.Z], () => g.Z.isSubscriptionFetching), P = (0, p.f)(), {
shouldHideGuildPurchaseEntryPoints: M,
restrictionsLoading: D
  } = (0, h.uP)(t), y = null == n || !P || b || D;
  (0, d.Tt)({
subsection: L.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
location: null == n ? void 0 : n.name
  }), (0, c.Z)(a.tq ? 'role-subscriptions-overview' : void 0);
  let j = O && (null == n || !(R || x) || M && !D);
  if (s.useEffect(() => {
  o.jg();
}, []), s.useEffect(() => {
  j && !a.tq && (0, u.M)(t, Z.oC.ROLE_SUBSCRIPTIONS);
}, [
  t,
  j
]), a.tq && j) {
let e = null == n ? f.J.NOT_GUILD_MEMBER : f.J.GUILD_NOT_ELIGIBLE;
return (0, i.jsx)(f.z, {
  errorType: e
});
  }
  return (0, i.jsxs)('div', {
className: v.container,
children: [
  (0, i.jsxs)(I.Z, {
    toolbar: (0, i.jsx)(s.Fragment, {}),
    className: v.headerBar,
    children: [
      (0, i.jsx)(I.Z.Icon, {
        icon: (0, l.makeIconCompat)(S.Z),
        'aria-hidden': !0
      }),
      (0, i.jsx)(I.Z.Title, {
        children: L.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
      })
    ]
  }),
  (0, i.jsx)('div', {
    id: A.v
  }),
  (0, i.jsx)('div', {
    className: v.content,
    children: R ? (0, i.jsx)(l.ScrollerNone, {
      className: v.scroller,
      children: (0, i.jsx)('div', {
        className: v.scrollerContent,
        children: y ? (0, i.jsx)(l.Spinner, {}) : (0, i.jsx)(C.Z, {
          guild: n
        })
      })
    }) : (0, i.jsx)(N.Z, {})
  })
]
  });
}

function R(e) {
  let {
guildId: t
  } = e;
  return (0, i.jsx)(p.l, {
guildId: t,
refetchOnMount: !0,
children: (0, i.jsx)(O, {
  guildId: t
})
  });
}