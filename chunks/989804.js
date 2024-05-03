"use strict";
a.r(t);
var l = a("735250"),
  s = a("470079"),
  n = a("442837"),
  o = a("37234"),
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
  m = a("663389"),
  b = a("210887"),
  h = a("361695"),
  k = a("981631"),
  T = a("689938");
let y = s.forwardRef(function() {
  p.default.trackExposure({
    location: "cd25e4_1"
  }), g.default.useExperiment({
    location: "user_setting_auto"
  }, {
    autoTrackExposure: !1
  }), g.default.trackExposure({
    location: "user_setting_manual"
  });
  let e = (0, n.useStateFromStores)([b.default], () => b.default.theme),
    t = (0, n.useStateFromStores)([b.default], () => b.default.darkSidebar ? k.ThemeTypes.DARK : void 0),
    {
      section: a,
      subsection: y,
      analyticsLocation: A,
      analyticsLocations: P
    } = (0, n.useStateFromStoresObject)([m.default], () => {
      let e = m.default.getSection(),
        t = m.default.getSubsection(),
        {
          analyticsLocation: a,
          analyticsLocations: l
        } = m.default.getProps();
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
  s.useEffect(() => {
    null != a && (a !== v || y !== x) && ! function(e) {
      let {
        destinationPane: t,
        originPane: a = null,
        source: l = null,
        subsection: s = null,
        locationStack: n = null
      } = e;
      f.default.trackWithMetadata(k.AnalyticEvents.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: a,
        destination_pane: t,
        location_stack: n,
        source: l,
        subsection: s
      })
    }({
      destinationPane: a,
      originPane: null != v ? v : null,
      source: A,
      subsection: y,
      locationStack: P
    })
  }, [a, v, y, x, A, P]);
  let I = (0, h.default)(),
    j = (0, E.useIsEligibleForPomelo)(),
    L = (0, _.useQuestsForSettingsBadge)(),
    N = s.useCallback(e => {
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
        onSetSection: N,
        onClose: o.popLayer,
        sections: I,
        isEligibleForPomelo: j,
        questsForBadge: L
      })
    })
  })
});
t.default = s.forwardRef(function() {
  let e = (0, n.useStateFromStores)([m.default], () => m.default.getProps().analyticsLocations),
    {
      analyticsLocations: t
    } = (0, S.default)(e);
  return (0, l.jsx)(S.AnalyticsLocationProvider, {
    value: t,
    children: (0, l.jsx)(y, {})
  })
})