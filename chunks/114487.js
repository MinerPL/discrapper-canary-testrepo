n.d(t, {
  b: function() {
return E;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(686546),
  u = n(451478),
  c = n(768581),
  d = n(624138),
  _ = n(601581);

function E(e) {
  let {
guildId: t,
guildName: n,
guildIcon: i,
iconSize: a,
className: E,
animate: f
  } = e, h = (0, o.e7)([u.Z], () => u.Z.isFocused()), p = c.ZP.getGuildIconURL({
id: t,
icon: i,
size: a,
canAnimate: f && h
  });
  if (null == p) {
let e = (0, d.Zg)(n);
return (0, r.jsx)(l.ZP, {
  mask: l.ZP.Masks.CLAN_ICON,
  width: a,
  height: a,
  className: E,
  children: (0, r.jsx)('div', {
    className: s()(_.guildIconImage, _.acronym),
    children: e
  })
});
  }
  return (0, r.jsx)(l.ZP, {
mask: l.ZP.Masks.CLAN_ICON,
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