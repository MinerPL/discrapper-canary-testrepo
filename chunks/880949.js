"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(242411),
  l = n(806519),
  u = n(687669);
t.Z = e => {
  let {
    className: t,
    guild: n,
    isSelected: s = !0,
    width: _ = 32,
    height: d = 32,
    shouldAnimate: c = !0,
    isLocked: E = !1
  } = e, [I, T] = r.useState(!1), h = n.getIconURL(32, c && s), S = () => T(!0), f = () => T(!1);
  return (0, i.jsxs)("div", {
    onFocus: S,
    onBlur: f,
    onMouseOver: S,
    onMouseLeave: f,
    children: [(0, i.jsx)(l.ZP, {
      className: o()(u.mask, t),
      mask: s || I ? l.QS.SQUIRCLE : l.QS.AVATAR_DEFAULT,
      width: _,
      height: d,
      children: null == h ? (0, i.jsx)("div", {
        className: o()(u.guildIcon, u.guildIconWithoutImage),
        children: (0, i.jsx)("div", {
          className: u.guildAcronym,
          children: n.acronym
        })
      }) : (0, i.jsx)("img", {
        alt: n.toString(),
        src: h,
        className: u.guildIcon
      })
    }), E ? (0, i.jsx)("div", {
      className: u.categoryItemLockIconContainer,
      children: (0, i.jsx)(a.Z, {
        width: 10,
        height: 10,
        className: u.categoryItemLockIcon
      })
    }) : null]
  })
}