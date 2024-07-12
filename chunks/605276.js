var a = l(735250),
  r = l(470079),
  i = l(399606),
  t = l(481060),
  s = l(904245),
  d = l(368844),
  o = l(249842),
  c = l(838367),
  u = l(6025),
  h = l(592125),
  m = l(375954),
  g = l(496675),
  C = l(768581),
  x = l(526120),
  f = l(825334),
  I = l(981631),
  Z = l(689938),
  _ = l(257645);
let v = r.memo(function(e) {
let {
  guild: n
} = e, l = (0, i.e7)([c.Z], () => c.Z.getGuild(n.id), [n]);
return r.useEffect(() => {
  null == l && (0, o.P)(n.id);
}, [
  n.id,
  l
]), (0, a.jsx)('div', {
  className: _.sidebarCardWrapper,
  children: (0, a.jsxs)('div', {
    className: _.sidebarCard,
    children: [
      (0, a.jsx)(t.Heading, {
        className: _.sidebarCardHeader,
        variant: 'heading-md/bold',
        color: 'header-primary',
        children: Z.Z.Messages.GUILD_HOME_ABOUT
      }),
      (0, a.jsx)(t.Text, {
        className: _.guildDescription,
        variant: 'text-md/normal',
        color: 'text-normal',
        children: n.description
      }),
      (0, a.jsx)('div', {
        className: _.guildInfo,
        children: (null == l ? void 0 : l.memberCount) != null && (null == l ? void 0 : l.presenceCount) != null && (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)('div', {
              className: _.dotOnline
            }),
            (0, a.jsx)(t.Text, {
              className: _.guildInfoText,
              variant: 'text-xs/normal',
              color: 'text-muted',
              children: Z.Z.Messages.GUILD_ONBOARDING_HOME_GUILD_MEMBERS_RATIO.format({
                online: null == l ? void 0 : l.presenceCount,
                total: null == l ? void 0 : l.memberCount
              })
            })
          ]
        })
      })
    ]
  })
});
  }),
  p = e => {
let {
  channelId: n,
  title: l,
  icon: o
} = e, c = (0, i.e7)([h.Z], () => h.Z.getChannel(n)), f = (0, i.e7)([m.Z], () => m.Z.getMessages(n)), Z = (0, i.e7)([g.Z], () => g.Z.can(I.Plq.VIEW_CHANNEL, c)), v = f.first(), p = (0, d.zy)(v, !1), N = (null == p ? void 0 : p.length) > 0 ? p[0] : null, j = null != c && null == v && !f.loadingMore && !f.ready && !f.hasFetched && Z;
r.useEffect(() => {
  j && s.Z.fetchMessages({
    channelId: n,
    after: n,
    limit: 5
  });
}, [
  n,
  j
]);
let b = e => {
  null != c && (e.shiftKey ? (0, x.C3)(c.guild_id, c.id) : u.Z.openResourceChannelAsSidebar({
    guildId: c.guild_id,
    channelId: c.id
  }));
};
return (0, a.jsx)(t.Clickable, {
  className: _.resourceChannel,
  onClick: e => b(e),
  children: (0, a.jsxs)(a.Fragment, {
    children: [
      (() => {
        let e = C.ZP.getResourceChannelIconURL({
          channelId: n,
          icon: o
        });
        return null != o && null != e ? (0, a.jsx)('img', {
          src: e,
          className: _.resourceImage,
          alt: '',
          'aria-hidden': !0
        }) : null != N ? (0, a.jsx)('img', {
          className: _.resourceImage,
          src: N.src,
          alt: N.alt
        }) : (0, a.jsx)('div', {
          className: _.placeholderImage,
          children: (0, a.jsx)(t.PaperIcon, {
            size: 'xs',
            color: 'currentColor'
          })
        });
      })(),
      (0, a.jsx)(t.Text, {
        className: _.guildInfoText,
        variant: 'text-sm/semibold',
        color: 'none',
        children: l
      })
    ]
  })
}, n);
  },
  N = r.memo(function(e) {
let {
  guild: n
} = e, l = (0, f.Z)(n.id);
return 0 === l.length ? null : (0, a.jsx)('div', {
  className: _.sidebarCardWrapper,
  children: (0, a.jsxs)('div', {
    className: _.sidebarCard,
    children: [
      (0, a.jsx)(t.Heading, {
        className: _.sidebarCardHeader,
        variant: 'heading-md/bold',
        color: 'header-primary',
        children: Z.Z.Messages.GUILD_HOME_RESOURCES
      }),
      (0, a.jsx)('div', {
        className: _.resourceChannelsList,
        children: l.map(e => (0, a.jsx)(p, {
          channelId: e.channelId,
          title: e.title,
          icon: e.icon
        }, 'widget-resource-'.concat(e.channelId)))
      })
    ]
  })
});
  }),
  j = r.memo(function(e) {
let {
  guild: n,
  isNewMember: l
} = e;
return (0, a.jsxs)('aside', {
  className: _.sidebar,
  children: [
    (0, a.jsx)(v, {
      guild: n
    }),
    l && (0, a.jsx)(N, {
      guild: n
    })
  ]
});
  });
n.Z = j;