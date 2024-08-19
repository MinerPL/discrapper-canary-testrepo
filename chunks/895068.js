n.d(t, {
    Bj: function () {
        return a;
    },
    ZP: function () {
        return b;
    },
    s: function () {
        return x;
    }
}),
    n(47120);
var i,
    a,
    s,
    r,
    l = n(735250),
    o = n(470079),
    c = n(120356),
    d = n.n(c),
    u = n(143927),
    _ = n(481060),
    h = n(110924),
    E = n(970606),
    m = n(17845),
    I = n(823379),
    g = n(945124),
    p = n(231467),
    T = n(301544),
    S = n(931515),
    f = n(286083),
    C = n(207796),
    N = n(526282),
    A = n(777734),
    v = n(976757),
    Z = n(981631),
    L = n(689938),
    O = n(266489);
let R = 56;
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'default';
    return e === C.v0.SAVED_GUILDS ? 'saved_guilds' : t;
}
function b(e) {
    let { width: t, isAnimating: n, variant: i = 'default', onScroll: a } = e,
        s = Math.min(null != t ? t : 1024, 2000),
        r = o.useRef(null),
        c = o.useMemo(() => {
            let e = s / 256,
                t = s / 376,
                n = s / e,
                i = s / t;
            return i > 360 ? Math.floor(t - (t - e) / 2) : n < 240 ? Math.max(e, t) : e;
        }, [s]),
        { loaded: x, clans: b, searchResult: P, searchCriteria: M } = (0, S.ML)(c, 'saved_guilds' === i),
        D = (0, C.GN)((e) => e.selectedTraits, u.Z),
        y = (0, h.Z)(P),
        { currentPage: j, updatePage: U, totalItems: G, pageSize: k } = (0, f.$)();
    o.useEffect(() => {
        if (null != P && !!(0, v.Pw)(P))
            (!(null != y && (0, v.Pw)(y)) || !(y.loadedAt >= P.loadedAt)) &&
                (0, E.Oe)(
                    P.items.map((e) => e.id),
                    'top_picks',
                    M
                );
    }, [M, P, y, n]);
    let w = o.useMemo(
            () =>
                (function (e, t, n, i) {
                    if (null == e) return [];
                    switch (n) {
                        case 'saved_guilds':
                            return [
                                {
                                    section: 'other_guilds',
                                    items: e.slice(t),
                                    sectionHeight: 16,
                                    itemHeight: 400,
                                    header: null,
                                    skeletonCount: 4 * t
                                },
                                {
                                    section: 'pagination',
                                    items: [],
                                    sectionHeight: 86,
                                    itemHeight: 0
                                }
                            ];
                        case 'global_discovery':
                            return [
                                {
                                    section: 'hero',
                                    items: [e[0]],
                                    sectionHeight: 270,
                                    itemHeight: 0
                                },
                                1 === i
                                    ? {
                                          section: 'top_picks',
                                          items: e.slice(0, t),
                                          sectionHeight: R,
                                          itemHeight: 400,
                                          props: { className: O.glassBackgroundTop },
                                          header: L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
                                          subtitle: L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE,
                                          skeletonCount: t
                                      }
                                    : null,
                                {
                                    section: 'other_guilds',
                                    items: e.slice(t),
                                    sectionHeight: R,
                                    itemHeight: 400,
                                    props: { className: O.glassBackground },
                                    header: L.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE,
                                    skeletonCount: 4 * t
                                },
                                {
                                    section: 'pagination',
                                    items: [],
                                    sectionHeight: 86,
                                    itemHeight: 0
                                }
                            ].filter(I.lm);
                        case 'upsell':
                            return [
                                {
                                    section: 'upsell',
                                    items: [e[0]],
                                    sectionHeight: 268,
                                    itemHeight: 0
                                },
                                {
                                    section: 'top_picks',
                                    items: e.slice(0, t),
                                    sectionHeight: R,
                                    itemHeight: 400,
                                    header: L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
                                    subtitle: L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE,
                                    skeletonCount: t
                                },
                                {
                                    section: 'other_guilds',
                                    items: e.slice(t),
                                    sectionHeight: 0,
                                    itemHeight: 400,
                                    skeletonCount: 4 * t
                                },
                                {
                                    section: 'pagination',
                                    items: [],
                                    sectionHeight: 86,
                                    itemHeight: 0
                                }
                            ].filter(I.lm);
                        case 'default':
                            return [
                                1 === i
                                    ? {
                                          section: 'top_picks',
                                          items: e.slice(0, t),
                                          sectionHeight: R,
                                          itemHeight: 400,
                                          header: L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
                                          subtitle: L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE,
                                          skeletonCount: t
                                      }
                                    : null,
                                {
                                    section: 'other_guilds',
                                    items: e.slice(t),
                                    sectionHeight: R,
                                    itemHeight: 400,
                                    header: L.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE,
                                    skeletonCount: 4 * t
                                },
                                {
                                    section: 'pagination',
                                    items: [],
                                    sectionHeight: 86,
                                    itemHeight: 0
                                }
                            ].filter(I.lm);
                        default:
                            return [];
                    }
                })(b, c, i, j),
            [b, c, i, j]
        ),
        B = o.useCallback(
            (e) => {
                var t;
                null === (t = r.current) ||
                    void 0 === t ||
                    t.scrollToTop({
                        callback: () => {
                            U(e);
                        }
                    });
            },
            [U]
        ),
        H = o.useMemo(() => new Set(M.games), [M.games]),
        V = o.useCallback(
            (e, t, n, a) => {
                var s;
                let { items: r, section: o } = w[e];
                if ('upsell' === o || 'hero' === o) return null;
                let d =
                        (e -
                            (function (e) {
                                switch (e) {
                                    case 'upsell':
                                    case 'saved_guilds':
                                        return 0;
                                    case 'global_discovery':
                                    case 'default':
                                        return 1;
                                }
                            })(i)) *
                            c +
                        t,
                    u = r[t];
                return (0, l.jsx)(
                    p.ZP,
                    {
                        clan: u,
                        index: d,
                        affinity: null !== (s = u.affininty) && void 0 !== s ? s : (0, g.y)(u, M),
                        traitsToHighlight: D,
                        className: O.card,
                        style: n,
                        source: Z.jXE.DISCOVER_SEARCH,
                        prioritizedGameIds: H,
                        onlyAnimateIconOnHover: !0
                    },
                    a
                );
            },
            [M, w, D, H, c, i]
        ),
        F = o.useCallback((e, t, n, i) => (0, l.jsx)(T.Z, { style: n }, i), []),
        Y = o.useCallback(
            (e, t) => {
                let { header: n, subtitle: i, section: a } = w[e];
                switch (a) {
                    case 'upsell':
                        return (0, l.jsx)(N.Z, {});
                    case 'hero':
                        return (0, l.jsx)(m.Z, {
                            title: L.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE,
                            description: L.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                            className: O.hero,
                            background: (0, l.jsx)('div', {
                                className: O.bannerImageBackground,
                                children: (0, l.jsx)('div', { className: O.bannerImageGradient })
                            })
                        });
                    case 'top_picks':
                        return (0, l.jsx)('div', {
                            className: O.topPicksSection,
                            children: (0, l.jsx)(A.Z, {
                                style: {
                                    ...t,
                                    marginTop: 8,
                                    position: 'absolute'
                                },
                                title: n,
                                subtitle: i
                            })
                        });
                    case 'pagination':
                        return (0, l.jsx)(l.Fragment, {
                            children:
                                G > k &&
                                (0, l.jsx)(_.Paginator, {
                                    className: d()(O.paginationInput),
                                    totalCount: G,
                                    pageSize: k,
                                    disablePaginationGap: !0,
                                    hideMaxPage: !0,
                                    currentPage: j,
                                    onPageChange: B
                                })
                        });
                    default:
                        if (null === n) return null;
                        return (0, l.jsx)(A.Z, {
                            title: n,
                            subtitle: i,
                            style: {
                                ...t,
                                marginTop: 8,
                                position: 'absolute'
                            }
                        });
                }
            },
            [j, B, k, w, G]
        );
    if (0 === b.length && x && 'saved_guilds' === i)
        return (0, l.jsxs)('div', {
            className: O.emptySavedGuilds,
            children: [
                (0, l.jsx)(_.Heading, {
                    variant: 'heading-md/medium',
                    color: 'header-primary',
                    children: L.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_TITLE
                }),
                (0, l.jsx)(_.Text, {
                    variant: 'text-sm/medium',
                    color: 'header-secondary',
                    children: L.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_DESCRIPTION
                })
            ]
        });
    if (0 === b.length && x)
        return (0, l.jsxs)('div', {
            className: O.emptySavedGuilds,
            children: [
                (0, l.jsx)(_.Heading, {
                    variant: 'heading-md/medium',
                    color: 'header-primary',
                    children: L.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_TITLE
                }),
                (0, l.jsx)(_.Text, {
                    variant: 'text-sm/medium',
                    color: 'header-secondary',
                    children: L.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_DESCRIPTION
                })
            ]
        });
    let W = x
        ? w.map((e) => {
              let { items: t } = e;
              return t.length;
          })
        : w.map((e) => {
              let { skeletonCount: t } = e;
              return null != t ? t : 0;
          });
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsx)('div', {
            className: O.masonryListContainer,
            children: (0, l.jsx)(_.MasonryList, {
                ref: r,
                className: O.masonryList,
                sections: W,
                columns: c,
                itemGutter: 16,
                paddingHorizontal: 32,
                paddingVertical: 'upsell' === i ? 64 : 0,
                removeEdgeItemGutters: !0,
                renderItem: x ? V : F,
                renderSection: Y,
                getSectionHeight: (e) => w[e].sectionHeight,
                getItemKey: (e, t) => (x ? w[e].items[t].id : ''.concat(e, '-').concat(t)),
                getItemHeight: (e) => w[e].itemHeight,
                getSectionProps: (e) => {
                    var t;
                    return null !== (t = w[e].props) && void 0 !== t ? t : {};
                },
                chunkSize: 4 * c,
                maxContentWidth: 2000,
                onScroll: a
            })
        })
    });
}
((s = i || (i = {})).UPSELL = 'upsell'), (s.TOP_PICKS = 'top_picks'), (s.OTHER_GUILDS = 'other_guilds'), (s.HERO = 'hero'), (s.PAGINATION = 'pagination'), ((r = a || (a = {})).DEFAULT = 'default'), (r.UPSELL = 'upsell'), (r.GLOBAL_DISCOVERY = 'global_discovery'), (r.SAVED_GUILDS = 'saved_guilds');
