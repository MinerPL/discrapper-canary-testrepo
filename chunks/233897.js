"use strict";
a.r(t), a.d(t, {
  ReferenceMessages: function() {
    return O
  },
  ReferenceMessagesBase: function() {
    return G
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("91192"),
  i = a("536402"),
  d = a("442837"),
  r = a("481060"),
  u = a("239091"),
  o = a("933557"),
  c = a("471445"),
  f = a("336197"),
  m = a("6025"),
  h = a("897473"),
  g = a("433355"),
  E = a("592125"),
  _ = a("699516"),
  I = a("602623"),
  x = a("642101"),
  S = a("971930"),
  v = a("313531"),
  C = a("934820"),
  N = a("79712"),
  p = a("492950"),
  T = a("947694"),
  A = a("325022"),
  j = a("802530"),
  M = a("422871"),
  D = a("981631"),
  F = a("176505"),
  L = a("689938"),
  R = a("436463");
let b = async () => {
  let {
    default: e
  } = await a.e("62233").then(a.bind(a, "49290"));
  return e
};

function G(e) {
  let {
    guildId: t,
    maxUsers: a,
    users: n,
    text: s
  } = e;
  return (0, l.jsxs)("div", {
    className: R.referenceMessagesText,
    children: [(0, l.jsx)(I.default, {
      guildId: t,
      users: n,
      size: I.Sizes.SIZE_16,
      className: R.userSummaryItem,
      max: a,
      showDefaultAvatarsForNullUsers: !0
    }), (0, l.jsx)(r.Text, {
      variant: "text-xs/normal",
      color: "header-secondary",
      children: s
    })]
  })
}

function O(e) {
  let {
    referenceMessages: t,
    guildId: a
  } = e, s = n.useMemo(() => {
    let e = new Set;
    return t.map(e => e.author).filter(t => !(null == t || e.has(t.id)) && (e.add(t.id), !0)).slice(0, 3)
  }, [t]), i = t.length;
  if (0 === i) return null;
  let d = i > 3 ? L.default.Messages.GUILD_FEED_MESSAGE_ITEM_MAX_REPLIES.format({
    maxReplies: 3
  }) : L.default.Messages.GUILD_FEED_MESSAGE_ITEM_NUM_REPLIES.format({
    numReplies: i
  });
  return (0, l.jsx)(G, {
    guildId: a,
    users: s,
    text: d
  })
}
t.default = n.forwardRef(function(e, t) {
  var a, I;
  let {
    guildId: G,
    messageItem: y,
    showFeedback: H,
    setOnDismissedFeedback: k
  } = e, U = y.message.channel_id, w = y.message.id, {
    message: P,
    isFeaturedMessage: B
  } = (0, d.useStateFromStoresObject)([x.default], () => {
    let e = x.default.getCachedMessage(G, U, w),
      t = null != e && x.default.getIsItemFeatured({
        guildId: G,
        entity: e,
        entityType: i.GuildFeedItemTypes.MESSAGE
      });
    return {
      message: e,
      isFeaturedMessage: t
    }
  }, [G, U, w]), V = (0, d.useStateFromStores)([E.default], () => E.default.getChannel(U)), W = (0, c.getChannelIconComponent)(V, void 0, {
    textFocused: !0
  }), K = (0, c.getChannelIconTooltipText)(V), z = null !== (a = null == y ? void 0 : y.referenceMessages) && void 0 !== a ? a : [], Y = (0, o.default)(V), [Z, X] = n.useState(!1), J = (0, d.useStateFromStores)([_.default], () => null != P && _.default.isBlocked(null == P ? void 0 : P.author.id)), q = (0, s.useListItem)(null !== (I = null == P ? void 0 : P.id) && void 0 !== I ? I : w), Q = (0, v.default)(y), $ = (0, d.useStateFromStores)([g.default], () => g.default.getSidebarState(F.StaticChannelRoute.GUILD_HOME)), ee = (0, S.getSidebarMessageId)($, V), et = null != ee && y.message.id === ee, ea = y.highlighted ? L.default.Messages.GUILD_FEED_SPECIAL_HIGHLIGHT : B ? L.default.Messages.GUILD_FEED_FEATURED_BY_MODERATORS : null, {
    handleItemClick: el,
    handleChannelClick: en,
    handleCardClick: es,
    handleMessageClick: ei
  } = (0, C.default)({
    guildId: G,
    channelId: U,
    feedItemId: Q,
    onChannelClick: () => (0, f.default)(D.Routes.CHANNEL(G, U, w)),
    onContentClick: () => {
      m.default.openChannelAsSidebar({
        guildId: G,
        channelId: U,
        baseChannelId: F.StaticChannelRoute.GUILD_HOME,
        details: {
          type: h.SidebarOpenDetailsType.HOME,
          initialMessageId: w,
          highlightMessageIds: new Set([w])
        }
      })
    }
  });
  if (null == V || null == P || null == y || J) return null;
  let ed = e => {
    e.stopPropagation(), (0, u.openContextMenuLazy)(e, async () => {
      let e = await b();
      return t => (0, l.jsx)(e, {
        ...t,
        messageItem: y,
        channel: V,
        message: P
      })
    })
  };
  return (0, l.jsxs)(T.default, {
    className: H ? R.__invalid_containerNoPadding : R.container,
    ref: t,
    selected: et,
    onCardClick: es,
    onItemClick: el,
    onContextMenu: ed,
    itemId: Q,
    ariaLabel: L.default.Messages.GUILD_FEED_MESSAGE_ITEM_A11Y_LABEL.format({
      channelName: Y
    }),
    listItemProps: q,
    onMouseEnter: () => X(!0),
    onMouseLeave: () => X(!1),
    children: [(0, l.jsxs)(r.HeadingLevel, {
      component: (0, l.jsxs)(A.default, {
        children: [(0, l.jsxs)("div", {
          className: R.messageHeaderMenuLeft,
          children: [(0, l.jsxs)(r.Clickable, {
            className: R.channelNameContainer,
            onClick: en,
            children: [null != W ? (0, l.jsx)(r.Tooltip, {
              text: K,
              delay: 500,
              children: e => (0, l.jsx)(W, {
                ...e,
                className: R.channelIcon,
                height: 16,
                width: 16
              })
            }) : null, (0, l.jsx)(r.Heading, {
              lineClamp: 1,
              variant: "heading-sm/semibold",
              children: Y
            })]
          }), null != ea && (0, l.jsxs)("div", {
            className: R.featuredMessageContainer,
            children: [(0, l.jsx)(N.default, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              className: R.featuredMessageIcon
            }), (0, l.jsx)(r.Text, {
              className: R.featuredMessageText,
              variant: "text-sm/normal",
              color: "header-secondary",
              children: ea
            })]
          })]
        }), (0, l.jsx)("div", {
          className: R.messageHeaderMenuRight,
          children: (0, l.jsx)(j.default, {
            feedItem: y,
            guildId: G,
            onContextMenu: ed
          })
        })]
      }),
      children: [(0, l.jsx)(M.default, {
        className: R.messageItemBody,
        guildId: G,
        animateAvatar: Z,
        channel: V,
        message: P,
        feedItemId: y.id,
        onMessageClick: ei
      }), (0, l.jsx)(O, {
        referenceMessages: z,
        guildId: G
      })]
    }), H && (0, l.jsx)(p.default, {
      guildId: G,
      guildFeedItem: y,
      setOnDismissFeedback: k
    })]
  })
})