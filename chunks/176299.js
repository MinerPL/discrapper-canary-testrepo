"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eB
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("266067"),
  o = n("613828"),
  u = n("990547"),
  d = n("608787"),
  c = n("873546"),
  f = n("442837"),
  E = n("481060"),
  h = n("711237"),
  _ = n("532835"),
  C = n("290297"),
  S = n("918854"),
  m = n("279240"),
  p = n("765717"),
  I = n("358221"),
  T = n("823748"),
  g = n("626421"),
  A = n("118379"),
  N = n("652515"),
  v = n("544978"),
  R = n("194729"),
  L = n("668940"),
  O = n("372900"),
  M = n("6039"),
  P = n("637853"),
  y = n("326145"),
  x = n("269675"),
  D = n("242601"),
  b = n("416568"),
  U = n("613609"),
  j = n("160404"),
  G = n("225675"),
  w = n("745052"),
  k = n("285865"),
  F = n("659971"),
  B = n("720734"),
  H = n("840780"),
  V = n("235555"),
  Y = n("746508"),
  W = n("179742"),
  K = n("270759"),
  z = n("210724"),
  q = n("905423"),
  Q = n("304445"),
  Z = n("210887"),
  X = n("592125"),
  J = n("271383"),
  $ = n("430824"),
  ee = n("944486"),
  et = n("933429"),
  en = n("823379"),
  ea = n("709054"),
  es = n("792125"),
  el = n("409292"),
  ei = n("316173"),
  er = n("256638"),
  eo = n("663701"),
  eu = n("410575"),
  ed = n("425369"),
  ec = n("715702"),
  ef = n("981631"),
  eE = n("176505"),
  eh = n("290511"),
  e_ = n("689938"),
  eC = n("936704");
