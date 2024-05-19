"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("442837"),
  l = n("481060"),
  i = n("212093"),
  r = n("963202"),
  o = n("677277"),
  u = n("285865"),
  d = n("683301"),
  c = n("150192"),
  f = n("889010"),
  E = n("488905"),
  h = n("347137"),
  _ = n("878241"),
  C = n("731455"),
  m = n("689938");
let S = e => {
    switch (e) {
      case C.CategoryId.Activity:
        return C.CategoryIcons.Activity;
      case C.CategoryId.Music:
        return C.CategoryIcons.Music;
      case C.CategoryId.Television:
        return C.CategoryIcons.Television;
      case C.CategoryId.Science:
        return C.CategoryIcons.Science;
      case C.CategoryId.Education:
        return C.CategoryIcons.Education;
      default:
        return C.CategoryIcons.Discover
    }
  },
  p = () => {
    let {
      currentCategoryId: e,
      isViewingSearchResults: t
    } = (0, s.useStateFromStoresObject)([d.default], () => ({
      currentCategoryId: d.default.getCurrentCategoryId(),
      isViewingSearchResults: d.default.getMostRecentQuery().length > 0
    })), n = (0, s.useStateFromStores)([c.default], () => c.default.getDiscoveryCategories(), [], c.areDiscoveryCategoriesEqual), r = null == n ? void 0 : n.map(e => ({
      ...e,
      icon: S(e.categoryId)
    })), h = e => {
      (0, i.selectCategory)(e, !0), u.default.closeSidebar(), t && (0, i.clearSearch)()
    };
    return (0, a.jsxs)(l.Scroller, {
      children: [(0, a.jsx)(E.DiscoverySidebarHeader, {
        text: m.default.Messages.DISCOVER
      }), (0, a.jsx)(f.default, {
        categories: r,
        handleCategorySelect: h,
        currentCategoryId: e,
        shouldDisplaySelectedCategory: !t
      }), (0, a.jsx)(o.default, {
        handleCategorySelect: h,
        currentCategoryId: e,
        shouldDisplaySelectedCategory: !t
      })]
    })
  };
t.default = function() {
  let e = (0, _.useGuildsEligibleForClan)({
      location: "guild_discovery_sidebar"
    }).length > 0,
    {
      clanDiscoveryEnabled: t
    } = (0, r.useClanPilotExperiment)("guild_discovery_sidebar");
  return e || t ? (0, a.jsx)(h.default, {}) : (0, a.jsx)(p, {})
}