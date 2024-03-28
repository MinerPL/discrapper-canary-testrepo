"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("924826"),
  o = n("442837"),
  u = n("481060"),
  d = n("904245"),
  c = n("902840"),
  f = n("607070"),
  h = n("580747"),
  m = n("135938"),
  p = n("160404"),
  E = n("765104"),
  C = n("695346"),
  g = n("314897"),
  S = n("323873"),
  _ = n("607744"),
  T = n("375954"),
  I = n("496675"),
  A = n("306680"),
  v = n("62817"),
  N = n("594174"),
  x = n("68588"),
  M = n("459273"),
  R = n("255269"),
  L = n("47481"),
  y = n("977391"),
  O = n("73274"),
  j = n("419388"),
  P = n("406534"),
  D = n("981631"),
  b = n("689938"),
  U = n("644575");
let F = l.memo(function(e) {
  var t, n;
  let {
    className: s,
    messageGroupSpacing: c,
    scrollerClassName: h,
    channel: m,
    messages: E,
    unreadCount: C,
    showNewMessagesBar: g,
    messageDisplayCompact: S,
    channelStream: _,
    uploads: T,
    hasUnreads: A,
    editingMessageId: v,
    fontSize: N,
    keyboardModeEnabled: x,
    filterAfterTimestamp: R,
    showingQuarantineBanner: L
  } = e, [F, w] = l.useState(!1), k = l.useMemo(() => S ? (0, y.generateMessageSpecs)({
    compact: !0,
    messageGroups: 30,
    groupRange: 4,
    attachments: 8,
    fontSize: N,
    groupSpacing: c
  }) : (0, y.generateMessageSpecs)({
    compact: !1,
    messageGroups: 26,
    groupRange: 4,
    attachments: 8,
    fontSize: N,
    groupSpacing: c
  }), [S, N, c]), H = (0, j.default)({
    messages: E,
    channel: m,
    compact: S,
    hasUnreads: A,
    focusId: v,
    placeholderHeight: k.totalHeight,
    canLoadMore: null == R,
    handleScrollToBottom: l.useCallback(() => w(!0), [w]),
    handleScrollFromBottom: l.useCallback(() => w(!1), [w])
  }), B = (0, O.default)({
    scrollerRef: H.ref,
    isEditing: null != v,
    keyboardModeEnabled: x,
    hasMoreAfter: E.hasMoreAfter
  });
  let G = (n = m, (0, o.useStateFromStores)([p.default], () => I.default.can(D.Permissions.READ_MESSAGE_HISTORY, n) ? null : p.default.getViewingRolesTimestamp(n.getGuildId()))),
    {
      channelStreamMarkup: V,
      newMessagesBar: W,
      jumpToPresentBar: Y,
      forumPostActionBar: z,
      safetyWarningBanner: Z
    } = (0, P.default)({
      channel: m,
      messages: E,
      unreadCount: C,
      showNewMessagesBar: g,
      messageDisplayCompact: S,
      channelStream: _,
      uploads: T,
      loadMore: H.loadMore,
      scrollManager: H,
      specs: k,
      filterAfterTimestamp: null != R ? R : G,
      showingQuarantineBanner: L,
      isAtBottom: F,
      jumpToPresent: () => {
        if (E.hasPresent()) {
          var e;
          null === (e = H.ref.current) || void 0 === e || e.scrollToBottom({
            animate: !f.default.useReducedMotion
          })
        } else d.default.jumpToPresent(m.id, D.MAX_MESSAGES_PER_CHANNEL)
      }
    });
  ! function(e) {
    let t = l.useCallback(() => {
        var t;
        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollToBottom()
      }, [e]),
      n = l.useCallback(() => {
        var t;
        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageUp({
          animate: !f.default.useReducedMotion
        })
      }, [e]),
      a = l.useCallback(() => {
        var t;
        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageDown({
          animate: !f.default.useReducedMotion
        })
      }, [e]);
    (0, M.useComponentAction)({
      event: D.ComponentActions.SCROLLTO_PRESENT,
      handler: t
    }), (0, M.useComponentAction)({
      event: D.ComponentActions.SCROLL_PAGE_UP,
      handler: n
    }), (0, M.useComponentAction)({
      event: D.ComponentActions.SCROLL_PAGE_DOWN,
      handler: a
    })
  }(H.ref);
  let K = (0, u.useFocusJumpSection)(),
    {
      ref: X,
      ...q
    } = (0, r.getContainerPropsFromNavigator)(B),
    Q = l.useCallback(e => {
      var t;
      H.ref.current = e, X.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
    }, []);
  return (0, a.jsx)(r.ListNavigatorProvider, {
    navigator: B,
    children: (0, a.jsxs)("div", {
      className: i()(U.messagesWrapper, s, "group-spacing-".concat(c)),
      children: [null != Z ? Z : W, (0, a.jsxs)(u.PinToBottomScrollerAuto, {
        ref: Q,
        customTheme: !0,
        className: i()(h, U.scroller),
        contentClassName: U.scrollerContent,
        onResize: H.handleResize,
        onScroll: H.handleScroll,
        onMouseDown: H.handleMouseDown,
        onMouseUp: H.handleMouseUp,
        ...K,
        tabIndex: -1,
        role: "group",
        children: [z, (0, a.jsxs)("ol", {
          className: U.scrollerInner,
          "aria-label": b.default.Messages.CHANNEL_MESSAGES_A11Y_LABEL.format({
            channelName: m.name
          }),
          ...q,
          children: [(0, a.jsx)("span", {
            className: U.navigationDescription,
            id: "messagesNavigationDescription",
            "aria-hidden": !0,
            children: b.default.Messages.CHANNEL_MESSAGES_A11Y_DESCRIPTION
          }), V, (0, a.jsx)("div", {
            className: i()({
              [U.scrollerSpacer]: !L,
              [U.empty]: 0 === E.length && !E.loadingMore,
              [U.emptyForum]: 1 === E.length && !E.loadingMore && m.isForumPost() && (null === (t = E.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(m))
            })
          })]
        })]
      }), Y]
    })
  })
}, (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden);
t.default = l.memo(function(e) {
  let {
    channel: t,
    showingQuarantineBanner: n,
    forceCompact: s = !1,
    forceCozy: i = !1,
    ...r
  } = e, {
    canManageMessages: u,
    permissionVersion: d,
    canChat: p
  } = function(e) {
    let t = e.getGuildId(),
      n = (0, o.useStateFromStores)([_.default], () => null == t || _.default.canChatInGuild(t), [t]),
      {
        canManageMessages: a,
        permissionVersion: l
      } = (0, o.useStateFromStoresObject)([I.default], () => ({
        canManageMessages: I.default.can(D.Permissions.MANAGE_MESSAGES, e),
        permissionVersion: null != t ? I.default.getGuildVersion(t) : null
      }), [e, t]);
    return {
      canChat: n,
      permissionVersion: l,
      canManageMessages: a
    }
  }(t), {
    messageGroupSpacing: M,
    fontSize: y,
    messageDisplayCompact: O,
    renderSpoilers: j,
    keyboardModeEnabled: P
  } = function() {
    let e = C.MessageDisplayCompact.useSetting(),
      t = C.RenderSpoilers.useSetting(),
      {
        messageGroupSpacing: n,
        fontSize: a,
        keyboardModeEnabled: l
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
      fontSize: a,
      keyboardModeEnabled: l
    }
  }(), {
    messages: b,
    channelStream: U,
    oldestUnreadMessageId: w,
    editingMessageId: k
  } = function(e) {
    var t, n;
    let a = (0, o.useStateFromStores)([T.default], () => T.default.getMessages(e.id), [e.id]),
      s = (0, o.useStateFromStores)([A.default], () => {
        var t;
        return null !== (t = A.default.getOldestUnreadMessageId(e.id)) && void 0 !== t ? t : null
      }, [e.id]),
      {
        enabled: i
      } = m.default.useExperiment({
        location: "41de6d_1"
      }, {
        autoTrackExposure: !1
      }),
      r = null !== (n = null === (t = N.default.getUser(g.default.getId())) || void 0 === t ? void 0 : t.hasFlag(D.UserFlags.SPAMMER)) && void 0 !== n && n,
      u = (0, c.useChannelSummariesExperiment)(e),
      d = (0, h.default)("use_topic_dividers_in_chat"),
      f = (0, o.useStateFromStoresArray)([E.default], () => {
        var t;
        return u && d && null !== (t = E.default.summaries(e.id)) && void 0 !== t ? t : []
      }, [u, e.id, d]),
      p = (0, o.useStateFromStores)([E.default], () => u ? E.default.selectedSummary(e.id) : null, [u, e.id]),
      C = l.useMemo(() => (0, L.default)({
        channel: e,
        messages: a,
        oldestUnreadMessageId: s,
        treatSpam: i && !r,
        summaries: f,
        selectedSummary: p
      }), [a, e, s, i, f, p]);
    return {
      messages: a,
      channelStream: C,
      oldestUnreadMessageId: s,
      editingMessageId: (0, o.useStateFromStores)([S.default], () => {
        var t;
        return null === (t = S.default.getEditingMessage(e.id)) || void 0 === t ? void 0 : t.id
      })
    }
  }(t);
  return (0, a.jsx)(x.ObscuredDisplayContext.Provider, {
    value: (0, R.default)(j, u),
    children: (0, a.jsx)(F, {
      ...r,
      messageGroupSpacing: M,
      showNewMessagesBar: !0,
      channel: t,
      messageDisplayCompact: !i && (s || O),
      messages: b,
      channelStream: U,
      permissionVersion: d,
      uploads: (0, o.useStateFromStores)([v.default], () => v.default.getFiles(t.id), [t]),
      unreadCount: (0, o.useStateFromStores)([A.default], () => A.default.getUnreadCount(t.id), [t]),
      hasUnreads: null != w,
      canChat: p,
      editingMessageId: k,
      fontSize: y,
      keyboardModeEnabled: P,
      showingQuarantineBanner: n
    })
  })
})