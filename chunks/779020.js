"use strict";
n.r(t), n.d(t, {
  default: function() {
    return tr
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("730290"),
  i = n("803182"),
  r = n("90915"),
  o = n("446674"),
  u = n("77078"),
  d = n("437822"),
  c = n("711115"),
  f = n("851387"),
  E = n("987317"),
  h = n("70614"),
  _ = n("79112"),
  C = n("206230"),
  S = n("951212"),
  I = n("827792"),
  m = n("670984"),
  p = n("141962"),
  T = n("581516"),
  g = n("182537"),
  A = n("943183"),
  N = n("812204"),
  R = n("271081"),
  O = n("298557"),
  v = n("176162"),
  L = n("590157"),
  M = n("734592"),
  P = n("156565"),
  y = n("366410"),
  D = n("927175"),
  x = n("957328"),
  b = n("616265"),
  U = n("72860"),
  G = n("697316"),
  j = n("587233"),
  w = n("683716"),
  k = n("34226"),
  F = n("132943"),
  B = n("319769"),
  H = n("506377"),
  V = n("318915"),
  Y = n("619443"),
  W = n("263901"),
  K = n("643130"),
  z = n("802896"),
  q = n("374021"),
  Q = n("592407"),
  Z = n("468560"),
  X = n("73968"),
  J = n("236199"),
  $ = n("353983"),
  ee = n("940035"),
  et = n("831773"),
  en = n("397039"),
  ea = n("628805"),
  es = n("165926"),
  el = n("946522"),
  ei = n("880185"),
  er = n("624043"),
  eo = n("263065"),
  eu = n("204025"),
  ed = n("684641"),
  ec = n("176372"),
  ef = n("929479"),
  eE = n("630140"),
  eh = n("91990"),
  e_ = n("359477"),
  eC = n("1501"),
  eS = n("838857"),
  eI = n("393414"),
  em = n("828309"),
  ep = n("29322"),
  eT = n("208021"),
  eg = n("582713"),
  eA = n("949000"),
  eN = n("987285"),
  eR = n("686551"),
  eO = n("793237"),
  ev = n("120252"),
  eL = n("481395"),
  eM = n("401642"),
  eP = n("542789"),
  ey = n("84124"),
  eD = n("392011"),
  ex = n("777523"),
  eb = n("470885"),
  eU = n("868558"),
  eG = n("271938"),
  ej = n("982108"),
  ew = n("42203"),
  ek = n("476108"),
  eF = n("305961"),
  eB = n("778588"),
  eH = n("686470"),
  eV = n("18494"),
  eY = n("162771"),
  eW = n("167726"),
  eK = n("552067"),
  ez = n("866681"),
  eq = n("428773"),
  eQ = n("535974"),
  eZ = n("43093"),
  eX = n("773336"),
  eJ = n("50885"),
  e$ = n("780009"),
  e0 = n("49111"),
  e1 = n("750947"),
  e4 = n("724210"),
  e2 = n("56235");
n("72177"), n("392453"), n("366679"), n("848872"), n("189857"), n("144747"), n("698041"), n("552712"), n("367530"), n("429464"), n("205817"), n("767960"), n("26092"), n("790618"), n("424562"), n("900938"), n("492114"), n("161810"), n("901998"), n("684442"), n("799286"), n("470055"), n("140596");
let e9 = !1;
(0, A.initSessionHeartbeatScheduler)(), o.default.initialize(), em.default.loadServer(), eX.isPlatformEmbedded && (eJ.default.on("USER_SETTINGS_OPEN", () => {
  !eB.default.getLayers().includes(e0.Layers.USER_SETTINGS) && _.default.open(e0.UserSettingsSections.ACCOUNT)
}), eJ.default.on("LAUNCH_APPLICATION", (e, t) => {
  let n = eH.default.getActiveLibraryApplication(t);
  e$.playApplication(t, n, {
    analyticsParams: {
      location: {
        page: e0.AnalyticsPages.DIRECT,
        object: e0.AnalyticsObjects.WEB_URL
      }
    }
  })
}));
let e7 = o.default.connectStores([Y.default, ek.default, eG.default], () => ({
    isConnected: Y.default.isConnected(),
    defaultRoute: ek.default.defaultRoute,
    defaultRouteFallback: ek.default.fallbackRoute,
    token: eG.default.getToken()
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
        to: e0.Routes.DEFAULT_LOGGED_OUT
      });
      if (e) {
        let e = ts(t);
        return null == e || (e.params.guildId === e0.ME || null != eF.default.getGuild(e.params.guildId)) && null != ew.default.getChannel(e.params.channelId) ? (0, a.jsx)(r.Redirect, {
          to: t
        }) : (0, a.jsx)(r.Redirect, {
          to: s
        })
      }
      return null
    }
  }),
  e8 = (0, L.makeAuthenticated)(P.default, null, {
    passProps: !1
  }),
  e3 = (0, L.makeAuthenticated)(function() {
    return (0, a.jsx)(R.default, {})
  }),
  e6 = (0, L.makeAuthenticated)(function(e) {
    let {
      match: t
    } = e, {
      applicationId: n,
      section: s
    } = t.params, l = (0, Z.default)(e1.ApplicationDirectoryProfileSections, s);
    return (0, a.jsx)(O.default, {
      applicationId: n,
      initialSection: l
    })
  }),
  e5 = (0, L.makeAuthenticated)(function() {
    return (0, a.jsx)(v.default, {})
  }),
  te = [e0.Routes.GUILD_BOOSTING_MARKETING(":guildId"), ...Array.from(e4.StaticChannelRoutes).map(e => e0.Routes.CHANNEL(":guildId", e))];

function tt(e) {
  let {
    guildId: t,
    channelId: n = null,
    messageId: a = null,
    threadId: s = null
  } = e.params;
  return {
    guildId: null != t ? t : e0.ME,
    channelId: n,
    messageId: a,
    threadId: s
  }
}
let tn = [{
    path: [e0.Routes.APPLICATION_DIRECTORY_SEARCH],
    render: e5,
    isSessionRequired: !0
  }, {
    path: [e0.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?")],
    render: e6,
    isSessionRequired: !0
  }, {
    path: [e0.Routes.APPLICATION_DIRECTORY],
    render: e3,
    isSessionRequired: !0
  }],
  ta = [{
    path: [e0.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
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
    path: [e0.Routes.APP],
    render: () => (0, a.jsx)(e7, {}),
    isSessionRequired: !0
  }, {
    path: [e0.Routes.USERS(":id")],
    render: function(e) {
      let {
        match: t,
        location: n
      } = e, {
        friend_token: s
      } = (0, l.parse)(n.search), {
        id: i
      } = t.params;
      return (0, W.addPostConnectionCallback)(() => (0, eM.openUserProfileModal)({
        userId: i,
        guildId: e0.ME,
        friendToken: s,
        sourceAnalyticsLocations: [N.default.URI_SCHEME],
        analyticsLocation: {
          section: e0.AnalyticsSections.DIRECT_ROUTE_ACCESS
        }
      })), (0, a.jsx)(r.Redirect, {
        to: ek.default.defaultRoute
      })
    }
  }, {
    path: [e0.Routes.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
    render: function(e) {
      let {
        match: t
      } = e, {
        gameId: n,
        action: s
      } = t.params;
      return eQ.default.whenInitialized(() => {
        eH.default.whenInitialized(() => {
          switch (s) {
            case "launch": {
              let e = eH.default.getActiveLibraryApplication(n);
              if (null == e) return;
              e$.playApplication(e.id, e, {
                analyticsParams: {
                  location: {
                    page: e0.AnalyticsPages.DIRECT,
                    object: e0.AnalyticsObjects.WEB_URL
                  }
                }
              });
              break
            }
            case "test-mode":
              eW.default.whenInitialized(() => h.authorizeAndSetTestModeApplication(n));
              break;
            case "uninstall": {
              let e = eH.default.getActiveLibraryApplication(n);
              if (null == e) return;
              (0, c.uninstallBranchPrompt)(e.id, e.branchId, e0.AnalyticsLocations.URI_SCHEME)
            }
          }
        })
      }), (0, a.jsx)(r.Redirect, {
        to: e0.Routes.APPLICATION_LIBRARY
      })
    }
  }, {
    path: [e0.Routes.GUILD_CREATE],
    render: function() {
      return (0, W.addPostConnectionCallback)(() => b.default.openCreateGuildModal({
        location: "External link"
      })), (0, a.jsx)(r.Redirect, {
        to: ek.default.defaultRoute
      })
    }
  }, {
    path: [e0.Routes.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
    render: function(e) {
      let {
        match: t
      } = e, {
        section: n,
        subsection: s
      } = t.params, i = (0, l.parse)(location.search), o = i.feature;
      return (0, W.addPostConnectionCallback)(() => X.openGuildSettingsPickerModal({
        section: (0, Z.default)(e0.GuildSettingsSections, n),
        subsection: (0, Z.default)(e0.GuildSettingsSubsections, s),
        feature: o
      })), (0, a.jsx)(r.Redirect, {
        to: ek.default.defaultRoute
      })
    },
    isSessionRequired: !0
  }, {
    path: [e0.Routes.SETTINGS(":section", ":subsection?")],
    render: function(e) {
      let {
        location: t
      } = e, n = (0, ex.default)(t.pathname);
      return null != n && (0, W.addPostConnectionCallback)(() => _.default.open(n.section, n.subsection, {
        openWithoutBackstack: !1,
        impressionSource: n.source
      })), (0, a.jsx)(r.Redirect, {
        to: ek.default.defaultRoute
      })
    },
    isSessionRequired: !0
  }, {
    path: [e0.Routes.USER_GUILD_NOTIFICATION_SETTINGS(":guildId")],
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
          } = await n.el("747593").then(n.bind(n, "747593"));
          return t => (0, a.jsx)(e, {
            ...t,
            guildId: s
          })
        })
      }), (0, a.jsx)(r.Redirect, {
        to: e0.Routes.CHANNEL(s)
      })
    },
    isSessionRequired: !0
  }, {
    path: [e0.Routes.APPLICATION_LIBRARY_INVENTORY],
    render: function() {
      return (0, W.addPostConnectionCallback)(() => _.default.open(e0.UserSettingsSections.INVENTORY)), (0, a.jsx)(r.Redirect, {
        to: ek.default.defaultRoute
      })
    },
    isSessionRequired: !0
  }, {
    path: [e0.Routes.WELCOME(":guildId?", ":channelId?")],
    render: function(e) {
      let {
        match: t
      } = e, {
        guildId: n,
        channelId: s
      } = t.params;
      (0, es.setNewUser)(e2.NewUserTypes.MARKETING_UNCLAIMED);
      let l = e0.Routes.CHANNEL(n, s);
      return (0, a.jsx)(r.Redirect, {
        to: l
      })
    },
    isSessionRequired: !0
  }, {
    path: [e0.Routes.GUILD_EVENT_DETAILS(":guildId?", ":guildEventId")],
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
        to: e0.Routes.CHANNEL(n)
      })
    },
    isSessionRequired: !0
  }, {
    path: [e0.Routes.GUILD_SETTINGS(":guildId", ":section?", ":subsection?")],
    render: function(e) {
      let {
        match: t
      } = e, {
        guildId: n,
        section: s,
        subsection: l
      } = t.params;
      return (0, W.addPostConnectionCallback)(() => {
        Q.default.open(n, (0, Z.default)(e0.GuildSettingsSections, s), void 0, (0, Z.default)(e0.GuildSettingsSubsections, l))
      }), (0, a.jsx)(r.Redirect, {
        to: e0.Routes.CHANNEL(n)
      })
    },
    isSessionRequired: !0,
    isChatRoute: !0
  }, {
    path: [e0.Routes.CHANNEL_THREAD_VIEW(":guildId", ":channelId", ":threadId", ":messageId?"), e0.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?"), e0.Routes.ACTIVITY, e0.Routes.ACTIVITIES, e0.Routes.ACTIVITIES_HAPPENING_NOW, e0.Routes.ACTIVITY_DETAILS(":applicationId"), e0.Routes.APPLICATION_LIBRARY, e0.Routes.APPLICATION_STORE, e0.Routes.MESSAGE_REQUESTS, e0.Routes.COLLECTIBLES_SHOP, e0.Routes.COLLECTIBLES_SHOP_FULLSCREEN, e0.Routes.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"), e0.Routes.GUILD_DISCOVERY, e0.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?"), e0.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(":guildId", ":inviteCode?"), e0.Routes.GUILD_BOOSTING_MARKETING(":guildId"), e0.Routes.FEATURE(":feature"), e0.Routes.FAMILY_CENTER],
    render: e8,
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
  } = (0, eI.getHistory)();
  s.pathname === a && (null == ew.default.getChannel(t) ? (0, eI.replaceWith)(e0.Routes.CHANNEL(n)) : (0, eI.replaceWith)(a))
}
class ti extends s.PureComponent {
  componentDidMount() {
    y.default.initialize(), eJ.default.setZoomFactor(C.default.zoom), em.default.init(), M.default.initialize(), ed.default.initialize(), F.default.initialize(), eU.default.initialize(), B.default.initialize(), ef.default.initialize(), ee.default.initialize(), S.default.init(), V.default.init(), H.default.init(), el.default.initialize(), g.default.initialize(), w.default.initialize(), eE.default.initialize(), T.default.initialize(), eb.default.initialize(), eu.default.initialize(), p.default.initialize(), K.default.init(), J.default.init(), eq.default.init(), eZ.default.init(), m.default.initialize(), eL.default.init(), ez.default.init(), eK.default.init(), ey.default.init(), eN.default.initialize(), eR.default.initialize(), eP.default.initialize(), eD.default.init(), j.default.initialize(), I.default.initialize(), ep.default.initialize(), eA.default.initialize(), er.default.initialize(), ei.default.initialize(), eo.default.initialize(), D.default.initialize(), eh.default.initialize(), $.default.init({
      hasModalOpen: u.hasAnyModalOpen,
      openModal: () => (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("927475").then(n.bind(n, "927475"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      })
    }), G.default.init(), et.default.initialize(), e_.default.initialize(), ec.default.initialize(), U.default.initialize(), this.rewriterUnlisten = eC.default.addRouteRewriter(this.ensureChannelMatchesGuild), this.historyUnlisten = eC.default.addRouteChangeListener(this.handleHistoryChange)
  }
  componentWillUnmount() {
    y.default.terminate(), eU.default.terminate(), ef.default.terminate(), ed.default.terminate(), M.default.terminate(), T.default.terminate(), eb.default.terminate(), p.default.terminate(), eE.default.terminate(), eu.default.terminate(), eP.default.terminate(), m.default.terminate(), j.default.terminate(), et.default.terminate(), I.default.terminate(), e_.default.terminate(), ep.default.terminate(), eA.default.terminate(), er.default.terminate(), ei.default.terminate(), eo.default.terminate(), D.default.terminate(), ec.default.terminate(), U.default.terminate(), k.default.terminate(), this.historyUnlisten(), this.rewriterUnlisten()
  }
  handleHistoryChange(e) {
    let {
      pathname: t,
      search: n
    } = e;
    ! function(e) {
      if (Y.default.isConnected() || Y.default.isTryingToConnect()) return;
      let t = eG.default.getToken();
      if (null == t) return;
      let n = function(e) {
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
      }(e);
      null != n && d.default.startSession(t)
    }(t), ! function(e, t) {
      let n = ts(e);
      if (null == n) return;
      let {
        guildId: a,
        channelId: s,
        messageId: r,
        threadId: o
      } = tt(n), u = (0, eS.isValidGuildId)(a), d = (0, eS.isValidChannelId)(s), c = (0, eS.isValidChannelId)(o), h = eY.default.getGuildId(), _ = h !== a;
      if (u && _ && f.default.selectGuild(a), u && d) {
        let n = eV.default.getChannelId(h),
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
          null != e && eO.default.setSelectedSummary(s, e)
        }
        if (null != o && c) {
          let e = ej.default.getCurrentSidebarChannelId(n),
            t = e !== o,
            l = null != ej.default.getGuildSidebarState(a);
          if (null != s && null != o && t) {
            if (l)(0, eI.replaceWith)(e0.Routes.CHANNEL(a, o, r));
            else {
              let e = {
                type: eg.SidebarOpenDetailsType.THREAD
              };
              null != r && (e.initialMessageId = r), eT.default.openThreadAsSidebar({
                guildId: a,
                baseChannelId: s,
                channelId: o,
                details: e
              })
            }
          }
        } else null != s && !i && eT.default.closeChannelSidebar(s);
        let u = ea.default.getIsOpen();
        if (s === e4.StaticChannelRoute.ROLE_SUBSCRIPTIONS) en.default.closeSidebar();
        else if (_ && u) {
          let t = null == h && a === e0.ME,
            n = e === e0.Routes.GUILD_DISCOVERY;
          t || n ? en.default.closeSidebar() : en.default.openSidebar()
        } else(i && u || !_ && !i) && en.default.closeSidebar()
      } else {
        var C;
        if (C = e, !te.some(e => {
            var t;
            return (null === (t = (0, i.matchPath)(C, e)) || void 0 === t ? void 0 : t.isExact) === !0
          }))(0, eI.replaceWith)(ek.default.fallbackRoute)
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
    } = tt(n), i = (0, eS.isValidGuildId)(a) && a !== e0.ME && a !== e0.FAVORITES, r = null != s && (0, eS.isValidChannelId)(s) && !(0, e4.isStaticChannelRoute)(s);
    if (r && i) {
      let n = ew.default.getChannel(s);
      if (null == n) ev.default.loadThread(s).then(() => tl({
        channelId: s,
        guildId: a,
        pathname: t
      }));
      else if (n.guild_id !== a) return {
        path: e0.Routes.CHANNEL(a),
        state: e.state
      };
      if (null != l) {
        let n = (0, eS.isValidChannelId)(l) && !(0, e4.isStaticChannelRoute)(s);
        if (!n) return null;
        let i = ew.default.getChannel(l);
        if (null == i) ev.default.loadThread(l).then(() => tl({
          channelId: l,
          guildId: a,
          pathname: t
        }));
        else if ((null == i ? void 0 : i.parent_id) !== s) return eT.default.closeChannelSidebar(s), {
          path: e0.Routes.CHANNEL(a, s),
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
      }), (0, a.jsx)(x.default, {})]
    })
  }
  constructor(...e) {
    super(...e), this.historyUnlisten = () => {}, this.rewriterUnlisten = () => {}
  }
}
var tr = ti