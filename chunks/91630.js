n.d(t, {
  U: function() {
return T;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(657707),
  r = n(823379),
  l = n(51448),
  o = n(164427),
  c = n(742916),
  d = n(860403),
  u = n(388571),
  _ = n(536763),
  h = n(160460),
  E = n(968669),
  I = n(982345),
  m = n(49898),
  g = n(689938),
  p = n(65050);

function T() {
  let {
tabs: e,
selectedTab: t,
onSelectTab: n
  } = (0, I.Y)(), T = s.useRef(new c.m()), S = (0, m.$G)(t.id), {
searching: C,
searchQuery: f,
setSearchQuery: N,
handleSearchClear: A,
handleSearchSubmit: Z
  } = (0, E.C)(S), L = s.useCallback(e => {
let {
  tabId: t,
  categoryId: n,
  searchQuery: s,
  searching: a
} = e;
if (a)
  return (0, i.jsx)(h.x, {
    searchQuery: s,
    categoryId: n,
    onSearchClear: A
  });
switch (t) {
  case m.vf.GAMING:
    return (0, i.jsx)(d.j, {
      categoryId: n,
      title: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_TITLE,
      description: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GAMING_DESCRIPTION
    });
  case m.vf.MUSIC:
    return (0, i.jsx)(d.j, {
      categoryId: n,
      title: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_TITLE,
      description: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_MUSIC_DESCRIPTION
    });
  case m.vf.ENTERTAINMENT:
    return (0, i.jsx)(d.j, {
      categoryId: n,
      title: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_TITLE,
      description: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_ENTERTAINMENT_DESCRIPTION
    });
  case m.vf.TECH:
    return (0, i.jsx)(d.j, {
      categoryId: n,
      title: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_TITLE,
      description: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TECH_DESCRIPTION
    });
  case m.vf.EDUCATION:
    return (0, i.jsx)(d.j, {
      categoryId: n,
      title: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_TITLE,
      description: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_EDUCATION_DESCRIPTION
    });
  case m.vf.HUBS:
    return (0, i.jsx)(_.X, {});
  case m.vf.GUILDS:
    return null;
  default:
    (0, r.vE)(t);
}
  }, [A]), v = s.useCallback(e => e.tabId !== m.vf.GUILDS || e.searching ? (0, i.jsx)(o.J, {
scrollManager: T,
children: L(e)
  }) : (0, i.jsx)(u.U, {
scrollManager: T
  }), [L]);
  return (0, i.jsxs)('div', {
className: p.container,
children: [
  (0, i.jsx)(l.f, {
    icon: (0, i.jsx)(a.QTo, {}),
    title: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE,
    tabs: e,
    selectedTab: t,
    onTabSelect: n,
    searchQuery: f,
    onSearch: N,
    onSearchClear: A,
    onSearchSubmit: Z,
    scrollManager: T
  }),
  v({
    tabId: t.id,
    searchQuery: f,
    searching: C,
    categoryId: S,
    scrollManager: T
  })
]
  });
}