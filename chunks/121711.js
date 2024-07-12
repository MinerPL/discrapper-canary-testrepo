var i = n(735250),
  s = n(470079),
  a = n(948789),
  r = n(481060),
  l = n(100527),
  o = n(252618),
  c = n(51448),
  d = n(164427),
  u = n(624383),
  _ = n(742916),
  h = n(63063),
  E = n(113434),
  I = n(709158),
  m = n(710914),
  g = n(452081),
  p = n(981631),
  T = n(689938),
  S = n(852595);
t.Z = function(e) {
  let {} = e, t = (0, I.Z)(l.Z.QUEST_HOME_PAGE), {
tabs: n,
selectedTab: C,
onSelectTab: f
  } = (0, g.z)(), N = s.useRef(new _.m()), {
quests: A
  } = (0, E.bA)(C.id);
  s.useEffect(() => {
!t && (0, a.uL)(p.Z5c.FRIENDS);
  }, [t]), s.useEffect(() => {}, []);
  let Z = s.useCallback(() => {
window.open(h.Z.getArticleURL(p.BhN.QUESTS_LEARN_MORE));
  }, []);
  return ((0, o.Tt)({
location: T.Z.Messages.QUESTS
  }), t) ? (0, i.jsxs)('div', {
className: S.container,
children: [
  (0, i.jsx)(c.f, {
    icon: (0, i.jsx)(r.QuestsIcon, {
      color: 'var(--header-primary)'
    }),
    title: T.Z.Messages.QUESTS,
    tabs: n,
    selectedTab: C,
    onTabSelect: f,
    showSearch: !1,
    scrollManager: N
  }),
  (0, i.jsxs)(d.J, {
    scrollManager: N,
    children: [
      (0, i.jsx)(u.c, {
        title: T.Z.Messages.QUESTS_HOME_HERO_TITLE,
        description: T.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
        backgroundImageUrl: 'https://cdn.discordapp.com/assets/discovery/generic-hero-background.png',
        button: (0, i.jsxs)(r.Button, {
          size: 'medium',
          className: S.button,
          onClick: Z,
          innerClassName: S.innerButton,
          children: [
            (0, i.jsx)(r.Text, {
              variant: 'text-md/semibold',
              color: 'always-white',
              className: S.externalLinkText,
              children: T.Z.Messages.LEARN_MORE
            }),
            (0, i.jsx)(r.LinkExternalSmallIcon, {
              className: S.icon,
              color: 'var(--white-500)'
            })
          ]
        })
      }),
      (0, i.jsx)('div', {
        className: S.gridContainer,
        children: (0, i.jsx)(m.Z, {
          quests: A
        })
      })
    ]
  })
]
  }) : null;
};