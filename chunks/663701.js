"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eu
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("143927"),
  o = n("924826"),
  u = n("873546"),
  d = n("442837"),
  c = n("524437"),
  f = n("952265"),
  E = n("481060"),
  h = n("493683"),
  _ = n("348600"),
  C = n("257968"),
  m = n("367907"),
  S = n("770471"),
  I = n("158631"),
  p = n("143614"),
  T = n("463119"),
  g = n("377171"),
  A = n("243778"),
  N = n("922409"),
  v = n("899740"),
  O = n("28476"),
  R = n("880257"),
  L = n("631885"),
  P = n("457396"),
  M = n("51596"),
  y = n("905423"),
  D = n("155409"),
  b = n("210887"),
  x = n("695346"),
  U = n("283595"),
  j = n("699516"),
  G = n("923834"),
  w = n("55563"),
  k = n("774343"),
  F = n("517802"),
  B = n("436088"),
  H = n("427828"),
  V = n("916187"),
  Y = n("158010"),
  W = n("988951"),
  K = n("26290"),
  z = n("814225"),
  q = n("515753"),
  Q = n("831218"),
  Z = n("339149"),
  X = n("981631"),
  J = n("689938"),
  $ = n("344934");
let ee = e => {
    let {
      selected: t,
      ...n
    } = e, s = (0, o.useListItem)("friends"), l = (0, d.useStateFromStores)([j.default], () => j.default.getPendingCount()), i = (0, p.default)(), {
      canViewBroadcasts: r
    } = S.default.useExperiment({
      location: "friends_tab_no_track"
    }), u = (0, I.default)();
    return (0, a.jsxs)(q.LinkButton, {
      selected: t,
      route: X.Routes.FRIENDS,
      icon: W.default,
      text: J.default.Messages.FRIENDS,
      onClick: () => {
        m.default.trackWithMetadata(X.AnalyticEvents.BROADCAST_LIST_VISITED, {
          num_active_broadcasts: i.length,
          friends_tab_clicked: !0,
          is_broadcasting: u
        })
      },
      ...n,
      ...s,
      children: [i.length > 0 && r && (0, a.jsx)(K.TextBadge, {
        color: g.default.BG_BRAND,
        text: (0, a.jsxs)("div", {
          className: $.broadcastingBadge,
          children: [(0, a.jsx)(B.default, {
            className: $.broadcastingIcon
          }), (0, a.jsx)(E.Text, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: i.length.toLocaleString()
          })]
        })
      }), l > 0 ? (0, a.jsx)(K.NumberBadge, {
        count: l
      }) : null]
    })
  },
  et = e => {
    let {
      selected: t,
      hideGameUpdateProgressIndicator: n,
      ...s
    } = e, l = (0, o.useListItem)("library");
    return (0, a.jsx)(q.LinkButton, {
      selected: t,
      route: X.Routes.APPLICATION_LIBRARY,
      icon: H.default,
      text: J.default.Messages.LIBRARY,
      ...s,
      ...l,
      children: (0, a.jsx)(Z.default, {
        className: i()($.downloadProgressCircle, {
          [$.hideGameUpdateProgressIndicator]: n
        })
      })
    })
  },
  en = e => {
    let {
      selected: t,
      route: n,
      locationState: s,
      ...l
    } = e, r = (0, o.useListItem)("activities"), u = (0, d.useStateFromStores)([b.default], () => b.default.getState().theme), c = (0, C.useActivitiesWhatsNewCount)();
    return (0, a.jsx)(q.LinkButton, {
      selected: t,
      route: n,
      icon: F.default,
      iconClassName: i()($.activitiesBirthdayIcon, {
        [$.activitiesBirthdayIconLight]: "light" === u
      }),
      text: J.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_TAB_TITLE,
      locationState: s,
      ...l,
      ...r,
      children: c > 0 ? (0, a.jsx)(K.NumberBadge, {
        count: c
      }) : null
    })
  },
  ea = e => {
    let {
      selected: t
    } = e, n = (0, v.useMessageRequestsCount)(), s = (0, o.useListItem)("messageRequests"), {
      channelId: l
    } = (0, N.useMessageRequestSidebarState)();
    if (!(0, O.useShouldShowMessageRequestsRow)()) return null;
    let i = null == l ? void 0 : () => h.default.preload(X.ME, l);
    return (0, a.jsx)(q.LinkButton, {
      selected: t,
      route: X.Routes.MESSAGE_REQUESTS,
      icon: V.default,
      text: J.default.Messages.MESSAGE_REQUESTS,
      onClick: i,
      ...s,
      children: n > 0 ? (0, a.jsx)(K.NumberBadge, {
        count: n
      }) : null
    })
  },
  es = e => {
    let {
      selected: t
    } = e, n = J.default.Messages.FAMILY_CENTER_SIDEBAR_TITLE, l = (0, o.useListItem)("family-center"), i = x.FamilyCenterEnabled.useSetting(), r = (0, R.default)(), [u, d] = s.useState(!0);
    return i && r ? (0, a.jsx)(q.LinkButton, {
      selected: t,
      route: X.Routes.FAMILY_CENTER,
      icon: Y.default,
      text: n,
      onMouseEnter: () => {
        d(!0)
      },
      onMouseLeave: () => {
        d(!1)
      },
      interactiveClassName: $.familyCenterLinkButton,
      ...l,
      children: (0, a.jsx)(el, {
        isParentHovered: u
      })
    }) : null
  },
  el = e => {
    let {
      isParentHovered: t
    } = e, s = (0, L.usePendingRequestCount)();
    return t ? (0, a.jsx)(q.CloseButton, {
      onClick: () => {
        (0, f.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("44153")]).then(n.bind(n, "760949"));
          return t => (0, a.jsx)(e, {
            ...t
          })
        })
      },
      "aria-label": J.default.Messages.CLOSE
    }) : s > 0 ? (0, a.jsx)("div", {
      className: $.familyCenterPendingBadge,
      children: (0, a.jsx)(K.NumberBadge, {
        count: s
      })
    }) : (0, a.jsx)(A.default, {
      contentTypes: [c.DismissibleContent.FAMILY_CENTER_NEW_BADGE],
      children: e => {
        let {
          visibleContent: t
        } = e;
        return t === c.DismissibleContent.FAMILY_CENTER_NEW_BADGE ? (0, a.jsx)(K.TextBadge, {
          text: J.default.Messages.NEW,
          color: g.default.BG_BRAND
        }) : null
      }
    })
  },
  ei = () => (0, M.show)("DM_SEARCH");

