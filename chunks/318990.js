"use strict";
n.d(t, {
  Z: function() {
    return E
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
  d = n(689938),
  c = n(244351);

function E() {
  let e = (0, a.e7)([_.Z], () => _.Z.affinities.slice(0, 3)),
    t = e[0],
    {
      avatarSrc: n,
      eventHandlers: s
    } = (0, u.Z)({
      user: t,
      size: l.AvatarSizes.SIZE_24,
      animateOnHover: !0
    }),
    E = e => null != e.globalName ? e.globalName : e.username,
    I = r.useMemo(() => e.length >= 2 ? d.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_3.format({
      username: E(e[0])
    }) : 1 === e.length ? d.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_1.format({
      username: E(e[0])
    }) : "", [e]);
  return 0 === e.length ? null : (0, i.jsxs)("div", {
    className: c.container,
    children: [(0, i.jsx)(l.Avatar, {
      className: c.__invalid_icon,
      src: n,
      "aria-label": t.username,
      size: l.AvatarSizes.SIZE_24,
      ...s
    }), (0, i.jsx)(l.Text, {
      className: o()(c.text),
      variant: "text-sm/normal",
      color: "always-white",
      children: I
    })]
  })
}