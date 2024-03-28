"use strict";
a.r(t), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("803997"),
  i = a.n(s),
  d = a("91192"),
  r = a("442837"),
  u = a("481060"),
  o = a("239091"),
  c = a("933557"),
  f = a("471445"),
  m = a("336197"),
  h = a("6025"),
  g = a("897473"),
  E = a("433355"),
  _ = a("592125"),
  I = a("699516"),
  x = a("823379"),
  S = a("642101"),
  v = a("971930"),
  C = a("330249"),
  N = a("934820"),
  p = a("698534"),
  T = a("154871"),
  A = a("492950"),
  j = a("947694"),
  M = a("325022"),
  D = a("802530"),
  F = a("199390"),
  L = a("981631"),
  R = a("176505"),
  b = a("689938"),
  G = a("218956");
let O = async () => {
  let {
    default: e
  } = await a.e("81124").then(a.bind(a, "318597"));
  return e
};

function y(e) {
  let {
    item: t,
    referenceMessageBundles: a,
    channel: s,
    guildId: d,
    animateAvatar: r,
    onMessageClick: o
  } = e, c = n.useCallback(() => {
    var e, l;
    let n = a[a.length - 2 + 1];
    h.default.openChannelAsSidebar({
      guildId: d,
      channelId: s.id,
      baseChannelId: R.StaticChannelRoute.GUILD_HOME,
      flash: !1,
      details: {
        type: g.SidebarOpenDetailsType.HOME,
        initialMessageId: null !== (l = null == n ? void 0 : null === (e = n[0]) || void 0 === e ? void 0 : e.id) && void 0 !== l ? l : a[0][0].id,
        highlightMessageIds: new Set((0, C.getAllMessageIdsFromFeedItem)(t))
      }
    })
  }, [t, s, d, a]);
  return (0, l.jsxs)("div", {
    className: G.__invalid_conversationArea,
    children: [a.slice(0, 2).map((e, t) => {
      let n = e[0];
      return null == n ? null : (0, l.jsx)(T.GuildFeedConversationReply, {
        className: i()(G.conversationMessage, {
          [G.mentioned]: n.mentioned
        }),
        guildId: d,
        channel: s,
        message: n,
        onMessageClick: o,
        isTruncated: e.length > 1,
        animateAvatar: r,
        children: t !== a.length - 1 && (0, l.jsx)("div", {
          className: G.replySpine
        })
      }, n.id)
    }), a.length > 2 && (0, l.jsx)("div", {
      className: i()(G.conversationMessage, G.viewMoreReplies),
      children: (0, l.jsx)(u.Clickable, {
        onClick: c,
        "data-action": "view-more-replies",
        children: b.default.Messages.GUILD_FEED_TRUNCATED_REPLIES_VIEW_MORE.format({
          count: a.length - 2
        })
      })
    }, "view-more")]
  })
}
t.default = n.forwardRef(function(e, t) {
  var a, s;
  let {
    guildId: T,
    conversationItem: H,
    showFeedback: k,
    setOnDismissedFeedback: U
  } = e, {
    root: w
  } = H, {
    messages: P,
    children: B
  } = w, V = P[0], W = P[P.length - 1], K = W.channel_id, z = (0, r.useStateFromStoresArray)([S.default], () => P.map(e => S.default.getCachedMessage(T, K, e.id)).filter(x.isNotNullish), [T, K, P]), Y = (0, r.useStateFromStores)([_.default], () => _.default.getChannel(K)), Z = (0, f.getChannelIconComponent)(Y, void 0, {
    textFocused: !0
  }), X = (0, f.getChannelIconTooltipText)(Y), J = (0, c.default)(Y), [q, Q] = n.useState(!1), $ = (0, r.useStateFromStores)([I.default], () => null != W && I.default.isBlocked(W.author.id)), ee = (0, d.useListItem)(null !== (s = null === (a = z[z.length - 1]) || void 0 === a ? void 0 : a.id) && void 0 !== s ? s : H.id), et = H.id, ea = (0, r.useStateFromStores)([E.default], () => E.default.getSidebarState(R.StaticChannelRoute.GUILD_HOME)), el = (0, v.getSidebarMessageId)(ea, Y), en = null != el && V.id === el, {
    handleItemClick: es,
    handleChannelClick: ei,
    handleCardClick: ed,
    handleMessageClick: er
  } = (0, N.default)({
    guildId: T,
    channelId: K,
    feedItemId: et,
    onChannelClick: () => (0, m.default)(L.Routes.CHANNEL(T, K, V.id)),
    onContentClick: e => {
      var t;
      h.default.openChannelAsSidebar({
        guildId: T,
        channelId: K,
        baseChannelId: R.StaticChannelRoute.GUILD_HOME,
        flash: !1,
        details: {
          type: g.SidebarOpenDetailsType.HOME,
          initialMessageId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : V.id,
          highlightMessageIds: new Set((0, C.getAllMessageIdsFromFeedItem)(H))
        }
      })
    }
  }), eu = (0, r.useStateFromStores)([S.default], () => null == Y ? [] : B.map(e => e.messages.map(e => S.default.getCachedMessage(T, Y.id, e.id)).filter(x.isNotNullish)).filter(e => 0 !== e.length), [T, Y, B], p.areSecondLevelArraysEqual);
  if (null == Y || null == V || null == W || $) return null;
  let eo = e => {
    e.stopPropagation(), (0, o.openContextMenuLazy)(e, async () => {
      let e = await O();
      return t => (0, l.jsx)(e, {
        ...t,
        item: H,
        channel: Y
      })
    })
  };
  return (0, l.jsxs)(j.default, {
    className: k ? G.containerNoPadding : G.container,
    ref: t,
    selected: en,
    onCardClick: ed,
    onItemClick: es,
    onContextMenu: eo,
    itemId: et,
    ariaLabel: b.default.Messages.GUILD_FEED_MESSAGE_ITEM_A11Y_LABEL.format({
      channelName: J
    }),
    listItemProps: ee,
    onMouseEnter: () => Q(!0),
    onMouseLeave: () => Q(!1),
    children: [(0, l.jsxs)(u.HeadingLevel, {
      component: (0, l.jsxs)(M.default, {
        children: [(0, l.jsx)("div", {
          className: G.messageHeaderMenuLeft,
          children: (0, l.jsxs)(u.Clickable, {
            className: G.channelNameContainer,
            onClick: ei,
            children: [null != Z ? (0, l.jsx)(u.Tooltip, {
              text: X,
              delay: 500,
              children: e => (0, l.jsx)(Z, {
                ...e,
                className: G.channelIcon,
                height: 16,
                width: 16
              })
            }) : null, (0, l.jsx)(u.Heading, {
              lineClamp: 1,
              variant: "heading-sm/semibold",
              children: J
            })]
          })
        }), (0, l.jsx)("div", {
          className: G.messageHeaderMenuRight,
          children: (0, l.jsx)(D.default, {
            feedItem: H,
            guildId: T,
            onContextMenu: eo
          })
        })]
      }),
      children: [(0, l.jsx)("div", {
        className: i()(G.messageBundleItemBody, {
          [G.conversationRoot]: eu.length > 0,
          [G.hasReply]: V.type === L.MessageTypes.REPLY
        }),
        children: (0, l.jsx)(F.default, {
          feedItemId: H.id,
          guildId: T,
          channel: Y,
          messages: z,
          animateAvatar: q,
          onMessageClick: er
        })
      }), (0, l.jsx)(y, {
        item: H,
        channel: Y,
        guildId: T,
        referenceMessageBundles: eu,
        onMessageClick: er,
        animateAvatar: q
      })]
    }), k && (0, l.jsx)(A.default, {
      guildId: T,
      guildFeedItem: H,
      setOnDismissFeedback: U
    })]
  })
})