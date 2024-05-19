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
  p = n("503737"),
  g = n("513202"),
  I = n("318891"),
  T = n("687751"),
  A = n("912471"),
  N = n("100527"),
  v = n("838134"),
  R = n("77987"),
  O = n("679891"),
  L = n("491575"),
  M = n("561345"),
  y = n("314533"),
  P = n("935347"),
  x = n("560067"),
  D = n("823169"),
  b = n("620360"),
  U = n("96051"),
  j = n("750995"),
  G = n("696287"),
  k = n("408026"),
  w = n("763916"),
  B = n("306721"),
  F = n("531551"),
  H = n("38618"),
  V = n("972830"),
  Y = n("981283"),
  W = n("584233"),
  K = n("15274"),
  z = n("434404"),
  q = n("543842"),
  Q = n("879064"),
  Z = n("315964"),
  X = n("495784"),
  J = n("975533"),
  $ = n("377400"),
  ee = n("285865"),
  et = n("659971"),
  en = n("929809"),
  ea = n("122333"),
  es = n("960275"),
  el = n("818765"),
  ei = n("678492"),
  er = n("269089"),
  eo = n("380570"),
  eu = n("837689"),
  ed = n("367207"),
  ec = n("489977"),
  ef = n("329557"),
  eE = n("304445"),
  eh = n("893607"),
  e_ = n("703656"),
  eC = n("298969"),
  em = n("719256"),
  eS = n("6025"),
  ep = n("897473"),
  eg = n("377368"),
  eI = n("262702"),
  eT = n("639033"),
  eA = n("479313"),
  eN = n("911560"),
  ev = n("703016"),
  eR = n("171368"),
  eO = n("429974"),
  eL = n("332754"),
  eM = n("507468"),
  ey = n("357269"),
  eP = n("282506"),
  ex = n("444961"),
  eD = n("314897"),
  eb = n("433355"),
  eU = n("592125"),
  ej = n("896797"),
  eG = n("430824"),
  ek = n("819640"),
  ew = n("283595"),
  eB = n("944486"),
  eF = n("914010"),
  eH = n("695103"),
  eV = n("241890"),
  eY = n("396296"),
  eW = n("897607"),
  eK = n("417363"),
  ez = n("900974"),
  eq = n("358085"),
  eQ = n("998502"),
  eZ = n("346329"),
  eX = n("981631"),
  eJ = n("176505"),
  e$ = n("701476");

