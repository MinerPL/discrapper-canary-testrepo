"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("819855"),
  o = n("77078"),
  d = n("731898"),
  c = n("841098"),
  f = n("206230"),
  h = n("62587"),
  m = n("181114"),
  p = n("227054"),
  E = n("277842"),
  g = n("833345");

function S(e) {
  let {
    checked: t,
    labelText: n,
    tooltipText: s,
    canToggle: S,
    iconAltText: C,
    onChange: _,
    tooltipColor: I,
    className: T,
    id: v = "fancybutton-toggle",
    collapseWhenChecked: x = !0,
    onClick: N,
    disabled: A
  } = e, M = (0, r.useStateFromStores)([f.default], () => f.default.useReducedMotion), [R, j] = l.useState(!1), L = (0, c.default)(), y = (0, u.isThemeDark)(L) || t ? g : E, {
    width: O = 0,
    ref: P
  } = (0, d.default)(), {
    width: D = 0,
    ref: b
  } = (0, d.default)();
  return (0, a.jsxs)(o.TooltipContainer, {
    text: (0, a.jsx)(h.NitroTooltipLabel, {
      textColor: "always-white",
      tooltipText: s
    }),
    position: "top",
    color: null != I ? I : A ? o.Tooltip.Colors.BLACK : o.Tooltip.Colors.BRAND,
    "aria-label": s,
    tooltipClassName: p.tooltip,
    className: p.tooltipContainer,
    children: [(0, a.jsx)("input", {
      className: p.visuallyHidden,
      checked: t,
      onChange: function() {
        if (S) {
          let e = !t;
          j(!0), null == _ || _(e)
        }
        "function" == typeof N && N()
      },
      id: v,
      type: "checkbox",
      disabled: A
    }), (0, a.jsxs)("label", {
      htmlFor: v,
      className: i(p.label, T, {
        [p.transition]: R,
        [p.labelChecked]: t,
        [p.labelUnchecked]: !t && !S
      }),
      style: x ? {
        width: t ? O : O + D
      } : void 0,
      children: [t ? (0, a.jsx)(m.Shine, {
        className: p.shine,
        shinePaused: M
      }) : null, (0, a.jsx)("img", {
        ref: P,
        src: y,
        alt: C
      }), (0, a.jsx)("span", {
        ref: b,
        children: (0, a.jsx)(o.Text, {
          className: i(p.burstText, {
            [p.visuallyHidden]: t && x,
            [p.burstTextChecked]: t
          }),
          variant: "text-sm/semibold",
          children: n
        })
      })]
    })]
  })
}