var i = n(735250),
  a = n(470079),
  s = n(481060),
  l = n(128557),
  r = n(981631),
  o = n(689938),
  c = n(938163);
t.Z = e => {
  let {
guild: t,
onAddGuild: u
  } = e, d = a.useCallback(() => {
(0, s.openModalLazy)(async () => {
  let {
    default: e
  } = await Promise.all([
    n.e('7654'),
    n.e('21026')
  ]).then(n.bind(n, 560114));
  return n => (0, i.jsx)(e, {
    ...n,
    guild: t,
    source: r.t4x.HUB_DIRECTORY,
    analyticsLocation: {
      section: r.jXE.HUB_WELCOME_CTA
    }
  });
});
  }, [t]);
  return (0, i.jsxs)('div', {
className: c.emptyWrapper,
children: [
  (0, i.jsx)('img', {
    className: c.emptyImage,
    alt: '',
    src: n(705845)
  }),
  (0, i.jsx)(s.Heading, {
    className: c.emptyTitle,
    variant: 'heading-xl/semibold',
    children: o.Z.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_TITLE.format({
      guildName: t.name
    })
  }),
  (0, i.jsx)(s.Text, {
    variant: 'text-md/normal',
    className: c.emptySubtitle,
    children: o.Z.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_SUBTITLE
  }),
  null != u ? (0, i.jsx)(l.i, {
    className: c.emptyCTA,
    iconUrl: n(362827),
    header: o.Z.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_ADD_SERVER,
    completed: !1,
    onClick: u
  }) : null,
  (0, i.jsx)(l.i, {
    className: c.emptyCTA,
    iconUrl: n(538548),
    header: o.Z.Messages.HUB_DIRECTORY_CHANNEL_EMPTY_INVITE,
    completed: !1,
    onClick: d
  })
]
  });
};