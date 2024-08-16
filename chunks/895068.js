n.d(t, {
    Bj: function () {
        return a;
    },
    ZP: function () {
        return Z;
    },
    s: function () {
        return v;
    }
}),
    n(47120);
var i,
    a,
    s,
    r,
    l = n(735250),
    o = n(470079),
    c = n(143927),
    d = n(481060),
    u = n(110924),
    _ = n(970606),
    E = n(17845),
    h = n(945124),
    m = n(231467),
    I = n(931515),
    g = n(207796),
    p = n(526282),
    T = n(777734),
    S = n(976757),
    f = n(981631),
    C = n(689938),
    N = n(266489);
let A = 56;
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'default';
    return e === g.v0.SAVED_GUILDS ? 'saved_guilds' : t;
}
function Z(e) {
    let { width: t, isAnimating: n, variant: i = 'default', onScroll: a } = e,
        { loaded: s, clans: r, searchResult: v, searchCriteria: Z } = (0, I.Qc)(null, 'saved_guilds' === i),
        L = (0, g.GN)((e) => e.selectedTraits, c.Z),
        O = (0, u.Z)(v),
        R = Math.min(null != t ? t : 1024, 2000),
        x = o.useMemo(() => {
            let e = R / 256,
                t = R / 376,
                n = R / e,
                i = R / t;
            return i > 360 ? Math.floor(t - (t - e) / 2) : n < 240 ? Math.max(e, t) : e;
        }, [R]);
    o.useEffect(() => {
        if (null != v && !!(0, S.Pw)(v))
            (!(null != O && (0, S.Pw)(O)) || !(O.loadedAt >= v.loadedAt)) &&
                (0, _.Oe)(
                    v.items.map((e) => e.id),
                    'top_picks',
                    Z
                );
    }, [Z, v, O, n]);
    let b = o.useMemo(
            () =>
                (function (e, t, n) {
                    if (null == e) return [];
                    switch (n) {
                        case 'saved_guilds':
                            return [
                                {
                                    section: 'top_picks',
                                    items: e.slice(0, t),
                                    sectionHeight: 16,
                                    itemHeight: 400,
                                    header: null,
                                    subtitle: null
                                },
                                {
                                    section: 'other_guilds',
                                    items: e.slice(t),
                                    sectionHeight: 16,
                                    itemHeight: 400,
                                    header: null
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
                                {
                                    section: 'top_picks',
                                    items: e.slice(0, t),
                                    sectionHeight: A,
                                    itemHeight: 400,
                                    props: { className: N.glassBackgroundTop },
                                    header: C.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
                                    subtitle: C.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
                                },
                                {
                                    section: 'other_guilds',
                                    items: e.slice(t),
                                    sectionHeight: A,
                                    itemHeight: 400,
                                    props: { className: N.glassBackground },
                                    header: C.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE
                                }
                            ];
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
                                    sectionHeight: A,
                                    itemHeight: 400,
                                    header: C.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
                                    subtitle: C.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
                                },
                                {
                                    section: 'other_guilds',
                                    items: e.slice(t),
                                    sectionHeight: 0,
                                    itemHeight: 400
                                }
                            ];
                        case 'default':
                            return [
                                {
                                    section: 'top_picks',
                                    items: e.slice(0, t),
                                    sectionHeight: A,
                                    itemHeight: 400,
                                    header: C.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
                                    subtitle: C.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
                                },
                                {
                                    section: 'other_guilds',
                                    items: e.slice(t),
                                    sectionHeight: A,
                                    itemHeight: 400,
                                    header: C.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE
                                }
                            ];
                        default:
                            return [];
                    }
                })(r, x, i),
            [r, x, i]
        ),
        P = o.useMemo(() => new Set(Z.games), [Z.games]),
        M = o.useCallback(
            (e, t, n, a) => {
                var s;
                let { items: r, section: o } = b[e];
                if ('upsell' === o || 'hero' === o) return null;
                let c =
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
                            x +
                        t,
                    d = r[t];
                return (0, l.jsx)(
                    m.ZP,
                    {
                        clan: d,
                        index: c,
                        affinity: null !== (s = d.affininty) && void 0 !== s ? s : (0, h.y)(d, Z),
                        traitsToHighlight: L,
                        className: N.card,
                        style: n,
                        source: f.jXE.DISCOVER_SEARCH,
                        prioritizedGameIds: P,
                        onlyAnimateIconOnHover: !0
                    },
                    a
                );
            },
            [Z, b, L, P, x, i]
        ),
        D = o.useCallback(
            (e, t) => {
                let { header: n, subtitle: i, section: a } = b[e];
                switch (a) {
                    case 'upsell':
                        return (0, l.jsx)(p.Z, {});
                    case 'hero':
                        return (0, l.jsx)(E.Z, {
                            title: C.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE,
                            description: C.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                            className: N.hero,
                            background: (0, l.jsx)('div', {
                                className: N.bannerImageBackground,
                                children: (0, l.jsx)('div', { className: N.bannerImageGradient })
                            })
                        });
                    case 'top_picks':
                        return (0, l.jsx)('div', {
                            className: N.topPicksSection,
                            children: (0, l.jsx)(T.Z, {
                                style: {
                                    ...t,
                                    marginTop: 8,
                                    position: 'absolute'
                                },
                                title: n,
                                subtitle: i
                            })
                        });
                    default:
                        if (null === n) return null;
                        return (0, l.jsx)(T.Z, {
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
            [b]
        );
    return 0 === r.length && s && 'saved_guilds' === i
        ? (0, l.jsxs)('div', {
              className: N.emptySavedGuilds,
              children: [
                  (0, l.jsx)(d.Heading, {
                      variant: 'heading-md/medium',
                      color: 'header-primary',
                      children: C.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_TITLE
                  }),
                  (0, l.jsx)(d.Text, {
                      variant: 'text-sm/medium',
                      color: 'header-secondary',
                      children: C.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_DESCRIPTION
                  })
              ]
          })
        : 0 !== r.length && s
          ? (0, l.jsx)(l.Fragment, {
                children: (0, l.jsx)('div', {
                    className: N.masonryListContainer,
                    children: (0, l.jsx)(d.MasonryList, {
                        className: N.masonryList,
                        sections: b.map((e) => {
                            let { items: t } = e;
                            return t.length;
                        }),
                        columns: x,
                        itemGutter: 16,
                        paddingHorizontal: 32,
                        paddingVertical: 'upsell' === i ? 64 : 0,
                        removeEdgeItemGutters: !0,
                        renderItem: M,
                        renderSection: D,
                        getSectionHeight: (e) => b[e].sectionHeight,
                        getItemKey: (e, t) => b[e].items[t].id,
                        getItemHeight: (e) => b[e].itemHeight,
                        getSectionProps: (e) => {
                            var t;
                            return null !== (t = b[e].props) && void 0 !== t ? t : {};
                        },
                        chunkSize: 24,
                        maxContentWidth: 2000,
                        onScroll: a
                    })
                })
            })
          : null;
}
((s = i || (i = {})).UPSELL = 'upsell'), (s.TOP_PICKS = 'top_picks'), (s.OTHER_GUILDS = 'other_guilds'), (s.HERO = 'hero'), ((r = a || (a = {})).DEFAULT = 'default'), (r.UPSELL = 'upsell'), (r.GLOBAL_DISCOVERY = 'global_discovery'), (r.SAVED_GUILDS = 'saved_guilds');
