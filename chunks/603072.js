"use strict";
l.r(t), l.d(t, {
  default: function() {
    return B
  }
}), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("442837"),
  d = l("524437"),
  o = l("692547"),
  u = l("481060"),
  c = l("252618"),
  h = l("605236"),
  f = l("473403"),
  m = l("984370"),
  C = l("216306"),
  N = l("104155"),
  x = l("22082"),
  g = l("703656"),
  p = l("433355"),
  S = l("592125"),
  E = l("430824"),
  I = l("944486"),
  _ = l("514342"),
  T = l("648414"),
  v = l("26290"),
  O = l("31445"),
  A = l("59350"),
  R = l("290511"),
  j = l("176505"),
  b = l("921944"),
  L = l("689938"),
  M = l("289327"),
  D = l("19340");

function y(e) {
  let {
    guild: t,
    previousChannel: l
  } = e, s = (0, O.default)(t);
  a.useEffect(() => {
    (0, h.markDismissibleContentAsDismissed)(d.DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX, {
      dismissAction: b.ContentDismissActionType.DISMISS
    })
  });
  let i = s ? L.default.Messages.CHANNELS_AND_ROLES_HTML_TITLE.format({
      guildName: t.name
    }) : L.default.Messages.CHANNEL_BROWSER_HTML_TITLE.format({
      guildName: t.name
    }),
    r = s ? L.default.Messages.CHANNELS_AND_ROLES : L.default.Messages.CHANNEL_BROWSER_TITLE;
  return (0, c.usePageTitle)({
    location: i
  }), (0, n.jsxs)(m.default, {
    className: M.header,
    innerClassname: M.innerHeader,
    hideSearch: !0,
    channelId: j.StaticChannelRoute.CUSTOMIZE_COMMUNITY,
    guildId: t.id,
    toolbar: null != l ? (0, n.jsx)(u.Button, {
      className: M.returnButton,
      size: u.Button.Sizes.SMALL,
      look: u.Button.Looks.OUTLINED,
      color: u.Button.Colors.PRIMARY,
      onClick: () => {
        null != l && (0, g.transitionToGuild)(t.id, l.id)
      },
      children: (0, n.jsx)(u.Text, {
        className: M.returnButtonText,
        variant: "text-xs/medium",
        color: "none",
        children: L.default.Messages.RETURN_TO_CHANNEL.format({
          channelNameHook: () => null == l ? null : (0, n.jsxs)(a.Fragment, {
            children: [(0, n.jsx)(f.ChannelItemIcon, {
              className: M.returnIcon,
              guild: t,
              channel: l
            }), (0, n.jsx)(_.default, {
              children: (0, n.jsx)(u.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: l.name
              })
            })]
          }, l.id)
        })
      })
    }) : [],
    children: [(0, n.jsx)(m.default.Icon, {
      icon: T.default,
      "aria-hidden": !0
    }), (0, n.jsx)(m.default.Title, {
      children: r
    })]
  })
}

function B(e) {
  let {
    guildId: t,
    selectedSection: l
  } = e, s = (0, r.useStateFromStores)([E.default], () => E.default.getGuild(t)), d = (0, O.default)(s), [c, h] = a.useState(null != l ? l : R.GuildOnboardingTab.CUSTOMIZE);
  a.useEffect(() => {
    null != l && h(l)
  }, [l]);
  let f = (0, r.useStateFromStores)([I.default], () => I.default.getLastSelectedChannelId(t)),
    m = (0, r.useStateFromStores)([p.default], () => p.default.getCurrentSidebarChannelId(j.StaticChannelRoute.CHANNEL_BROWSER)),
    g = null != m && c === R.GuildOnboardingTab.BROWSE,
    _ = (0, r.useStateFromStores)([S.default], () => S.default.getChannel(f)),
    T = (0, r.useStateFromStores)([x.default], () => x.default.getNewChannelIds(t).size > 0),
    b = (0, C.useChannelBrowserChannelCount)(t);
  return null == s ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: i()(D.chat, {
        [D.threadSidebarOpen]: g
      }),
      children: [(0, n.jsx)(y, {
        guild: s,
        previousChannel: _
      }), (0, n.jsxs)("div", {
        className: i()(D.content, M.container),
        children: [d && (0, n.jsxs)(u.TabBar, {
          className: M.tabBar,
          type: "top",
          look: "brand",
          selectedItem: c,
          onItemSelect: e => h(e),
          children: [(0, n.jsx)(u.TabBar.Item, {
            className: M.tabBarItem,
            id: R.GuildOnboardingTab.CUSTOMIZE,
            children: L.default.Messages.OPT_IN_GUILD_NOTICE_CTA
          }, R.GuildOnboardingTab.CUSTOMIZE), (0, n.jsxs)(u.TabBar.Item, {
            className: M.tabBarItem,
            id: R.GuildOnboardingTab.BROWSE,
            "aria-label": L.default.Messages.CHANNEL_BROWSER_TITLE,
            children: [L.default.Messages.CHANNEL_BROWSER_TITLE, (0, n.jsx)(v.TextBadge, {
              text: T ? L.default.Messages.CHANNEL_TYPE_NEW : b,
              color: T ? o.default.unsafe_rawColors.BRAND_260.css : o.default.colors.BACKGROUND_ACCENT.css,
              className: i()({
                [M.newBadge]: T
              })
            })]
          }, R.GuildOnboardingTab.BROWSE)]
        }), (() => {
          switch (c) {
            case R.GuildOnboardingTab.CUSTOMIZE:
              return (0, n.jsx)(A.default, {
                guildId: t,
                onBrowseChannels: () => h(R.GuildOnboardingTab.BROWSE)
              });
            case R.GuildOnboardingTab.BROWSE:
            default:
              return (0, n.jsx)(N.default, {
                guildId: t
              })
          }
        })()]
      })]
    }), g && (0, n.jsx)(N.ChannelBrowserSidebar, {
      channelId: m
    })]
  })
}