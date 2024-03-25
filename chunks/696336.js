"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eo
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  o = n.n(r),
  u = n("817736"),
  d = n("90915"),
  c = n("974667"),
  f = n("118810"),
  h = n("446674"),
  C = n("233736"),
  p = n("862337"),
  m = n("77078"),
  E = n("406189"),
  g = n("302437"),
  I = n("812204"),
  S = n("685665"),
  _ = n("191145"),
  N = n("15131"),
  T = n("480376"),
  A = n("205550"),
  L = n("267567"),
  v = n("393027"),
  x = n("156332"),
  R = n("162805"),
  M = n("26989"),
  O = n("305961"),
  y = n("677099"),
  D = n("697218"),
  b = n("773336"),
  j = n("299039"),
  G = n("439932"),
  U = n("674644"),
  P = n("533669"),
  w = n("270382"),
  F = n("777778"),
  B = n("648647"),
  V = n("982360"),
  H = n("628570"),
  k = n("283294"),
  Y = n("822485"),
  K = n("798573"),
  W = n("795853"),
  Z = n("357762"),
  z = n("504957"),
  X = n("199218"),
  Q = n("624531"),
  q = n("785343"),
  J = n("22567"),
  $ = n("49111"),
  ee = n("782340"),
  et = n("876879");
let en = 56,
  el = (0, b.isWindows)() ? 4 : (0, b.isMac)() ? 0 : 12,
  ea = en - 16,
  es = el + 10;
class ei {
  setGuildsTree(e) {
    this.guildsTree = e
  }
  constructor(e, t, n) {
    this.guildsTree = e, this.setScrolling = t, this.onScroll = n, this.scrollerRef = a.createRef(), this.guildDiscoveryRef = a.createRef(), this.nodeRefs = {}, this.timeout = new p.Timeout, this.isScrolling = !1, this.scrollToGuild = (e, t) => {
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
      let s = en * a + es;
      !t && (s += ea);
      let i = l.getScrollerState();
      return !t && !!(s >= i.scrollTop) || !!t && !!(s + en <= i.scrollTop + i.offsetHeight) || !1
    }, this.handleScroll = () => {
      !this.isScrolling && this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScroll()
    }, this._handleScroll = o.debounce(() => {
      let e = this.scrollerRef.current;
      if (null == e) return;
      let {
        scrollTop: t
      } = e.getScrollerState();
      E.default.updateGuildListScrollTo(t), this.onScroll()
    }, 200), this.setNodeRef = (e, t) => {
      this.nodeRefs[e] = t
    }
  }
}

