"use strict";
a.r(t), a.d(t, {
  DEFAULT_INCREASED_ACTIVITY_FORUM_POST_HEIGHT: function() {
    return eA
  },
  default: function() {
    return eR
  }
}), a("222007");
var s = a("37983"),
  n = a("884691"),
  l = a("414456"),
  r = a.n(l),
  i = a("627445"),
  o = a.n(i),
  u = a("866227"),
  d = a.n(u),
  c = a("974667"),
  m = a("335710"),
  h = a("446674"),
  f = a("669491"),
  g = a("77078"),
  x = a("125667"),
  C = a("731898"),
  S = a("419135"),
  _ = a("206230"),
  T = a("651693"),
  p = a("605160"),
  E = a("875978"),
  N = a("70845"),
  M = a("913491"),
  v = a("95045"),
  A = a("574073"),
  I = a("359132"),
  j = a("836943"),
  R = a("933629"),
  O = a("592707"),
  F = a("350134"),
  b = a("232259"),
  L = a("144491"),
  P = a("208021"),
  y = a("582713"),
  D = a("300322"),
  U = a("845579"),
  w = a("982108"),
  k = a("42203"),
  H = a("957255"),
  B = a("660478"),
  G = a("27618"),
  V = a("471671"),
  z = a("738107"),
  W = a("952368"),
  K = a("491605"),
  Y = a("505684"),
  X = a("109264"),
  Z = a("566998"),
  q = a("93427"),
  Q = a("956089"),
  J = a("888400"),
  $ = a("299039"),
  ee = a("700097"),
  et = a("670902"),
  ea = a("339792"),
  es = a("680986"),
  en = a("612278"),
  el = a("791234"),
  er = a("994810"),
  ei = a("867965"),
  eo = a("43836"),
  eu = a("512630"),
  ed = a("152637"),
  ec = a("578198"),
  em = a("968462"),
  eh = a("136460"),
  ef = a("601016"),
  eg = a("810758"),
  ex = a("390083"),
  eC = a("49111"),
  eS = a("724210"),
  e_ = a("648564"),
  eT = a("719347"),
  ep = a("782340"),
  eE = a("38050"),
  eN = a("649809"),
  eM = a("919163");
let ev = 26,
  eA = 162 + ev,
  eI = async () => {
    let {
      default: e
    } = await a.el("170206").then(a.t.bind(a, "170206", 19));
    return e
  };

function ej(e) {
  let {
    shouldAnimate: t = !1
  } = e, a = (0, h.useStateFromStores)([_.default], () => _.default.useReducedMotion);
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
var eR = n.memo(function(e) {
  let {
    className: t,
    threadId: a,
    goToThread: l,
    observePostVisibilityAnalytics: i
  } = e, u = n.useRef(null), {
    channel: d,
    isOpen: m,
    messageCount: f,
    unreadCount: x,
    firstMessage: S,
    firstMessageLoaded: _,
    firstMedia: T,
    firstMediaIsEmbed: p
  } = function(e) {
    let {
      threadId: t
    } = e, a = (0, h.useStateFromStores)([k.default], () => k.default.getChannel(t));
    o(null != a, "the thread should not be null here, a store must have missed an update");
    let s = (0, h.useStateFromStores)([w.default], () => w.default.getCurrentSidebarChannelId(a.parent_id) === a.id),
      {
        loaded: n,
        firstMessage: l
      } = (0, en.useFirstForumPostMessage)(a),
      {
        content: r,
        firstMedia: i,
        firstMediaIsEmbed: u
      } = (0, es.useForumPostFirstMessageMarkup)({
        firstMessage: l
      }),
      {
        messageCount: d,
        unreadCount: c
      } = (0, es.useMessageCount)(a);
    return {
      channel: a,
      isOpen: s,
      messageCount: d,
      unreadCount: c,
      firstMessage: l,
      firstMessageLoaded: n,
      firstMedia: i,
      firstMediaIsEmbed: u,
      content: r
    }
  }({
    threadId: a
  }), E = (0, h.useStateFromStores)([k.default], () => k.default.getChannel(d.parent_id)), {
    ref: N,
    height: M
  } = (0, C.default)(), v = (0, ec.useForumPostComposerStore)(e => e.setCardHeight), [A, I] = n.useState(162);
  n.useEffect(() => {
    null != M && (v(a, M + ev), I(M))
  }, [N, M, v, a, I, _]), n.useEffect(() => {
    null == i || i(u.current, a)
  }, [i, a, _]);
  let j = n.useRef(null),
    {
      handleLeftClick: R,
      handleRightClick: O
    } = (0, ex.default)({
      facepileRef: j,
      goToThread: l,
      channel: d
    }),
    {
      role: F,
      onFocus: b,
      ...L
    } = (0, c.useListItem)(a),
    {
      handleFocus: P,
      handleBlur: y
    } = (0, eg.default)(b);
  return (0, s.jsxs)("div", {
    ref: u,
    "data-item-id": a,
    onClick: R,
    onContextMenu: O,
    className: r(eE.container, t, {
      [eE.isOpen]: m
    }),
    children: [(0, s.jsx)(g.Clickable, {
      onClick: R,
      focusProps: {
        ringTarget: u
      },
      onContextMenu: O,
      "aria-label": ep.default.Messages.FORUM_POST_ARIA_LABEL.format({
        title: d.name,
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
        children: _ ? (0, s.jsx)(eO, {
          parentChannel: E,
          channel: d,
          firstMessage: S,
          messageCount: f,
          unreadCount: x,
          facepileRef: j,
          onClick: R
        }) : (0, s.jsx)(em.ForumPostContentPlaceholder, {})
      }), _ ? (null == S ? void 0 : S.blocked) || null == T ? null : (0, s.jsx)(eH, {
        channel: d,
        firstMedia: T,
        firstMessage: S,
        isEmbed: p,
        contentHeight: A
      }) : (0, s.jsx)(em.ForumPostMediaPreviewPlaceholder, {})]
    })]
  })
});

