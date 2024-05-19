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
  l = n("120356"),
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
  p = n("797614"),
  g = n("108427"),
  I = n("210887"),
  T = n("695346"),
  A = n("594174"),
  N = n("153124"),
  v = n("158010"),
  R = n("26290"),
  O = n("626135"),
  L = n("792125"),
  M = n("280570"),
  y = n("914788"),
  P = n("841409"),
  x = n("652262"),
  D = n("880257"),
  b = n("631885"),
  U = n("830746"),
  j = n("731934"),
  G = n("521450"),
  k = n("292352"),
  w = n("981631"),
  B = n("723359"),
  F = n("921944"),
  H = n("689938"),
  V = n("86662");
let Y = {
    [k.FamilyCenterSubPages.REQUESTS]: () => (0, a.jsx)(j.default, {}),
    [k.FamilyCenterSubPages.ACTIVITY]: () => (0, a.jsx)(U.default, {}),
    [k.FamilyCenterSubPages.SETTINGS]: () => (0, a.jsx)(G.default, {})
  },
  W = {
    [k.FamilyCenterSubPages.REQUESTS]: () => (0, a.jsx)(j.default, {}),
    [k.FamilyCenterSubPages.ACTIVITY]: () => (0, a.jsx)(U.default, {})
  };

function K(e) {
  let {
    section: t,
    handleItemSelect: n
  } = e, s = (0, b.usePendingRequestCount)(), l = (0, D.default)();
  return (0, a.jsxs)(c.TabBar, {
    className: V.settingsTabBar,
    "aria-label": H.default.Messages.FAMILY_CENTER_TITLE,
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: n,
    children: [(0, a.jsx)(c.TabBar.Item, {
      className: V.settingsTabBarItem,
      id: k.FamilyCenterSubPages.ACTIVITY,
      children: H.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
    }), (0, a.jsxs)(c.TabBar.Item, {
      className: V.settingsTabBarItem,
      id: k.FamilyCenterSubPages.REQUESTS,
      "aria-label": H.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
      children: [H.default.Messages.FAMILY_CENTER_REQUESTS_TAB, s > 0 ? (0, a.jsx)(R.NumberBadge, {
        className: V.badge,
        count: s
      }) : null]
    }), l ? (0, a.jsx)(c.TabBar.Item, {
      className: V.settingsTabBarItem,
      id: k.FamilyCenterSubPages.SETTINGS,
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
        id: k.FamilyCenterSubPages.ACTIVITY,
        className: V.item,
        children: H.default.Messages.FAMILY_CENTER_ACTIVITY_TAB
      }), (0, a.jsxs)(c.TabBar.Item, {
        id: k.FamilyCenterSubPages.REQUESTS,
        className: V.item,
        "aria-label": H.default.Messages.FAMILY_CENTER_REQUESTS_TAB,
        children: [H.default.Messages.FAMILY_CENTER_REQUESTS_TAB, o > 0 ? (0, a.jsx)(R.NumberBadge, {
          className: V.badge,
          count: o
        }) : null]
      })]
    })]
  })
}

function q() {
  let e = (0, D.default)(),
    t = (0, b.useAcceptedRequestsCount)(),
    n = (0, m.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE),
    l = (0, u.useStateFromStores)([y.default], () => y.default.getIsInitialized()),
    r = (0, x.useSelectedTeenId)(),
    {
      selectedTab: f,
      handleTabChange: h
    } = (0, P.default)(),
    _ = (0, N.useUID)(),
    S = A.default.getCurrentUser(),
    I = null != e,
    T = l && null != S && !I;
  return (s.useEffect(() => {
    (0, g.trackAppUIViewed)("family-center"), M.default.initialPageLoad(), !n && (0, m.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
      dismissAction: F.ContentDismissActionType.AUTO,
      forceTrack: !0
    })
  }, []), s.useEffect(() => {
    l && I && (O.default.track(w.AnalyticEvents.FAMILY_CENTER_VIEWED, {
      is_considered_adult: e,
      num_of_accepted_links: t,
      selected_teen_id: r,
      initial_page: k.FamilyCenterSubPageAnalyticsIds[f],
      source: k.FamilyCenterPageLocationAnalyticsIds[k.FamilyCenterPageLocation.SIDENAV]
    }), p.default.increment({
      name: o.MetricEvents.FAMILY_CENTER_VIEW
    }))
  }, [l, I]), T) ? ((0, E.openAgeGateModal)(B.AgeGateSource.FAMILY_CENTER), null) : (0, a.jsxs)("main", {
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
  } = (0, _.default)(h.default.FAMILY_CENTER), t = (0, D.default)(), n = (0, b.useAcceptedRequestsCount)(), l = (0, m.useIsDismissibleContentDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE), r = (0, u.useStateFromStores)([y.default], () => y.default.getIsInitialized()), S = (0, x.useSelectedTeenId)(), v = (0, u.useStateFromStores)([I.default], () => I.default.theme), {
    selectedTab: R,
    handleTabChange: L
  } = (0, P.default)(), U = (0, N.useUID)(), j = A.default.getCurrentUser(), G = null != t, Y = r && null != j && !G;
  if (s.useEffect(() => {
      f.setHomeLink(w.Routes.FAMILY_CENTER), (0, g.trackAppUIViewed)("family-center"), !y.default.isLoading() && y.default.canRefetch() && M.default.initialPageLoad(), !l && (0, m.markDismissibleContentAsDismissed)(d.DismissibleContent.FAMILY_CENTER_NEW_BADGE, {
        dismissAction: F.ContentDismissActionType.AUTO,
        forceTrack: !0
      })
    }, []), s.useEffect(() => {
      r && G && (O.default.track(w.AnalyticEvents.FAMILY_CENTER_VIEWED, {
        is_considered_adult: t,
        num_of_accepted_links: n,
        selected_teen_id: S,
        initial_page: k.FamilyCenterSubPageAnalyticsIds[R],
        source: k.FamilyCenterPageLocationAnalyticsIds[k.FamilyCenterPageLocation.SIDENAV]
      }), p.default.increment({
        name: o.MetricEvents.FAMILY_CENTER_VIEW
      }))
    }, [r, G]), s.useEffect(() => {
      let e = T.FamilyCenterEnabled.getSetting();
      r && t && void 0 === e && T.FamilyCenterEnabled.updateSetting(!0)
    }, [r, t]), Y) return (0, E.openAgeGateModal)(B.AgeGateSource.FAMILY_CENTER), null;
  let K = R !== k.FamilyCenterSubPages.SETTINGS ? R : k.FamilyCenterSubPages.ACTIVITY,
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
        children: (0, a.jsx)(c.Scroller, {
          children: (0, a.jsx)("div", {
            className: V.sideNavContent,
            children: q()
          })
        })
      })]
    })
  })
}