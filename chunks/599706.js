n(653041);
var i = n(735250);
n(470079);
var a = n(392711),
  s = n.n(a),
  r = n(481060),
  l = n(730749),
  o = n(100527),
  c = n(484459),
  d = n(103575),
  u = n(463618),
  _ = n(823379),
  E = n(981631),
  I = n(809079);
let m = (0, l.Z)(e => {
  let {
member: t,
empty: n,
analyticsContext: a,
guildId: s
  } = e;
  if (n)
return (0, i.jsx)('div', {
  className: I.partyMemberEmpty
});
  if (null == t)
return (0, i.jsx)('div', {
  className: I.partyMemberUnknown,
  children: (0, i.jsx)(u.Z, {
    className: I.partyMemberUnknownIcon
  })
});
  let l = {
location: {
  ...a.location,
  object: E.qAy.AVATAR
}
  };
  return (0, i.jsx)('div', {
className: I.partyMemberKnown,
children: (0, i.jsx)(r.Popout, {
  preload: () => (0, c.W)(t.id, t.getAvatarURL(s, 80), {
    guildId: s
  }),
  renderPopout: e => (0, i.jsx)(d.Z, {
    ...e,
    location: 'PartyAvatars',
    userId: t.id,
    guildId: s,
    analyticsParams: l,
    newAnalyticsLocations: [o.Z.AVATAR]
  }),
  position: 'left',
  children: e => (0, i.jsx)(r.Avatar, {
    ...e,
    src: t.getAvatarURL(s, 24),
    'aria-label': t.username,
    size: r.AvatarSizes.SIZE_24,
    className: I.partyMember
  })
})
  });
});
t.Z = e => {
  let {
partySize: t,
members: n,
minAvatarsShown: a = 1,
maxAvatarsShown: r = 2,
guildId: l
  } = e, {
unknownSize: o,
totalSize: c,
knownSize: d
  } = t;
  if (c < a)
return null;
  let u = s()(n).filter(_.lm).take(r).map(e => (0, i.jsx)(m, {
member: e,
guildId: l
  }, e.id)).value();
  for (let e = 0; e < o && u.length < r; e++)
u.push((0, i.jsx)(m, {
  guildId: l
}, 'unknown-member-'.concat(e)));
  let E = c - d - o;
  for (let e = 0; e < E && u.length < r; e++)
u.push((0, i.jsx)(m, {
  empty: !0,
  guildId: l
}, 'empty-member-'.concat(e)));
  let T = Math.max(Math.min(c - u.length, 99), 0);
  if (1 === T) {
let e = n[r];
u.push((0, i.jsx)(m, {
  member: e,
  guildId: l
}, e.id));
  }
  return (0, i.jsx)('div', {
className: I.wrapper,
children: (0, i.jsxs)('div', {
  className: I.partyMembers,
  children: [
    u,
    T > 1 ? (0, i.jsxs)('div', {
      className: I.partyMemberOverflow,
      children: [
        '+',
        T
      ]
    }) : null
  ]
})
  });
};