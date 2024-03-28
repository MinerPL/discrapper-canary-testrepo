"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("593473"),
  i = n("266067"),
  r = n("613828"),
  o = n("442837"),
  u = n("481060"),
  d = n("893776"),
  c = n("943094"),
  f = n("749210"),
  E = n("287734"),
  h = n("401430"),
  _ = n("230711"),
  C = n("607070"),
  m = n("627845"),
  S = n("185666"),
  I = n("503737"),
  p = n("513202"),
  T = n("318891"),
  g = n("687751"),
  A = n("912471"),
  N = n("100527"),
  v = n("74438"),
  O = n("753450"),
  R = n("675869"),
  L = n("77987"),
  P = n("679891"),
  M = n("491575"),
  y = n("561345"),
  D = n("314533"),
  b = n("935347"),
  x = n("560067"),
  U = n("823169"),
  j = n("620360"),
  G = n("96051"),
  w = n("750995"),
  k = n("696287"),
  F = n("408026"),
  B = n("763916"),
  H = n("306721"),
  V = n("531551"),
  Y = n("38618"),
  W = n("972830"),
  K = n("981283"),
  z = n("584233"),
  q = n("15274"),
  Q = n("434404"),
  Z = n("543842"),
  X = n("879064"),
  J = n("315964"),
  $ = n("495784"),
  ee = n("975533"),
  et = n("377400"),
  en = n("285865"),
  ea = n("659971"),
  es = n("929809"),
  el = n("122333"),
  ei = n("960275"),
  er = n("818765"),
  eo = n("678492"),
  eu = n("269089"),
  ed = n("380570"),
  ec = n("837689"),
  ef = n("367207"),
  eE = n("489977"),
  eh = n("329557"),
  e_ = n("304445"),
  eC = n("893607"),
  em = n("703656"),
  eS = n("298969"),
  eI = n("719256"),
  ep = n("6025"),
  eT = n("897473"),
  eg = n("377368"),
  eA = n("262702"),
  eN = n("639033"),
  ev = n("479313"),
  eO = n("911560"),
  eR = n("703016"),
  eL = n("171368"),
  eP = n("429974"),
  eM = n("332754"),
  ey = n("507468"),
  eD = n("357269"),
  eb = n("282506"),
  ex = n("444961"),
  eU = n("314897"),
  ej = n("433355"),
  eG = n("592125"),
  ew = n("896797"),
  ek = n("430824"),
  eF = n("819640"),
  eB = n("283595"),
  eH = n("944486"),
  eV = n("914010"),
  eY = n("695103"),
  eW = n("241890"),
  eK = n("396296"),
  ez = n("897607"),
  eq = n("417363"),
  eQ = n("900974"),
  eZ = n("358085"),
  eX = n("998502"),
  eJ = n("346329"),
  e$ = n("981631"),
  e0 = n("272242"),
  e1 = n("176505"),
  e4 = n("701476");

