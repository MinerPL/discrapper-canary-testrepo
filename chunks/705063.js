n.d(t, {
  X: function() {
return g;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(481060),
  l = n(749210),
  o = n(225784),
  c = n(469988),
  d = n(526383),
  u = n(210887),
  _ = n(900849),
  h = n(374939),
  E = n(731455),
  I = n(689938),
  m = n(511862);

function g(e) {
  let {
loadId: t,
onScroll: n
  } = e, g = (0, d.Z)(), p = (0, s.e7)([u.Z], () => u.Z.theme);
  return a.useEffect(() => {
_.Zt({
  loadId: t,
  gamesYouPlayGuilds: [],
  allGuilds: [],
  categoryId: E.U
});
  }, [t]), (0, i.jsx)(h.Z, {
title: I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_TITLE,
description: I.Z.Messages.GLOBAL_DISCOVERY_SERVERS_HUB_DESCRIPTION,
onScroll: n,
children: (0, i.jsx)('div', {
  className: m.content,
  children: g.length > 0 ? (0, i.jsxs)('div', {
    children: [
      (0, i.jsx)(r.Heading, {
        variant: 'heading-lg/semibold',
        children: I.Z.Messages.YOUR_HUB
      }),
      g.map(e => (0, i.jsx)(o.Z, {
        onView: () => l.Z.transitionToGuildSync(e.id),
        guild: {
          ...e,
          presenceCount: void 0,
          memberCount: void 0,
          premiumSubscriptionCount: void 0,
          emojis: void 0
        },
        theme: p
      }, e.id)),
      (0, i.jsx)(c.Z, {
        hasHub: !0
      })
    ]
  }) : (0, i.jsx)('div', {
    children: (0, i.jsx)(c.Z, {
      hasHub: !1
    })
  })
})
  });
}