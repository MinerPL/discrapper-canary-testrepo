t.r(n),
    t.d(n, {
        default: function () {
            return L;
        }
    }),
    t(47120);
var l = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    s = t(442837),
    o = t(704215),
    c = t(692547),
    d = t(481060),
    u = t(111028),
    h = t(252618),
    m = t(605236),
    _ = t(473403),
    f = t(984370),
    C = t(216306),
    p = t(104155),
    x = t(22082),
    g = t(703656),
    N = t(433355),
    I = t(592125),
    b = t(430824),
    E = t(944486),
    Z = t(31445),
    v = t(59350),
    T = t(290511),
    j = t(176505),
    S = t(921944),
    R = t(689938),
    A = t(683570),
    O = t(625032);
function B(e) {
    let { guild: n, previousChannel: t } = e,
        i = (0, Z.Z)(n);
    a.useEffect(() => {
        (0, m.EW)(o.z.CHANNEL_BROWSER_NEW_BADGE_NUX, { dismissAction: S.L.DISMISS });
    });
    let r = i ? R.Z.Messages.CHANNELS_AND_ROLES_HTML_TITLE.format({ guildName: n.name }) : R.Z.Messages.CHANNEL_BROWSER_HTML_TITLE.format({ guildName: n.name }),
        s = i ? R.Z.Messages.CHANNELS_AND_ROLES : R.Z.Messages.CHANNEL_BROWSER_TITLE;
    return (
        (0, h.Tt)({ location: r }),
        (0, l.jsxs)(f.Z, {
            className: A.header,
            innerClassname: A.innerHeader,
            hideSearch: !0,
            channelId: j.oC.CUSTOMIZE_COMMUNITY,
            guildId: n.id,
            toolbar:
                null != t
                    ? (0, l.jsx)(d.Button, {
                          className: A.returnButton,
                          size: d.Button.Sizes.SMALL,
                          look: d.Button.Looks.OUTLINED,
                          color: d.Button.Colors.PRIMARY,
                          onClick: () => {
                              null != t && (0, g.XU)(n.id, t.id);
                          },
                          children: (0, l.jsx)(d.Text, {
                              className: A.returnButtonText,
                              variant: 'text-xs/medium',
                              color: 'none',
                              children: R.Z.Messages.RETURN_TO_CHANNEL.format({
                                  channelNameHook: () =>
                                      null == t
                                          ? null
                                          : (0, l.jsxs)(
                                                a.Fragment,
                                                {
                                                    children: [
                                                        (0, l.jsx)(_._, {
                                                            className: A.returnIcon,
                                                            guild: n,
                                                            channel: t
                                                        }),
                                                        (0, l.jsx)(u.Z, {
                                                            children: (0, l.jsx)(d.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'none',
                                                                children: t.name
                                                            })
                                                        })
                                                    ]
                                                },
                                                t.id
                                            )
                              })
                          })
                      })
                    : [],
            children: [
                (0, l.jsx)(f.Z.Icon, {
                    icon: d.ChannelListMagnifyingGlassIcon,
                    'aria-hidden': !0
                }),
                (0, l.jsx)(f.Z.Title, { children: s })
            ]
        })
    );
}
function L(e) {
    let { guildId: n, selectedSection: t } = e,
        i = (0, s.e7)([b.Z], () => b.Z.getGuild(n)),
        o = (0, Z.Z)(i),
        [u, h] = a.useState(null != t ? t : T.l7.CUSTOMIZE);
    a.useEffect(() => {
        null != t && h(t);
    }, [t]);
    let m = (0, s.e7)([E.Z], () => E.Z.getLastSelectedChannelId(n)),
        _ = (0, s.e7)([N.ZP], () => N.ZP.getCurrentSidebarChannelId(j.oC.CHANNEL_BROWSER)),
        f = null != _ && u === T.l7.BROWSE,
        g = (0, s.e7)([I.Z], () => I.Z.getChannel(m)),
        S = (0, s.e7)([x.Z], () => x.Z.getNewChannelIds(n).size > 0),
        L = (0, C.fU)(n);
    return null == i
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsxs)('div', {
                      className: r()(O.chat, { [O.threadSidebarOpen]: f }),
                      children: [
                          (0, l.jsx)(B, {
                              guild: i,
                              previousChannel: g
                          }),
                          (0, l.jsxs)('div', {
                              className: r()(O.content, A.container),
                              children: [
                                  o &&
                                      (0, l.jsxs)(d.TabBar, {
                                          className: A.tabBar,
                                          type: 'top',
                                          look: 'brand',
                                          selectedItem: u,
                                          onItemSelect: (e) => h(e),
                                          children: [
                                              (0, l.jsx)(
                                                  d.TabBar.Item,
                                                  {
                                                      className: A.tabBarItem,
                                                      id: T.l7.CUSTOMIZE,
                                                      children: R.Z.Messages.OPT_IN_GUILD_NOTICE_CTA
                                                  },
                                                  T.l7.CUSTOMIZE
                                              ),
                                              (0, l.jsxs)(
                                                  d.TabBar.Item,
                                                  {
                                                      className: A.tabBarItem,
                                                      id: T.l7.BROWSE,
                                                      'aria-label': R.Z.Messages.CHANNEL_BROWSER_TITLE,
                                                      children: [
                                                          R.Z.Messages.CHANNEL_BROWSER_TITLE,
                                                          (0, l.jsx)(d.TextBadge, {
                                                              text: S ? R.Z.Messages.CHANNEL_TYPE_NEW : L,
                                                              color: S ? c.Z.unsafe_rawColors.BRAND_260.css : c.Z.colors.BACKGROUND_ACCENT.css,
                                                              className: r()({ [A.newBadge]: S })
                                                          })
                                                      ]
                                                  },
                                                  T.l7.BROWSE
                                              )
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
                                              return (0, l.jsx)(p.Z, { guildId: n });
                                      }
                                  })()
                              ]
                          })
                      ]
                  }),
                  f && (0, l.jsx)(p.I, { channelId: _ })
              ]
          });
}
