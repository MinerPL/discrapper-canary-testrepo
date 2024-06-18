"use strict";
n(653041);
var i = n(735250);
n(470079);
var r = n(392711),
  s = n.n(r),
  o = n(481060),
  a = n(730749),
  l = n(823379),
  u = n(31410);
let _ = (0, a.Z)(e => {
  let {
    member: t,
    empty: n,
    guildId: r
  } = e;
  return n || null == t ? (0, i.jsx)("div", {
    className: u.partyMember
  }) : (0, i.jsx)("div", {
    className: u.partyMember,
    children: (0, i.jsx)(o.Avatar, {
      src: t.getAvatarURL(r, 16),
      "aria-label": t.username,
      size: o.AvatarSizes.SIZE_16,
      className: u.partyMember
    })
  })
});
t.Z = e => {
  let {
    partySize: t,
    members: n,
    minAvatarsShown: r = 1,
    maxAvatarsShown: o = 2,
    guildId: a
  } = e, {
    totalSize: d,
    knownSize: c
  } = t;
  if (d < r) return null;
  let E = s()(n).filter(l.lm).take(o).map(e => (0, i.jsx)(_, {
      member: e,
      guildId: a
    }, e.id)).value(),
    I = d - c;
  for (let e = 0; e < I && E.length < o; e++) E.push((0, i.jsx)(_, {
    empty: !0,
    guildId: a
  }, "empty-member-".concat(e)));
  let T = Math.max(Math.min(d - E.length, 99), 0);
  if (1 === T) {
    let e = n[o];
    E.push((0, i.jsx)(_, {
      member: e,
      guildId: a
    }, e.id))
  }
  return (0, i.jsx)("div", {
    className: u.wrapper,
    children: (0, i.jsxs)("div", {
      className: u.partyMembers,
      children: [E, T > 1 ? (0, i.jsxs)("div", {
        className: u.partyMemberOverflow,
        children: ["+", T]
      }) : null]
    })
  })
}