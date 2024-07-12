n.r(t), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(593473),
  r = n(266067),
  l = n(442837),
  o = n(481060),
  c = n(893776),
  d = n(943094),
  u = n(749210),
  _ = n(287734),
  h = n(401430),
  E = n(230711),
  I = n(607070),
  m = n(627845),
  g = n(185666),
  p = n(503737),
  T = n(513202),
  S = n(318891),
  C = n(687751),
  f = n(912471),
  N = n(100527),
  A = n(838134),
  Z = n(77987),
  L = n(679891),
  v = n(491575),
  O = n(314533),
  R = n(935347),
  x = n(560067),
  b = n(823169),
  P = n(620360),
  M = n(96051),
  D = n(750995),
  y = n(696287),
  j = n(408026),
  U = n(763916),
  G = n(306721),
  k = n(531551),
  w = n(38618),
  B = n(972830),
  H = n(981283),
  V = n(584233),
  F = n(15274),
  Y = n(434404),
  W = n(543842),
  z = n(879064),
  K = n(315964),
  q = n(495784),
  Q = n(975533),
  X = n(377400),
  J = n(285865),
  $ = n(659971),
  ee = n(929809),
  et = n(122333),
  en = n(960275),
  ei = n(818765),
  es = n(678492),
  ea = n(269089),
  er = n(380570),
  el = n(837689),
  eo = n(367207),
  ec = n(489977),
  ed = n(329557),
  eu = n(304445),
  e_ = n(893607),
  eh = n(703656),
  eE = n(298969),
  eI = n(719256),
  em = n(6025),
  eg = n(897473),
  ep = n(377368),
  eT = n(262702),
  eS = n(639033),
  eC = n(479313),
  ef = n(911560),
  eN = n(703016),
  eA = n(171368),
  eZ = n(429974),
  eL = n(332754),
  ev = n(507468),
  eO = n(357269),
  eR = n(282506),
  ex = n(444961),
  eb = n(314897),
  eP = n(433355),
  eM = n(592125),
  eD = n(896797),
  ey = n(430824),
  ej = n(819640),
  eU = n(283595),
  eG = n(944486),
  ek = n(914010),
  ew = n(695103),
  eB = n(241890),
  eH = n(897607),
  eV = n(417363),
  eF = n(900974),
  eY = n(358085),
  eW = n(998502),
  ez = n(346329),
  eK = n(981631),
  eq = n(176505),
  eQ = n(701476);

