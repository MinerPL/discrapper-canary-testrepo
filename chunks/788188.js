"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
});
var a = s("37983");
s("884691");
var r = s("90915"),
  i = s("446674"),
  n = s("77078"),
  l = s("901582"),
  o = s("86621"),
  u = s("984376"),
  d = s("812204"),
  c = s("685665"),
  _ = s("539938"),
  E = s("595426"),
  T = s("697218"),
  I = s("145131"),
  f = s("216422"),
  S = s("49111"),
  R = s("646718"),
  m = s("782340"),
  A = s("571366");
let N = i.default.connectStores([T.default], () => ({
  user: T.default.getCurrentUser()
}))((0, u.default)((0, o.default)(e => {
  let {
    analyticsLocations: t
  } = (0, c.default)(d.default.HOME_PAGE_PREMIUM_TAB), {
    isAuthenticated: s,
    user: i
  } = e;
  return s ? (0, a.jsxs)("div", {
    className: A.homeWrapperNormal,
    children: [(0, a.jsx)(l.default, {
      section: S.AnalyticsSections.NAVIGATION,
      children: (0, a.jsxs)(_.default, {
        isAuthenticated: s,
        className: A.headerBar,
        children: [(0, a.jsx)(_.default.Icon, {
          icon: f.default,
          "aria-hidden": !0
        }), (0, a.jsx)(_.default.Title, {
          children: m.default.Messages.PREMIUM
        })]
      })
    }), (0, a.jsx)(c.AnalyticsLocationProvider, {
      value: t,
      children: null == i ? (0, a.jsx)(I.default, {
        align: I.default.Align.CENTER,
        justify: I.default.Justify.CENTER,
        children: (0, a.jsx)(n.Spinner, {
          className: A.spinner
        })
      }) : (0, a.jsx)(E.default, {
        entrypoint: R.PremiumMarketingEntrypoints.ApplicationStoreHome
      })
    })]
  }) : (0, a.jsx)(r.Redirect, {
    to: S.Routes.LOGIN
  })
})));
var p = N