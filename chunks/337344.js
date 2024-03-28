"use strict";
s.r(t), s.d(t, {
  ImpersonateRoleDescription: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("962086"),
  i = s("225675"),
  r = s("671533"),
  o = s("434404"),
  d = s("981631"),
  u = s("689938"),
  c = s("47368");

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