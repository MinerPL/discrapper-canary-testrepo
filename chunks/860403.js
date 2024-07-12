n.d(t, {
  j: function() {
return E;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(442837),
  r = n(212093),
  l = n(410030),
  o = n(683301),
  c = n(514611),
  d = n(624383),
  u = n(402691),
  _ = n(854761);
let h = [];

function E(e) {
  let {
categoryId: t,
title: n,
description: E
  } = e, I = (0, a.Wu)([o.ZP], () => {
var e, n;
return null !== (n = null === (e = o.ZP.getDiscoverableGuilds()[t]) || void 0 === e ? void 0 : e.guilds) && void 0 !== n ? n : h;
  }), m = (0, a.e7)([o.ZP], () => o.ZP.getLoadId()), {
handleViewGuild: g,
onGuildCardSeen: p
  } = (0, u.g)(t, m), T = (0, l.ZP)();
  return s.useEffect(() => {
(0, r.K5)(t);
  }, [t]), (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(d.c, {
    title: n,
    description: E
  }),
  (0, i.jsx)('section', {
    className: _.servers,
    children: I.map((e, t) => (0, i.jsx)(c.Z, {
      guild: e,
      onView: e => g(e, t),
      theme: T,
      onGuildCardSeen: p
    }, e.id))
  })
]
  });
}