function er(e) {
  let {
    disableAppDownload: t = b.isPlatformEmbedded,
    isOverlay: n = !1,
    className: s,
    themeOverride: r
  } = e, [o] = (0, h.useStateFromStoresArray)([y.default], () => {
    let e = y.default.getGuildsTree();
    return [e, e.version]
  }), u = (0, h.useStateFromStores)([L.default], () => L.default.lurkingGuildIds()), f = a.useMemo(() => n ? [] : u, [u, n]), C = (0, h.useStateFromStoresArray)([O.default, M.default], () => j.default.keys(O.default.getGuilds()).filter(e => M.default.isCurrentUserGuest(e))), E = f.concat(C), g = (0, h.useStateFromStores)([D.default], () => {
    var e;
    return null === (e = D.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()
  }), en = (0, h.useStateFromStores)([_.default], () => _.default.isFullscreenInContext()), el = (0, h.useStateFromStores)([O.default], () => O.default.getGeoRestrictedGuilds()), [ea, es] = a.useState(!1), er = a.useCallback(() => es(!0), []), eo = a.useCallback(() => es(!1), []), eu = a.useRef(!1), [ed] = a.useState(() => new p.Timeout), ec = a.useRef(null), ef = a.useRef(null), {
    ref: eh,
    ...eC
  } = (0, c.useListContainerProps)(), ep = (0, m.useFocusJumpSection)(), [em, eE] = a.useState(!1), [eg] = a.useState(() => new ei(o, eE, () => {
    var e, t;
    null === (e = ec.current) || void 0 === e || e.calculateState(), null === (t = ef.current) || void 0 === t || t.calculateState()
  })), {
    analyticsLocations: eI
  } = (0, S.default)(I.default.GUILDS_LIST), {
    pathname: eS
  } = (0, d.useLocation)(), e_ = eS.startsWith($.Routes.GUILD_DISCOVERY), eN = eS.startsWith($.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
  a.useLayoutEffect(() => {
    if (!eu.current) {
      if (0 !== o.size) {
        if (e_) eg.scrollToGuild(null, !1);
        else {
          let {
            scrollTop: e
          } = R.default.getGuildListDimensions();
          eg.scrollTo({
            to: e,
            animate: !1
          })
        }
        return eu.current = !0, () => ed.stop()
      }
    }
  }, []), a.useEffect(() => {
    if (eg.setGuildsTree(o), eu.current || 0 === o.size) return;
    let e = v.default.getState().guildId;
    eg.scrollToGuild(e, !1);
    let t = null,
      n = v.default.subscribe(e => {
        let {
          guildId: n
        } = e;
        n !== t && (t = n, eg.scrollToGuild(t, !1))
      });
    return n
  }, [o, eg]), (0, P.default)(eg.scrollToGuild);
  let eT = (0, A.useEligibleForGameRecommendations)(),
    eA = o.getRoots(),
    eL = (0, N.default)(),
    ev = (0, x.useSignUpButton)(),
    ex = el.map(e => (0, l.jsx)(k.default, {
      id: e.id,
      name: e.name,
      icon: e.icon
    }, e.id));
  return (0, l.jsx)(S.AnalyticsLocationProvider, {
    value: eI,
    children: (0, l.jsx)("nav", {
      className: i(et.wrapper, s, (0, G.getThemeClass)(r), {
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
          isVisible: eg.isItemVisible,
          onJumpTo: eg.handleJumpToGuild,
          className: et.unreadMentionsIndicatorTop,
          barClassName: et.unreadMentionsBar
        }), (0, l.jsxs)(m.AdvancedScrollerNone, {
          className: i({
            [et.scroller]: !0,
            [et.scrolling]: em
          }),
          ref: eg.scrollerRef,
          onScroll: eg.handleScroll,
          children: [(0, l.jsx)(K.HomeButton, {}), eL ? (0, l.jsx)(T.default, {}) : null, (0, l.jsx)(V.default, {}), (0, l.jsx)(W.default, {
            isOnHubVerificationRoute: eN
          }), (0, l.jsx)(F.default, {}), ev, E.map(e => (0, l.jsx)(J.default, {
            guildId: e
          }, e)), g ? (0, l.jsx)(q.default, {}) : null, !n && eT ? (0, l.jsx)(Y.default, {
            ref: eg.guildDiscoveryRef,
            selected: e_,
            tooltip: ee.default.Messages.GUILD_DISCOVERY_TOOLTIP
          }) : null, (0, l.jsx)(Z.default, {}), (0, l.jsx)("div", {
            "aria-label": ee.default.Messages.SERVERS,
            children: eA.map(function e(t) {
              switch (t.type) {
                case U.GuildsNodeType.FOLDER:
                  return (0, l.jsx)(X.default, {
                    folderNode: t,
                    setNodeRef: eg.setNodeRef,
                    draggable: !0,
                    sorting: ea,
                    onDragStart: er,
                    onDragEnd: eo,
                    renderChildNode: e
                  }, t.id);
                case U.GuildsNodeType.GUILD:
                  return (0, l.jsx)(Q.default, {
                    guildNode: t,
                    setRef: eg.setNodeRef,
                    draggable: !0,
                    sorting: ea,
                    onDragStart: er,
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
            ref: eg.guildDiscoveryRef,
            selected: e_
          }), (0, l.jsx)(z.default, {}), t ? null : (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(Z.default, {}), (0, l.jsx)(B.default, {})]
          })]
        }), (0, l.jsx)(w.default, {
          reverse: !0,
          ref: ef,
          isVisible: eg.isItemVisible,
          onJumpTo: eg.handleJumpToGuild,
          className: et.unreadMentionsIndicatorBottom,
          barClassName: et.unreadMentionsBar
        })]
      })
    })
  })
}
var eo = a.memo(function(e) {
  let t = (0, g.default)("guildsnav");
  return (0, l.jsx)(c.ListNavigatorProvider, {
    navigator: t,
    children: (0, l.jsx)(er, {
      ...e
    })
  })
}, (e, t) => !1 === t.isVisible || (0, C.default)(e, t))