function eX(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
n(117240), n(801077), n(967368), n(272053), n(974180), n(574254), n(551428), n(55563), n(455173), n(882029), n(959457), n(653255), n(663389), n(25990), n(778825), n(999382), n(388610), n(533947), n(277053), n(371398), n(141233), n(471073), n(628566);
let eJ = !1;
(0, f.DL)(), l.ZP.initialize(), eE.Z.loadServer(), eY.isPlatformEmbedded && (eW.ZP.on('USER_SETTINGS_OPEN', () => {
  !ej.Z.getLayers().includes(eK.S9g.USER_SETTINGS) && E.Z.open(eK.oAB.ACCOUNT);
}), eW.ZP.on('LAUNCH_APPLICATION', (e, t) => {
  let n = eU.Z.getActiveLibraryApplication(t);
  ez.playApplication(t, n, {
analyticsParams: {
  location: {
    page: eK.ZY5.DIRECT,
    object: eK.qAy.WEB_URL
  }
}
  });
}));
let e$ = l.ZP.connectStores([
w.Z,
eD.Z,
eb.default
  ], () => ({
isConnected: w.Z.isConnected(),
defaultRoute: eD.Z.defaultRoute,
defaultRouteFallback: eD.Z.fallbackRoute,
token: eb.default.getToken()
  }))(class extends s.Component {
componentDidMount() {
  let {
    match: e
  } = this.props;
  null != e && null != e.params.inviteCode && (0, V.x)({
    code: e.params.inviteCode
  });
}
render() {
  let {
    isConnected: e,
    defaultRoute: t,
    token: n,
    defaultRouteFallback: s
  } = this.props;
  if (null == n)
    return (0, i.jsx)(r.l_, {
      to: eK.Z5c.DEFAULT_LOGGED_OUT
    });
  if (e) {
    let e = e2(t);
    return null == e || (e.params.guildId === eK.ME || null != ey.Z.getGuild(e.params.guildId)) && null != eM.Z.getChannel(e.params.channelId) ? (0, i.jsx)(r.l_, {
      to: t
    }) : (0, i.jsx)(r.l_, {
      to: s
    });
  }
  return null;
}
  }),
  e0 = (0, Z.e)(v.Z, null, {
passProps: !1
  }),
  e1 = (0, Z.e)(A.default, null, {
passProps: !1
  }),
  e4 = [
eK.Z5c.GUILD_BOOSTING_MARKETING(':guildId'),
...Array.from(eq.Vg).map(e => eK.Z5c.CHANNEL(':guildId', e))
  ];

function e7(e) {
  let {
guildId: t,
channelId: n = null,
messageId: i = null,
threadId: s = null
  } = e.params;
  return {
guildId: null != t ? t : eK.ME,
channelId: n,
messageId: i,
threadId: s
  };
}
let e5 = [{
path: [eK.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(':inviteCode')],
render(e) {
  let {
    match: t
  } = e;
  return (0, i.jsx)(e$, {
    match: t
  });
},
isSessionRequired: !0
  },
  {
path: [eK.Z5c.APP],
render: () => (0, i.jsx)(e$, {}),
isSessionRequired: !0
  },
  {
path: [eK.Z5c.USERS(':id')],
render: function(e) {
  let {
    match: t,
    location: n
  } = e, {
    friend_token: s
  } = (0, a.parse)(n.search), {
    id: l
  } = t.params;
  return (0, B.h)(() => (0, eA.openUserProfileModal)({
    userId: l,
    guildId: eK.ME,
    friendToken: s,
    sourceAnalyticsLocations: [N.Z.URI_SCHEME],
    analyticsLocation: {
      section: eK.jXE.DIRECT_ROUTE_ACCESS
    }
  })), (0, i.jsx)(r.l_, {
    to: eD.Z.defaultRoute
  });
}
  },
  {
path: [eK.Z5c.APPLICATION_LIBRARY_ACTION(':gameId', ':action')],
render: function(e) {
  let {
    match: t
  } = e, {
    gameId: n,
    action: s
  } = t.params;
  return eV.Z.whenInitialized(() => {
    eU.Z.whenInitialized(() => {
      switch (s) {
        case 'launch': {
          let e = eU.Z.getActiveLibraryApplication(n);
          if (null == e)
            return;
          ez.playApplication(e.id, e, {
            analyticsParams: {
              location: {
                page: eK.ZY5.DIRECT,
                object: eK.qAy.WEB_URL
              }
            }
          });
          break;
        }
        case 'test-mode':
          ew.Z.whenInitialized(() => h.Wt(n));
          break;
        case 'uninstall': {
          let e = eU.Z.getActiveLibraryApplication(n);
          if (null == e)
            return;
          (0, d.W)(e.id, e.branchId, eK.Sbl.URI_SCHEME);
        }
      }
    });
  }), (0, i.jsx)(r.l_, {
    to: eK.Z5c.APPLICATION_LIBRARY
  });
}
  },
  {
path: [eK.Z5c.GUILD_CREATE],
render: function() {
  return (0, B.h)(() => x.Z.openCreateGuildModal({
    location: 'External link'
  })), (0, i.jsx)(r.l_, {
    to: eD.Z.defaultRoute
  });
}
  },
  {
path: [eK.Z5c.PICK_GUILD_SETTINGS(':section?', ':subsection?')],
render: function(e) {
  let {
    match: t
  } = e, {
    section: n,
    subsection: s
  } = t.params, l = (0, a.parse)(location.search).feature;
  return (0, B.h)(() => z.v({
    section: (0, W.Z)(eK.pNK, n),
    subsection: (0, W.Z)(eK.KsC, s),
    feature: l
  })), (0, i.jsx)(r.l_, {
    to: eD.Z.defaultRoute
  });
},
isSessionRequired: !0
  },
  {
path: [eK.Z5c.SETTINGS(':section', ':subsection?')],
render: function(e) {
  let {
    location: t
  } = e, n = (0, eO.default)(t.pathname);
  return null != n && (0, B.h)(() => E.Z.open(n.section, n.subsection, {
    openWithoutBackstack: !1,
    impressionSource: n.source
  })), (0, i.jsx)(r.l_, {
    to: eD.Z.defaultRoute
  });
},
isSessionRequired: !0
  },
  {
path: [eK.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(':guildId')],
render: function(e) {
  let {
    match: t
  } = e, {
    guildId: s
  } = t.params;
  return (0, B.h)(() => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([
        n.e('5863'),
        n.e('12876')
      ]).then(n.bind(n, 751212));
      return t => (0, i.jsx)(e, {
        ...t,
        guildId: s
      });
    });
  }), (0, i.jsx)(r.l_, {
    to: eK.Z5c.CHANNEL(s)
  });
},
isSessionRequired: !0
  },
  {
path: [eK.Z5c.APPLICATION_LIBRARY_INVENTORY],
render: function() {
  return (0, B.h)(() => E.Z.open(eK.oAB.INVENTORY)), (0, i.jsx)(r.l_, {
    to: eD.Z.defaultRoute
  });
},
isSessionRequired: !0
  },
  {
path: [eK.Z5c.WELCOME(':guildId?', ':channelId?')],
render: function(e) {
  let {
    match: t
  } = e, {
    guildId: n,
    channelId: s
  } = t.params;
  (0, ee.c)(eQ.M5.MARKETING_UNCLAIMED);
  let a = eK.Z5c.CHANNEL(n, s);
  return (0, i.jsx)(r.l_, {
    to: a
  });
},
isSessionRequired: !0
  },
  {
path: [eK.Z5c.GUILD_EVENT_DETAILS(':guildId?', ':guildEventId')],
render: function(e) {
  let {
    match: t
  } = e, {
    guildId: n,
    guildEventId: s
  } = t.params;
  return (0, B.h)(() => {
    (0, F.bO)({
      eventId: s
    });
  }), (0, i.jsx)(r.l_, {
    to: eK.Z5c.CHANNEL(n)
  });
},
isSessionRequired: !0
  },
  {
path: [eK.Z5c.GUILD_SETTINGS(':guildId', ':section?', ':subsection?')],
render: function(e) {
  let {
    match: t
  } = e, {
    guildId: n,
    section: s,
    subsection: a
  } = t.params;
  return (0, B.h)(() => {
    Y.Z.open(n, (0, W.Z)(eK.pNK, s), void 0, (0, W.Z)(eK.KsC, a));
  }), (0, i.jsx)(r.l_, {
    to: eK.Z5c.CHANNEL(n)
  });
},
isSessionRequired: !0,
isChatRoute: !0
  },
  {
path: [
  eK.Z5c.CHANNEL_THREAD_VIEW(':guildId', ':channelId', ':threadId', ':messageId?'),
  eK.Z5c.CHANNEL(':guildId', ':channelId?', ':messageId?'),
  eK.Z5c.ACTIVITY,
  eK.Z5c.ACTIVITIES,
  eK.Z5c.ACTIVITIES_HAPPENING_NOW,
  eK.Z5c.ACTIVITY_DETAILS(':applicationId'),
  eK.Z5c.APPLICATION_LIBRARY,
  eK.Z5c.APPLICATION_STORE,
  eK.Z5c.MESSAGE_REQUESTS,
  eK.Z5c.COLLECTIBLES_SHOP,
  eK.Z5c.COLLECTIBLES_SHOP_FULLSCREEN,
  eK.Z5c.COLLECTIBLES_SHOP_PRODUCT_DETAIL(':skuId'),
  eK.Z5c.GUILD_DISCOVERY,
  eK.Z5c.QUEST_HOME,
  eK.Z5c.GLOBAL_DISCOVERY,
  eK.Z5c.GUILD_MEMBER_VERIFICATION(':guildId', ':inviteCode?'),
  eK.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(':guildId', ':inviteCode?'),
  eK.Z5c.GUILD_BOOSTING_MARKETING(':guildId'),
  eK.Z5c.FEATURE(':feature'),
  eK.Z5c.FAMILY_CENTER
],
render: e0,
isSessionRequired: !0,
isChatRoute: !0
  },
  {
path: [eK.Z5c.APPLICATION_DIRECTORY],
render: e1,
isSessionRequired: !0
  }
];

