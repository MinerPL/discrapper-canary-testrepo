"use strict";
a.r(e), a.d(e, {
  default: function() {
    return u
  }
});
var n = a("735250");
a("470079");
var i = a("481060"),
  s = a("545785"),
  l = a("660097");

function u(t) {
  let {
    user: e,
    size: a
  } = t, u = (0, i.getAvatarSpecs)(a), r = null != e ? e.getAvatarURL(null, u.size) : l;
  return (0, n.jsx)("div", {
    className: s.avatarBackground,
    children: (0, n.jsx)("div", {
      className: s.avatar,
      style: {
        width: u.size,
        height: u.size
      },
      children: (0, n.jsx)(i.Avatar, {
        src: r,
        "aria-hidden": !0,
        size: a
      })
    })
  })
}