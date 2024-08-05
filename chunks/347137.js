var i = n(735250),
  a = n(470079),
  s = n(948789),
  r = n(481060),
  l = n(442837),
  o = n(212093),
  c = n(570938),
  d = n(677277),
  u = n(285865),
  _ = n(918701),
  h = n(702428),
  E = n(709158),
  I = n(683301),
  m = n(360048),
  g = n(296386),
  p = n(150192),
  T = n(889010),
  S = n(488905),
  f = n(731455),
  C = n(981631),
  N = n(46140),
  A = n(689938),
  v = n(885181);
let Z = e => {
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
  } = (0, l.cj)([I.ZP], () => ({
currentCategoryId: I.ZP.getCurrentCategoryId(),
isViewingSearchResults: I.ZP.getMostRecentQuery().length > 0
  })), n = (0, E.Z)(N.dr.QUEST_HOME_DESKTOP), L = (0, l.e7)([p.Z], () => p.Z.getClanDiscoveryCategories(), [], p.j), O = null == L ? void 0 : L.map(e => ({
...e,
icon: Z(e.categoryId)
  })), R = e => {
(0, o.uY)(e, !0), u.Z.closeSidebar(), t && (0, o.AQ)(), (0, _.OG)() && e !== f.Gj.Quests && (0, s.uL)(C.Z5c.GUILD_DISCOVERY), !(0, _.OG)() && e === f.Gj.Quests && (0, s.uL)(C.Z5c.QUEST_HOME);
  };
  return a.useEffect(() => {
(0, g.le)(!1, !0);
  }, [e]), (0, i.jsxs)(r.Scroller, {
children: [
  (0, i.jsx)(S.V, {
    text: A.Z.Messages.DISCOVER
  }),
  (0, i.jsx)(m.Z, {
    avatar: (0, i.jsx)(c.Z, {}),
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
    className: v.categoryItem,
    selectedClassName: v.selectedCategoryItem,
    innerClassName: v.itemInner
  }, 'clan-discovery-home'),
  (0, i.jsx)(T.Z, {
    categories: O,
    handleCategorySelect: R,
    currentCategoryId: e,
    shouldDisplaySelectedCategory: !t
  }),
  (0, i.jsx)(d.Z, {
    handleCategorySelect: R,
    currentCategoryId: e,
    shouldDisplaySelectedCategory: !t
  }),
  n && (0, i.jsx)(h.Z, {
    onClick: () => R(f.Gj.Quests),
    isSelected: e === f.Gj.Quests
  })
]
  });
};