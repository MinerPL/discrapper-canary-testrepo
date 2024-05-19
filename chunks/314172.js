"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  a = n.n(r),
  s = n("442837"),
  o = n("693789"),
  l = n("235874"),
  u = n("481060"),
  d = n("944613"),
  _ = n("607070"),
  c = n("605436"),
  E = n("496675"),
  I = n("729285"),
  T = n("993409"),
  f = n("689938"),
  S = n("129372");

function h(e) {
  let {
    guild: t,
    guildMember: n,
    highestRole: r,
    onAddRole: h,
    compact: A = !0,
    ...m
  } = e, N = (0, s.useStateFromStores)([_.default], () => _.default.roleStyle), p = e => (0, c.isNotEveryoneRoleId)(t.id, e.id) && !e.managed && E.default.isRoleHigher(t, r, e) && -1 === n.roles.indexOf(e.id);
  return (0, i.jsx)(l.Popout, {
    position: "bottom",
    align: "center",
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, i.jsx)(d.default, {
        guild: t,
        roleStyle: N,
        roleFilter: p,
        onSelect: h,
        onClose: n
      })
    },
    children: e => (0, i.jsx)(T.default, {
      className: a()(S.button),
      text: (0, i.jsx)(u.Text, {
        variant: "text-xs/medium",
        children: f.default.Messages.USER_PROFILE_ADD_ROLE
      }),
      "aria-label": f.default.Messages.USER_PROFILE_ADD_ROLE,
      icon: I.default,
      color: o.Button.Colors.CUSTOM,
      size: o.Button.Sizes.NONE,
      compact: A,
      grow: !1,
      ...e,
      ...m
    })
  })
}