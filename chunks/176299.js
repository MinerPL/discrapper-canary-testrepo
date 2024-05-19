"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eV
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
  m = n("918854"),
  S = n("279240"),
  p = n("765717"),
  g = n("358221"),
  I = n("823748"),
  T = n("626421"),
  A = n("118379"),
  N = n("652515"),
  v = n("544978"),
  R = n("194729"),
  O = n("668940"),
  L = n("372900"),
  M = n("6039"),
  y = n("637853"),
  P = n("326145"),
  x = n("269675"),
  D = n("242601"),
  b = n("416568"),
  U = n("613609"),
  j = n("160404"),
  G = n("225675"),
  k = n("745052"),
  w = n("285865"),
  B = n("659971"),
  F = n("720734"),
  H = n("840780"),
  V = n("235555"),
  Y = n("746508"),
  W = n("179742"),
  K = n("270759"),
  z = n("210724"),
  q = n("121711"),
  Q = n("905423"),
  Z = n("304445"),
  X = n("210887"),
  J = n("592125"),
  $ = n("271383"),
  ee = n("430824"),
  et = n("944486"),
  en = n("933429"),
  ea = n("823379"),
  es = n("709054"),
  el = n("792125"),
  ei = n("409292"),
  er = n("316173"),
  eo = n("256638"),
  eu = n("663701"),
  ed = n("410575"),
  ec = n("425369"),
  ef = n("715702"),
  eE = n("981631"),
  eh = n("176505"),
  e_ = n("290511"),
  eC = n("689938"),
  em = n("516699");
