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
    P = n(430824),
    O = n(771845),
    y = n(358085),
    j = n(709054),
    D = n(727258),
    w = n(605951),
    U = n(474109),
    G = n(741616),
    k = n(187835),
    B = n(162050),
    V = n(118122),
    H = n(193154),
    F = n(602147),
    W = n(773182),
    z = n(222059),
    Y = n(751277),
    K = n(65721),
    q = n(843343),
    Q = n(654142),
    X = n(695301),
    J = n(836697),
    $ = n(921230),
    ee = n(981631),
    et = n(689938),
    en = n(768660);
function ei(e, t, n) {
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
let el = 56,
    er = (0, y.isWindows)() ? 4 : (0, y.isMac)() ? 0 : 12,
    ea = el - 16,
    es = er + 10;
class eo {
    setGuildsTree(e) {
        this.guildsTree = e;
    }
    constructor(e, t, n, i, r) {
        ei(this, 'guildsTree', void 0),
            ei(this, 'setScrolling', void 0),
            ei(this, 'onScroll', void 0),
            ei(this, 'onScrollStateChanged', void 0),
            ei(this, 'scrollToDiscovery', void 0),
            ei(this, 'scrollerRef', void 0),
            ei(this, 'guildDiscoveryRef', void 0),
            ei(this, 'nodeRefs', void 0),
            ei(this, 'timeout', void 0),
            ei(this, 'isScrolling', void 0),
            ei(this, 'isNearBottom', void 0),
            ei(this, 'scrollToGuild', void 0),
            ei(this, 'handleJumpToGuild', void 0),
            ei(this, 'scrollTo', void 0),
            ei(this, 'isItemVisible', void 0),
            ei(this, 'handleScroll', void 0),
            ei(this, '_handleScrollDebounced', void 0),
            ei(this, '_handleScrollThrottled', void 0),
            ei(this, 'setNodeRef', void 0),
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
                if ((null == e && window.location.pathname.startsWith(ee.Z5c.GUILD_DISCOVERY)) || e === ee.x8Z.SERVER_DISCOVERY_BADGE || e === ee.x8Z.E3_SERVER_DISCOVERY_BADGE) {
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
                let r = el * l + es;
                !t && (r += ea);
                let a = i.getScrollerState();
                return (!t && !!(r >= a.scrollTop)) || (!!t && !!(r + el <= a.scrollTop + a.offsetHeight)) || !1;
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
function ec(e) {
    let { disableAppDownload: t = y.isPlatformEmbedded, isOverlay: n = !1, className: r, themeOverride: s } = e,
        [o] = (0, p.Wu)([O.ZP], () => {
            let e = O.ZP.getGuildsTree();
            return [e, e.version];
        }),
        c = (0, p.e7)([L.Z], () => L.Z.lurkingGuildIds()),
        h = l.useMemo(() => (n ? [] : c), [c, n]),
        _ = (0, p.Wu)([P.Z, R.ZP], () => j.default.keys(P.Z.getGuilds()).filter((e) => R.ZP.isCurrentUserGuest(e))),
        m = h.concat(_),
        C = (0, p.e7)([N.Z], () => N.Z.isFullscreenInContext()),
        ei = (0, p.e7)([P.Z], () => P.Z.getGeoRestrictedGuilds()),
        [el, er] = l.useState(!1),
        ea = l.useCallback(() => er(!0), []),
        es = l.useCallback(() => er(!1), []),
        ec = l.useRef(!1),
        [eu] = l.useState(() => new f.V7()),
        ed = l.useRef(null),
        eh = l.useRef(null),
        [ep, e_] = l.useState(!1),
        { clanDiscoveryEnabled: ef } = (0, x.nk)('guilds_bar'),
        { guilds: eg } = (0, x.C3)({
            location: 'guilds_bar',
            includeConverted: !0
        }),
        em = (0, T.v)({ location: 'GuildsBar' }),
        eC = ef || eg.length > 0 || em,
        eI = l.useMemo(() => eg.filter((e) => !(0, S.EJ)(e)), [eg]).length > 0,
        eE = l.useMemo(() => (eI ? W.OO : ef ? W.KF : void 0), [ef, eI]),
        eN = !eC,
        { ref: ex, ...eS } = (0, d.OP)(),
        ev = (0, g.useFocusJumpSection)(),
        [eZ, eT] = l.useState(!1),
        eL = l.useMemo(
            () =>
                new eo(
                    o,
                    eT,
                    () => {
                        var e, t;
                        null === (e = ed.current) || void 0 === e || e.calculateState(), null === (t = eh.current) || void 0 === t || t.calculateState();
                    },
                    (e) => {
                        let { isNearBottom: t } = e;
                        e_(t);
                    },
                    eN
                ),
            [o, eN]
        ),
        { analyticsLocations: eA } = (0, E.ZP)(I.Z.GUILDS_LIST),
        { pathname: eb } = (0, u.TH)(),
        eM = eb.startsWith(ee.Z5c.GUILD_DISCOVERY) || eb.startsWith(ee.Z5c.GLOBAL_DISCOVERY),
        eR = eb.startsWith(ee.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(''));
    l.useLayoutEffect(() => {
        if (!ec.current) {
            if (0 !== o.size) {
                if (eM) eL.scrollToGuild(null, !1);
                else {
                    let { scrollTop: e } = M.Z.getGuildListDimensions();
                    eL.scrollTo({
                        to: e,
                        animate: !1
                    });
                }
                return (ec.current = !0), () => eu.stop();
            }
        }
    }, []),
        l.useEffect(() => {
            if ((eL.setGuildsTree(o), ec.current || 0 === o.size)) return;
            let e = A.Z.getState().guildId;
            eL.scrollToGuild(e, !1);
            let t = null;
            return A.Z.subscribe((e) => {
                let { guildId: n } = e;
                n !== t && ((t = n), eL.scrollToGuild(t, !1));
            });
        }, [o, eL]);
    let eP = l.useCallback(() => {
        eL.scrollTo({
            to: 0,
            animate: !1
        });
    }, [eL]);
    function eO(e) {
        switch (e.type) {
            case D.eD.FOLDER:
                return (0, i.jsx)(
                    Q.Z,
                    {
                        folderNode: e,
                        setNodeRef: eL.setNodeRef,
                        draggable: !0,
                        sorting: el,
                        onDragStart: ea,
                        onDragEnd: es,
                        renderChildNode: eO
                    },
                    e.id
                );
            case D.eD.GUILD:
                return (0, i.jsx)(
                    X.Z,
                    {
                        guildNode: e,
                        setRef: eL.setNodeRef,
                        draggable: !0,
                        sorting: el,
                        onDragStart: ea,
                        onDragEnd: es
                    },
                    e.id
                );
            default:
                return null;
        }
    }
    (0, w.Z)(eL.scrollToGuild);
    let ey = o.getRoots(),
        ej = (0, v.Z)(),
        eD = (0, b.U)(),
        ew = ei.map((e) =>
            (0, i.jsx)(
                H.Z,
                {
                    id: e.id,
                    name: e.name,
                    icon: e.icon
                },
                e.id
            )
        );
    return (0, i.jsx)(E.Gt, {
        value: eA,
        children: (0, i.jsx)(g.ThemeProvider, {
            theme: s,
            children: (e) =>
                (0, i.jsx)('nav', {
                    className: a()(en.wrapper, r, e, { [en.hidden]: C }),
                    'aria-label': et.Z.Messages.GUILDS_BAR_A11Y_LABEL,
                    children: (0, i.jsxs)('ul', {
                        ref: ex,
                        ...eS,
                        ...ev,
                        role: 'tree',
                        className: en.tree,
                        children: [
                            (0, i.jsx)(U.Z, {
                                ref: ed,
                                isVisible: eL.isItemVisible,
                                onJumpTo: eL.handleJumpToGuild,
                                className: en.unreadMentionsIndicatorTop,
                                barClassName: en.unreadMentionsBar
                            }),
                            (0, i.jsxs)(g.AdvancedScrollerNone, {
                                className: a()({
                                    [en.scroller]: !0,
                                    [en.scrolling]: eZ
                                }),
                                ref: eL.scrollerRef,
                                onScroll: eL.handleScroll,
                                children: [
                                    (0, i.jsx)(z.u, {}),
                                    ej ? (0, i.jsx)(Z.Z, {}) : null,
                                    (0, i.jsx)(B.Z, {}),
                                    (0, i.jsx)(Y.Z, { isOnHubVerificationRoute: eR }),
                                    (0, i.jsx)(G.Z, {}),
                                    eD,
                                    m.map((e) => (0, i.jsx)($.Z, { guildId: e }, e)),
                                    (0, i.jsx)(J.Z, { onActivate: eP }),
                                    (0, i.jsx)(K.Z, {}),
                                    (0, i.jsx)('div', {
                                        'aria-label': et.Z.Messages.SERVERS,
                                        children: ey.map(eO)
                                    }),
                                    ew,
                                    n
                                        ? null
                                        : (0, i.jsx)(V.Z, {
                                              disableTooltip: h.length > 0,
                                              lastTargetNode: ey[ey.length - 1]
                                          }),
                                    n || eC
                                        ? null
                                        : (0, i.jsx)(F.Z, {
                                              ref: eL.guildDiscoveryRef,
                                              selected: eM
                                          }),
                                    (0, i.jsx)(q.Z, {}),
                                    t
                                        ? null
                                        : (0, i.jsxs)(i.Fragment, {
                                              children: [(0, i.jsx)(K.Z, {}), (0, i.jsx)(k.Z, {})]
                                          })
                                ]
                            }),
                            !n && eC && null != eE
                                ? (0, i.jsx)(W.LW, {
                                      hideGradient: ep,
                                      children: (0, i.jsx)(eE, {
                                          children: (e) => {
                                              let { onClick: t } = e;
                                              return (0, i.jsx)(F.Z, {
                                                  ref: eL.guildDiscoveryRef,
                                                  selected: eM,
                                                  className: en.fixedDiscoveryIcon,
                                                  onClick: t
                                              });
                                          }
                                      })
                                  })
                                : !n && eC
                                  ? (0, i.jsx)(W.LW, {
                                        hideGradient: ep,
                                        children: (0, i.jsx)(F.Z, {
                                            ref: eL.guildDiscoveryRef,
                                            selected: eM,
                                            className: en.fixedDiscoveryIcon
                                        })
                                    })
                                  : null,
                            (0, i.jsx)(U.Z, {
                                reverse: !0,
                                ref: eh,
                                isVisible: eL.isItemVisible,
                                onJumpTo: eL.handleJumpToGuild,
                                className: a()(en.unreadMentionsIndicatorBottom, { [en.unreadMentionsFixedFooter]: !n && eC }),
                                barClassName: en.unreadMentionsBar
                            })
                        ]
                    })
                })
        })
    });
}
t.Z = l.memo(
    function (e) {
        let t = (0, C.Z)('guildsnav');
        return (0, i.jsx)(d.bG, {
            navigator: t,
            children: (0, i.jsx)(ec, { ...e })
        });
    },
    (e, t) => !1 === t.isVisible || (0, _.Z)(e, t)
);
