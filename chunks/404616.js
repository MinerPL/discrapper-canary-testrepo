"use strict";
i.r(t), i.d(t, {
  DefaultReaction: function() {
    return ed
  },
  Facepile: function() {
    return ef
  },
  MAX_THUMBNAIL_HEIGHT: function() {
    return en
  },
  MAX_THUMBNAIL_WIDTH: function() {
    return ea
  },
  MessageCount: function() {
    return eu
  },
  MostUsedReaction: function() {
    return ec
  },
  useHighlightedChannelName: function() {
    return el
  }
}), i("47120");
var n = i("735250"),
  a = i("470079"),
  s = i("803997"),
  l = i.n(s),
  o = i("512722"),
  r = i.n(o),
  u = i("913527"),
  d = i.n(u),
  c = i("924826"),
  h = i("442837"),
  f = i("692547"),
  m = i("481060"),
  p = i("738619"),
  g = i("393238"),
  T = i("963374"),
  v = i("118139"),
  S = i("169525"),
  E = i("566006"),
  R = i("255269"),
  I = i("937889"),
  N = i("443877"),
  C = i("524444"),
  _ = i("287151"),
  x = i("695346"),
  O = i("433355"),
  j = i("592125"),
  A = i("496675"),
  M = i("699516"),
  b = i("451478"),
  y = i("18732"),
  L = i("332475"),
  P = i("68588"),
  U = i("974029"),
  w = i("512665"),
  F = i("26290"),
  D = i("602623"),
  B = i("55935"),
  k = i("109434"),
  H = i("456269"),
  V = i("109590"),
  G = i("660189"),
  z = i("208970"),
  W = i("73315"),
  K = i("470623"),
  J = i("196255"),
  Y = i("858543"),
  Z = i("265641"),
  X = i("627896"),
  q = i("883728"),
  Q = i("981631"),
  $ = i("768760"),
  ee = i("689938"),
  et = i("426863"),
  ei = i("931093");
let en = 72,
  ea = 72;
t.default = a.memo(function(e) {
  let {
    threadId: t,
    goToThread: i,
    observePostVisibilityAnalytics: s,
    overrideMedia: o,
    className: u,
    containerWidth: d
  } = e, {
    channel: f,
    isOpen: p,
    messageCount: T,
    firstMessage: v,
    content: S,
    media: E
  } = function(e) {
    let {
      threadId: t,
      overrideMedia: i
    } = e, n = (0, h.useStateFromStores)([j.default], () => j.default.getChannel(t));
    r()(null != n, "the thread should not be null here, a store must have missed an update");
    let a = (0, h.useStateFromStores)([O.default], () => O.default.getCurrentSidebarChannelId(n.parent_id) === n.id),
      {
        firstMessage: s
      } = (0, V.useFirstForumPostMessage)(n),
      {
        content: l,
        firstMedia: o
      } = (0, H.useForumPostFirstMessageMarkup)({
        firstMessage: s
      }),
      {
        messageCountText: u
      } = (0, H.useMessageCount)(n);
    return {
      channel: n,
      isOpen: a,
      messageCount: u,
      firstMessage: s,
      content: l,
      media: null != i ? i : o
    }
  }({
    threadId: t,
    overrideMedia: o
  }), {
    ref: R,
    height: I
  } = (0, g.default)(), N = (0, K.useForumPostComposerStore)(e => e.setCardHeight);
  a.useEffect(() => {
    null != I && N(t, I)
  }, [I, N, t]), a.useEffect(() => {
    null == s || s(R.current, t)
  }, [R, s, t]);
  let C = a.useRef(null),
    {
      handleLeftClick: _,
      handleRightClick: x
    } = (0, q.default)({
      facepileRef: C,
      goToThread: i,
      channel: f
    }),
    {
      role: A,
      onFocus: M,
      ...b
    } = (0, c.useListItem)(t),
    {
      isFocused: y,
      handleFocus: L,
      handleBlur: P
    } = (0, Z.default)(M);
  return (0, n.jsxs)("div", {
    ref: R,
    "data-item-id": t,
    onClick: _,
    onContextMenu: x,
    className: l()(et.container, u, {
      [et.isOpen]: p
    }),
    children: [(0, n.jsx)(m.Clickable, {
      onClick: _,
      focusProps: {
        ringTarget: R
      },
      onContextMenu: x,
      "aria-label": ee.default.Messages.FORUM_POST_ARIA_LABEL.format({
        title: f.name,
        count: T
      }),
      className: et.focusTarget,
      onFocus: L,
      onBlur: P,
      ...b
    }), (0, n.jsxs)("div", {
      className: et.left,
      children: [(0, n.jsx)(m.HeadingLevel, {
        children: (0, n.jsx)(es, {
          channel: f,
          firstMessage: v,
          content: S,
          hasMediaAttachment: null != E,
          containerWidth: d
        })
      }), (0, n.jsx)(m.FocusBlock, {
        enabled: !y,
        children: (0, n.jsx)(er, {
          channel: f,
          firstMessage: v,
          facepileRef: C
        })
      })]
    }), (null == v ? void 0 : v.blocked) || null == E ? null : (0, n.jsx)(em, {
      channel: f,
      firstMedia: E
    })]
  })
});

