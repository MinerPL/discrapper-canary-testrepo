n.d(t, {
  b: function() {
return E;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(442837),
  l = n(451478),
  u = n(806519),
  c = n(768581),
  d = n(624138),
  _ = n(584526);

function E(e) {
  let {
guildId: t,
guildName: n,
guildIcon: i,
iconSize: a,
className: E,
animate: f
  } = e, h = (0, s.e7)([l.Z], () => l.Z.isFocused()), p = c.ZP.getGuildIconURL({
id: t,
icon: i,
size: a,
canAnimate: f && h
  });
  if (null == p) {
let e = (0, d.Zg)(n);
return (0, r.jsx)(u.ZP, {
  mask: u.ZP.Masks.CLAN_ICON,
  width: a,
  height: a,
  className: E,
  children: (0, r.jsx)('div', {
    className: o()(_.guildIconImage, _.acronym),
    children: e
  })
});
  }
  return (0, r.jsx)(u.ZP, {
mask: u.ZP.Masks.CLAN_ICON,
width: a,
height: a,
className: E,
children: (0, r.jsx)('img', {
  src: p,
  alt: n,
  className: _.guildIconImage
})
  });
}
t.Z = i.memo(function(e) {
  let {
guild: t,
iconSize: n,
className: i,
animate: a
  } = e;
  return (0, r.jsx)(E, {
guildName: t.name,
guildId: t.id,
guildIcon: t.icon,
iconSize: n,
className: i,
animate: a
  });
});