"use strict";
a.r(t), a.d(t, {
  default: function() {
    return T
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("91192"),
  i = a("974900"),
  d = a("442837"),
  r = a("481060"),
  u = a("933557"),
  o = a("471445"),
  c = a("592125"),
  f = a("271383"),
  m = a("699516"),
  h = a("594174"),
  g = a("36082"),
  E = a("880008"),
  _ = a("5192"),
  I = a("276438"),
  x = a("330249"),
  S = a("947694"),
  v = a("325022"),
  C = a("689938"),
  N = a("854872");

function p(e) {
  let {
    guildId: t,
    feedItem: a,
    onSendFeedback: n
  } = e, s = (0, x.default)(a), E = s.channel_id, S = (0, d.useStateFromStores)([c.default], () => c.default.getChannel(E)), v = (0, u.default)(S), p = (0, o.getChannelIconComponent)(S), T = (0, d.useStateFromStores)([h.default], () => h.default.getUser(s.author.id)), A = (0, d.useStateFromStores)([c.default, f.default, m.default], () => _.default.getName(t, E, T)), j = e => {
    (0, I.setFeedItemPreference)(t, e), n()
  };
  return (0, l.jsxs)("div", {
    className: N.options,
    children: [(0, l.jsx)(r.Clickable, {
      className: N.option,
      onClick: () => j({
        channel_id: E,
        message_id: s.id,
        entity_type: i.GuildFeedPreferenceEntityTypes.MESSAGE
      }),
      children: (0, l.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "interactive-active",
        children: C.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_FEEDBACK_NO_LIKE
      })
    }), (0, l.jsx)(r.Clickable, {
      className: N.option,
      onClick: () => j({
        channel_id: E,
        entity_type: i.GuildFeedPreferenceEntityTypes.CHANNEL
      }),
      children: (0, l.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "interactive-active",
        children: C.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_FEEDBACK_SHOW_LESS_CHANNEL.format({
          channelName: v,
          channelNameHook: (e, t) => (0, l.jsxs)("span", {
            children: [null != p && (0, l.jsx)(p, {
              className: N.mentionIcon,
              width: 20,
              height: 20
            }), " ", e]
          }, t)
        })
      })
    }), (0, l.jsx)(r.Clickable, {
      className: N.option,
      onClick: () => {
        var e;
        return j({
          user_id: null == s ? void 0 : null === (e = s.author) || void 0 === e ? void 0 : e.id,
          entity_type: i.GuildFeedPreferenceEntityTypes.USER
        })
      },
      children: (0, l.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "interactive-active",
        children: C.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_FEEDBACK_SHOW_LESS_USER.format({
          username: A,
          usernameHook: (e, t) => (0, l.jsxs)("span", {
            children: [(0, l.jsx)(g.default, {
              className: N.mentionIcon,
              width: 20,
              height: 20
            }), " ", e]
          }, t)
        })
      })
    })]
  })
}

function T(e) {
  let {
    guildId: t,
    feedItem: a
  } = e, [i, d] = n.useState(!1), u = (0, s.useListItem)(a.id);
  return (0, l.jsxs)(S.default, {
    ariaLabel: C.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_ITEM,
    listItemProps: u,
    children: [(0, l.jsxs)(v.default, {
      hideBorder: i,
      children: [(0, l.jsx)(E.default, {
        className: N.icon,
        width: 16,
        height: 16,
        foregroundColor: "currentColor"
      }), i ? (0, l.jsxs)("div", {
        className: N.title,
        children: [(0, l.jsx)(r.Text, {
          className: N.title,
          variant: "text-md/medium",
          color: "interactive-active",
          children: C.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_ITEM_FEEDBACK_RECEIVED_TITLE
        }), (0, l.jsx)(r.Text, {
          className: N.title,
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: C.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_ITEM_FEEDBACK_RECEIVED_SUBTITLE
        })]
      }) : (0, l.jsx)(r.Text, {
        className: N.title,
        variant: "text-md/medium",
        color: "interactive-active",
        children: C.default.Messages.GUILD_FEED_HIDDEN_MESSAGE_ITEM
      }), (0, l.jsx)(r.Button, {
        size: r.Button.Sizes.SMALL,
        color: r.Button.Colors.PRIMARY,
        onClick: () => {
          (0, I.unhideItemFromGuildFeed)(a, t)
        },
        children: C.default.Messages.UNDO
      })]
    }), !i && (0, l.jsx)(p, {
      guildId: t,
      feedItem: a,
      onSendFeedback: () => d(!0)
    })]
  })
}