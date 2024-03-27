"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eA
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("16470"),
  o = n("974667"),
  u = n("394846"),
  d = n("446674"),
  c = n("151426"),
  f = n("551042"),
  E = n("77078"),
  h = n("450911"),
  _ = n("955153"),
  C = n("503525"),
  S = n("716241"),
  I = n("9759"),
  m = n("754493"),
  p = n("813531"),
  T = n("720694"),
  g = n("20606"),
  A = n("384997"),
  N = n("785770"),
  R = n("260488"),
  O = n("639547"),
  v = n("775032"),
  L = n("25132"),
  M = n("154889"),
  P = n("917247"),
  y = n("801388"),
  D = n("359499"),
  x = n("770469"),
  b = n("641078"),
  U = n("773367"),
  G = n("266782"),
  j = n("367226"),
  w = n("104589"),
  k = n("393027"),
  F = n("12896"),
  B = n("161778"),
  H = n("845579"),
  V = n("686470"),
  Y = n("27618"),
  W = n("697218"),
  K = n("160299"),
  z = n("521012"),
  q = n("791823"),
  Q = n("552712"),
  Z = n("330338"),
  X = n("311450"),
  J = n("774223"),
  $ = n("880013"),
  ee = n("556081"),
  et = n("216422"),
  en = n("155207"),
  ea = n("564875"),
  es = n("956089"),
  el = n("719923"),
  ei = n("882941"),
  er = n("570687"),
  eo = n("631316"),
  eu = n("524110"),
  ed = n("49111"),
  ec = n("782340"),
  ef = n("62599");
