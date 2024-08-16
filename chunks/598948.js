l(47120);
var n = l(735250),
    a = l(470079),
    o = l(120356),
    s = l.n(o),
    i = l(348327),
    r = l.n(i),
    C = l(399606),
    c = l(952265),
    d = l(481060),
    u = l(607070),
    m = l(906732),
    _ = l(136015),
    E = l(506071),
    h = l(910693),
    M = l(893966),
    x = l(527379),
    b = l(827657),
    T = l(472596),
    L = l(201756),
    g = l(66747),
    I = l(852479),
    p = l(420212),
    H = l(4667);
let f = {
        transform: 'translate3d(15%, 0, 0)',
        opacity: 0.3
    },
    N = {
        transform: 'translate3d(5%, 0, 0)',
        opacity: 0.5
    },
    R = {
        transform: 'translate3d(0, 0, 0)',
        opacity: 1
    },
    A = {
        mass: 1.1,
        friction: 24,
        tension: 260
    },
    S = (e) => e.shiftKey || e.key === p.vn.SHIFT,
    Z = (e) => e.metaKey || e.ctrlKey || ['Meta', 'Control'].includes(e.key),
    j = a.memo(
        function (e) {
            let { members: t, guild: l, className: o, searchState: i, compact: r, onSelectRow: m, onResetForNewMembers: _ } = e,
                h = (0, C.e7)([u.Z], () => u.Z.useReducedMotion),
                p = (0, c.f9)(),
                j = (0, E.n)(),
                [v, D] = a.useState(!1),
                [O, B] = a.useState(!1),
                V = !p && v && O;
            a.useEffect(() => {
                !j && (D(!1), B(!1));
            }, [j]),
                a.useLayoutEffect(() => {
                    let e = (e) => {
                            S(e) && D(!0), Z(e) && B(!0);
                        },
                        t = (e) => {
                            S(e) && D(!1), Z(e) && B(!1);
                        };
                    return (
                        window.addEventListener('keydown', e),
                        window.addEventListener('keyup', t),
                        () => {
                            window.removeEventListener('keydown', e), window.removeEventListener('keyup', t);
                        }
                    );
                }, []),
                a.useEffect(() => {
                    (0, x.nb)(l.id, t);
                }, [l.id, t]);
            let U = t.length > 30,
                w = (0, d.useTransition)(t, {
                    key: (e) => e,
                    trail: U ? 5 : 15,
                    from(e) {
                        let t = M.Z.getEnhancedMember(l.id, e),
                            n = M.Z.getLastRefreshTimestamp(l.id),
                            a = null == t || 0 === n,
                            o = null != t && t.refreshTimestamp === n;
                        return a || !o ? R : U ? N : f;
                    },
                    enter: R,
                    config: A
                }),
                k = !h && i === T.po.LOADING;
            return (0, n.jsxs)('table', {
                className: s()(H.table, o),
                children: [
                    (0, n.jsx)(L.Z, {
                        guildId: l.id,
                        currentPagedMembers: t
                    }),
                    (0, n.jsx)('tbody', {
                        children:
                            i === T.po.SUCCESS_FULL || i === T.po.LOADING
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(I.Z, {
                                              guild: l,
                                              onSubmit: _
                                          }),
                                          w((e, t) =>
                                              (0, n.jsx)(
                                                  g.Z,
                                                  {
                                                      userId: t,
                                                      guildId: l.id,
                                                      style: e,
                                                      onSelect: m,
                                                      isHoldingAdvancedInfoKey: V,
                                                      compact: r,
                                                      isLoading: k
                                                  },
                                                  t
                                              )
                                          )
                                      ]
                                  })
                                : (0, n.jsx)('td', {
                                      colSpan: 7,
                                      children: (0, n.jsx)(b.Z, { searchState: i })
                                  })
                    })
                ]
            });
        },
        function (e, t) {
            let l = r()(e.members, t.members),
                n = e.guild.id === t.guild.id,
                a = e.searchState === t.searchState,
                o = e.compact === t.compact;
            return l && n && a && o;
        }
    );
t.Z = function (e) {
    var t, l;
    let { guild: o, className: s, searchState: i, compact: r, onSelectRow: c, onResetForNewMembers: d } = e,
        u = (0, C.cj)([M.Z], () => M.Z.getPaginationStateByGuildId(o.id), [o.id]),
        [E] = (0, C.e7)([M.Z], () => M.Z.getPagedMembersByGuildId(o.id), [o.id], _.Q);
    a.useEffect(() => {
        (0, x.zO)(o.id);
    }, [o.id]);
    let b = a.useDeferredValue(null !== (t = E[u.currentPage]) && void 0 !== t ? t : []),
        { analyticsLocations: T } = (0, m.ZP)(),
        L = null !== (l = null == T ? void 0 : T[0]) && void 0 !== l ? l : null;
    return (
        a.useEffect(() => {
            (0, h.h1)(o.id, L);
        }, [o.id, L]),
        (0, n.jsx)(j, {
            members: b,
            guild: o,
            className: s,
            searchState: i,
            compact: r,
            onSelectRow: c,
            onResetForNewMembers: d
        })
    );
};
