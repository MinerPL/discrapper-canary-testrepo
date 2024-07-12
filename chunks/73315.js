n(627341);
var i = n(735250);
n(470079);
var s = n(120356),
  o = n.n(s),
  a = n(278074),
  l = n(481060),
  r = n(169525),
  c = n(765523);
t.Z = e => {
  let {
obscureReason: t,
iconClassname: n
  } = e;
  return (0, a.EQ)(t).with(r.wk.EXPLICIT_CONTENT, () => (0, i.jsx)(l.ImageWarningIcon, {
className: o()(n, c.obscuredIcon),
color: 'white'
  })).with(r.wk.SPOILER, () => (0, i.jsx)(l.EyeIcon, {
size: 'md',
color: 'currentColor',
className: n
  })).otherwise(() => null);
};