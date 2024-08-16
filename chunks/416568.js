n(47120);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    c = n(699581),
    u = n(266067),
    d = n(91192),
    h = n(374470),
    p = n(442837),
    _ = n(902704),
    f = n(846519),
    g = n(481060),
    m = n(925549),
    C = n(209613),
    I = n(100527),
    E = n(906732),
    N = n(358221),
    x = n(963202),
    S = n(353093),
    v = n(706590),
    Z = n(940777),
    T = n(831565),
    L = n(41776),
    A = n(905423),
    b = n(802718),
    M = n(796974),
    R = n(271383),
    O = n(430824),
    P = n(771845),
    y = n(358085),
    j = n(709054),
    D = n(792125),
    w = n(727258),
    U = n(605951),
    G = n(474109),
    k = n(741616),
    B = n(187835),
    H = n(162050),
    V = n(118122),
    F = n(193154),
    W = n(602147),
    z = n(773182),
    Y = n(222059),
    K = n(751277),
    q = n(65721),
    Q = n(843343),
    X = n(654142),
    J = n(695301),
    $ = n(836697),
    ee = n(921230),
    et = n(981631),
    en = n(689938),
    ei = n(768660);
function el(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let er = 56,
    ea = (0, y.isWindows)() ? 4 : (0, y.isMac)() ? 0 : 12,
    es = er - 16,
    eo = ea + 10;
class ec {
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    constructor(e, t, n, i, r) {
        el(this, 'guildsTree', void 0),
            el(this, 'setScrolling', void 0),
            el(this, 'onScroll', void 0),
            el(this, 'onScrollStateChanged', void 0),
            el(this, 'scrollToDiscovery', void 0),
            el(this, 'scrollerRef', void 0),
            el(this, 'guildDiscoveryRef', void 0),
            el(this, 'nodeRefs', void 0),
            el(this, 'timeout', void 0),
            el(this, 'isScrolling', void 0),
            el(this, 'isNearBottom', void 0),
            el(this, 'scrollToGuild', void 0),
            el(this, 'handleJumpToGuild', void 0),
            el(this, 'scrollTo', void 0),
            el(this, 'isItemVisible', void 0),
            el(this, 'handleScroll', void 0),
            el(this, '_handleScrollDebounced', void 0),
            el(this, '_handleScrollThrottled', void 0),
            el(this, 'setNodeRef', void 0),
            (this.guildsTree = e),
            (this.setScrolling = t),
            (this.onScroll = n),
            (this.onScrollStateChanged = i),
            (this.scrollToDiscovery = r),
            (this.scrollerRef = l.createRef()),
            (this.guildDiscoveryRef = l.createRef()),
            (this.nodeRefs = {}),
            (this.timeout = new f.V7()),
            (this.isScrolling = !1),
            (this.isNearBottom = !1),
            (this.scrollToGuild = (e, t) => {
                let n = this.scrollerRef.current;
                if (null == n) return;
                if ((null == e && window.location.pathname.startsWith(et.Z5c.GUILD_DISCOVERY)) || e === et.x8Z.SERVER_DISCOVERY_BADGE || e === et.x8Z.E3_SERVER_DISCOVERY_BADGE) {
                    if (this.scrollToDiscovery) {
                        let e = (0, c.findDOMNode)(this.guildDiscoveryRef.current);
                        (0, h.k)(e, HTMLElement)
                            ? n.scrollIntoViewNode({
                                  node: e,
                                  animate: t,
                                  padding: 8
                              })
                            : n.scrollTo({
                                  to: 0,
                                  animate: t
                              });
                    }
                    return;
                }
                if (null == e) {
                    n.scrollTo({
                        to: 0,
                        animate: t
                    });
                    return;
                }
                let i = this.nodeRefs[e];
                for (; null == i; ) {
                    let t = this.guildsTree.getNode(e);
                    if ((null == t ? void 0 : t.parentId) == null) break;
                    i = this.nodeRefs[t.parentId];
                }
                null != i && (0, h.k)(i)
                    ? n.scrollIntoViewNode({
                          node: i,
                          animate: t,
                          padding: 8
                      })
                    : n.scrollTo({
                          to: 0,
                          animate: t
                      });
            }),
            (this.handleJumpToGuild = (e) => {
                this.scrollToGuild(e, !0);
            }),
            (this.scrollTo = (e) => {
                var t;
                null === (t = this.scrollerRef.current) || void 0 === t || t.scrollTo(e);
            }),
            (this.isItemVisible = (e, t, n) => {
                let i = this.scrollerRef.current;
                if (null == i) return !1;
                let l = n.findIndex((t) => ('string' == typeof t || null == t ? t === e : t.includes(e)));
                if (l < 0) return !1;
                let r = er * l + eo;
                !t && (r += es);
                let a = i.getScrollerState();
                return (!t && !!(r >= a.scrollTop)) || (!!t && !!(r + er <= a.scrollTop + a.offsetHeight)) || !1;
            }),
            (this.handleScroll = () => {
                !this.isScrolling && this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScrollDebounced(), this._handleScrollThrottled();
            }),
            (this._handleScrollDebounced = o().debounce(() => {
                let e = this.scrollerRef.current;
                if (null == e) return;
                let { scrollTop: t } = e.getScrollerState();
                m.Z.updateGuildListScrollTo(t), this.onScroll();
            }, 200)),
            (this._handleScrollThrottled = o().throttle(() => {
                let e = this.scrollerRef.current;
                if (null == e) return;
                let { scrollTop: t, scrollHeight: n, offsetHeight: i } = e.getScrollerState(),
                    l = t + i >= n - 24;
                l !== this.isNearBottom && ((this.isNearBottom = l), this.onScrollStateChanged({ isNearBottom: l }));
            }, 100)),
            (this.setNodeRef = (e, t) => {
                this.nodeRefs[e] = t;
            });
    }
}
function eu(e) {
    let { disableAppDownload: t = y.isPlatformEmbedded, isOverlay: n = !1, className: r, themeOverride: s } = e,
        [o] = (0, p.Wu)([P.ZP], () => {
            let e = P.ZP.getGuildsTree();
            return [e, e.version];
        }),
        c = (0, p.e7)([L.Z], () => L.Z.lurkingGuildIds()),
        h = l.useMemo(() => (n ? [] : c), [c, n]),
        _ = (0, p.Wu)([O.Z, R.ZP], () => j.default.keys(O.Z.getGuilds()).filter((e) => R.ZP.isCurrentUserGuest(e))),
        m = h.concat(_),
        C = (0, p.e7)([N.Z], () => N.Z.isFullscreenInContext()),
        el = (0, p.e7)([O.Z], () => O.Z.getGeoRestrictedGuilds()),
        [er, ea] = l.useState(!1),
        es = l.useCallback(() => ea(!0), []),
        eo = l.useCallback(() => ea(!1), []),
        eu = l.useRef(!1),
        [ed] = l.useState(() => new f.V7()),
        eh = l.useRef(null),
        ep = l.useRef(null),
        [e_, ef] = l.useState(!1),
        { clanDiscoveryEnabled: eg, defaultGameId: em } = (0, x.nk)('guilds_bar'),
        { guilds: eC, defaultGameId: eI } = (0, x.C3)({
            location: 'guilds_bar',
            includeConverted: !0
        }),
        eE = (0, T.v)({ location: 'GuildsBar' }),
        eN = eg || eC.length > 0 || eE,
        ex = l.useMemo(() => eC.filter((e) => !(0, S.EJ)(e)), [eC]).length > 0,
        eS = l.useMemo(() => (ex ? z.OO : eg ? z.KF : void 0), [eg, ex]),
        ev = l.useMemo(() => (ex ? eI : eg ? em : void 0), [eI, eg, ex, em]),
        eZ = null != eS,
        eT = !eZ,
        { ref: eL, ...eA } = (0, d.OP)(),
        eb = (0, g.useFocusJumpSection)(),
        [eM, eR] = l.useState(!1),
        eO = l.useMemo(
            () =>
                new ec(
                    o,
                    eR,
                    () => {
                        var e, t;
                        null === (e = eh.current) || void 0 === e || e.calculateState(), null === (t = ep.current) || void 0 === t || t.calculateState();
                    },
                    (e) => {
                        let { isNearBottom: t } = e;
                        ef(t);
                    },
                    eT
                ),
            [o, eT]
        ),
        { analyticsLocations: eP } = (0, E.ZP)(I.Z.GUILDS_LIST),
        { pathname: ey } = (0, u.TH)(),
        ej = ey.startsWith(et.Z5c.GUILD_DISCOVERY) || ey.startsWith(et.Z5c.GLOBAL_DISCOVERY),
        eD = ey.startsWith(et.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    l.useLayoutEffect(() => {
        if (!eu.current) {
            if (0 !== o.size) {
                if (ej) eO.scrollToGuild(null, !1);
                else {
                    let { scrollTop: e } = M.Z.getGuildListDimensions();
                    eO.scrollTo({
                        to: e,
                        animate: !1
                    });
                }
                return (eu.current = !0), () => ed.stop();
            }
        }
    }, []),
        l.useEffect(() => {
            if ((eO.setGuildsTree(o), eu.current || 0 === o.size)) return;
            let e = A.Z.getState().guildId;
            eO.scrollToGuild(e, !1);
            let t = null;
            return A.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), eO.scrollToGuild(t, !1));
            });
        }, [o, eO]);
    let ew = l.useCallback(() => {
        eO.scrollTo({
            to: 0,
            animate: !1
        });
    }, [eO]);
    (0, U.Z)(eO.scrollToGuild);
    let eU = o.getRoots(),
        eG = (0, v.Z)(),
        ek = (0, b.U)(),
        eB = el.map((e) =>
            (0, i.jsx)(
                F.Z,
                {
                    id: e.id,
                    name: e.name,
                    icon: e.icon
                },
                e.id
            )
        );
    return (0, i.jsx)(E.Gt, {
        value: eP,
        children: (0, i.jsx)('nav', {
            className: a()(ei.wrapper, r, (0, D.Q)(s), { [ei.hidden]: C }),
            'aria-label': en.Z.Messages.GUILDS_BAR_A11Y_LABEL,
            children: (0, i.jsxs)('ul', {
                ref: eL,
                ...eA,
                ...eb,
                role: 'tree',
                className: ei.tree,
                children: [
                    (0, i.jsx)(G.Z, {
                        ref: eh,
                        isVisible: eO.isItemVisible,
                        onJumpTo: eO.handleJumpToGuild,
                        className: ei.unreadMentionsIndicatorTop,
                        barClassName: ei.unreadMentionsBar
                    }),
                    (0, i.jsxs)(g.AdvancedScrollerNone, {
                        className: a()({
                            [ei.scroller]: !0,
                            [ei.scrolling]: eM
                        }),
                        ref: eO.scrollerRef,
                        onScroll: eO.handleScroll,
                        children: [
                            (0, i.jsx)(Y.u, {}),
                            eG ? (0, i.jsx)(Z.Z, {}) : null,
                            (0, i.jsx)(H.Z, {}),
                            (0, i.jsx)(K.Z, { isOnHubVerificationRoute: eD }),
                            (0, i.jsx)(k.Z, {}),
                            ek,
                            m.map((e) => (0, i.jsx)(ee.Z, { guildId: e }, e)),
                            (0, i.jsx)($.Z, { onActivate: ew }),
                            (0, i.jsx)(q.Z, {}),
                            (0, i.jsx)('div', {
                                'aria-label': en.Z.Messages.SERVERS,
                                children: eU.map(function e(t) {
                                    switch (t.type) {
                                        case w.eD.FOLDER:
                                            return (0, i.jsx)(
                                                X.Z,
                                                {
                                                    folderNode: t,
                                                    setNodeRef: eO.setNodeRef,
                                                    draggable: !0,
                                                    sorting: er,
                                                    onDragStart: es,
                                                    onDragEnd: eo,
                                                    renderChildNode: e
                                                },
                                                t.id
                                            );
                                        case w.eD.GUILD:
                                            return (0, i.jsx)(
                                                J.Z,
                                                {
                                                    guildNode: t,
                                                    setRef: eO.setNodeRef,
                                                    draggable: !0,
                                                    sorting: er,
                                                    onDragStart: es,
                                                    onDragEnd: eo
                                                },
                                                t.id
                                            );
                                        default:
                                            return null;
                                    }
                                })
                            }),
                            eB,
                            n
                                ? null
                                : (0, i.jsx)(V.Z, {
                                      disableTooltip: h.length > 0,
                                      lastTargetNode: eU[eU.length - 1]
                                  }),
                            n || eN
                                ? null
                                : (0, i.jsx)(W.Z, {
                                      ref: eO.guildDiscoveryRef,
                                      selected: ej
                                  }),
                            (0, i.jsx)(Q.Z, {}),
                            t
                                ? null
                                : (0, i.jsxs)(i.Fragment, {
                                      children: [(0, i.jsx)(q.Z, {}), (0, i.jsx)(B.Z, {})]
                                  })
                        ]
                    }),
                    n || null == eS
                        ? !n && eN
                            ? (0, i.jsx)(z.LW, {
                                  hideGradient: e_,
                                  children: (0, i.jsx)(W.Z, {
                                      ref: eO.guildDiscoveryRef,
                                      selected: ej,
                                      className: ei.fixedDiscoveryIcon
                                  })
                              })
                            : null
                        : (0, i.jsx)(z.LW, {
                              hideGradient: e_,
                              children: (0, i.jsx)(eS, {
                                  defaultGameId: ev,
                                  children: (e) => {
                                      let { onClick: t } = e;
                                      return (0, i.jsx)(W.Z, {
                                          ref: eO.guildDiscoveryRef,
                                          selected: ej,
                                          className: ei.fixedDiscoveryIcon,
                                          onClick: t
                                      });
                                  }
                              })
                          }),
                    (0, i.jsx)(G.Z, {
                        reverse: !0,
                        ref: ep,
                        isVisible: eO.isItemVisible,
                        onJumpTo: eO.handleJumpToGuild,
                        className: a()(ei.unreadMentionsIndicatorBottom, { [ei.unreadMentionsFixedFooter]: !n && eZ }),
                        barClassName: ei.unreadMentionsBar
                    })
                ]
            })
        })
    });
}
t.Z = l.memo(
    function (e) {
        let t = (0, C.Z)('guildsnav');
        return (0, i.jsx)(d.bG, {
            navigator: t,
            children: (0, i.jsx)(eu, { ...e })
        });
    },
    (e, t) => !1 === t.isVisible || (0, _.Z)(e, t)
);
