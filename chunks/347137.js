var i = n(735250),
  s = n(470079),
  a = n(948789),
  r = n(481060),
  l = n(442837),
  o = n(212093),
  c = n(100527),
  d = n(570938),
  u = n(677277),
  _ = n(285865),
  h = n(918701),
  E = n(702428),
  I = n(709158),
  m = n(683301),
  g = n(360048),
  p = n(296386),
  T = n(150192),
  S = n(889010),
  C = n(488905),
  f = n(731455),
  N = n(981631),
  A = n(689938),
  Z = n(885181);
let L = e => {
  switch (e) {
case f.Gj.Activity:
  return f.fW.Activity;
case f.Gj.Music:
  return f.fW.Music;
case f.Gj.Television:
  return f.fW.Television;
case f.Gj.Science:
  return f.fW.Science;
case f.Gj.Education:
  return f.fW.Education;
default:
  return f.fW.Server;
  }
};
t.Z = function() {
  let {
currentCategoryId: e,
isViewingSearchResults: t
  } = (0, l.cj)([m.ZP], () => ({
currentCategoryId: m.ZP.getCurrentCategoryId(),
isViewingSearchResults: m.ZP.getMostRecentQuery().length > 0
  })), n = (0, I.Z)(c.Z.QUEST_HOME_PAGE), v = (0, l.e7)([T.Z], () => T.Z.getClanDiscoveryCategories(), [], T.j), O = null == v ? void 0 : v.map(e => ({
...e,
icon: L(e.categoryId)
  })), R = e => {
(0, o.uY)(e, !0), _.Z.closeSidebar(), t && (0, o.AQ)(), (0, h.OG)() && e !== f.Gj.Quests && (0, a.uL)(N.Z5c.GUILD_DISCOVERY), !(0, h.OG)() && e === f.Gj.Quests && (0, a.uL)(N.Z5c.QUEST_HOME);
  };
  return s.useEffect(() => {
(0, p.le)(!1, !0);
  }, [e]), (0, i.jsxs)(r.Scroller, {
children: [
  (0, i.jsx)(C.V, {
    text: A.Z.Messages.DISCOVER
  }),
  (0, i.jsx)(g.Z, {
    avatar: (0, i.jsx)(d.Z, {}),
    name: A.Z.Messages.CLANS,
    focusProps: {
      offset: {
        right: 4,
        top: 1,
        bottom: 1
      }
    },
    onClick: () => R(f.Gj.Clans),
    wrapContent: !0,
    selected: e === f.Gj.Clans,
    className: Z.categoryItem,
    selectedClassName: Z.selectedCategoryItem,
    innerClassName: Z.itemInner
  }, 'clan-discovery-home'),
  (0, i.jsx)(S.Z, {
    categories: O,
    handleCategorySelect: R,
    currentCategoryId: e,
    shouldDisplaySelectedCategory: !t
  }),
  (0, i.jsx)(u.Z, {
    handleCategorySelect: R,
    currentCategoryId: e,
    shouldDisplaySelectedCategory: !t
  }),
  n && (0, i.jsx)(E.Z, {
    onClick: () => R(f.Gj.Quests),
    isSelected: e === f.Gj.Quests
  })
]
  });
};