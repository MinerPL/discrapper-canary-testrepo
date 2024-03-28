"use strict";
a.r(t), a.d(t, {
  DEFAULT_INCREASED_ACTIVITY_FORUM_POST_HEIGHT: function() {
    return eA
  }
}), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("803997"),
  r = a.n(l),
  i = a("512722"),
  o = a.n(i),
  d = a("913527"),
  u = a.n(d),
  c = a("924826"),
  m = a("683860"),
  h = a("442837"),
  f = a("692547"),
  g = a("481060"),
  x = a("738619"),
  C = a("393238"),
  _ = a("963374"),
  S = a("607070"),
  T = a("118139"),
  p = a("169525"),
  E = a("566006"),
  N = a("255269"),
  M = a("901461"),
  v = a("937889"),
  A = a("739566"),
  I = a("443877"),
  j = a("60174"),
  R = a("524444"),
  O = a("920888"),
  b = a("287151"),
  F = a("942951"),
  L = a("359110"),
  P = a("6025"),
  y = a("897473"),
  D = a("665906"),
  U = a("695346"),
  w = a("433355"),
  k = a("592125"),
  H = a("496675"),
  B = a("306680"),
  G = a("699516"),
  V = a("451478"),
  W = a("18732"),
  z = a("261922"),
  K = a("301822"),
  Y = a("68588"),
  X = a("974029"),
  Z = a("394831"),
  q = a("512665"),
  Q = a("26290"),
  J = a("55935"),
  $ = a("709054"),
  ee = a("352736"),
  et = a("238349"),
  ea = a("109434"),
  es = a("456269"),
  en = a("109590"),
  el = a("368844"),
  er = a("208970"),
  ei = a("228392"),
  eo = a("860785"),
  ed = a("73315"),
  eu = a("404616"),
  ec = a("470623"),
  em = a("889753"),
  eh = a("196255"),
  ef = a("858543"),
  eg = a("265641"),
  ex = a("883728"),
  eC = a("981631"),
  e_ = a("176505"),
  eS = a("124368"),
  eT = a("768760"),
  ep = a("689938"),
  eE = a("570793"),
  eN = a("351233"),
  eM = a("931093");
let ev = 26,
  eA = 162 + ev,
  eI = async () => {
    let {
      default: e
    } = await a.e("26176").then(a.t.bind(a, "737848", 19));
    return e
  };

function ej(e) {
  let {
    shouldAnimate: t = !1
  } = e, a = (0, h.useStateFromStores)([S.default], () => S.default.useReducedMotion);
  return (0, s.jsxs)("div", {
    className: eE.startTheConversation,
    children: [(0, s.jsx)(K.default, {
      importData: eI,
      shouldAnimate: t && !a,
      className: eE.wavingHand
    }), (0, s.jsx)(g.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: ep.default.Messages.FORUM_START_THE_CONVERSATION_HEADER
    })]
  })
}

function eR(e) {
  let {
    parentChannel: t,
    channel: a,
    firstMessage: n,
    messageCount: l,
    unreadCount: r,
    facepileRef: i,
    onClick: o
  } = e, {
    isNew: d
  } = (0, es.useForumPostReadStates)(a), {
    forumPostContainsTags: u
  } = (0, ef.useTagsRowHooks)({
    channel: a,
    isNew: d
  });
  return (0, s.jsxs)("div", {
    className: eE.content,
    children: [(0, s.jsxs)("div", {
      className: eE.titleAndMessage,
      children: [u && (0, s.jsx)(ef.IncreasedActivityTagsRow, {
        channel: a,
        className: eE.tagsRow,
        tagsClassName: eE.tags
      }), u && (0, s.jsx)("hr", {
        className: eE.separator
      }), (0, s.jsx)(ew, {
        channel: a,
        firstMessage: n,
        isNew: d,
        containsTags: u
      }), (0, s.jsx)(g.HeadingLevel, {
        children: (0, s.jsx)(eL, {
          channel: a,
          onClick: o
        })
      }), null != n && (0, s.jsx)(eO, {
        firstMessage: n
      })]
    }), (0, s.jsxs)("div", {
      className: eE.engagement,
      children: [null != n && (0, s.jsx)(ey, {
        channel: a,
        firstMessage: n
      }), (0, s.jsx)(eb, {
        parentChannel: t,
        channel: a,
        messageCount: l,
        unreadCount: r,
        facepileRef: i
      })]
    })]
  })
}

