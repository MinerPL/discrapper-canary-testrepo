"use strict";
n.r(t), n.d(t, {
  UserSettingsFamilyCenterPage: function() {
    return q
  },
  default: function() {
    return Q
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("394846"),
  o = n("432710"),
  u = n("65597"),
  d = n("151426"),
  c = n("77078"),
  f = n("939488"),
  E = n("669499"),
  h = n("812204"),
  _ = n("685665"),
  C = n("69927"),
  S = n("10641"),
  I = n("539938"),
  m = n("155084"),
  p = n("970366"),
  T = n("161778"),
  g = n("845579"),
  A = n("697218"),
  N = n("476765"),
  R = n("155207"),
  O = n("956089"),
  v = n("599110"),
  L = n("439932"),
  M = n("544556"),
  P = n("822825"),
  y = n("104887"),
  D = n("771783"),
  x = n("775032"),
  b = n("25132"),
  U = n("544553"),
  G = n("210173"),
  j = n("68818"),
  w = n("922832"),
  k = n("49111"),
  F = n("586391"),
  B = n("994428"),
  H = n("782340"),
  V = n("322833");
let Y = {
    [w.FamilyCenterSubPages.REQUESTS]: () => (0, a.jsx)(G.default, {}),
    [w.FamilyCenterSubPages.ACTIVITY]: () => (0, a.jsx)(U.default, {}),
    [w.FamilyCenterSubPages.SETTINGS]: () => (0, a.jsx)(j.default, {})
  },
  W = {
    [w.FamilyCenterSubPages.REQUESTS]: () => (0, a.jsx)(G.default, {}),
    [w.FamilyCenterSubPages.ACTIVITY]: () => (0, a.jsx)(U.default, {})
  };

function K(e) {
  let {
    section: t,
    handleItemSelect: n
  } = e, s = (0, b.usePendingRequestCount)(), l = (0, x.default)();
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
  } = e, l = (0, N.useUID)(), o = (0, b.usePendingRequestCount)();
  return (0, a.jsxs)(I.default, {
    className: i((0, L.getThemeClass)(t), V.sidebarTabBar),
    scrollable: r.isMobile,
    role: "navigation",
    "aria-labelledby": l,
    toolbar: !0,
    children: [(0, a.jsx)(I.default.Icon, {
      icon: R.default,
      "aria-hidden": !0
    }), (0, a.jsx)(I.default.Title, {
      id: l,
      children: H.default.Messages.FAMILY_CENTER_TITLE
    }), (0, a.jsx)(I.default.Divider, {}), (0, a.jsxs)(c.TabBar, {
      "aria-label": H.default.Messages.FAMILY_CENTER_TITLE,
      selectedItem: n,
      type: "top-pill",
      onItemSelect: s,
      className: V.tabBar,
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
  let e = (0, x.default)(),
    t = (0, b.useAcceptedRequestsCount)(),
    n = (0, S.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE),
    l = (0, u.useStateFromStores)([P.default], () => P.default.getIsInitialized()),
    r = (0, D.useSelectedTeenId)(),
    {
      selectedTab: f,
      handleTabChange: h
    } = (0, y.default)(),
    _ = (0, N.useUID)(),
    I = A.default.getCurrentUser(),
    T = null != e,
    g = l && null != I && !T;
  return (s.useEffect(() => {
    (0, p.trackAppUIViewed)("family-center"), M.default.initialPageLoad(), !n && (0, S.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
      dismissAction: B.ContentDismissActionType.AUTO,
      forceTrack: !0
    })
  }, []), s.useEffect(() => {
    l && T && (v.default.track(k.AnalyticEvents.FAMILY_CENTER_VIEWED, {
      is_considered_adult: e,
      num_of_accepted_links: t,
      selected_teen_id: r,
      initial_page: w.FamilyCenterSubPageAnalyticsIds[f],
      source: w.FamilyCenterPageLocationAnalyticsIds[w.FamilyCenterPageLocation.SIDENAV]
    }), m.default.increment({
      name: o.MetricEvents.FAMILY_CENTER_VIEW
    }))
  }, [l, T]), g) ? ((0, E.openAgeGateModal)(F.AgeGateSource.FAMILY_CENTER), null) : (0, a.jsxs)("main", {
    className: i(V.container),
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
    AnalyticsLocationProvider: e
  } = (0, _.default)(h.default.FAMILY_CENTER), t = (0, x.default)(), n = (0, b.useAcceptedRequestsCount)(), l = (0, S.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE), r = (0, u.useStateFromStores)([P.default], () => P.default.getIsInitialized()), I = (0, D.useSelectedTeenId)(), R = (0, u.useStateFromStores)([T.default], () => T.default.theme), {
    selectedTab: O,
    handleTabChange: L
  } = (0, y.default)(), U = (0, N.useUID)(), G = A.default.getCurrentUser(), j = null != t, Y = r && null != G && !j;
  if (s.useEffect(() => {
      f.setHomeLink(k.Routes.FAMILY_CENTER), (0, p.trackAppUIViewed)("family-center"), !P.default.isLoading() && P.default.canRefetch() && M.default.initialPageLoad(), !l && (0, S.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
        dismissAction: B.ContentDismissActionType.AUTO,
        forceTrack: !0
      })
    }, []), s.useEffect(() => {
      r && j && (v.default.track(k.AnalyticEvents.FAMILY_CENTER_VIEWED, {
        is_considered_adult: t,
        num_of_accepted_links: n,
        selected_teen_id: I,
        initial_page: w.FamilyCenterSubPageAnalyticsIds[O],
        source: w.FamilyCenterPageLocationAnalyticsIds[w.FamilyCenterPageLocation.SIDENAV]
      }), m.default.increment({
        name: o.MetricEvents.FAMILY_CENTER_VIEW
      }))
    }, [r, j]), s.useEffect(() => {
      let e = g.FamilyCenterEnabled.getSetting();
      r && t && void 0 === e && g.FamilyCenterEnabled.updateSetting(!0)
    }, [r, t]), Y) return (0, E.openAgeGateModal)(F.AgeGateSource.FAMILY_CENTER), null;
  let K = O !== w.FamilyCenterSubPages.SETTINGS ? O : w.FamilyCenterSubPages.ACTIVITY,
    q = W[K];
  return (0, a.jsx)(e, {
    children: (0, a.jsxs)("main", {
      className: i(V.container, V.containerSidenav),
      "aria-label": H.default.Messages.FAMILY_CENTER_TITLE,
      children: [(0, a.jsx)(C.AppPageTitle, {
        location: H.default.Messages.FAMILY_CENTER_TITLE
      }), (0, a.jsx)(z, {
        theme: R,
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