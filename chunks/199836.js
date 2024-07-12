n.r(e);
var a = n(735250);
n(470079);
var o = n(481060),
  s = n(153124),
  i = n(112612),
  r = n(689938),
  c = n(841139);
e.default = function(t) {
  let {
onClose: e,
transitionState: n,
onSubmit: l
  } = t, {
submitting: d,
errorMessage: u,
onSubmit: x
  } = (0, i.Z)({
onSubmit: l,
onClose: e
  }), _ = (0, s.Dt)();
  return (0, a.jsxs)(o.ModalRoot, {
className: c.container,
transitionState: n,
'aria-labelledby': _,
children: [
  (0, a.jsxs)(o.ModalContent, {
    className: c.content,
    children: [
      (0, a.jsx)(o.Heading, {
        variant: 'heading-md/semibold',
        id: _,
        children: r.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_WARNING_TITLE
      }),
      (0, a.jsx)(o.Text, {
        className: c.manualApprovalDescriptionText,
        color: 'header-secondary',
        variant: 'text-sm/normal',
        children: r.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_WARNING_DESCRIPTION
      }),
      (0, a.jsx)(o.Text, {
        color: 'header-secondary',
        variant: 'text-sm/normal',
        children: r.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_WARNING_EXPLANATION.format()
      }),
      null != u && (0, a.jsx)(o.Text, {
        className: c.__invalid_errorText,
        variant: 'text-xs/normal',
        color: 'text-danger',
        children: u
      })
    ]
  }),
  (0, a.jsxs)(o.ModalFooter, {
    children: [
      (0, a.jsx)(o.Button, {
        className: c.actionButton,
        color: o.Button.Colors.BRAND,
        submitting: d,
        onClick: x,
        size: o.Button.Sizes.SMALL,
        children: (0, a.jsx)(o.Text, {
          variant: 'text-sm/semibold',
          children: r.Z.Messages.CONFIRM
        })
      }),
      (0, a.jsx)(o.Button, {
        color: o.Button.Colors.PRIMARY,
        onClick: e,
        size: o.Button.Sizes.SMALL,
        children: (0, a.jsx)(o.Text, {
          variant: 'text-sm/semibold',
          children: r.Z.Messages.CANCEL
        })
      })
    ]
  })
]
  });
};