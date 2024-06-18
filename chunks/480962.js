"use strict";
n.d(t, {
  _: function() {
    return d
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(539907),
  l = n(743236),
  u = n(21340),
  _ = n(768160);

function d(e) {
  let {
    subMenuClassName: t,
    parentItem: n,
    isFocused: s,
    menuSubmenuProps: d,
    renderSubmenu: c
  } = e, {
    focusIndex: E,
    isUsingKeyboardNavigation: I,
    ...T
  } = d, h = r.useRef(null), S = r.useRef(null), f = r.useRef(null);
  return r.useLayoutEffect(() => {
    var e;
    s && ((0, l.F)(h), null === (e = f.current) || void 0 === e || e.focus())
  }, [s]), (0, i.jsxs)("div", {
    ref: h,
    className: _.__invalid_submenuContainer,
    children: [(0, i.jsx)("div", {
      ref: S
    }), n, s ? (0, i.jsx)(a.j, {
      targetRef: S,
      autoInvert: !0,
      nudgeAlignIntoViewport: !0,
      fixed: !0,
      spacing: 4,
      position: "right",
      align: "top",
      children: () => (0, i.jsx)("div", {
        className: _.submenuPaddingContainer,
        children: (0, i.jsx)("div", {
          className: o()(_.submenu, t),
          ...T,
          ref: f,
          children: (0, i.jsx)(u.zJ, {
            className: _.scroller,
            children: c()
          })
        })
      })
    }) : null]
  })
}