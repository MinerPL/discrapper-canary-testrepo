"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eD
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("16470"),
  o = n("974667"),
  u = n("394846"),
  d = n("446674"),
  c = n("151426"),
  f = n("551042"),
  E = n("77078"),
  _ = n("450911"),
  h = n("955153"),
  C = n("503525"),
  I = n("812204"),
  T = n("716241"),
  S = n("685665"),
  p = n("9759"),
  m = n("754493"),
  A = n("813531"),
  g = n("21526"),
  N = n("176555"),
  R = n("232374"),
  O = n("833514"),
  L = n("20606"),
  v = n("384997"),
  M = n("785770"),
  P = n("260488"),
  D = n("639547"),
  y = n("775032"),
  x = n("25132"),
  b = n("300962"),
  U = n("154889"),
  G = n("917247"),
  j = n("801388"),
  w = n("770469"),
  k = n("641078"),
  F = n("773367"),
  H = n("266782"),
  B = n("367226"),
  V = n("104589"),
  Y = n("393027"),
  W = n("12896"),
  K = n("161778"),
  z = n("845579"),
  q = n("686470"),
  Q = n("27618"),
  Z = n("697218"),
  X = n("160299"),
  J = n("521012"),
  $ = n("791823"),
  ee = n("552712"),
  et = n("330338"),
  en = n("311450"),
  ea = n("743826"),
  es = n("774223"),
  ei = n("880013"),
  el = n("556081"),
  er = n("216422"),
  eo = n("155207"),
  eu = n("564875"),
  ed = n("956089"),
  ec = n("719923"),
  ef = n("882941"),
  eE = n("570687"),
  e_ = n("631316"),
  eh = n("524110"),
  eC = n("49111"),
  eI = n("782340"),
  eT = n("592265");
