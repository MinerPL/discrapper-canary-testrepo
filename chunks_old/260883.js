"use strict";
a.r(e), a.d(e, {
  default: function() {
    return u
  }
});
var n = a("37983");
a("884691");
var i = a("77078"),
  s = a("58461"),
  l = a("53708");

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