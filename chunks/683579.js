n.d(t, {
  Z: function() {
return _;
  }
});
var s = n(735250);
n(470079);
var a = n(481060),
  i = n(556012),
  r = n(862085),
  l = n(769998),
  o = n(671066),
  c = n(273504),
  d = n(647241);

function u(e) {
  let {
action: t,
triggerType: n,
toggled: r,
onToggleAction: l
  } = e, o = (0, i.c)(t.type, t, n);
  if (null == o)
return null;
  let {
headerText: c,
descriptionText: u,
icon: _
  } = o;
  return (0, s.jsxs)('div', {
className: d.actionContainer,
children: [
  (0, s.jsx)('div', {
    className: d.actionIconContainer,
    children: (0, s.jsx)(_, {
      size: 'md',
      color: 'currentColor',
      className: d.actionIcon
    })
  }),
  (0, s.jsxs)('div', {
    className: d.actionTextContainer,
    children: [
      (0, s.jsx)(a.Heading, {
        variant: 'heading-sm/semibold',
        children: c
      }),
      (0, s.jsx)(a.Text, {
        color: 'interactive-normal',
        variant: 'text-xs/medium',
        children: u
      })
    ]
  }),
  (0, s.jsx)('div', {
    children: (0, s.jsx)(a.Checkbox, {
      disabled: !o.isEditable,
      type: a.Checkbox.Types.INVERTED,
      value: r,
      onChange: () => l(!1),
      className: d.__invalid_actionCheckbox
    })
  })
]
  });
}

function _(e) {
  let {
action: t,
guildId: n,
triggerType: a,
toggled: i,
onToggleAction: d
  } = e;
  switch (t.type) {
case c.jj.FLAG_TO_CHANNEL:
  return (0, s.jsx)(o.Z, {
    action: t,
    triggerType: a,
    toggled: i,
    onToggleAction: d
  });
case c.jj.USER_COMMUNICATION_DISABLED:
  return (0, s.jsx)(l.Z, {
    action: t,
    guildId: n,
    triggerType: a,
    toggled: i,
    onToggleAction: d
  });
case c.jj.BLOCK_MESSAGE:
  return (0, s.jsx)(r.Z, {
    action: t,
    triggerType: a,
    toggled: i,
    onToggleAction: d
  });
default:
  return (0, s.jsx)(u, {
    action: t,
    guildId: n,
    toggled: i,
    triggerType: a,
    onToggleAction: d
  });
  }
}