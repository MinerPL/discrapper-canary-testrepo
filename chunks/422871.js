"use strict";
a.r(t), a.d(t, {
  GuildFeedMessage: function() {
    return V
  }
}), a("47120");
var l = a("735250"),
  n = a("470079"),
  s = a("803997"),
  i = a.n(s),
  d = a("442837"),
  r = a("481060"),
  u = a("518738"),
  o = a("601410"),
  c = a("628238"),
  f = a("901461"),
  m = a("739566"),
  h = a("453687"),
  g = a("507418"),
  E = a("348238"),
  _ = a("38267"),
  I = a("25015"),
  x = a("438075"),
  S = a("295790"),
  v = a("145807"),
  C = a("56744"),
  N = a("869765"),
  p = a("6025"),
  T = a("897473"),
  A = a("592125"),
  j = a("998951"),
  M = a("113039"),
  D = a("778947"),
  F = a("709054"),
  L = a("276438"),
  R = a("642101"),
  b = a("313531"),
  G = a("978139"),
  O = a("369701"),
  y = a("981631"),
  H = a("176505"),
  k = a("959517"),
  U = a("689938"),
  w = a("833790"),
  P = a("264558");
let B = n.memo(function(e) {
    let {
      message: t,
      channel: a,
      animateAvatar: s,
      repliedMessage: i
    } = e, {
      popouts: d,
      setPopout: r
    } = (0, _.default)(t.id, k.DEFAULT_POPOUTS), {
      usernameProfile: o,
      avatarProfile: c
    } = d, f = (0, E.useContextMenuUser)(t.author.id, a.id), h = (0, E.useClickMessageAuthorUsername)(t, a, o, r), I = (0, E.useClickMessageAuthorAvatar)(c, r), x = n.useCallback(() => r({
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
      showTimestampOnHover: t.type !== y.MessageTypes.REPLY,
      renderPopout: g.default,
      showAvatarPopout: c,
      showUsernamePopout: o,
      onClickAvatar: I,
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
      feedItemId: g,
      className: E,
      animateAvatar: _,
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
    } = (0, I.default)(m, {
      hideSimpleEmbedContent: !0,
      allowList: Y || Z,
      allowHeading: Y || Z,
      allowLinks: !0,
      previewLinkTarget: !0
    }), q = m.type === y.MessageTypes.REPLY ? m.messageReference : void 0, Q = (0, d.useStateFromStores)([N.default], () => N.default.getMessageByReference(q)), $ = (0, d.useStateFromStores)([A.default], () => m.hasFlag(y.MessageFlags.HAS_THREAD) && A.default.getChannel(F.default.castMessageIdAsChannelId(m.id))), ee = (0, h.getMessageAriaLabelledBy)(m, k, {
      hasTimestamp: m.id === k
    }), et = (0, h.getMessageAriaDescribedBy)(m), ea = null != q ? (0, l.jsx)(r.Clickable, {
      onClick: e => {
        null != Q.message && (e.stopPropagation(), (0, L.trackFeedItemInteracted)({
          feed_item_type: (0, b.getFeedItemTypeFromId)(g),
          feed_item_id: g,
          load_id: R.default.getLoadId(s),
          action_type: O.FeedItemInteractionType.REFERENCED_MESSAGE_CLICKED,
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
      className: i()(E, {
        [P.mentioned]: m.mentioned && !(0, f.default)(m)
      }),
      onClick: en,
      childrenRepliedMessage: ea,
      childrenExecutedCommand: (0, v.default)(m, u, !1),
      childrenHeader: el || w ? null : (0, l.jsx)(B, {
        channel: u,
        message: m,
        animateAvatar: _,
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
      hasThread: null != $ && m.hasFlag(y.MessageFlags.HAS_THREAD),
      hasReply: m.type === y.MessageTypes.REPLY,
      isSystemMessage: el,
      "aria-labelledby": ee,
      "aria-describedby": et,
      ...W
    })
  });
t.default = n.memo(function(e) {
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
    contentClassName: i()({
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