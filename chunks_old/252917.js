"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eH
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("803182"),
  o = n("90915"),
  u = n("759843"),
  d = n("868233"),
  c = n("394846"),
  f = n("446674"),
  E = n("77078"),
  h = n("241845"),
  _ = n("939443"),
  C = n("597590"),
  S = n("987697"),
  I = n("464682"),
  m = n("73749"),
  p = n("191145"),
  T = n("533466"),
  g = n("837844"),
  A = n("171984"),
  N = n("551254"),
  R = n("893399"),
  O = n("353681"),
  v = n("256430"),
  L = n("390236"),
  M = n("546102"),
  P = n("380710"),
  y = n("889145"),
  D = n("993057"),
  x = n("118971"),
  b = n("696336"),
  U = n("273457"),
  G = n("38654"),
  j = n("507950"),
  w = n("598156"),
  k = n("397039"),
  F = n("628805"),
  B = n("755729"),
  H = n("934743"),
  V = n("2190"),
  Y = n("566396"),
  W = n("618489"),
  K = n("209688"),
  z = n("747223"),
  q = n("94425"),
  Q = n("393027"),
  Z = n("1501"),
  X = n("161778"),
  J = n("42203"),
  $ = n("26989"),
  ee = n("305961"),
  et = n("18494"),
  en = n("600133"),
  ea = n("449008"),
  es = n("299039"),
  el = n("439932"),
  ei = n("315977"),
  er = n("911120"),
  eo = n("455555"),
  eu = n("229644"),
  ed = n("901582"),
  ec = n("758997"),
  ef = n("474557"),
  eE = n("49111"),
  eh = n("724210"),
  e_ = n("653138"),
  eC = n("782340"),
  eS = n("160619");
