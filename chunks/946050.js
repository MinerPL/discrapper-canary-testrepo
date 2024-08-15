n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(481060),
  l = n(670044),
  r = n(28391),
  o = n(526761),
  c = n(689938),
  u = n(227309);

function d(e) {
  return a.useEffect(() => e.onChannelChange(), [e.channel.id]), (0, i.jsxs)('div', {
className: u.notice,
children: [
  (0, i.jsx)(l.Z, {
    id: e.channel.id
  }),
  (0, i.jsx)('div', {
    className: u.info,
    children: (0, i.jsx)(s.Text, {
      variant: 'text-sm/medium',
      children: c.Z.Messages.UNREAD_NOTIFICATION_SETTING_NOTICE
    })
  }),
  (0, i.jsxs)('div', {
    className: u.buttons,
    children: [
      (0, i.jsxs)(s.Button, {
        size: s.Button.Sizes.TINY,
        look: s.Button.Looks.FILLED,
        color: s.Button.Colors.PRIMARY,
        className: u.button,
        innerClassName: u.buttonInner,
        onClick: () => (0, r.Z)(e.channel.guild_id, e.channel.id, o.ic.UNREADS_ALL_MESSAGES),
        children: [
          (0, i.jsx)(s.CheckmarkLargeIcon, {
            size: 'xs',
            color: 'currentColor',
            style: {
              marginRight: 4
            }
          }),
          c.Z.Messages.YES_TEXT
        ]
      }),
      (0, i.jsx)(s.Button, {
        style: {
          marginLeft: 8
        },
        size: s.Button.Sizes.TINY,
        look: s.Button.Looks.FILLED,
        color: s.Button.Colors.PRIMARY,
        className: u.button,
        innerClassName: u.buttonInner,
        onClick: () => (0, r.Z)(e.channel.guild_id, e.channel.id, o.ic.UNREADS_ONLY_MENTIONS),
        children: (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(s.XSmallIcon, {
              size: 'xs',
              color: 'currentColor',
              style: {
                marginRight: 4
              }
            }),
            c.Z.Messages.NO_TEXT
          ]
        })
      })
    ]
  })
]
  });
}