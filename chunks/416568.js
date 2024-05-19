"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("392711"),
  o = n.n(r),
  u = n("699581"),
  d = n("613828"),
  c = n("924826"),
  f = n("374470"),
  h = n("442837"),
  m = n("902704"),
  C = n("846519"),
  p = n("481060"),
  g = n("925549"),
  E = n("209613"),
  _ = n("100527"),
  S = n("906732"),
  I = n("358221"),
  N = n("963202"),
  T = n("878241"),
  A = n("706590"),
  L = n("940777"),
  v = n("41776"),
  x = n("905423"),
  R = n("802718"),
  M = n("796974"),
  y = n("271383"),
  O = n("430824"),
  D = n("771845"),
  b = n("358085"),
  j = n("709054"),
  P = n("792125"),
  G = n("727258"),
  U = n("605951"),
  w = n("474109"),
  B = n("741616"),
  F = n("187835"),
  H = n("162050"),
  V = n("118122"),
  k = n("193154"),
  Y = n("602147"),
  W = n("773182"),
  K = n("222059"),
  z = n("751277"),
  Z = n("65721"),
  X = n("843343"),
  Q = n("654142"),
  J = n("695301"),
  q = n("836697"),
  $ = n("921230"),
  ee = n("981631"),
  et = n("689938"),
  en = n("31836");

