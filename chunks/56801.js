"use strict";
n.d(t, {
  Z: function() {
    return I
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(806966),
  u = n(254494),
  _ = n(895924),
  d = n(826298),
  c = n(496030);
let E = [16, 12, 8, 12];

function I(e) {
  let {
    className: t,
    channel: n,
    sections: s,
    activeCategoryIndex: I,
    filteredSectionId: T,
    onSectionClick: h,
    applicationCommandListRef: S
  } = e, f = r.useRef(null), N = r.useCallback((e, t) => {
    var n;
    let i = 8;
    return (null === (n = s[t + 1]) || void 0 === n ? void 0 : n.type) === _.Qi.BUILT_IN && (i += 8), 32 + i
  }, [s]), A = r.useCallback((e, t) => {
    var n;
    if (!t) return 0 === e ? 0 : 8;
    return (null === (n = s[e + 1]) || void 0 === n ? void 0 : n.type) === _.Qi.BUILT_IN ? 0 : 8
  }, [s]), m = r.useCallback((e, t) => {
    let r = s[t];
    if (null == r) return;
    let o = (0, d.ky)(r),
      l = r.type === _.Qi.BUILT_IN ? 4 : 0,
      u = 32 - 2 * l,
      E = (0, i.jsx)(o, {
        channel: n,
        section: r,
        isSelected: null != T ? r.id === T : I === t,
        padding: l,
        width: u,
        height: u,
        selectable: !0
      }),
      S = r.type !== _.Qi.BUILT_IN && t < s.length - 1 && s[t + 1].type === _.Qi.BUILT_IN;
    return (0, i.jsxs)("div", {
      className: c.section,
      children: [(0, i.jsx)(a.Tooltip, {
        text: r.name,
        position: "right",
        children: e => {
          let {
            onClick: t,
            ...n
          } = e;
          return (0, i.jsx)(a.Clickable, {
            "aria-label": r.name,
            onClick: () => {
              h(r), null == t || t()
            },
            ...n,
            children: E
          })
        }
      }), S ? (0, i.jsx)("hr", {
        className: c.builtInSeparator
      }) : null]
    }, r.id)
  }, [I, n, h, s, T]);
  return 0 === s.length ? null : (0, i.jsx)("div", {
    className: o()(t, c.wrapper),
    children: (0, i.jsx)(u.Z, {
      categoryListRef: f,
      expressionsListRef: S,
      store: l.Xn,
      categories: s,
      className: c.list,
      renderCategoryListItem: m,
      rowCount: s.length,
      categoryHeight: N,
      listPadding: E,
      getScrollOffsetForIndex: A
    })
  })
}