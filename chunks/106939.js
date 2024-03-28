"use strict";
n.r(t), n.d(t, {
  UserSettingsFamilyCenterPage: function() {
    return q
  },
  default: function() {
    return Q
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("873546"),
  o = n("286379"),
  u = n("399606"),
  d = n("524437"),
  c = n("481060"),
  f = n("150063"),
  E = n("758119"),
  h = n("100527"),
  _ = n("906732"),
  C = n("252618"),
  m = n("605236"),
  S = n("984370"),
  I = n("797614"),
  p = n("108427"),
  T = n("210887"),
  g = n("695346"),
  A = n("594174"),
  N = n("153124"),
  v = n("158010"),
  O = n("26290"),
  R = n("626135"),
  L = n("792125"),
  P = n("280570"),
  M = n("914788"),
  y = n("841409"),
  D = n("652262"),
  b = n("880257"),
  x = n("631885"),
  U = n("830746"),
  j = n("731934"),
  G = n("521450"),
  w = n("292352"),
  k = n("981631"),
  F = n("723359"),
  B = n("921944"),
  H = n("689938"),
  V = n("767998");
let Y = {
    [w.FamilyCenterSubPages.REQUESTS]: () => (0, a.jsx)(j.default, {}),
    [w.FamilyCenterSubPages.ACTIVITY]: () => (0, a.jsx)(U.default, {}),
    [w.FamilyCenterSubPages.SETTINGS]: () => (0, a.jsx)(G.default, {})
  },
  W = {
    [w.FamilyCenterSubPages.REQUESTS]: () => (0, a.jsx)(j.default, {}),
    [w.FamilyCenterSubPages.ACTIVITY]: () => (0, a.jsx)(U.default, {})
  };

function K(e) {
  let {
    section: t,
    handleItemSelect: n
  } = e, s = (0, x.usePendingRequestCount)(), l = (0, b.default)();
  return (0, a.jsxs)(c.TabBar, {
    className: V.settingsTabBar,
    "aria-label": H.default.Messages.FAMILY_CENTER_TITLE,
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: n,
    children: [(0, a.jsx)(c.TabBar.Item, {
      className: V.settingsTabBarItem,
      id: w.FamilyCenterSubPages.ACTIVITY,
      children: H.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
    }), (0, a.jsxs)(c.TabBar.Item, {
      className: V.settingsTabBarItem,
      id: w.FamilyCenterSubPages.REQUESTS,
      "aria-label": H.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
      children: [H.default.Messages.FAMILY_CENTER_REQUESTS_TAB, s > 0 ? (0, a.jsx)(O.NumberBadge, {
        className: V.badge,
        count: s
      }) : null]
    }), l ? (0, a.jsx)(c.TabBar.Item, {
      className: V.settingsTabBarItem,
      id: w.FamilyCenterSubPages.SETTINGS,
      children: H.default.Messages.SETTINGS
    }) : null]
  })
}

function z(e) {
  let {
    theme: t,
    section: n,
    handleItemSelect: s
  } = e, l = (0, N.useUID)(), o = (0, x.usePendingRequestCount)();
  return (0, a.jsxs)(S.default, {
    className: i()((0, L.getThemeClass)(t), V.sidebarTabBar),
    scrollable: r.isMobile,
    role: "navigation",
    "aria-labelledby": l,
    toolbar: !0,
    children: [(0, a.jsx)(S.default.Icon, {
      icon: v.default,
      "aria-hidden": !0
    }), (0, a.jsx)(S.default.Title, {
      id: l,
      children: H.default.Messages.FAMILY_CENTER_TITLE
    }), (0, a.jsx)(S.default.Divider, {}), (0, a.jsxs)(c.TabBar, {
      "aria-label": H.default.Messages.FAMILY_CENTER_TITLE,
      selectedItem: n,
      type: "top-pill",
      onItemSelect: s,
      className: V.__invalid_tabBar,
      children: [(0, a.jsx)(c.TabBar.Item, {
        id: w.FamilyCenterSubPages.ACTIVITY,
        className: V.item,
        children: H.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
      }), (0, a.jsxs)(c.TabBar.Item, {
        id: w.FamilyCenterSubPages.REQUESTS,
        className: V.item,
        "aria-label": H.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
        children: [H.default.Messages.FAMILY_CENTER_REQUESTS_TAB, o > 0 ? (0, a.jsx)(O.NumberBadge, {
          className: V.badge,
          count: o
        }) : null]
      })]
    })]
  })
}

function q() {
  let e = (0, b.default)(),
    t = (0, x.useAcceptedRequestsCount)(),
    n = (0, m.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE),
    l = (0, u.useStateFromStores)([M.default], () => M.default.getIsInitialized()),
    r = (0, D.useSelectedTeenId)(),
    {
      selectedTab: f,
      handleTabChange: h
    } = (0, y.default)(),
    _ = (0, N.useUID)(),
    S = A.default.getCurrentUser(),
    T = null != e,
    g = l && null != S && !T;
  return (s.useEffect(() => {
    (0, p.trackAppUIViewed)("family-center"), P.default.initialPageLoad(), !n && (0, m.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
      dismissAction: B.ContentDismissActionType.AUTO,
      forceTrack: !0
    })
  }, []), s.useEffect(() => {
    l && T && (R.default.track(k.AnalyticEvents.FAMILY_CENTER_VIEWED, {
      is_considered_adult: e,
      num_of_accepted_links: t,
      selected_teen_id: r,
      initial_page: w.FamilyCenterSubPageAnalyticsIds[f],
      source: w.FamilyCenterPageLocationAnalyticsIds[w.FamilyCenterPageLocation.SIDENAV]
    }), I.default.increment({
      name: o.MetricEvents.FAMILY_CENTER_VIEW
    }))
  }, [l, T]), g) ? ((0, E.openAgeGateModal)(F.AgeGateSource.FAMILY_CENTER), null) : (0, a.jsxs)("main", {
    className: i()(V.container),
    "aria-label": H.default.Messages.FAMILY_CENTER_TITLE,
    children: [(0, a.jsx)(C.AppPageTitle, {
      location: H.default.Messages.FAMILY_CENTER_TITLE
    }), (0, a.jsx)(K, {
      section: f,
      handleItemSelect: e => {
        h(e)
      }
    }), (0, a.jsx)(c.TabBar.Panel, {
      id: f,
      "aria-labelledby": _,
      className: V.contentPanel,
      children: (0, a.jsx)("div", {
        children: Y[f]()
      })
    })]
  })
}

function Q() {
  let {
    analyticsLocations: e
  } = (0, _.default)(h.default.FAMILY_CENTER), t = (0, b.default)(), n = (0, x.useAcceptedRequestsCount)(), l = (0, m.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE), r = (0, u.useStateFromStores)([M.default], () => M.default.getIsInitialized()), S = (0, D.useSelectedTeenId)(), v = (0, u.useStateFromStores)([T.default], () => T.default.theme), {
    selectedTab: O,
    handleTabChange: L
  } = (0, y.default)(), U = (0, N.useUID)(), j = A.default.getCurrentUser(), G = null != t, Y = r && null != j && !G;
  if (s.useEffect(() => {
      f.setHomeLink(k.Routes.FAMILY_CENTER), (0, p.trackAppUIViewed)("family-center"), !M.default.isLoading() && M.default.canRefetch() && P.default.initialPageLoad(), !l && (0, m.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
        dismissAction: B.ContentDismissActionType.AUTO,
        forceTrack: !0
      })
    }, []), s.useEffect(() => {
      r && G && (R.default.track(k.AnalyticEvents.FAMILY_CENTER_VIEWED, {
        is_considered_adult: t,
        num_of_accepted_links: n,
        selected_teen_id: S,
        initial_page: w.FamilyCenterSubPageAnalyticsIds[O],
        source: w.FamilyCenterPageLocationAnalyticsIds[w.FamilyCenterPageLocation.SIDENAV]
      }), I.default.increment({
        name: o.MetricEvents.FAMILY_CENTER_VIEW
      }))
    }, [r, G]), s.useEffect(() => {
      let e = g.FamilyCenterEnabled.getSetting();
      r && t && void 0 === e && g.FamilyCenterEnabled.updateSetting(!0)
    }, [r, t]), Y) return (0, E.openAgeGateModal)(F.AgeGateSource.FAMILY_CENTER), null;
  let K = O !== w.FamilyCenterSubPages.SETTINGS ? O : w.FamilyCenterSubPages.ACTIVITY,
    q = W[K];
  return (0, a.jsx)(_.AnalyticsLocationProvider, {
    value: e,
    children: (0, a.jsxs)("main", {
      className: i()(V.container, V.containerSidenav),
      "aria-label": H.default.Messages.FAMILY_CENTER_TITLE,
      children: [(0, a.jsx)(C.AppPageTitle, {
        location: H.default.Messages.FAMILY_CENTER_TITLE
      }), (0, a.jsx)(z, {
        theme: v,
        section: K,
        handleItemSelect: e => {
          L(e)
        }
      }), (0, a.jsx)(c.TabBar.Panel, {
        id: K,
        "aria-labelledby": U,
        className: V.contentPanel,
        children: (0, a.jsx)("div", {
          className: V.sideNavContent,
          children: q()
        })
      })]
    })
  })
}