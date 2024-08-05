a.d(n, {
  m: function() {
return u;
  }
});
var t = a(735250);
a(470079);
var s = a(468194),
  i = a(399606),
  l = a(481060),
  r = a(430824),
  o = a(768581),
  c = a(543964);

function u(e) {
  let {
guildId: n
  } = e, a = (0, i.e7)([r.Z], () => r.Z.getGuild(n));
  if (null == a)
return null;
  let u = null;
  if (null != a.icon) {
let e = o.ZP.getGuildIconURL({
  id: a.id,
  icon: a.icon,
  size: 40
});
u = (0, t.jsx)(l.Avatar, {
  src: e,
  'aria-label': a.name,
  size: l.AvatarSizes.SIZE_24
});
  } else {
let e = (0, s.Zg)(a.name).slice(0, 2);
u = (0, t.jsx)(l.Text, {
  variant: 'text-xs/semibold',
  className: c.acronym,
  'aria-hidden': !0,
  children: e
});
  }
  return (0, t.jsxs)('div', {
className: c.container,
children: [
  u,
  (0, t.jsx)(l.Text, {
    variant: 'text-md/semibold',
    className: c.text,
    children: a.name
  })
]
  });
}