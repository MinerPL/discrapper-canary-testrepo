n.d(t, {
    Z: function () {
        return h;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(481060), o = n(923726), c = n(689938), u = n(80045);
function d(e) {
    let {
        text: t,
        hasScrolled: n
    } = e;
    return (0, i.jsxs)('div', {
        className: s()(u.container, { [u.containerHide]: n }),
        children: [
            (0, i.jsx)('div', {
                className: u.notice,
                children: (0, i.jsx)(r.Text, {
                    className: u.__invalid_label,
                    variant: 'text-md/medium',
                    color: 'header-primary',
                    children: t
                })
            }),
            (0, i.jsx)('div', { className: u.noticeArrow })
        ]
    });
}
function h(e) {
    let [t, n] = a.useState(), [l, s] = a.useState(), [r, u] = a.useState(!1), [h, p] = a.useState(!1), {enabled: m} = (0, o.s1)(e);
    return a.useEffect(() => {
        m && null != t && null != l ? u(t < l) : u(!1);
    }, [
        m,
        t,
        l
    ]), {
        horizontalScrollNotice: a.useMemo(() => r ? (0, i.jsx)(d, {
            text: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_LISTINGS_SCROLLABLE_NOTICE,
            hasScrolled: h
        }) : null, [
            r,
            h
        ]),
        handleScroll: () => p(!0),
        handleSetScrollerRef: e => {
            var t;
            return s(null == e ? void 0 : null === (t = e.getScrollerState()) || void 0 === t ? void 0 : t.scrollWidth);
        },
        handleSetContainerRef: e => n(null == e ? void 0 : e.clientWidth)
    };
}
