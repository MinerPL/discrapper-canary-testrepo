"use strict";
t.r(r), t.d(r, {
  Icon: function() {
    return g
  },
  Divider: function() {
    return f
  },
  default: function() {
    return b
  }
});
var a = t("37983"),
  n = t("884691"),
  i = t("414456"),
  o = t.n(i),
  l = t("353386"),
  s = t("394846"),
  c = t("77078"),
  d = t("597590"),
  u = t("980428"),
  h = t("772280"),
  p = t("587974"),
  m = t("892307");
let g = e => {
    let {
      className: r,
      iconClassName: t,
      children: n,
      selected: i = !1,
      disabled: l = !1,
      showBadge: s = !1,
      color: d,
      foreground: u,
      background: h,
      icon: g,
      onClick: f,
      onContextMenu: y,
      tooltip: b = null,
      tooltipColor: x,
      tooltipPosition: k = "bottom",
      tooltipDisabled: v,
      hideOnClick: C = !0,
      role: S,
      "aria-label": j,
      "aria-hidden": T,
      "aria-checked": w,
      "aria-expanded": N,
      "aria-haspopup": E
    } = e, L = (0, a.jsx)(g, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: o(t, m.icon),
      foreground: null != u ? u : void 0,
      background: null != h ? h : void 0,
      color: d
    }), _ = j;
    return null == _ && "string" == typeof b && (_ = b), (0, a.jsx)(c.Tooltip, {
      text: b,
      color: x,
      position: k,
      hideOnClick: C,
      shouldShow: !v,
      children: e => {
        let {
          onMouseEnter: b,
          onMouseLeave: x,
          onFocus: k,
          onBlur: v
        } = e;
        return null == f ? (0, a.jsx)("div", {
          className: o(r, [m.iconWrapper]),
          children: (0, a.jsx)(g, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: o(t, m.icon),
            foreground: null != u ? u : void 0,
            background: null != h ? h : void 0,
            color: d,
            "aria-hidden": T,
            onMouseEnter: b,
            onMouseLeave: x,
            onFocus: k,
            onBlur: v
          })
        }) : (0, a.jsxs)(c.Clickable, {
          tag: "div",
          onClick: l ? void 0 : f,
          onContextMenu: l ? void 0 : y,
          onMouseEnter: b,
          onMouseLeave: x,
          onFocus: k,
          onBlur: v,
          className: o(r, {
            [m.iconWrapper]: !0,
            [m.clickable]: !l && null != f,
            [m.selected]: i
          }),
          role: S,
          "aria-label": _,
          "aria-hidden": T,
          "aria-checked": w,
          "aria-haspopup": E,
          "aria-expanded": N,
          tabIndex: l || null == f ? -1 : 0,
          children: [s ? (0, a.jsx)(p.default, {
            mask: p.default.Masks.HEADER_BAR_BADGE,
            children: L
          }) : L, s ? (0, a.jsx)("span", {
            className: m.iconBadge
          }) : null, n]
        })
      }
    })
  },
  f = e => {
    let {
      className: r
    } = e;
    return (0, a.jsx)("div", {
      className: o(m.divider, r)
    })
  },
  y = e => {
    let {
      className: r,
      innerClassName: t,
      children: i,
      childrenBottom: u,
      toolbar: h,
      onDoubleClick: p,
      "aria-label": g,
      "aria-labelledby": f,
      role: y,
      scrollable: b,
      transparent: x = !1
    } = e, k = n.useRef(null), v = n.useContext(d.default);
    return (0, a.jsx)("section", {
      className: o(r, m.container, {
        [m.themed]: !x,
        [m.transparent]: x,
        [m.themedMobile]: s.isMobile
      }),
      "aria-label": g,
      "aria-labelledby": f,
      role: y,
      ref: k,
      children: (0, a.jsxs)(c.FocusRingScope, {
        containerRef: k,
        children: [(0, a.jsxs)("div", {
          className: m.upperContainer,
          children: [(0, a.jsxs)("div", {
            className: o(m.children, t, {
              [m.scrollable]: b
            }),
            onDoubleClick: p,
            children: [s.isMobile && null != v ? (0, a.jsx)(l.HamburgerButton, {
              onClick: v,
              className: m.hamburger
            }) : null, i]
          }), null != h ? (0, a.jsx)("div", {
            className: m.toolbar,
            children: h
          }) : null]
        }), u]
      })
    })
  };
y.Icon = g, y.Title = e => {
  let {
    className: r,
    wrapperClassName: t,
    children: n,
    onContextMenu: i,
    onClick: l,
    id: s,
    muted: d = !1,
    level: u = 1
  } = e, h = (0, a.jsx)(c.HeadingLevel, {
    forceLevel: u,
    children: (0, a.jsx)(c.Heading, {
      variant: "heading-md/semibold",
      color: d ? "header-secondary" : void 0,
      className: o(r, m.title),
      id: s,
      children: n
    })
  });
  return null != l ? (0, a.jsx)(c.Clickable, {
    onClick: l,
    onContextMenu: i,
    className: o(t, m.titleWrapper),
    children: h
  }) : (0, a.jsx)("div", {
    className: o(t, m.titleWrapper),
    onContextMenu: i,
    children: h
  })
}, y.Divider = f, y.Caret = function(e) {
  let {
    direction: r = "right"
  } = e;
  return "right" === r ? (0, a.jsx)(h.default, {
    className: m.caret
  }) : (0, a.jsx)(u.default, {
    className: m.caret
  })
};
var b = y