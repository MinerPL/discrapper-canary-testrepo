t.r(a), t.d(a, {
  default: function() {
return l;
  }
});
var n = t(735250);
t(470079);
var s = t(481060),
  o = t(468706),
  r = t(153124),
  i = t(689938),
  d = t(338407);

function l(e) {
  let {
channelId: a,
messageId: t,
onClose: l,
transitionState: c
  } = e, _ = (0, r.Dt)();
  return (0, n.jsx)(s.ModalRoot, {
transitionState: c,
'aria-labelledby': _,
size: s.ModalSize.SMALL,
children: (0, n.jsxs)(s.ModalContent, {
  className: d.container,
  children: [
    (0, n.jsx)(s.Heading, {
      id: _,
      variant: 'heading-lg/bold',
      color: 'header-primary',
      className: d.header,
      children: i.Z.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE
    }),
    (0, n.jsx)(s.Text, {
      variant: 'text-md/normal',
      color: 'header-secondary',
      className: d.__invalid_subheader,
      children: i.Z.Messages.SENDER_BLOCKED_MEDIA_BOT_GUILD_MESSAGE
    }),
    (0, n.jsxs)('div', {
      className: d.buttonContainer,
      children: [
        (0, n.jsx)(s.Button, {
          className: d.button,
          size: s.Button.Sizes.MEDIUM,
          color: s.Button.Colors.BRAND,
          onClick: l,
          children: i.Z.Messages.DISMISS
        }),
        (0, n.jsx)(s.Text, {
          variant: 'text-sm/medium',
          color: 'header-secondary',
          children: i.Z.Messages.OBSCURED_CONTENT_LEARN_MORE_FALSE_POSITIVE.format({
            handleFalsePositiveHook: () => {
              l(), (0, o.e)(a, t);
            }
          })
        })
      ]
    })
  ]
})
  });
}