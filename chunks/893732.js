n.d(t, {
  Z: function() {
return r;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(689938),
  l = n(137396);

function r(e) {
  let {
onClose: t,
guildName: n
  } = e;
  return (0, i.jsxs)('div', {
className: l.container,
children: [
  (0, i.jsx)('div', {
    className: l.iconContainer,
    children: (0, i.jsx)(a.ClockWarningIcon, {
      size: 'custom',
      color: 'currentColor',
      className: l.icon,
      width: 20,
      height: 20
    })
  }),
  (0, i.jsxs)('div', {
    className: l.header,
    children: [
      (0, i.jsx)(a.Heading, {
        variant: 'heading-md/semibold',
        className: l.headerText,
        children: s.Z.Messages.GUILD_COMMUNICATION_DISABLED_POPOUT_HEADER
      }),
      (0, i.jsx)(a.Text, {
        variant: 'text-sm/normal',
        children: s.Z.Messages.GUILD_COMMUNICATION_DISABLED_POPOUT_SUBHEADER.format({
          guildName: n
        })
      }),
      (0, i.jsx)(a.Button, {
        onClick: t,
        className: l.button,
        children: s.Z.Messages.OKAY
      })
    ]
  })
]
  });
}