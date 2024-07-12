n.d(t, {
  Z: function() {
return r;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  l = n(689938),
  s = n(137396);

function r(e) {
  let {
onClose: t,
guildName: n
  } = e;
  return (0, i.jsxs)('div', {
className: s.container,
children: [
  (0, i.jsx)('div', {
    className: s.iconContainer,
    children: (0, i.jsx)(a.ClockWarningIcon, {
      size: 'custom',
      color: 'currentColor',
      className: s.icon,
      width: 20,
      height: 20
    })
  }),
  (0, i.jsxs)('div', {
    className: s.header,
    children: [
      (0, i.jsx)(a.Heading, {
        variant: 'heading-md/semibold',
        className: s.headerText,
        children: l.Z.Messages.GUILD_COMMUNICATION_DISABLED_POPOUT_HEADER
      }),
      (0, i.jsx)(a.Text, {
        variant: 'text-sm/normal',
        children: l.Z.Messages.GUILD_COMMUNICATION_DISABLED_POPOUT_SUBHEADER.format({
          guildName: n
        })
      }),
      (0, i.jsx)(a.Button, {
        onClick: t,
        className: s.button,
        children: l.Z.Messages.OKAY
      })
    ]
  })
]
  });
}