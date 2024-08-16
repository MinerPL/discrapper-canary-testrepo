n.d(t, {
    Z: function () {
        return Z;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(963202),
    l = n(117496),
    o = n(702646),
    c = n(540742),
    d = n(766219),
    u = n(801543),
    _ = n(979233),
    E = n(88693),
    h = n(611928),
    m = n(680180),
    I = n(791734),
    g = n(341789),
    p = n(591433),
    T = n(282773),
    S = n(143021),
    f = n(775260),
    C = n(49898),
    N = n(731455),
    A = n(689938),
    v = n(645664);
function Z() {
    let e = a.useRef((0, l.P)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: Z } = (0, _.M)(),
        { tabs: L, selectedTab: O, setSelectedTab: R } = (0, f.Y)(),
        x = (0, d.lg)(O),
        b = !C.MU.has(O),
        P = (0, r.iN)('global_discovery_servers_layout'),
        { searchBarState: M, onTabsAvailableWidthChange: D, onCollapsedSearchBarClick: y, onSearchBarBlur: j, tabsClassName: U } = (0, E.U)({ isSearchBarVisible: b }),
        { searchQuery: G, onSearchTextChange: k, onClearSearch: w, onSearchSubmit: B, isSearchVisible: H } = (0, S.H)({ loadId: e.current }),
        V = a.useCallback(
            (e) => {
                R(e), H && w();
            },
            [H, w, R]
        ),
        F = a.useMemo(
            () =>
                H
                    ? L.filter((e) => {
                          let { id: t } = e;
                          return !C.MU.has(t);
                      })
                    : L,
            [L, H]
        ),
        Y = a.useRef(new u.Z(x)),
        { onGuildCardSeen: W, onGuildCardClick: z } = (0, T.H)({
            guildDiscoveryCardSeenManager: Y.current,
            loadId: e.current
        });
    a.useEffect(() => {
        Y.current.flushSeenGuilds(e.current);
    }, [x]),
        a.useEffect(() => {
            Z();
        }, [O, Z]),
        a.useEffect(() => {
            !H && c.B.setState({ searchScrollPosition: null });
        }, [H]);
    let K = a.useMemo(() => {
        switch (O) {
            case C.vf.HUBS:
                return null;
            case C.vf.GUILDS:
                if (P) return (0, i.jsx)(o.Z, {});
                return null;
            default:
                return (0, i.jsx)(m.Z, {
                    query: G,
                    placeholder: x === N.Hk ? A.Z.Messages.SEARCH : A.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({ title: (0, d.vb)(O) }),
                    onTextChange: k,
                    onClear: w,
                    onSubmit: B,
                    onCollapsedClick: y,
                    state: M,
                    onBlur: j
                });
        }
    }, [O, P, G, x, k, w, B, y, M, j]);
    return (0, i.jsxs)('div', {
        className: v.container,
        children: [
            (0, i.jsxs)(h.ZP, {
                className: H ? v.search : void 0,
                children: [
                    !H && (0, i.jsx)(h.z6, { scrollPosition: n }),
                    (0, i.jsx)(h.aV, {
                        icon: H ? s.ArrowLargeLeftIcon : s.ServerIcon,
                        onClick: H ? w : void 0
                    }),
                    (0, i.jsx)(I.Z, {
                        className: U,
                        tabs: F,
                        selectedTab: H ? null : O,
                        onTabSelect: V,
                        onAvailableWidthChange: D
                    }),
                    K
                ]
            }),
            H
                ? (0, i.jsx)(p.Z, {
                      loadId: e.current,
                      onGuildCardClick: z,
                      onGuildCardSeen: W
                  })
                : (0, i.jsx)(g.Z, {
                      loadId: e.current,
                      selectedTab: O,
                      onScroll: t,
                      onGuildCardClick: z,
                      onGuildCardSeen: W
                  })
        ]
    });
}