function es(e) {
  let {
    channel: t,
    firstMessage: i,
    content: a,
    hasMediaAttachment: s,
    containerWidth: o
  } = e, {
    isNew: r,
    hasUnreads: u
  } = (0, H.useForumPostReadStates)(t), d = el(t), {
    postTitleRef: c,
    isNewBadgeOverflow: h
  } = (0, X.useNewBadgeOverflowAware)(r, 24, o);
  return (0, n.jsxs)("div", {
    className: et.body,
    children: [(0, n.jsx)(Y.default, {
      channel: t
    }), (0, n.jsx)("div", {
      className: l()(et.header, {
        [et.withNewBadgeOverflow]: h
      }),
      children: (0, n.jsxs)("div", {
        className: et.headerText,
        children: [(0, n.jsx)(m.Heading, {
          variant: "heading-lg/semibold",
          color: u ? "header-primary" : "text-muted",
          lineClamp: 2,
          className: et.postTitleText,
          children: (0, n.jsxs)("span", {
            ref: c,
            children: [d, r && (0, n.jsx)("span", {
              className: et.newBadgeWrapper,
              children: (0, n.jsx)(F.TextBadge, {
                className: et.newBadge,
                color: f.default.unsafe_rawColors.BRAND_260.css,
                text: ee.default.Messages.NEW
              })
            })]
          })
        }), r && h && (0, n.jsx)(F.TextBadge, {
          className: et.newBadge,
          color: f.default.unsafe_rawColors.BRAND_260.css,
          text: ee.default.Messages.NEW
        })]
      })
    }), (0, n.jsx)("div", {
      className: et.message,
      children: (0, n.jsx)(eo, {
        channel: t,
        message: i,
        content: a,
        hasMediaAttachment: s,
        hasUnreads: u
      })
    })]
  })
}

