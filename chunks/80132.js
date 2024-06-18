"use strict";
n.d(t, {
  Z: function() {
    return A
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(315263),
  l = n(100527),
  u = n(906732),
  _ = n(617136),
  d = n(497505),
  c = n(626135),
  E = n(785717),
  I = n(221292),
  T = n(290421),
  h = n(228168),
  S = n(981631),
  f = n(689938),
  N = n(477040);

function A(e) {
  let {
    badges: t,
    className: n,
    badgeClassName: r,
    onClose: A
  } = e, {
    analyticsLocations: m
  } = (0, u.ZP)(l.Z.BADGE), {
    trackUserProfileAction: O,
    ...R
  } = (0, E.KZ)();
  return (0, i.jsx)("div", {
    className: s()(N.container, n),
    "aria-label": f.Z.Messages.PROFILE_USER_BADGES,
    role: "group",
    children: t.map(e => (0, i.jsx)(o.TooltipContainer, {
      text: e.description,
      delay: h.vB,
      children: (0, i.jsx)(o.Anchor, {
        onClick: t => {
          O({
            action: "PRESS_BADGE"
          }), (0, I.NE)({
            badge: e.id,
            analyticsLocations: m,
            ...R
          });
          let n = null != e.link ? (0, a.default)(e.link, {
            analyticsLocations: m
          }) : null;
          if (null != n) return null == A || A(), n(t)
        },
        onMouseEnter: () => {
          e.id === T.i && c.default.track(S.rMx.QUEST_CONTENT_VIEWED, {
            ...(0, _.mH)(d.jn.QUEST_BADGE)
          }), O({
            action: "HOVER_BADGE"
          }), (0, I.Qf)({
            badge: e.id,
            analyticsLocations: m,
            ...R
          })
        },
        href: e.link,
        children: (0, i.jsx)("img", {
          alt: " ",
          "aria-hidden": !0,
          src: (0, h.jC)(e.icon),
          className: s()(N.badge, r)
        })
      })
    }, e.id))
  })
}