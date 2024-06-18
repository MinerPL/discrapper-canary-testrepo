"use strict";
n.d(t, {
  V: function() {
    return i
  },
  Z: function() {
    return p
  }
}), n(653041);
var i, r, s = n(735250);
n(470079);
var o = n(120356),
  a = n.n(o),
  l = n(481060),
  u = n(315263),
  _ = n(100527),
  d = n(906732),
  c = n(688465),
  E = n(617136),
  I = n(497505),
  T = n(626135),
  h = n(785717),
  S = n(221292),
  f = n(290421),
  N = n(318661),
  A = n(228168),
  m = n(981631),
  O = n(689938),
  R = n(896599),
  C = n(839973);

function p(e) {
  let {
    user: t,
    guildId: n,
    className: i,
    shrinkAtCount: r,
    shrinkToSize: o,
    isTryItOutFlow: p,
    onBadgeClick: g,
    size: L = 0
  } = e, v = (0, N.ZP)(t.id, n), {
    analyticsLocations: D
  } = (0, d.ZP)(_.Z.BADGE), {
    trackUserProfileAction: M,
    ...P
  } = (0, h.KZ)(), y = (0, f.Z)(v).map(e => ({
    ...e,
    src: (0, A.jC)(e.icon)
  }));
  if (t.isClyde()) return (0, s.jsx)("div", {
    className: a()(i, R.container, R.clydeBadgeList),
    "aria-label": O.Z.Messages.PROFILE_USER_BADGES,
    role: "group",
    children: (0, s.jsx)(c.Z, {})
  });
  p && null == y.find(e => "premium" === e.id) && y.push({
    id: "premium",
    src: C,
    description: O.Z.Messages.PREMIUM_BADGE_TOOLTIP.format({
      date: new Date
    })
  });
  let U = null != r && null != o && y.length > r ? o : L;
  return (0, s.jsx)(d.Gt, {
    value: D,
    children: (0, s.jsx)("div", {
      className: a()(i, y.length > 0 ? R.containerWithContent : R.container),
      "aria-label": O.Z.Messages.PROFILE_USER_BADGES,
      role: "group",
      children: y.map(e => (0, s.jsx)(l.Tooltip, {
        position: "top",
        text: e.description,
        spacing: 12,
        children: t => (0, s.jsx)(l.Anchor, {
          ...t,
          onClick: n => {
            var i;
            M({
              action: "PRESS_BADGE"
            }), (0, S.NE)({
              badge: e.id,
              analyticsLocations: D,
              ...P
            }), null === (i = t.onClick) || void 0 === i || i.call(t);
            let r = null != e.link ? (0, u.default)(e.link, {
              analyticsLocations: D
            }) : null;
            if (null != r) return null == g || g(), r(n)
          },
          onMouseEnter: () => {
            var n;
            e.id === f.i && (T.default.track(m.rMx.QUEST_CONTENT_VIEWED, {
              ...(0, E.mH)(I.jn.QUEST_BADGE)
            }), (0, S.Qf)({
              badge: e.id,
              analyticsLocations: D,
              ...P
            })), null === (n = t.onMouseEnter) || void 0 === n || n.call(t)
          },
          href: e.link,
          children: (0, s.jsx)("img", {
            alt: " ",
            "aria-hidden": !0,
            src: e.src,
            className: a()({
              [R.profileBadge24]: 0 === U,
              [R.profileBadge22]: 1 === U,
              [R.profileBadge20]: 2 === U,
              [R.profileBadge18]: 3 === U
            })
          })
        })
      }, e.id))
    })
  })
}(r = i || (i = {}))[r.SIZE_24 = 0] = "SIZE_24", r[r.SIZE_22 = 1] = "SIZE_22", r[r.SIZE_20 = 2] = "SIZE_20", r[r.SIZE_18 = 3] = "SIZE_18"