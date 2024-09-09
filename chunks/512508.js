l.d(t, {
    PM: function () {
        return B;
    },
    WG: function () {
        return O;
    },
    ZP: function () {
        return k;
    }
}),
    l(47120);
var n,
    a,
    o,
    s,
    i,
    r,
    C = l(735250),
    c = l(470079),
    d = l(120356),
    u = l.n(d),
    m = l(658722),
    _ = l.n(m),
    E = l(442837),
    h = l(481060),
    M = l(461745),
    x = l(933557),
    b = l(471445),
    T = l(91218),
    L = l(313201),
    g = l(518738),
    I = l(439170),
    p = l(592125),
    H = l(430824),
    f = l(699516),
    N = l(594174),
    R = l(689938),
    A = l(524898);
let S = (0, L.hQ)(),
    Z = (0, L.hQ)(),
    j = 'text-sm/medium';
function v(e) {
    return 1 === e.type;
}
function D(e) {
    return 0 === e.type;
}
function O(e) {
    let t = ''.concat(e.name.includes(I.CR) ? '' : '@').concat(e.name);
    return {
        tag: {
            type: M.Fj.ROLE,
            label: t
        },
        row: {
            id: e.id,
            display: t,
            type: 1,
            record: e
        }
    };
}
function B(e) {
    let t = (0, x.F6)(e, N.default, f.Z);
    return {
        tag: {
            type: M.Fj.CHANNEL,
            label: t
        },
        row: {
            id: e.id,
            display: t,
            type: 0,
            record: e
        }
    };
}
((s = n || (n = {}))[(s.CHANNEL = 0)] = 'CHANNEL'), (s[(s.ROLE = 1)] = 'ROLE');
let V = c.memo(function (e) {
    var t;
    let { row: l, guildId: n, className: a } = e,
        { id: o, name: s } = l.record,
        i = (0, g.p9)({
            guildId: n,
            roleId: o,
            size: 16
        }),
        r = (0, E.e7)([H.Z], () => H.Z.getRole(n, o)),
        c = s.includes(I.CR) ? '' : '@',
        d = (0, h.useToken)(h.tokens.unsafe_rawColors.PRIMARY_300).hsl(),
        m = null !== (t = null == r ? void 0 : r.colorString) && void 0 !== t ? t : d;
    return (0, C.jsxs)('div', {
        className: u()(A.rowLabel, A.roleTagContainer, a),
        children: [
            (0, C.jsx)(h.RoleDot, {
                className: A.__invalid_roleDot,
                color: m,
                background: !1,
                tooltip: !1
            }),
            null != i
                ? (0, C.jsx)(T.Z, {
                      className: A.roleTagIcon,
                      ...i,
                      enableTooltip: !1
                  })
                : c,
            (0, C.jsx)(h.Text, {
                variant: j,
                className: A.roleTagLabel,
                children: s
            })
        ]
    });
});
function U(e) {
    let { channel: t, row: l, className: n } = e,
        a = null != t.parent_id,
        o = (0, b.KS)(t);
    return (0, C.jsxs)('div', {
        className: u()(A.rowLabel, A.channelLabel, { [A.hasParent]: a }, n),
        children: [
            null != o &&
                (0, C.jsx)(o, {
                    size: 'xs',
                    color: 'currentColor',
                    className: A.channelIcon
                }),
            (0, C.jsx)(h.Text, {
                variant: t.isCategory() ? 'eyebrow' : j,
                children: l.display
            })
        ]
    });
}
function w(e, t, l) {
    return v(e)
        ? (0, C.jsx)(
              V,
              {
                  row: e,
                  guildId: t,
                  className: l
              },
              e.record.id
          )
        : D(e)
          ? (0, C.jsx)(
                U,
                {
                    row: e,
                    channel: e.record,
                    className: l
                },
                e.record.id
            )
          : null;
}
function k(e) {
    let { guildId: t, roleRows: l = [], channelRows: n = [], selectedChannelIds: a = new Set(), selectedRoleIds: o = new Set(), onChange: s, placeholder: i, helperText: r, className: d } = e,
        m = (0, E.e7)([H.Z], () => H.Z.getRoles(t)),
        x = c.useMemo(
            () =>
                (function (e, t, l) {
                    if (null == e) return {};
                    let n = {};
                    return (
                        e.forEach((e) => {
                            let t = p.Z.getChannel(e);
                            null != t && (n[e] = B(t));
                        }),
                        t.forEach((e) => {
                            e in l && (n[e] = O(l[e]));
                        }),
                        n
                    );
                })(a, o, m),
            [a, o, m]
        ),
        b = c.useMemo(() => Object.keys(x), [x]),
        [T, L] = c.useState(''),
        [g, I] = c.useState(!1),
        [f, N] = c.useState(!1),
        [j, V] = c.useState(!1),
        U = c.useRef(null),
        { sections: k, sectionCounts: F } = c.useMemo(() => {
            let e = '' !== T ? n.filter((e) => _()(T, e.display.toLocaleLowerCase())) : n,
                t = '' !== T ? l.filter((e) => _()(T, e.display.toLocaleLowerCase())) : l,
                a = [],
                o = [];
            return (
                (a[0] = e),
                (o[0] = e.length),
                (a[1] = t),
                (o[1] = t.length),
                {
                    sections: a,
                    sectionCounts: o
                }
            );
        }, [T, n, l]),
        y = c.useCallback(
            (e) => {
                let t = Object.values(e),
                    l = t
                        .filter((e) => {
                            let { row: t } = e;
                            return D(t);
                        })
                        .map((e) => e.row.record.id),
                    n = t
                        .filter((e) => {
                            let { row: t } = e;
                            return v(t);
                        })
                        .map((e) => e.row.record.id);
                s(new Set(l), new Set(n));
            },
            [s]
        ),
        P = () => {
            I(!1), N(!1);
        };
    c.useEffect(() => {
        let e = setTimeout(() => {
            V(g || f);
        }, 32);
        return () => {
            clearTimeout(e);
        };
    }, [g, f]);
    let Y = (e, t, l) => {
            l.stopPropagation(), l.preventDefault(), 2 === t ? I(e) : (1 === t || I(e), N(e));
        },
        G = c.useCallback(
            (e) => {
                let t = { ...x };
                D(e) ? (t[e.id] = B(e.record)) : v(e) && (t[e.id] = O(e.record)),
                    y(t),
                    L(''),
                    P(),
                    setTimeout(() => {
                        var e;
                        let t = null === (e = U.current) || void 0 === e ? void 0 : e.containerRef.current,
                            l = null == t ? void 0 : t.firstChild;
                        null != l &&
                            l.scrollTo({
                                top: l.scrollHeight,
                                behavior: 'smooth'
                            });
                    }, 16);
            },
            [y, x]
        ),
        z = c.useCallback(
            (e) => {
                let { section: l, row: n } = e,
                    a = k[l][n];
                return (0, C.jsx)(
                    h.Clickable,
                    {
                        className: u()(A.selectableSearchRow, A.rowHeight),
                        onClick: (e) => {
                            e.stopPropagation(), G(a);
                        },
                        children: (0, C.jsx)('div', {
                            className: A.rowContainer,
                            children: w(a, t, A.searchRowLabel)
                        })
                    },
                    a.id
                );
            },
            [t, G, k]
        ),
        q = c.useMemo(
            () =>
                b.map((e) => {
                    var l, n;
                    return (
                        (l = x[e]),
                        (n = t),
                        {
                            ...l.tag,
                            label: w(l.row, n, A.noIndent)
                        }
                    );
                }),
            [x, b, t]
        );
    return (0, C.jsxs)('div', {
        className: u()(A.searchContainer, d),
        children: [
            (0, C.jsxs)('div', {
                className: A.searchBox,
                children: [
                    (0, C.jsx)(M.ZP, {
                        tags: q,
                        maxHeight: 98,
                        size: M.ZP.Sizes.MEDIUM,
                        query: T,
                        ref: U,
                        onRemoveTag: (e) => {
                            let t = b[e],
                                { [t]: l, ...n } = x;
                            y(n), L(''), P();
                        },
                        onQueryChange: (e) => {
                            L(e.trim().toLocaleLowerCase());
                        },
                        placeholder: null != i ? i : R.Z.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_PLACEHOLDER,
                        sections: [b.length],
                        inputProps: {
                            'aria-labelledby': S,
                            'aria-controls': Z,
                            'aria-expanded': j,
                            onFocus: (e) => Y(!0, 2, e),
                            onBlur: (e) => Y(!1, 2, e)
                        }
                    }),
                    j &&
                        (0, C.jsx)('div', {
                            className: A.resultsListParent,
                            onFocus: (e) => Y(!0, 1, e),
                            onBlur: (e) => Y(!1, 1, e),
                            tabIndex: -1,
                            children: (0, C.jsx)(h.ListAuto, {
                                className: A.resultsListContainer,
                                innerClassName: A.resultsList,
                                sections: F,
                                renderRow: z,
                                rowHeight: 34,
                                renderSection: (e) => {
                                    let { section: t } = e;
                                    return 0 === t
                                        ? (0, C.jsx)(
                                              h.FormTitle,
                                              {
                                                  tag: 'h5',
                                                  className: u()(A.sectionTitle, A.sectionHeight),
                                                  children: R.Z.Messages.CHANNELS
                                              },
                                              R.Z.Messages.CHANNELS
                                          )
                                        : 1 === t
                                          ? (0, C.jsx)(
                                                h.FormTitle,
                                                {
                                                    tag: 'h5',
                                                    className: u()(A.sectionTitle, A.sectionHeight),
                                                    children: R.Z.Messages.ROLES
                                                },
                                                R.Z.Messages.ROLES
                                            )
                                          : null;
                                },
                                renderFooter: (e) => {
                                    let { section: t } = e;
                                    if (0 === t)
                                        return 0 === F[1] && F[0] > 0
                                            ? null
                                            : (0, C.jsx)('div', {
                                                  className: A.sectionFooter,
                                                  children: (0, C.jsx)(h.FormDivider, {})
                                              });
                                    return null;
                                },
                                sectionHeight: 24,
                                footerHeight: (e) => {
                                    if (0 === e) return 0 === F[1] && F[0] > 0 ? 0 : 32;
                                    return 0;
                                },
                                role: void 0,
                                innerRole: 'listbox',
                                innerId: Z,
                                innerAriaOrientation: 'vertical'
                            })
                        })
                ]
            }),
            null != r &&
                (0, C.jsx)(h.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    className: A.helperText,
                    children: r
                })
        ]
    });
}
((i = a || (a = {}))[(i.CHANNELS = 0)] = 'CHANNELS'), (i[(i.ROLES = 1)] = 'ROLES'), ((r = o || (o = {}))[(r.NONE = 0)] = 'NONE'), (r[(r.LIST = 1)] = 'LIST'), (r[(r.INPUT = 2)] = 'INPUT');
