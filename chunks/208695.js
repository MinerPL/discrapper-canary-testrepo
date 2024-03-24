"use strict";
a.r(t), a.d(t, {
  GuildFeedMessage: function() {
    return V
  },
  default: function() {
    return W
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  s = a("414456"),
  i = a.n(s),
  d = a("446674"),
  r = a("77078"),
  u = a("405645"),
  o = a("887446"),
  c = a("634807"),
  f = a("913491"),
  m = a("574073"),
  h = a("865343"),
  E = a("909917"),
  g = a("380986"),
  I = a("969706"),
  _ = a("39331"),
  x = a("115859"),
  S = a("862451"),
  v = a("611792"),
  C = a("554372"),
  N = a("256572"),
  p = a("208021"),
  T = a("582713"),
  A = a("42203"),
  j = a("780571"),
  M = a("497880"),
  D = a("93332"),
  F = a("299039"),
  L = a("713810"),
  R = a("185014"),
  b = a("2804"),
  G = a("603371"),
  y = a("515631"),
  O = a("49111"),
  H = a("724210"),
  k = a("894488"),
  U = a("782340"),
  w = a("840741"),
  B = a("5762");
let P = n.memo(function(e) {
    let {
      message: t,
      channel: a,
      animateAvatar: s,
      repliedMessage: i
    } = e, {
      popouts: d,
      setPopout: r
    } = (0, I.default)(t.id, k.DEFAULT_POPOUTS), {
      usernameProfile: o,
      avatarProfile: c
    } = d, f = (0, g.useContextMenuUser)(t.author.id, a.id), h = (0, g.useClickMessageAuthorUsername)(t, a, o, r), _ = (0, g.useClickMessageAuthorAvatar)(c, r), x = n.useCallback(() => r({
      usernameProfile: !1,
      avatarProfile: !1,
      referencedUsernameProfile: !1
    }), [r]), S = (0, m.default)(t), v = (0, u.useRoleIcon)({
      guildId: a.guild_id,
      roleId: S.iconRoleId
    });
    return (0, l.jsx)(D.default, {
      guildId: a.guild_id,
      message: t,
      channel: a,
      repliedMessage: i,
      author: S,
      showTimestampOnHover: t.type !== O.MessageTypes.REPLY,
      renderPopout: E.default,
      showAvatarPopout: c,
      showUsernamePopout: o,
      onClickAvatar: _,
      onClickUsername: h,
      onPopoutRequestClose: x,
      onContextMenu: f,
      roleIcon: v,
      animate: s
    })
  }),
  V = n.forwardRef(function(e, t) {
    var a;
    let {
      guildId: s,
      channel: u,
      message: m,
      feedItemId: E,
      className: g,
      animateAvatar: I,
      contentClassName: D,
      children: G,
      groupId: k,
      onMessageClick: U,
      hideHeader: w = !1,
      forceAddReactions: V = !0,
      ...W
    } = e, K = n.useRef(null), z = (0, d.useStateFromStores)([A.default], () => A.default.getChannel(u.id)), Y = null != z && m.isFirstMessageInForumPost(z), Z = (0, c.isMessageNewerThanImprovedMarkdownEpoch)((null !== (a = m.editedTimestamp) && void 0 !== a ? a : m.timestamp).valueOf()), {
      content: X,
      hasSpoilerEmbeds: J
    } = (0, _.default)(m, {
      hideSimpleEmbedContent: !0,
      allowList: Y || Z,
      allowHeading: Y || Z,
      allowLinks: !0,
      previewLinkTarget: !0
    }), q = m.type === O.MessageTypes.REPLY ? m.messageReference : void 0, Q = (0, d.useStateFromStores)([N.default], () => N.default.getMessageByReference(q)), $ = (0, d.useStateFromStores)([A.default], () => m.hasFlag(O.MessageFlags.HAS_THREAD) && A.default.getChannel(F.default.castMessageIdAsChannelId(m.id))), ee = (0, h.getMessageAriaLabelledBy)(m, k, {
      hasTimestamp: m.id === k
    }), et = (0, h.getMessageAriaDescribedBy)(m), ea = null != q ? (0, l.jsx)(r.Clickable, {
      onClick: e => {
        null != Q.message && (e.stopPropagation(), (0, L.trackFeedItemInteracted)({
          feed_item_type: (0, b.getFeedItemTypeFromId)(E),
          feed_item_id: E,
          load_id: R.default.getLoadId(s),
          action_type: y.FeedItemInteractionType.REFERENCED_MESSAGE_CLICKED,
          guild_id: s,
          channel_id: u.id,
          message_id: m.id,
          home_session_id: o.default.getHomeSessionId(s)
        }), p.default.openChannelAsSidebar({
          guildId: u.guild_id,
          channelId: u.id,
          baseChannelId: H.StaticChannelRoute.GUILD_HOME,
          details: {
            type: T.SidebarOpenDetailsType.HOME,
            initialMessageId: Q.message.id
          }
        }))
      },
      children: (0, C.default)(m, u, q, Q, !1)
    }) : null, el = (0, f.default)(m), en = n.useCallback(e => {
      U(e, K.current, m)
    }, [U, m]);
    return (0, l.jsx)(j.default, {
      messageRef: K,
      className: i(g, {
        [B.mentioned]: m.mentioned && !(0, f.default)(m)
      }),
      onClick: en,
      childrenRepliedMessage: ea,
      childrenExecutedCommand: (0, v.default)(m, u, !1),
      childrenHeader: el || w ? null : (0, l.jsx)(P, {
        channel: u,
        message: m,
        animateAvatar: I,
        repliedMessage: Q
      }),
      childrenAccessories: (0, x.default)({
        channelMessageProps: e,
        hasSpoilerEmbeds: J,
        isInteracting: !1,
        forceAddReactions: V
      }),
      childrenMessageContent: (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(M.default, {
          className: D,
          message: m,
          content: X,
          contentRef: t
        }), G]
      }),
      childrenSystemMessage: (0, S.default)(e),
      hasThread: null != $ && m.hasFlag(O.MessageFlags.HAS_THREAD),
      hasReply: m.type === O.MessageTypes.REPLY,
      isSystemMessage: el,
      "aria-labelledby": ee,
      "aria-describedby": et,
      ...W
    })
  });
var W = n.memo(function(e) {
  let {
    message: t,
    guildId: a,
    feedItemId: s,
    disableTruncation: d
  } = e, u = t.attachments.length > 0, [o, c] = n.useState(!1), [f, m] = (0, G.default)(a, s);
  return (0, l.jsx)(V, {
    ref: e => {
      null != e && !d && c(e.scrollHeight > e.clientHeight)
    },
    contentClassName: i({
      [w.clampLarge]: !d && !f && !u,
      [w.clampSmall]: !d && !f && u
    }),
    ...e,
    children: o && !f ? (0, l.jsx)(r.Clickable, {
      className: w.showMore,
      onClick: e => m(e, t),
      "aria-hidden": !0,
      children: U.default.Messages.GUILD_FEED_TRUNCATED_MESSAGE_SEE_MORE
    }) : null
  })
})