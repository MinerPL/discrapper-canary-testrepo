"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eY
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
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
  m = n("918854"),
  S = n("279240"),
  I = n("765717"),
  p = n("358221"),
  T = n("823748"),
  g = n("626421"),
  A = n("118379"),
  N = n("652515"),
  v = n("544978"),
  O = n("194729"),
  R = n("668940"),
  L = n("372900"),
  P = n("6039"),
  M = n("637853"),
  y = n("326145"),
  D = n("102267"),
  b = n("362416"),
  x = n("416568"),
  U = n("613609"),
  j = n("160404"),
  G = n("225675"),
  w = n("745052"),
  k = n("285865"),
  F = n("659971"),
  B = n("720734"),
  H = n("840780"),
  V = n("215152"),
  Y = n("235555"),
  W = n("746508"),
  K = n("179742"),
  z = n("270759"),
  q = n("78826"),
  Q = n("990146"),
  Z = n("905423"),
  X = n("304445"),
  J = n("210887"),
  $ = n("592125"),
  ee = n("271383"),
  et = n("430824"),
  en = n("944486"),
  ea = n("933429"),
  es = n("823379"),
  el = n("709054"),
  ei = n("792125"),
  er = n("409292"),
  eo = n("316173"),
  eu = n("256638"),
  ed = n("663701"),
  ec = n("410575"),
  ef = n("425369"),
  eE = n("715702"),
  eh = n("981631"),
  e_ = n("176505"),
  eC = n("290511"),
  em = n("46140"),
  eS = n("689938"),
  eI = n("268703");