function eO(e) {
  let {
    firstMessage: t
  } = e, a = (0, h.useStateFromStores)([G.default], () => null != t && G.default.isBlocked(t.author.id)), {
    content: l
  } = n.useMemo(() => (null == t ? void 0 : t.content) != null && "" !== t.content ? (0, v.default)(t, {
    formatInline: !0,
    noStyleAndInteraction: !0,
    allowHeading: !0,
    allowList: !0
  }) : {
    content: null
  }, [t]);
  return (0, s.jsx)(g.FocusBlock, {
    "aria-hidden": !0,
    className: eE.firstMessageContent,
    children: a ? ep.default.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE : null == l ? ep.default.Messages.REPLY_QUOTE_MESSAGE_DELETED : l
  })
}
t.default = n.memo(function(e) {
  let {
    className: t,
    threadId: a,
    goToThread: l,
    observePostVisibilityAnalytics: i
  } = e, d = n.useRef(null), {
    channel: u,
    isOpen: m,
    messageCount: f,
    unreadCount: x,
    firstMessage: _,
    firstMessageLoaded: S,
    firstMedia: T,
    firstMediaIsEmbed: p
  } = function(e) {
    let {
      threadId: t
    } = e, a = (0, h.useStateFromStores)([k.default], () => k.default.getChannel(t));
    o()(null != a, "the thread should not be null here, a store must have missed an update");
    let s = (0, h.useStateFromStores)([w.default], () => w.default.getCurrentSidebarChannelId(a.parent_id) === a.id),
      {
        loaded: n,
        firstMessage: l
      } = (0, en.useFirstForumPostMessage)(a),
      {
        content: r,
        firstMedia: i,
        firstMediaIsEmbed: d
      } = (0, es.useForumPostFirstMessageMarkup)({
        firstMessage: l
      }),
      {
        messageCount: u,
        unreadCount: c
      } = (0, es.useMessageCount)(a);
    return {
      channel: a,
      isOpen: s,
      messageCount: u,
      unreadCount: c,
      firstMessage: l,
      firstMessageLoaded: n,
      firstMedia: i,
      firstMediaIsEmbed: d,
      content: r
    }
  }({
    threadId: a
  }), E = (0, h.useStateFromStores)([k.default], () => k.default.getChannel(u.parent_id)), {
    ref: N,
    height: M
  } = (0, C.default)(), v = (0, ec.useForumPostComposerStore)(e => e.setCardHeight), [A, I] = n.useState(162);
  n.useEffect(() => {
    null != M && (v(a, M + ev), I(M))
  }, [N, M, v, a, I, S]), n.useEffect(() => {
    null == i || i(d.current, a)
  }, [i, a, S]);
  let j = n.useRef(null),
    {
      handleLeftClick: R,
      handleRightClick: O
    } = (0, ex.default)({
      facepileRef: j,
      goToThread: l,
      channel: u
    }),
    {
      role: b,
      onFocus: F,
      ...L
    } = (0, c.useListItem)(a),
    {
      handleFocus: P,
      handleBlur: y
    } = (0, eg.default)(F);
  return (0, s.jsxs)("div", {
    ref: d,
    "data-item-id": a,
    onClick: R,
    onContextMenu: O,
    className: r()(eE.container, t, {
      [eE.isOpen]: m
    }),
    children: [(0, s.jsx)(g.Clickable, {
      onClick: R,
      focusProps: {
        ringTarget: d
      },
      onContextMenu: O,
      "aria-label": ep.default.Messages.FORUM_POST_ARIA_LABEL.format({
        title: u.name,
        count: f
      }),
      className: eE.focusTarget,
      onFocus: P,
      onBlur: y,
      ...L
    }), (0, s.jsxs)("div", {
      className: eE.body,
      children: [(0, s.jsx)("div", {
        ref: N,
        className: eE.contentContainer,
        children: S ? (0, s.jsx)(eR, {
          parentChannel: E,
          channel: u,
          firstMessage: _,
          messageCount: f,
          unreadCount: x,
          facepileRef: j,
          onClick: R
        }) : (0, s.jsx)(em.ForumPostContentPlaceholder, {})
      }), S ? (null == _ ? void 0 : _.blocked) || null == T ? null : (0, s.jsx)(ek, {
        channel: u,
        firstMedia: T,
        firstMessage: _,
        isEmbed: p,
        contentHeight: A
      }) : (0, s.jsx)(em.ForumPostMediaPreviewPlaceholder, {})]
    })]
  })
});

