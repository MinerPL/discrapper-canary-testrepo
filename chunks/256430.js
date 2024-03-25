"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  l = n("77078"),
  i = n("340626"),
  r = n("40546"),
  o = n("397039"),
  u = n("926787"),
  d = n("868246"),
  c = n("649725"),
  f = n("866487"),
  E = n("447621"),
  h = n("782340");
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
var C = () => {
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