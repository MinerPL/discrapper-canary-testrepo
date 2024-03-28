"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("984370"),
  r = n("703656"),
  o = n("427828"),
  u = n("626135"),
  d = n("804739"),
  c = n("981631"),
  f = n("689938"),
  E = n("509434");
let h = (0, d.isSupportedPlatform)() || !1;
t.default = s.memo(function(e) {
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