"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(693789),
  a = n(481060),
  l = n(47200);

function u(e) {
  let {
    variant: t,
    text: n,
    icon: r,
    tooltipDelay: u,
    tooltipClassName: _,
    className: d,
    innerClassName: c,
    ...E
  } = e, I = {
    [l.text]: "text" === t,
    [l.icon]: "icon" === t,
    [l.banner]: "banner" === t
  };
  return (0, i.jsx)(a.TooltipContainer, {
    text: n,
    "aria-label": E["aria-label"],
    delay: u,
    tooltipClassName: _,
    shouldShow: "text" !== t,
    children: (0, i.jsxs)(o.zx, {
      className: s()(l.button, I, d),
      innerClassName: s()(l.buttonInner, I, c),
      color: s()(o.Tt.PRIMARY, l.color, I),
      look: o.zx.Looks.FILLED,
      size: "text" === t ? o.zx.Sizes.SMALL : o.zx.Sizes.NONE,
      grow: "text" === t,
      ...E,
      children: [null != r && (0, i.jsx)(r, {
        width: 16,
        height: 16,
        color: "currentColor"
      }), "text" === t && n]
    })
  })
}