function eb(e) {
  let {
    parentChannel: t,
    channel: a,
    messageCount: n,
    unreadCount: l,
    facepileRef: i
  } = e, o = (0, es.useTypingUserIds)(a), {
    mostRecentMessage: d
  } = (0, en.useMostRecentForumMessage)(t, a), u = (0, h.useStateFromStores)([H.default], () => H.default.can(eC.Permissions.SEND_MESSAGES_IN_THREADS, a)), {
    hasUnreads: c
  } = (0, es.useForumPostReadStates)(a), m = (0, h.useStateFromStores)([et.default], () => et.default.getFirstNoReplyThreadId()), f = (0, D.useIsNonModInLockedThread)(a), x = (0, A.useNullableMessageAuthor)(d);
  if (n > 0) {
    var C, _;
    return (0, s.jsxs)(g.Clickable, {
      onClick: e => {
        null != d && null != a.parent_id && (e.stopPropagation(), (0, ei.trackForumPostClicked)({
          guildId: a.guild_id,
          channelId: a.parent_id,
          postId: a.id,
          location: {
            page: eC.AnalyticsPages.GUILD_CHANNEL,
            section: eC.AnalyticsSections.FORUM_CHANNEL_POST
          }
        }), e.shiftKey ? (0, L.transitionToThreadMessage)(a, d.id, eS.OpenThreadAnalyticsLocations.BROWSER) : P.default.openThreadAsSidebar({
          guildId: a.guild_id,
          channelId: a.id,
          baseChannelId: a.parent_id,
          flash: !0,
          details: {
            type: y.SidebarOpenDetailsType.THREAD,
            initialMessageId: d.id
          }
        }))
      },
      children: [(0, s.jsxs)(g.HiddenVisually, {
        children: ["Latest message:", null != x ? null !== (C = x.nick) && void 0 !== C ? C : ep.default.Messages.UNKNOWN_USER : null, " ", null == (_ = null == d ? void 0 : d.content) ? "" : _.length > 120 ? "".concat(_.substring(0, 120), "...") : _]
      }), (0, s.jsxs)(g.FocusBlock, {
        className: eE.replies,
        children: [(0, s.jsx)(eD, {
          messageCount: n,
          unreadCount: l,
          iconSize: 16
        }), o.length > 0 ? (0, s.jsx)(eF, {
          channel: a,
          typingUserIds: o,
          facepileRef: i
        }) : (0, s.jsx)(eP, {
          channel: a,
          mostRecentMessage: d,
          hasUnreads: c
        })]
      })]
    })
  }
  return f ? (0, s.jsx)("div", {
    className: eE.replies,
    children: (0, s.jsx)(g.Text, {
      variant: "text-sm/semibold",
      color: "text-muted",
      className: r()(eE.mostRecentMessageContent, eE.nonUserMessage, eE.lockedMessage),
      children: ep.default.Messages.THREAD_HEADER_NOTICE_ACTIVE_LOCKED
    })
  }) : u && 0 === n ? (0, s.jsx)(g.FocusBlock, {
    "aria-hidden": !0,
    className: eE.replies,
    children: o.length > 0 ? (0, s.jsx)(eF, {
      channel: a,
      typingUserIds: o,
      facepileRef: i
    }) : (0, s.jsx)(ej, {
      shouldAnimate: m === a.id
    })
  }) : null
}

