n.d(t, {
    Bj: function () {
        return r;
    },
    s: function () {
        return O;
    }
}),
    n(47120);
var i,
    r,
    a,
    l,
    s = n(200651),
    o = n(192379),
    c = n(120356),
    d = n.n(c),
    u = n(782690),
    h = n(442837),
    m = n(481060),
    p = n(110924),
    g = n(970606),
    f = n(216742),
    _ = n(859921),
    E = n(594174),
    I = n(823379),
    C = n(51144),
    v = n(945124),
    S = n(231467),
    N = n(301544),
    T = n(931515),
    x = n(286083),
    b = n(207796),
    A = n(777734),
    Z = n(976757),
    y = n(981631),
    L = n(388032),
    R = n(641388),
    P = n(882008);
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'default';
    return e === b.v0.SAVED_GUILDS ? 'saved_guilds' : t;
}
function j(e) {
    var t;
    let { clan: n, entranceDelay: i = 0, hide: r, searchCriteria: a, className: l, source: o, ...c } = e;
    return (0, s.jsx)('div', {
        style: {
            opacity: r ? 0 : void 0,
            animationDelay: ''.concat(i, 'ms')
        },
        className: R.animatedCard,
        children: (0, s.jsx)(
            S.ZP,
            {
                clan: n,
                affinity: null !== (t = n.affininty) && void 0 !== t ? t : (0, v.y)(n, a),
                className: d()(R.card, l),
                source: null != o ? o : y.jXE.DISCOVER_SEARCH,
                onlyAnimateIconOnHover: !0,
                ...c
            },
            n.id
        )
    });
}
((a = i || (i = {})).TOP_PICKS = 'top_picks'), (a.OTHER_GUILDS = 'other_guilds'), (a.PAGINATION = 'pagination'), (a.HEADER_SPACER = 'header_spacer'), ((l = r || (r = {})).DEFAULT = 'default'), (l.GLOBAL_DISCOVERY = 'global_discovery'), (l.SAVED_GUILDS = 'saved_guilds');
t.ZP = o.memo(function (e) {
    var t, n, i, r, a, l;
    let { width: c, paddingVertical: v = 16, paddingHorizontal: S = 32, variant: y = 'default', onUpdatePage: O } = e,
        D = o.useMemo(() => Math.max(Math.min(null != c ? c : 1024, 1300) - 2 * S, 0), [c, S]),
        M = o.useMemo(() => {
            if (0 === D) return 1;
            let e = D / 256,
                t = D / 376,
                n = D / e,
                i = D / t;
            return i > 360 ? Math.max(Math.floor(t - (t - e) / 2), 1) : n < 240 ? Math.max(Math.max(e, t), 1) : Math.max(e, 1);
        }, [D]),
        { loaded: w, clans: k, searchResult: U, searchCriteria: G, hasError: B } = (0, T.ML)(M, 'saved_guilds' === y),
        H = (0, b.GN)((e) => e.selectedTraits, u.Z),
        V = (0, b.GN)((e) => e.selectedGames, u.Z),
        F = (0, p.Z)(U),
        { currentPage: z, updatePage: Y, totalItems: W, pageSize: K } = (0, x.a)(),
        q = (0, h.e7)([E.default], () => E.default.getCurrentUser()),
        { treatment: X } = (0, f.I7)();
    o.useEffect(() => {
        if (null == U || !(0, Z.Pw)(U) || (null != F && (0, Z.Pw)(F) && F.loadedAt >= U.loadedAt)) return;
        let e = _.Z.getField('entrypoint');
        (0, g.Oe)('top_picks', G, X, e);
    }, [G, U, F, X]);
    let Q = V.length > 0 || H.length > 0 ? L.intl.string(L.t.jYauJC) : null != q ? L.intl.formatToPlainString(L.t.tINir6, { name: C.ZP.getName(q) }) : '';
    let J =
            ((t = k),
            (n = M),
            (i = y),
            (r = z),
            (a = Q),
            (l = w),
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
                                header: r > 1 ? L.intl.string(L.t.rjMRnZ) : L.intl.string(L.t.CZwZeX),
                                props: { style: { paddingTop: 8 } },
                                subtitle: r > 1 ? void 0 : a,
                                skeletonCount: n
                            },
                            !l || t.length > n
                                ? {
                                      section: 'other_guilds',
                                      items: t.slice(n),
                                      itemHeight: 400,
                                      sectionHeight: r > 1 ? 0 : 24,
                                      props: { style: { paddingTop: 16 } },
                                      header: r > 1 ? void 0 : L.intl.string(L.t.rjMRnZ),
                                      skeletonCount: 4 * n
                                  }
                                : null,
                            {
                                section: 'pagination',
                                items: [],
                                itemHeight: 0,
                                sectionHeight: 86
                            }
                        ].filter(I.lm);
                    default:
                        return [];
                }
            }, [t, i, n, r, a, l])),
        $ = o.useCallback(
            (e) => {
                Y(e),
                    (0, g.Lx)({
                        fromPage: z,
                        toPage: e
                    }),
                    null == O || O();
            },
            [Y, O, z]
        ),
        [, ee] = o.useState(new Set()),
        et = o.useMemo(() => new Set(G.games), [G.games]),
        en = o.useCallback(
            (e, t, n, i) => {
                let { items: r } = J[e],
                    a = (z - 1) * K + (e * M + t),
                    l = r[t];
                null != l && n
                    ? (i.current = setTimeout(
                          () =>
                              ee((e) => {
                                  let t = new Set(e);
                                  return (
                                      t.add(l.id),
                                      t.size > e.size &&
                                          (0, g.CK)({
                                              guildId: l.id,
                                              position: a
                                          }),
                                      t
                                  );
                              }),
                          2000
                      ))
                    : clearTimeout(i.current);
            },
            [J, ee, M, z, K]
        ),
        ei = o.useContext(m.AccessibilityPreferencesContext).reducedMotion.enabled,
        er = o.useCallback(
            (e, t, n) => {
                let { items: i } = J[e],
                    r = e * M + t,
                    a = (z - 1) * K + r,
                    l = i[t],
                    o = ei ? 0 : Math.min(125 * Math.floor(r / M) + (r % M) * 25, 1000);
                return (0, s.jsx)(
                    j,
                    {
                        clan: l,
                        index: r,
                        position: a,
                        searchCriteria: G,
                        traitsToHighlight: H,
                        prioritizedGameIds: et,
                        onVisibilityChange: (n, i) => en(e, t, n, i),
                        hide: n,
                        entranceDelay: o
                    },
                    ''.concat(l.id, ':').concat(y)
                );
            },
            [J, M, z, K, ei, y, G, H, et, en]
        ),
        ea = o.useCallback((e) => (0, s.jsx)(N.Z, { style: { transform: 'translateY(-6px)' } }, e), []),
        el = o.useCallback(
            (e) => {
                let { header: t, subtitle: n, section: i } = J[e];
                switch (i) {
                    case 'top_picks':
                        return (0, s.jsx)('div', {
                            className: R.topPicksSection,
                            children: (0, s.jsx)(A.Z, {
                                title: t,
                                subtitle: n
                            })
                        });
                    case 'pagination':
                        return (0, s.jsx)(s.Fragment, {
                            children:
                                W > K &&
                                (0, s.jsx)(m.Paginator, {
                                    className: d()(R.paginationInput),
                                    totalCount: W,
                                    pageSize: K,
                                    disablePaginationGap: !0,
                                    hideMaxPage: !0,
                                    currentPage: z,
                                    onPageChange: $
                                })
                        });
                    case 'header_spacer':
                        return (0, s.jsx)('div', { className: R.headerSpacer });
                    default:
                        if (null == t) return null;
                        return (0, s.jsx)(A.Z, {
                            title: t,
                            subtitle: n
                        });
                }
            },
            [z, $, K, J, W]
        ),
        es = o.useMemo(
            () =>
                w
                    ? J.map((e) => {
                          let { items: t } = e;
                          return t.length;
                      })
                    : J.map((e) => {
                          let { skeletonCount: t } = e;
                          return null != t ? t : 0;
                      }),
            [w, J]
        );
    return 0 === k.length && w
        ? (0, s.jsx)('div', {
              className: R.emptySavedGuilds,
              children:
                  'saved_guilds' === y
                      ? (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(m.Heading, {
                                    variant: 'heading-md/medium',
                                    color: 'header-primary',
                                    children: L.intl.string(L.t.RqAefn)
                                }),
                                (0, s.jsx)(m.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: L.intl.string(L.t.nfYtHB)
                                })
                            ]
                        })
                      : (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(m.Heading, {
                                    variant: 'heading-md/medium',
                                    color: 'header-primary',
                                    children: L.intl.string(L.t['TR/Yu7'])
                                }),
                                (0, s.jsx)(m.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: L.intl.string(L.t.cjcWd3)
                                })
                            ]
                        })
          })
        : B && 0 === k.length
          ? (0, s.jsxs)('div', {
                className: R.errorPage,
                children: [
                    (0, s.jsx)('img', {
                        alt: '',
                        src: P,
                        className: R.errorImage
                    }),
                    (0, s.jsx)(m.Heading, {
                        variant: 'heading-xl/semibold',
                        children: L.intl.string(L.t.uXSA8v)
                    }),
                    (0, s.jsx)(m.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: L.intl.string(L.t.CCXVOz)
                    })
                ]
            })
          : (0, s.jsx)('div', {
                className: R.sectionContainer,
                style: {
                    paddingTop: v,
                    paddingLeft: S,
                    paddingRight: S,
                    paddingBottom: v,
                    width: 'calc(100% - '.concat(2 * S, 'px)'),
                    gap: ''.concat(16, 'px')
                },
                children: es.map((e, t) => {
                    var n, i;
                    let r = J[t],
                        a = el(t);
                    return (0, s.jsxs)(
                        'div',
                        {
                            className: R.section,
                            style: { gap: ''.concat(16, 'px') },
                            children: [
                                null != a &&
                                    (0, s.jsx)('div', {
                                        ...r.props,
                                        className: d()(R.sectionHeader, null === (n = r.props) || void 0 === n ? void 0 : n.className),
                                        style: {
                                            height: ''.concat(r.sectionHeight, 'px'),
                                            ...(null === (i = r.props) || void 0 === i ? void 0 : i.style)
                                        },
                                        children: a
                                    }),
                                e > 0 &&
                                    (0, s.jsx)('div', {
                                        className: R.sectionContent,
                                        style: { gridTemplateColumns: 'repeat('.concat(M, ', minmax(252px, 1fr))') },
                                        children: Array.from({ length: e }).map((e, n) => {
                                            let i = ''.concat(t, '-').concat(n);
                                            return w ? er(t, n, null == c) : ea(i);
                                        })
                                    })
                            ]
                        },
                        t
                    );
                })
            });
});
