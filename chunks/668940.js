var i = n(735250);
n(470079);
var a = n(948789),
  s = n(442837),
  r = n(481060),
  l = n(212093),
  o = n(963202),
  c = n(677277),
  d = n(285865),
  u = n(918701),
  _ = n(702428),
  h = n(709158),
  E = n(683301),
  I = n(150192),
  m = n(889010),
  g = n(488905),
  p = n(347137),
  T = n(731455),
  S = n(981631),
  f = n(46140),
  C = n(689938),
  N = n(468918);
let A = e => {
switch (e) {
  case T.Gj.Activity:
    return T.fW.Activity;
  case T.Gj.Music:
    return T.fW.Music;
  case T.Gj.Television:
    return T.fW.Television;
  case T.Gj.Science:
    return T.fW.Science;
  case T.Gj.Education:
    return T.fW.Education;
  default:
    return T.fW.Discover;
}
  },
  v = () => {
let {
  currentCategoryId: e,
  isViewingSearchResults: t
} = (0, s.cj)([E.ZP], () => ({
  currentCategoryId: E.ZP.getCurrentCategoryId(),
  isViewingSearchResults: E.ZP.getMostRecentQuery().length > 0
})), n = (0, h.Z)(f.dr.QUEST_HOME_DESKTOP), o = (0, s.e7)([I.Z], () => I.Z.getDiscoveryCategories(), [], I.j), p = null == o ? void 0 : o.map(e => ({
  ...e,
  icon: A(e.categoryId)
})), v = e => {
  (0, l.uY)(e, !0), d.Z.closeSidebar(), t && (0, l.AQ)(), (0, u.OG)() && e !== T.Gj.Quests && (0, a.uL)(S.Z5c.GUILD_DISCOVERY), !(0, u.OG)() && e === T.Gj.Quests && (0, a.uL)(S.Z5c.QUEST_HOME);
};
return (0, i.jsxs)(r.Scroller, {
  className: N.sidebarContainer,
  children: [
    (0, i.jsx)(g.V, {
      text: C.Z.Messages.DISCOVER
    }),
    (0, i.jsx)(m.Z, {
      categories: p,
      handleCategorySelect: v,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    }),
    (0, i.jsx)(c.Z, {
      handleCategorySelect: v,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    }),
    n && (0, i.jsx)(_.Z, {
      onClick: () => v(T.Gj.Quests),
      isSelected: e === T.Gj.Quests
    })
  ]
});
  };
t.Z = function() {
  let {
guilds: e
  } = (0, o.C3)({
location: 'guild_discovery_sidebar',
includeConverted: !0
  }), t = e.length > 0, {
clanDiscoveryEnabled: n
  } = (0, o.nk)('guild_discovery_sidebar');
  return t || n ? (0, i.jsx)(p.Z, {}) : (0, i.jsx)(v, {});
};