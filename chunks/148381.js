t.d(n, {
    Z: function () {
        return d;
    }
}), t(47120);
var l = t(735250), s = t(470079), a = t(120356), i = t.n(a), r = t(481060), o = t(958707), u = t(278768), c = t(708554);
function d(e) {
    let {
            title: n,
            scrollerClassName: t,
            scrollerInnerClassName: a,
            children: d
        } = e, m = s.useRef(null), [E, _] = s.useState(!1), [S, g] = s.useState(!1), h = s.useCallback(() => {
            let {current: e} = m;
            null != e && (_(!e.isScrolledToTop()), g(!e.isScrolledToBottom()));
        }, []);
    return s.useLayoutEffect(() => h(), []), (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                className: i()(c.title, c.scrollWrapper),
                children: [
                    (0, l.jsx)(r.FormTitle, {
                        className: u.formItemTitle,
                        children: n
                    }),
                    (0, l.jsx)(o.Z, { separator: E })
                ]
            }),
            (0, l.jsx)('div', {
                className: t,
                children: (0, l.jsx)(r.AdvancedScroller, {
                    ref: m,
                    className: i()(c.scrollerInner, a, { [c.bottomSeparator]: S }),
                    onScroll: h,
                    children: d
                })
            })
        ]
    });
}
