"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("924826"),
  o = n("481060"),
  u = n("880080"),
  d = n("682662"),
  c = n("662146"),
  f = n("754440");
let h = a.forwardRef(function(e, t) {
  let {
    id: n,
    onClick: s,
    onContextMenu: h,
    icon: C,
    selected: p,
    tooltip: m,
    upperBadge: g,
    lowerBadge: E,
    lowerBadgeWidth: S,
    showPill: _ = !0,
    className: I,
    "aria-label": N,
    children: T,
    onMouseEnter: A,
    onMouseLeave: L,
    onMouseDown: v
  } = e, x = (0, r.useTreeItem)(n), [R, M] = a.useState(!1), O = "string" == typeof m && null == N ? m : N;
  return (0, l.jsxs)(d.ListItem, {
    children: [_ ? (0, l.jsx)("div", {
      className: f.pill,
      children: (0, l.jsx)(u.default, {
        hovered: R,
        selected: p
      })
    }) : null, (0, l.jsx)(c.default, {
      text: m,
      selected: p,
      children: (0, l.jsx)(o.BlobMask, {
        className: f.__invalid_circleButtonMask,
        selected: p || R,
        upperBadge: g,
        lowerBadge: E,
        lowerBadgeWidth: S,
        children: (0, l.jsx)(o.Clickable, {
          innerRef: t,
          onMouseEnter: () => {
            null == A || A(), M(!0)
          },
          onMouseLeave: () => {
            null == L || L(), M(!1)
          },
          onMouseDown: v,
          className: i()(f.circleIconButton, I, {
            [f.selected]: p || R
          }),
          onClick: s,
          "aria-label": O,
          onContextMenu: h,
          focusProps: {
            enabled: !1
          },
          ...x,
          children: null != C && (0, l.jsx)(C, {
            className: f.circleIcon,
            color: "currentColor"
          })
        })
      })
    }), T]
  })
});
t.default = h