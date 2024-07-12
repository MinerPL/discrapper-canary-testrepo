n.r(t), n.d(t, {
  default: function() {
return E;
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  r = n(287734),
  u = n(939863),
  c = n(153124),
  s = n(482241),
  a = n(554747),
  o = n(689938),
  d = n(14068);

function E(e) {
  let {
channel: t,
transitionState: n,
onClose: E
  } = e, N = (0, c.Dt)(), _ = (0, a.qY)(t.id);
  if (null == _)
return null;
  let f = () => {
r.default.selectVoiceChannel(null), E();
  };
  return (0, l.jsxs)(i.ModalRoot, {
transitionState: n,
'aria-labelledby': N,
size: i.ModalSize.SMALL,
children: [
  (0, l.jsxs)(i.ModalContent, {
    className: d.content,
    children: [
      (0, l.jsx)(u.Z, {
        children: (0, l.jsx)('div', {
          className: d.iconBackground,
          children: (0, l.jsx)(i.CalendarIcon, {
            size: 'custom',
            color: 'currentColor',
            height: 40,
            width: 40,
            className: d.icon
          })
        })
      }),
      (0, l.jsx)(i.Heading, {
        id: N,
        variant: 'heading-xl/semibold',
        color: 'header-primary',
        className: d.title,
        children: o.Z.Messages.GUILD_EVENT_END_PROMPT_TITLE
      }),
      (0, l.jsx)(i.Text, {
        variant: 'text-md/normal',
        color: 'header-secondary',
        className: d.subtitle,
        children: o.Z.Messages.GUILD_EVENT_END_PROMPT_BODY
      })
    ]
  }),
  (0, l.jsxs)(i.ModalFooter, {
    children: [
      (0, l.jsx)(i.Button, {
        color: i.Button.Colors.RED,
        onClick: () => {
          s.Z.endEvent(_.id, _.guild_id), f();
        },
        children: o.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM
      }),
      (0, l.jsx)(i.Button, {
        color: i.Button.Colors.PRIMARY,
        className: d.cancelButton,
        onClick: f,
        children: o.Z.Messages.GUILD_EVENT_END_PROMPT_CANCEL
      })
    ]
  })
]
  });
}