function e0(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
n("117240"), n("801077"), n("967368"), n("272053"), n("974180"), n("574254"), n("551428"), n("55563"), n("455173"), n("882029"), n("959457"), n("653255"), n("663389"), n("25990"), n("778825"), n("999382"), n("388610"), n("533947"), n("277053"), n("371398"), n("141233"), n("471073"), n("628566");
let e1 = !1;
(0, A.initSessionHeartbeatScheduler)(), o.default.initialize(), eC.default.loadServer(), eq.isPlatformEmbedded && (eQ.default.on("USER_SETTINGS_OPEN", () => {
  !ek.default.getLayers().includes(eX.Layers.USER_SETTINGS) && _.default.open(eX.UserSettingsSections.ACCOUNT)
}), eQ.default.on("LAUNCH_APPLICATION", (e, t) => {
  let n = ew.default.getActiveLibraryApplication(t);
  eZ.playApplication(t, n, {
    analyticsParams: {
      location: {
        page: eX.AnalyticsPages.DIRECT,
        object: eX.AnalyticsObjects.WEB_URL
      }
    }
  })
}));
let e4 = o.default.connectStores([H.default, ej.default, eD.default], () => ({
    isConnected: H.default.isConnected(),
    defaultRoute: ej.default.defaultRoute,
    defaultRouteFallback: ej.default.fallbackRoute,
    token: eD.default.getToken()
  }))(class extends s.Component {
    componentDidMount() {
      let {
        match: e
      } = this.props;
      null != e && null != e.params.inviteCode && (0, W.doGuildOnboardingForPostAuthInvite)({
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
        to: eX.Routes.DEFAULT_LOGGED_OUT
      });
      if (e) {
        let e = e6(t);
        return null == e || (e.params.guildId === eX.ME || null != eG.default.getGuild(e.params.guildId)) && null != eU.default.getChannel(e.params.channelId) ? (0, a.jsx)(r.Redirect, {
          to: t
        }) : (0, a.jsx)(r.Redirect, {
          to: s
        })
      }
      return null
    }
  }),
  e2 = (0, R.makeAuthenticated)(L.default, null, {
    passProps: !1
  }),
  e3 = (0, R.makeAuthenticated)(v.default, null, {
    passProps: !1
  }),
  e7 = [eX.Routes.GUILD_BOOSTING_MARKETING(":guildId"), ...Array.from(eJ.StaticChannelRoutes).map(e => eX.Routes.CHANNEL(":guildId", e))];

function e5(e) {
  let {
    guildId: t,
    channelId: n = null,
    messageId: a = null,
    threadId: s = null
  } = e.params;
  return {
    guildId: null != t ? t : eX.ME,
    channelId: n,
    messageId: a,
    threadId: s
  }
}
let e9 = [{
  path: [eX.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
  render(e) {
    let {
      match: t
    } = e;
    return (0, a.jsx)(e4, {
      match: t
    })
  },
  isSessionRequired: !0
}, {
  path: [eX.Routes.APP],
  render: () => (0, a.jsx)(e4, {}),
  isSessionRequired: !0
}, {
  path: [eX.Routes.USERS(":id")],
  render: function(e) {
    let {
      match: t,
      location: n
    } = e, {
      friend_token: s
    } = (0, l.parse)(n.search), {
      id: i
    } = t.params;
    return (0, V.addPostConnectionCallback)(() => (0, eR.openUserProfileModal)({
      userId: i,
      guildId: eX.ME,
      friendToken: s,
      sourceAnalyticsLocations: [N.default.URI_SCHEME],
      analyticsLocation: {
        section: eX.AnalyticsSections.DIRECT_ROUTE_ACCESS
      }
    })), (0, a.jsx)(r.Redirect, {
      to: ej.default.defaultRoute
    })
  }
}, {
  path: [eX.Routes.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
  render: function(e) {
    let {
      match: t
    } = e, {
      gameId: n,
      action: s
    } = t.params;
    return eK.default.whenInitialized(() => {
      ew.default.whenInitialized(() => {
        switch (s) {
          case "launch": {
            let e = ew.default.getActiveLibraryApplication(n);
            if (null == e) return;
            eZ.playApplication(e.id, e, {
              analyticsParams: {
                location: {
                  page: eX.AnalyticsPages.DIRECT,
                  object: eX.AnalyticsObjects.WEB_URL
                }
              }
            });
            break
          }
          case "test-mode":
            eH.default.whenInitialized(() => h.authorizeAndSetTestModeApplication(n));
            break;
          case "uninstall": {
            let e = ew.default.getActiveLibraryApplication(n);
            if (null == e) return;
            (0, c.uninstallBranchPrompt)(e.id, e.branchId, eX.AnalyticsLocations.URI_SCHEME)
          }
        }
      })
    }), (0, a.jsx)(r.Redirect, {
      to: eX.Routes.APPLICATION_LIBRARY
    })
  }
}, {
  path: [eX.Routes.GUILD_CREATE],
  render: function() {
    return (0, V.addPostConnectionCallback)(() => x.default.openCreateGuildModal({
      location: "External link"
    })), (0, a.jsx)(r.Redirect, {
      to: ej.default.defaultRoute
    })
  }
}, {
  path: [eX.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
  render: function(e) {
    let {
      match: t
    } = e, {
      section: n,
      subsection: s
    } = t.params, i = (0, l.parse)(location.search).feature;
    return (0, V.addPostConnectionCallback)(() => Q.openGuildSettingsPickerModal({
      section: (0, q.default)(eX.GuildSettingsSections, n),
      subsection: (0, q.default)(eX.GuildSettingsSubsections, s),
      feature: i
    })), (0, a.jsx)(r.Redirect, {
      to: ej.default.defaultRoute
    })
  },
  isSessionRequired: !0
}, {
  path: [eX.Routes.SETTINGS(":section", ":subsection?")],
  render: function(e) {
    let {
      location: t
    } = e, n = (0, ey.default)(t.pathname);
    return null != n && (0, V.addPostConnectionCallback)(() => _.default.open(n.section, n.subsection, {
      openWithoutBackstack: !1,
      impressionSource: n.source
    })), (0, a.jsx)(r.Redirect, {
      to: ej.default.defaultRoute
    })
  },
  isSessionRequired: !0
}, {
  path: [eX.Routes.USER_GUILD_NOTIFICATION_SETTINGS(":guildId")],
  render: function(e) {
    let {
      match: t
    } = e, {
      guildId: s
    } = t.params;
    return (0, V.addPostConnectionCallback)(() => {
      (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("99387"), n.e("5863"), n.e("29041")]).then(n.bind(n, "751212"));
        return t => (0, a.jsx)(e, {
          ...t,
          guildId: s
        })
      })
    }), (0, a.jsx)(r.Redirect, {
      to: eX.Routes.CHANNEL(s)
    })
  },
  isSessionRequired: !0
}, {
  path: [eX.Routes.APPLICATION_LIBRARY_INVENTORY],
  render: function() {
    return (0, V.addPostConnectionCallback)(() => _.default.open(eX.UserSettingsSections.INVENTORY)), (0, a.jsx)(r.Redirect, {
      to: ej.default.defaultRoute
    })
  },
  isSessionRequired: !0
}, {
  path: [eX.Routes.WELCOME(":guildId?", ":channelId?")],
  render: function(e) {
    let {
      match: t
    } = e, {
      guildId: n,
      channelId: s
    } = t.params;
    (0, en.setNewUser)(e$.NewUserTypes.MARKETING_UNCLAIMED);
    let l = eX.Routes.CHANNEL(n, s);
    return (0, a.jsx)(r.Redirect, {
      to: l
    })
  },
  isSessionRequired: !0
}, {
  path: [eX.Routes.GUILD_EVENT_DETAILS(":guildId?", ":guildEventId")],
  render: function(e) {
    let {
      match: t
    } = e, {
      guildId: n,
      guildEventId: s
    } = t.params;
    return (0, V.addPostConnectionCallback)(() => {
      (0, K.openGuildEventDetails)({
        eventId: s
      })
    }), (0, a.jsx)(r.Redirect, {
      to: eX.Routes.CHANNEL(n)
    })
  },
  isSessionRequired: !0
}, {
  path: [eX.Routes.GUILD_SETTINGS(":guildId", ":section?", ":subsection?")],
  render: function(e) {
    let {
      match: t
    } = e, {
      guildId: n,
      section: s,
      subsection: l
    } = t.params;
    return (0, V.addPostConnectionCallback)(() => {
      z.default.open(n, (0, q.default)(eX.GuildSettingsSections, s), void 0, (0, q.default)(eX.GuildSettingsSubsections, l))
    }), (0, a.jsx)(r.Redirect, {
      to: eX.Routes.CHANNEL(n)
    })
  },
  isSessionRequired: !0,
  isChatRoute: !0
}, {
  path: [eX.Routes.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), eX.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"), eX.Routes.ACTIVITY, eX.Routes.ACTIVITIES, eX.Routes.ACTIVITIES_HAPPENING_NOW, eX.Routes.ACTIVITY_DETAILS(":applicationId"), eX.Routes.APPLICATION_LIBRARY, eX.Routes.APPLICATION_STORE, eX.Routes.MESSAGE_REQUESTS, eX.Routes.QUEST_HOME, eX.Routes.COLLECTIBLES_SHOP, eX.Routes.COLLECTIBLES_SHOP_FULLSCREEN, eX.Routes.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"), eX.Routes.GUILD_DISCOVERY, eX.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"), eX.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"), eX.Routes.GUILD_BOOSTING_MARKETING(":guildId"), eX.Routes.FEATURE(":feature"), eX.Routes.FAMILY_CENTER],
  render: e2,
  isSessionRequired: !0,
  isChatRoute: !0
}, {
  path: [eX.Routes.APPLICATION_DIRECTORY],
  render: e3,
  isSessionRequired: !0
}];

