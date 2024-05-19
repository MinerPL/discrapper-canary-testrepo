"use strict";
n.r(t), n("653041");
var s = n("735250");
n("470079");
var a = n("392711"),
  l = n.n(a),
  i = n("481060"),
  r = n("730749"),
  o = n("100527"),
  u = n("484459"),
  d = n("103575"),
  c = n("463618"),
  f = n("823379"),
  E = n("981631"),
  _ = n("912625");
let m = (0, r.default)(e => {
  let {
    member: t,
    empty: n,
    analyticsContext: a,
    guildId: l
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
      ...a.location,
      object: E.AnalyticsObjects.AVATAR
    }
  };
  return (0, s.jsx)("div", {
    className: _.partyMemberKnown,
    children: (0, s.jsx)(i.Popout, {
      preload: () => (0, u.maybeFetchUserProfileForPopout)(t.id, t.getAvatarURL(l, 80), {
        guildId: l
      }),
      renderPopout: e => (0, s.jsx)(d.default, {
        ...e,
        location: "PartyAvatars",
        userId: t.id,
        guildId: l,
        analyticsParams: r,
        newAnalyticsLocations: [o.default.AVATAR]
      }),
      position: "left",
      children: e => (0, s.jsx)(i.Avatar, {
        ...e,
        src: t.getAvatarURL(l, 24),
        "aria-label": t.username,
        size: i.AvatarSizes.SIZE_24,
        className: _.partyMember
      })
    })
  })
});
t.default = e => {
  let {
    partySize: t,
    members: n,
    minAvatarsShown: a = 1,
    maxAvatarsShown: i = 2,
    guildId: r
  } = e, {
    unknownSize: o,
    totalSize: u,
    knownSize: d
  } = t;
  if (u < a) return null;
  let c = l()(n).filter(f.isNotNullish).take(i).map(e => (0, s.jsx)(m, {
    member: e,
    guildId: r
  }, e.id)).value();
  for (let e = 0; e < o && c.length < i; e++) c.push((0, s.jsx)(m, {
    guildId: r
  }, "unknown-member-".concat(e)));
  let E = u - d - o;
  for (let e = 0; e < E && c.length < i; e++) c.push((0, s.jsx)(m, {
    empty: !0,
    guildId: r
  }, "empty-member-".concat(e)));
  let T = Math.max(Math.min(u - c.length, 99), 0);
  if (1 === T) {
    let e = n[i];
    c.push((0, s.jsx)(m, {
      member: e,
      guildId: r
    }, e.id))
  }
  return (0, s.jsx)("div", {
    className: _.wrapper,
    children: (0, s.jsxs)("div", {
      className: _.partyMembers,
      children: [c, T > 1 ? (0, s.jsxs)("div", {
        className: _.partyMemberOverflow,
        children: ["+", T]
      }) : null]
    })
  })
}