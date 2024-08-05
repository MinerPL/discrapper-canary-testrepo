n.d(t, {
  Z: function() {
return c;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(481060),
  o = n(436088),
  l = n(806519),
  u = n(446066);

function c(e) {
  let {
width: t = 20,
height: n = 20,
className: i
  } = e;
  return (0, r.jsxs)('div', {
className: a()(u.icon, i),
children: [
  (0, r.jsx)(l.ZP, {
    mask: l.ZP.Masks.STATUS_SCREENSHARE,
    width: t,
    height: n,
    children: (0, r.jsx)(o.Z, {
      width: t,
      height: n
    })
  }),
  (0, r.jsx)(s.CloseSmallIcon, {
    size: 'md',
    color: 'currentColor',
    className: u.badge
  })
]
  });
}