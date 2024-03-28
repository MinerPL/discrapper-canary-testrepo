"use strict";
a.r(t), a("47120"), a("536091");
var l = a("735250"),
  n = a("470079"),
  s = a("91192"),
  i = a("442837"),
  d = a("481060"),
  r = a("239091"),
  u = a("933557"),
  o = a("471445"),
  c = a("336197"),
  f = a("6025"),
  m = a("897473"),
  h = a("433355"),
  g = a("592125"),
  E = a("699516"),
  _ = a("823379"),
  I = a("642101"),
  x = a("971930"),
  S = a("330249"),
  v = a("934820"),
  C = a("492950"),
  N = a("947694"),
  p = a("325022"),
  T = a("802530"),
  A = a("199390"),
  j = a("233897"),
  M = a("981631"),
  D = a("176505"),
  F = a("689938"),
  L = a("695233");
let R = async () => {
  let {
    default: e
  } = await a.e("81124").then(a.bind(a, "318597"));
  return e
};
t.default = n.forwardRef(function(e, t) {
  var a, b;
  let {
    guildId: G,
    messageBundleItem: O,
    showFeedback: y,
    setOnDismissedFeedback: H
  } = e, {
    messages: k
  } = O, U = k[0].message, w = k[k.length - 1].message, P = w.channel_id, B = (0, i.useStateFromStoresArray)([I.default], () => k.map(e => I.default.getCachedMessage(G, P, e.message.id)).filter(_.isNotNullish), [G, P, k]), V = (0, i.useStateFromStores)([g.default], () => g.default.getChannel(P)), W = (0, o.getChannelIconComponent)(V, void 0, {
    textFocused: !0
  }), K = (0, o.getChannelIconTooltipText)(V), z = (0, u.default)(V), [Y, Z] = n.useState(!1), X = (0, i.useStateFromStores)([E.default], () => null != w && E.default.isBlocked(w.author.id)), J = (0, s.useListItem)(null !== (b = null === (a = B[B.length - 1]) || void 0 === a ? void 0 : a.id) && void 0 !== b ? b : O.id), q = O.id, Q = (0, i.useStateFromStores)([h.default], () => h.default.getSidebarState(D.StaticChannelRoute.GUILD_HOME)), $ = (0, x.getSidebarMessageId)(Q, V), ee = null != $ && U.id === $, {
    handleItemClick: et,
    handleChannelClick: ea,
    handleCardClick: el,
    handleMessageClick: en
  } = (0, v.default)({
    guildId: G,
    channelId: P,
    feedItemId: q,
    onChannelClick: () => (0, c.default)(M.Routes.CHANNEL(G, P, U.id)),
    onContentClick: e => {
      var t;
      f.default.openChannelAsSidebar({
        guildId: G,
        channelId: P,
        baseChannelId: D.StaticChannelRoute.GUILD_HOME,
        flash: !1,
        details: {
          type: m.SidebarOpenDetailsType.HOME,
          initialMessageId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : U.id,
          highlightMessageIds: new Set((0, S.getAllMessageIdsFromFeedItem)(O))
        }
      })
    }
  }), es = n.useMemo(() => k.map(e => {
    var t;
    return null !== (t = e.referenceMessages) && void 0 !== t ? t : []
  }).flat(), [k]);
  if (null == V || null == U || null == w || X) return null;
  let ei = e => {
    e.stopPropagation(), (0, r.openContextMenuLazy)(e, async () => {
      let e = await R();
      return t => (0, l.jsx)(e, {
        ...t,
        item: O,
        channel: V
      })
    })
  };
  return (0, l.jsxs)(N.default, {
    className: y ? L.__invalid_containerNoPadding : L.container,
    ref: t,
    selected: ee,
    onCardClick: el,
    onItemClick: et,
    onContextMenu: ei,
    itemId: q,
    ariaLabel: F.default.Messages.GUILD_FEED_MESSAGE_ITEM_A11Y_LABEL.format({
      channelName: z
    }),
    listItemProps: J,
    onMouseEnter: () => Z(!0),
    onMouseLeave: () => Z(!1),
    children: [(0, l.jsxs)(d.HeadingLevel, {
      component: (0, l.jsxs)(p.default, {
        children: [(0, l.jsx)("div", {
          className: L.messageHeaderMenuLeft,
          children: (0, l.jsxs)(d.Clickable, {
            className: L.channelNameContainer,
            onClick: ea,
            children: [null != W ? (0, l.jsx)(d.Tooltip, {
              text: K,
              delay: 500,
              children: e => (0, l.jsx)(W, {
                ...e,
                className: L.channelIcon,
                height: 16,
                width: 16
              })
            }) : null, (0, l.jsx)(d.Heading, {
              lineClamp: 1,
              variant: "heading-sm/semibold",
              children: z
            })]
          })
        }), (0, l.jsx)("div", {
          className: L.messageHeaderMenuRight,
          children: (0, l.jsx)(T.default, {
            feedItem: O,
            guildId: G,
            onContextMenu: ei
          })
        })]
      }),
      children: [(0, l.jsx)("div", {
        className: L.messageBundleItemBody,
        children: (0, l.jsx)(A.default, {
          feedItemId: O.id,
          guildId: G,
          channel: V,
          messages: B,
          animateAvatar: Y,
          onMessageClick: en
        })
      }), (0, l.jsx)(j.ReferenceMessages, {
        referenceMessages: es,
        guildId: G
      })]
    }), y && (0, l.jsx)(C.default, {
      guildId: G,
      guildFeedItem: O,
      setOnDismissFeedback: H
    })]
  })
})