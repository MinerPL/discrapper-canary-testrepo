n(653041);
var r = n(735250);
n(470079);
var i = n(392711),
  a = n.n(i),
  o = n(481060),
  s = n(730749),
  l = n(823379),
  u = n(776192);
let c = (0, s.Z)(e => {
  let {
member: t,
empty: n,
guildId: i
  } = e;
  return n || null == t ? (0, r.jsx)('div', {
className: u.partyMember
  }) : (0, r.jsx)('div', {
className: u.partyMember,
children: (0, r.jsx)(o.Avatar, {
  src: t.getAvatarURL(i, 16),
  'aria-label': t.username,
  size: o.AvatarSizes.SIZE_16,
  className: u.partyMember
})
  });
});
t.Z = e => {
  let {
partySize: t,
members: n,
minAvatarsShown: i = 1,
maxAvatarsShown: o = 2,
guildId: s
  } = e, {
totalSize: d,
knownSize: _
  } = t;
  if (d < i)
return null;
  let E = a()(n).filter(l.lm).take(o).map(e => (0, r.jsx)(c, {
  member: e,
  guildId: s
}, e.id)).value(),
f = d - _;
  for (let e = 0; e < f && E.length < o; e++)
E.push((0, r.jsx)(c, {
  empty: !0,
  guildId: s
}, 'empty-member-'.concat(e)));
  let h = Math.max(Math.min(d - E.length, 99), 0);
  if (1 === h) {
let e = n[o];
E.push((0, r.jsx)(c, {
  member: e,
  guildId: s
}, e.id));
  }
  return (0, r.jsx)('div', {
className: u.wrapper,
children: (0, r.jsxs)('div', {
  className: u.partyMembers,
  children: [
    E,
    h > 1 ? (0, r.jsxs)('div', {
      className: u.partyMemberOverflow,
      children: [
        '+',
        h
      ]
    }) : null
  ]
})
  });
};