"use strict";
n.d(t, {
  JO: function() {
    return T
  },
  iz: function() {
    return h
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(608863),
  l = n(873546),
  u = n(481060),
  _ = n(290297),
  d = n(292937),
  c = n(692437),
  E = n(806519),
  I = n(627267);
let T = e => {
    let {
      className: t,
      iconClassName: n,
      children: r,
      selected: s = !1,
      disabled: a = !1,
      showBadge: l = !1,
      color: _,
      foreground: d,
      background: c,
      icon: T,
      onClick: h,
      onContextMenu: S,
      tooltip: f = null,
      tooltipColor: N,
      tooltipPosition: A = "bottom",
      tooltipDisabled: m,
      hideOnClick: O = !0,
      role: R,
      "aria-label": C,
      "aria-hidden": p,
      "aria-checked": g,
      "aria-expanded": L,
      "aria-haspopup": v
    } = e, D = (0, i.jsx)(T, {
      x: 0,
      y: 0,
      width: 24,
      height: 24,
      className: o()(n, I.icon),
      foreground: null != d ? d : void 0,
      background: null != c ? c : void 0,
      color: _
    }), M = C;
    return null == M && "string" == typeof f && (M = f), (0, i.jsx)(u.Tooltip, {
      text: f,
      color: N,
      position: A,
      hideOnClick: O,
      shouldShow: !m,
      children: e => {
        let {
          onMouseEnter: f,
          onMouseLeave: N,
          onFocus: A,
          onBlur: m
        } = e;
        return null == h ? (0, i.jsx)("div", {
          className: o()(t, [I.iconWrapper]),
          children: (0, i.jsx)(T, {
            x: 0,
            y: 0,
            width: 24,
            height: 24,
            className: o()(n, I.icon),
            foreground: null != d ? d : void 0,
            background: null != c ? c : void 0,
            color: _,
            "aria-hidden": p,
            onMouseEnter: f,
            onMouseLeave: N,
            onFocus: A,
            onBlur: m
          })
        }) : (0, i.jsxs)(u.Clickable, {
          tag: "div",
          onClick: a ? void 0 : h,
          onContextMenu: a ? void 0 : S,
          onMouseEnter: f,
          onMouseLeave: N,
          onFocus: A,
          onBlur: m,
          className: o()(t, {
            [I.iconWrapper]: !0,
            [I.clickable]: !a && null != h,
            [I.selected]: s
          }),
          role: R,
          "aria-label": M,
          "aria-hidden": p,
          "aria-checked": g,
          "aria-haspopup": v,
          "aria-expanded": L,
          tabIndex: a || null == h ? -1 : 0,
          children: [l ? (0, i.jsx)(E.ZP, {
            mask: E.ZP.Masks.HEADER_BAR_BADGE,
            children: D
          }) : D, l ? (0, i.jsx)("span", {
            className: I.iconBadge
          }) : null, r]
        })
      }
    })
  },
  h = e => {
    let {
      className: t
    } = e;
    return (0, i.jsx)("div", {
      className: o()(I.divider, t)
    })
  },
  S = e => {
    let {
      className: t,
      innerClassName: n,
      children: s,
      childrenBottom: d,
      toolbar: c,
      onDoubleClick: E,
      "aria-label": T,
      "aria-labelledby": h,
      role: S,
      scrollable: f,
      transparent: N = !1
    } = e, A = r.useRef(null), m = r.useContext(_.Z);
    return (0, i.jsx)("section", {
      className: o()(t, I.container, {
        [I.themed]: !N,
        [I.transparent]: N,
        [I.themedMobile]: l.tq
      }),
      "aria-label": T,
      "aria-labelledby": h,
      role: S,
      ref: A,
      children: (0, i.jsxs)(u.FocusRingScope, {
        containerRef: A,
        children: [(0, i.jsxs)("div", {
          className: I.upperContainer,
          children: [(0, i.jsxs)("div", {
            className: o()(I.children, n, {
              [I.scrollable]: f
            }),
            onDoubleClick: E,
            children: [l.tq && null != m ? (0, i.jsx)(a.r, {
              onClick: m,
              className: I.hamburger
            }) : null, s]
          }), null != c ? (0, i.jsx)("div", {
            className: I.toolbar,
            children: c
          }) : null]
        }), d]
      })
    })
  };
S.Icon = T, S.Title = e => {
  let {
    className: t,
    wrapperClassName: n,
    children: r,
    onContextMenu: s,
    onClick: a,
    id: l,
    muted: _ = !1,
    level: d = 1
  } = e, c = (0, i.jsx)(u.HeadingLevel, {
    forceLevel: d,
    children: (0, i.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      color: _ ? "header-secondary" : void 0,
      className: o()(t, I.title),
      id: l,
      children: r
    })
  });
  return null != a ? (0, i.jsx)(u.Clickable, {
    onClick: a,
    onContextMenu: s,
    className: o()(n, I.titleWrapper),
    children: c
  }) : (0, i.jsx)("div", {
    className: o()(n, I.titleWrapper),
    onContextMenu: s,
    children: c
  })
}, S.Divider = h, S.Caret = function(e) {
  let {
    direction: t = "right"
  } = e;
  return "right" === t ? (0, i.jsx)(c.Z, {
    className: I.caret
  }) : (0, i.jsx)(d.Z, {
    className: I.caret
  })
}, t.ZP = S