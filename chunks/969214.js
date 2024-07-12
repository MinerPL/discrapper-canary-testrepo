a.r(t), a.d(t, {
  default: function() {
return c;
  }
});
var s = a(735250);
a(470079);
var o = a(481060),
  n = a(689938),
  r = a(197034);

function c(e) {
  let {
transitionState: t,
onClose: c
  } = e;
  return (0, s.jsxs)(o.ModalRoot, {
className: r.modal,
transitionState: t,
size: o.ModalSize.SMALL,
children: [
  (0, s.jsx)('img', {
    'aria-hidden': !0,
    alt: '',
    src: a(762528),
    className: r.image
  }),
  (0, s.jsxs)(o.ModalContent, {
    className: r.content,
    children: [
      (0, s.jsx)(o.Heading, {
        variant: 'heading-xl/bold',
        color: 'header-primary',
        className: r.text,
        children: n.Z.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_CONFIRM_TITLE
      }),
      (0, s.jsx)(o.Text, {
        variant: 'text-sm/normal',
        color: 'header-secondary',
        className: r.text,
        children: n.Z.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_CONFIRM_SUBTITLE
      }),
      (0, s.jsx)(o.Button, {
        onClick: c,
        color: o.Button.Colors.BRAND,
        look: o.Button.Looks.FILLED,
        children: n.Z.Messages.GUILD_AUTOMOD_REPORT_RAID_FEEDBACK_CONFIRM_CTA
      })
    ]
  })
]
  });
}