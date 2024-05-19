"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  i = s("442837"),
  r = s("37234"),
  u = s("230711"),
  l = s("410575"),
  o = s("503089"),
  c = s("110924"),
  d = s("100527"),
  f = s("367907"),
  S = s("906732"),
  g = s("254901"),
  h = s("45493"),
  E = s("332473"),
  _ = s("113434"),
  p = s("663389"),
  m = s("210887"),
  b = s("394644"),
  T = s("295545"),
  k = s("839469"),
  v = s("981631"),
  P = s("689938");
let y = n.forwardRef(function() {
  h.default.trackExposure({
    location: "cd25e4_1"
  }), g.default.useExperiment({
    location: "user_setting_auto"
  }, {
    autoTrackExposure: !1
  }), g.default.trackExposure({
    location: "user_setting_manual"
  });
  let e = (0, i.useStateFromStores)([m.default], () => m.default.theme),
    t = (0, i.useStateFromStores)([m.default], () => m.default.darkSidebar ? v.ThemeTypes.DARK : void 0),
    {
      section: s,
      subsection: y,
      analyticsLocation: I,
      analyticsLocations: w
    } = (0, i.useStateFromStoresObject)([p.default], () => {
      let e = p.default.getSection(),
        t = p.default.getSubsection(),
        {
          analyticsLocation: s,
          analyticsLocations: a
        } = p.default.getProps();
      return {
        section: e,
        subsection: t,
        analyticsLocation: s,
        analyticsLocations: a
      }
    }),
    A = (0, c.default)(s),
    L = (0, c.default)(y),
    {
      analyticsLocations: x
    } = (0, S.default)(d.default.USER_SETTINGS);
  n.useEffect(() => {
    null != s && (s !== A || y !== L) && ! function(e) {
      let {
        destinationPane: t,
        originPane: s = null,
        source: a = null,
        subsection: n = null,
        locationStack: i = null
      } = e;
      f.default.trackWithMetadata(v.AnalyticEvents.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: s,
        destination_pane: t,
        location_stack: i,
        source: a,
        subsection: n
      })
    }({
      destinationPane: s,
      originPane: null != A ? A : null,
      source: I,
      subsection: y,
      locationStack: w
    })
  }, [s, A, y, L, I, w]);
  let F = (0, T.useIsEligibleForUserSettingsSearchDesktop)({
      location: "user_settings"
    }),
    {
      hasSearchResults: R,
      searchResults: C
    } = (0, k.useSettingSearchResults)(),
    M = n.useMemo(() => F && R, [F, R]),
    N = (0, b.useDefaultUserSettingsSections)(),
    U = (0, b.useSearchUserSettingsSections)(C),
    j = n.useMemo(() => M ? U : N, [M, U, N]),
    G = (0, E.useIsEligibleForPomelo)(),
    D = (0, _.useQuestsForSettingsBadge)(),
    B = n.useCallback(e => {
      u.default.setSection(e)
    }, []);
  return (0, a.jsx)(S.AnalyticsLocationProvider, {
    value: x,
    children: (0, a.jsx)(l.default, {
      root: !0,
      page: v.AnalyticsPages.USER_SETTINGS,
      children: (0, a.jsx)(o.default, {
        theme: e,
        title: P.default.Messages.USER_SETTINGS,
        sidebarTheme: t,
        section: s,
        onSetSection: B,
        onClose: r.popLayer,
        sections: j,
        isEligibleForPomelo: G,
        questsForBadge: D
      })
    })
  })
});
t.default = n.forwardRef(function() {
  let e = (0, i.useStateFromStores)([p.default], () => p.default.getProps().analyticsLocations),
    {
      analyticsLocations: t
    } = (0, S.default)(e);
  return (0, a.jsx)(S.AnalyticsLocationProvider, {
    value: t,
    children: (0, a.jsx)(y, {})
  })
})