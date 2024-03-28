"use strict";
a.r(t);
var l = a("735250"),
  o = a("470079"),
  s = a("442837"),
  n = a("37234"),
  u = a("230711"),
  i = a("410575"),
  r = a("503089"),
  d = a("110924"),
  c = a("100527"),
  f = a("367907"),
  S = a("906732"),
  g = a("254901"),
  p = a("45493"),
  E = a("332473"),
  _ = a("113434"),
  h = a("663389"),
  m = a("210887"),
  b = a("361695"),
  k = a("981631"),
  T = a("689938");
let y = o.forwardRef(function() {
  p.default.trackExposure({
    location: "cd25e4_1"
  }), g.default.useExperiment({
    location: "user_setting_auto"
  }, {
    autoTrackExposure: !1
  }), g.default.trackExposure({
    location: "user_setting_manual"
  });
  let e = (0, s.useStateFromStores)([m.default], () => m.default.theme),
    t = (0, s.useStateFromStores)([m.default], () => m.default.darkSidebar ? k.ThemeTypes.DARK : void 0),
    {
      section: a,
      subsection: y,
      analyticsLocation: A,
      analyticsLocations: P
    } = (0, s.useStateFromStoresObject)([h.default], () => {
      let e = h.default.getSection(),
        t = h.default.getSubsection(),
        {
          analyticsLocation: a,
          analyticsLocations: l
        } = h.default.getProps();
      return {
        section: e,
        subsection: t,
        analyticsLocation: a,
        analyticsLocations: l
      }
    }),
    v = (0, d.default)(a),
    x = (0, d.default)(y),
    {
      analyticsLocations: F
    } = (0, S.default)(c.default.USER_SETTINGS);
  o.useEffect(() => {
    null != a && (a !== v || y !== x) && ! function(e) {
      let {
        destinationPane: t,
        originPane: a = null,
        source: l = null,
        subsection: o = null,
        locationStack: s = null
      } = e;
      f.default.trackWithMetadata(k.AnalyticEvents.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: a,
        destination_pane: t,
        location_stack: s,
        source: l,
        subsection: o
      })
    }({
      destinationPane: a,
      originPane: null != v ? v : null,
      source: A,
      subsection: y,
      locationStack: P
    })
  }, [a, v, y, x, A, P]);
  let I = (0, b.default)(),
    j = (0, E.useIsEligibleForPomelo)(),
    w = (0, _.useShouldShowSettingBadgeForQuests)(),
    L = o.useCallback(e => {
      u.default.setSection(e)
    }, []);
  return (0, l.jsx)(S.AnalyticsLocationProvider, {
    value: F,
    children: (0, l.jsx)(i.default, {
      root: !0,
      page: k.AnalyticsPages.USER_SETTINGS,
      children: (0, l.jsx)(r.default, {
        theme: e,
        title: T.default.Messages.USER_SETTINGS,
        sidebarTheme: t,
        section: a,
        onSetSection: L,
        onClose: n.popLayer,
        sections: I,
        isEligibleForPomelo: j,
        shouldShowSettingBadgeForQuests: w
      })
    })
  })
});
t.default = o.forwardRef(function() {
  let e = (0, s.useStateFromStores)([h.default], () => h.default.getProps().analyticsLocations),
    {
      analyticsLocations: t
    } = (0, S.default)(e);
  return (0, l.jsx)(S.AnalyticsLocationProvider, {
    value: t,
    children: (0, l.jsx)(y, {})
  })
})