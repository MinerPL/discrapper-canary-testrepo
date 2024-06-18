"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(412899),
  l = n(659101),
  u = n(689938),
  _ = n(559567),
  d = n(379916);

function c(e) {
  let {
    user: t,
    guild: n,
    guildMember: r,
    showBorder: c
  } = e;
  return null == n || null == r ? null : (0, i.jsxs)(l.Z, {
    children: [(0, i.jsx)(o.Heading, {
      variant: "eyebrow",
      className: d.title,
      children: u.Z.Messages.ROLES_LIST.format({
        numRoles: r.roles.length
      })
    }), (0, i.jsx)(a.ZP, {
      roleClassName: s()(_.rolePill, {
        [_.rolePillBorder]: c
      }),
      className: _.roles,
      guild: n,
      user: t,
      userRoles: r.roles,
      disableBorderColor: !0
    }, "roles")]
  })
}