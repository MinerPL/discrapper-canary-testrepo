"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("77078"),
  i = n("539938"),
  r = n("393414"),
  o = n("880013"),
  u = n("599110"),
  d = n("602043"),
  c = n("49111"),
  f = n("782340"),
  E = n("178216");
let h = (0, d.isSupportedPlatform)() || !1;
var _ = s.memo(function(e) {
  let {
    currentRoute: t,
    renderToolbar: n
  } = e, d = s.useContext(u.AnalyticsContext), _ = h || t === c.Routes.APPLICATION_LIBRARY_SETTINGS;
  return (0, a.jsxs)(i.default, {
    className: E.libraryHeader,
    toolbar: null == n ? void 0 : n(),
    children: [(0, a.jsx)(i.default.Icon, {
      icon: o.default,
      "aria-hidden": !0
    }), (0, a.jsx)(i.default.Title, {
      children: f.default.Messages.LIBRARY
    }), (0, a.jsx)(i.default.Divider, {}), (0, a.jsxs)(l.TabBar, {
      type: "top-pill",
      selectedItem: t,
      onItemSelect: function(e) {
        e !== t && (0, r.transitionTo)(e, {
          state: {
            analyticsSource: {
              ...d.location,
              section: c.AnalyticsSections.TABS,
              object: c.AnalyticsObjects.NAVIGATION_LINK
            }
          }
        })
      },
      children: [(0, a.jsx)(l.TabBar.Item, {
        id: c.Routes.APPLICATION_LIBRARY,
        children: f.default.Messages.APPLICATION_LIBRARY_MY_GAMES
      }), _ ? (0, a.jsx)(l.TabBar.Item, {
        id: c.Routes.APPLICATION_LIBRARY_SETTINGS,
        children: f.default.Messages.SETTINGS
      }) : null]
    })]
  })
})