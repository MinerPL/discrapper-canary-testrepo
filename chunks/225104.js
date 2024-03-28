"use strict";
t.r(l), t.d(l, {
  default: function() {
    return d
  }
});
var a = t("735250");
t("470079");
var i = t("866442"),
  n = t("518738"),
  r = t("176278"),
  s = t("134433"),
  o = t("981631");

function d(e) {
  var l;
  let {
    guildId: t,
    role: d,
    size: u,
    className: c
  } = e, f = (0, n.useRoleIcon)({
    guildId: t,
    roleId: d.id,
    size: u
  });
  return null != f ? (0, a.jsx)(r.default, {
    className: c,
    ...f
  }) : (0, a.jsx)(s.default, {
    color: null !== (l = d.colorString) && void 0 !== l ? l : (0, i.int2hex)(o.DEFAULT_ROLE_COLOR),
    className: c,
    size: u
  })
}