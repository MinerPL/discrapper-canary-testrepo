var i = n(735250);
n(470079);
var a = n(481060),
  s = n(565138),
  r = n(689938),
  l = n(807907),
  o = n(364632);
t.Z = e => {
  let {
headerId: t,
reapplyText: n,
onReapply: c,
confirmText: d,
onWithdrawApplication: u,
rejectionReason: _ = null,
guild: E = null
  } = e;
  return (0, i.jsxs)('div', {
className: l.confirmation,
children: [
  (0, i.jsxs)('div', {
    className: l.confirmationContent,
    children: [
      null !== E ? (0, i.jsx)(s.Z, {
        size: s.Z.Sizes.LARGER,
        guild: E,
        className: l.guildIcon
      }) : (0, i.jsx)('img', {
        alt: r.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_ICON,
        src: o,
        className: l.__invalid_verificationStateIcon
      }),
      (0, i.jsx)(a.Heading, {
        id: t,
        variant: 'heading-xl/semibold',
        className: l.header,
        children: (null == E ? void 0 : E.name) != null ? r.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE_WITH_GUILD_NAME.format({
          guildName: E.name
        }) : r.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE
      }),
      null != _ && '' !== _ ? (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)(a.Text, {
          variant: 'text-sm/normal',
          children: [
            (0, i.jsx)('span', {
              className: l.rejectionReasonLabel,
              children: r.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_REASON
            }),
            (0, i.jsx)('span', {
              className: l.rejectionReason,
              children: _
            })
          ]
        })
      }) : null
    ]
  }),
  (0, i.jsxs)('div', {
    className: l.confirmationButtonRow,
    children: [
      (0, i.jsx)(a.Button, {
        onClick: c,
        color: a.Button.Colors.PRIMARY,
        className: l.confirmationButton,
        children: n
      }),
      (0, i.jsx)(a.Button, {
        onClick: u,
        color: a.Button.Colors.RED,
        className: l.confirmationButton,
        children: d
      })
    ]
  })
]
  });
};