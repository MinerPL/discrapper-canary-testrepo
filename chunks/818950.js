"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("974667"),
  o = n("446674"),
  u = n("77078"),
  d = n("819689"),
  c = n("734575"),
  f = n("206230"),
  h = n("890503"),
  C = n("336696"),
  p = n("38654"),
  m = n("347738"),
  E = n("845579"),
  g = n("271938"),
  S = n("836417"),
  T = n("88093"),
  A = n("377253"),
  _ = n("957255"),
  M = n("660478"),
  I = n("462495"),
  N = n("697218"),
  v = n("505684"),
  x = n("378765"),
  L = n("70845"),
  y = n("51714"),
  R = n("88243"),
  O = n("31511"),
  D = n("120379"),
  P = n("221068"),
  b = n("49111"),
  j = n("782340"),
  k = n("430759");
let F = a.memo(function(e) {
  var t, n;
  let {
    className: l,
    messageGroupSpacing: c,
    scrollerClassName: h,
    channel: C,
    messages: m,
    unreadCount: E,
    showNewMessagesBar: g,
    messageDisplayCompact: S,
    channelStream: T,
    uploads: A,
    hasUnreads: M,
    editingMessageId: I,
    fontSize: N,
    keyboardModeEnabled: v,
    filterAfterTimestamp: L,
    showingQuarantineBanner: y
  } = e, [F, H] = a.useState(!1), U = a.useMemo(() => S ? (0, R.generateMessageSpecs)({
    compact: !0,
    messageGroups: 30,
    groupRange: 4,
    attachments: 8,
    fontSize: N,
    groupSpacing: c
  }) : (0, R.generateMessageSpecs)({
    compact: !1,
    messageGroups: 26,
    groupRange: 4,
    attachments: 8,
    fontSize: N,
    groupSpacing: c
  }), [S, N, c]), G = (0, D.default)({
    messages: m,
    channel: C,
    compact: S,
    hasUnreads: M,
    focusId: I,
    placeholderHeight: U.totalHeight,
    canLoadMore: null == L,
    handleScrollToBottom: a.useCallback(() => H(!0), [H]),
    handleScrollFromBottom: a.useCallback(() => H(!1), [H])
  }), B = (0, O.default)({
    scrollerRef: G.ref,
    isEditing: null != I,
    keyboardModeEnabled: v,
    hasMoreAfter: m.hasMoreAfter
  });
  let V = (n = C, (0, o.useStateFromStores)([p.default], () => {
      let e = _.default.can(b.Permissions.READ_MESSAGE_HISTORY, n);
      return e ? null : p.default.getViewingRolesTimestamp(n.getGuildId())
    })),
    {
      channelStreamMarkup: w,
      newMessagesBar: W,
      jumpToPresentBar: Z,
      forumPostActionBar: z,
      safetyWarningBanner: K
    } = (0, P.default)({
      channel: C,
      messages: m,
      unreadCount: E,
      showNewMessagesBar: g,
      messageDisplayCompact: S,
      channelStream: T,
      uploads: A,
      loadMore: G.loadMore,
      scrollManager: G,
      specs: U,
      filterAfterTimestamp: null != L ? L : V,
      showingQuarantineBanner: y,
      isAtBottom: F,
      jumpToPresent: () => {
        if (m.hasPresent()) {
          var e;
          null === (e = G.ref.current) || void 0 === e || e.scrollToBottom({
            animate: !f.default.useReducedMotion
          })
        } else d.default.jumpToPresent(C.id, b.MAX_MESSAGES_PER_CHANNEL)
      }
    });
  ! function(e) {
    let t = a.useCallback(() => {
        var t;
        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollToBottom()
      }, [e]),
      n = a.useCallback(() => {
        var t;
        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageUp({
          animate: !f.default.useReducedMotion
        })
      }, [e]),
      s = a.useCallback(() => {
        var t;
        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageDown({
          animate: !f.default.useReducedMotion
        })
      }, [e]);
    (0, x.useComponentAction)({
      event: b.ComponentActions.SCROLLTO_PRESENT,
      handler: t
    }), (0, x.useComponentAction)({
      event: b.ComponentActions.SCROLL_PAGE_UP,
      handler: n
    }), (0, x.useComponentAction)({
      event: b.ComponentActions.SCROLL_PAGE_DOWN,
      handler: s
    })
  }(G.ref);
  let Y = (0, u.useFocusJumpSection)(),
    {
      ref: X,
      ...q
    } = (0, r.getContainerPropsFromNavigator)(B),
    J = a.useCallback(e => {
      var t;
      G.ref.current = e, X.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
    }, []);
  return (0, s.jsx)(r.ListNavigatorProvider, {
    navigator: B,
    children: (0, s.jsxs)("div", {
      className: i(k.messagesWrapper, l, "group-spacing-".concat(c)),
      children: [null != K ? K : W, (0, s.jsxs)(u.PinToBottomScrollerAuto, {
        ref: J,
        customTheme: !0,
        className: i(h, k.scroller),
        contentClassName: k.scrollerContent,
        onResize: G.handleResize,
        onScroll: G.handleScroll,
        onMouseDown: G.handleMouseDown,
        onMouseUp: G.handleMouseUp,
        ...Y,
        tabIndex: -1,
        role: "group",
        children: [z, (0, s.jsxs)("ol", {
          className: k.scrollerInner,
          "aria-label": j.default.Messages.CHANNEL_MESSAGES_A11Y_LABEL.format({
            channelName: C.name
          }),
          ...q,
          children: [(0, s.jsx)("span", {
            className: k.navigationDescription,
            id: "messagesNavigationDescription",
            "aria-hidden": !0,
            children: j.default.Messages.CHANNEL_MESSAGES_A11Y_DESCRIPTION
          }), w, (0, s.jsx)("div", {
            className: i({
              [k.scrollerSpacer]: !y,
              [k.empty]: 0 === m.length && !m.loadingMore,
              [k.emptyForum]: 1 === m.length && !m.loadingMore && C.isForumPost() && (null === (t = m.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(C))
            })
          })]
        })]
      }), Z]
    })
  })
}, (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden);
var H = a.memo(function(e) {
  let {
    channel: t,
    showingQuarantineBanner: n,
    forceCompact: l = !1,
    forceCozy: i = !1,
    ...r
  } = e, {
    canManageMessages: u,
    permissionVersion: d,
    canChat: p
  } = function(e) {
    let t = e.getGuildId(),
      n = (0, o.useStateFromStores)([T.default], () => null == t || T.default.canChatInGuild(t), [t]),
      {
        canManageMessages: s,
        permissionVersion: a
      } = (0, o.useStateFromStoresObject)([_.default], () => ({
        canManageMessages: _.default.can(b.Permissions.MANAGE_MESSAGES, e),
        permissionVersion: null != t ? _.default.getGuildVersion(t) : null
      }), [e, t]);
    return {
      canChat: n,
      permissionVersion: a,
      canManageMessages: s
    }
  }(t), {
    messageGroupSpacing: x,
    fontSize: R,
    messageDisplayCompact: O,
    renderSpoilers: D,
    keyboardModeEnabled: P
  } = function() {
    let e = E.MessageDisplayCompact.useSetting(),
      t = E.RenderSpoilers.useSetting(),
      {
        messageGroupSpacing: n,
        fontSize: s,
        keyboardModeEnabled: a
      } = (0, o.useStateFromStoresObject)([f.default], () => {
        let {
          messageGroupSpacing: e,
          fontSize: t,
          keyboardModeEnabled: n
        } = f.default;
        return {
          messageGroupSpacing: e,
          fontSize: t,
          keyboardModeEnabled: n
        }
      });
    return {
      messageGroupSpacing: n,
      messageDisplayCompact: e,
      renderSpoilers: t,
      fontSize: s,
      keyboardModeEnabled: a
    }
  }(), {
    messages: j,
    channelStream: k,
    oldestUnreadMessageId: H,
    editingMessageId: U
  } = function(e) {
    var t, n;
    let s = (0, o.useStateFromStores)([A.default], () => A.default.getMessages(e.id), [e.id]),
      l = (0, o.useStateFromStores)([M.default], () => {
        var t;
        return null !== (t = M.default.getOldestUnreadMessageId(e.id)) && void 0 !== t ? t : null
      }, [e.id]),
      {
        enabled: i
      } = C.default.useExperiment({
        location: "41de6d_1"
      }, {
        autoTrackExposure: !1
      }),
      r = null !== (n = null === (t = N.default.getUser(g.default.getId())) || void 0 === t ? void 0 : t.hasFlag(b.UserFlags.SPAMMER)) && void 0 !== n && n,
      u = (0, c.useChannelSummariesExperiment)(e),
      d = (0, h.default)("use_topic_dividers_in_chat"),
      f = (0, o.useStateFromStoresArray)([m.default], () => {
        var t;
        return u && d && null !== (t = m.default.summaries(e.id)) && void 0 !== t ? t : []
      }, [u, e.id, d]),
      p = (0, o.useStateFromStores)([m.default], () => u ? m.default.selectedSummary(e.id) : null, [u, e.id]),
      E = a.useMemo(() => (0, y.default)({
        channel: e,
        messages: s,
        oldestUnreadMessageId: l,
        treatSpam: i && !r,
        summaries: f,
        selectedSummary: p
      }), [s, e, l, i, f, p]),
      T = (0, o.useStateFromStores)([S.default], () => {
        var t;
        return null === (t = S.default.getEditingMessage(e.id)) || void 0 === t ? void 0 : t.id
      });
    return {
      messages: s,
      channelStream: E,
      oldestUnreadMessageId: l,
      editingMessageId: T
    }
  }(t);
  return (0, s.jsx)(v.ObscuredDisplayContext.Provider, {
    value: (0, L.default)(D, u),
    children: (0, s.jsx)(F, {
      ...r,
      messageGroupSpacing: x,
      showNewMessagesBar: !0,
      channel: t,
      messageDisplayCompact: !i && (l || O),
      messages: j,
      channelStream: k,
      permissionVersion: d,
      uploads: (0, o.useStateFromStores)([I.default], () => I.default.getFiles(t.id), [t]),
      unreadCount: (0, o.useStateFromStores)([M.default], () => M.default.getUnreadCount(t.id), [t]),
      hasUnreads: null != H,
      canChat: p,
      editingMessageId: U,
      fontSize: R,
      keyboardModeEnabled: P,
      showingQuarantineBanner: n
    })
  })
})