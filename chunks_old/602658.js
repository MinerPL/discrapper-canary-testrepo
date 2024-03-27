"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("37983");
n("884691");
var r = n("509043"),
  s = n("405645"),
  l = n("483093"),
  a = n("339023"),
  o = n("49111");

function u(e) {
  var t;
  let {
    guildId: n,
    role: u,
    size: c,
    className: d
  } = e, f = (0, s.useRoleIcon)({
    guildId: n,
    roleId: u.id,
    size: c
  });
  return null != f ? (0, i.jsx)(l.default, {
    className: d,
    ...f
  }) : (0, i.jsx)(a.default, {
    color: null !== (t = u.colorString) && void 0 !== t ? t : (0, r.int2hex)(o.DEFAULT_ROLE_COLOR),
    className: d,
    size: c
  })
}