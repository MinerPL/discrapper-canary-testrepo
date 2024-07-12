s.d(t, {
  Z: function() {
return m;
  }
});
var a = s(735250);
s(470079);
var n = s(512722),
  l = s.n(n),
  o = s(481060),
  i = s(703656),
  r = s(285952),
  c = s(346656),
  d = s(689938),
  u = s(54687);

function m(e) {
  let {
directoryGuildName: t,
guildToAdd: s,
isExistingGuildFlow: n,
onClose: m
  } = e;
  return l()(null != s, 'Missing guild in Hub add guild confirmation'), (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsxs)(o.ModalHeader, {
    direction: r.Z.Direction.VERTICAL,
    className: u.header,
    separator: !1,
    children: [
      null != m && (0, a.jsx)(o.ModalCloseButton, {
        className: u.closeButton,
        onClick: m
      }),
      (0, a.jsx)(c.Z, {
        guild: s,
        size: c.Z.Sizes.XLARGE,
        active: !0
      }),
      (0, a.jsx)(o.Heading, {
        className: u.title,
        variant: 'heading-xl/semibold',
        children: d.Z.Messages.HUB_ADD_OR_CREATE_SERVER_CONFIRMATION_TITLE
      }),
      (0, a.jsx)(o.Text, {
        className: u.__invalid_subtitle,
        color: 'header-secondary',
        variant: 'text-md/normal',
        children: n ? d.Z.Messages.HUB_ADD_SERVER_CONFIRMATION_SUBTITLE.format({
          guildName: t
        }) : d.Z.Messages.HUB_CREATE_SERVER_CONFIRMATION_SUBTITLE.format({
          guildName: t
        })
      })
    ]
  }),
  (0, a.jsx)(o.ModalFooter, {
    className: u.buttonRow,
    children: n ? (0, a.jsx)(o.Button, {
      className: u.addConfirmButton,
      color: o.Button.Colors.BRAND,
      onClick: m,
      children: d.Z.Messages.HUB_ADD_SERVER_CONFIRMATION_BUTTON
    }) : (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsx)(o.Button, {
          className: u.createSecondaryButton,
          color: o.Button.Colors.PRIMARY,
          onClick: m,
          children: d.Z.Messages.HUB_CREATE_SERVER_CONFIRMATION_STAY
        }),
        (0, a.jsx)(o.Button, {
          className: u.createConfirmButton,
          color: o.Button.Colors.BRAND,
          onClick: () => {
            (0, i.XU)(s.id), null == m || m();
          },
          children: d.Z.Messages.HUB_CREATE_SERVER_CONFIRMATION_GO
        })
      ]
    })
  })
]
  });
}