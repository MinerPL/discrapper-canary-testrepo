"use strict";
s.r(t), s.d(t, {
  ImpersonateRoleDescription: function() {
    return E
  }
});
var a = s("37983");
s("884691");
var l = s("77078"),
  n = s("479756"),
  i = s("507950"),
  r = s("246053"),
  o = s("592407"),
  d = s("49111"),
  u = s("782340"),
  c = s("717649");

function E(e) {
  let {
    guildId: t,
    role: s
  } = e;
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)(l.FormItem, {
      title: u.default.Messages.VIEW_AS_ROLE,
      className: c.container,
      children: [(0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: u.default.Messages.VIEW_AS_ROLE_DESCRIPTION
      }), (0, a.jsxs)(l.Button, {
        className: c.button,
        innerClassName: c.buttonInner,
        size: l.Button.Sizes.SMALL,
        color: l.Button.Colors.PRIMARY,
        onClick: () => {
          o.default.close(), (0, n.startImpersonating)(t, {
            type: i.ImpersonateType.ROLES,
            roles: {
              [s.id]: s
            },
            returnToSection: d.GuildSettingsSections.ROLES
          })
        },
        children: [u.default.Messages.VIEW_AS_ROLE, (0, a.jsx)(r.default, {
          width: 16,
          height: 16,
          direction: r.default.Directions.RIGHT,
          className: c.arrowIcon
        })]
      })]
    })
  })
}