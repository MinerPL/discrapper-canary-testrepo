"use strict";
n.d(t, {
  C: function() {
    return u
  }
});
var i = n(735250),
  r = n(470079),
  s = n(539907),
  o = n(743236),
  a = n(695464),
  l = n(768160);

function u(e) {
  let {
    parentItem: t,
    isFocused: n,
    menuSubmenuProps: u,
    rows: _,
    rowHeight: d,
    onScroll: c,
    listClassName: E
  } = e, I = r.useRef(null), T = r.useRef(null), h = r.useRef(null), S = r.useRef(null), {
    isUsingKeyboardNavigation: f,
    focusIndex: N,
    ...A
  } = u;
  r.useLayoutEffect(() => {
    var e;
    n && ((0, o.F)(I), null === (e = h.current) || void 0 === e || e.focus())
  }, [n]), r.useEffect(() => {
    if (n && N >= 0 && f) {
      var e;
      null === (e = S.current) || void 0 === e || e.scrollRowIntoView(N)
    }
  }, [n, f, N]);
  let m = r.useCallback(e => _[e], [_]);
  return (0, i.jsxs)("div", {
    ref: I,
    className: l.__invalid_submenuContainer,
    children: [(0, i.jsx)("div", {
      ref: T
    }), t, n ? (0, i.jsx)(s.j, {
      targetRef: T,
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      fixed: !0,
      spacing: 4,
      position: "right",
      align: "top",
      children: () => _.length > 0 && (0, i.jsx)("div", {
        className: l.submenuPaddingContainer,
        children: (0, i.jsx)("div", {
          className: l.submenu,
          ...A,
          ref: h,
          children: (0, i.jsx)(a.Z, {
            ref: S,
            className: E,
            listPadding: [6, 0, 6, 8],
            onScroll: c,
            renderRow: m,
            rowCount: _.length,
            rowHeight: d
          })
        })
      })
    }) : null]
  })
}