let eS = () => (0, a.jsx)("div", {
    className: em.loader,
    children: (0, a.jsx)(E.Spinner, {})
  }),
  ep = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("99387"), n.e("68614")]).then(n.bind(n, "650788")),
    webpackId: "650788",
    name: "GuildShopPage",
    renderLoader: eS
  }),
  eg = (0, d.makeLazy)({
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
  eA = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("75475"), n.e("58227"), n.e("38359"), n.e("51199")]).then(n.bind(n, "603072")),
    webpackId: "603072",
    name: "ChannelsAndRolesPage",
    renderLoader: eS
  }),
  eN = (0, d.makeLazy)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("75475"), n.e("19878"), n.e("38359"), n.e("50498")]).then(n.bind(n, "599263")),
    webpackId: "599263",
    name: "GuildOnboardingPage",
    renderLoader: eS
  }),
  ev = e => {
    let {
      match: t
    } = e, n = (0, f.useStateFromStores)([J.default, et.default], () => {
      let e = et.default.getChannelId();
      return J.default.getChannel(e)
    }), {
      guildId: s,
      channelId: l,
      messageId: i
    } = t.params, r = (0, f.useStateFromStores)([ee.default], () => ee.default.getGuild(s)), o = (0, f.useStateFromStores)([$.default], () => null == s ? null : $.default.getSelfMember(s)), u = (0, f.useStateFromStores)([j.default], () => {
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
    if (null != s && null != l && (0, eh.isStaticChannelRoute)(l)) switch (l) {
      case eh.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
        return d ? (0, a.jsx)(ep, {
          guildId: s,
          initialTab: v.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS
        }) : (0, a.jsx)(x.default, {
          guildId: s
        });
      case eh.StaticChannelRoute.GUILD_SHOP:
        return (0, a.jsx)(ep, {
          guildId: s,
          productId: i,
          initialTab: u
        });
      case eh.StaticChannelRoute.MEMBER_APPLICATIONS:
        return (0, a.jsx)(eg, {
          guildId: s
        });
      case eh.StaticChannelRoute.GUILD_HOME:
        return (0, a.jsx)(eI, {
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
        return (0, a.jsx)(eT, {
          guildId: s
        });
      default:
        (0, ea.assertNever)(l)
    }
    if ((0, y.isBlockedByOnboarding)(r, o)) return (0, a.jsx)(P.default, {
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
    return (0, a.jsx)(I.default, {})
  },
  eR = s.memo(function() {
    let {
      guildId: e,
      channelId: t
    } = (0, Q.default)(), n = (0, f.useStateFromStores)([et.default], () => null != t ? t : et.default.getChannelId(e));
    return function() {
      return window.location.pathname.startsWith(eE.Routes.GUILD_DISCOVERY)
    }() ? (0, a.jsx)(O.default, {}) : null != e ? (0, a.jsx)(D.default, {
      selectedChannelId: n,
      guildId: e
    }, e) : (0, a.jsx)(eu.default, {})
  });

function eO(e) {
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
let eL = e => (0, a.jsx)(ev, {
    ...e
  }),
  eM = e => {
    let t = null != e && e.length > 0 && e.startsWith("?") ? e.split("?")[1] : null;
    return (0, a.jsx)(R.default, {
      searchRoute: t
    })
  },
  ey = e => {
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
  ex = () => (0, a.jsx)(ec.default, {}),
  eD = () => (0, a.jsx)(ef.default, {}),
  eb = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return function(t) {
      return (0, a.jsx)(A.default, {
        isFullScreen: e,
        ...t
      })
    }
  },
  eU = e => (0, a.jsx)(S.default, {
    ...e
  }),
  ej = () => (0, a.jsx)(m.default, {}),
  eG = () => (0, a.jsx)(K.default, {}),
  ek = () => (0, a.jsx)(k.default, {}),
  ew = () => (0, a.jsx)(q.default, {}),
  eB = () => (0, a.jsx)(W.default, {}),
  eF = e => {
    let {
      match: t
    } = e;
    switch (t.params.feature) {
      case "addFriends":
        return (0, a.jsx)(K.default, {
          initialSection: eE.FriendsSections.ADD_FRIEND
        });
      case "pendingFriends":
        return (0, a.jsx)(K.default, {
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

function eH(e) {
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
  let r = (0, f.useStateFromStores)([g.default], () => g.default.isFullscreenInContext());
  return s ? null : (0, a.jsxs)("div", {
    className: i()(em.sidebar, (0, el.getThemeClass)(n), {
      [em.hasNotice]: t,
      [em.fullWidth]: c.isMobile,
      [em.hidden]: r
    }),
    children: [(0, a.jsx)(eR, {}), (0, a.jsxs)("section", {
      className: em.panels,
      "aria-label": eC.default.Messages.ACCOUNT_A11Y_LABEL,
      children: [(0, a.jsx)(z.default, {}), (0, a.jsx)(V.default, {}), (0, a.jsx)(ed.default, {
        section: eE.AnalyticsSections.ACTIVITY_PANEL,
        children: (0, a.jsx)(eO, {
          className: em.activityPanel
        })
      }), (0, a.jsx)(ed.default, {
        section: eE.AnalyticsSections.RTC_CONNECTION_PANEL,
        children: (0, a.jsx)(Y.default, {})
      }), (0, a.jsx)(ed.default, {
        section: eE.AnalyticsSections.ACCOUNT_PANEL,
        children: (0, a.jsx)(F.default, {})
      })]
    }), (0, a.jsx)(er.default, {})]
  })
}

function eV() {
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
    h = (0, f.useStateFromStores)([B.default], () => B.default.getIsOpen()),
    _ = (0, o.useRouteMatch)([eE.Routes.CHANNEL(eE.ME, ":channelId"), eE.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")]),
    m = (null == _ ? void 0 : null === (e = _.params) || void 0 === e ? void 0 : e.channelId) === eh.StaticChannelRoute.GUILD_ONBOARDING,
    S = s.useCallback(() => w.default.openSidebar(), []);
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)("div", {
      className: em.container,
      children: [h && !E && (0, a.jsx)(b.default, {
        className: em.guilds,
        themeOverride: n
      }), (0, a.jsx)(L.default.Provider, {
        value: (null == _ ? void 0 : _.params.guildId) === eE.ME ? void 0 : null == _ ? void 0 : _.params.guildId,
        children: (0, a.jsxs)("div", {
          className: em.base,
          children: [c.isMobile ? null : (0, a.jsx)(eo.default, {}), (0, a.jsxs)("div", {
            className: em.content,
            children: [(0, a.jsx)(T.default, {}), (0, a.jsx)(eH, {
              hasNotice: t,
              sidebarTheme: n,
              hideSidebar: l || i || d || E || m || !h
            }), (0, a.jsx)(C.default.Provider, {
              value: S,
              children: (0, a.jsxs)(o.Switch, {
                children: [(0, a.jsx)(p.default, {
                  path: eE.Routes.ACTIVITY,
                  disableTrack: !0,
                  children: (0, a.jsx)(o.Redirect, {
                    to: eE.Routes.ME
                  })
                }), (0, a.jsx)(p.default, {
                  path: eE.Routes.ACTIVITIES_HAPPENING_NOW,
                  render: ej,
                  impressionName: u.ImpressionNames.ACTIVITIES
                }), (0, a.jsx)(p.default, {
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
                }), (0, a.jsx)(p.default, {
                  path: eE.Routes.ACTIVITIES,
                  render: ej,
                  impressionName: u.ImpressionNames.ACTIVITIES
                }), (0, a.jsx)(p.default, {
                  path: eE.Routes.APPLICATION_LIBRARY,
                  render: ex,
                  impressionName: u.ImpressionNames.APPLICATION_LIBRARY,
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: eE.Routes.APPLICATION_STORE,
                  render: eD,
                  impressionName: u.ImpressionNames.APPLICATION_STORE,
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: eE.Routes.COLLECTIBLES_SHOP_FULLSCREEN,
                  render: eb(!0),
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: eE.Routes.COLLECTIBLES_SHOP,
                  render: eb(!1),
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: eE.Routes.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                  render: eb(!1),
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: eE.Routes.MESSAGE_REQUESTS,
                  render: ek,
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: eE.Routes.QUEST_HOME,
                  render: ew,
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: eE.Routes.FAMILY_CENTER,
                  render: eB,
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: eE.Routes.ME,
                  exact: !0,
                  render: eG,
                  impressionName: u.ImpressionNames.FRIENDS,
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: [eE.Routes.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), eE.Routes.CHANNEL(eE.ME, ":channelId"), eE.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")],
                  render: eL,
                  impressionName: u.ImpressionNames.GUILD_CHANNEL,
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: eE.Routes.GUILD_DISCOVERY,
                  render: e => {
                    let {
                      location: t
                    } = e;
                    return eM(t.search)
                  },
                  impressionName: u.ImpressionNames.GUILD_DISCOVERY,
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: eE.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"),
                  render: ey,
                  impressionName: u.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                  disableTrack: !0
                }), (0, a.jsx)(p.default, {
                  path: eE.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"),
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