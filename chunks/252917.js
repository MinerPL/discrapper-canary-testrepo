"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eF
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("803182"),
  o = n("90915"),
  u = n("759843"),
  d = n("868233"),
  c = n("394846"),
  f = n("446674"),
  E = n("77078"),
  _ = n("241845"),
  h = n("939443"),
  C = n("597590"),
  I = n("987697"),
  T = n("464682"),
  S = n("73749"),
  p = n("191145"),
  m = n("533466"),
  A = n("837844"),
  g = n("171984"),
  N = n("551254"),
  R = n("893399"),
  O = n("353681"),
  L = n("256430"),
  v = n("390236"),
  M = n("546102"),
  P = n("380710"),
  D = n("889145"),
  y = n("993057"),
  x = n("118971"),
  b = n("696336"),
  U = n("273457"),
  G = n("38654"),
  j = n("507950"),
  w = n("598156"),
  k = n("397039"),
  F = n("628805"),
  H = n("755729"),
  B = n("934743"),
  V = n("566396"),
  Y = n("618489"),
  W = n("209688"),
  K = n("747223"),
  z = n("94425"),
  q = n("393027"),
  Q = n("1501"),
  Z = n("161778"),
  X = n("42203"),
  J = n("26989"),
  $ = n("305961"),
  ee = n("18494"),
  et = n("600133"),
  en = n("449008"),
  ea = n("439932"),
  es = n("315977"),
  ei = n("911120"),
  el = n("455555"),
  er = n("229644"),
  eo = n("901582"),
  eu = n("758997"),
  ed = n("474557"),
  ec = n("49111"),
  ef = n("724210"),
  eE = n("653138"),
  e_ = n("782340"),
  eh = n("783686");
