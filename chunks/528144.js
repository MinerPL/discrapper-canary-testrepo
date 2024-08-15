var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(481060),
  o = n(333806),
  l = n(986809);
let u = Object.freeze({
SIZE_10: l.size10,
SIZE_12: l.size12,
SIZE_14: l.size14,
SIZE_16: l.size16,
SIZE_20: l.size20,
SIZE_24: l.size24,
SIZE_32: l.size32
  }),
  c = e => {
let {
  id: t,
  muted: n = !1,
  className: i = o.wrapper,
  size: l = u.SIZE_14,
  selectable: c = !1,
  children: d,
  color: _,
  onClick: E,
  onContextMenu: f,
  style: h,
  title: p,
  uppercase: m
} = e;
return (0, r.jsx)(s.H, {
  role: null != E ? 'button' : void 0,
  onClick: E,
  onContextMenu: f,
  id: t,
  className: a()(i, {
    [o.base]: !0,
    [l]: !0,
    [o.selectable]: c,
    [o.muted]: n,
    [o.uppercase]: m
  }),
  title: p,
  style: null != _ ? {
    ...h,
    color: _
  } : h,
  children: d
});
  };
c.Sizes = u, t.Z = c;