t.r(n), t.d(n, {
  default: function() {
return L;
  }
}), t(47120);
var l = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  s = t(442837),
  o = t(704215),
  c = t(692547),
  d = t(481060),
  u = t(252618),
  h = t(605236),
  m = t(473403),
  _ = t(984370),
  f = t(216306),
  C = t(104155),
  p = t(22082),
  x = t(703656),
  g = t(433355),
  N = t(592125),
  I = t(430824),
  b = t(944486),
  E = t(514342),
  Z = t(31445),
  v = t(59350),
  T = t(290511),
  j = t(176505),
  S = t(921944),
  R = t(689938),
  A = t(893344),
  O = t(489919);

function B(e) {
  let {
guild: n,
previousChannel: t
  } = e, i = (0, Z.Z)(n);
  a.useEffect(() => {
(0, h.EW)(o.z.CHANNEL_BROWSER_NEW_BADGE_NUX, {
  dismissAction: S.L.DISMISS
});
  });
  let r = i ? R.Z.Messages.CHANNELS_AND_ROLES_HTML_TITLE.format({
  guildName: n.name
}) : R.Z.Messages.CHANNEL_BROWSER_HTML_TITLE.format({
  guildName: n.name
}),
s = i ? R.Z.Messages.CHANNELS_AND_ROLES : R.Z.Messages.CHANNEL_BROWSER_TITLE;
  return (0, u.Tt)({
location: r
  }), (0, l.jsxs)(_.Z, {
className: A.header,
innerClassname: A.innerHeader,
hideSearch: !0,
channelId: j.oC.CUSTOMIZE_COMMUNITY,
guildId: n.id,
toolbar: null != t ? (0, l.jsx)(d.Button, {
  className: A.returnButton,
  size: d.Button.Sizes.SMALL,
  look: d.Button.Looks.OUTLINED,
  color: d.Button.Colors.PRIMARY,
  onClick: () => {
    null != t && (0, x.XU)(n.id, t.id);
  },
  children: (0, l.jsx)(d.Text, {
    className: A.returnButtonText,
    variant: 'text-xs/medium',
    color: 'none',
    children: R.Z.Messages.RETURN_TO_CHANNEL.format({
      channelNameHook: () => null == t ? null : (0, l.jsxs)(a.Fragment, {
        children: [
          (0, l.jsx)(m._, {
            className: A.returnIcon,
            guild: n,
            channel: t
          }),
          (0, l.jsx)(E.Z, {
            children: (0, l.jsx)(d.Text, {
              variant: 'text-xs/medium',
              color: 'none',
              children: t.name
            })
          })
        ]
      }, t.id)
    })
  })
}) : [],
children: [
  (0, l.jsx)(_.Z.Icon, {
    icon: d.ChannelListMagnifyingGlassIcon,
    'aria-hidden': !0
  }),
  (0, l.jsx)(_.Z.Title, {
    children: s
  })
]
  });
}

function L(e) {
  let {
guildId: n,
selectedSection: t
  } = e, i = (0, s.e7)([I.Z], () => I.Z.getGuild(n)), o = (0, Z.Z)(i), [u, h] = a.useState(null != t ? t : T.l7.CUSTOMIZE);
  a.useEffect(() => {
null != t && h(t);
  }, [t]);
  let m = (0, s.e7)([b.Z], () => b.Z.getLastSelectedChannelId(n)),
_ = (0, s.e7)([g.ZP], () => g.ZP.getCurrentSidebarChannelId(j.oC.CHANNEL_BROWSER)),
x = null != _ && u === T.l7.BROWSE,
E = (0, s.e7)([N.Z], () => N.Z.getChannel(m)),
S = (0, s.e7)([p.Z], () => p.Z.getNewChannelIds(n).size > 0),
L = (0, f.fU)(n);
  return null == i ? null : (0, l.jsxs)(l.Fragment, {
children: [
  (0, l.jsxs)('div', {
    className: r()(O.chat, {
      [O.threadSidebarOpen]: x
    }),
    children: [
      (0, l.jsx)(B, {
        guild: i,
        previousChannel: E
      }),
      (0, l.jsxs)('div', {
        className: r()(O.content, A.container),
        children: [
          o && (0, l.jsxs)(d.TabBar, {
            className: A.tabBar,
            type: 'top',
            look: 'brand',
            selectedItem: u,
            onItemSelect: e => h(e),
            children: [
              (0, l.jsx)(d.TabBar.Item, {
                className: A.tabBarItem,
                id: T.l7.CUSTOMIZE,
                children: R.Z.Messages.OPT_IN_GUILD_NOTICE_CTA
              }, T.l7.CUSTOMIZE),
              (0, l.jsxs)(d.TabBar.Item, {
                className: A.tabBarItem,
                id: T.l7.BROWSE,
                'aria-label': R.Z.Messages.CHANNEL_BROWSER_TITLE,
                children: [
                  R.Z.Messages.CHANNEL_BROWSER_TITLE,
                  (0, l.jsx)(d.TextBadge, {
                    text: S ? R.Z.Messages.CHANNEL_TYPE_NEW : L,
                    color: S ? c.Z.unsafe_rawColors.BRAND_260.css : c.Z.colors.BACKGROUND_ACCENT.css,
                    className: r()({
                      [A.newBadge]: S
                    })
                  })
                ]
              }, T.l7.BROWSE)
            ]
          }),
          (() => {
            switch (u) {
              case T.l7.CUSTOMIZE:
                return (0, l.jsx)(v.Z, {
                  guildId: n,
                  onBrowseChannels: () => h(T.l7.BROWSE)
                });
              case T.l7.BROWSE:
              default:
                return (0, l.jsx)(C.Z, {
                  guildId: n
                });
            }
          })()
        ]
      })
    ]
  }),
  x && (0, l.jsx)(C.I, {
    channelId: _
  })
]
  });
}