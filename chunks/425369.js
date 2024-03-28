"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("613828"),
  i = n("410575"),
  r = n("765717"),
  o = n("252618"),
  u = n("108427"),
  d = n("895991"),
  c = n("993977"),
  f = n("981631"),
  E = n("689938"),
  h = n("149817");

function _() {
  return (0, a.jsxs)(l.Switch, {
    children: [(0, a.jsx)(r.default, {
      path: f.Routes.APPLICATION_LIBRARY_SETTINGS,
      exact: !0,
      children: (0, a.jsxs)(i.default, {
        page: f.AnalyticsPages.LIBRARY_SETTINGS,
        root: !0,
        children: [(0, a.jsx)(o.AppPageTitle, {
          subsection: E.default.Messages.SETTINGS
        }), (0, a.jsx)(c.default, {})]
      })
    }), (0, a.jsx)(r.default, {
      path: f.Routes.APPLICATION_LIBRARY,
      children: (0, a.jsxs)(i.default, {
        page: f.AnalyticsPages.LIBRARY,
        root: !0,
        children: [(0, a.jsx)(o.AppPageTitle, {
          subsection: E.default.Messages.APPLICATION_LIBRARY_MY_GAMES
        }), (0, a.jsx)(d.default, {})]
      })
    })]
  })
}
t.default = s.memo(function() {
  return s.useEffect(() => {
    (0, u.trackAppUIViewed)("application_library")
  }, []), (0, a.jsxs)("div", {
    className: h.container,
    children: [(0, a.jsx)(o.AppPageTitle, {
      location: E.default.Messages.LIBRARY
    }), (0, a.jsx)(_, {})]
  })
})