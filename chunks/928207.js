"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("613828"),
  r = s("442837"),
  n = s("481060"),
  l = s("410575"),
  o = s("730749"),
  u = s("666743"),
  d = s("100527"),
  c = s("906732"),
  _ = s("984370"),
  E = s("299657"),
  T = s("594174"),
  I = s("285952"),
  R = s("466111"),
  S = s("981631"),
  f = s("474936"),
  m = s("689938"),
  N = s("507954");
let A = r.default.connectStores([T.default], () => ({
  user: T.default.getCurrentUser()
}))((0, u.default)((0, o.default)(e => {
  let {
    analyticsLocations: t
  } = (0, c.default)(d.default.HOME_PAGE_PREMIUM_TAB), {
    isAuthenticated: s,
    user: r
  } = e;
  return s ? (0, a.jsxs)("div", {
    className: N.homeWrapperNormal,
    children: [(0, a.jsx)(l.default, {
      section: S.AnalyticsSections.NAVIGATION,
      children: (0, a.jsxs)(_.default, {
        isAuthenticated: s,
        className: N.headerBar,
        children: [(0, a.jsx)(_.default.Icon, {
          icon: R.default,
          "aria-hidden": !0
        }), (0, a.jsx)(_.default.Title, {
          children: m.default.Messages.PREMIUM
        })]
      })
    }), (0, a.jsx)(c.AnalyticsLocationProvider, {
      value: t,
      children: null == r ? (0, a.jsx)(I.default, {
        align: I.default.Align.CENTER,
        justify: I.default.Justify.CENTER,
        children: (0, a.jsx)(n.Spinner, {
          className: N.spinner
        })
      }) : (0, a.jsx)(E.default, {
        entrypoint: f.PremiumMarketingEntrypoints.ApplicationStoreHome
      })
    })]
  }) : (0, a.jsx)(i.Redirect, {
    to: S.Routes.LOGIN
  })
})));
t.default = A