let eE = e => {
    let {
      selected: t,
      ...n
    } = e, s = (0, o.useListItem)("friends"), l = (0, d.useStateFromStores)([Y.default], () => Y.default.getPendingCount()), i = (0, p.default)(), {
      canViewBroadcasts: r
    } = I.default.useExperiment({
      location: "friends_tab_no_track"
    }), u = (0, m.default)();
    return (0, a.jsxs)(er.LinkButton, {
      selected: t,
      route: ed.Routes.FRIENDS,
      icon: ea.default,
      text: ec.default.Messages.FRIENDS,
      onClick: () => {
        S.default.trackWithMetadata(ed.AnalyticEvents.BROADCAST_LIST_VISITED, {
          num_active_broadcasts: i.length,
          friends_tab_clicked: !0,
          is_broadcasting: u
        })
      },
      ...n,
      ...s,
      children: [i.length > 0 && r && (0, a.jsx)(es.TextBadge, {
        color: g.default.BG_BRAND,
        text: (0, a.jsxs)("div", {
          className: ef.broadcastingBadge,
          children: [(0, a.jsx)(J.default, {
            className: ef.broadcastingIcon
          }), (0, a.jsx)(E.Text, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: i.length.toLocaleString()
          })]
        })
      }), l > 0 ? (0, a.jsx)(es.NumberBadge, {
        count: l
      }) : null]
    })
  },
  eh = e => {
    let {
      selected: t,
      hideGameUpdateProgressIndicator: n,
      ...s
    } = e, l = (0, o.useListItem)("library");
    return (0, a.jsx)(er.LinkButton, {
      selected: t,
      route: ed.Routes.APPLICATION_LIBRARY,
      icon: $.default,
      text: ec.default.Messages.LIBRARY,
      ...s,
      ...l,
      children: (0, a.jsx)(eu.default, {
        className: i(ef.downloadProgressCircle, {
          [ef.hideGameUpdateProgressIndicator]: n
        })
      })
    })
  },
  e_ = e => {
    let t, n, {
        selected: s,
        route: l,
        locationState: i,
        ...r
      } = e,
      u = (0, d.useStateFromStores)([W.default], () => W.default.getCurrentUser()),
      c = (0, d.useStateFromStores)([z.default], () => z.default.getPremiumTypeSubscription()),
      f = (0, o.useListItem)("nitro"),
      E = (0, P.usePremiumTrialOffer)(),
      h = (0, M.usePremiumDiscountOffer)(),
      _ = (0, d.useStateFromStores)([K.default], () => K.default.isLocalizedPromoEnabled),
      C = _ && null == E,
      S = (0, b.useIsEligibleForBogoPromotion)(),
      I = (0, j.default)(),
      m = (0, D.useTenureRewardBadgeDescription)(),
      p = s || null != E || null != h || S || I || null != m || null != u && Date.now() - u.createdAt.getTime() > 2592e6 || (0, el.hasPremiumSubscriptionToDisplay)(u, c);
    return p ? (S ? n = (0, a.jsx)(y.default, {
      isNitroTab: !0
    }) : null != m ? n = (0, a.jsx)(G.default, {
      copy: m
    }) : I ? n = (0, a.jsx)(G.default, {}) : null != h ? n = (0, a.jsx)(U.PremiumDiscountOfferTabBadge, {
      userDiscount: h,
      isTabSelected: s,
      includesAmountOff: !1
    }) : null != E ? n = (0, a.jsx)(U.PremiumTrialOfferTabBadge, {
      trialOffer: E,
      isTabSelected: s
    }) : C && (n = (0, a.jsx)(x.LocalizedPricingBadgeIcon, {
      entryPoint: x.BadgeEntryPoint.PrivateMessages
    }), !s && (t = ef.localizedPricingBadge)), (0, a.jsx)(er.LinkButton, {
      selected: s,
      route: l,
      icon: et.default,
      text: ec.default.Messages.PREMIUM,
      locationState: i,
      ...r,
      ...f,
      className: t,
      children: n
    })) : null
  },
  eC = e => {
    let {
      selected: t,
      route: n,
      locationState: s,
      ...l
    } = e, r = (0, o.useListItem)("activities"), u = (0, d.useStateFromStores)([B.default], () => B.default.getState().theme), c = (0, C.useActivitiesWhatsNewCount)();
    return (0, a.jsx)(er.LinkButton, {
      selected: t,
      route: n,
      icon: X.default,
      iconClassName: i(ef.activitiesBirthdayIcon, {
        [ef.activitiesBirthdayIconLight]: "light" === u
      }),
      text: ec.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_TAB_TITLE,
      locationState: s,
      ...l,
      ...r,
      children: c > 0 ? (0, a.jsx)(es.NumberBadge, {
        count: c
      }) : null
    })
  },
  eS = e => {
    let {
      selected: t
    } = e, n = (0, R.useMessageRequestsCount)(), s = (0, o.useListItem)("messageRequests"), {
      channelId: l
    } = (0, N.useMessageRequestSidebarState)(), i = (0, O.useShouldShowMessageRequestsRow)();
    if (!i) return null;
    let r = null == l ? void 0 : () => h.default.preload(ed.ME, l);
    return (0, a.jsx)(er.LinkButton, {
      selected: t,
      route: ed.Routes.MESSAGE_REQUESTS,
      icon: ee.default,
      text: ec.default.Messages.MESSAGE_REQUESTS,
      onClick: r,
      ...s,
      children: n > 0 ? (0, a.jsx)(es.NumberBadge, {
        count: n
      }) : null
    })
  },
  eI = e => {
    let {
      selected: t
    } = e, n = ec.default.Messages.FAMILY_CENTER_SIDEBAR_TITLE, l = (0, o.useListItem)("family-center"), i = H.FamilyCenterEnabled.useSetting(), r = (0, v.default)(), [u, d] = s.useState(!0);
    return i && r ? (0, a.jsx)(er.LinkButton, {
      selected: t,
      route: ed.Routes.FAMILY_CENTER,
      icon: en.default,
      text: n,
      onMouseEnter: () => {
        d(!0)
      },
      onMouseLeave: () => {
        d(!1)
      },
      interactiveClassName: ef.familyCenterLinkButton,
      ...l,
      children: (0, a.jsx)(em, {
        isParentHovered: u
      })
    }) : null
  },
  em = e => {
    let {
      isParentHovered: t
    } = e, s = (0, L.usePendingRequestCount)();
    return t ? (0, a.jsx)(er.CloseButton, {
      onClick: () => {
        (0, f.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("6674").then(n.bind(n, "6674"));
          return t => (0, a.jsx)(e, {
            ...t
          })
        })
      },
      "aria-label": ec.default.Messages.CLOSE
    }) : s > 0 ? (0, a.jsx)("div", {
      className: ef.familyCenterPendingBadge,
      children: (0, a.jsx)(es.NumberBadge, {
        count: s
      })
    }) : (0, a.jsx)(A.default, {
      contentTypes: [c.DismissibleContent.FAMILY_CENTER_NEW_BADGE],
      children: e => {
        let {
          visibleContent: t
        } = e;
        return t === c.DismissibleContent.FAMILY_CENTER_NEW_BADGE ? (0, a.jsx)(es.TextBadge, {
          text: ec.default.Messages.NEW,
          color: g.default.BG_BRAND
        }) : null
      }
    })
  },
  ep = () => (0, w.show)("DM_SEARCH");

