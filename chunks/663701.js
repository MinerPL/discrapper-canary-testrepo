"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ed
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
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
  p = n("158631"),
  g = n("143614"),
  I = n("463119"),
  T = n("377171"),
  A = n("243778"),
  N = n("922409"),
  v = n("899740"),
  R = n("28476"),
  O = n("880257"),
  L = n("631885"),
  M = n("457396"),
  y = n("630571"),
  P = n("51596"),
  x = n("905423"),
  D = n("155409"),
  b = n("210887"),
  U = n("695346"),
  j = n("283595"),
  G = n("699516"),
  k = n("923834"),
  w = n("55563"),
  B = n("774343"),
  F = n("517802"),
  H = n("436088"),
  V = n("427828"),
  Y = n("916187"),
  W = n("158010"),
  K = n("988951"),
  z = n("26290"),
  q = n("814225"),
  Q = n("515753"),
  Z = n("831218"),
  X = n("339149"),
  J = n("981631"),
  $ = n("689938"),
  ee = n("279174");
let et = e => {
    let {
      selected: t,
      ...n
    } = e, s = (0, o.useListItem)("friends"), l = (0, d.useStateFromStores)([G.default], () => G.default.getPendingCount()), i = (0, g.default)(), {
      canViewBroadcasts: r
    } = S.default.useExperiment({
      location: "friends_tab_no_track"
    }), u = (0, p.default)();
    return (0, a.jsxs)(Q.LinkButton, {
      selected: t,
      route: J.Routes.FRIENDS,
      icon: K.default,
      text: $.default.Messages.FRIENDS,
      onClick: () => {
        m.default.trackWithMetadata(J.AnalyticEvents.BROADCAST_LIST_VISITED, {
          num_active_broadcasts: i.length,
          friends_tab_clicked: !0,
          is_broadcasting: u
        })
      },
      ...n,
      ...s,
      children: [i.length > 0 && r && (0, a.jsx)(z.TextBadge, {
        color: T.default.BG_BRAND,
        text: (0, a.jsxs)("div", {
          className: ee.broadcastingBadge,
          children: [(0, a.jsx)(H.default, {
            className: ee.broadcastingIcon
          }), (0, a.jsx)(E.Text, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: i.length.toLocaleString()
          })]
        })
      }), l > 0 ? (0, a.jsx)(z.NumberBadge, {
        count: l
      }) : null]
    })
  },
  en = e => {
    let {
      selected: t,
      hideGameUpdateProgressIndicator: n,
      ...s
    } = e, l = (0, o.useListItem)("library");
    return (0, a.jsx)(Q.LinkButton, {
      selected: t,
      route: J.Routes.APPLICATION_LIBRARY,
      icon: V.default,
      text: $.default.Messages.LIBRARY,
      ...s,
      ...l,
      children: (0, a.jsx)(X.default, {
        className: i()(ee.downloadProgressCircle, {
          [ee.hideGameUpdateProgressIndicator]: n
        })
      })
    })
  },
  ea = e => {
    let {
      selected: t,
      route: n,
      locationState: s,
      ...l
    } = e, r = (0, o.useListItem)("activities"), u = (0, d.useStateFromStores)([b.default], () => b.default.getState().theme), c = (0, C.useActivitiesWhatsNewCount)();
    return (0, a.jsx)(Q.LinkButton, {
      selected: t,
      route: n,
      icon: F.default,
      iconClassName: i()(ee.activitiesBirthdayIcon, {
        [ee.activitiesBirthdayIconLight]: "light" === u
      }),
      text: $.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_TAB_TITLE,
      locationState: s,
      ...l,
      ...r,
      children: c > 0 ? (0, a.jsx)(z.NumberBadge, {
        count: c
      }) : null
    })
  },
  es = e => {
    let {
      selected: t
    } = e, n = (0, v.useMessageRequestsCount)(), s = (0, o.useListItem)("messageRequests"), {
      channelId: l
    } = (0, N.useMessageRequestSidebarState)();
    if (!(0, R.useShouldShowMessageRequestsRow)()) return null;
    let i = null == l ? void 0 : () => h.default.preload(J.ME, l);
    return (0, a.jsx)(Q.LinkButton, {
      selected: t,
      route: J.Routes.MESSAGE_REQUESTS,
      icon: Y.default,
      text: $.default.Messages.MESSAGE_REQUESTS,
      onClick: i,
      ...s,
      children: n > 0 ? (0, a.jsx)(z.NumberBadge, {
        count: n
      }) : null
    })
  },
  el = e => {
    let {
      selected: t
    } = e, n = $.default.Messages.FAMILY_CENTER_SIDEBAR_TITLE, l = (0, o.useListItem)("family-center"), i = U.FamilyCenterEnabled.useSetting(), r = (0, O.default)(), [u, d] = s.useState(!0);
    return i && r ? (0, a.jsx)(Q.LinkButton, {
      selected: t,
      route: J.Routes.FAMILY_CENTER,
      icon: W.default,
      text: n,
      onMouseEnter: () => {
        d(!0)
      },
      onMouseLeave: () => {
        d(!1)
      },
      interactiveClassName: ee.familyCenterLinkButton,
      ...l,
      children: (0, a.jsx)(ei, {
        isParentHovered: u
      })
    }) : null
  },
  ei = e => {
    let {
      isParentHovered: t
    } = e, s = (0, L.usePendingRequestCount)();
    return t ? (0, a.jsx)(Q.CloseButton, {
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
      "aria-label": $.default.Messages.CLOSE
    }) : s > 0 ? (0, a.jsx)("div", {
      className: ee.familyCenterPendingBadge,
      children: (0, a.jsx)(z.NumberBadge, {
        count: s
      })
    }) : (0, a.jsx)(A.default, {
      contentTypes: [c.DismissibleContent.FAMILY_CENTER_NEW_BADGE],
      children: e => {
        let {
          visibleContent: t
        } = e;
        return t === c.DismissibleContent.FAMILY_CENTER_NEW_BADGE ? (0, a.jsx)(z.TextBadge, {
          text: $.default.Messages.NEW,
          color: T.default.BG_BRAND
        }) : null
      }
    })
  },
  er = () => (0, P.show)("DM_SEARCH");

