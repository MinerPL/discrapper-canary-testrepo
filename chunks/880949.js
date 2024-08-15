n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  l = n(686546),
  u = n(296564);
t.Z = e => {
  let {
className: t,
guild: n,
isSelected: a = !0,
width: c = 32,
height: d = 32,
shouldAnimate: _ = !0,
isLocked: E = !1
  } = e, [f, h] = i.useState(!1), p = n.getIconURL(32, _ && a), m = () => h(!0), I = () => h(!1);
  return (0, r.jsxs)('div', {
onFocus: m,
onBlur: I,
onMouseOver: m,
onMouseLeave: I,
children: [
  (0, r.jsx)(l.ZP, {
    className: s()(u.mask, t),
    mask: a || f ? l.QS.SQUIRCLE : l.QS.AVATAR_DEFAULT,
    width: c,
    height: d,
    children: null == p ? (0, r.jsx)('div', {
      className: s()(u.guildIcon, u.guildIconWithoutImage),
      children: (0, r.jsx)('div', {
        className: u.guildAcronym,
        children: n.acronym
      })
    }) : (0, r.jsx)('img', {
      alt: n.toString(),
      src: p,
      className: u.guildIcon
    })
  }),
  E ? (0, r.jsx)('div', {
    className: u.categoryItemLockIconContainer,
    children: (0, r.jsx)(o.LockIcon, {
      size: 'custom',
      color: 'currentColor',
      width: 10,
      height: 10,
      className: u.categoryItemLockIcon
    })
  }) : null
]
  });
};