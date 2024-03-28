"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("481060"),
  o = n("806519"),
  u = n("933556");

function d(e) {
  let {
    tooltipText: t,
    children: n,
    onContextMenu: s,
    onClick: d,
    disabled: c,
    icon: f,
    iconForeground: h,
    innerClassName: C,
    tooltipClassName: p,
    onMouseEnter: m,
    onMouseLeave: g,
    "aria-label": E,
    "aria-checked": S,
    role: _,
    tooltipColor: I,
    tooltipForceOpen: N
  } = e, T = a.isValidElement(f) ? f : (0, l.jsx)(f, {
    width: 20,
    height: 20,
    size: "custom",
    foreground: h
  });
  return (0, l.jsx)(r.Tooltip, {
    tooltipClassName: p,
    text: t,
    "aria-label": E,
    color: I,
    forceOpen: N,
    children: e => {
      let {
        onClick: t,
        onMouseEnter: a,
        onMouseLeave: f,
        ...h
      } = e;
      return (0, l.jsxs)(r.Button, {
        ...h,
        look: r.Button.Looks.BLANK,
        size: r.Button.Sizes.NONE,
        disabled: c,
        innerClassName: C,
        wrapperClassName: u.button,
        className: i()(u.button, {
          [u.disabled]: c,
          [u.enabled]: !c
        }),
        onClick: e => {
          null != t && t(), null != d && d(e)
        },
        onMouseEnter: () => {
          null == a || a(), null == m || m()
        },
        onMouseLeave: () => {
          null == f || f(), null == g || g()
        },
        onContextMenu: s,
        role: _,
        "aria-checked": S,
        children: [null != n ? (0, l.jsx)(o.default, {
          width: 20,
          height: 20,
          mask: o.default.Masks.PANEL_BUTTON,
          children: T
        }) : T, n]
      })
    }
  })
}