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
  c = n("430824"),
  f = n("150192"),
  E = n("889010"),
  h = n("488905"),
  _ = n("347137"),
  C = n("731455"),
  S = n("689938");
let m = e => {
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
    })), n = (0, s.useStateFromStores)([f.default], () => f.default.getDiscoveryCategories(), [], f.areDiscoveryCategoriesEqual), r = null == n ? void 0 : n.map(e => ({
      ...e,
      icon: m(e.categoryId)
    })), c = e => {
      (0, i.selectCategory)(e, !0), u.default.closeSidebar(), t && (0, i.clearSearch)()
    };
    return (0, a.jsxs)(l.Scroller, {
      children: [(0, a.jsx)(h.DiscoverySidebarHeader, {
        text: S.default.Messages.DISCOVER
      }), (0, a.jsx)(E.default, {
        categories: r,
        handleCategorySelect: c,
        currentCategoryId: e,
        shouldDisplaySelectedCategory: !t
      }), (0, a.jsx)(o.default, {
        handleCategorySelect: c,
        currentCategoryId: e,
        shouldDisplaySelectedCategory: !t
      })]
    })
  };
t.default = function() {
  let e = (0, s.useStateFromStoresArray)([c.default], () => Object.values(c.default.getGuilds())),
    t = (0, r.useAnyClanPrepilotExperimentEnabled)(e, "guild_discovery_sidebar"),
    {
      clanDiscoveryEnabled: n
    } = (0, r.useClanPilotExperiment)("guild_discovery_sidebar");
  return t || n ? (0, a.jsx)(_.default, {}) : (0, a.jsx)(p, {})
}