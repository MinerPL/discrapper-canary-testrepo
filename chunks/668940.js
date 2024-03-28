"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("442837"),
  l = n("481060"),
  i = n("212093"),
  r = n("677277"),
  o = n("285865"),
  u = n("683301"),
  d = n("150192"),
  c = n("889010"),
  f = n("488905"),
  E = n("731455"),
  h = n("689938");
let _ = e => {
  switch (e) {
    case 1:
      return E.CategoryIcons.Activity;
    case 2:
      return E.CategoryIcons.Music;
    case 3:
      return E.CategoryIcons.Television;
    case 5:
      return E.CategoryIcons.Science;
    case 6:
      return E.CategoryIcons.Education;
    default:
      return E.CategoryIcons.Discover
  }
};
t.default = () => {
  let {
    currentCategoryId: e,
    isViewingSearchResults: t
  } = (0, s.useStateFromStoresObject)([u.default], () => ({
    currentCategoryId: u.default.getCurrentCategoryId(),
    isViewingSearchResults: u.default.getMostRecentQuery().length > 0
  })), n = (0, s.useStateFromStores)([d.default], () => d.default.getDiscoveryCategories(), [], d.areDiscoveryCategoriesEqual), E = null == n ? void 0 : n.map(e => ({
    ...e,
    icon: _(e.categoryId)
  })), C = e => {
    (0, i.selectCategory)(e, !0), o.default.closeSidebar(), t && (0, i.clearSearch)()
  };
  return (0, a.jsxs)(l.Scroller, {
    children: [(0, a.jsx)(f.DiscoverySidebarHeader, {
      text: h.default.Messages.DISCOVER
    }), (0, a.jsx)(c.default, {
      categories: E,
      handleCategorySelect: C,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    }), (0, a.jsx)(r.default, {
      handleCategorySelect: C,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    })]
  })
}