function eF(e) {
  let {
    channel: t,
    typingUserIds: a,
    facepileRef: n
  } = e;
  return (0, s.jsxs)("div", {
    className: eE.typing,
    children: [(0, s.jsx)(eu.Facepile, {
      channel: t,
      userIds: a,
      facepileRef: n
    }), (0, s.jsx)("div", {
      className: eE.dots,
      children: (0, s.jsx)(g.Dots, {
        themed: !0,
        dotRadius: 2
      })
    }), (0, s.jsx)(x.default, {
      channel: t,
      className: eE.typingUsers,
      renderDots: !1
    })]
  })
}

function eL(e) {
  let {
    channel: t,
    onClick: a
  } = e, {
    hasUnreads: l
  } = (0, es.useForumPostReadStates)(t), r = function(e) {
    let t = (0, h.useStateFromStores)([er.default], () => er.default.getHasSearchResults(e.parent_id)),
      a = (0, h.useStateFromStores)([er.default], () => er.default.getSearchQuery(e.parent_id)),
      s = n.useMemo(() => (0, _.createASTHighlighter)(t && null != a ? a : ""), [t, a]);
    return n.useMemo(() => (0, v.default)({
      content: e.name,
      embeds: []
    }, {
      postProcessor: s
    }).content, [e.name, s])
  }(t);
  return (0, s.jsx)(g.Heading, {
    variant: "heading-lg/semibold",
    color: l ? "header-primary" : "text-muted",
    className: eE.title,
    children: (0, s.jsx)(g.Clickable, {
      onClick: a,
      children: r
    })
  })
}
let eP = n.memo(function(e) {
  var t;
  let {
    channel: a,
    mostRecentMessage: l,
    hasUnreads: i
  } = e, o = (0, A.useNullableMessageAuthor)(l), d = (0, h.useStateFromStores)([G.default], () => null != l && G.default.isBlocked(l.author.id)), u = (0, h.useStateFromStores)([H.default], () => H.default.can(eC.Permissions.MANAGE_MESSAGES, a)), c = U.RenderSpoilers.useSetting(), m = (0, eo.useIsRecentMessageDeleted)(a), {
    content: f
  } = n.useMemo(() => (null == l ? void 0 : l.content) != null && "" !== l.content ? (0, v.default)(l, {
    formatInline: !0,
    noStyleAndInteraction: !0
  }) : {
    content: null
  }, [l]), x = null != l && (0, M.default)(l), C = null;
  if (d) C = (0, s.jsx)(g.Text, {
    className: eE.nonUserMessage,
    variant: "text-sm/medium",
    color: "text-muted",
    children: ep.default.Messages.FORUM_POST_BLOCKED_MOST_RECENT_MESSAGE
  });
  else {
    let {
      contentPlaceholder: e,
      renderedContent: t
    } = null == l ? {
      contentPlaceholder: null,
      renderedContent: null
    } : x ? {
      contentPlaceholder: null,
      renderedContent: ee.default.stringify(l, a)
    } : (0, q.renderSingleLineMessage)(l, f, d, r()(eE.mostRecentMessageContent, eM.inlineFormat, eM.__invalid_smallFontSize), {
      iconClass: eE.__invalid_messageContentIcon,
      iconSize: eT.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
    });
    C = null != t ? (0, s.jsx)(g.Text, {
      variant: "text-sm/semibold",
      color: i ? "header-secondary" : "text-muted",
      className: eE.mostRecentMessageContent,
      children: t
    }) : null != e ? (0, s.jsx)(g.Text, {
      variant: "text-sm/semibold",
      color: i ? "header-secondary" : "text-muted",
      className: eE.mostRecentMessageContent,
      children: e
    }) : m ? (0, s.jsx)(g.Text, {
      variant: "text-sm/semibold",
      color: i ? "header-secondary" : "text-muted",
      className: r()(eE.mostRecentMessageContent, eE.nonUserMessage),
      children: ep.default.Messages.FORUM_CHANNEL_MOST_RECENT_MESSAGE_DELETED
    }) : null
  }
  let _ = null != o ? null !== (t = o.nick) && void 0 !== t ? t : ep.default.Messages.UNKNOWN_USER : null,
    S = (0, F.useUsernameHook)({
      user: null == l ? void 0 : l.author,
      channelId: a.id,
      guildId: a.guild_id,
      messageId: null == l ? void 0 : l.id,
      stopPropagation: !0
    })(null != o ? o : void 0)((0, s.jsxs)(s.Fragment, {
      children: [null != _ ? _ : "", null != l ? ":" : ""]
    }), a.id);
  return (0, s.jsx)(Y.ObscuredDisplayContext.Provider, {
    value: (0, N.default)(c, u),
    children: (0, s.jsxs)("div", {
      className: eE.mostRecentMessage,
      children: [null == _ || x ? null : (0, s.jsx)("div", {
        className: eE.mostRecentMessageAuthor,
        children: (0, s.jsx)(g.Text, {
          tag: "span",
          variant: "text-sm/semibold",
          children: S
        })
      }), (0, s.jsx)(g.FocusBlock, {
        children: C
      })]
    })
  })
});

