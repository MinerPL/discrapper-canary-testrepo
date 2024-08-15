n.r(t), n.d(t, {
  default: function() {
return E;
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  r = n(287734),
  u = n(313201),
  d = n(939863),
  c = n(482241),
  a = n(554747),
  s = n(689938),
  o = n(212316);

function E(e) {
  let {
channel: t,
transitionState: n,
onClose: E
  } = e, _ = (0, u.Dt)(), N = (0, a.qY)(t.id);
  if (null == N)
return null;
  let f = () => {
r.default.selectVoiceChannel(null), E();
  };
  return (0, l.jsxs)(i.ModalRoot, {
transitionState: n,
'aria-labelledby': _,
size: i.ModalSize.SMALL,
children: [
  (0, l.jsxs)(i.ModalContent, {
    className: o.content,
    children: [
      (0, l.jsx)(d.Z, {
        children: (0, l.jsx)('div', {
          className: o.iconBackground,
          children: (0, l.jsx)(i.CalendarIcon, {
            size: 'custom',
            color: 'currentColor',
            height: 40,
            width: 40,
            className: o.icon
          })
        })
      }),
      (0, l.jsx)(i.Heading, {
        id: _,
        variant: 'heading-xl/semibold',
        color: 'header-primary',
        className: o.title,
        children: s.Z.Messages.GUILD_EVENT_END_PROMPT_TITLE
      }),
      (0, l.jsx)(i.Text, {
        variant: 'text-md/normal',
        color: 'header-secondary',
        className: o.subtitle,
        children: s.Z.Messages.GUILD_EVENT_END_PROMPT_BODY
      })
    ]
  }),
  (0, l.jsxs)(i.ModalFooter, {
    children: [
      (0, l.jsx)(i.Button, {
        color: i.Button.Colors.RED,
        onClick: () => {
          c.Z.endEvent(N.id, N.guild_id), f();
        },
        children: s.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM
      }),
      (0, l.jsx)(i.Button, {
        color: i.Button.Colors.PRIMARY,
        className: o.cancelButton,
        onClick: f,
        children: s.Z.Messages.GUILD_EVENT_END_PROMPT_CANCEL
      })
    ]
  })
]
  });
}