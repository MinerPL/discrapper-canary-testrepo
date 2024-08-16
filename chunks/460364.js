n.d(t, {
    C: function () {
        return u;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(539907),
    s = n(743236),
    o = n(218867),
    l = n(837244);
function u(e) {
    let { parentItem: t, isFocused: n, menuSubmenuProps: u, rows: c, rowHeight: d, onScroll: _, listClassName: E } = e,
        f = i.useRef(null),
        h = i.useRef(null),
        p = i.useRef(null),
        m = i.useRef(null),
        { isUsingKeyboardNavigation: I, focusIndex: T, ...g } = u;
    i.useLayoutEffect(() => {
        var e;
        n && ((0, s.F)(f), null === (e = p.current) || void 0 === e || e.focus());
    }, [n]),
        i.useEffect(() => {
            if (n && T >= 0 && I) {
                var e;
                null === (e = m.current) || void 0 === e || e.scrollRowIntoView(T);
            }
        }, [n, I, T]);
    let S = i.useCallback((e) => c[e], [c]);
    return (0, r.jsxs)('div', {
        ref: f,
        className: l.__invalid_submenuContainer,
        children: [
            (0, r.jsx)('div', { ref: h }),
            t,
            n
                ? (0, r.jsx)(a.j, {
                      targetRef: h,
                      autoInvert: !0,
                      nudgeAlignIntoViewport: !0,
                      fixed: !0,
                      spacing: 4,
                      position: 'right',
                      align: 'top',
                      children: () =>
                          c.length > 0 &&
                          (0, r.jsx)('div', {
                              className: l.submenuPaddingContainer,
                              children: (0, r.jsx)('div', {
                                  className: l.submenu,
                                  ...g,
                                  ref: p,
                                  children: (0, r.jsx)(o.Z, {
                                      ref: m,
                                      className: E,
                                      listPadding: [6, 0, 6, 8],
                                      onScroll: _,
                                      renderRow: S,
                                      rowCount: c.length,
                                      rowHeight: d
                                  })
                              })
                          })
                  })
                : null
        ]
    });
}