let eS = () => (0, a.jsx)("div", {
    className: eC.loader,
    children: (0, a.jsx)(E.Spinner, {})
  }),
  em = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("99387"), n.e("68614")]).then(n.bind(n, "650788")),
    webpackId: "650788",
    name: "GuildShopPage",
    renderLoader: eS
  }),
  ep = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("99387"), n.e("44798")]).then(n.bind(n, "998420")),
    webpackId: "998420",
    name: "GuildMemberApplicationReview",
    renderLoader: eS
  }),
  eI = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("99387"), n.e("51373")]).then(n.bind(n, "231588")),
    webpackId: "231588",
    name: "GuildHomePage",
    renderLoader: eS
  }),
  eT = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("85552"), n.e("16600")]).then(n.bind(n, "545918")),
    webpackId: "545918",
    name: "MemberSafetyPage",
    renderLoader: eS
  }),
  eg = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("75475"), n.e("58227"), n.e("38359"), n.e("51199")]).then(n.bind(n, "603072")),
    webpackId: "603072",
    name: "ChannelsAndRolesPage",
    renderLoader: eS
  }),
  eA = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("75475"), n.e("19878"), n.e("38359"), n.e("50498")]).then(n.bind(n, "599263")),
    webpackId: "599263",
    name: "GuildOnboardingPage",
    renderLoader: eS
  }),
  eN = e => {
    let {
      match: t
    } = e, n = (0, f.useStateFromStores)([X.default, ee.default], () => {
      let e = ee.default.getChannelId();
      return X.default.getChannel(e)
    }), {
      guildId: s,
      channelId: l,
      messageId: i
    } = t.params, r = (0, f.useStateFromStores)([$.default], () => $.default.getGuild(s)), o = (0, f.useStateFromStores)([J.default], () => null == s ? null : J.default.getSelfMember(s)), u = (0, f.useStateFromStores)([j.default], () => {
      if (null == s) return;
      let e = j.default.getData(s);
      if ((null == e ? void 0 : e.type) === G.ImpersonateType.SERVER_SHOP) switch (e.initialTab) {
        case "role_subscriptions":
          return v.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS;
        case "guild_products":
          return v.GuildShopTab.GUILD_PRODUCTS;
        default:
          return
      }
    }), d = (0, N.isEligibleForSubscriptionsInGuildShop)(s, "channel_renderer");
    if (null != s && null != l && (0, eE.isStaticChannelRoute)(l)) switch (l) {
      case eE.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
        return d ? (0, a.jsx)(em, {
          guildId: s,
          initialTab: v.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS
        }) : (0, a.jsx)(x.default, {
          guildId: s
        });
      case eE.StaticChannelRoute.GUILD_SHOP:
        return (0, a.jsx)(em, {
          guildId: s,
          productId: i,
          initialTab: u
        });
      case eE.StaticChannelRoute.MEMBER_APPLICATIONS:
        return (0, a.jsx)(ep, {
          guildId: s
        });
      case eE.StaticChannelRoute.GUILD_HOME:
        return (0, a.jsx)(eI, {
          guildId: s
        });
      case eE.StaticChannelRoute.CHANNEL_BROWSER:
        return (0, a.jsx)(eg, {
          guildId: s,
          selectedSection: eh.GuildOnboardingTab.BROWSE
        });
      case eE.StaticChannelRoute.GUILD_ONBOARDING:
        return (0, a.jsx)(eA, {
          guildId: s
        });
      case eE.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
        return (0, a.jsx)(eg, {
          guildId: s,
          selectedSection: eh.GuildOnboardingTab.CUSTOMIZE
        });
      case eE.StaticChannelRoute.MEMBER_SAFETY:
        return (0, a.jsx)(eT, {
          guildId: s
        });
      default:
        (0, en.assertNever)(l)
    }
    if ((0, P.isBlockedByOnboarding)(r, o)) return (0, a.jsx)(y.default, {
      guildId: s,
      channelId: l
    });
    if ((null == n ? void 0 : n.type) === ef.ChannelTypes.GUILD_STORE) {
      let e = ea.default.cast(t.params.messageId);
      return (0, a.jsx)(el.default, {
        channel: n,
        inputSkuId: e
      }, n.id)
    }
    return (0, a.jsx)(T.default, {})
  },
  ev = s.memo(function() {
    let {
      guildId: e,
      channelId: t
    } = (0, q.default)(), n = (0, f.useStateFromStores)([ee.default], () => null != t ? t : ee.default.getChannelId(e));
    return function() {
      return window.location.pathname.startsWith(ef.Routes.GUILD_DISCOVERY)
    }() ? (0, a.jsx)(L.default, {}) : null != e ? (0, a.jsx)(D.default, {
      selectedChannelId: n,
      guildId: e
    }, e) : (0, a.jsx)(eo.default, {})
  });

function eR(e) {
  let t = (0, q.default)(e => {
    let {
      guildId: t
    } = e;
    return t
  });
  return (0, a.jsx)(H.default, {
    ...e,
    guildId: t
  })
}
let eL = e => (0, a.jsx)(eN, {
    ...e
  }),
  eO = e => {
    let t = null != e && e.length > 0 && e.startsWith("?") ? e.split("?")[1] : null;
    return (0, a.jsx)(R.default, {
      searchRoute: t
    })
  },
  eM = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, a.jsx)(M.default, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  eP = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, a.jsx)(U.default, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  ey = () => (0, a.jsx)(ed.default, {}),
  ex = () => (0, a.jsx)(ec.default, {}),
  eD = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return function(t) {
      return (0, a.jsx)(A.default, {
        isFullScreen: e,
        ...t
      })
    }
  },
  eb = e => (0, a.jsx)(m.default, {
    ...e
  }),
  eU = () => (0, a.jsx)(S.default, {}),
  ej = () => (0, a.jsx)(K.default, {}),
  eG = () => (0, a.jsx)(w.default, {}),
  ew = () => (0, a.jsx)(W.default, {}),
  ek = e => {
    let {
      match: t
    } = e;
    switch (t.params.feature) {
      case "addFriends":
        return (0, a.jsx)(K.default, {
          initialSection: ef.FriendsSections.ADD_FRIEND
        });
      case "pendingFriends":
        return (0, a.jsx)(K.default, {
          initialSection: ef.FriendsSections.PENDING
        });
      case "sessionManagement":
        return (0, a.jsx)(o.Redirect, {
          to: ef.Routes.SETTINGS("sessions")
        });
      case "connections":
        return (0, a.jsx)(o.Redirect, {
          to: {
            pathname: ef.Routes.SETTINGS("connections"),
            search: e.location.search
          }
        });
      case "family-center":
        return (0, a.jsx)(o.Redirect, {
          to: ef.Routes.FAMILY_CENTER
        });
      case "account-standing":
        return (0, a.jsx)(o.Redirect, {
          to: ef.Routes.SETTINGS("privacy-and-safety", "account-standing")
        });
      default:
        return (0, a.jsx)(o.Redirect, {
          to: ef.Routes.ME
        })
    }
  };

