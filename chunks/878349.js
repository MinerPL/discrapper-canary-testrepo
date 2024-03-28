"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("442837"),
  o = n("780384"),
  u = n("481060"),
  d = n("393238"),
  c = n("410030"),
  f = n("607070"),
  h = n("466794"),
  m = n("976644"),
  p = n("455784"),
  E = n("546240"),
  C = n("952009");

function g(e) {
  let {
    checked: t,
    labelText: n,
    tooltipText: s,
    canToggle: g,
    iconAltText: S,
    onChange: _,
    tooltipColor: T,
    className: I,
    id: A = "fancybutton-toggle",
    collapseWhenChecked: v = !0,
    onClick: N,
    disabled: x
  } = e, M = (0, r.useStateFromStores)([f.default], () => f.default.useReducedMotion), [R, L] = l.useState(!1), y = (0, c.default)(), O = (0, o.isThemeDark)(y) || t ? C : E, {
    width: j = 0,
    ref: P
  } = (0, d.default)(), {
    width: D = 0,
    ref: b
  } = (0, d.default)();
  return (0, a.jsxs)(u.TooltipContainer, {
    text: (0, a.jsx)(h.NitroTooltipLabel, {
      textColor: "always-white",
      tooltipText: s
    }),
    position: "top",
    color: null != T ? T : x ? u.Tooltip.Colors.BLACK : u.Tooltip.Colors.BRAND,
    "aria-label": s,
    tooltipClassName: p.tooltip,
    className: p.tooltipContainer,
    children: [(0, a.jsx)("input", {
      className: p.visuallyHidden,
      checked: t,
      onChange: function() {
        if (g) {
          let e = !t;
          L(!0), null == _ || _(e)
        }
        "function" == typeof N && N()
      },
      id: A,
      type: "checkbox",
      disabled: x
    }), (0, a.jsxs)("label", {
      htmlFor: A,
      className: i()(p.label, I, {
        [p.transition]: R,
        [p.labelChecked]: t,
        [p.labelUnchecked]: !t && !g
      }),
      style: v ? {
        width: t ? j : j + D
      } : void 0,
      children: [t ? (0, a.jsx)(m.Shine, {
        className: p.shine,
        shinePaused: M
      }) : null, (0, a.jsx)("img", {
        ref: P,
        src: O,
        alt: S
      }), (0, a.jsx)("span", {
        ref: b,
        children: (0, a.jsx)(u.Text, {
          className: i()(p.burstText, {
            [p.visuallyHidden]: t && v,
            [p.burstTextChecked]: t
          }),
          variant: "text-sm/semibold",
          children: n
        })
      })]
    })]
  })
}