let eS = e => {
    let {
      selected: t,
      ...n
    } = e, s = (0, o.useListItem)("friends"), i = (0, d.useStateFromStores)([Q.default], () => Q.default.getPendingCount()), l = (0, A.default)(), {
      canViewBroadcasts: r
    } = p.default.useExperiment({
      location: "friends_tab_no_track"
    }), u = (0, m.default)();
    return (0, a.jsxs)(eE.LinkButton, {
      selected: t,
      route: eC.Routes.FRIENDS,
      icon: eu.default,
      text: eI.default.Messages.FRIENDS,
      onClick: () => {
        T.default.trackWithMetadata(eC.AnalyticEvents.BROADCAST_LIST_VISITED, {
          num_active_broadcasts: l.length,
          friends_tab_clicked: !0,
          is_broadcasting: u
        })
      },
      ...n,
      ...s,
      children: [l.length > 0 && r && (0, a.jsx)(ed.TextBadge, {
        color: L.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND,
        text: (0, a.jsxs)("div", {
          className: eT.broadcastingBadge,
          children: [(0, a.jsx)(es.default, {
            className: eT.broadcastingIcon
          }), (0, a.jsx)(E.Text, {
            variant: "text-xs/semibold",
            color: "always-white",
            children: l.length.toLocaleString()
          })]
        })
      }), i > 0 ? (0, a.jsx)(ed.NumberBadge, {
        count: i
      }) : null]
    })
  },
  ep = e => {
    let {
      selected: t,
      hideGameUpdateProgressIndicator: n,
      ...s
    } = e, i = (0, o.useListItem)("library");
    return (0, a.jsx)(eE.LinkButton, {
      selected: t,
      route: eC.Routes.APPLICATION_LIBRARY,
      icon: ei.default,
      text: eI.default.Messages.LIBRARY,
      ...s,
      ...i,
      children: (0, a.jsx)(eh.default, {
        className: l(eT.downloadProgressCircle, {
          [eT.hideGameUpdateProgressIndicator]: n
        })
      })
    })
  },
  em = e => {
    let t, n, {
        selected: s,
        route: i,
        locationState: l,
        ...r
      } = e,
      u = (0, d.useStateFromStores)([Z.default], () => Z.default.getCurrentUser()),
      c = (0, d.useStateFromStores)([J.default], () => J.default.getPremiumTypeSubscription()),
      f = (0, o.useListItem)("nitro"),
      E = (0, G.usePremiumTrialOffer)(),
      _ = (0, U.usePremiumDiscountOffer)(),
      h = (0, d.useStateFromStores)([X.default], () => X.default.isLocalizedPromoEnabled),
      C = h && null == E,
      I = (0, k.useIsEligibleForBogoPromotion)(),
      T = (0, B.default)(),
      {
        enabled: S
      } = (0, b.default)(),
      p = s || null != E || null != _ || I || T || null != u && Date.now() - u.createdAt.getTime() > 2592e6 || (0, ec.hasPremiumSubscriptionToDisplay)(u, c);
    return p && (!S || s) ? (I ? n = (0, a.jsx)(j.default, {
      isNitroTab: !0
    }) : T ? n = (0, a.jsx)(H.default, {}) : null != _ ? n = (0, a.jsx)(F.PremiumDiscountOfferTabBadge, {
      userDiscount: _,
      isTabSelected: s,
      includesAmountOff: !1
    }) : null != E ? n = (0, a.jsx)(F.PremiumTrialOfferTabBadge, {
      trialOffer: E,
      isTabSelected: s
    }) : C && (n = (0, a.jsx)(w.LocalizedPricingBadgeIcon, {
      entryPoint: w.BadgeEntryPoint.PrivateMessages
    }), !s && (t = eT.localizedPricingBadge)), (0, a.jsx)(eE.LinkButton, {
      selected: s,
      route: i,
      icon: er.default,
      text: eI.default.Messages.PREMIUM,
      locationState: l,
      ...r,
      ...f,
      className: t,
      children: n
    })) : null
  },
  eA = e => {
    let {
      selected: t,
      route: n,
      locationState: s,
      ...i
    } = e, r = (0, o.useListItem)("activities"), u = (0, d.useStateFromStores)([K.default], () => K.default.getState().theme), c = (0, C.useActivitiesWhatsNewCount)();
    return (0, a.jsx)(eE.LinkButton, {
      selected: t,
      route: n,
      icon: en.default,
      iconClassName: l(eT.activitiesBirthdayIcon, {
        [eT.activitiesBirthdayIconLight]: "light" === u
      }),
      text: eI.default.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_TAB_TITLE,
      locationState: s,
      ...i,
      ...r,
      children: c > 0 ? (0, a.jsx)(ed.NumberBadge, {
        count: c
      }) : null
    })
  },
  eg = e => {
    let {
      selected: t
    } = e, n = (0, P.useMessageRequestsCount)(), s = (0, o.useListItem)("messageRequests"), {
      channelId: i
    } = (0, M.useMessageRequestSidebarState)(), l = (0, D.useShouldShowMessageRequestsRow)();
    if (!l) return null;
    let r = null == i ? void 0 : () => _.default.preload(eC.ME, i);
    return (0, a.jsx)(eE.LinkButton, {
      selected: t,
      route: eC.Routes.MESSAGE_REQUESTS,
      icon: el.default,
      text: eI.default.Messages.MESSAGE_REQUESTS,
      onClick: r,
      ...s,
      children: n > 0 ? (0, a.jsx)(ed.NumberBadge, {
        count: n
      }) : null
    })
  },
  eN = () => (0, a.jsx)(ed.PremiumBadge, {
    text: eI.default.Messages.NEW
  }),
  eR = e => {
    let {
      selected: t,
      locationState: n
    } = e, s = (0, o.useListItem)("shop"), i = I.default.HOME_PAGE_SHOP_TAB, {
      analyticsLocations: l
    } = (0, S.default)(i), {
      collectiblesShopTabCoachmark: r,
      dismissCollectiblesShopTabCoachmark: u
    } = (0, R.default)(), {
      collectiblesShopTabNewBadge: d,
      dismissCollectiblesShopTabNewBadge: f
    } = (0, O.default)(), _ = (0, a.jsx)(eE.LinkButton, {
      selected: t,
      route: eC.Routes.COLLECTIBLES_SHOP,
      icon: ea.default,
      text: eI.default.Messages.COLLECTIBLES_SHOP,
      onClick: () => {
        (0, g.openCollectiblesShop)({
          openInLayer: !1,
          analyticsSource: i,
          analyticsLocations: l
        }), f(), u()
      },
      locationState: n,
      ...s,
      children: d === c.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_NEW_BADGE && (0, a.jsx)(eN, {})
    });
    return r !== c.DismissibleContent.COLLECTIBLES_SHOP_CYBERPUNK_COACHMARK ? _ : (0, a.jsx)(E.Popout, {
      renderPopout: () => (0, a.jsx)(N.default, {}),
      animation: E.Popout.Animation.TRANSLATE,
      align: "top",
      shouldShow: !0,
      children: () => _
    })
  },
  eO = e => {
    let {
      selected: t
    } = e, n = eI.default.Messages.FAMILY_CENTER_SIDEBAR_TITLE, i = (0, o.useListItem)("family-center"), l = z.FamilyCenterEnabled.useSetting(), r = (0, y.default)(), [u, d] = s.useState(!0);
    return l && r ? (0, a.jsx)(eE.LinkButton, {
      selected: t,
      route: eC.Routes.FAMILY_CENTER,
      icon: eo.default,
      text: n,
      onMouseEnter: () => {
        d(!0)
      },
      onMouseLeave: () => {
        d(!1)
      },
      interactiveClassName: eT.familyCenterLinkButton,
      ...i,
      children: (0, a.jsx)(eL, {
        isParentHovered: u
      })
    }) : null
  },
  eL = e => {
    let {
      isParentHovered: t
    } = e, s = (0, x.usePendingRequestCount)();
    return t ? (0, a.jsx)(eE.CloseButton, {
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
      "aria-label": eI.default.Messages.CLOSE
    }) : s > 0 ? (0, a.jsx)("div", {
      className: eT.familyCenterPendingBadge,
      children: (0, a.jsx)(ed.NumberBadge, {
        count: s
      })
    }) : (0, a.jsx)(v.default, {
      contentTypes: [c.DismissibleContent.FAMILY_CENTER_NEW_BADGE],
      children: e => {
        let {
          visibleContent: t
        } = e;
        return t === c.DismissibleContent.FAMILY_CENTER_NEW_BADGE ? (0, a.jsx)(ed.TextBadge, {
          text: eI.default.Messages.NEW,
          color: L.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
        }) : null
      }
    })
  },
  ev = () => (0, V.show)("DM_SEARCH");

