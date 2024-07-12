var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(704358),
  s = n(193492);
let l = Object.freeze({
STANDARD: o.colorStandard,
MUTED: o.colorMuted,
ERROR: o.colorError,
BRAND: o.colorBrand,
LINK: o.colorLink,
HEADER_PRIMARY: o.colorHeaderPrimary,
HEADER_SECONDARY: o.colorHeaderSecondary,
STATUS_YELLOW: o.colorStatusYellow,
STATUS_GREEN: o.colorStatusGreen,
STATUS_RED: o.colorStatusRed,
INTERACTIVE_ACTIVE: o.colorInteractiveActive,
INTERACTIVE_NORMAL: o.colorInteractiveNormal,
ALWAYS_WHITE: o.colorWhite,
CUSTOM: null
  }),
  u = Object.freeze({
SIZE_10: s.size10,
SIZE_12: s.size12,
SIZE_14: s.size14,
SIZE_16: s.size16,
SIZE_20: s.size20,
SIZE_24: s.size24,
SIZE_32: s.size32
  }),
  c = e => {
let {
  className: t,
  color: n = l.STANDARD,
  size: i = u.SIZE_14,
  tag: s = 'div',
  selectable: c = !1,
  strong: d = !1,
  children: _,
  style: E,
  'aria-label': f,
  ...h
} = e;
return (0, r.jsx)(s, {
  'aria-label': f,
  className: a()(n, i, t, {
    [o.selectable]: c,
    [o.strong]: d
  }),
  style: E,
  ...h,
  children: _
});
  };
c.Colors = l, c.Sizes = u, t.Z = c;