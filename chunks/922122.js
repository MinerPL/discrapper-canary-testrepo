n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120),
    n(724458);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(780384),
    o = n(481060),
    c = n(410030),
    d = n(355932),
    u = n(889711),
    _ = n(79707),
    E = n(689938),
    h = n(116155);
function m(e) {
    let { onTabSelect: t, tabs: n, selectedTab: s } = e,
        d = (0, c.ZP)(),
        u = (0, l.wj)(d),
        m = a.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: t } = e;
                    return t === s;
                }),
            [s, n]
        ),
        I = m ? 'header-primary' : u ? 'text-muted' : 'header-primary',
        p = m ? o.tokens.colors.HEADER_PRIMARY : u ? o.tokens.colors.TEXT_MUTED : o.tokens.colors.HEADER_PRIMARY;
    return (0, i.jsx)(o.Popout, {
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, i.jsx)(_.Z, {
                selectedTab: s,
                onClose: a,
                tabs: n,
                onTabSelect: t
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, i.jsxs)(o.TabBar.Item, {
                ...e,
                id: 'more',
                color: 'text-muted',
                className: r()(h.tab, h.more, { [h.selected]: m }),
                'aria-label': E.Z.Messages.MORE,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: I,
                        children: E.Z.Messages.MORE
                    }),
                    n
                        ? (0, i.jsx)(o.ChevronSmallUpIcon, {
                              size: 'sm',
                              color: p
                          })
                        : (0, i.jsx)(o.ChevronSmallDownIcon, {
                              size: 'sm',
                              color: p
                          })
                ]
            });
        }
    });
}
function I(e) {
    let { className: t, selectedTab: n, tabs: s, onTabSelect: l, onAvailableWidthChange: c } = e,
        [_, E] = a.useState(0),
        I = a.useRef(_),
        {
            lastVisibleIndex: p,
            onItemLayout: g,
            overflowItemsRef: T,
            itemWidthsRef: f
        } = (0, d.zP)({
            items: s,
            itemGapPx: 20,
            maxLines: 1,
            containerWidth: _
        }),
        S = a.useMemo(() => s.slice(0, p + 1), [p, s]),
        C = a.useMemo(() => s.slice(p + 1), [p, s]),
        N = a.useRef(null),
        A = a.useCallback(() => {
            var e;
            let t = null === (e = N.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            if (null == t || I.current === t.width) return;
            E(t.width), (I.current = t.width);
            let n = f.current.reduce((e, t, n) => e + t + (0 === n ? 0 : 20)),
                i = t.width - n;
            null == c || c(i);
        }, [f, c]);
    a.useEffect(() => {
        let e = (0, u.pP)(A);
        return (0, u.YP)(e, document.body), () => (0, u.UC)(e, document.body);
    }, [A]);
    let v = 0 !== _;
    return (0, i.jsxs)('div', {
        className: r()(h.container, t),
        ref: N,
        children: [
            (0, i.jsxs)('div', {
                className: h.measurements,
                children: [
                    s.map((e, t) =>
                        (0, i.jsx)(
                            d.AJ,
                            {
                                index: t,
                                onItemLayout: g,
                                children: (0, i.jsx)(o.TabBar.Item, {
                                    id: e.id,
                                    'aria-label': e.label,
                                    className: h.tab,
                                    children: (0, i.jsx)(o.Text, {
                                        variant: 'text-md/medium',
                                        children: e.label
                                    })
                                })
                            },
                            e.id
                        )
                    ),
                    (0, i.jsx)('div', {
                        ref: T,
                        children: (0, i.jsx)(m, {
                            tabs: C,
                            onTabSelect: l,
                            selectedTab: n
                        })
                    })
                ]
            }),
            v &&
                (0, i.jsxs)(o.TabBar, {
                    type: 'top',
                    look: 'brand',
                    selectedItem: n,
                    onItemSelect: l,
                    className: h.tabs,
                    children: [
                        S.map((e) =>
                            (0, i.jsx)(
                                o.TabBar.Item,
                                {
                                    id: e.id,
                                    'aria-label': e.label,
                                    className: r()(h.tab, { [h.selected]: n === e.id }),
                                    children: e.label
                                },
                                e.id
                            )
                        ),
                        0 !== C.length
                            ? (0, i.jsx)(m, {
                                  tabs: C,
                                  onTabSelect: l,
                                  selectedTab: n
                              })
                            : null
                    ]
                })
        ]
    });
}
