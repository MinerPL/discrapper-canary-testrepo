i.d(n, {
  Z: function() {
return u;
  }
});
var t = i(735250),
  a = i(470079),
  r = i(481060),
  o = i(768581),
  l = i(924489),
  s = i(950854),
  c = i(491576),
  d = i(63033);

function u(e) {
  var n, i, u, _, p;
  let {
application: m,
className: I,
childrenClassName: f,
animatesOnHover: g,
onClick: h,
...C
  } = e, v = o.ZP.getApplicationIconURL({
id: m.id,
icon: m.icon,
size: 48
  }), E = (0, c.Z)({
application: m
  }), x = null === (n = m.categories) || void 0 === n ? void 0 : n[0], b = (null !== (_ = null === (i = m.directory_entry) || void 0 === i ? void 0 : i.guild_count) && void 0 !== _ ? _ : 0) > 0 || E.length > 0, A = a.useCallback(() => {
h({
  mutualGuilds: E
});
  }, [
h,
E
  ]), P = (0, t.jsx)(l.Z, {
application: m,
textVariant: 'text-xs/normal',
mutualGuilds: E,
mutualGuildShownMax: 3,
guildIconSize: l.x.SMALL,
compact: !0
  });
  return (0, t.jsxs)(s.Z, {
className: I,
onClick: A,
iconSrc: v,
header: m.name,
subheader: null != x && (0, t.jsx)(r.Text, {
  tag: 'span',
  color: 'header-secondary',
  variant: 'text-xs/normal',
  children: x.name
}),
animatesOnHover: g,
...C,
children: [
  (null != m.description || null != f) && (0, t.jsx)('div', {
    className: f,
    children: (0, t.jsx)(r.Text, {
      className: d.listingDescription,
      variant: 'text-sm/normal',
      lineClamp: 2,
      children: null !== (p = null === (u = m.directory_entry) || void 0 === u ? void 0 : u.short_description) && void 0 !== p ? p : m.description
    })
  }),
  b && (0, t.jsx)('div', {
    className: d.bottomGuildCountContainer,
    children: P
  })
]
  });
}