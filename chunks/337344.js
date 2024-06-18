"use strict";
t.d(s, {
  L: function() {
    return E
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(962086),
  a = t(225675),
  r = t(671533),
  o = t(434404),
  c = t(981631),
  d = t(689938),
  u = t(941393);

function E(e) {
  let {
    guildId: s,
    role: t
  } = e;
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(i.FormItem, {
      title: d.Z.Messages.VIEW_AS_ROLE,
      className: u.container,
      children: [(0, n.jsx)(i.Text, {
        variant: "text-sm/normal",
        children: d.Z.Messages.VIEW_AS_ROLE_DESCRIPTION
      }), (0, n.jsxs)(i.Button, {
        className: u.button,
        innerClassName: u.buttonInner,
        size: i.Button.Sizes.SMALL,
        color: i.Button.Colors.PRIMARY,
        onClick: () => {
          o.Z.close(), (0, l.iD)(s, {
            type: a.z.ROLES,
            roles: {
              [t.id]: t
            },
            returnToSection: c.pNK.ROLES
          })
        },
        children: [d.Z.Messages.VIEW_AS_ROLE, (0, n.jsx)(r.Z, {
          width: 16,
          height: 16,
          direction: r.Z.Directions.RIGHT,
          className: u.arrowIcon
        })]
      })]
    })
  })
}