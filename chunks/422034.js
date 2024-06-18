"use strict";
n.d(t, {
  O: function() {
    return T
  },
  Z: function() {
    return I
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(204197),
  _ = n(357355),
  d = n(182294),
  c = n(689938),
  E = n(349768);

function I(e) {
  let {
    smallerText: t,
    className: n,
    textColor: s
  } = e, u = (0, a.e7)([_.Z], () => _.Z.affinities.slice(0, 3).reverse()), I = u.map((e, t) => (0, i.jsx)(T, {
    affinity: e,
    applyMask: t !== u.length - 1,
    size: d.EF.SIZE_32
  }, e.id)), h = e => null != e.globalName ? e.globalName : e.username, S = r.useMemo(() => 3 === u.length ? c.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_3.format({
    username: h(u[2])
  }) : 2 === u.length ? c.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_2.format({
    username: h(u[1]),
    otherUsername: h(u[0])
  }) : 1 === u.length ? c.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_1.format({
    username: h(u[0])
  }) : "", [u]);
  return 0 === u.length ? null : (0, i.jsxs)("div", {
    className: o()(E.container, n),
    children: [(0, i.jsx)("div", {
      className: E.iconContainer,
      children: I
    }), (0, i.jsx)("div", {
      className: E.textContainer,
      children: (0, i.jsx)(function() {
        return t ? (0, i.jsx)(l.Text, {
          variant: "text-lg/medium",
          color: s,
          children: S
        }) : (0, i.jsx)(l.Heading, {
          variant: "heading-xl/medium",
          color: s,
          children: S
        })
      }, {})
    })]
  })
}

function T(e) {
  let {
    affinity: t,
    applyMask: n,
    size: r
  } = e, {
    avatarSrc: s,
    eventHandlers: a
  } = (0, u.Z)({
    user: t,
    size: r,
    animateOnHover: !0
  });
  return (0, i.jsx)(l.Avatar, {
    className: o()(E.icon, {
      [E.mask]: n
    }),
    src: s,
    "aria-label": t.username,
    size: r,
    ...a
  })
}