function er(e) {
  switch (e) {
    case X.Routes.APPLICATION_LIBRARY:
      return X.AnalyticsPages.LIBRARY;
    case X.Routes.FRIENDS:
      return X.AnalyticsPages.FRIENDS_LIST;
    case X.Routes.COLLECTIBLES_SHOP:
      return X.AnalyticsPages.COLLECTIBLES_SHOP
  }
  if (e.startsWith(X.Routes.APPLICATION_STORE)) return e === X.Routes.APPLICATION_STORE ? X.AnalyticsPages.STORE_DIRECTORY_HOME : e.startsWith(X.Routes.APPLICATION_STORE) ? X.AnalyticsPages.STORE_DIRECTORY_BROWSE : X.AnalyticsPages.STORE_LISTING;
  return X.AnalyticsPages.DM_CHANNEL
}
let eo = e => {
  let {
    showLibrary: t,
    hasLibraryApplication: n,
    homeLink: s,
    storeLink: l,
    premiumTabSelected: o
  } = e, [d, c] = (0, y.default)(e => {
    let {
      channelId: t,
      path: n
    } = e;
    return [t, n]
  }, r.default), {
    enabled: f
  } = _.BirthdayActivitiesExperiment.useExperiment({
    location: "a718d6_2"
  }, {
    autoTrackExposure: !0
  });
  return (0, a.jsxs)("nav", {
    className: $.privateChannels,
    "aria-label": J.default.Messages.PRIVATE_CHANNELS_A11Y_LABEL,
    children: [(0, a.jsx)(D.default, {
      tutorialId: "direct-messages",
      position: "right",
      offsetX: -52,
      children: (0, a.jsx)("div", {
        className: i()($.searchBar, {
          [$.themedHeaderMobile]: u.isMobile
        }),
        children: (0, a.jsx)("button", {
          type: "button",
          className: i()($.searchBarComponent, {
            [$.themedSearchBarMobile]: u.isMobile
          }),
          onClick: ei,
          children: J.default.Messages.DM_SEARCH_PLACEHOLDER
        })
      })
    }), (0, a.jsxs)(Q.default, {
      ...e,
      version: c,
      selectedChannelId: d,
      showDMHeader: !0,
      children: [(0, a.jsx)(ee, {
        selected: null != c ? c === X.Routes.FRIENDS : s === X.Routes.FRIENDS
      }, "friends"), n && t ? (0, a.jsx)(et, {
        selected: null == c ? null != s && s.startsWith(X.Routes.APPLICATION_LIBRARY) : c.startsWith(X.Routes.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: s === X.Routes.APPLICATION_LIBRARY
      }, "library") : null, (0, a.jsx)(P.NitroTabButton, {
        selected: null == c ? o : c.startsWith(X.Routes.APPLICATION_STORE),
        route: null == l || location.pathname.startsWith(X.Routes.ACTIVITIES) || location.pathname.startsWith(X.Routes.APPLICATION_STORE) ? X.Routes.APPLICATION_STORE : l,
        locationState: {
          analyticsSource: {
            page: er(s),
            section: X.AnalyticsSections.NAVIGATION,
            object: X.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "premium"), f ? (0, a.jsx)(en, {
        selected: null != c && c.startsWith(X.Routes.ACTIVITIES) || null != s && s.startsWith(X.Routes.ACTIVITIES),
        route: X.Routes.ACTIVITIES,
        locationState: {
          analyticsSource: {
            page: er(s),
            section: X.AnalyticsSections.NAVIGATION,
            object: X.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "activities") : null, (0, a.jsx)(ea, {
        selected: null == c ? null != s && s.startsWith(X.Routes.MESSAGE_REQUESTS) : c === X.Routes.MESSAGE_REQUESTS
      }, "message-requests"), (0, a.jsx)(T.CollectiblesShopButton, {
        selected: c === X.Routes.COLLECTIBLES_SHOP || (null == s ? void 0 : s.startsWith(X.Routes.COLLECTIBLES_SHOP)),
        locationState: {
          analyticsSource: {
            page: er(s),
            section: X.AnalyticsSections.NAVIGATION,
            object: X.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), (0, a.jsx)(es, {
        selected: null != s && s.startsWith(X.Routes.FAMILY_CENTER) || null != c && c.startsWith(X.Routes.FAMILY_CENTER)
      }, "family-center")]
    })]
  })
};

function eu() {
  let e = (0, d.useStateFromStores)([k.default], () => k.default.getHomeLink()),
    t = (0, d.useStateFromStores)([w.default], () => {
      if (e === X.Routes.APPLICATION_STORE) return !0;
      let t = (0, z.getSKUIdFromURL)(e);
      if (null != t) {
        var n, a;
        return null !== (a = null === (n = w.default.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== a && a
      }
      return !1
    }, [e]),
    n = !x.DisableGamesTab.useSetting(),
    {
      theme: s
    } = (0, d.useStateFromStoresObject)([b.default], () => ({
      theme: b.default.theme
    })),
    l = (0, d.useStateFromStores)([U.default], () => U.default.hasLibraryApplication()),
    i = (0, d.useStateFromStores)([G.default], () => G.default.getCurrentPath());
  return (0, a.jsx)(eo, {
    theme: s,
    showLibrary: n,
    hasLibraryApplication: l,
    storeLink: i,
    homeLink: e,
    premiumTabSelected: t
  })
}