function ey(e) {
  let {
    channel: t,
    firstMessage: a
  } = e, l = (0, h.useStateFromStores)([k.default], () => k.default.getChannel(t.parent_id)), i = (0, es.useDefaultReactionEmoji)(l), {
    disableReactionUpdates: o,
    disableReactionCreates: d,
    isLurking: u,
    isPendingMember: c
  } = (0, I.default)(t), m = !((0, O.findReactionIndex)(a.reactions, i) >= 0) && !d, {
    ref: f,
    width: g
  } = (0, C.default)(), [x, _] = n.useState(10), [S, T] = n.useState(!0);
  return n.useEffect(() => {
    if (null != g) _(Math.floor((g - 78) / 66)), T(!1)
  }, [g, a.reactions, i]), (0, s.jsxs)("div", {
    className: r()(eE.reactionRow, {
      [eE.loading]: S
    }),
    ref: f,
    children: [m && null != i ? (0, s.jsx)(b.Reaction, {
      className: eE.defaultReaction,
      message: a,
      readOnly: !1,
      useChatFontScaling: !0,
      isLurking: u,
      isPendingMember: c,
      emoji: i,
      type: E.ReactionTypes.NORMAL,
      hideCount: !0,
      count: 0,
      me: !1,
      burst_count: 0,
      me_burst: !1
    }) : null, (0, s.jsx)(O.default, {
      message: a,
      channel: t,
      disableReactionCreates: d,
      disableReactionUpdates: o,
      useChatFontScaling: !0,
      className: eE.messageReactions,
      reactionClassName: eE.reaction,
      hoistReaction: i,
      forceHideReactionCreates: !0,
      maxReactions: x
    }), (0, s.jsx)("div", {
      className: eE.addReactionContainer,
      children: !d && (0, s.jsx)(j.ButtonAddReaction, {
        type: E.ReactionTypes.NORMAL,
        message: a,
        channel: t,
        useChatFontScaling: !0,
        className: eE.addReactButton,
        isForumToolbar: !1
      })
    })]
  })
}

function eD(e) {
  let {
    messageCount: t,
    unreadCount: a,
    iconSize: n
  } = e;
  return (0, s.jsxs)("div", {
    className: eE.messageCountBox,
    children: [(0, s.jsx)("span", {
      className: eE.messageCountIcon,
      children: (0, s.jsx)(X.default, {
        width: n,
        height: n
      })
    }), "number" == typeof t ? (0, s.jsx)(W.default, {
      value: t,
      className: eE.messageCountText
    }) : (0, s.jsx)("div", {
      className: eE.messageCountText,
      children: t
    }), null == a ? null : (0, s.jsx)(g.Text, {
      className: eE.unreadMessagesCount,
      variant: "text-sm/semibold",
      color: "text-brand",
      children: ep.default.Messages.FORUM_POST_MESSAGE_COUNT_SHORT_PARENTHETICAL.format({
        count: a
      })
    })]
  })
}

