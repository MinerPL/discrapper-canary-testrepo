"use strict";
l.r(t), l.d(t, {
  ChannelBrowserSidebar: function() {
    return O
  },
  default: function() {
    return A
  }
}), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("803997"),
  i = l.n(s),
  r = l("442837"),
  d = l("481060"),
  o = l("325708"),
  u = l("213557"),
  c = l("433355"),
  h = l("324067"),
  f = l("984933"),
  m = l("430824"),
  C = l("496675"),
  N = l("6048"),
  x = l("908773"),
  g = l("626135"),
  p = l("216306"),
  S = l("775028"),
  E = l("981631"),
  I = l("176505"),
  _ = l("689938"),
  v = l("182461"),
  T = l("121950");

function O(e) {
  let {
    channelId: t
  } = e;
  return (0, n.jsx)(o.default, {
    sidebarType: o.ChatSidebarType.ThreadSidebar,
    maxWidth: 600,
    children: (0, n.jsx)(u.default, {
      channelId: t,
      baseChannelId: I.StaticChannelRoute.CHANNEL_BROWSER
    })
  })
}

function A(e) {
  let {
    guildId: t
  } = e, [s, o] = a.useState(""), u = (0, r.useStateFromStores)([m.default], () => m.default.getGuild(t)), O = (0, r.useStateFromStores)([f.default], () => f.default.getChannels(t)), A = (0, r.useStateFromStores)([h.default], () => h.default.getCategories(t)), R = (0, p.useFilterCategoriesByQuery)(t, A, O, s), j = (0, r.useStateFromStores)([C.default], () => C.default.canWithPartialContext(E.Permissions.MANAGE_CHANNELS, {
    guildId: t
  })), b = (0, r.useStateFromStores)([c.default], () => null != c.default.getCurrentSidebarChannelId(I.StaticChannelRoute.CHANNEL_BROWSER)), L = a.useCallback(() => o(""), [o]), M = a.useCallback(() => {
    (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([l.e("99387"), l.e("45094"), l.e("36494")]).then(l.bind(l, "218613"));
      return l => (0, n.jsx)(e, {
        ...l,
        channelType: null,
        guildId: t
      })
    })
  }, [t]);
  return null == u ? null : (0, n.jsx)(n.Fragment, {
    children: (0, n.jsx)("div", {
      className: i()(T.chat, v.container),
      children: (0, n.jsxs)("div", {
        className: i()(v.pageBody),
        children: [(0, n.jsxs)("div", {
          className: v.header,
          children: [(0, n.jsx)(N.default, {
            className: v.search,
            size: N.default.Sizes.MEDIUM,
            query: s,
            onChange: e => {
              "" === s && "" !== e && g.default.track(E.AnalyticEvents.SEARCH_STARTED, {
                search_type: "channel browser"
              }), o(e.toLowerCase())
            },
            onClear: L,
            placeholder: _.default.Messages.CHANNEL_BROWSER_SEARCH_PLACEHOLDER
          }), j ? (0, n.jsxs)(d.Button, {
            className: v.createButton,
            innerClassName: v.createButtonInner,
            onClick: M,
            children: [(0, n.jsx)(x.default, {
              className: v.createIcon
            }), _.default.Messages.CREATE]
          }) : null]
        }), (0, n.jsx)(S.default, {
          className: v.browser,
          channels: O,
          categories: R,
          guild: u,
          hasSidebar: b
        })]
      })
    })
  })
}