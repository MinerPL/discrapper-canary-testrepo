"use strict";
a.r(t), a.d(t, {
  GuildFeedEmpty: function() {
    return _
  },
  GuildFeedError: function() {
    return I
  },
  GuildFeedFooter: function() {
    return E
  },
  GuildFeedPaginationError: function() {
    return x
  }
});
var l = a("735250"),
  n = a("470079"),
  s = a("803997"),
  i = a.n(s),
  d = a("481060"),
  r = a("974029"),
  u = a("499033"),
  o = a("759231"),
  c = a("602744"),
  f = a("981631"),
  m = a("689938"),
  h = a("233837");

function g(e, t, n) {
  return (0, l.jsx)(d.Clickable, {
    className: h.mutedChannelsHook,
    onClick: function() {
      (0, d.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("49237"), a.e("99387"), a.e("5863"), a.e("60411")]).then(a.bind(a, "751212"));
        return t => (0, l.jsx)(e, {
          ...t,
          guildId: n
        })
      })
    },
    children: e
  }, t)
}
let E = n.memo(function(e) {
    let {
      guildId: t,
      onReloadClick: a
    } = e, n = (0, c.default)(t);
    return (0, l.jsxs)("div", {
      className: i()(h.container, h.footerContainer),
      children: [(0, l.jsxs)("div", {
        className: h.iconContainer,
        children: [(0, l.jsx)(r.default, {
          className: h.icon,
          width: 20,
          height: 20
        }), (0, l.jsx)(u.default, {
          className: h.stars,
          width: 52,
          height: 40
        })]
      }), (0, l.jsx)(d.Heading, {
        className: h.header,
        variant: "heading-md/semibold",
        children: m.default.Messages.GUILD_FEED_FOOTER_TITLE
      }), (0, l.jsx)(d.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: n > 0 ? m.default.Messages.GUILD_FEED_MUTED_CHANNELS_SUBTITLE.format({
          numMutedChannels: n,
          mutedChannelsHook: (e, a) => g(e, a, t)
        }) : m.default.Messages.GUILD_FEED_FOOTER_SUBTITLE
      }), (0, l.jsx)(d.Button, {
        onClick: a,
        className: h.button,
        children: m.default.Messages.GUILD_FEED_RELOAD
      })]
    })
  }),
  _ = n.memo(function(e) {
    let {
      guildId: t,
      onReloadClick: a
    } = e, n = (0, c.default)(t);
    return (0, l.jsxs)("div", {
      className: i()(h.container, h.background),
      children: [(0, l.jsxs)("div", {
        className: h.iconContainer,
        children: [(0, l.jsx)(r.default, {
          className: h.icon,
          width: 36,
          height: 36
        }), (0, l.jsx)(u.default, {
          className: h.stars
        })]
      }), (0, l.jsx)(d.Heading, {
        className: h.header,
        variant: "heading-md/semibold",
        children: m.default.Messages.GUILD_FEED_EMPTY_TITLE
      }), (0, l.jsx)(d.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: n > 0 ? m.default.Messages.GUILD_FEED_MUTED_CHANNELS_SUBTITLE.format({
          numMutedChannels: n,
          mutedChannelsHook: (e, a) => g(e, a, t)
        }) : m.default.Messages.GUILD_FEED_EMPTY_SUBTITLE
      }), (0, l.jsx)(d.Button, {
        onClick: a,
        className: h.button,
        children: m.default.Messages.GUILD_FEED_RELOAD
      })]
    })
  }),
  I = n.memo(function(e) {
    let {
      onReloadClick: t
    } = e;
    return (0, l.jsxs)("div", {
      className: i()(h.container, h.background),
      children: [(0, l.jsx)("div", {
        className: h.iconContainer,
        children: (0, l.jsx)(o.default, {
          className: h.icon,
          width: 36,
          height: 36
        })
      }), (0, l.jsx)(d.Heading, {
        className: h.header,
        variant: "heading-md/semibold",
        children: m.default.Messages.GUILD_FEED_ERROR_TITLE
      }), (0, l.jsx)(d.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: m.default.Messages.GUILD_FEED_ERROR_SUBTITLE.format({
          url: f.Links.STATUS
        })
      }), (0, l.jsx)(d.Button, {
        onClick: t,
        className: h.button,
        children: m.default.Messages.GUILD_FEED_RELOAD
      })]
    })
  }),
  x = n.memo(function(e) {
    let {
      onReloadClick: t
    } = e;
    return (0, l.jsxs)("div", {
      className: i()(h.container, h.paginationContainer, h.primaryBackground),
      children: [(0, l.jsx)("div", {
        className: h.iconContainer,
        children: (0, l.jsx)(o.default, {
          className: h.icon,
          width: 36,
          height: 36
        })
      }), (0, l.jsx)(d.Heading, {
        className: h.header,
        variant: "heading-md/semibold",
        children: m.default.Messages.GUILD_FEED_ERROR_TITLE
      }), (0, l.jsx)(d.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: m.default.Messages.GUILD_FEED_ERROR_SUBTITLE.format({
          url: f.Links.STATUS
        })
      }), (0, l.jsx)(d.Button, {
        onClick: t,
        className: h.button,
        children: m.default.Messages.RETRY
      })]
    })
  })