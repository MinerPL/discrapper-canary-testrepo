"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("392711"),
  o = n.n(r),
  u = n("699581"),
  d = n("613828"),
  c = n("924826"),
  f = n("374470"),
  h = n("442837"),
  C = n("902704"),
  p = n("846519"),
  m = n("481060"),
  g = n("925549"),
  E = n("209613"),
  S = n("100527"),
  _ = n("906732"),
  I = n("358221"),
  N = n("706590"),
  T = n("940777"),
  A = n("122222"),
  L = n("41776"),
  v = n("905423"),
  x = n("802718"),
  R = n("796974"),
  M = n("271383"),
  O = n("430824"),
  y = n("771845"),
  D = n("594174"),
  b = n("358085"),
  j = n("709054"),
  G = n("792125"),
  U = n("727258"),
  P = n("605951"),
  w = n("474109"),
  F = n("741616"),
  B = n("187835"),
  V = n("162050"),
  H = n("118122"),
  k = n("193154"),
  Y = n("602147"),
  K = n("222059"),
  W = n("751277"),
  Z = n("65721"),
  z = n("843343"),
  X = n("654142"),
  Q = n("695301"),
  q = n("836697"),
  J = n("921230"),
  $ = n("981631"),
  ee = n("689938"),
  et = n("764060");

