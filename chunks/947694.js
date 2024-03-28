"use strict";
a.r(t), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("803997"),
  i = a.n(s),
  d = a("481060"),
  r = a("623113"),
  u = a("113575");
t.default = n.forwardRef(function(e, t) {
  let {
    className: a,
    children: s,
    ariaLabel: o,
    onContextMenu: c,
    onCardClick: f,
    onItemClick: m,
    listItemProps: h,
    itemId: g,
    selected: E,
    ..._
  } = e, [I, x] = (0, r.default)(t), S = n.useRef(null);
  return (0, l.jsxs)("div", {
    ref: x,
    className: i()(u.card, u.interactiveCard, {
      [u.selected]: E
    }, a),
    "data-item-id": g,
    onContextMenu: c,
    onClick: e => null == f ? void 0 : f(e, I.current),
    ..._,
    children: [(0, l.jsx)(d.Clickable, {
      className: u.clickableTarget,
      innerRef: S,
      "aria-label": o,
      onClick: m,
      ...h
    }), s]
  })
})