function eM(e) {
  switch (e) {
    case eC.Routes.APPLICATION_LIBRARY:
      return eC.AnalyticsPages.LIBRARY;
    case eC.Routes.FRIENDS:
      return eC.AnalyticsPages.FRIENDS_LIST;
    case eC.Routes.COLLECTIBLES_SHOP:
      return eC.AnalyticsPages.COLLECTIBLES_SHOP
  }
  if (e.startsWith(eC.Routes.APPLICATION_STORE)) return e === eC.Routes.APPLICATION_STORE ? eC.AnalyticsPages.STORE_DIRECTORY_HOME : e.startsWith(eC.Routes.APPLICATION_STORE) ? eC.AnalyticsPages.STORE_DIRECTORY_BROWSE : eC.AnalyticsPages.STORE_LISTING;
  return eC.AnalyticsPages.DM_CHANNEL
}
let eP = e => {
  let {
    showLibrary: t,
    hasLibraryApplication: n,
    homeLink: s,
    storeLink: i,
    premiumTabSelected: o
  } = e, [d, c] = (0, Y.default)(e => {
    let {
      channelId: t,
      path: n
    } = e;
    return [t, n]
  }, r.default), {
    enabled: f
  } = h.BirthdayActivitiesExperiment.useExperiment({
    location: "a718d6_2"
  }, {
    autoTrackExposure: !0
  });
  return (0, a.jsxs)("nav", {
    className: eT.privateChannels,
    "aria-label": eI.default.Messages.PRIVATE_CHANNELS_A11Y_LABEL,
    children: [(0, a.jsx)(W.default, {
      tutorialId: "direct-messages",
      position: "right",
      offsetX: -52,
      children: (0, a.jsx)("div", {
        className: l(eT.searchBar, {
          [eT.themedHeaderMobile]: u.isMobile
        }),
        children: (0, a.jsx)("button", {
          type: "button",
          className: l(eT.searchBarComponent, {
            [eT.themedSearchBarMobile]: u.isMobile
          }),
          onClick: ev,
          children: eI.default.Messages.DM_SEARCH_PLACEHOLDER
        })
      })
    }), (0, a.jsxs)(e_.default, {
      ...e,
      version: c,
      selectedChannelId: d,
      showDMHeader: !0,
      children: [(0, a.jsx)(eS, {
        selected: null != c ? c === eC.Routes.FRIENDS : s === eC.Routes.FRIENDS
      }, "friends"), n && t ? (0, a.jsx)(ep, {
        selected: null == c ? null != s && s.startsWith(eC.Routes.APPLICATION_LIBRARY) : c.startsWith(eC.Routes.APPLICATION_LIBRARY),
        hideGameUpdateProgressIndicator: s === eC.Routes.APPLICATION_LIBRARY
      }, "library") : null, (0, a.jsx)(em, {
        selected: null == c ? o : c.startsWith(eC.Routes.APPLICATION_STORE),
        route: null == i || location.pathname.startsWith(eC.Routes.ACTIVITIES) || location.pathname.startsWith(eC.Routes.APPLICATION_STORE) ? eC.Routes.APPLICATION_STORE : i,
        locationState: {
          analyticsSource: {
            page: eM(s),
            section: eC.AnalyticsSections.NAVIGATION,
            object: eC.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "premium"), f ? (0, a.jsx)(eA, {
        selected: null != c && c.startsWith(eC.Routes.ACTIVITIES) || null != s && s.startsWith(eC.Routes.ACTIVITIES),
        route: eC.Routes.ACTIVITIES,
        locationState: {
          analyticsSource: {
            page: eM(s),
            section: eC.AnalyticsSections.NAVIGATION,
            object: eC.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "activities") : null, (0, a.jsx)(eg, {
        selected: null == c ? null != s && s.startsWith(eC.Routes.MESSAGE_REQUESTS) : c === eC.Routes.MESSAGE_REQUESTS
      }, "message-requests"), (0, a.jsx)(eR, {
        selected: c === eC.Routes.COLLECTIBLES_SHOP || (null == s ? void 0 : s.startsWith(eC.Routes.COLLECTIBLES_SHOP)),
        locationState: {
          analyticsSource: {
            page: eM(s),
            section: eC.AnalyticsSections.NAVIGATION,
            object: eC.AnalyticsObjects.NAVIGATION_LINK
          }
        }
      }, "discord-shop"), (0, a.jsx)(eO, {
        selected: null != s && s.startsWith(eC.Routes.FAMILY_CENTER) || null != c && c.startsWith(eC.Routes.FAMILY_CENTER)
      }, "family-center")]
    })]
  })
};

function eD() {
  let e = (0, d.useStateFromStores)([et.default], () => et.default.getHomeLink()),
    t = (0, d.useStateFromStores)([ee.default], () => {
      if (e === eC.Routes.APPLICATION_STORE) return !0;
      let t = (0, ef.getSKUIdFromURL)(e);
      if (null != t) {
        var n, a;
        return null !== (a = null === (n = ee.default.get(t)) || void 0 === n ? void 0 : n.premium) && void 0 !== a && a
      }
      return !1
    }, [e]),
    n = !z.DisableGamesTab.useSetting(),
    {
      theme: s
    } = (0, d.useStateFromStoresObject)([K.default], () => ({
      theme: K.default.theme
    })),
    i = (0, d.useStateFromStores)([q.default], () => q.default.hasLibraryApplication()),
    l = (0, d.useStateFromStores)([$.default], () => $.default.getCurrentPath());
  return (0, a.jsx)(eP, {
    theme: s,
    showLibrary: n,
    hasLibraryApplication: i,
    storeLink: l,
    homeLink: e,
    premiumTabSelected: t
  })
}