function eF(e) {
  let {
    hasNotice: t,
    sidebarTheme: n,
    hideSidebar: s
  } = e;
  (0, _.useNullExperiment)(!0);
  let l = "app view user trigger debugging";
  h.UserTriggerAAExperiment.useExperiment({
    location: l
  }, {
    autoTrackExposure: !1
  }), h.UserTriggerAAExperiment.trackExposure({
    location: l
  });
  let r = (0, f.useStateFromStores)([I.default], () => I.default.isFullscreenInContext());
  return s ? null : (0, a.jsxs)("div", {
    className: i()(eC.sidebar, (0, es.getThemeClass)(n), {
      [eC.hasNotice]: t,
      [eC.fullWidth]: c.isMobile,
      [eC.hidden]: r
    }),
    children: [(0, a.jsx)(ev, {}), (0, a.jsxs)("section", {
      className: eC.panels,
      "aria-label": e_.default.Messages.ACCOUNT_A11Y_LABEL,
      children: [(0, a.jsx)(z.default, {}), (0, a.jsx)(V.default, {}), (0, a.jsx)(eu.default, {
        section: ef.AnalyticsSections.ACTIVITY_PANEL,
        children: (0, a.jsx)(eR, {
          className: eC.activityPanel
        })
      }), (0, a.jsx)(eu.default, {
        section: ef.AnalyticsSections.RTC_CONNECTION_PANEL,
        children: (0, a.jsx)(Y.default, {})
      }), (0, a.jsx)(eu.default, {
        section: ef.AnalyticsSections.ACCOUNT_PANEL,
        children: (0, a.jsx)(B.default, {})
      })]
    }), (0, a.jsx)(ei.default, {})]
  })
}

