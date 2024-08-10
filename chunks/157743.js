s.r(a), s.d(a, {
  default: function() {
return d;
  }
});
var n = s(735250);
s(470079);
var c = s(481060),
  o = s(918125),
  r = s(488131),
  i = s(124368),
  t = s(689938),
  l = s(353010);

function d(e) {
  let {
guildId: a,
onClose: s,
transitionState: d
  } = e;
  return (0, n.jsx)(c.ModalRoot, {
className: l.modal,
transitionState: d,
'aria-label': t.Z.Messages.THREADS,
size: c.ModalSize.DYNAMIC,
children: (0, n.jsxs)('div', {
  className: l.container,
  children: [
    (0, n.jsxs)('div', {
      className: l.header,
      children: [
        (0, n.jsx)(c.ThreadIcon, {
          size: 'md',
          color: 'currentColor',
          className: l.threadIcon
        }),
        (0, n.jsx)(c.Heading, {
          variant: 'heading-md/semibold',
          className: l.__invalid_title,
          children: t.Z.Messages.ALL_ACTIVE_THREADS
        }),
        (0, n.jsx)('div', {
          className: l.spacer
        }),
        (0, n.jsx)(c.Clickable, {
          className: l.closeIcon,
          onClick: s,
          'aria-label': t.Z.Messages.CLOSE,
          children: (0, n.jsx)(c.XSmallIcon, {
            size: 'md',
            color: 'currentColor'
          })
        })
      ]
    }),
    (0, n.jsx)(o.Z, {
      guildId: a,
      goToThread: (e, a) => {
        s(), (0, r.ok)(e, !a, i.on.GUILD_ACTIVE_THREADS_MODAL);
      }
    })
  ]
})
  });
}