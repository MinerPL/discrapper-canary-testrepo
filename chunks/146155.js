"use strict";
n.r(t), n.d(t, {
  MenuRadioItem: function() {
    return h
  }
});
var i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  a = n.n(r),
  o = n("227645"),
  l = n("199285"),
  u = n("697917"),
  d = n("904276"),
  c = n("875436"),
  f = n("389802"),
  _ = n("946032");

function h(e) {
  let {
    color: t = "default",
    label: n,
    checked: r,
    subtext: h,
    disabled: g,
    isFocused: m,
    menuItemProps: E,
    action: p
  } = e, v = s.useRef(null);
  return s.useEffect(() => {
    m && (0, u.ensureItemVisible)(v)
  }, [m]), (0, i.jsxs)(o.Clickable, {
    innerRef: v,
    className: a(_.item, _.labelContainer, f.MENU_ITEM_COLORS[t], {
      [_.disabled]: g,
      [_.focused]: m
    }),
    onClick: g ? void 0 : p,
    ...E,
    "aria-checked": r,
    "aria-disabled": g,
    children: [(0, i.jsxs)("div", {
      className: _.label,
      children: [(0, l.renderSubnode)(n, e), null != h && (0, i.jsx)("div", {
        className: _.subtext,
        children: h
      })]
    }), (0, i.jsx)("div", {
      className: _.iconContainer,
      children: r ? (0, i.jsx)(c.default, {
        className: _.icon,
        background: _.radio,
        foreground: _.radioSelection
      }) : (0, i.jsx)(d.default, {
        className: _.icon,
        foreground: _.radio
      })
    })]
  })
}