function en(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let el = 56,
  ea = (0, b.isWindows)() ? 4 : (0, b.isMac)() ? 0 : 12,
  es = el - 16,
  ei = ea + 10;
class er {
  setGuildsTree(e) {
    this.guildsTree = e
  }
  constructor(e, t, n) {
    en(this, "guildsTree", void 0), en(this, "setScrolling", void 0), en(this, "onScroll", void 0), en(this, "scrollerRef", void 0), en(this, "guildDiscoveryRef", void 0), en(this, "nodeRefs", void 0), en(this, "timeout", void 0), en(this, "isScrolling", void 0), en(this, "scrollToGuild", void 0), en(this, "handleJumpToGuild", void 0), en(this, "scrollTo", void 0), en(this, "isItemVisible", void 0), en(this, "handleScroll", void 0), en(this, "_handleScroll", void 0), en(this, "setNodeRef", void 0), this.guildsTree = e, this.setScrolling = t, this.onScroll = n, this.scrollerRef = a.createRef(), this.guildDiscoveryRef = a.createRef(), this.nodeRefs = {}, this.timeout = new p.Timeout, this.isScrolling = !1, this.scrollToGuild = (e, t) => {
      let n = this.scrollerRef.current;
      if (null == n) return;
      if (null == e && window.location.pathname.startsWith($.Routes.GUILD_DISCOVERY) || e === $.ViewHistoryKeys.SERVER_DISCOVERY_BADGE || e === $.ViewHistoryKeys.E3_SERVER_DISCOVERY_BADGE) {
        let e = (0, u.findDOMNode)(this.guildDiscoveryRef.current);
        (0, f.isElement)(e, HTMLElement) ? n.scrollIntoViewNode({
          node: e,
          animate: t,
          padding: 8
        }): n.scrollTo({
          to: 0,
          animate: t
        });
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
      let s = el * a + ei;
      !t && (s += es);
      let i = l.getScrollerState();
      return !t && !!(s >= i.scrollTop) || !!t && !!(s + el <= i.scrollTop + i.offsetHeight) || !1
    }, this.handleScroll = () => {
      !this.isScrolling && this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScroll()
    }, this._handleScroll = o().debounce(() => {
      let e = this.scrollerRef.current;
      if (null == e) return;
      let {
        scrollTop: t
      } = e.getScrollerState();
      g.default.updateGuildListScrollTo(t), this.onScroll()
    }, 200), this.setNodeRef = (e, t) => {
      this.nodeRefs[e] = t
    }
  }
}

function eo(e) {
  let {
    disableAppDownload: t = b.isPlatformEmbedded,
    isOverlay: n = !1,
    className: s,
    themeOverride: r
  } = e, [o] = (0, h.useStateFromStoresArray)([y.default], () => {
    let e = y.default.getGuildsTree();
    return [e, e.version]
  }), u = (0, h.useStateFromStores)([L.default], () => L.default.lurkingGuildIds()), f = a.useMemo(() => n ? [] : u, [u, n]), C = (0, h.useStateFromStoresArray)([O.default, M.default], () => j.default.keys(O.default.getGuilds()).filter(e => M.default.isCurrentUserGuest(e))), g = f.concat(C), E = (0, h.useStateFromStores)([D.default], () => {
    var e;
    return null === (e = D.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()
  }), en = (0, h.useStateFromStores)([I.default], () => I.default.isFullscreenInContext()), el = (0, h.useStateFromStores)([O.default], () => O.default.getGeoRestrictedGuilds()), [ea, es] = a.useState(!1), ei = a.useCallback(() => es(!0), []), eo = a.useCallback(() => es(!1), []), eu = a.useRef(!1), [ed] = a.useState(() => new p.Timeout), ec = a.useRef(null), ef = a.useRef(null), {
    ref: eh,
    ...eC
  } = (0, c.useListContainerProps)(), ep = (0, m.useFocusJumpSection)(), [em, eg] = a.useState(!1), [eE] = a.useState(() => new er(o, eg, () => {
    var e, t;
    null === (e = ec.current) || void 0 === e || e.calculateState(), null === (t = ef.current) || void 0 === t || t.calculateState()
  })), {
    analyticsLocations: eS
  } = (0, _.default)(S.default.GUILDS_LIST), {
    pathname: e_
  } = (0, d.useLocation)(), eI = e_.startsWith($.Routes.GUILD_DISCOVERY), eN = e_.startsWith($.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
  a.useLayoutEffect(() => {
    if (!eu.current) {
      if (0 !== o.size) {
        if (eI) eE.scrollToGuild(null, !1);
        else {
          let {
            scrollTop: e
          } = R.default.getGuildListDimensions();
          eE.scrollTo({
            to: e,
            animate: !1
          })
        }
        return eu.current = !0, () => ed.stop()
      }
    }
  }, []), a.useEffect(() => {
    if (eE.setGuildsTree(o), eu.current || 0 === o.size) return;
    let e = v.default.getState().guildId;
    eE.scrollToGuild(e, !1);
    let t = null;
    return v.default.subscribe(e => {
      let {
        guildId: n
      } = e;
      n !== t && (t = n, eE.scrollToGuild(t, !1))
    })
  }, [o, eE]), (0, P.default)(eE.scrollToGuild);
  let eT = (0, A.useEligibleForGameRecommendations)(),
    eA = o.getRoots(),
    eL = (0, N.default)(),
    ev = (0, x.useSignUpButton)(),
    ex = el.map(e => (0, l.jsx)(k.default, {
      id: e.id,
      name: e.name,
      icon: e.icon
    }, e.id));
  return (0, l.jsx)(_.AnalyticsLocationProvider, {
    value: eS,
    children: (0, l.jsx)("nav", {
      className: i()(et.wrapper, s, (0, G.getThemeClass)(r), {
        [et.hidden]: en
      }),
      "aria-label": ee.default.Messages.GUILDS_BAR_A11Y_LABEL,
      children: (0, l.jsxs)("ul", {
        ref: eh,
        ...eC,
        ...ep,
        role: "tree",
        className: et.tree,
        children: [(0, l.jsx)(w.default, {
          ref: ec,
          isVisible: eE.isItemVisible,
          onJumpTo: eE.handleJumpToGuild,
          className: et.unreadMentionsIndicatorTop,
          barClassName: et.unreadMentionsBar
        }), (0, l.jsxs)(m.AdvancedScrollerNone, {
          className: i()({
            [et.scroller]: !0,
            [et.scrolling]: em
          }),
          ref: eE.scrollerRef,
          onScroll: eE.handleScroll,
          children: [(0, l.jsx)(K.HomeButton, {}), eL ? (0, l.jsx)(T.default, {}) : null, (0, l.jsx)(V.default, {}), (0, l.jsx)(W.default, {
            isOnHubVerificationRoute: eN
          }), (0, l.jsx)(F.default, {}), ev, g.map(e => (0, l.jsx)(J.default, {
            guildId: e
          }, e)), E ? (0, l.jsx)(q.default, {}) : null, !n && eT ? (0, l.jsx)(Y.default, {
            ref: eE.guildDiscoveryRef,
            selected: eI,
            tooltip: ee.default.Messages.GUILD_DISCOVERY_TOOLTIP
          }) : null, (0, l.jsx)(Z.default, {}), (0, l.jsx)("div", {
            "aria-label": ee.default.Messages.SERVERS,
            children: eA.map(function e(t) {
              switch (t.type) {
                case U.GuildsNodeType.FOLDER:
                  return (0, l.jsx)(X.default, {
                    folderNode: t,
                    setNodeRef: eE.setNodeRef,
                    draggable: !0,
                    sorting: ea,
                    onDragStart: ei,
                    onDragEnd: eo,
                    renderChildNode: e
                  }, t.id);
                case U.GuildsNodeType.GUILD:
                  return (0, l.jsx)(Q.default, {
                    guildNode: t,
                    setRef: eE.setNodeRef,
                    draggable: !0,
                    sorting: ea,
                    onDragStart: ei,
                    onDragEnd: eo
                  }, t.id);
                default:
                  return null
              }
            })
          }), ex, n ? null : (0, l.jsx)(H.default, {
            disableTooltip: f.length > 0,
            lastTargetNode: eA[eA.length - 1]
          }), n || eT ? null : (0, l.jsx)(Y.default, {
            ref: eE.guildDiscoveryRef,
            selected: eI
          }), (0, l.jsx)(z.default, {}), t ? null : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(Z.default, {}), (0, l.jsx)(B.default, {})]
          })]
        }), (0, l.jsx)(w.default, {
          reverse: !0,
          ref: ef,
          isVisible: eE.isItemVisible,
          onJumpTo: eE.handleJumpToGuild,
          className: et.unreadMentionsIndicatorBottom,
          barClassName: et.unreadMentionsBar
        })]
      })
    })
  })
}
t.default = a.memo(function(e) {
  let t = (0, E.default)("guildsnav");
  return (0, l.jsx)(c.ListNavigatorProvider, {
    navigator: t,
    children: (0, l.jsx)(eo, {
      ...e
    })
  })
}, (e, t) => !1 === t.isVisible || (0, C.default)(e, t))