let ep = () => (0, a.jsx)("div", {
    className: eI.loader,
    children: (0, a.jsx)(E.Spinner, {})
  }),
  eT = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("99387"), n.e("68614")]).then(n.bind(n, "650788")),
    webpackId: "650788",
    name: "GuildShopPage",
    renderLoader: ep
  }),
  eg = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("99387"), n.e("16114"), n.e("44798")]).then(n.bind(n, "998420")),
    webpackId: "998420",
    name: "GuildMemberApplicationReview",
    renderLoader: ep
  }),
  eA = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("99387"), n.e("51373")]).then(n.bind(n, "231588")),
    webpackId: "231588",
    name: "GuildHomePage",
    renderLoader: ep
  }),
  eN = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("85552"), n.e("16600")]).then(n.bind(n, "545918")),
    webpackId: "545918",
    name: "MemberSafetyPage",
    renderLoader: ep
  }),
  ev = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("75475"), n.e("58227"), n.e("38359"), n.e("35809")]).then(n.bind(n, "603072")),
    webpackId: "603072",
    name: "ChannelsAndRolesPage",
    renderLoader: ep
  }),
  eO = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("75475"), n.e("19878"), n.e("38359"), n.e("50498")]).then(n.bind(n, "599263")),
    webpackId: "599263",
    name: "GuildOnboardingPage",
    renderLoader: ep
  }),
  eR = e => {
    let {
      match: t
    } = e, n = (0, f.useStateFromStores)([$.default, en.default], () => {
      let e = en.default.getChannelId();
      return $.default.getChannel(e)
    }), {
      guildId: s,
      channelId: l,
      messageId: i
    } = t.params, r = (0, f.useStateFromStores)([et.default], () => et.default.getGuild(s)), o = (0, f.useStateFromStores)([ee.default], () => null == s ? null : ee.default.getSelfMember(s)), u = (0, f.useStateFromStores)([j.default], () => {
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
    if (null != s && null != l && (0, e_.isStaticChannelRoute)(l)) switch (l) {
      case e_.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
        return d ? (0, a.jsx)(eT, {
          guildId: s,
          initialTab: v.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS
        }) : (0, a.jsx)(D.default, {
          guildId: s
        });
      case e_.StaticChannelRoute.GUILD_SHOP:
        return (0, a.jsx)(eT, {
          guildId: s,
          productId: i,
          initialTab: u
        });
      case e_.StaticChannelRoute.MEMBER_APPLICATIONS:
        return (0, a.jsx)(eg, {
          guildId: s
        });
      case e_.StaticChannelRoute.GUILD_HOME:
        return (0, a.jsx)(eA, {
          guildId: s
        });
      case e_.StaticChannelRoute.CHANNEL_BROWSER:
        return (0, a.jsx)(ev, {
          guildId: s,
          selectedSection: eC.GuildOnboardingTab.BROWSE
        });
      case e_.StaticChannelRoute.GUILD_ONBOARDING:
        return (0, a.jsx)(eO, {
          guildId: s
        });
      case e_.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
        return (0, a.jsx)(ev, {
          guildId: s,
          selectedSection: eC.GuildOnboardingTab.CUSTOMIZE
        });
      case e_.StaticChannelRoute.MEMBER_SAFETY:
        return (0, a.jsx)(eN, {
          guildId: s
        });
      default:
        (0, es.assertNever)(l)
    }
    if ((0, M.isBlockedByOnboarding)(r, o)) return (0, a.jsx)(y.default, {
      guildId: s,
      channelId: l
    });
    if ((null == n ? void 0 : n.type) === eh.ChannelTypes.GUILD_STORE) {
      let e = el.default.cast(t.params.messageId);
      return (0, a.jsx)(er.default, {
        channel: n,
        inputSkuId: e
      }, n.id)
    }
    return (0, a.jsx)(T.default, {})
  },
  eL = s.memo(function() {
    let {
      guildId: e,
      channelId: t
    } = (0, Z.default)(), n = (0, f.useStateFromStores)([en.default], () => null != t ? t : en.default.getChannelId(e));
    return function() {
      return window.location.pathname.startsWith(eh.Routes.GUILD_DISCOVERY)
    }() ? (0, a.jsx)(R.default, {}) : null != e ? (0, a.jsx)(b.default, {
      selectedChannelId: n,
      guildId: e
    }, e) : (0, a.jsx)(ed.default, {})
  });

function eP(e) {
  let t = (0, Z.default)(e => {
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
let eM = e => (0, a.jsx)(eR, {
    ...e
  }),
  ey = e => {
    let t = null != e && e.length > 0 && e.startsWith("?") ? e.split("?")[1] : null;
    return (0, a.jsx)(O.default, {
      searchRoute: t
    })
  },
  eD = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, a.jsx)(P.default, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  eb = e => {
    let {
      match: t
    } = e;
    return null != t.params.guildId ? (0, a.jsx)(U.default, {
      guildId: t.params.guildId,
      inviteCode: t.params.inviteCode
    }) : null
  },
  ex = () => (0, a.jsx)(ef.default, {}),
  eU = () => (0, a.jsx)(eE.default, {}),
  ej = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return function(t) {
      return (0, a.jsx)(A.default, {
        isFullScreen: e,
        ...t
      })
    }
  },
  eG = e => (0, a.jsx)(S.default, {
    ...e
  }),
  ew = () => (0, a.jsx)(m.default, {}),
  ek = () => (0, a.jsx)(z.default, {}),
  eF = () => (0, a.jsx)(w.default, {}),
  eB = () => (0, a.jsx)(K.default, {}),
  eH = e => {
    let {
      match: t
    } = e;
    switch (t.params.feature) {
      case "addFriends":
        return (0, a.jsx)(z.default, {
          initialSection: eh.FriendsSections.ADD_FRIEND
        });
      case "pendingFriends":
        return (0, a.jsx)(z.default, {
          initialSection: eh.FriendsSections.PENDING
        });
      case "sessionManagement":
        return (0, a.jsx)(o.Redirect, {
          to: eh.Routes.SETTINGS("sessions")
        });
      case "connections":
        return (0, a.jsx)(o.Redirect, {
          to: {
            pathname: eh.Routes.SETTINGS("connections"),
            search: e.location.search
          }
        });
      case "family-center":
        return (0, a.jsx)(o.Redirect, {
          to: eh.Routes.FAMILY_CENTER
        });
      case "account-standing":
        return (0, a.jsx)(o.Redirect, {
          to: eh.Routes.SETTINGS("privacy-and-safety", "account-standing")
        });
      default:
        return (0, a.jsx)(o.Redirect, {
          to: eh.Routes.ME
        })
    }
  };

function eV(e) {
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
    className: i()(eI.sidebar, (0, ei.getThemeClass)(n), {
      [eI.hasNotice]: t,
      [eI.fullWidth]: c.isMobile,
      [eI.hidden]: r
    }),
    children: [(0, a.jsx)(eL, {}), (0, a.jsxs)("section", {
      className: eI.panels,
      "aria-label": eS.default.Messages.ACCOUNT_A11Y_LABEL,
      children: [(0, a.jsx)(q.QuestsAssetContextProvider, {
        sentrySource: em.QuestsExperimentLocations.QUESTS_BAR,
        children: (0, a.jsx)(Q.default, {})
      }), (0, a.jsx)(Y.default, {}), (0, a.jsx)(ec.default, {
        section: eh.AnalyticsSections.ACTIVITY_PANEL,
        children: (0, a.jsx)(eP, {
          className: eI.activityPanel
        })
      }), (0, a.jsx)(ec.default, {
        section: eh.AnalyticsSections.RTC_CONNECTION_PANEL,
        children: (0, a.jsx)(W.default, {})
      }), (0, a.jsx)(V.default, {}), (0, a.jsx)(ec.default, {
        section: eh.AnalyticsSections.ACCOUNT_PANEL,
        children: (0, a.jsx)(B.default, {})
      })]
    }), (0, a.jsx)(eo.default, {})]
  })
}

function eY() {
  var e;
  let t = (0, f.useStateFromStores)([ea.default], () => ea.default.hasNotice()),
    n = (0, f.useStateFromStores)([J.default], () => J.default.darkSidebar ? eh.ThemeTypes.DARK : void 0),
    l = function() {
      let [e, t] = s.useState(() => window.location.pathname.startsWith(eh.Routes.GUILD_MEMBER_VERIFICATION("")));
      return s.useEffect(() => X.default.addRouteChangeListener(e => {
        t(e.pathname.startsWith(eh.Routes.GUILD_MEMBER_VERIFICATION("")))
      }), []), e
    }(),
    i = function() {
      let [e, t] = s.useState(() => window.location.pathname.startsWith(eh.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB("")));
      return s.useEffect(() => X.default.addRouteChangeListener(e => {
        t(e.pathname.startsWith(eh.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB("")))
      }), []), e
    }(),
    d = function() {
      var e;
      let t = (0, o.useLocation)();
      return (null === (e = (0, r.matchPath)(t.pathname, eh.Routes.GUILD_BOOSTING_MARKETING(":guildId"))) || void 0 === e ? void 0 : e.isExact) === !0
    }(),
    E = function() {
      var e;
      let t = (0, o.useLocation)();
      return (null === (e = (0, r.matchPath)(t.pathname, eh.Routes.COLLECTIBLES_SHOP_FULLSCREEN)) || void 0 === e ? void 0 : e.isExact) === !0
    }(),
    h = (0, f.useStateFromStores)([F.default], () => F.default.getIsOpen()),
    _ = (0, o.useRouteMatch)([eh.Routes.CHANNEL(eh.ME, ":channelId"), eh.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")]),
    m = (null == _ ? void 0 : null === (e = _.params) || void 0 === e ? void 0 : e.channelId) === e_.StaticChannelRoute.GUILD_ONBOARDING,
    S = s.useCallback(() => k.default.openSidebar(), []);
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)("div", {
      className: eI.container,
      children: [h && !E && (0, a.jsx)(x.default, {
        className: eI.guilds,
        themeOverride: n
      }), (0, a.jsx)(L.default.Provider, {
        value: (null == _ ? void 0 : _.params.guildId) === eh.ME ? void 0 : null == _ ? void 0 : _.params.guildId,
        children: (0, a.jsxs)("div", {
          className: eI.base,
          children: [c.isMobile ? null : (0, a.jsx)(eu.default, {}), (0, a.jsxs)("div", {
            className: eI.content,
            children: [(0, a.jsx)(g.default, {}), (0, a.jsx)(eV, {
              hasNotice: t,
              sidebarTheme: n,
              hideSidebar: l || i || d || E || m || !h
            }), (0, a.jsx)(C.default.Provider, {
              value: S,
              children: (0, a.jsxs)(o.Switch, {
                children: [(0, a.jsx)(I.default, {
                  path: eh.Routes.ACTIVITY,
                  disableTrack: !0,
                  children: (0, a.jsx)(o.Redirect, {
                    to: eh.Routes.ME
                  })
                }), (0, a.jsx)(I.default, {
                  path: eh.Routes.ACTIVITIES_HAPPENING_NOW,
                  render: ew,
                  impressionName: u.ImpressionNames.ACTIVITIES
                }), (0, a.jsx)(I.default, {
                  path: eh.Routes.ACTIVITY_DETAILS(":applicationId"),
                  render: eG,
                  impressionName: u.ImpressionNames.ACTIVITY_DETAILS,
                  impressionProperties: e => {
                    let {
                      computedMatch: t
                    } = e;
                    return {
                      application_id: t.params.applicationId
                    }
                  }
                }), (0, a.jsx)(I.default, {
                  path: eh.Routes.ACTIVITIES,
                  render: ew,
                  impressionName: u.ImpressionNames.ACTIVITIES
                }), (0, a.jsx)(I.default, {
                  path: eh.Routes.APPLICATION_LIBRARY,
                  render: ex,
                  impressionName: u.ImpressionNames.APPLICATION_LIBRARY,
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eh.Routes.APPLICATION_STORE,
                  render: eU,
                  impressionName: u.ImpressionNames.APPLICATION_STORE,
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eh.Routes.COLLECTIBLES_SHOP_FULLSCREEN,
                  render: ej(!0),
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eh.Routes.COLLECTIBLES_SHOP,
                  render: ej(!1),
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eh.Routes.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                  render: ej(!1),
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eh.Routes.MESSAGE_REQUESTS,
                  render: eF,
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eh.Routes.FAMILY_CENTER,
                  render: eB,
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eh.Routes.ME,
                  exact: !0,
                  render: ek,
                  impressionName: u.ImpressionNames.FRIENDS,
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: [eh.Routes.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), eh.Routes.CHANNEL(eh.ME, ":channelId"), eh.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")],
                  render: eM,
                  impressionName: u.ImpressionNames.GUILD_CHANNEL,
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eh.Routes.GUILD_DISCOVERY,
                  render: e => {
                    let {
                      location: t
                    } = e;
                    return ey(t.search)
                  },
                  impressionName: u.ImpressionNames.GUILD_DISCOVERY,
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eh.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"),
                  render: eD,
                  impressionName: u.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                  disableTrack: !0
                }), (0, a.jsx)(I.default, {
                  path: eh.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"),
                  render: eb,
                  impressionName: u.ImpressionNames.HUB_EMAIL_SIGNUP,
                  impressionProperties: e => {
                    let {
                      computedMatch: t
                    } = e;
                    return {
                      has_invite: void 0 !== t.params.inviteCode
                    }
                  }
                }), (0, a.jsx)(I.default, {
                  path: eh.Routes.FEATURE(":feature"),
                  exact: !0,
                  render: eH,
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