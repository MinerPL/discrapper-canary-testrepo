n.d(t, {
  L: function() {
return _;
  }
});
var s = n(735250);
n(470079);
var a = n(481060),
  i = n(962086),
  r = n(225675),
  l = n(671533),
  o = n(434404),
  c = n(981631),
  d = n(689938),
  u = n(474458);

function _(e) {
  let {
guildId: t,
role: n
  } = e;
  return (0, s.jsx)(s.Fragment, {
children: (0, s.jsxs)(a.FormItem, {
  title: d.Z.Messages.VIEW_AS_ROLE,
  className: u.container,
  children: [
    (0, s.jsx)(a.Text, {
      variant: 'text-sm/normal',
      children: d.Z.Messages.VIEW_AS_ROLE_DESCRIPTION
    }),
    (0, s.jsxs)(a.Button, {
      className: u.button,
      innerClassName: u.buttonInner,
      size: a.Button.Sizes.SMALL,
      color: a.Button.Colors.PRIMARY,
      onClick: () => {
        o.Z.close(), (0, i.iD)(t, {
          type: r.z.ROLES,
          roles: {
            [n.id]: n
          },
          returnToSection: c.pNK.ROLES
        });
      },
      children: [
        d.Z.Messages.VIEW_AS_ROLE,
        (0, s.jsx)(l.Z, {
          width: 16,
          height: 16,
          direction: l.Z.Directions.RIGHT,
          className: u.arrowIcon
        })
      ]
    })
  ]
})
  });
}