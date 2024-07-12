n.d(t, {
  Z: function() {
return o;
  }
});
var s = n(735250);
n(470079);
var a = n(481060),
  i = n(556012),
  r = n(689938),
  l = n(647241);

function o(e) {
  let {
action: t,
triggerType: n,
toggled: o,
onToggleAction: c
  } = e, d = e => () => c(e), u = (0, i.c)(t.type, t, n);
  if (null == u)
return null;
  let {
headerText: _,
descriptionText: I,
icon: E
  } = u;
  return (0, s.jsxs)('div', {
className: l.actionContainer,
children: [
  (0, s.jsx)('div', {
    className: l.actionIconContainer,
    children: (0, s.jsx)(E, {
      size: 'custom',
      color: 'currentColor',
      className: l.actionIcon
    })
  }),
  (0, s.jsxs)('div', {
    className: l.actionTextContainer,
    children: [
      (0, s.jsx)(a.Heading, {
        variant: 'heading-sm/semibold',
        children: _
      }),
      (0, s.jsx)(a.Text, {
        color: 'interactive-normal',
        variant: 'text-xs/medium',
        children: I
      }),
      o ? (0, s.jsxs)(a.Text, {
        color: 'text-muted',
        variant: 'text-xs/medium',
        children: [
          r.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_CUSTOM_MESSAGE_HELPER,
          (0, s.jsx)(a.Clickable, {
            onClick: d(!0),
            className: l.editChannel,
            tag: 'span',
            role: 'link',
            children: r.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_CUSTOM_MESSAGE_CTA
          })
        ]
      }) : null
    ]
  }),
  (0, s.jsx)('div', {
    children: (0, s.jsx)(a.Checkbox, {
      type: a.Checkbox.Types.INVERTED,
      value: o,
      onChange: d(!1),
      className: l.__invalid_actionCheckbox
    })
  })
]
  });
}