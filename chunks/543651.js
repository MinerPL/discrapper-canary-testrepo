"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(913527),
  a = n.n(o),
  l = n(442837),
  u = n(481060),
  _ = n(835473),
  d = n(318374),
  c = n(594174),
  E = n(366695),
  I = n(823379),
  T = n(689938),
  h = n(471387);
t.Z = function(e) {
  let {
    createdAt: t,
    participantIds: n,
    applicationId: r,
    title: o,
    guildId: S,
    className: f
  } = e, N = (0, _.q)(r), A = (0, l.Wu)([c.default], () => {
    var e;
    return null !== (e = n.map(e => c.default.getUser(e)).filter(I.lm)) && void 0 !== e ? e : []
  }), m = null == N ? void 0 : N.name, O = a()(t).fromNow();
  return null == t ? null : (0, i.jsxs)("div", {
    className: s()(f, h.container),
    children: [(0, i.jsx)(E.Z, {
      game: N
    }), (0, i.jsxs)("div", {
      className: h.textSection,
      children: [null != o && "" !== o ? (0, i.jsx)(u.Text, {
        variant: "text-md/semibold",
        color: "interactive-active",
        children: o
      }) : (0, i.jsx)(u.Text, {
        variant: "text-md/semibold",
        color: "text-muted",
        children: T.Z.Messages.CLIPS_UNTITLED
      }), (0, i.jsxs)(u.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        className: h.__invalid_subtitle,
        children: [null != m ? "".concat(m, " • ") : null, O]
      }), (0, i.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        className: h.__invalid_subtitle
      })]
    }), null != A && A.length > 0 && (0, i.jsx)(d.Z, {
      maxUsers: 4,
      users: A,
      className: h.__invalid_facePile,
      guildId: S
    })]
  })
}