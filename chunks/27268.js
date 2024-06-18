"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(278297),
  u = n(897353),
  _ = n(689938),
  d = n(954886);

function c(e) {
  let {
    onPlay: t,
    className: n,
    inactive: s
  } = e, c = r.useRef(null), E = (0, i.jsx)("div", {
    className: d.iconWrapper,
    ref: c,
    children: (0, i.jsx)(u.Z, {
      className: o()(d.icon)
    })
  });
  return (0, i.jsx)(l.G.Consumer, {
    children: e => s || null == t ? (0, i.jsx)("div", {
      className: d.cover,
      children: E
    }) : (0, i.jsx)(a.Clickable, {
      className: o()(n, d.cover, {
        [d.active]: !e.disableInteractions
      }),
      onClick: t,
      tabIndex: 0,
      "aria-label": _.Z.Messages.PLAY,
      focusProps: {
        ringTarget: c
      },
      children: E
    })
  })
}