let eC = () => (0, a.jsx)("div", {
    className: eh.loader,
    children: (0, a.jsx)(E.Spinner, {})
  }),
  eI = (0, d.makeLazy)({
    createPromise: () => n.el("144588").then(n.bind(n, "144588")),
    webpackId: "144588",
    name: "GuildShopPage",
    renderLoader: eC
  }),
  eT = (0, d.makeLazy)({
    createPromise: () => n.el("597235").then(n.bind(n, "597235")),
    webpackId: "597235",
    name: "GuildMemberApplicationReview",
    renderLoader: eC
  }),
  eS = (0, d.makeLazy)({
    createPromise: () => n.el("144295").then(n.bind(n, "144295")),
    webpackId: "144295",
    name: "GuildHomePage",
    renderLoader: eC
  }),
  ep = (0, d.makeLazy)({
    createPromise: () => n.el("112265").then(n.bind(n, "112265")),
    webpackId: "112265",
    name: "MemberSafetyPage",
    renderLoader: eC
  }),
  em = (0, d.makeLazy)({
    createPromise: () => n.el("534702").then(n.bind(n, "534702")),
    webpackId: "534702",
    name: "ChannelsAndRolesPage",
    renderLoader: eC
  }),
  eA = (0, d.makeLazy)({
    createPromise: () => n.el("413896").then(n.bind(n, "413896")),
    webpackId: "413896",
    name: "GuildOnboardingPage",
    renderLoader: eC
  }),
  eg = e => {
    let {
      match: t
    } = e, n = (0, f.useStateFromStores)([X.default, ee.default], () => {
      let e = ee.default.getChannelId();
      return X.default.getChannel(e)
    }), {
      guildId: s,
      channelId: i,
      messageId: l
    } = t.params, r = (0, f.useStateFromStores)([$.default], () => $.default.getGuild(s)), o = (0, f.useStateFromStores)([J.default], () => null == s ? null : J.default.getSelfMember(s)), u = (0, f.useStateFromStores)([G.default], () => {
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
    if (null != s && null != i && (0, ef.isStaticChannelRoute)(i)) switch (i) {
      case ef.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
        return d ? (0, a.jsx)(eI, {
          guildId: s,
          initialTab: R.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS
        }) : (0, a.jsx)(y.default, {
          guildId: s
        });
      case ef.StaticChannelRoute.GUILD_SHOP:
        return (0, a.jsx)(eI, {
          guildId: s,
          productId: l,
          initialTab: u
        });
      case ef.StaticChannelRoute.MEMBER_APPLICATIONS:
        return (0, a.jsx)(eT, {
          guildId: s
        });
      case ef.StaticChannelRoute.GUILD_HOME:
        return (0, a.jsx)(eS, {
          guildId: s
        });
      case ef.StaticChannelRoute.CHANNEL_BROWSER:
        return (0, a.jsx)(em, {
          guildId: s,
          selectedSection: eE.GuildOnboardingTab.BROWSE
        });
      case ef.StaticChannelRoute.GUILD_ONBOARDING:
        return (0, a.jsx)(eA, {
          guildId: s
        });
      case ef.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
        return (0, a.jsx)(em, {
          guildId: s,
          selectedSection: eE.GuildOnboardingTab.CUSTOMIZE
        });
      case ef.StaticChannelRoute.MEMBER_SAFETY:
        return (0, a.jsx)(ep, {
          guildId: s
        });
      default:
        (0, en.assertNever)(i)
    }
    if ((0, P.isBlockedByOnboarding)(r, o)) return (0, a.jsx)(D.default, {
      guildId: s,
      channelId: i
    });
    if ((null == n ? void 0 : n.type) === ec.ChannelTypes.GUILD_STORE) {
      let e = t.params.messageId;
      return (0, a.jsx)(es.default, {
        channel: n,
        inputSkuId: e
      }, n.id)
    }
    return (0, a.jsx)(m.default, {})
  },
  eN = s.memo(function() {
    let {
      guildId: e,
      channelId: t
    } = (0, q.default)(), n = (0, f.useStateFromStores)([ee.default], () => null != t ? t : ee.default.getChannelId(e));
    return function() {
      return window.location.pathname.startsWith(ec.Routes.GUILD_DISCOVERY)
    }() ? (0, a.jsx)(L.default, {}) : null != e ? (0, a.jsx)(x.default, {
      selectedChannelId: n,
      guildId: e
    }, e) : (0, a.jsx)(er.default, {})
  });

function eR(e) {
  let t = (0, q.default)(e => {
    let {
      guildId: t
    } = e;
    return t
  });
  return (0, a.jsx)(B.default, {
    ...e,
    guildId: t
  })
}
let eO = e => (0, a.jsx)(eg, {
    ...e
  }),
  eL = e => {
    let t = null != e && e.length > 0 && e.startsWith("?"),
      n = t ? e.split("?")[1] : null;
    return (0, a.jsx)(O.default, {
      searchRoute: n
    })
  },
  ev = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, a.jsx)(M.default, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  eM = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, a.jsx)(U.default, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  eP = () => (0, a.jsx)(eu.default, {}),
  eD = () => (0, a.jsx)(ed.default, {}),
  ey = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return function(t) {
      return (0, a.jsx)(g.default, {
        isFullScreen: e,
        ...t
      })
    }
  },
  ex = e => (0, a.jsx)(T.default, {
    ...e
  }),
  eb = () => (0, a.jsx)(I.default, {}),
  eU = () => (0, a.jsx)(K.default, {}),
  eG = () => (0, a.jsx)(w.default, {}),
  ej = () => (0, a.jsx)(W.default, {}),
  ew = e => {
    let {
      match: t
    } = e, n = t.params.feature;
    switch (n) {
      case "addFriends":
        return (0, a.jsx)(K.default, {
          initialSection: ec.FriendsSections.ADD_FRIEND
        });
      case "pendingFriends":
        return (0, a.jsx)(K.default, {
          initialSection: ec.FriendsSections.PENDING
        });
      case "sessionManagement":
        return (0, a.jsx)(o.Redirect, {
          to: ec.Routes.SETTINGS("sessions")
        });
      case "connections":
        return (0, a.jsx)(o.Redirect, {
          to: {
            pathname: ec.Routes.SETTINGS("connections"),
            search: e.location.search
          }
        });
      case "family-center":
        return (0, a.jsx)(o.Redirect, {
          to: ec.Routes.FAMILY_CENTER
        });
      case "account-standing":
        return (0, a.jsx)(o.Redirect, {
          to: ec.Routes.SETTINGS("privacy-and-safety", "account-standing")
        });
      default:
        return (0, a.jsx)(o.Redirect, {
          to: ec.Routes.ME
        })
    }
  };

function ek(e) {
  let {
    hasNotice: t,
    sidebarTheme: n,
    hideSidebar: s
  } = e;
  (0, h.useNullExperiment)(!0);
  let i = "app view user trigger debugging";
  _.UserTriggerAAExperiment.useExperiment({
    location: i
  }, {
    autoTrackExposure: !1
  }), _.UserTriggerAAExperiment.trackExposure({
    location: i
  });
  let r = (0, f.useStateFromStores)([p.default], () => p.default.isFullscreenInContext());
  return s ? null : (0, a.jsxs)("div", {
    className: l(eh.sidebar, (0, ea.getThemeClass)(n), {
      [eh.hasNotice]: t,
      [eh.fullWidth]: c.isMobile,
      [eh.hidden]: r
    }),
    children: [(0, a.jsx)(eN, {}), (0, a.jsxs)("section", {
      className: eh.panels,
      "aria-label": e_.default.Messages.ACCOUNT_A11Y_LABEL,
      children: [(0, a.jsx)(z.default, {}), (0, a.jsx)(V.default, {}), (0, a.jsx)(eo.default, {
        section: ec.AnalyticsSections.ACTIVITY_PANEL,
        children: (0, a.jsx)(eR, {
          className: eh.activityPanel
        })
      }), (0, a.jsx)(eo.default, {
        section: ec.AnalyticsSections.RTC_CONNECTION_PANEL,
        children: (0, a.jsx)(Y.default, {})
      }), (0, a.jsx)(eo.default, {
        section: ec.AnalyticsSections.ACCOUNT_PANEL,
        children: (0, a.jsx)(H.default, {})
      })]
    }), (0, a.jsx)(ei.default, {})]
  })
}

function eF() {
  var e;
  let t = (0, f.useStateFromStores)([et.default], () => et.default.hasNotice()),
    n = (0, f.useStateFromStores)([Z.default], () => Z.default.darkSidebar ? ec.ThemeTypes.DARK : void 0),
    i = function() {
      let [e, t] = s.useState(() => window.location.pathname.startsWith(ec.Routes.GUILD_MEMBER_VERIFICATION("")));
      return s.useEffect(() => Q.default.addRouteChangeListener(e => {
        t(e.pathname.startsWith(ec.Routes.GUILD_MEMBER_VERIFICATION("")))
      }), []), e
    }(),
    l = function() {
      let [e, t] = s.useState(() => window.location.pathname.startsWith(ec.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB("")));
      return s.useEffect(() => Q.default.addRouteChangeListener(e => {
        t(e.pathname.startsWith(ec.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB("")))
      }), []), e
    }(),
    d = function() {
      var e;
      let t = (0, o.useLocation)();
      return (null === (e = (0, r.matchPath)(t.pathname, ec.Routes.GUILD_BOOSTING_MARKETING(":guildId"))) || void 0 === e ? void 0 : e.isExact) === !0
    }(),
    E = function() {
      var e;
      let t = (0, o.useLocation)();
      return (null === (e = (0, r.matchPath)(t.pathname, ec.Routes.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0
    }(),
    _ = (0, f.useStateFromStores)([F.default], () => F.default.getIsOpen()),
    h = (0, o.useRouteMatch)([ec.Routes.CHANNEL(ec.ME, ":channelId"), ec.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")]),
    I = (null == h ? void 0 : null === (e = h.params) || void 0 === e ? void 0 : e.channelId) === ef.StaticChannelRoute.GUILD_ONBOARDING,
    T = s.useCallback(() => k.default.openSidebar(), []);
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)("div", {
      className: eh.container,
      children: [_ && !E && (0, a.jsx)(b.default, {
        className: eh.guilds,
        themeOverride: n
      }), (0, a.jsx)(v.default.Provider, {
        value: (null == h ? void 0 : h.params.guildId) === ec.ME ? void 0 : null == h ? void 0 : h.params.guildId,
        children: (0, a.jsxs)("div", {
          className: eh.base,
          children: [c.isMobile ? null : (0, a.jsx)(el.default, {}), (0, a.jsxs)("div", {
            className: eh.content,
            children: [(0, a.jsx)(A.default, {}), (0, a.jsx)(ek, {
              hasNotice: t,
              sidebarTheme: n,
              hideSidebar: i || l || d || E || I || !_
            }), (0, a.jsx)(C.default.Provider, {
              value: T,
              children: (0, a.jsxs)(o.Switch, {
                children: [(0, a.jsx)(S.default, {
                  path: ec.Routes.ACTIVITY,
                  disableTrack: !0,
                  children: (0, a.jsx)(o.Redirect, {
                    to: ec.Routes.ME
                  })
                }), (0, a.jsx)(S.default, {
                  path: ec.Routes.ACTIVITIES_HAPPENING_NOW,
                  render: eb,
                  impressionName: u.ImpressionNames.ACTIVITIES
                }), (0, a.jsx)(S.default, {
                  path: ec.Routes.ACTIVITY_DETAILS(":applicationId"),
                  render: ex,
                  impressionName: u.ImpressionNames.ACTIVITY_DETAILS,
                  impressionProperties: e => {
                    let {
                      computedMatch: t
                    } = e;
                    return {
                      application_id: t.params.applicationId
                    }
                  }
                }), (0, a.jsx)(S.default, {
                  path: ec.Routes.ACTIVITIES,
                  render: eb,
                  impressionName: u.ImpressionNames.ACTIVITIES
                }), (0, a.jsx)(S.default, {
                  path: ec.Routes.APPLICATION_LIBRARY,
                  render: eP,
                  impressionName: u.ImpressionNames.APPLICATION_LIBRARY,
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ec.Routes.APPLICATION_STORE,
                  render: eD,
                  impressionName: u.ImpressionNames.APPLICATION_STORE,
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ec.Routes.COLLECTIBLES_SHOP_FULLSCREEN,
                  render: ey(!0),
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ec.Routes.COLLECTIBLES_SHOP,
                  render: ey(!1),
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ec.Routes.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                  render: ey(!1),
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ec.Routes.MESSAGE_REQUESTS,
                  render: eG,
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ec.Routes.FAMILY_CENTER,
                  render: ej,
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ec.Routes.ME,
                  exact: !0,
                  render: eU,
                  impressionName: u.ImpressionNames.FRIENDS,
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: [ec.Routes.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), ec.Routes.CHANNEL(ec.ME, ":channelId"), ec.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")],
                  render: eO,
                  impressionName: u.ImpressionNames.GUILD_CHANNEL,
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ec.Routes.GUILD_DISCOVERY,
                  render: e => {
                    let {
                      location: t
                    } = e;
                    return eL(t.search)
                  },
                  impressionName: u.ImpressionNames.GUILD_DISCOVERY,
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ec.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"),
                  render: ev,
                  impressionName: u.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                  disableTrack: !0
                }), (0, a.jsx)(S.default, {
                  path: ec.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"),
                  render: eM,
                  impressionName: u.ImpressionNames.HUB_EMAIL_SIGNUP,
                  impressionProperties: e => {
                    let {
                      computedMatch: t
                    } = e;
                    return {
                      has_invite: void 0 !== t.params.inviteCode
                    }
                  }
                }), (0, a.jsx)(S.default, {
                  path: ec.Routes.FEATURE(":feature"),
                  exact: !0,
                  render: ew,
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