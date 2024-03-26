"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ti
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
  eh = n("359477"),
  e_ = n("1501"),
  eC = n("838857"),
  eS = n("393414"),
  eI = n("828309"),
  em = n("29322"),
  ep = n("208021"),
  eT = n("582713"),
  eg = n("949000"),
  eA = n("987285"),
  eN = n("686551"),
  eR = n("793237"),
  eO = n("120252"),
  ev = n("481395"),
  eL = n("401642"),
  eM = n("542789"),
  eP = n("84124"),
  ey = n("392011"),
  eD = n("777523"),
  ex = n("470885"),
  eb = n("868558"),
  eU = n("271938"),
  eG = n("982108"),
  ej = n("42203"),
  ew = n("476108"),
  ek = n("305961"),
  eF = n("778588"),
  eB = n("686470"),
  eH = n("18494"),
  eV = n("162771"),
  eY = n("167726"),
  eW = n("552067"),
  eK = n("866681"),
  ez = n("428773"),
  eq = n("535974"),
  eQ = n("43093"),
  eZ = n("773336"),
  eX = n("50885"),
  eJ = n("780009"),
  e$ = n("49111"),
  e0 = n("750947"),
  e1 = n("724210"),
  e4 = n("56235");
n("72177"), n("392453"), n("366679"), n("848872"), n("189857"), n("144747"), n("698041"), n("552712"), n("367530"), n("429464"), n("205817"), n("767960"), n("26092"), n("790618"), n("424562"), n("900938"), n("492114"), n("161810"), n("901998"), n("684442"), n("799286"), n("470055"), n("140596");
let e2 = !1;
(0, A.initSessionHeartbeatScheduler)(), o.default.initialize(), eI.default.loadServer(), eZ.isPlatformEmbedded && (eX.default.on("USER_SETTINGS_OPEN", () => {
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
let e9 = o.default.connectStores([Y.default, ew.default, eU.default], () => ({
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
        let e = ta(t);
        return null == e || (e.params.guildId === e$.ME || null != ek.default.getGuild(e.params.guildId)) && null != ej.default.getChannel(e.params.channelId) ? (0, a.jsx)(r.Redirect, {
          to: t
        }) : (0, a.jsx)(r.Redirect, {
          to: s
        })
      }
      return null
    }
  }),
  e7 = (0, L.makeAuthenticated)(P.default, null, {
    passProps: !1
  }),
  e8 = (0, L.makeAuthenticated)(function() {
    return (0, a.jsx)(R.default, {})
  }),
  e3 = (0, L.makeAuthenticated)(function(e) {
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
    return (0, a.jsx)(v.default, {})
  }),
  e5 = [e$.Routes.GUILD_BOOSTING_MARKETING(":guildId"), ...Array.from(e1.StaticChannelRoutes).map(e => e$.Routes.CHANNEL(":guildId", e))];

function te(e) {
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
let tt = [{
    path: [e$.Routes.APPLICATION_DIRECTORY_SEARCH],
    render: e6,
    isSessionRequired: !0
  }, {
    path: [e$.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section?")],
    render: e3,
    isSessionRequired: !0
  }, {
    path: [e$.Routes.APPLICATION_DIRECTORY],
    render: e8,
    isSessionRequired: !0
  }],
  tn = [{
    path: [e$.Routes.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
    render(e) {
      let {
        match: t
      } = e;
      return (0, a.jsx)(e9, {
        match: t
      })
    },
    isSessionRequired: !0
  }, {
    path: [e$.Routes.APP],
    render: () => (0, a.jsx)(e9, {}),
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
      return (0, W.addPostConnectionCallback)(() => b.default.openCreateGuildModal({
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
      } = t.params, i = (0, l.parse)(location.search), o = i.feature;
      return (0, W.addPostConnectionCallback)(() => X.openGuildSettingsPickerModal({
        section: (0, Z.default)(e$.GuildSettingsSections, n),
        subsection: (0, Z.default)(e$.GuildSettingsSubsections, s),
        feature: o
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
          } = await n.el("747593").then(n.bind(n, "747593"));
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
    render: e7,
    isSessionRequired: !0,
    isChatRoute: !0
  }, ...tt];

function ta(e) {
  for (let {
      path: t,
      isChatRoute: n
    }
    of tn) {
    if (!n) continue;
    let a = (0, i.matchPath)(e, {
      path: t
    });
    if (null != a) return a
  }
  return null
}

function ts(e) {
  let {
    channelId: t,
    guildId: n,
    pathname: a
  } = e;
  if (!Y.default.isConnected()) return;
  let {
    location: s
  } = (0, eS.getHistory)();
  s.pathname === a && (null == ej.default.getChannel(t) ? (0, eS.replaceWith)(e$.Routes.CHANNEL(n)) : (0, eS.replaceWith)(a))
}
class tl extends s.PureComponent {
  componentDidMount() {
    y.default.initialize(), eX.default.setZoomFactor(C.default.zoom), eI.default.init(), M.default.initialize(), ed.default.initialize(), F.default.initialize(), eb.default.initialize(), B.default.initialize(), ef.default.initialize(), ee.default.initialize(), S.default.init(), V.default.init(), H.default.init(), el.default.initialize(), g.default.initialize(), w.default.initialize(), eE.default.initialize(), T.default.initialize(), ex.default.initialize(), eu.default.initialize(), p.default.initialize(), K.default.init(), J.default.init(), ez.default.init(), eQ.default.init(), m.default.initialize(), ev.default.init(), eK.default.init(), eW.default.init(), eP.default.init(), eA.default.initialize(), eN.default.initialize(), eM.default.initialize(), ey.default.init(), j.default.initialize(), I.default.initialize(), em.default.initialize(), eg.default.initialize(), er.default.initialize(), ei.default.initialize(), eo.default.initialize(), D.default.initialize(), $.default.init({
      hasModalOpen: u.hasAnyModalOpen,
      openModal: () => (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("927475").then(n.bind(n, "927475"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      })
    }), G.default.init(), et.default.initialize(), eh.default.initialize(), ec.default.initialize(), U.default.initialize(), this.rewriterUnlisten = e_.default.addRouteRewriter(this.ensureChannelMatchesGuild), this.historyUnlisten = e_.default.addRouteChangeListener(this.handleHistoryChange)
  }
  componentWillUnmount() {
    y.default.terminate(), eb.default.terminate(), ef.default.terminate(), ed.default.terminate(), M.default.terminate(), T.default.terminate(), ex.default.terminate(), p.default.terminate(), eE.default.terminate(), eu.default.terminate(), eM.default.terminate(), m.default.terminate(), j.default.terminate(), et.default.terminate(), I.default.terminate(), eh.default.terminate(), em.default.terminate(), eg.default.terminate(), er.default.terminate(), ei.default.terminate(), eo.default.terminate(), D.default.terminate(), ec.default.terminate(), U.default.terminate(), k.default.terminate(), this.historyUnlisten(), this.rewriterUnlisten()
  }
  handleHistoryChange(e) {
    let {
      pathname: t,
      search: n
    } = e;
    ! function(e) {
      if (Y.default.isConnected() || Y.default.isTryingToConnect()) return;
      let t = eU.default.getToken();
      if (null == t) return;
      let n = function(e) {
        for (let {
            path: t,
            isSessionRequired: n
          }
          of tn) {
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
      let n = ta(e);
      if (null == n) return;
      let {
        guildId: a,
        channelId: s,
        messageId: r,
        threadId: o
      } = te(n), u = (0, eC.isValidGuildId)(a), d = (0, eC.isValidChannelId)(s), c = (0, eC.isValidChannelId)(o), h = eV.default.getGuildId(), _ = h !== a;
      if (u && _ && f.default.selectGuild(a), u && d) {
        let n = eH.default.getChannelId(h),
          i = n !== s;
        if (!e2 || _ || i || null != r) {
          e2 = !0, E.default.selectChannel({
            guildId: a,
            channelId: s,
            messageId: r
          });
          let {
            summaryId: e
          } = (0, l.parse)(t);
          null != e && eR.default.setSelectedSummary(s, e)
        }
        if (null != o && c) {
          let e = eG.default.getCurrentSidebarChannelId(n),
            t = e !== o,
            l = null != eG.default.getGuildSidebarState(a);
          if (null != s && null != o && t) {
            if (l)(0, eS.replaceWith)(e$.Routes.CHANNEL(a, o, r));
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
        if (C = e, !e5.some(e => {
            var t;
            return (null === (t = (0, i.matchPath)(C, e)) || void 0 === t ? void 0 : t.isExact) === !0
          }))(0, eS.replaceWith)(ew.default.fallbackRoute)
      }
    }(t, n)
  }
  ensureChannelMatchesGuild(e) {
    if (!Y.default.isConnected()) return null;
    let {
      pathname: t
    } = e, n = ta(t);
    if (null == n) return null;
    let {
      guildId: a,
      channelId: s,
      threadId: l
    } = te(n), i = (0, eC.isValidGuildId)(a) && a !== e$.ME && a !== e$.FAVORITES, r = null != s && (0, eC.isValidChannelId)(s) && !(0, e1.isStaticChannelRoute)(s);
    if (r && i) {
      let n = ej.default.getChannel(s);
      if (null == n) eO.default.loadThread(s).then(() => ts({
        channelId: s,
        guildId: a,
        pathname: t
      }));
      else if (n.guild_id !== a) return {
        path: e$.Routes.CHANNEL(a),
        state: e.state
      };
      if (null != l) {
        let n = (0, eC.isValidChannelId)(l) && !(0, e1.isStaticChannelRoute)(s);
        if (!n) return null;
        let i = ej.default.getChannel(l);
        if (null == i) eO.default.loadThread(l).then(() => ts({
          channelId: l,
          guildId: a,
          pathname: t
        }));
        else if ((null == i ? void 0 : i.parent_id) !== s) return ep.default.closeChannelSidebar(s), {
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
        }), tn.map(e => {
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
var ti = tl