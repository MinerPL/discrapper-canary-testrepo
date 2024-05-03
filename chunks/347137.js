"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("442837"),
  r = n("212093"),
  o = n("677277"),
  u = n("285865"),
  d = n("683301"),
  c = n("104259"),
  f = n("360048"),
  E = n("296386"),
  h = n("150192"),
  _ = n("889010"),
  C = n("488905"),
  S = n("731455"),
  m = n("689938"),
  p = n("614563");
let I = e => {
  switch (e) {
    case S.CategoryId.Activity:
      return S.CategoryIcons.Activity;
    case S.CategoryId.Music:
      return S.CategoryIcons.Music;
    case S.CategoryId.Television:
      return S.CategoryIcons.Television;
    case S.CategoryId.Science:
      return S.CategoryIcons.Science;
    case S.CategoryId.Education:
      return S.CategoryIcons.Education;
    default:
      return S.CategoryIcons.Server
  }
};
t.default = function() {
  let {
    currentCategoryId: e,
    isViewingSearchResults: t
  } = (0, i.useStateFromStoresObject)([d.default], () => ({
    currentCategoryId: d.default.getCurrentCategoryId(),
    isViewingSearchResults: d.default.getMostRecentQuery().length > 0
  })), n = (0, i.useStateFromStores)([h.default], () => h.default.getClanDiscoveryCategories(), [], h.areDiscoveryCategoriesEqual), T = null == n ? void 0 : n.map(e => ({
    ...e,
    icon: I(e.categoryId)
  })), g = e => {
    (0, r.selectCategory)(e, !0), u.default.closeSidebar(), t && (0, r.clearSearch)()
  };
  return s.useEffect(() => {
    (0, E.maybeFetchGuildDiscoveryCategories)(!1, !0)
  }, [e]), (0, a.jsxs)(l.Scroller, {
    children: [(0, a.jsx)(C.DiscoverySidebarHeader, {
      text: m.default.Messages.DISCOVER
    }), (0, a.jsx)(f.default, {
      avatar: (0, a.jsx)(c.default, {}),
      name: m.default.Messages.HOME,
      focusProps: {
        offset: {
          right: 4,
          top: 1,
          bottom: 1
        }
      },
      onClick: () => g(S.CategoryId.Clans),
      wrapContent: !0,
      selected: e === S.CategoryId.Clans,
      className: p.categoryItem,
      selectedClassName: p.selectedCategoryItem,
      innerClassName: p.itemInner
    }, "clan-discovery-home"), (0, a.jsx)(_.default, {
      categories: T,
      handleCategorySelect: g,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    }), (0, a.jsx)(o.default, {
      handleCategorySelect: g,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    })]
  })
}