function el(e) {
  let t = (0, h.useStateFromStores)([z.default], () => z.default.getHasSearchResults(e.parent_id)),
    i = (0, h.useStateFromStores)([z.default], () => z.default.getSearchQuery(e.parent_id)),
    n = a.useMemo(() => (0, T.createASTHighlighter)(t && null != i ? i : ""), [t, i]);
  return a.useMemo(() => (0, I.default)({
    content: e.name,
    embeds: []
  }, {
    postProcessor: n
  }).content, [e.name, n])
}
let eo = a.memo(function(e) {
  let {
    message: t,
    channel: i,
    content: a,
    hasMediaAttachment: s,
    hasUnreads: o
  } = e, r = (0, h.useStateFromStores)([M.default], () => null != t && M.default.isBlocked(t.author.id)), u = (0, h.useStateFromStores)([G.default], () => G.default.isLoading(i.id)), d = (0, h.useStateFromStores)([A.default], () => A.default.can(Q.Permissions.MANAGE_MESSAGES, i)), c = x.RenderSpoilers.useSetting(), f = null;
  if (r) f = (0, n.jsx)(m.Text, {
    className: et.blockedMessage,
    variant: "text-sm/medium",
    color: "text-muted",
    children: ee.default.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE
  });
  else {
    let {
      contentPlaceholder: e,
      renderedContent: i
    } = null == t ? {
      contentPlaceholder: null,
      renderedContent: null
    } : (0, w.renderSingleLineMessage)(t, a, r, l()(et.messageContent, ei.inlineFormat, ei.__invalid_smallFontSize), {
      iconClass: et.messageContentIcon,
      iconSize: $.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
    });
    f = null != i ? (0, n.jsx)(m.Text, {
      variant: "text-sm/semibold",
      color: o ? "header-secondary" : "text-muted",
      children: i
    }) : s ? null : (0, n.jsx)(m.Text, {
      tag: "span",
      variant: "text-sm/medium",
      color: o ? "header-secondary" : "text-muted",
      className: et.messageContent,
      children: null == t ? u ? null : ee.default.Messages.REPLY_QUOTE_MESSAGE_DELETED : e
    })
  }
  return (0, n.jsxs)(P.ObscuredDisplayContext.Provider, {
    value: (0, R.default)(c, d),
    children: [!r && (0, n.jsx)(J.default, {
      channel: i,
      message: t,
      renderColon: null != f,
      hasUnreads: o
    }), (0, n.jsx)(m.FocusBlock, {
      className: et.messageFocusBlock,
      children: f
    })]
  })
});

function er(e) {
  let {
    channel: t,
    facepileRef: i,
    firstMessage: a
  } = e, s = (0, H.useTypingUserIds)(t), l = (null == a ? void 0 : a.reactions) != null && a.reactions.length > 0;
  return (0, n.jsxs)("div", {
    className: et.footer,
    children: [l || null == a ? null : (0, n.jsx)(ed, {
      firstMessage: a,
      channel: t
    }), null == a ? null : (0, n.jsx)(ec, {
      firstMessage: a,
      channel: t
    }), (0, n.jsx)(eu, {
      channel: t,
      iconSize: 14
    }), (0, n.jsx)("span", {
      className: et.bullet,
      children: "•"
    }), s.length > 0 ? (0, n.jsxs)("div", {
      className: et.typing,
      children: [(0, n.jsx)(ef, {
        channel: t,
        userIds: s,
        facepileRef: i
      }), (0, n.jsx)("div", {
        className: et.dots,
        children: (0, n.jsx)(m.Dots, {
          themed: !0,
          dotRadius: 2
        })
      }), (0, n.jsx)(p.default, {
        channel: t,
        className: et.typingUsers,
        renderDots: !1
      })]
    }) : (0, n.jsx)(eh, {
      channel: t
    })]
  })
}

function eu(e) {
  let {
    channel: t,
    iconSize: i,
    showReadState: a = !1
  } = e, {
    messageCountText: s,
    unreadCount: o
  } = (0, H.useMessageCount)(t);
  return (0, n.jsxs)("div", {
    className: l()(et.messageCountBox, {
      [et.hasRead]: a && null == o
    }),
    children: [(0, n.jsx)("span", {
      className: et.messageCountIcon,
      children: (0, n.jsx)(U.default, {
        width: i,
        height: i
      })
    }), "number" == typeof s ? (0, n.jsx)(y.default, {
      value: s,
      digitWidth: 9,
      className: et.messageCountText
    }) : (0, n.jsx)("div", {
      className: et.messageCountText,
      children: s
    }), null == o ? null : (0, n.jsxs)(m.Text, {
      className: et.newMessageCount,
      variant: "text-sm/semibold",
      color: "text-brand",
      children: ["(", ee.default.Messages.FORUM_POST_MESSAGE_COUNT_SHORT.format({
        count: o
      }), ")"]
    })]
  })
}