function eO(e) {
  let {
    parentChannel: t,
    channel: a,
    firstMessage: n,
    messageCount: l,
    unreadCount: r,
    facepileRef: i,
    onClick: o
  } = e, {
    isNew: u
  } = (0, es.useForumPostReadStates)(a), {
    forumPostContainsTags: d
  } = (0, ef.useTagsRowHooks)({
    channel: a,
    isNew: u
  });
  return (0, s.jsxs)("div", {
    className: eE.content,
    children: [(0, s.jsxs)("div", {
      className: eE.titleAndMessage,
      children: [d && (0, s.jsx)(ef.IncreasedActivityTagsRow, {
        channel: a,
        className: eE.tagsRow,
        tagsClassName: eE.tags
      }), d && (0, s.jsx)("hr", {
        className: eE.separator
      }), (0, s.jsx)(ek, {
        channel: a,
        firstMessage: n,
        isNew: u,
        containsTags: d
      }), (0, s.jsx)(g.HeadingLevel, {
        children: (0, s.jsx)(eP, {
          channel: a,
          onClick: o
        })
      }), null != n && (0, s.jsx)(eF, {
        firstMessage: n
      })]
    }), (0, s.jsxs)("div", {
      className: eE.engagement,
      children: [null != n && (0, s.jsx)(eD, {
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

function eF(e) {
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

function eb(e) {
  let {
    parentChannel: t,
    channel: a,
    messageCount: n,
    unreadCount: l,
    facepileRef: i
  } = e, o = (0, es.useTypingUserIds)(a), {
    mostRecentMessage: u
  } = (0, en.useMostRecentForumMessage)(t, a), d = (0, h.useStateFromStores)([H.default], () => H.default.can(eC.Permissions.SEND_MESSAGES_IN_THREADS, a)), {
    hasUnreads: c
  } = (0, es.useForumPostReadStates)(a), m = (0, h.useStateFromStores)([et.default], () => et.default.getFirstNoReplyThreadId()), f = (0, D.useIsNonModInLockedThread)(a), x = (0, A.useNullableMessageAuthor)(u);
  if (n > 0) {
    var C, S;
    return (0, s.jsxs)(g.Clickable, {
      onClick: e => {
        null != u && null != a.parent_id && (e.stopPropagation(), (0, ei.trackForumPostClicked)({
          guildId: a.guild_id,
          channelId: a.parent_id,
          postId: a.id,
          location: {
            page: eC.AnalyticsPages.GUILD_CHANNEL,
            section: eC.AnalyticsSections.FORUM_CHANNEL_POST
          }
        }), e.shiftKey ? (0, L.transitionToThreadMessage)(a, u.id, e_.OpenThreadAnalyticsLocations.BROWSER) : P.default.openThreadAsSidebar({
          guildId: a.guild_id,
          channelId: a.id,
          baseChannelId: a.parent_id,
          flash: !0,
          details: {
            type: y.SidebarOpenDetailsType.THREAD,
            initialMessageId: u.id
          }
        }))
      },
      children: [(0, s.jsxs)(g.HiddenVisually, {
        children: ["Latest message:", null != x ? null !== (C = x.nick) && void 0 !== C ? C : ep.default.Messages.UNKNOWN_USER : null, " ", null == (S = null == u ? void 0 : u.content) ? "" : S.length > 120 ? "".concat(S.substring(0, 120), "...") : S]
      }), (0, s.jsxs)(g.FocusBlock, {
        className: eE.replies,
        children: [(0, s.jsx)(eU, {
          messageCount: n,
          unreadCount: l,
          iconSize: 16
        }), o.length > 0 ? (0, s.jsx)(eL, {
          channel: a,
          typingUserIds: o,
          facepileRef: i
        }) : (0, s.jsx)(ey, {
          channel: a,
          mostRecentMessage: u,
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
      className: r(eE.mostRecentMessageContent, eE.nonUserMessage, eE.lockedMessage),
      children: ep.default.Messages.THREAD_HEADER_NOTICE_ACTIVE_LOCKED
    })
  }) : d && 0 === n ? (0, s.jsx)(g.FocusBlock, {
    "aria-hidden": !0,
    className: eE.replies,
    children: o.length > 0 ? (0, s.jsx)(eL, {
      channel: a,
      typingUserIds: o,
      facepileRef: i
    }) : (0, s.jsx)(ej, {
      shouldAnimate: m === a.id
    })
  }) : null
}

function eL(e) {
  let {
    channel: t,
    typingUserIds: a,
    facepileRef: n
  } = e;
  return (0, s.jsxs)("div", {
    className: eE.typing,
    children: [(0, s.jsx)(ed.Facepile, {
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

function eP(e) {
  let {
    channel: t,
    onClick: a
  } = e, {
    hasUnreads: l
  } = (0, es.useForumPostReadStates)(t), r = function(e) {
    let t = (0, h.useStateFromStores)([er.default], () => er.default.getHasSearchResults(e.parent_id)),
      a = (0, h.useStateFromStores)([er.default], () => er.default.getSearchQuery(e.parent_id)),
      s = n.useMemo(() => (0, S.createASTHighlighter)(t && null != a ? a : ""), [t, a]),
      l = n.useMemo(() => (0, v.default)({
        content: e.name,
        embeds: []
      }, {
        postProcessor: s
      }).content, [e.name, s]);
    return l
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
let ey = n.memo(function(e) {
  var t;
  let {
    channel: a,
    mostRecentMessage: l,
    hasUnreads: i
  } = e, o = (0, A.useNullableMessageAuthor)(l), u = (0, h.useStateFromStores)([G.default], () => null != l && G.default.isBlocked(l.author.id)), d = (0, h.useStateFromStores)([H.default], () => H.default.can(eC.Permissions.MANAGE_MESSAGES, a)), c = U.RenderSpoilers.useSetting(), m = (0, eo.useIsRecentMessageDeleted)(a), {
    content: f
  } = n.useMemo(() => (null == l ? void 0 : l.content) != null && "" !== l.content ? (0, v.default)(l, {
    formatInline: !0,
    noStyleAndInteraction: !0
  }) : {
    content: null
  }, [l]), x = null != l && (0, M.default)(l), C = null;
  if (u) C = (0, s.jsx)(g.Text, {
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
    } : (0, q.renderSingleLineMessage)(l, f, u, r(eE.mostRecentMessageContent, eM.inlineFormat, eM.smallFontSize), {
      iconClass: eE.messageContentIcon,
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
      className: r(eE.mostRecentMessageContent, eE.nonUserMessage),
      children: ep.default.Messages.FORUM_CHANNEL_MOST_RECENT_MESSAGE_DELETED
    }) : null
  }
  let S = null != o ? null !== (t = o.nick) && void 0 !== t ? t : ep.default.Messages.UNKNOWN_USER : null,
    _ = (0, b.useUsernameHook)({
      user: null == l ? void 0 : l.author,
      channelId: a.id,
      guildId: a.guild_id,
      messageId: null == l ? void 0 : l.id,
      stopPropagation: !0
    })(null != o ? o : void 0)((0, s.jsxs)(s.Fragment, {
      children: [null != S ? S : "", null != l ? ":" : ""]
    }), a.id);
  return (0, s.jsx)(Y.ObscuredDisplayContext.Provider, {
    value: (0, N.default)(c, d),
    children: (0, s.jsxs)("div", {
      className: eE.mostRecentMessage,
      children: [null == S || x ? null : (0, s.jsx)("div", {
        className: eE.mostRecentMessageAuthor,
        children: (0, s.jsx)(g.Text, {
          tag: "span",
          variant: "text-sm/semibold",
          children: _
        })
      }), (0, s.jsx)(g.FocusBlock, {
        children: C
      })]
    })
  })
});

function eD(e) {
  let {
    channel: t,
    firstMessage: a
  } = e, l = (0, h.useStateFromStores)([k.default], () => k.default.getChannel(t.parent_id)), i = (0, es.useDefaultReactionEmoji)(l), {
    disableReactionUpdates: o,
    disableReactionCreates: u,
    isLurking: d,
    isPendingMember: c
  } = (0, I.default)(t), m = (0, O.findReactionIndex)(a.reactions, i) >= 0, f = !m && !u, {
    ref: g,
    width: x
  } = (0, C.default)(), [S, _] = n.useState(10), [T, p] = n.useState(!0);
  return n.useEffect(() => {
    if (null != x) _(Math.floor((x - 78) / 66)), p(!1)
  }, [x, a.reactions, i]), (0, s.jsxs)("div", {
    className: r(eE.reactionRow, {
      [eE.loading]: T
    }),
    ref: g,
    children: [f && null != i ? (0, s.jsx)(F.Reaction, {
      className: eE.defaultReaction,
      message: a,
      readOnly: !1,
      useChatFontScaling: !0,
      isLurking: d,
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
      disableReactionCreates: u,
      disableReactionUpdates: o,
      useChatFontScaling: !0,
      className: eE.messageReactions,
      reactionClassName: eE.reaction,
      hoistReaction: i,
      forceHideReactionCreates: !0,
      maxReactions: S
    }), (0, s.jsx)("div", {
      className: eE.addReactionContainer,
      children: !u && (0, s.jsx)(j.ButtonAddReaction, {
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

function eU(e) {
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
    }), "number" == typeof t ? (0, s.jsx)(z.default, {
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

function ew(e) {
  var t;
  let {
    channel: a
  } = e, {
    sortOrder: n
  } = (0, ea.useForumChannelStore)(a.parent_id), l = (0, es.useLastActiveTimestamp)(a, n), r = (0, h.useStateFromStores)([B.default], () => B.default.lastMessageId(a.id)), i = null != r ? $.default.extractTimestamp(r) : null, o = null === (t = a.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp, u = null == l ? null : n === m.ThreadSortOrder.CREATION_DATE ? ep.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
    timestamp: l
  }) : l, c = n === m.ThreadSortOrder.CREATION_DATE && null != o ? ep.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
    timestamp: (0, J.dateFormat)(d(o), "LLLL")
  }) : null != i ? (0, J.dateFormat)(d(i), "LLLL") : null;
  return null == c || null == u ? null : (0, s.jsx)(g.Tooltip, {
    text: c,
    tooltipClassName: eE.timestampTooltip,
    "aria-label": ep.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP_LABEL,
    children: e => (0, s.jsx)(g.Text, {
      variant: "text-xs/medium",
      color: "header-secondary",
      ...e,
      children: u
    })
  })
}

function ek(e) {
  let {
    channel: t,
    firstMessage: a,
    isNew: n,
    containsTags: l
  } = e, r = t.hasFlag(eS.ChannelFlags.PINNED), i = (0, h.useStateFromStores)([G.default], () => null != a && G.default.isBlocked(a.author.id));
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
    }), (0, s.jsx)(ew, {
      channel: t
    }), n && (0, s.jsx)(Q.TextBadge, {
      className: eE.newBadge,
      color: f.default.unsafe_rawColors.BRAND_260.css,
      text: ep.default.Messages.NEW
    })]
  })
}

function eH(e) {
  let {
    channel: t,
    firstMedia: a,
    firstMessage: n,
    isEmbed: l,
    contentHeight: i
  } = e, o = (0, h.useStateFromStores)([V.default], () => V.default.isFocused()), u = (0, T.isAnimatedImageUrl)(a.src), d = U.GifAutoPlay.useSetting(), {
    src: c,
    width: m,
    height: f,
    alt: x
  } = a, [C, S] = (0, p.useShouldObscure)({
    media: a,
    channel: t
  }), _ = (0, p.getObscuredAlt)(S);
  return (0, s.jsx)(g.FocusBlock, {
    enabled: !0,
    children: (0, s.jsxs)("div", {
      className: r(eE.bodyMedia, {
        [eN.embedFull]: l
      }),
      style: {
        height: i,
        borderColor: (0, el.getEmbedColor)(n, C)
      },
      onClick: e => e.stopPropagation(),
      children: [c.startsWith("data:") ? (0, s.jsx)(W.default, {
        src: c,
        width: m,
        height: f,
        minWidth: 143,
        minHeight: i,
        maxHeight: i,
        alt: null != x && C ? _ : x,
        imageClassName: r({
          [eE.obscured]: C
        })
      }) : (0, R.renderImageComponent)({
        src: c,
        width: m,
        height: f,
        minWidth: 143,
        minHeight: i,
        maxHeight: i,
        alt: null != x && C ? _ : x,
        autoPlay: d,
        animated: u && !C && o,
        imageContainerClassName: r({
          [eE.obscured]: C
        })
      }), C && (0, s.jsx)(eu.default, {
        iconClassname: eE.obscuredTag,
        obscureReason: S
      })]
    })
  })
}