function e6(e) {
  for (let {
      path: t,
      isChatRoute: n
    }
    of e9) {
    if (!n) continue;
    let a = (0, i.matchPath)(e, {
      path: t
    });
    if (null != a) return a
  }
  return null
}

function e8(e) {
  let {
    channelId: t,
    guildId: n,
    pathname: a
  } = e;
  if (!H.default.isConnected()) return;
  let {
    location: s
  } = (0, e_.getHistory)();
  s.pathname === a && (null == eU.default.getChannel(t) ? (0, e_.replaceWith)(eX.Routes.CHANNEL(n)) : (0, e_.replaceWith)(a))
}
class te extends s.PureComponent {
  componentDidMount() {
    M.default.initialize(), eQ.default.setZoomFactor(C.default.zoom), eC.default.init(), O.default.initialize(), eo.default.initialize(), k.default.initialize(), ex.default.initialize(), w.default.initialize(), ed.default.initialize(), J.default.initialize(), m.default.init(), F.default.init(), B.default.init(), ea.default.initialize(), T.default.initialize(), j.default.initialize(), ec.default.initialize(), I.default.initialize(), eP.default.initialize(), er.default.initialize(), g.default.initialize(), Y.default.init(), Z.default.init(), eW.default.init(), ez.default.init(), p.default.initialize(), ev.default.init(), eY.default.init(), eV.default.init(), eL.default.init(), eI.default.initialize(), eT.default.initialize(), eO.default.initialize(), eM.default.init(), U.default.initialize(), S.default.initialize(), em.default.initialize(), eg.default.initialize(), el.default.initialize(), es.default.initialize(), ei.default.initialize(), y.default.initialize(), X.default.init({
      hasModalOpen: u.hasAnyModalOpen,
      openModal: () => (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "650233"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      })
    }), b.default.init(), $.default.initialize(), ef.default.initialize(), eu.default.initialize(), D.default.initialize(), this.rewriterUnlisten = eE.default.addRouteRewriter(this.ensureChannelMatchesGuild), this.historyUnlisten = eE.default.addRouteChangeListener(this.handleHistoryChange)
  }
  componentWillUnmount() {
    M.default.terminate(), ex.default.terminate(), ed.default.terminate(), eo.default.terminate(), O.default.terminate(), I.default.terminate(), eP.default.terminate(), g.default.terminate(), ec.default.terminate(), er.default.terminate(), eO.default.terminate(), p.default.terminate(), U.default.terminate(), $.default.terminate(), S.default.terminate(), ef.default.terminate(), em.default.terminate(), eg.default.terminate(), el.default.terminate(), es.default.terminate(), ei.default.terminate(), y.default.terminate(), eu.default.terminate(), D.default.terminate(), G.default.terminate(), this.historyUnlisten(), this.rewriterUnlisten()
  }
  handleHistoryChange(e) {
    let {
      pathname: t,
      search: n
    } = e;
    ! function(e) {
      if (H.default.isConnected() || H.default.isTryingToConnect()) return;
      let t = eD.default.getToken();
      if (null != t) null != function(e) {
        for (let {
            path: t,
            isSessionRequired: n
          }
          of e9) {
          if (!n) continue;
          let a = (0, i.matchPath)(e, {
            path: t
          });
          if (null != a) return a
        }
        return null
      }(e) && d.default.startSession(t)
    }(t), ! function(e, t) {
      let n = e6(e);
      if (null == n) return;
      let {
        guildId: a,
        channelId: s,
        messageId: r,
        threadId: o
      } = e5(n), u = (0, eh.isValidGuildId)(a), d = (0, eh.isValidChannelId)(s), c = (0, eh.isValidChannelId)(o), h = eF.default.getGuildId(), _ = h !== a;
      if (u && _ && f.default.selectGuild(a), u && d) {
        let n = eB.default.getChannelId(h),
          i = n !== s;
        if (!e1 || _ || i || null != r) {
          e1 = !0, E.default.selectChannel({
            guildId: a,
            channelId: s,
            messageId: r
          });
          let {
            summaryId: e
          } = (0, l.parse)(t);
          null != e && eA.default.setSelectedSummary(s, e)
        }
        if (null != o && c) {
          let e = eb.default.getCurrentSidebarChannelId(n) !== o,
            t = null != eb.default.getGuildSidebarState(a);
          if (null != s && null != o && e) {
            if (t)(0, e_.replaceWith)(eX.Routes.CHANNEL(a, o, r));
            else {
              let e = {
                type: ep.SidebarOpenDetailsType.THREAD
              };
              null != r && (e.initialMessageId = r), eS.default.openThreadAsSidebar({
                guildId: a,
                baseChannelId: s,
                channelId: o,
                details: e
              })
            }
          }
        } else null != s && !i && eS.default.closeChannelSidebar(s);
        let u = et.default.getIsOpen();
        if (s === eJ.StaticChannelRoute.ROLE_SUBSCRIPTIONS) ee.default.closeSidebar();
        else if (_ && u) {
          let t = null == h && a === eX.ME,
            n = e === eX.Routes.GUILD_DISCOVERY;
          t || n ? ee.default.closeSidebar() : ee.default.openSidebar()
        } else(i && u || !_ && !i) && ee.default.closeSidebar()
      } else {
        var C;
        if (C = e, !e7.some(e => {
            var t;
            return (null === (t = (0, i.matchPath)(C, e)) || void 0 === t ? void 0 : t.isExact) === !0
          }))(0, e_.replaceWith)(ej.default.fallbackRoute)
      }
    }(t, n)
  }
  ensureChannelMatchesGuild(e) {
    if (!H.default.isConnected()) return null;
    let {
      pathname: t
    } = e, n = e6(t);
    if (null == n) return null;
    let {
      guildId: a,
      channelId: s,
      threadId: l
    } = e5(n), i = (0, eh.isValidGuildId)(a) && a !== eX.ME && a !== eX.FAVORITES;
    if (null != s && (0, eh.isValidChannelId)(s) && !(0, eJ.isStaticChannelRoute)(s) && i) {
      let n = eU.default.getChannel(s);
      if (null == n) eN.default.loadThread(s).then(() => e8({
        channelId: s,
        guildId: a,
        pathname: t
      }));
      else if (n.guild_id !== a) return {
        path: eX.Routes.CHANNEL(a),
        state: e.state
      };
      if (null != l) {
        if (!((0, eh.isValidChannelId)(l) && !(0, eJ.isStaticChannelRoute)(s))) return null;
        let n = eU.default.getChannel(l);
        if (null == n) eN.default.loadThread(l).then(() => e8({
          channelId: l,
          guildId: a,
          pathname: t
        }));
        else if ((null == n ? void 0 : n.parent_id) !== s) return eS.default.closeChannelSidebar(s), {
          path: eX.Routes.CHANNEL(a, s),
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
        }), e9.map(e => {
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
      }), (0, a.jsx)(P.default, {})]
    })
  }
  constructor(...e) {
    super(...e), e0(this, "historyUnlisten", () => {}), e0(this, "rewriterUnlisten", () => {})
  }
}
t.default = te