function eo(e) {
  switch (e) {
    case J.Routes.APPLICATION_LIBRARY:
      return J.AnalyticsPages.LIBRARY;
    case J.Routes.FRIENDS:
      return J.AnalyticsPages.FRIENDS_LIST;
    case J.Routes.COLLECTIBLES_SHOP:
      return J.AnalyticsPages.COLLECTIBLES_SHOP;
    case J.Routes.QUEST_HOME:
      return J.AnalyticsPages.QUEST_HOME
  }
  if (e.startsWith(J.Routes.APPLICATION_STORE)) return e === J.Routes.APPLICATION_STORE ? J.AnalyticsPages.STORE_DIRECTORY_HOME : e.startsWith(J.Routes.APPLICATION_STORE) ? J.AnalyticsPages.STORE_DIRECTORY_BROWSE : J.AnalyticsPages.STORE_LISTING;
  return J.AnalyticsPages.DM_CHANNEL
}
let eu = e => {
  let {
    showLibrary: t,
    hasLibraryApplication: n,
    homeLink: s,
    storeLink: l,
    premiumTabSelected: o
  } = e, [d, c] = (0, x.default)(e => {
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
    className: ee.privateChannels,
    "aria-label": $.default.Messages.PRIVATE_CHANNELS_A11Y_LABEL,
    children: [(0, a.jsx)(D.default, {
      tutorialId: "direct-messages",
      position: "right",
      offsetX: -52,
      children: (0, a.jsx)("div", {
        className: i()(ee.searchBar, {
          [ee.themedHeaderMobile]: u.isMobile
        }),
        children: (0, a.jsx)("button", {
          type: "button",
          className: i()(ee.searchBarComponent, {
            [ee.themedSearchBarMobile]: u.isMobile
          }),
          onClick: er,
          children: $.default.Messages.DM_SEARCH_PLACEHOLDER
        })
      })
    }), (0, a.jsxs)(Z.default, {
      ...e,
      version: c,
      selectedChannelId: d,
      showDMHeader: !0,
      children: [(0, a.jsx)(et, {
        selected: null != c ? c === J.Routes.FRIENDS : s === J.Routes.FRIENDS
      }, "friends"), n && t ? (0, a.jsx)(en, {
        selected: null == c ? null != s && s.startsWith(J.Routes.APPLICATION_LIBRARY) : c.startsWith(J.Routes.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: s === J.Routes.APPLICATION_LIBRARY
      }, "library") : null, (0, a.jsx)(M.NitroTabButton, {
        selected: null == c ? o : c.startsWith(J.Routes.APPLICATION_STORE),
        route: null == l || location.pathname.startsWith(J.Routes.ACTIVITIES) || location.pathname.startsWith(J.Routes.APPLICATION_STORE) ? J.Routes.APPLICATION_STORE : l,
        locationState: {
          analyticsSource: {
            page: eo(s),
            section: J.AnalyticsSections.NAVIGATION,
            object: J.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "premium"), f ? (0, a.jsx)(ea, {
        selected: null != c && c.startsWith(J.Routes.ACTIVITIES) || null != s && s.startsWith(J.Routes.ACTIVITIES),
        route: J.Routes.ACTIVITIES,
        locationState: {
          analyticsSource: {
            page: eo(s),
            section: J.AnalyticsSections.NAVIGATION,
            object: J.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "activities") : null, (0, a.jsx)(es, {
        selected: null == c ? null != s && s.startsWith(J.Routes.MESSAGE_REQUESTS) : c === J.Routes.MESSAGE_REQUESTS
      }, "message-requests"), (0, a.jsx)(I.CollectiblesShopButton, {
        selected: c === J.Routes.COLLECTIBLES_SHOP || (null == s ? void 0 : s.startsWith(J.Routes.COLLECTIBLES_SHOP)),
        locationState: {
          analyticsSource: {
            page: eo(s),
            section: J.AnalyticsSections.NAVIGATION,
            object: J.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), (0, a.jsx)(y.default, {
        selected: c === J.Routes.QUEST_HOME || (null == s ? void 0 : s.startsWith(J.Routes.QUEST_HOME)),
        locationState: {
          analyticsSource: {
            page: eo(s),
            section: J.AnalyticsSections.NAVIGATION,
            object: J.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "quest-home"), (0, a.jsx)(el, {
        selected: null != s && s.startsWith(J.Routes.FAMILY_CENTER) || null != c && c.startsWith(J.Routes.FAMILY_CENTER)
      }, "family-center")]
    })]
  })
};

function ed() {
  let e = (0, d.useStateFromStores)([B.default], () => B.default.getHomeLink()),
    t = (0, d.useStateFromStores)([w.default], () => {
      if (e === J.Routes.APPLICATION_STORE) return !0;
      let t = (0, q.getSKUIdFromURL)(e);
      if (null != t) {
        var n, a;
        return null !== (a = null === (n = w.default.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== a && a
      }
      return !1
    }, [e]),
    n = !U.DisableGamesTab.useSetting(),
    {
      theme: s
    } = (0, d.useStateFromStoresObject)([b.default], () => ({
      theme: b.default.theme
    })),
    l = (0, d.useStateFromStores)([j.default], () => j.default.hasLibraryApplication()),
    i = (0, d.useStateFromStores)([k.default], () => k.default.getCurrentPath());
  return (0, a.jsx)(eu, {
    theme: s,
    showLibrary: n,
    hasLibraryApplication: l,
    storeLink: i,
    homeLink: e,
    premiumTabSelected: t
  })
}