function eU(e) {
  var t;
  let {
    channel: a
  } = e, {
    sortOrder: n
  } = (0, ea.useForumChannelStore)(a.parent_id), l = (0, es.useLastActiveTimestamp)(a, n), r = (0, h.useStateFromStores)([B.default], () => B.default.lastMessageId(a.id)), i = null != r ? $.default.extractTimestamp(r) : null, o = null === (t = a.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp, d = null == l ? null : n === m.ThreadSortOrder.CREATION_DATE ? ep.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
    timestamp: l
  }) : l, c = n === m.ThreadSortOrder.CREATION_DATE && null != o ? ep.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
    timestamp: (0, J.dateFormat)(u()(o), "LLLL")
  }) : null != i ? (0, J.dateFormat)(u()(i), "LLLL") : null;
  return null == c || null == d ? null : (0, s.jsx)(g.Tooltip, {
    text: c,
    tooltipClassName: eE.timestampTooltip,
    "aria-label": ep.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP_LABEL,
    children: e => (0, s.jsx)(g.Text, {
      variant: "text-xs/medium",
      color: "header-secondary",
      ...e,
      children: d
    })
  })
}

function ew(e) {
  let {
    channel: t,
    firstMessage: a,
    isNew: n,
    containsTags: l
  } = e, r = t.hasFlag(e_.ChannelFlags.PINNED), i = (0, h.useStateFromStores)([G.default], () => null != a && G.default.isBlocked(a.author.id));
  return (0, s.jsxs)("div", {
    className: eE.header,
    children: [!l && r && (0, s.jsx)("div", {
      className: eE.pinIcon,
      children: (0, s.jsx)(g.Tooltip, {
        text: ep.default.Messages.PINNED_POST,
        children: e => (0, s.jsx)(Z.default, {
          ...e,
          width: ef.PIN_ICON_SIZE,
          height: ef.PIN_ICON_SIZE,
          color: "white"
        })
      })
    }), !i && (0, s.jsx)(eh.default, {
      channel: t,
      message: a
    }), (0, s.jsx)(eU, {
      channel: t
    }), n && (0, s.jsx)(Q.TextBadge, {
      className: eE.newBadge,
      color: f.default.unsafe_rawColors.BRAND_260.css,
      text: ep.default.Messages.NEW
    })]
  })
}

function ek(e) {
  let {
    channel: t,
    firstMedia: a,
    firstMessage: n,
    isEmbed: l,
    contentHeight: i
  } = e, o = (0, h.useStateFromStores)([V.default], () => V.default.isFocused()), d = (0, T.isAnimatedImageUrl)(a.src), u = U.GifAutoPlay.useSetting(), {
    src: c,
    width: m,
    height: f,
    alt: x
  } = a, [C, _] = (0, p.useShouldObscure)({
    media: a,
    channel: t
  }), S = (0, p.getObscuredAlt)(_);
  return (0, s.jsx)(g.FocusBlock, {
    enabled: !0,
    children: (0, s.jsxs)("div", {
      className: r()(eE.bodyMedia, {
        [eN.embedFull]: l
      }),
      style: {
        height: i,
        borderColor: (0, el.getEmbedColor)(n, C)
      },
      onClick: e => e.stopPropagation(),
      children: [c.startsWith("data:") ? (0, s.jsx)(z.default, {
        src: c,
        width: m,
        height: f,
        minWidth: 143,
        minHeight: i,
        maxHeight: i,
        alt: null != x && C ? S : x,
        imageClassName: r()({
          [eE.obscured]: C
        })
      }) : (0, R.renderImageComponent)({
        src: c,
        width: m,
        height: f,
        minWidth: 143,
        minHeight: i,
        maxHeight: i,
        alt: null != x && C ? S : x,
        autoPlay: u,
        animated: d && !C && o,
        imageContainerClassName: r()({
          [eE.obscured]: C
        })
      }), C && (0, s.jsx)(ed.default, {
        iconClassname: eE.obscuredTag,
        obscureReason: _
      })]
    })
  })
}