let eI = () => (0, a.jsx)("div", {
    className: eS.loader,
    children: (0, a.jsx)(E.Spinner, {})
  }),
  em = (0, d.makeLazy)({
    createPromise: () => n.el("144588").then(n.bind(n, "144588")),
    webpackId: "144588",
    name: "GuildShopPage",
    renderLoader: eI
  }),
  ep = (0, d.makeLazy)({
    createPromise: () => n.el("597235").then(n.bind(n, "597235")),
    webpackId: "597235",
    name: "GuildMemberApplicationReview",
    renderLoader: eI
  }),
  eT = (0, d.makeLazy)({
    createPromise: () => n.el("144295").then(n.bind(n, "144295")),
    webpackId: "144295",
    name: "GuildHomePage",
    renderLoader: eI
  }),
  eg = (0, d.makeLazy)({
    createPromise: () => n.el("112265").then(n.bind(n, "112265")),
    webpackId: "112265",
    name: "MemberSafetyPage",
    renderLoader: eI
  }),
  eA = (0, d.makeLazy)({
    createPromise: () => n.el("534702").then(n.bind(n, "534702")),
    webpackId: "534702",
    name: "ChannelsAndRolesPage",
    renderLoader: eI
  }),
  eN = (0, d.makeLazy)({
    createPromise: () => n.el("413896").then(n.bind(n, "413896")),
    webpackId: "413896",
    name: "GuildOnboardingPage",
    renderLoader: eI
  }),
  eR = e => {
    let {
      match: t
    } = e, n = (0, f.useStateFromStores)([J.default, et.default], () => {
      let e = et.default.getChannelId();
      return J.default.getChannel(e)
    }), {
      guildId: s,
      channelId: l,
      messageId: i
    } = t.params, r = (0, f.useStateFromStores)([ee.default], () => ee.default.getGuild(s)), o = (0, f.useStateFromStores)([$.default], () => null == s ? null : $.default.getSelfMember(s)), u = (0, f.useStateFromStores)([G.default], () => {
      if (null == s) return;
      let e = G.default.getData(s);
      if ((null == e ? void 0 : e.type) === j.ImpersonateType.SERVER_SHOP) switch (e.initialTab) {
        case "role_subscriptions":
          return R.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS;
        case "guild_products":
          return R.GuildShopTab.GUILD_PRODUCTS;
        default:
          return
      }
    }), d = (0, N.isEligibleForSubscriptionsInGuildShop)(s, "channel_renderer");
    if (null != s && null != l && (0, eh.isStaticChannelRoute)(l)) switch (l) {
      case eh.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
        return d ? (0, a.jsx)(em, {
          guildId: s,
          initialTab: R.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS
        }) : (0, a.jsx)(D.default, {
          guildId: s
        });
      case eh.StaticChannelRoute.GUILD_SHOP:
        return (0, a.jsx)(em, {
          guildId: s,
          productId: i,
          initialTab: u
        });
      case eh.StaticChannelRoute.MEMBER_APPLICATIONS:
        return (0, a.jsx)(ep, {
          guildId: s
        });
      case eh.StaticChannelRoute.GUILD_HOME:
        return (0, a.jsx)(eT, {
          guildId: s
        });
      case eh.StaticChannelRoute.CHANNEL_BROWSER:
        return (0, a.jsx)(eA, {
          guildId: s,
          selectedSection: e_.GuildOnboardingTab.BROWSE
        });
      case eh.StaticChannelRoute.GUILD_ONBOARDING:
        return (0, a.jsx)(eN, {
          guildId: s
        });
      case eh.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
        return (0, a.jsx)(eA, {
          guildId: s,
          selectedSection: e_.GuildOnboardingTab.CUSTOMIZE
        });
      case eh.StaticChannelRoute.MEMBER_SAFETY:
        return (0, a.jsx)(eg, {
          guildId: s
        });
      default:
        (0, ea.assertNever)(l)
    }
    if ((0, P.isBlockedByOnboarding)(r, o)) return (0, a.jsx)(y.default, {
      guildId: s,
      channelId: l
    });
    if ((null == n ? void 0 : n.type) === eE.ChannelTypes.GUILD_STORE) {
      let e = es.default.cast(t.params.messageId);
      return (0, a.jsx)(ei.default, {
        channel: n,
        inputSkuId: e
      }, n.id)
    }
    return (0, a.jsx)(T.default, {})
  },
  eO = s.memo(function() {
    let {
      guildId: e,
      channelId: t
    } = (0, Q.default)(), n = (0, f.useStateFromStores)([et.default], () => null != t ? t : et.default.getChannelId(e));
    return function() {
      return window.location.pathname.startsWith(eE.Routes.GUILD_DISCOVERY)
    }() ? (0, a.jsx)(v.default, {}) : null != e ? (0, a.jsx)(x.default, {
      selectedChannelId: n,
      guildId: e
    }, e) : (0, a.jsx)(eu.default, {})
  });

