n.d(t, {
    Bj: function () {
        return a;
    },
    s: function () {
        return b;
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
    _ = n(442837),
    E = n(481060),
    h = n(110924),
    m = n(970606),
    I = n(594174),
    g = n(823379),
    p = n(51144),
    T = n(945124),
    S = n(231467),
    C = n(301544),
    f = n(931515),
    N = n(286083),
    A = n(207796),
    v = n(777734),
    L = n(976757),
    Z = n(981631),
    R = n(689938),
    O = n(266489),
    x = n(882008);
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'default';
    return e === A.v0.SAVED_GUILDS ? 'saved_guilds' : t;
}
function P(e) {
    var t;
    let { clan: n, entranceDelay: i = 0, hide: a, searchCriteria: s, className: r, source: o, ...c } = e;
    return (0, l.jsx)('div', {
        style: {
            opacity: a ? 0 : void 0,
            animationDelay: ''.concat(i, 'ms')
        },
        className: O.animatedCard,
        children: (0, l.jsx)(
            S.ZP,
            {
                clan: n,
                affinity: null !== (t = n.affininty) && void 0 !== t ? t : (0, T.y)(n, s),
                className: d()(O.card, r),
                source: null != o ? o : Z.jXE.DISCOVER_SEARCH,
                onlyAnimateIconOnHover: !0,
                ...c
            },
            n.id
        )
    });
}
((s = i || (i = {})).TOP_PICKS = 'top_picks'), (s.OTHER_GUILDS = 'other_guilds'), (s.PAGINATION = 'pagination'), (s.HEADER_SPACER = 'header_spacer'), ((r = a || (a = {})).DEFAULT = 'default'), (r.GLOBAL_DISCOVERY = 'global_discovery'), (r.SAVED_GUILDS = 'saved_guilds');
t.ZP = o.memo(function (e) {
    var t, n, i, a, s, r;
    let { width: c, paddingVertical: T = 16, paddingHorizontal: S = 32, variant: Z = 'default', onUpdatePage: b } = e,
        M = o.useMemo(() => Math.max(Math.min(null != c ? c : 1024, 1300) - 2 * S, 0), [c, S]),
        D = o.useMemo(() => {
            if (0 === M) return 1;
            let e = M / 256,
                t = M / 376,
                n = M / e,
                i = M / t;
            return i > 360 ? Math.max(Math.floor(t - (t - e) / 2), 1) : n < 240 ? Math.max(Math.max(e, t), 1) : Math.max(e, 1);
        }, [M]),
        { loaded: y, clans: j, searchResult: U, searchCriteria: G, hasError: w } = (0, f.ML)(D, 'saved_guilds' === Z),
        k = (0, A.GN)((e) => e.selectedTraits, u.Z),
        B = (0, A.GN)((e) => e.selectedGames, u.Z),
        H = (0, h.Z)(U),
        { currentPage: V, updatePage: F, totalItems: Y, pageSize: W } = (0, N.$)(),
        z = (0, _.e7)([I.default], () => I.default.getCurrentUser());
    o.useEffect(() => {
        if (null != U && !!(0, L.Pw)(U)) (!(null != H && (0, L.Pw)(H)) || !(H.loadedAt >= U.loadedAt)) && (0, m.Oe)('top_picks', G);
    }, [G, U, H]);
    let K = B.length > 0 || k.length > 0 ? R.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE : null != z ? R.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE_NO_PREFERENCES.format({ name: p.ZP.getName(z) }) : '';
    let q =
            ((t = j),
            (n = D),
            (i = Z),
            (a = V),
            (s = K),
            (r = y),
            o.useMemo(() => {
                if (null == t) return [];
                switch (i) {
                    case 'saved_guilds':
                        return [
                            {
                                section: 'header_spacer',
                                items: [],
                                sectionHeight: 0,
                                itemHeight: 400,
                                header: null
                            },
                            {
                                section: 'other_guilds',
                                items: t,
                                sectionHeight: 16,
                                itemHeight: 400,
                                header: null,
                                skeletonCount: 4 * n
                            }
                        ];
                    case 'default':
                    case 'global_discovery':
                        return [
                            {
                                section: 'top_picks',
                                items: t.slice(0, n),
                                itemHeight: 400,
                                sectionHeight: 24,
                                header: a > 1 ? R.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE : R.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
                                props: { style: { paddingTop: 8 } },
                                subtitle: a > 1 ? void 0 : s,
                                skeletonCount: n
                            },
                            !r || t.length > n
                                ? {
                                      section: 'other_guilds',
                                      items: t.slice(n),
                                      itemHeight: 400,
                                      sectionHeight: a > 1 ? 0 : 24,
                                      props: { style: { paddingTop: 16 } },
                                      header: a > 1 ? void 0 : R.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE,
                                      skeletonCount: 4 * n
                                  }
                                : null,
                            {
                                section: 'pagination',
                                items: [],
                                itemHeight: 0,
                                sectionHeight: 86
                            }
                        ].filter(g.lm);
                    default:
                        return [];
                }
            }, [t, i, n, a, s, r])),
        Q = o.useCallback(
            (e) => {
                F(e),
                    (0, m.Lx)({
                        fromPage: V,
                        toPage: e
                    }),
                    null == b || b();
            },
            [F, b, V]
        ),
        [, X] = o.useState(new Set()),
        J = o.useMemo(() => new Set(G.games), [G.games]),
        $ = o.useCallback(
            (e, t, n, i) => {
                let { items: a } = q[e],
                    s = (V - 1) * W + (e * D + t),
                    r = a[t];
                null != r && n
                    ? (i.current = setTimeout(
                          () =>
                              X((e) => {
                                  let t = new Set(e);
                                  return (
                                      t.add(r.id),
                                      t.size > e.size &&
                                          (0, m.CK)({
                                              guildId: r.id,
                                              position: s
                                          }),
                                      t
                                  );
                              }),
                          2000
                      ))
                    : clearTimeout(i.current);
            },
            [q, X, D, V, W]
        ),
        ee = o.useContext(E.AccessibilityPreferencesContext).reducedMotion.enabled,
        et = o.useCallback(
            (e, t, n) => {
                let { items: i } = q[e],
                    a = e * D + t,
                    s = (V - 1) * W + a,
                    r = i[t],
                    o = ee ? 0 : Math.min(125 * Math.floor(a / D) + (a % D) * 25, 1000);
                return (0, l.jsx)(
                    P,
                    {
                        clan: r,
                        index: a,
                        position: s,
                        searchCriteria: G,
                        traitsToHighlight: k,
                        prioritizedGameIds: J,
                        onVisibilityChange: (n, i) => $(e, t, n, i),
                        hide: n,
                        entranceDelay: o
                    },
                    ''.concat(r.id, ':').concat(Z)
                );
            },
            [q, D, V, W, ee, Z, G, k, J, $]
        ),
        en = o.useCallback((e) => (0, l.jsx)(C.Z, { style: { transform: 'translateY(-6px)' } }, e), []),
        ei = o.useCallback(
            (e) => {
                let { header: t, subtitle: n, section: i } = q[e];
                switch (i) {
                    case 'top_picks':
                        return (0, l.jsx)('div', {
                            className: O.topPicksSection,
                            children: (0, l.jsx)(v.Z, {
                                title: t,
                                subtitle: n
                            })
                        });
                    case 'pagination':
                        return (0, l.jsx)(l.Fragment, {
                            children:
                                Y > W &&
                                (0, l.jsx)(E.Paginator, {
                                    className: d()(O.paginationInput),
                                    totalCount: Y,
                                    pageSize: W,
                                    disablePaginationGap: !0,
                                    hideMaxPage: !0,
                                    currentPage: V,
                                    onPageChange: Q
                                })
                        });
                    case 'header_spacer':
                        return (0, l.jsx)('div', { className: O.headerSpacer });
                    default:
                        if (null == t) return null;
                        return (0, l.jsx)(v.Z, {
                            title: t,
                            subtitle: n
                        });
                }
            },
            [V, Q, W, q, Y]
        ),
        ea = o.useMemo(
            () =>
                y
                    ? q.map((e) => {
                          let { items: t } = e;
                          return t.length;
                      })
                    : q.map((e) => {
                          let { skeletonCount: t } = e;
                          return null != t ? t : 0;
                      }),
            [y, q]
        );
    return 0 === j.length && y
        ? (0, l.jsx)('div', {
              className: O.emptySavedGuilds,
              children:
                  'saved_guilds' === Z
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(E.Heading, {
                                    variant: 'heading-md/medium',
                                    color: 'header-primary',
                                    children: R.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_TITLE
                                }),
                                (0, l.jsx)(E.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: R.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_DESCRIPTION
                                })
                            ]
                        })
                      : (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(E.Heading, {
                                    variant: 'heading-md/medium',
                                    color: 'header-primary',
                                    children: R.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_TITLE
                                }),
                                (0, l.jsx)(E.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: R.Z.Messages.CLAN_DISCOVERY_EMPTY_LIST_DESCRIPTION
                                })
                            ]
                        })
          })
        : w && 0 === j.length
          ? (0, l.jsxs)('div', {
                className: O.errorPage,
                children: [
                    (0, l.jsx)('img', {
                        alt: '',
                        src: x,
                        className: O.errorImage
                    }),
                    (0, l.jsx)(E.Heading, {
                        variant: 'heading-xl/semibold',
                        children: R.Z.Messages.CLAN_DISCOVERY_ERROR_TITLE
                    }),
                    (0, l.jsx)(E.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: R.Z.Messages.CLAN_DISCOVERY_ERROR_DESCRIPTION
                    })
                ]
            })
          : (0, l.jsx)('div', {
                className: O.sectionContainer,
                style: {
                    paddingTop: T,
                    paddingLeft: S,
                    paddingRight: S,
                    paddingBottom: T,
                    width: 'calc(100% - '.concat(2 * S, 'px)'),
                    gap: ''.concat(16, 'px')
                },
                children: ea.map((e, t) => {
                    var n, i;
                    let a = q[t],
                        s = ei(t);
                    return (0, l.jsxs)(
                        'div',
                        {
                            className: O.section,
                            style: { gap: ''.concat(16, 'px') },
                            children: [
                                null != s &&
                                    (0, l.jsx)('div', {
                                        ...a.props,
                                        className: d()(O.sectionHeader, null === (n = a.props) || void 0 === n ? void 0 : n.className),
                                        style: {
                                            height: ''.concat(a.sectionHeight, 'px'),
                                            ...(null === (i = a.props) || void 0 === i ? void 0 : i.style)
                                        },
                                        children: s
                                    }),
                                e > 0 &&
                                    (0, l.jsx)('div', {
                                        className: O.sectionContent,
                                        style: { gridTemplateColumns: 'repeat('.concat(D, ', minmax(252px, 1fr))') },
                                        children: Array.from({ length: e }).map((e, n) => {
                                            let i = ''.concat(t, '-').concat(n);
                                            return y ? et(t, n, null == c) : en(i);
                                        })
                                    })
                            ]
                        },
                        t
                    );
                })
            });
});
