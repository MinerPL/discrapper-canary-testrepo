n.d(t, {
    Bj: function () {
        return s;
    },
    ZP: function () {
        return v;
    }
}), n(47120);
var i, s, a, r, l = n(735250), o = n(470079), c = n(920906), d = n(143927), u = n(481060), _ = n(110924), E = n(393903), h = n(638730), I = n(970606), m = n(945124), p = n(231467), g = n(931515), T = n(207796), S = n(526282), C = n(777734), N = n(976757), f = n(981631), A = n(689938), Z = n(920040);
let L = 40;
function v(e) {
    let {
            width: t,
            isAnimating: n,
            variant: i = 'default',
            onScroll: s
        } = e, {
            loaded: a,
            clans: r,
            searchResult: v,
            searchCriteria: O
        } = (0, g.Qc)(), R = (0, T.GN)(e => e.selectedTraits, d.Z), x = (0, _.Z)(v), [P, b] = o.useState(0), M = o.useMemo(() => ({ height: P }), [P]), D = (0, c.useSpring)({
            opacity: P > 0 ? 1 : 0,
            config: c.config.stiff
        }), y = 'upsell' === i, j = Math.min(null != t ? t : 1024, 2000), U = o.useMemo(() => {
            let e = j / 256, t = j / 376, n = j / e, i = j / t;
            return i > 360 ? Math.floor(t - (t - e) / 2) : n < 240 ? Math.max(e, t) : e;
        }, [j]), G = o.useCallback(e => {
            if (null == e) {
                b(0);
                return;
            }
            b(e.getBoundingClientRect().y + 8 + 400 + 64);
        }, []), w = (0, E.y)(G), k = o.useCallback(e => {
            G(w.current), null != e && (null == s || s(e));
        }, [
            G,
            w,
            s
        ]), B = (0, h.h)(k, 10, [k], {
            leading: !0,
            trailing: !0
        });
    o.useEffect(() => {
        if (null != v && !!(0, N.Pw)(v))
            (!(null != x && (0, N.Pw)(x)) || !(x.loadedAt >= v.loadedAt)) && (0, I.Oe)(v.items.map(e => e.id), 'top_picks', O);
    }, [
        O,
        v,
        x,
        k,
        n
    ]), o.useEffect(() => {
        !n && (0, N.Pw)(v) && setTimeout(() => k());
    }, [
        k,
        n,
        v
    ]);
    let H = o.useMemo(() => function (e, t, n) {
            if (null == e)
                return [];
            switch (n) {
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
                        sectionHeight: L,
                        itemHeight: 400,
                        props: { className: Z.glassBackgroundTop },
                        header: A.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
                        subtitle: A.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
                    },
                    {
                        section: 'other_guilds',
                        items: e.slice(t),
                        sectionHeight: 0,
                        itemHeight: 400,
                        props: { className: Z.glassBackground }
                    }
                ];
            case 'default':
                return [
                    {
                        section: 'top_picks',
                        items: e.slice(0, t),
                        sectionHeight: L,
                        itemHeight: 400,
                        header: A.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
                        subtitle: A.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
                    },
                    {
                        section: 'other_guilds',
                        items: e.slice(t),
                        sectionHeight: L,
                        itemHeight: 400,
                        header: A.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE
                    }
                ];
            default:
                return [];
            }
        }(r, U, i), [
            r,
            U,
            i
        ]), V = o.useMemo(() => new Set(O.games), [O.games]), F = o.useCallback((e, t, n, i) => {
            var s;
            let {
                items: a,
                section: r
            } = H[e];
            if ('upsell' === r)
                return null;
            let o = a[t];
            return (0, l.jsx)(p.ZP, {
                clan: o,
                affinity: null !== (s = o.affininty) && void 0 !== s ? s : (0, m.y)(o, O),
                traitsToHighlight: R,
                className: Z.card,
                style: n,
                source: f.jXE.DISCOVER_SEARCH,
                prioritizedGameIds: V,
                onlyAnimateIconOnHover: !0
            }, i);
        }, [
            O,
            H,
            R,
            V
        ]), Y = o.useCallback((e, t) => {
            let {
                header: n,
                subtitle: i,
                section: s
            } = H[e];
            switch (s) {
            case 'upsell':
                return (0, l.jsx)(S.Z, {});
            case 'top_picks':
                return (0, l.jsx)(C.Z, {
                    ref: w,
                    icon: (0, l.jsx)(u.TrophyIcon, { color: 'currentColor' }),
                    style: {
                        ...t,
                        marginTop: 8,
                        position: 'absolute'
                    },
                    title: n,
                    subtitle: i
                });
            default:
                if (null === n)
                    return null;
                return (0, l.jsx)(C.Z, {
                    title: n,
                    subtitle: i,
                    style: {
                        ...t,
                        position: 'absolute'
                    }
                });
            }
        }, [
            H,
            w
        ]);
    return 0 !== r.length && a ? (0, l.jsx)(l.Fragment, {
        children: (0, l.jsxs)('div', {
            className: Z.masonryListContainer,
            children: [
                !y && (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(c.animated.div, {
                        className: Z.masonryListGradient,
                        style: {
                            ...D,
                            ...M
                        }
                    })
                }),
                (0, l.jsx)(u.MasonryList, {
                    className: Z.masonryList,
                    sections: H.map(e => {
                        let {items: t} = e;
                        return t.length;
                    }),
                    columns: U,
                    itemGutter: 16,
                    paddingHorizontal: 16,
                    paddingVertical: 'upsell' === i ? 64 : 0,
                    removeEdgeItemGutters: !0,
                    renderItem: F,
                    renderSection: Y,
                    getSectionHeight: e => H[e].sectionHeight,
                    getItemKey: (e, t) => H[e].items[t].id,
                    getItemHeight: e => H[e].itemHeight,
                    getSectionProps: e => {
                        var t;
                        return null !== (t = H[e].props) && void 0 !== t ? t : {};
                    },
                    chunkSize: 24,
                    onScroll: B,
                    maxContentWidth: 2000
                })
            ]
        })
    }) : null;
}
(a = i || (i = {})).UPSELL = 'upsell', a.TOP_PICKS = 'top_picks', a.OTHER_GUILDS = 'other_guilds', (r = s || (s = {})).DEFAULT = 'default', r.UPSELL = 'upsell';