function e2(e) {
  for (let {
  path: t,
  isChatRoute: n
}
of e5) {
if (!n)
  continue;
let i = (0, r.LX)(e, {
  path: t
});
if (null != i)
  return i;
  }
  return null;
}

function e3(e) {
  let {
channelId: t,
guildId: n,
pathname: i
  } = e;
  if (!w.Z.isConnected())
return;
  let {
location: s
  } = (0, eh.s1)();
  if (s.pathname === i)
null == eM.Z.getChannel(t) ? (0, eh.dL)(eK.Z5c.CHANNEL(n)) : (0, eh.dL)(i);
}
class e6 extends s.PureComponent {
  componentDidMount() {
eW.ZP.setZoomFactor(I.Z.zoom), eE.Z.init(), L.Z.initialize(), er.Z.initialize(), j.Z.initialize(), ex.Z.initialize(), U.Z.initialize(), eo.Z.initialize(), Q.Z.initialize(), m.Z.init(), k.Z.init(), G.Z.init(), et.Z.initialize(), C.Z.initialize(), D.Z.initialize(), ec.Z.initialize(), S.ZP.initialize(), eR.Z.initialize(), ea.Z.initialize(), T.Z.initialize(), H.Z.init(), K.Z.init(), eH.Z.init(), eF.Z.init(), p.Z.initialize(), eN.Z.init(), eB.Z.init(), eL.Z.init(), eT.Z.initialize(), eS.Z.initialize(), eZ.Z.initialize(), ev.Z.init(), M.Z.initialize(), g.Z.initialize(), eI.Z.initialize(), ep.Z.initialize(), ei.Z.initialize(), en.Z.initialize(), es.Z.initialize(), O.Z.initialize(), q.Z.init({
  hasModalOpen: o.hasAnyModalOpen,
  openModal: () => (0, o.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 650233));
    return t => (0, i.jsx)(e, {
      ...t
    });
  })
}), P.Z.init(), X.Z.initialize(), ed.Z.initialize(), el.Z.initialize(), b.Z.initialize(), this.rewriterUnlisten = eu.Z.addRouteRewriter(this.ensureChannelMatchesGuild), this.historyUnlisten = eu.Z.addRouteChangeListener(this.handleHistoryChange);
  }
  componentWillUnmount() {
ex.Z.terminate(), eo.Z.terminate(), er.Z.terminate(), L.Z.terminate(), S.ZP.terminate(), eR.Z.terminate(), T.Z.terminate(), ec.Z.terminate(), ea.Z.terminate(), eZ.Z.terminate(), p.Z.terminate(), M.Z.terminate(), X.Z.terminate(), g.Z.terminate(), ed.Z.terminate(), eI.Z.terminate(), ep.Z.terminate(), ei.Z.terminate(), en.Z.terminate(), es.Z.terminate(), O.Z.terminate(), el.Z.terminate(), b.Z.terminate(), y.Z.terminate(), this.historyUnlisten(), this.rewriterUnlisten();
  }
  handleHistoryChange(e) {
let {
  pathname: t,
  search: n
} = e;
! function(e) {
  if (w.Z.isConnected() || w.Z.isTryingToConnect())
    return;
  let t = eb.default.getToken();
  if (null != t)
    null != function(e) {
      for (let {
          path: t,
          isSessionRequired: n
        }
        of e5) {
        if (!n)
          continue;
        let i = (0, r.LX)(e, {
          path: t
        });
        if (null != i)
          return i;
      }
      return null;
    }(e) && c.Z.startSession(t);
}(t), ! function(e, t) {
  let n = e2(e);
  if (null == n)
    return;
  let {
    guildId: i,
    channelId: s,
    messageId: l,
    threadId: o
  } = e7(n), c = (0, e_.S)(i), d = (0, e_.c)(s), h = (0, e_.c)(o), E = ek.Z.getGuildId(), I = E !== i;
  if (c && I && u.Z.selectGuild(i), c && d) {
    let n = eG.Z.getChannelId(E),
      r = n !== s;
    if (!eJ || I || r || null != l) {
      eJ = !0, _.default.selectChannel({
        guildId: i,
        channelId: s,
        messageId: l
      });
      let {
        summaryId: e
      } = (0, a.parse)(t);
      null != e && eC.ZP.setSelectedSummary(s, e);
    }
    if (null != o && h) {
      let e = eP.ZP.getCurrentSidebarChannelId(n) !== o,
        t = null != eP.ZP.getGuildSidebarState(i);
      if (null != s && null != o && e) {
        if (t)
          (0, eh.dL)(eK.Z5c.CHANNEL(i, o, l));
        else {
          let e = {
            type: eg.Ff.THREAD
          };
          null != l && (e.initialMessageId = l), em.Z.openThreadAsSidebar({
            guildId: i,
            baseChannelId: s,
            channelId: o,
            details: e
          });
        }
      }
    } else
      null != s && !r && em.Z.closeChannelSidebar(s);
    let c = $.Z.getIsOpen();
    if (s === eq.oC.ROLE_SUBSCRIPTIONS)
      J.Z.closeSidebar();
    else if (I && c) {
      let t = null == E && i === eK.ME,
        n = e === eK.Z5c.GUILD_DISCOVERY;
      t || n ? J.Z.closeSidebar() : J.Z.openSidebar();
    } else
      (r && c || !I && !r) && J.Z.closeSidebar();
  } else {
    var m;
    if (m = e, !e4.some(e => {
        var t;
        return (null === (t = (0, r.LX)(m, e)) || void 0 === t ? void 0 : t.isExact) === !0;
      }))
      (0, eh.dL)(eD.Z.fallbackRoute);
  }
}(t, n);
  }
  ensureChannelMatchesGuild(e) {
if (!w.Z.isConnected())
  return null;
let {
  pathname: t
} = e, n = e2(t);
if (null == n)
  return null;
let {
  guildId: i,
  channelId: s,
  threadId: a
} = e7(n), r = (0, e_.S)(i) && i !== eK.ME && i !== eK.I_8;
if (null != s && (0, e_.c)(s) && !(0, eq.AB)(s) && r) {
  let n = eM.Z.getChannel(s);
  if (null == n)
    ef.Z.loadThread(s).then(() => e3({
      channelId: s,
      guildId: i,
      pathname: t
    }));
  else if (n.guild_id !== i)
    return {
      path: eK.Z5c.CHANNEL(i),
      state: e.state
    };
  if (null != a) {
    if (!((0, e_.c)(a) && !(0, eq.AB)(s)))
      return null;
    let n = eM.Z.getChannel(a);
    if (null == n)
      ef.Z.loadThread(a).then(() => e3({
        channelId: a,
        guildId: i,
        pathname: t
      }));
    else if ((null == n ? void 0 : n.parent_id) !== s)
      return em.Z.closeChannelSidebar(s), {
        path: eK.Z5c.CHANNEL(i, s),
        state: e.state
      };
  }
}
return null;
  }
  render() {
return (0, i.jsxs)(s.Fragment, {
  children: [
    (0, i.jsxs)(r.rs, {
      children: [
        (0, i.jsx)(r.l_, {
          exact: !0,
          from: '/channels',
          to: '/'
        }),
        e5.map(e => {
          let {
            path: t,
            render: n
          } = e;
          return (0, i.jsx)(r.AW, {
            path: t,
            render: n
          }, t[0]);
        }),
        (0, i.jsx)(r.l_, {
          to: '/'
        })
      ]
    }),
    (0, i.jsx)(R.Z, {})
  ]
});
  }
  constructor(...e) {
super(...e), eX(this, 'historyUnlisten', () => {}), eX(this, 'rewriterUnlisten', () => {});
  }
}
t.default = e6;