function e2(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
n("117240"), n("801077"), n("967368"), n("272053"), n("974180"), n("574254"), n("551428"), n("55563"), n("455173"), n("882029"), n("959457"), n("653255"), n("663389"), n("25990"), n("778825"), n("999382"), n("388610"), n("533947"), n("277053"), n("371398"), n("141233"), n("471073"), n("628566");
let e9 = !1;
(0, A.initSessionHeartbeatScheduler)(), o.default.initialize(), eS.default.loadServer(), eZ.isPlatformEmbedded && (eX.default.on("USER_SETTINGS_OPEN", () => {
  !eF.default.getLayers().includes(e$.Layers.USER_SETTINGS) && _.default.open(e$.UserSettingsSections.ACCOUNT)
}), eX.default.on("LAUNCH_APPLICATION", (e, t) => {
  let n = eB.default.getActiveLibraryApplication(t);
  eJ.playApplication(t, n, {
    analyticsParams: {
      location: {
        page: e$.AnalyticsPages.DIRECT,
        object: e$.AnalyticsObjects.WEB_URL
      }
    }
  })
}));
let e7 = o.default.connectStores([Y.default, ew.default, eU.default], () => ({
    isConnected: Y.default.isConnected(),
    defaultRoute: ew.default.defaultRoute,
    defaultRouteFallback: ew.default.fallbackRoute,
    token: eU.default.getToken()
  }))(class extends s.Component {
    componentDidMount() {
      let {
        match: e
      } = this.props;
      null != e && null != e.params.inviteCode && (0, z.doGuildOnboardingForPostAuthInvite)({
        code: e.params.inviteCode
      })
    }
    render() {
      let {
        isConnected: e,
        defaultRoute: t,
        token: n,
        defaultRouteFallback: s
      } = this.props;
      if (null == n) return (0, a.jsx)(r.Redirect, {
        to: e$.Routes.DEFAULT_LOGGED_OUT
      });
      if (e) {
        let e = ts(t);
        return null == e || (e.params.guildId === e$.ME || null != ek.default.getGuild(e.params.guildId)) && null != eG.default.getChannel(e.params.channelId) ? (0, a.jsx)(r.Redirect, {
          to: t
        }) : (0, a.jsx)(r.Redirect, {
          to: s
        })
      }
      return null
    }
  }),
  e3 = (0, L.makeAuthenticated)(M.default, null, {
    passProps: !1
  }),
  e5 = (0, L.makeAuthenticated)(function() {
    return (0, a.jsx)(v.default, {})
  }),
  e8 = (0, L.makeAuthenticated)(function(e) {
    let {
      match: t
    } = e, {
      applicationId: n,
      section: s
    } = t.params, l = (0, Z.default)(e0.ApplicationDirectoryProfileSections, s);
    return (0, a.jsx)(O.default, {
      applicationId: n,
      initialSection: l
    })
  }),
  e6 = (0, L.makeAuthenticated)(function() {
    return (0, a.jsx)(R.default, {})
  }),
  te = [e$.Routes.GUILD_BOOSTING_MARKETING(":guildId"), ...Array.from(e1.StaticChannelRoutes).map(e => e$.Routes.CHANNEL(":guildId", e))];

function tt(e) {
  let {
    guildId: t,
    channelId: n = null,
    messageId: a = null,
    threadId: s = null
  } = e.params;
  return {
    guildId: null != t ? t : e$.ME,
    channelId: n,
    messageId: a,
    threadId: s
  }
}
let tn = [{
    path: [e$.Routes.APPLICATION_DIRECTORY_SEARCH],
    render: e6,
    isSessionRequired: !0
  }, {
    path: [e$.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?")],
    render: e8,
    isSessionRequired: !0
  }, {
    path: [e$.Routes.APPLICATION_DIRECTORY],
    render: e5,
    isSessionRequired: !0
  }],
  ta = [{
    path: [e$.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
    render(e) {
      let {
        match: t
      } = e;
      return (0, a.jsx)(e7, {
        match: t
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.APP],
    render: () => (0, a.jsx)(e7, {}),
    isSessionRequired: !0
  }, {
    path: [e$.Routes.USERS(":id")],
    render: function(e) {
      let {
        match: t,
        location: n
      } = e, {
        friend_token: s
      } = (0, l.parse)(n.search), {
        id: i
      } = t.params;
      return (0, W.addPostConnectionCallback)(() => (0, eL.openUserProfileModal)({
        userId: i,
        guildId: e$.ME,
        friendToken: s,
        sourceAnalyticsLocations: [N.default.URI_SCHEME],
        analyticsLocation: {
          section: e$.AnalyticsSections.DIRECT_ROUTE_ACCESS
        }
      })), (0, a.jsx)(r.Redirect, {
        to: ew.default.defaultRoute
      })
    }
  }, {
    path: [e$.Routes.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
    render: function(e) {
      let {
        match: t
      } = e, {
        gameId: n,
        action: s
      } = t.params;
      return eq.default.whenInitialized(() => {
        eB.default.whenInitialized(() => {
          switch (s) {
            case "launch": {
              let e = eB.default.getActiveLibraryApplication(n);
              if (null == e) return;
              eJ.playApplication(e.id, e, {
                analyticsParams: {
                  location: {
                    page: e$.AnalyticsPages.DIRECT,
                    object: e$.AnalyticsObjects.WEB_URL
                  }
                }
              });
              break
            }
            case "test-mode":
              eY.default.whenInitialized(() => h.authorizeAndSetTestModeApplication(n));
              break;
            case "uninstall": {
              let e = eB.default.getActiveLibraryApplication(n);
              if (null == e) return;
              (0, c.uninstallBranchPrompt)(e.id, e.branchId, e$.AnalyticsLocations.URI_SCHEME)
            }
          }
        })
      }), (0, a.jsx)(r.Redirect, {
        to: e$.Routes.APPLICATION_LIBRARY
      })
    }
  }, {
    path: [e$.Routes.GUILD_CREATE],
    render: function() {
      return (0, W.addPostConnectionCallback)(() => x.default.openCreateGuildModal({
        location: "External link"
      })), (0, a.jsx)(r.Redirect, {
        to: ew.default.defaultRoute
      })
    }
  }, {
    path: [e$.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
    render: function(e) {
      let {
        match: t
      } = e, {
        section: n,
        subsection: s
      } = t.params, i = (0, l.parse)(location.search).feature;
      return (0, W.addPostConnectionCallback)(() => X.openGuildSettingsPickerModal({
        section: (0, Z.default)(e$.GuildSettingsSections, n),
        subsection: (0, Z.default)(e$.GuildSettingsSubsections, s),
        feature: i
      })), (0, a.jsx)(r.Redirect, {
        to: ew.default.defaultRoute
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.SETTINGS(":section", ":subsection?")],
    render: function(e) {
      let {
        location: t
      } = e, n = (0, eD.default)(t.pathname);
      return null != n && (0, W.addPostConnectionCallback)(() => _.default.open(n.section, n.subsection, {
        openWithoutBackstack: !1,
        impressionSource: n.source
      })), (0, a.jsx)(r.Redirect, {
        to: ew.default.defaultRoute
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.USER_GUILD_NOTIFICATION_SETTINGS(":guildId")],
    render: function(e) {
      let {
        match: t
      } = e, {
        guildId: s
      } = t.params;
      return (0, W.addPostConnectionCallback)(() => {
        (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("5863"), n.e("60411")]).then(n.bind(n, "751212"));
          return t => (0, a.jsx)(e, {
            ...t,
            guildId: s
          })
        })
      }), (0, a.jsx)(r.Redirect, {
        to: e$.Routes.CHANNEL(s)
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.APPLICATION_LIBRARY_INVENTORY],
    render: function() {
      return (0, W.addPostConnectionCallback)(() => _.default.open(e$.UserSettingsSections.INVENTORY)), (0, a.jsx)(r.Redirect, {
        to: ew.default.defaultRoute
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.WELCOME(":guildId?", ":channelId?")],
    render: function(e) {
      let {
        match: t
      } = e, {
        guildId: n,
        channelId: s
      } = t.params;
      (0, es.setNewUser)(e4.NewUserTypes.MARKETING_UNCLAIMED);
      let l = e$.Routes.CHANNEL(n, s);
      return (0, a.jsx)(r.Redirect, {
        to: l
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.GUILD_EVENT_DETAILS(":guildId?", ":guildEventId")],
    render: function(e) {
      let {
        match: t
      } = e, {
        guildId: n,
        guildEventId: s
      } = t.params;
      return (0, W.addPostConnectionCallback)(() => {
        (0, q.openGuildEventDetails)({
          eventId: s
        })
      }), (0, a.jsx)(r.Redirect, {
        to: e$.Routes.CHANNEL(n)
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.GUILD_SETTINGS(":guildId", ":section?", ":subsection?")],
    render: function(e) {
      let {
        match: t
      } = e, {
        guildId: n,
        section: s,
        subsection: l
      } = t.params;
      return (0, W.addPostConnectionCallback)(() => {
        Q.default.open(n, (0, Z.default)(e$.GuildSettingsSections, s), void 0, (0, Z.default)(e$.GuildSettingsSubsections, l))
      }), (0, a.jsx)(r.Redirect, {
        to: e$.Routes.CHANNEL(n)
      })
    },
    isSessionRequired: !0,
    isChatRoute: !0
  }, {
    path: [e$.Routes.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), e$.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"), e$.Routes.ACTIVITY, e$.Routes.ACTIVITIES, e$.Routes.ACTIVITIES_HAPPENING_NOW, e$.Routes.ACTIVITY_DETAILS(":applicationId"), e$.Routes.APPLICATION_LIBRARY, e$.Routes.APPLICATION_STORE, e$.Routes.MESSAGE_REQUESTS, e$.Routes.COLLECTIBLES_SHOP, e$.Routes.COLLECTIBLES_SHOP_FULLSCREEN, e$.Routes.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"), e$.Routes.GUILD_DISCOVERY, e$.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"), e$.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"), e$.Routes.GUILD_BOOSTING_MARKETING(":guildId"), e$.Routes.FEATURE(":feature"), e$.Routes.FAMILY_CENTER],
    render: e3,
    isSessionRequired: !0,
    isChatRoute: !0
  }, ...tn];

function ts(e) {
  for (let {
      path: t,
      isChatRoute: n
    }
    of ta) {
    if (!n) continue;
    let a = (0, i.matchPath)(e, {
      path: t
    });
    if (null != a) return a
  }
  return null
}

function tl(e) {
  let {
    channelId: t,
    guildId: n,
    pathname: a
  } = e;
  if (!Y.default.isConnected()) return;
  let {
    location: s
  } = (0, em.getHistory)();
  s.pathname === a && (null == eG.default.getChannel(t) ? (0, em.replaceWith)(e$.Routes.CHANNEL(n)) : (0, em.replaceWith)(a))
}
class ti extends s.PureComponent {
  componentDidMount() {
    y.default.initialize(), eX.default.setZoomFactor(C.default.zoom), eS.default.init(), P.default.initialize(), ed.default.initialize(), F.default.initialize(), ex.default.initialize(), B.default.initialize(), ef.default.initialize(), ee.default.initialize(), m.default.init(), V.default.init(), H.default.init(), el.default.initialize(), g.default.initialize(), w.default.initialize(), eE.default.initialize(), T.default.initialize(), eb.default.initialize(), eu.default.initialize(), p.default.initialize(), K.default.init(), J.default.init(), ez.default.init(), eQ.default.init(), I.default.initialize(), eR.default.init(), eK.default.init(), eW.default.init(), eM.default.init(), eA.default.initialize(), eN.default.initialize(), eP.default.initialize(), ey.default.init(), G.default.initialize(), S.default.initialize(), eI.default.initialize(), eg.default.initialize(), er.default.initialize(), ei.default.initialize(), eo.default.initialize(), D.default.initialize(), $.default.init({
      hasModalOpen: u.hasAnyModalOpen,
      openModal: () => (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "650233"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      })
    }), j.default.init(), et.default.initialize(), eh.default.initialize(), ec.default.initialize(), U.default.initialize(), this.rewriterUnlisten = e_.default.addRouteRewriter(this.ensureChannelMatchesGuild), this.historyUnlisten = e_.default.addRouteChangeListener(this.handleHistoryChange)
  }
  componentWillUnmount() {
    y.default.terminate(), ex.default.terminate(), ef.default.terminate(), ed.default.terminate(), P.default.terminate(), T.default.terminate(), eb.default.terminate(), p.default.terminate(), eE.default.terminate(), eu.default.terminate(), eP.default.terminate(), I.default.terminate(), G.default.terminate(), et.default.terminate(), S.default.terminate(), eh.default.terminate(), eI.default.terminate(), eg.default.terminate(), er.default.terminate(), ei.default.terminate(), eo.default.terminate(), D.default.terminate(), ec.default.terminate(), U.default.terminate(), k.default.terminate(), this.historyUnlisten(), this.rewriterUnlisten()
  }
  handleHistoryChange(e) {
    let {
      pathname: t,
      search: n
    } = e;
    ! function(e) {
      if (Y.default.isConnected() || Y.default.isTryingToConnect()) return;
      let t = eU.default.getToken();
      if (null != t) null != function(e) {
        for (let {
            path: t,
            isSessionRequired: n
          }
          of ta) {
          if (!n) continue;
          let a = (0, i.matchPath)(e, {
            path: t
          });
          if (null != a) return a
        }
        return null
      }(e) && d.default.startSession(t)
    }(t), ! function(e, t) {
      let n = ts(e);
      if (null == n) return;
      let {
        guildId: a,
        channelId: s,
        messageId: r,
        threadId: o
      } = tt(n), u = (0, eC.isValidGuildId)(a), d = (0, eC.isValidChannelId)(s), c = (0, eC.isValidChannelId)(o), h = eV.default.getGuildId(), _ = h !== a;
      if (u && _ && f.default.selectGuild(a), u && d) {
        let n = eH.default.getChannelId(h),
          i = n !== s;
        if (!e9 || _ || i || null != r) {
          e9 = !0, E.default.selectChannel({
            guildId: a,
            channelId: s,
            messageId: r
          });
          let {
            summaryId: e
          } = (0, l.parse)(t);
          null != e && ev.default.setSelectedSummary(s, e)
        }
        if (null != o && c) {
          let e = ej.default.getCurrentSidebarChannelId(n) !== o,
            t = null != ej.default.getGuildSidebarState(a);
          if (null != s && null != o && e) {
            if (t)(0, em.replaceWith)(e$.Routes.CHANNEL(a, o, r));
            else {
              let e = {
                type: eT.SidebarOpenDetailsType.THREAD
              };
              null != r && (e.initialMessageId = r), ep.default.openThreadAsSidebar({
                guildId: a,
                baseChannelId: s,
                channelId: o,
                details: e
              })
            }
          }
        } else null != s && !i && ep.default.closeChannelSidebar(s);
        let u = ea.default.getIsOpen();
        if (s === e1.StaticChannelRoute.ROLE_SUBSCRIPTIONS) en.default.closeSidebar();
        else if (_ && u) {
          let t = null == h && a === e$.ME,
            n = e === e$.Routes.GUILD_DISCOVERY;
          t || n ? en.default.closeSidebar() : en.default.openSidebar()
        } else(i && u || !_ && !i) && en.default.closeSidebar()
      } else {
        var C;
        if (C = e, !te.some(e => {
            var t;
            return (null === (t = (0, i.matchPath)(C, e)) || void 0 === t ? void 0 : t.isExact) === !0
          }))(0, em.replaceWith)(ew.default.fallbackRoute)
      }
    }(t, n)
  }
  ensureChannelMatchesGuild(e) {
    if (!Y.default.isConnected()) return null;
    let {
      pathname: t
    } = e, n = ts(t);
    if (null == n) return null;
    let {
      guildId: a,
      channelId: s,
      threadId: l
    } = tt(n), i = (0, eC.isValidGuildId)(a) && a !== e$.ME && a !== e$.FAVORITES;
    if (null != s && (0, eC.isValidChannelId)(s) && !(0, e1.isStaticChannelRoute)(s) && i) {
      let n = eG.default.getChannel(s);
      if (null == n) eO.default.loadThread(s).then(() => tl({
        channelId: s,
        guildId: a,
        pathname: t
      }));
      else if (n.guild_id !== a) return {
        path: e$.Routes.CHANNEL(a),
        state: e.state
      };
      if (null != l) {
        if (!((0, eC.isValidChannelId)(l) && !(0, e1.isStaticChannelRoute)(s))) return null;
        let n = eG.default.getChannel(l);
        if (null == n) eO.default.loadThread(l).then(() => tl({
          channelId: l,
          guildId: a,
          pathname: t
        }));
        else if ((null == n ? void 0 : n.parent_id) !== s) return ep.default.closeChannelSidebar(s), {
          path: e$.Routes.CHANNEL(a, s),
          state: e.state
        }
      }
    }
    return null
  }
  render() {
    return (0, a.jsxs)(s.Fragment, {
      children: [(0, a.jsxs)(r.Switch, {
        children: [(0, a.jsx)(r.Redirect, {
          exact: !0,
          from: "/channels",
          to: "/"
        }), ta.map(e => {
          let {
            path: t,
            render: n
          } = e;
          return (0, a.jsx)(r.Route, {
            path: t,
            render: n
          }, t[0])
        }), (0, a.jsx)(r.Redirect, {
          to: "/"
        })]
      }), (0, a.jsx)(b.default, {})]
    })
  }
  constructor(...e) {
    super(...e), e2(this, "historyUnlisten", () => {}), e2(this, "rewriterUnlisten", () => {})
  }
}
t.default = ti