function ed(e) {
  let {
    firstMessage: t,
    channel: i
  } = e, a = (0, h.useStateFromStores)([j.default], () => j.default.getChannel(i.parent_id)), s = (0, H.useDefaultReactionEmoji)(a), {
    disableReactionCreates: l,
    isLurking: o,
    isPendingMember: r
  } = (0, N.default)(i);
  return null == s || l ? null : (0, n.jsx)(_.Reaction, {
    className: et.updateReactionButton,
    message: t,
    readOnly: i.isArchivedLockedThread(),
    useChatFontScaling: !1,
    isLurking: o,
    isPendingMember: r,
    emoji: s,
    hideCount: !0,
    count: 0,
    burst_count: 0,
    me: !1,
    me_burst: !1,
    type: E.ReactionTypes.NORMAL,
    emojiSize: "reaction"
  })
}

function ec(e) {
  var t;
  let {
    firstMessage: i,
    channel: a
  } = e, s = (0, H.useMostUsedReaction)(i), {
    disableReactionUpdates: l,
    isLurking: o,
    isPendingMember: r
  } = (0, N.default)(a);
  return null == s ? null : (0, n.jsx)(_.Reaction, {
    className: et.updateReactionButton,
    message: i,
    readOnly: l || a.isArchivedLockedThread(),
    isLurking: o,
    isPendingMember: r,
    useChatFontScaling: !1,
    type: s.burst_count >= s.count ? E.ReactionTypes.BURST : E.ReactionTypes.NORMAL,
    emojiSize: "reaction",
    ...s
  }, "".concat(null !== (t = s.emoji.id) && void 0 !== t ? t : 0, ":").concat(s.emoji.name))
}

function eh(e) {
  var t;
  let {
    channel: i
  } = e, {
    sortOrder: a
  } = (0, k.useForumChannelStore)(i.parent_id), s = (0, H.useLastActiveTimestamp)(i, a), l = null === (t = i.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp, o = null == l ? null : ee.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
    timestamp: (0, B.dateFormat)(d()(l), "LLLL")
  });
  return (0, n.jsx)(m.Tooltip, {
    text: o,
    tooltipClassName: et.timestampTooltip,
    children: e => (0, n.jsx)(m.Text, {
      className: et.__invalid_activityText,
      variant: "text-sm/normal",
      color: "header-secondary",
      ...e,
      children: s
    })
  })
}

function ef(e) {
  let {
    channel: t,
    userIds: i,
    facepileRef: a
  } = e, s = (0, H.useFacepileUsers)(t, i);
  return (0, n.jsx)("div", {
    ref: a,
    children: (0, n.jsx)(D.default, {
      className: et.__invalid_facepile,
      showDefaultAvatarsForNullUsers: !0,
      guildId: t.guild_id,
      users: s,
      max: 5,
      size: 16,
      hideMoreUsers: !0,
      showUserPopout: !0
    })
  })
}

function em(e) {
  let t, i, {
      channel: a,
      firstMedia: s
    } = e,
    o = (0, h.useStateFromStores)([b.default], () => b.default.isFocused()),
    r = (0, v.isAnimatedImageUrl)(s.src),
    u = x.GifAutoPlay.useSetting(),
    [d, c] = (0, S.useShouldObscure)({
      media: s,
      channel: a
    }),
    f = (0, S.getObscuredAlt)(c),
    {
      src: p,
      width: g,
      height: T,
      alt: E
    } = s;
  return T > g ? i = ea : t = en, (0, n.jsx)(m.FocusBlock, {
    enabled: !0,
    children: (0, n.jsxs)("div", {
      className: et.bodyMedia,
      onClick: e => e.stopPropagation(),
      children: [p.startsWith("data:") ? (0, n.jsx)(L.default, {
        src: p,
        maxHeight: t,
        maxWidth: i,
        width: g,
        height: T,
        alt: null != E && d ? f : E,
        className: et.thumbnailContainer,
        imageClassName: l()({
          [et.obscured]: d,
          [et.thumbnailOverride]: !0
        })
      }) : (0, C.renderImageComponent)({
        src: p,
        maxHeight: t,
        maxWidth: i,
        width: g,
        height: T,
        alt: null != E && d ? f : E,
        autoPlay: u,
        animated: r && !d && o,
        containerClassName: et.thumbnailContainer,
        imageClassName: l()({
          [et.obscured]: d
        })
      }), d && (0, n.jsx)(W.default, {
        iconClassname: et.obscuredTag,
        obscureReason: c
      })]
    })
  })
}