function eT(e) {
  switch (e) {
    case ed.Routes.APPLICATION_LIBRARY:
      return ed.AnalyticsPages.LIBRARY;
    case ed.Routes.FRIENDS:
      return ed.AnalyticsPages.FRIENDS_LIST;
    case ed.Routes.COLLECTIBLES_SHOP:
      return ed.AnalyticsPages.COLLECTIBLES_SHOP
  }
  if (e.startsWith(ed.Routes.APPLICATION_STORE)) return e === ed.Routes.APPLICATION_STORE ? ed.AnalyticsPages.STORE_DIRECTORY_HOME : e.startsWith(ed.Routes.APPLICATION_STORE) ? ed.AnalyticsPages.STORE_DIRECTORY_BROWSE : ed.AnalyticsPages.STORE_LISTING;
  return ed.AnalyticsPages.DM_CHANNEL
}
let eg = e => {
  let {
    showLibrary: t,
    hasLibraryApplication: n,
    homeLink: s,
    storeLink: l,
    premiumTabSelected: o
  } = e, [d, c] = (0, k.default)(e => {
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
    className: ef.privateChannels,
    "aria-label": ec.default.Messages.PRIVATE_CHANNELS_A11Y_LABEL,
    children: [(0, a.jsx)(F.default, {
      tutorialId: "direct-messages",
      position: "right",
      offsetX: -52,
      children: (0, a.jsx)("div", {
        className: i(ef.searchBar, {
          [ef.themedHeaderMobile]: u.isMobile
        }),
        children: (0, a.jsx)("button", {
          type: "button",
          className: i(ef.searchBarComponent, {
            [ef.themedSearchBarMobile]: u.isMobile
          }),
          onClick: ep,
          children: ec.default.Messages.DM_SEARCH_PLACEHOLDER
        })
      })
    }), (0, a.jsxs)(eo.default, {
      ...e,
      version: c,
      selectedChannelId: d,
      showDMHeader: !0,
      children: [(0, a.jsx)(eE, {
        selected: null != c ? c === ed.Routes.FRIENDS : s === ed.Routes.FRIENDS
      }, "friends"), n && t ? (0, a.jsx)(eh, {
        selected: null == c ? null != s && s.startsWith(ed.Routes.APPLICATION_LIBRARY) : c.startsWith(ed.Routes.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: s === ed.Routes.APPLICATION_LIBRARY
      }, "library") : null, (0, a.jsx)(e_, {
        selected: null == c ? o : c.startsWith(ed.Routes.APPLICATION_STORE),
        route: null == l || location.pathname.startsWith(ed.Routes.ACTIVITIES) || location.pathname.startsWith(ed.Routes.APPLICATION_STORE) ? ed.Routes.APPLICATION_STORE : l,
        locationState: {
          analyticsSource: {
            page: eT(s),
            section: ed.AnalyticsSections.NAVIGATION,
            object: ed.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "premium"), f ? (0, a.jsx)(eC, {
        selected: null != c && c.startsWith(ed.Routes.ACTIVITIES) || null != s && s.startsWith(ed.Routes.ACTIVITIES),
        route: ed.Routes.ACTIVITIES,
        locationState: {
          analyticsSource: {
            page: eT(s),
            section: ed.AnalyticsSections.NAVIGATION,
            object: ed.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "activities") : null, (0, a.jsx)(eS, {
        selected: null == c ? null != s && s.startsWith(ed.Routes.MESSAGE_REQUESTS) : c === ed.Routes.MESSAGE_REQUESTS
      }, "message-requests"), (0, a.jsx)(T.CollectiblesShopButton, {
        selected: c === ed.Routes.COLLECTIBLES_SHOP || (null == s ? void 0 : s.startsWith(ed.Routes.COLLECTIBLES_SHOP)),
        locationState: {
          analyticsSource: {
            page: eT(s),
            section: ed.AnalyticsSections.NAVIGATION,
            object: ed.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), (0, a.jsx)(eI, {
        selected: null != s && s.startsWith(ed.Routes.FAMILY_CENTER) || null != c && c.startsWith(ed.Routes.FAMILY_CENTER)
      }, "family-center")]
    })]
  })
};

function eA() {
  let e = (0, d.useStateFromStores)([Z.default], () => Z.default.getHomeLink()),
    t = (0, d.useStateFromStores)([Q.default], () => {
      if (e === ed.Routes.APPLICATION_STORE) return !0;
      let t = (0, ei.getSKUIdFromURL)(e);
      if (null != t) {
        var n, a;
        return null !== (a = null === (n = Q.default.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== a && a
      }
      return !1
    }, [e]),
    n = !H.DisableGamesTab.useSetting(),
    {
      theme: s
    } = (0, d.useStateFromStoresObject)([B.default], () => ({
      theme: B.default.theme
    })),
    l = (0, d.useStateFromStores)([V.default], () => V.default.hasLibraryApplication()),
    i = (0, d.useStateFromStores)([q.default], () => q.default.getCurrentPath());
  return (0, a.jsx)(eg, {
    theme: s,
    showLibrary: n,
    hasLibraryApplication: l,
    storeLink: i,
    homeLink: e,
    premiumTabSelected: t
  })
}