function ev(e) {
  let t = (0, Q.default)(e => {
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
let eL = e => (0, a.jsx)(eR, {
    ...e
  }),
  eM = e => {
    let t = null != e && e.length > 0 && e.startsWith("?"),
      n = t ? e.split("?")[1] : null;
    return (0, a.jsx)(O.default, {
      searchRoute: n
    })
  },
  eP = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, a.jsx)(M.default, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  ey = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, a.jsx)(U.default, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  eD = () => (0, a.jsx)(ec.default, {}),
  ex = () => (0, a.jsx)(ef.default, {}),
  eb = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return function(t) {
      return (0, a.jsx)(A.default, {
        isFullScreen: e,
        ...t
      })
    }
  },
  eU = e => (0, a.jsx)(I.default, {
    ...e
  }),
  eG = () => (0, a.jsx)(S.default, {}),
  ej = () => (0, a.jsx)(z.default, {}),
  ew = () => (0, a.jsx)(w.default, {}),
  ek = () => (0, a.jsx)(K.default, {}),
  eF = e => {
    let {
      match: t
    } = e, n = t.params.feature;
    switch (n) {
      case "addFriends":
        return (0, a.jsx)(z.default, {
          initialSection: eE.FriendsSections.ADD_FRIEND
        });
      case "pendingFriends":
        return (0, a.jsx)(z.default, {
          initialSection: eE.FriendsSections.PENDING
        });
      case "sessionManagement":
        return (0, a.jsx)(o.Redirect, {
          to: eE.Routes.SETTINGS("sessions")
        });
      case "connections":
        return (0, a.jsx)(o.Redirect, {
          to: {
            pathname: eE.Routes.SETTINGS("connections"),
            search: e.location.search
          }
        });
      case "family-center":
        return (0, a.jsx)(o.Redirect, {
          to: eE.Routes.FAMILY_CENTER
        });
      case "account-standing":
        return (0, a.jsx)(o.Redirect, {
          to: eE.Routes.SETTINGS("privacy-and-safety", "account-standing")
        });
      default:
        return (0, a.jsx)(o.Redirect, {
          to: eE.Routes.ME
        })
    }
  };

function eB(e) {
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
  let r = (0, f.useStateFromStores)([p.default], () => p.default.isFullscreenInContext());
  return s ? null : (0, a.jsxs)("div", {
    className: i(eS.sidebar, (0, el.getThemeClass)(n), {
      [eS.hasNotice]: t,
      [eS.fullWidth]: c.isMobile,
      [eS.hidden]: r
    }),
    children: [(0, a.jsx)(eO, {}), (0, a.jsxs)("section", {
      className: eS.panels,
      "aria-label": eC.default.Messages.ACCOUNT_A11Y_LABEL,
      children: [(0, a.jsx)(q.default, {}), (0, a.jsx)(Y.default, {}), (0, a.jsx)(ed.default, {
        section: eE.AnalyticsSections.ACTIVITY_PANEL,
        children: (0, a.jsx)(ev, {
          className: eS.activityPanel
        })
      }), (0, a.jsx)(ed.default, {
        section: eE.AnalyticsSections.RTC_CONNECTION_PANEL,
        children: (0, a.jsx)(W.default, {})
      }), (0, a.jsx)(V.default, {}), (0, a.jsx)(ed.default, {
        section: eE.AnalyticsSections.ACCOUNT_PANEL,
        children: (0, a.jsx)(B.default, {})
      })]
    }), (0, a.jsx)(er.default, {})]
  })
}

function eH() {
  var e;
  let t = (0, f.useStateFromStores)([en.default], () => en.default.hasNotice()),
    n = (0, f.useStateFromStores)([X.default], () => X.default.darkSidebar ? eE.ThemeTypes.DARK : void 0),
    l = function() {
      let [e, t] = s.useState(() => window.location.pathname.startsWith(eE.Routes.GUILD_MEMBER_VERIFICATION("")));
      return s.useEffect(() => Z.default.addRouteChangeListener(e => {
        t(e.pathname.startsWith(eE.Routes.GUILD_MEMBER_VERIFICATION("")))
      }), []), e
    }(),
    i = function() {
      let [e, t] = s.useState(() => window.location.pathname.startsWith(eE.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB("")));
      return s.useEffect(() => Z.default.addRouteChangeListener(e => {
        t(e.pathname.startsWith(eE.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB("")))
      }), []), e
    }(),
    d = function() {
      var e;
      let t = (0, o.useLocation)();
      return (null === (e = (0, r.matchPath)(t.pathname, eE.Routes.GUILD_BOOSTING_MARKETING(":guildId"))) || void 0 === e ? void 0 : e.isExact) === !0
    }(),
    E = function() {
      var e;
      let t = (0, o.useLocation)();
      return (null === (e = (0, r.matchPath)(t.pathname, eE.Routes.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0
    }(),
    h = (0, f.useStateFromStores)([F.default], () => F.default.getIsOpen()),
    _ = (0, o.useRouteMatch)([eE.Routes.CHANNEL(eE.ME, ":channelId"), eE.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")]),
    S = (null == _ ? void 0 : null === (e = _.params) || void 0 === e ? void 0 : e.channelId) === eh.StaticChannelRoute.GUILD_ONBOARDING,
    I = s.useCallback(() => k.default.openSidebar(), []);
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)("div", {
      className: eS.container,
      children: [h && !E && (0, a.jsx)(b.default, {
        className: eS.guilds,
        themeOverride: n
      }), (0, a.jsx)(L.default.Provider, {
        value: (null == _ ? void 0 : _.params.guildId) === eE.ME ? void 0 : null == _ ? void 0 : _.params.guildId,
        children: (0, a.jsxs)("div", {
          className: eS.base,
          children: [c.isMobile ? null : (0, a.jsx)(eo.default, {}), (0, a.jsxs)("div", {
            className: eS.content,
            children: [(0, a.jsx)(g.default, {}), (0, a.jsx)(eB, {
              hasNotice: t,
              sidebarTheme: n,
              hideSidebar: l || i || d || E || S || !h
            }), (0, a.jsx)(C.default.Provider, {
              value: I,
              children: (0, a.jsxs)(o.Switch, {
                children: [(0, a.jsx)(m.default, {
                  path: eE.Routes.ACTIVITY,
                  disableTrack: !0,
                  children: (0, a.jsx)(o.Redirect, {
                    to: eE.Routes.ME
                  })
                }), (0, a.jsx)(m.default, {
                  path: eE.Routes.ACTIVITIES_HAPPENING_NOW,
                  render: eG,
                  impressionName: u.ImpressionNames.ACTIVITIES
                }), (0, a.jsx)(m.default, {
                  path: eE.Routes.ACTIVITY_DETAILS(":applicationId"),
                  render: eU,
                  impressionName: u.ImpressionNames.ACTIVITY_DETAILS,
                  impressionProperties: e => {
                    let {
                      computedMatch: t
                    } = e;
                    return {
                      application_id: t.params.applicationId
                    }
                  }
                }), (0, a.jsx)(m.default, {
                  path: eE.Routes.ACTIVITIES,
                  render: eG,
                  impressionName: u.ImpressionNames.ACTIVITIES
                }), (0, a.jsx)(m.default, {
                  path: eE.Routes.APPLICATION_LIBRARY,
                  render: eD,
                  impressionName: u.ImpressionNames.APPLICATION_LIBRARY,
                  disableTrack: !0
                }), (0, a.jsx)(m.default, {
                  path: eE.Routes.APPLICATION_STORE,
                  render: ex,
                  impressionName: u.ImpressionNames.APPLICATION_STORE,
                  disableTrack: !0
                }), (0, a.jsx)(m.default, {
                  path: eE.Routes.COLLECTIBLES_SHOP_FULLSCREEN,
                  render: eb(!0),
                  disableTrack: !0
                }), (0, a.jsx)(m.default, {
                  path: eE.Routes.COLLECTIBLES_SHOP,
                  render: eb(!1),
                  disableTrack: !0
                }), (0, a.jsx)(m.default, {
                  path: eE.Routes.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                  render: eb(!1),
                  disableTrack: !0
                }), (0, a.jsx)(m.default, {
                  path: eE.Routes.MESSAGE_REQUESTS,
                  render: ew,
                  disableTrack: !0
                }), (0, a.jsx)(m.default, {
                  path: eE.Routes.FAMILY_CENTER,
                  render: ek,
                  disableTrack: !0
                }), (0, a.jsx)(m.default, {
                  path: eE.Routes.ME,
                  exact: !0,
                  render: ej,
                  impressionName: u.ImpressionNames.FRIENDS,
                  disableTrack: !0
                }), (0, a.jsx)(m.default, {
                  path: [eE.Routes.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), eE.Routes.CHANNEL(eE.ME, ":channelId"), eE.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")],
                  render: eL,
                  impressionName: u.ImpressionNames.GUILD_CHANNEL,
                  disableTrack: !0
                }), (0, a.jsx)(m.default, {
                  path: eE.Routes.GUILD_DISCOVERY,
                  render: e => {
                    let {
                      location: t
                    } = e;
                    return eM(t.search)
                  },
                  impressionName: u.ImpressionNames.GUILD_DISCOVERY,
                  disableTrack: !0
                }), (0, a.jsx)(m.default, {
                  path: eE.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"),
                  render: eP,
                  impressionName: u.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                  disableTrack: !0
                }), (0, a.jsx)(m.default, {
                  path: eE.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"),
                  render: ey,
                  impressionName: u.ImpressionNames.HUB_EMAIL_SIGNUP,
                  impressionProperties: e => {
                    let {
                      computedMatch: t
                    } = e;
                    return {
                      has_invite: void 0 !== t.params.inviteCode
                    }
                  }
                }), (0, a.jsx)(m.default, {
                  path: eE.Routes.FEATURE(":feature"),
                  exact: !0,
                  render: eF,
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