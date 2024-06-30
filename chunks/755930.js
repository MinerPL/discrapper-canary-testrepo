n.d(t, {
    GW: function () {
        return h;
    },
    Qg: function () {
        return I;
    },
    Yn: function () {
        return g;
    },
    ZP: function () {
        return f;
    },
    bL: function () {
        return x;
    },
    i$: function () {
        return S;
    },
    nn: function () {
        return N;
    },
    qN: function () {
        return C;
    },
    wy: function () {
        return T;
    }
}), n(47120);
var s = n(735250), a = n(470079), i = n(120356), r = n.n(i);
n(913527);
var l = n(481060), o = n(151011), c = n(937615), d = n(809086), u = n(981631), _ = n(689938), E = n(424666);
function I(e) {
    return (t, n, s) => {
        let a = e(t), i = e(n);
        return null != a && null != i ? a === i ? 0 : a < i ? -1 : 1 : 0;
    };
}
function T(e) {
    let {
        key: t,
        cellClassName: n,
        renderHeader: s,
        renderContent: a,
        ...i
    } = e;
    return {
        key: t,
        bodyCellClassName: E.cell,
        cellClassName: n,
        renderHeader: s,
        render: a,
        ...i
    };
}
function m() {
    return (0, s.jsx)(l.Text, {
        variant: 'text-xs/medium',
        className: E.unpublishedBadge,
        children: _.Z.Messages.GUILD_PRODUCT_UNPUBLISHED_TITLE
    });
}
function N(e) {
    let {
        cellClassName: t,
        key: n,
        renderHeader: a,
        ...i
    } = e;
    return T({
        cellClassName: t,
        key: n,
        renderHeader: a,
        renderContent(e) {
            let {listing: t} = e, n = null;
            return null != t && (n = (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(d.Z, {
                        listing: t,
                        imageSize: 128,
                        alt: '',
                        className: E.listingImage
                    }),
                    (0, s.jsxs)(l.Text, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        className: E.listingNameLabel,
                        children: [
                            t.name,
                            !t.published && (0, s.jsx)(m, {})
                        ]
                    })
                ]
            })), (0, s.jsx)(x, {
                className: E.listingNameCell,
                children: n
            });
        },
        ...i
    });
}
function S(e) {
    let {
        cellClassName: t,
        getAmount: n,
        key: a,
        renderHeader: i,
        ...r
    } = e;
    return T({
        key: a,
        cellClassName: t,
        renderHeader: i,
        renderContent(e) {
            let t = n(e);
            return (0, s.jsx)(p, { children: t });
        },
        ...r
    });
}
function h(e) {
    let {
        cellClassName: t,
        getCount: n,
        key: a,
        renderHeader: i,
        ...r
    } = e;
    return T({
        key: a,
        cellClassName: t,
        renderHeader: i,
        renderContent(e) {
            let t = n(e);
            return (0, s.jsx)(R, { children: t });
        },
        ...r
    });
}
function g(e) {
    let t = [...e];
    for (let n = 1; n < e.length; ++n) {
        let s = e[n];
        t[n] = {
            ...s,
            cellClassName: r()(s.cellClassName, E.cellAlignRight)
        };
    }
    return t;
}
let C = e => {
        let {children: t} = e;
        return (0, s.jsx)(l.Text, {
            className: E.headerCell,
            variant: 'text-xs/medium',
            color: 'interactive-normal',
            'aria-hidden': !0,
            children: t
        });
    }, x = e => {
        let {
            children: t,
            className: n
        } = e;
        return (0, s.jsx)(l.Text, {
            className: n,
            variant: 'text-md/normal',
            color: 'interactive-normal',
            children: t
        });
    }, p = e => {
        let {children: t} = e;
        return (0, s.jsx)(x, { children: (0, c.T4)(null != t ? t : 0, u.pKx.USD) });
    }, R = e => {
        let {children: t} = e;
        return (0, s.jsxs)(x, {
            className: E.personCountCell,
            children: [
                null != t ? t : '-',
                ' ',
                (0, s.jsx)(l.UserIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: E.personCountIcon,
                    'aria-hidden': !0
                })
            ]
        });
    };
function f(e) {
    let {
            className: t,
            headerClassName: n,
            rowClassName: i,
            enableRowSeparators: l = !1,
            initialSortKey: c,
            initialSortDirection: d = u.sHY.ASCENDING,
            ..._
        } = e, [I, T] = a.useState(c), [m, N] = a.useState(d);
    return (0, s.jsx)('div', {
        className: r()(E.tableContainer, t),
        children: (0, s.jsx)(o.Z, {
            className: r()({ [E.tableWithoutSeparators]: !l }, E.table),
            rowClassName: r()({ [E.rowWithSeparators]: l }, i),
            headerClassName: r()(E.header, { [E.headerWithoutSeparators]: !l }, n),
            sortKey: I,
            sortDirection: m,
            onSort: (e, t) => {
                T(e), N(t);
            },
            ..._
        })
    });
}