function eB() {
  var e;
  let t = (0, f.useStateFromStores)([et.default], () => et.default.hasNotice()),
    n = (0, f.useStateFromStores)([Z.default], () => Z.default.darkSidebar ? ef.ThemeTypes.DARK : void 0),
    l = function() {
      let [e, t] = s.useState(() => window.location.pathname.startsWith(ef.Routes.GUILD_MEMBER_VERIFICATION("")));
      return s.useEffect(() => Q.default.addRouteChangeListener(e => {
        t(e.pathname.startsWith(ef.Routes.GUILD_MEMBER_VERIFICATION("")))
      }), []), e
    }(),
    i = function() {
      let [e, t] = s.useState(() => window.location.pathname.startsWith(ef.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB("")));
      return s.useEffect(() => Q.default.addRouteChangeListener(e => {
        t(e.pathname.startsWith(ef.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB("")))
      }), []), e
    }(),
    d = function() {
      var e;
      let t = (0, o.useLocation)();
      return (null === (e = (0, r.matchPath)(t.pathname, ef.Routes.GUILD_BOOSTING_MARKETING(":guildId"))) || void 0 === e ? void 0 : e.isExact) === !0
    }(),
    E = function() {
      var e;
      let t = (0, o.useLocation)();
      return (null === (e = (0, r.matchPath)(t.pathname, ef.Routes.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0
    }(),
    h = (0, f.useStateFromStores)([F.default], () => F.default.getIsOpen()),
    _ = (0, o.useRouteMatch)([ef.Routes.CHANNEL(ef.ME, ":channelId"), ef.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")]),
    S = (null == _ ? void 0 : null === (e = _.params) || void 0 === e ? void 0 : e.channelId) === eE.StaticChannelRoute.GUILD_ONBOARDING,
    m = s.useCallback(() => k.default.openSidebar(), []);
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)("div", {
      className: eC.container,
      children: [h && !E && (0, a.jsx)(b.default, {
        className: eC.guilds,
        themeOverride: n
      }), (0, a.jsx)(O.default.Provider, {
        value: (null == _ ? void 0 : _.params.guildId) === ef.ME ? void 0 : null == _ ? void 0 : _.params.guildId,
        children: (0, a.jsxs)("div", {
          className: eC.base,
          children: [c.isMobile ? null : (0, a.jsx)(er.default, {}), (0, a.jsxs)("div", {
            className: eC.content,
            children: [(0, a.jsx)(g.default, {}), (0, a.jsx)(eF, {
              hasNotice: t,
              sidebarTheme: n,
              hideSidebar: l || i || d || E || S || !h
            }), (0, a.jsx)(C.default.Provider, {
              value: m,
              children: (0, a.jsxs)(o.Switch, {
                children: [(0, a.jsx)(p.default, {
                  path: ef.Routes.ACTIVITY,
                  disableTrack: !0,
                  children: (0, a.jsx)(o.Redirect, {
                    to: ef.Routes.ME
                  })
                }), (0, a.jsx)(p.default, {
                  path: ef.Routes.ACTIVITIES_HAPPENING_NOW,
                  render: eU,
                  impressionName: u.ImpressionNames.ACTIVITIES
                }), (0, a.jsx)(p.default, {
                  path: ef.Routes.ACTIVITY_DETAILS(":applicationId"),
                  render: eb,
                  impressionName: u.ImpressionNames.ACTIVITY_DETAILS,
                  impressionProperties: e => {
                    let {
                      computedMatch: t
                    } = e;
                    return {
                      application_id: t.params.applicationId
                    }
                  }
                }), (0, a.jsx)(p.default, {
                  path: ef.Routes.ACTIVITIES,
                  render: eU,
                  impressionName: u.ImpressionNames.ACTIVITIES
                }), (0, a.jsx)(p.default, {
                  path: ef.Routes.APPLICATION_LIBRARY,
                  render: ey,
                  impressionName: u.ImpressionNames.APPLICATION_LIBRARY,
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: ef.Routes.APPLICATION_STORE,
                  render: ex,
                  impressionName: u.ImpressionNames.APPLICATION_STORE,
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: ef.Routes.COLLECTIBLES_SHOP_FULLSCREEN,
                  render: eD(!0),
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: ef.Routes.COLLECTIBLES_SHOP,
                  render: eD(!1),
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: ef.Routes.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                  render: eD(!1),
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: ef.Routes.MESSAGE_REQUESTS,
                  render: eG,
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: ef.Routes.FAMILY_CENTER,
                  render: ew,
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: ef.Routes.ME,
                  exact: !0,
                  render: ej,
                  impressionName: u.ImpressionNames.FRIENDS,
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: [ef.Routes.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), ef.Routes.CHANNEL(ef.ME, ":channelId"), ef.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")],
                  render: eL,
                  impressionName: u.ImpressionNames.GUILD_CHANNEL,
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: ef.Routes.GUILD_DISCOVERY,
                  render: e => {
                    let {
                      location: t
                    } = e;
                    return eO(t.search)
                  },
                  impressionName: u.ImpressionNames.GUILD_DISCOVERY,
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: ef.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"),
                  render: eM,
                  impressionName: u.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: ef.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"),
                  render: eP,
                  impressionName: u.ImpressionNames.HUB_EMAIL_SIGNUP,
                  impressionProperties: e => {
                    let {
                      computedMatch: t
                    } = e;
                    return {
                      has_invite: void 0 !== t.params.inviteCode
                    }
                  }
                }), (0, a.jsx)(p.default, {
                  path: ef.Routes.FEATURE(":feature"),
                  exact: !0,
                  render: ek,
                  disableTrack: !0
                })]
              })
            })]
          })]
        })
      })]
    })
  })
}