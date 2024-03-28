"use strict";
n.r(t), n.d(t, {
  SelectGuildOption: function() {
    return o
  }
});
var s = n("735250");
n("470079");
var i = n("468194"),
  a = n("399606"),
  l = n("481060"),
  u = n("430824"),
  r = n("768581"),
  c = n("943770");

function o(e) {
  let {
    guildId: t
  } = e, n = (0, a.useStateFromStores)([u.default], () => u.default.getGuild(t));
  if (null == n) return null;
  let o = null;
  if (null != n.icon) {
    let e = r.default.getGuildIconURL({
      id: n.id,
      icon: n.icon,
      size: 40
    });
    o = (0, s.jsx)(l.Avatar, {
      src: e,
      "aria-label": n.name,
      size: l.AvatarSizes.SIZE_24
    })
  } else {
    let e = (0, i.getAcronym)(n.name).slice(0, 2);
    o = (0, s.jsx)(l.Text, {
      variant: "text-xs/semibold",
      className: c.acronym,
      "aria-hidden": !0,
      children: e
    })
  }
  return (0, s.jsxs)("div", {
    className: c.container,
    children: [o, (0, s.jsx)(l.Text, {
      variant: "text-md/semibold",
      className: c.text,
      children: n.name
    })]
  })
}