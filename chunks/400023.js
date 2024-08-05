n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(91192),
  o = n(442837),
  c = n(481060),
  u = n(904245),
  d = n(902840),
  h = n(607070),
  p = n(580747),
  m = n(135938),
  _ = n(160404),
  f = n(765104),
  E = n(695346),
  g = n(314897),
  C = n(323873),
  I = n(607744),
  x = n(375954),
  T = n(496675),
  N = n(306680),
  v = n(62817),
  S = n(594174),
  Z = n(68588),
  A = n(459273),
  M = n(255269),
  b = n(47481),
  R = n(977391),
  j = n(73274),
  L = n(419388),
  P = n(406534),
  O = n(981631),
  y = n(689938),
  D = n(431747);
let k = a.memo(function(e) {
  var t, n;
  let {
className: s,
messageGroupSpacing: d,
scrollerClassName: p,
channel: m,
messages: f,
unreadCount: E,
showNewMessagesBar: g,
messageDisplayCompact: C,
channelStream: I,
uploads: x,
hasUnreads: N,
editingMessageId: v,
fontSize: S,
keyboardModeEnabled: Z,
filterAfterTimestamp: M,
showingQuarantineBanner: b,
hideSummaries: k = !1
  } = e, [U, w] = a.useState(!1), B = a.useMemo(() => C ? (0, R.aJ)({
compact: !0,
messageGroups: 30,
groupRange: 4,
attachments: 8,
fontSize: S,
groupSpacing: d
  }) : (0, R.aJ)({
compact: !1,
messageGroups: 26,
groupRange: 4,
attachments: 8,
fontSize: S,
groupSpacing: d
  }), [
C,
S,
d
  ]), H = (0, L.ZP)({
messages: f,
channel: m,
compact: C,
hasUnreads: N,
focusId: v,
placeholderHeight: B.totalHeight,
canLoadMore: null == M,
handleScrollToBottom: a.useCallback(() => w(!0), [w]),
handleScrollFromBottom: a.useCallback(() => w(!1), [w])
  }), G = (0, j.Z)({
scrollerRef: H.ref,
isEditing: null != v,
keyboardModeEnabled: Z,
hasMoreAfter: f.hasMoreAfter
  });
  let V = (n = m, (0, o.e7)([_.Z], () => T.Z.can(O.Plq.READ_MESSAGE_HISTORY, n) ? null : _.Z.getViewingRolesTimestamp(n.getGuildId()))),
{
  channelStreamMarkup: F,
  newMessagesBar: W,
  jumpToPresentBar: z,
  forumPostActionBar: Y,
  safetyWarningBanner: K
} = (0, P.Z)({
  channel: m,
  messages: f,
  unreadCount: E,
  showNewMessagesBar: g,
  messageDisplayCompact: C,
  channelStream: I,
  uploads: x,
  loadMore: H.loadMore,
  scrollManager: H,
  specs: B,
  filterAfterTimestamp: null != M ? M : V,
  showingQuarantineBanner: b,
  hideSummaries: k,
  isAtBottom: U,
  jumpToPresent: () => {
    if (f.hasPresent()) {
      var e;
      null === (e = H.ref.current) || void 0 === e || e.scrollToBottom({
        animate: !h.Z.useReducedMotion
      });
    } else
      u.Z.jumpToPresent(m.id, O.AQB);
  }
});
  ! function(e) {
let t = a.useCallback(() => {
    var t;
    return null === (t = e.current) || void 0 === t ? void 0 : t.scrollToBottom();
  }, [e]),
  n = a.useCallback(() => {
    var t;
    return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageUp({
      animate: !h.Z.useReducedMotion
    });
  }, [e]),
  i = a.useCallback(() => {
    var t;
    return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageDown({
      animate: !h.Z.useReducedMotion
    });
  }, [e]);
(0, A.yp)({
  event: O.CkL.SCROLLTO_PRESENT,
  handler: t
}), (0, A.yp)({
  event: O.CkL.SCROLL_PAGE_UP,
  handler: n
}), (0, A.yp)({
  event: O.CkL.SCROLL_PAGE_DOWN,
  handler: i
});
  }(H.ref);
  let q = (0, c.useFocusJumpSection)(),
{
  ref: X,
  ...Q
} = (0, r.l2)(G),
J = a.useCallback(e => {
  var t;
  H.ref.current = e, X.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
}, []);
  return (0, i.jsxs)(r.bG, {
navigator: G,
children: [
  null != K && K,
  (0, i.jsxs)('div', {
    className: l()(D.messagesWrapper, s, 'group-spacing-'.concat(d)),
    children: [
      null == K && W,
      (0, i.jsxs)(c.PinToBottomScrollerAuto, {
        ref: J,
        customTheme: !0,
        className: l()(p, D.scroller),
        contentClassName: D.scrollerContent,
        onResize: H.handleResize,
        onScroll: H.handleScroll,
        onMouseDown: H.handleMouseDown,
        onMouseUp: H.handleMouseUp,
        ...q,
        tabIndex: -1,
        role: 'group',
        children: [
          Y,
          (0, i.jsxs)('ol', {
            className: D.scrollerInner,
            'aria-label': y.Z.Messages.CHANNEL_MESSAGES_A11Y_LABEL.format({
              channelName: m.name
            }),
            ...Q,
            children: [
              (0, i.jsx)('span', {
                className: D.navigationDescription,
                id: 'messagesNavigationDescription',
                'aria-hidden': !0,
                children: y.Z.Messages.CHANNEL_MESSAGES_A11Y_DESCRIPTION
              }),
              F,
              (0, i.jsx)('div', {
                className: l()({
                  [D.scrollerSpacer]: !b,
                  [D.empty]: 0 === f.length && !f.loadingMore,
                  [D.emptyForum]: 1 === f.length && !f.loadingMore && m.isForumPost() && (null === (t = f.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(m))
                })
              })
            ]
          })
        ]
      }),
      z
    ]
  })
]
  });
}, (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden);
t.Z = a.memo(function(e) {
  let {
channel: t,
showingQuarantineBanner: n,
hideSummaries: s = !1,
forceCompact: l = !1,
forceCozy: r = !1,
...c
  } = e, {
canManageMessages: u,
permissionVersion: _,
canChat: A
  } = function(e) {
let t = e.getGuildId(),
  n = (0, o.e7)([I.Z], () => null == t || I.Z.canChatInGuild(t), [t]),
  {
    canManageMessages: i,
    permissionVersion: a
  } = (0, o.cj)([T.Z], () => ({
    canManageMessages: T.Z.can(O.Plq.MANAGE_MESSAGES, e),
    permissionVersion: null != t ? T.Z.getGuildVersion(t) : null
  }), [
    e,
    t
  ]);
return {
  canChat: n,
  permissionVersion: a,
  canManageMessages: i
};
  }(t), {
messageGroupSpacing: R,
fontSize: j,
messageDisplayCompact: L,
renderSpoilers: P,
keyboardModeEnabled: y
  } = function() {
let e = E.jU.useSetting(),
  t = E.cC.useSetting(),
  {
    messageGroupSpacing: n,
    fontSize: i,
    keyboardModeEnabled: a
  } = (0, o.cj)([h.Z], () => {
    let {
      messageGroupSpacing: e,
      fontSize: t,
      keyboardModeEnabled: n
    } = h.Z;
    return {
      messageGroupSpacing: e,
      fontSize: t,
      keyboardModeEnabled: n
    };
  });
return {
  messageGroupSpacing: n,
  messageDisplayCompact: e,
  renderSpoilers: t,
  fontSize: i,
  keyboardModeEnabled: a
};
  }(), {
messages: D,
channelStream: U,
oldestUnreadMessageId: w,
editingMessageId: B
  } = function(e) {
var t, n;
let i = (0, o.e7)([x.Z], () => x.Z.getMessages(e.id), [e.id]),
  s = (0, o.e7)([N.ZP], () => {
    var t;
    return null !== (t = N.ZP.getOldestUnreadMessageId(e.id)) && void 0 !== t ? t : null;
  }, [e.id]),
  {
    enabled: l
  } = m.Z.useExperiment({
    location: '41de6d_1'
  }, {
    autoTrackExposure: !1
  }),
  r = null !== (n = null === (t = S.default.getUser(g.default.getId())) || void 0 === t ? void 0 : t.hasFlag(O.xW$.SPAMMER)) && void 0 !== n && n,
  c = (0, d.ts)(e),
  u = (0, p.Z)('use_topic_dividers_in_chat'),
  h = (0, o.Wu)([f.Z], () => {
    var t;
    return c && u && null !== (t = f.Z.summaries(e.id)) && void 0 !== t ? t : [];
  }, [
    c,
    e.id,
    u
  ]),
  _ = (0, o.e7)([f.Z], () => c ? f.Z.selectedSummary(e.id) : null, [
    c,
    e.id
  ]),
  E = a.useMemo(() => (0, b.Z)({
    channel: e,
    messages: i,
    oldestUnreadMessageId: s,
    treatSpam: l && !r,
    summaries: h,
    selectedSummary: _
  }), [
    i,
    e,
    s,
    l,
    h,
    _
  ]);
return {
  messages: i,
  channelStream: E,
  oldestUnreadMessageId: s,
  editingMessageId: (0, o.e7)([C.Z], () => {
    var t;
    return null === (t = C.Z.getEditingMessage(e.id)) || void 0 === t ? void 0 : t.id;
  })
};
  }(t);
  return (0, i.jsx)(Z.a.Provider, {
value: (0, M.Z)(P, u),
children: (0, i.jsx)(k, {
  ...c,
  messageGroupSpacing: R,
  showNewMessagesBar: !0,
  channel: t,
  messageDisplayCompact: !r && (l || L),
  messages: D,
  channelStream: U,
  permissionVersion: _,
  uploads: (0, o.e7)([v.Z], () => v.Z.getFiles(t.id), [t]),
  unreadCount: (0, o.e7)([N.ZP], () => N.ZP.getUnreadCount(t.id), [t]),
  hasUnreads: null != w,
  canChat: A,
  editingMessageId: B,
  fontSize: j,
  keyboardModeEnabled: y,
  showingQuarantineBanner: n,
  hideSummaries: s
})
  });
});