function el(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let ea = 56,
  es = (0, b.isWindows)() ? 4 : (0, b.isMac)() ? 0 : 12,
  ei = ea - 16,
  er = es + 10;
class eo {
  setGuildsTree(e) {
    this.guildsTree = e
  }
  constructor(e, t, n, l, s) {
    el(this, "guildsTree", void 0), el(this, "setScrolling", void 0), el(this, "onScroll", void 0), el(this, "onScrollStateChanged", void 0), el(this, "scrollToDiscovery", void 0), el(this, "scrollerRef", void 0), el(this, "guildDiscoveryRef", void 0), el(this, "nodeRefs", void 0), el(this, "timeout", void 0), el(this, "isScrolling", void 0), el(this, "isNearBottom", void 0), el(this, "scrollToGuild", void 0), el(this, "handleJumpToGuild", void 0), el(this, "scrollTo", void 0), el(this, "isItemVisible", void 0), el(this, "handleScroll", void 0), el(this, "_handleScrollDebounced", void 0), el(this, "_handleScrollThrottled", void 0), el(this, "setNodeRef", void 0), this.guildsTree = e, this.setScrolling = t, this.onScroll = n, this.onScrollStateChanged = l, this.scrollToDiscovery = s, this.scrollerRef = a.createRef(), this.guildDiscoveryRef = a.createRef(), this.nodeRefs = {}, this.timeout = new C.Timeout, this.isScrolling = !1, this.isNearBottom = !1, this.scrollToGuild = (e, t) => {
      let n = this.scrollerRef.current;
      if (null == n) return;
      if (null == e && window.location.pathname.startsWith(ee.Routes.GUILD_DISCOVERY) || e === ee.ViewHistoryKeys.SERVER_DISCOVERY_BADGE || e === ee.ViewHistoryKeys.E3_SERVER_DISCOVERY_BADGE) {
        if (this.scrollToDiscovery) {
          let e = (0, u.findDOMNode)(this.guildDiscoveryRef.current);
          (0, f.isElement)(e, HTMLElement) ? n.scrollIntoViewNode({
            node: e,
            animate: t,
            padding: 8
          }): n.scrollTo({
            to: 0,
            animate: t
          })
        }
        return
      }
      if (null == e) {
        n.scrollTo({
          to: 0,
          animate: t
        });
        return
      }
      let l = this.nodeRefs[e];
      for (; null == l;) {
        let t = this.guildsTree.getNode(e);
        if ((null == t ? void 0 : t.parentId) == null) break;
        l = this.nodeRefs[t.parentId]
      }
      null != l && (0, f.isElement)(l) ? n.scrollIntoViewNode({
        node: l,
        animate: t,
        padding: 8
      }) : n.scrollTo({
        to: 0,
        animate: t
      })
    }, this.handleJumpToGuild = e => {
      this.scrollToGuild(e, !0)
    }, this.scrollTo = e => {
      var t;
      null === (t = this.scrollerRef.current) || void 0 === t || t.scrollTo(e)
    }, this.isItemVisible = (e, t, n) => {
      let l = this.scrollerRef.current;
      if (null == l) return !1;
      let a = n.findIndex(t => "string" == typeof t || null == t ? t === e : t.includes(e));
      if (a < 0) return !1;
      let s = ea * a + er;
      !t && (s += ei);
      let i = l.getScrollerState();
      return !t && !!(s >= i.scrollTop) || !!t && !!(s + ea <= i.scrollTop + i.offsetHeight) || !1
    }, this.handleScroll = () => {
      !this.isScrolling && this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScrollDebounced(), this._handleScrollThrottled()
    }, this._handleScrollDebounced = o().debounce(() => {
      let e = this.scrollerRef.current;
      if (null == e) return;
      let {
        scrollTop: t
      } = e.getScrollerState();
      g.default.updateGuildListScrollTo(t), this.onScroll()
    }, 200), this._handleScrollThrottled = o().throttle(() => {
      let e = this.scrollerRef.current;
      if (null == e) return;
      let {
        scrollTop: t,
        scrollHeight: n,
        offsetHeight: l
      } = e.getScrollerState(), a = t + l >= n - 24;
      a !== this.isNearBottom && (this.isNearBottom = a, this.onScrollStateChanged({
        isNearBottom: a
      }))
    }, 100), this.setNodeRef = (e, t) => {
      this.nodeRefs[e] = t
    }
  }
}

function eu(e) {
  let {
    disableAppDownload: t = b.isPlatformEmbedded,
    isOverlay: n = !1,
    className: s,
    themeOverride: r
  } = e, [o] = (0, h.useStateFromStoresArray)([D.default], () => {
    let e = D.default.getGuildsTree();
    return [e, e.version]
  }), u = (0, h.useStateFromStores)([v.default], () => v.default.lurkingGuildIds()), f = a.useMemo(() => n ? [] : u, [u, n]), m = (0, h.useStateFromStoresArray)([O.default, y.default], () => j.default.keys(O.default.getGuilds()).filter(e => y.default.isCurrentUserGuest(e))), g = f.concat(m), E = (0, h.useStateFromStores)([I.default], () => I.default.isFullscreenInContext()), el = (0, h.useStateFromStores)([O.default], () => O.default.getGeoRestrictedGuilds()), [ea, es] = a.useState(!1), ei = a.useCallback(() => es(!0), []), er = a.useCallback(() => es(!1), []), eu = a.useRef(!1), [ed] = a.useState(() => new C.Timeout), ec = a.useRef(null), ef = a.useRef(null), [eh, em] = a.useState(!1), eC = (0, N.useClanPrepilotExperimentDefaultGameId)({
    location: "guilds_bar",
    autoTrackExposure: !1
  }), ep = (0, T.useGuildsEligibleForClan)({
    location: "guilds_bar"
  }), eg = ep.length > 0, eE = a.useMemo(() => ep.filter(e => !e.hasFeature(ee.GuildFeatures.CLAN)), [ep]).length > 0, {
    clanDiscoveryEnabled: e_,
    defaultGameId: eS
  } = (0, N.useClanPilotExperiment)("guilds_bar"), eI = a.useMemo(() => eE ? W.GuildsBarClanAdminUpsellPopout : e_ ? W.GuildsBarClanUserUpsellPopout : void 0, [e_, eE]), eN = a.useMemo(() => eE ? eC : e_ ? eS : void 0, [eC, e_, eE, eS]), eT = null != eI, eA = !eT, {
    ref: eL,
    ...ev
  } = (0, c.useListContainerProps)(), ex = (0, p.useFocusJumpSection)(), [eR, eM] = a.useState(!1), ey = a.useMemo(() => new eo(o, eM, () => {
    var e, t;
    null === (e = ec.current) || void 0 === e || e.calculateState(), null === (t = ef.current) || void 0 === t || t.calculateState()
  }, e => {
    let {
      isNearBottom: t
    } = e;
    em(t)
  }, eA), [o, eA]), {
    analyticsLocations: eO
  } = (0, S.default)(_.default.GUILDS_LIST), {
    pathname: eD
  } = (0, d.useLocation)(), eb = eD.startsWith(ee.Routes.GUILD_DISCOVERY), ej = eD.startsWith(ee.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
  a.useLayoutEffect(() => {
    if (!eu.current) {
      if (0 !== o.size) {
        if (eb) ey.scrollToGuild(null, !1);
        else {
          let {
            scrollTop: e
          } = M.default.getGuildListDimensions();
          ey.scrollTo({
            to: e,
            animate: !1
          })
        }
        return eu.current = !0, () => ed.stop()
      }
    }
  }, []), a.useEffect(() => {
    if (ey.setGuildsTree(o), eu.current || 0 === o.size) return;
    let e = x.default.getState().guildId;
    ey.scrollToGuild(e, !1);
    let t = null;
    return x.default.subscribe(e => {
      let {
        guildId: n
      } = e;
      n !== t && (t = n, ey.scrollToGuild(t, !1))
    })
  }, [o, ey]), (0, U.default)(ey.scrollToGuild);
  let eP = o.getRoots(),
    eG = (0, A.default)(),
    eU = (0, R.useSignUpButton)(),
    ew = el.map(e => (0, l.jsx)(k.default, {
      id: e.id,
      name: e.name,
      icon: e.icon
    }, e.id));
  return (0, l.jsx)(S.AnalyticsLocationProvider, {
    value: eO,
    children: (0, l.jsx)("nav", {
      className: i()(en.wrapper, s, (0, P.getThemeClass)(r), {
        [en.hidden]: E
      }),
      "aria-label": et.default.Messages.GUILDS_BAR_A11Y_LABEL,
      children: (0, l.jsxs)("ul", {
        ref: eL,
        ...ev,
        ...ex,
        role: "tree",
        className: en.tree,
        children: [(0, l.jsx)(w.default, {
          ref: ec,
          isVisible: ey.isItemVisible,
          onJumpTo: ey.handleJumpToGuild,
          className: en.unreadMentionsIndicatorTop,
          barClassName: en.unreadMentionsBar
        }), (0, l.jsxs)(p.AdvancedScrollerNone, {
          className: i()({
            [en.scroller]: !0,
            [en.scrolling]: eR
          }),
          ref: ey.scrollerRef,
          onScroll: ey.handleScroll,
          children: [(0, l.jsx)(K.HomeButton, {}), eG ? (0, l.jsx)(L.default, {}) : null, (0, l.jsx)(H.default, {}), (0, l.jsx)(z.default, {
            isOnHubVerificationRoute: ej
          }), (0, l.jsx)(B.default, {}), eU, g.map(e => (0, l.jsx)($.default, {
            guildId: e
          }, e)), (0, l.jsx)(q.default, {}), (0, l.jsx)(Z.default, {}), (0, l.jsx)("div", {
            "aria-label": et.default.Messages.SERVERS,
            children: eP.map(function e(t) {
              switch (t.type) {
                case G.GuildsNodeType.FOLDER:
                  return (0, l.jsx)(Q.default, {
                    folderNode: t,
                    setNodeRef: ey.setNodeRef,
                    draggable: !0,
                    sorting: ea,
                    onDragStart: ei,
                    onDragEnd: er,
                    renderChildNode: e
                  }, t.id);
                case G.GuildsNodeType.GUILD:
                  return (0, l.jsx)(J.default, {
                    guildNode: t,
                    setRef: ey.setNodeRef,
                    draggable: !0,
                    sorting: ea,
                    onDragStart: ei,
                    onDragEnd: er
                  }, t.id);
                default:
                  return null
              }
            })
          }), ew, n ? null : (0, l.jsx)(V.default, {
            disableTooltip: f.length > 0,
            lastTargetNode: eP[eP.length - 1]
          }), n || eg || e_ ? null : (0, l.jsx)(Y.default, {
            ref: ey.guildDiscoveryRef,
            selected: eb
          }), (0, l.jsx)(X.default, {}), t ? null : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(Z.default, {}), (0, l.jsx)(F.default, {})]
          })]
        }), n || null == eI || null == eN ? !n && eg ? (0, l.jsx)(W.GuildsBarFixedFooter, {
          hideGradient: eh,
          children: (0, l.jsx)(Y.default, {
            ref: ey.guildDiscoveryRef,
            selected: eb,
            className: en.fixedDiscoveryIcon
          })
        }) : null : (0, l.jsx)(W.GuildsBarFixedFooter, {
          hideGradient: eh,
          children: (0, l.jsx)(eI, {
            defaultGameId: eN,
            children: e => {
              let {
                onClick: t
              } = e;
              return (0, l.jsx)(Y.default, {
                ref: ey.guildDiscoveryRef,
                selected: eb,
                className: en.fixedDiscoveryIcon,
                onClick: t
              })
            }
          })
        }), (0, l.jsx)(w.default, {
          reverse: !0,
          ref: ef,
          isVisible: ey.isItemVisible,
          onJumpTo: ey.handleJumpToGuild,
          className: i()(en.unreadMentionsIndicatorBottom, {
            [en.unreadMentionsFixedFooter]: !n && eT
          }),
          barClassName: en.unreadMentionsBar
        })]
      })
    })
  })
}
t.default = a.memo(function(e) {
  let t = (0, E.default)("guildsnav");
  return (0, l.jsx)(c.ListNavigatorProvider, {
    navigator: t,
    children: (0, l.jsx)(eu, {
      ...e
    })
  })
}, (e, t) => !1 === t.isVisible || (0, m.default)(e, t))