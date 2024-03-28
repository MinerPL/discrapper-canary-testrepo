"use strict";
a.r(t), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("525654"),
  i = a.n(s),
  d = a("91192"),
  r = a("536402"),
  u = a("442837"),
  o = a("481060"),
  c = a("239091"),
  f = a("933557"),
  m = a("471445"),
  h = a("456269"),
  g = a("479099"),
  E = a("336197"),
  _ = a("6025"),
  I = a("260483"),
  x = a("144140"),
  S = a("433355"),
  v = a("592125"),
  C = a("699516"),
  N = a("642101"),
  p = a("971930"),
  T = a("313531"),
  A = a("934820"),
  j = a("79712"),
  M = a("492950"),
  D = a("947694"),
  F = a("325022"),
  L = a("802530"),
  R = a("422871"),
  b = a("233897"),
  G = a("981631"),
  O = a("176505"),
  y = a("124368"),
  H = a("689938"),
  k = a("76251");
let U = new Set(["Electron", "Chrome"]),
  w = async () => {
    let {
      default: e
    } = await a.e("62233").then(a.bind(a, "49290"));
    return e
  };

function P(e) {
  let {
    channel: t
  } = e, a = (0, u.useStateFromStores)([x.default], () => {
    var e;
    return null !== (e = x.default.getCount(t.id)) && void 0 !== e ? e : 0
  }), n = a >= y.MAX_THREAD_MESSAGE_COUNT ? H.default.Messages.GUILD_FEED_MESSAGE_ITEM_MAX_REPLIES.format({
    maxReplies: y.MAX_THREAD_MESSAGE_COUNT
  }) : H.default.Messages.GUILD_FEED_MESSAGE_ITEM_NUM_REPLIES.format({
    numReplies: a
  }), s = (0, u.useStateFromStores)([I.default], () => I.default.getMemberIdsPreview(t.id)), i = (0, h.useFacepileUsers)(t, null != s ? s : []);
  return 0 === a ? null : (0, l.jsx)(b.ReferenceMessagesBase, {
    guildId: t.guild_id,
    maxUsers: 5,
    users: i,
    text: n
  })
}
t.default = n.forwardRef(function(e, t) {
  var a;
  let {
    guildId: s,
    postItem: I,
    showFeedback: x,
    setOnDismissedFeedback: b
  } = e, {
    thread: y
  } = I, B = (0, u.useStateFromStores)([v.default], () => v.default.getChannel(y.id), [y.id]), {
    message: V,
    isFeaturedPost: W
  } = (0, u.useStateFromStoresObject)([N.default], () => {
    let e = N.default.getCachedMessage(s, y.id, I.message.id);
    return {
      message: e,
      isFeaturedPost: N.default.getIsItemFeatured({
        guildId: s,
        entity: y,
        entityType: r.GuildFeedItemTypes.FORUM_POST
      })
    }
  }, [s, I.message.id, y]), K = (0, f.default)(y), z = (0, u.useStateFromStores)([C.default], () => null != V && C.default.isBlocked(null == V ? void 0 : V.author.id)), Y = (0, d.useListItem)(null !== (a = null == V ? void 0 : V.id) && void 0 !== a ? a : I.message.id), Z = (0, T.default)(I), X = (0, m.getChannelIconTooltipText)(y), J = (0, u.useStateFromStores)([v.default], () => v.default.getChannel(y.parent_id)), q = (0, f.default)(J), Q = (0, m.getChannelIconComponent)(J), [$, ee] = n.useState(!1), et = (0, u.useStateFromStores)([S.default], () => S.default.getSidebarState(O.StaticChannelRoute.GUILD_HOME)), ea = (0, p.getSidebarMessageId)(et, B), el = null != ea && I.message.id === ea, en = I.highlighted ? H.default.Messages.GUILD_FEED_SPECIAL_HIGHLIGHT : W ? H.default.Messages.GUILD_FEED_FEATURED_BY_MODERATORS : null, {
    handleItemClick: es,
    handleChannelClick: ei,
    handleCardClick: ed,
    handleMessageClick: er
  } = (0, A.default)({
    guildId: s,
    channelId: y.id,
    feedItemId: Z,
    onChannelClick: () => (0, E.default)(G.Routes.CHANNEL(s, y.parent_id)),
    onContentClick: () => _.default.openThreadAsSidebar({
      guildId: s,
      baseChannelId: O.StaticChannelRoute.GUILD_HOME,
      channelId: y.id
    })
  }), [eu, eo] = (0, h.useSomeAppliedTags)(y), ec = eu[0], ef = (0, h.useAppliedTags)(y).slice(1), em = null != i().name && !U.has(i().name);
  if (null == y || null == B || null == V || null == I || z) return null;
  let eh = e => {
    e.stopPropagation(), (0, c.openContextMenuLazy)(e, async () => {
      let e = await w();
      return t => (0, l.jsx)(e, {
        ...t,
        messageItem: I,
        channel: B,
        message: V
      })
    })
  };
  return (0, l.jsxs)(D.default, {
    className: x ? k.__invalid_containerNoPadding : k.container,
    ref: t,
    selected: el,
    onCardClick: ed,
    onItemClick: es,
    onContextMenu: eh,
    itemId: Z,
    ariaLabel: H.default.Messages.GUILD_FEED_MESSAGE_ITEM_A11Y_LABEL.format({
      channelName: K
    }),
    listItemProps: Y,
    onMouseEnter: () => ee(!0),
    onMouseLeave: () => ee(!1),
    children: [(0, l.jsx)(o.HeadingLevel, {
      component: (0, l.jsxs)(F.default, {
        children: [(0, l.jsxs)("div", {
          className: k.postHeaderMenuLeft,
          children: [(0, l.jsxs)(o.Clickable, {
            className: k.channelNameContainer,
            onClick: ei,
            children: [null != Q ? (0, l.jsx)(o.Tooltip, {
              text: X,
              delay: 500,
              children: e => (0, l.jsx)(Q, {
                ...e,
                className: k.channelIcon,
                height: 16,
                width: 16
              })
            }) : null, (0, l.jsx)(o.Heading, {
              className: k.channelName,
              variant: "heading-sm/semibold",
              lineClamp: 1,
              children: q
            })]
          }), null != en && (0, l.jsxs)("div", {
            className: k.featuredPostContainer,
            children: [(0, l.jsx)(j.default, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              className: k.featuredPostIcon
            }), (0, l.jsx)(o.Text, {
              className: k.featuredPostText,
              variant: "text-sm/normal",
              color: "header-secondary",
              children: en
            })]
          })]
        }), (0, l.jsx)("div", {
          className: k.postHeaderMenuRight,
          children: (0, l.jsx)(L.default, {
            feedItem: I,
            guildId: s,
            onContextMenu: eh
          })
        })]
      }),
      children: (0, l.jsxs)(o.HeadingLevel, {
        component: (0, l.jsxs)("div", {
          className: k.titleContainer,
          children: [(0, l.jsx)(o.Heading, {
            className: k.title,
            variant: "heading-lg/semibold",
            children: y.name
          }), null != ec ? (0, l.jsxs)("div", {
            className: k.tags,
            children: [(0, l.jsx)(g.default, {
              tag: ec,
              size: g.default.Sizes.SMALL
            }), eo > 0 ? (0, l.jsx)(g.ForumTagOverflow, {
              tags: ef,
              count: eo,
              size: g.default.Sizes.SMALL
            }) : null]
          }) : null]
        }),
        children: [(0, l.jsx)(R.default, {
          className: k.messageItemBody,
          guildId: y.guild_id,
          animateAvatar: $,
          channel: y,
          message: V,
          feedItemId: I.id,
          onMessageClick: er,
          disableTruncation: em
        }), (0, l.jsx)(P, {
          channel: y
        })]
      })
    }), x && (0, l.jsx)(M.default, {
      guildId: s,
      guildFeedItem: I,
      setOnDismissFeedback: b
    })]
  })
})