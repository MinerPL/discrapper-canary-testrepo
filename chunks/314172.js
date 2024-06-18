"use strict";
n.d(t, {
  Z: function() {
    return T
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(693789),
  o = n(235874),
  a = n(944613),
  l = n(607070),
  u = n(605436),
  _ = n(496675),
  d = n(729285),
  c = n(993409),
  E = n(689938),
  I = n(129372);

function T(e) {
  let {
    guild: t,
    guildMember: n,
    highestRole: T,
    onAddRole: h,
    ...S
  } = e, f = (0, r.e7)([l.Z], () => l.Z.roleStyle), N = e => (0, u.Gy)(t.id, e.id) && !e.managed && _.Z.isRoleHigher(t, T, e) && -1 === n.roles.indexOf(e.id);
  return (0, i.jsx)(o.y, {
    position: "bottom",
    align: "center",
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, i.jsx)(a.Z, {
        guild: t,
        roleStyle: f,
        roleFilter: N,
        onSelect: h,
        onClose: n
      })
    },
    children: e => (0, i.jsx)(c.Z, {
      className: I.button,
      text: E.Z.Messages.USER_PROFILE_ADD_ROLE,
      icon: d.Z,
      color: s.zx.Colors.CUSTOM,
      size: s.zx.Sizes.NONE,
      grow: !1,
      ...e,
      ...S
    })
  })
}