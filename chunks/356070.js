"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("424973");
var s = n("37983");
n("884691");
var l = n("917351"),
  a = n.n(l),
  i = n("77078"),
  r = n("86621"),
  o = n("812204"),
  u = n("506885"),
  d = n("981601"),
  c = n("479020"),
  E = n("449008"),
  f = n("49111"),
  _ = n("224688");
let T = (0, r.default)(e => {
  let {
    member: t,
    empty: n,
    analyticsContext: l,
    guildId: a
  } = e;
  if (n) return (0, s.jsx)("div", {
    className: _.partyMemberEmpty
  });
  if (null == t) return (0, s.jsx)("div", {
    className: _.partyMemberUnknown,
    children: (0, s.jsx)(c.default, {
      className: _.partyMemberUnknownIcon
    })
  });
  let r = {
    location: {
      ...l.location,
      object: f.AnalyticsObjects.AVATAR
    }
  };
  return (0, s.jsx)("div", {
    className: _.partyMemberKnown,
    children: (0, s.jsx)(i.Popout, {
      preload: () => (0, u.default)(t.id, t.getAvatarURL(a, 80), {
        guildId: a
      }),
      renderPopout: e => (0, s.jsx)(d.default, {
        ...e,
        userId: t.id,
        analyticsParams: r,
        newAnalyticsLocations: [o.default.AVATAR]
      }),
      position: "left",
      children: e => (0, s.jsx)(i.Avatar, {
        ...e,
        src: t.getAvatarURL(a, 24),
        "aria-label": t.username,
        size: i.AvatarSizes.SIZE_24,
        className: _.partyMember
      })
    })
  })
});
var I = e => {
  let {
    partySize: t,
    members: n,
    minAvatarsShown: l = 1,
    maxAvatarsShown: i = 2,
    guildId: r
  } = e, {
    unknownSize: o,
    totalSize: u,
    knownSize: d
  } = t;
  if (u < l) return null;
  let c = a(n).filter(E.isNotNullish).take(i).map(e => (0, s.jsx)(T, {
    member: e,
    guildId: r
  }, e.id)).value();
  for (let e = 0; e < o && c.length < i; e++) c.push((0, s.jsx)(T, {
    guildId: r
  }, "unknown-member-".concat(e)));
  let f = u - d - o;
  for (let e = 0; e < f && c.length < i; e++) c.push((0, s.jsx)(T, {
    empty: !0,
    guildId: r
  }, "empty-member-".concat(e)));
  let I = Math.max(Math.min(u - c.length, 99), 0);
  if (1 === I) {
    let e = n[i];
    c.push((0, s.jsx)(T, {
      member: e,
      guildId: r
    }, e.id))
  }
  return (0, s.jsx)("div", {
    className: _.wrapper,
    children: (0, s.jsxs)("div", {
      className: _.partyMembers,
      children: [c, I > 1 ? (0, s.jsxs)("div", {
        className: _.partyMemberOverflow,
        children: ["+", I]
      }) : null]
    })
  })
}