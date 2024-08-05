var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(252618),
  l = n(900849),
  o = n(526383),
  c = n(602597),
  d = n(731455),
  u = n(689938),
  _ = n(767142),
  h = n(661278);
t.Z = e => {
  let {
loadId: t
  } = e, n = (0, o.Z)();
  return a.useEffect(() => {
(0, l.Zt)({
  loadId: t,
  gamesYouPlayGuilds: [],
  allGuilds: [],
  categoryId: d.U
});
  }, [t]), (0, r.Tt)({
subsection: u.Z.Messages.HUB_SCHOOL_HUBS,
location: u.Z.Messages.HUB_DIRECTORY_SEARCH_TITLE
  }), (0, i.jsx)(s.Scroller, {
className: _.scroller,
children: (0, i.jsxs)('div', {
  className: _.viewWrapper,
  children: [
    (0, i.jsxs)('div', {
      className: _.headerContainer,
      children: [
        (0, i.jsx)('img', {
          alt: '',
          className: _.headerImage,
          src: h
        }),
        (0, i.jsxs)('div', {
          className: _.headerContent,
          children: [
            (0, i.jsx)(s.Heading, {
              className: _.headerText,
              variant: 'heading-xl/semibold',
              children: u.Z.Messages.HUB_DIRECTORY_SEARCH_TITLE
            }),
            (0, i.jsx)(s.Text, {
              className: _.headerDescription,
              variant: 'text-md/normal',
              color: 'none',
              children: u.Z.Messages.HUB_DIRECTORY_SEARCH_SUBTITLE
            })
          ]
        })
      ]
    }),
    (0, i.jsx)(c.Z, {
      guilds: n
    }),
    (0, i.jsx)('div', {
      className: _.divider
    }),
    (0, i.jsx)(s.Text, {
      className: _.footerDescription,
      variant: 'text-md/medium',
      color: 'header-secondary',
      children: u.Z.Messages.HUB_DISCOVERY_FOOTER_DESCRIPTION
    })
  ]
})
  });
};