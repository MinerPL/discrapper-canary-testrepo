var i = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(970606),
  l = n(346656),
  o = n(689938),
  c = n(920691),
  d = n(586522);
t.Z = function(e) {
  let {
onWithdrawApplication: t,
guild: n = null
  } = e, u = null == n ? void 0 : n.id;
  return s.useEffect(() => {
null != u && (0, r.Pq)(u);
  }, [u]), (0, i.jsxs)('div', {
className: c.confirmation,
children: [
  (0, i.jsxs)('div', {
    className: c.confirmationContent,
    children: [
      null !== n ? (0, i.jsx)(l.Z, {
        size: l.Z.Sizes.LARGER,
        guild: n,
        className: c.guildIcon
      }) : (0, i.jsx)('img', {
        alt: o.Z.Messages.MEMBER_VERIFICATION_PENDING_APPLICATION_ICON,
        src: d
      }),
      (0, i.jsx)(a.Heading, {
        variant: 'heading-xl/semibold',
        className: c.header,
        children: (null == n ? void 0 : n.name) != null ? o.Z.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE_WITH_GUILD_NAME.format({
          guildName: n.name
        }) : o.Z.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE
      }),
      (0, i.jsx)(a.Text, {
        variant: 'text-sm/normal',
        color: 'header-secondary',
        children: o.Z.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_SUBTITLE
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: c.confirmationButtonColumn,
    children: (0, i.jsx)(a.Button, {
      onClick: t,
      look: a.Button.Looks.LINK,
      color: a.Button.Colors.LINK,
      size: a.Button.Sizes.SMALL,
      children: o.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION
    })
  })
]
  });
};