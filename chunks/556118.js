"use strict";
n.r(t), n.d(t, {
  getElementFromMessage: function() {
    return K
  },
  ThreadStarterChatMessage: function() {
    return Y
  },
  default: function() {
    return q
  }
}), n("702976");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("627445"),
  o = n.n(r),
  u = n("974667"),
  d = n("446674"),
  c = n("77078"),
  f = n("206230"),
  h = n("619259"),
  C = n("405645"),
  p = n("634807"),
  m = n("685841"),
  E = n("256572"),
  g = n("393414"),
  S = n("845579"),
  T = n("42203"),
  A = n("836417"),
  _ = n("780571"),
  M = n("568734"),
  I = n("299039"),
  N = n("154864"),
  v = n("913491"),
  x = n("574073"),
  L = n("738352"),
  y = n("865343"),
  R = n("380986"),
  O = n("85470"),
  D = n("969706"),
  P = n("39331"),
  b = n("68480"),
  j = n("115859"),
  k = n("922177"),
  F = n("789790"),
  H = n("227984"),
  U = n("82080"),
  G = n("535993"),
  B = n("144553"),
  V = n("862451"),
  w = n("894488"),
  W = n("49111"),
  Z = n("782340"),
  z = n("5762");

function K(e, t, n) {
  return e.getElementById((0, N.getMessageDOMId)(t, n))
}

function Y(e) {
  var t;
  let {
    id: n,
    message: a,
    message: {
      messageReference: l
    },
    compact: r = !1,
    className: c
  } = e;
  o(a.type === W.MessageTypes.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
  let {
    ...f
  } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""), h = (0, d.useStateFromStores)([E.default], () => E.default.getMessageByReference(l)), {
    popouts: C,
    setPopout: p
  } = (0, D.default)(a.id, w.DEFAULT_POPOUTS), m = (0, x.default)(a), g = (0, y.getMessageAriaLabelledBy)(a), S = (0, y.getMessageAriaDescribedBy)(a);
  return a.type === W.MessageTypes.THREAD_STARTER_MESSAGE && null != h && h.state === E.ReferencedMessageState.LOADED ? (0, s.jsx)(X, {
    ...e,
    message: h.message,
    groupId: h.message.id
  }) : (0, s.jsx)(_.default, {
    ...f,
    id: n,
    compact: r,
    className: i(c, {
      [z.message]: !0,
      [z.cozyMessage]: !r,
      [z.systemMessage]: !0,
      [z.groupStart]: !0
    }),
    childrenHeader: (0, H.default)({
      messageProps: e,
      setPopout: p,
      messagePopouts: C,
      replyReference: l,
      author: m
    }),
    childrenSystemMessage: (0, V.default)(e),
    childrenMessageContent: null,
    "aria-labelledby": g,
    "aria-describedby": S,
    hasThread: !1
  })
}

function X(e) {
  var t, n;
  let {
    id: l,
    message: r,
    message: {
      id: o,
      channel_id: h
    },
    channel: {
      guild_id: m
    },
    compact: T = !1,
    className: A,
    groupId: I
  } = e, N = r.type === W.MessageTypes.REPLY ? r.messageReference : void 0, {
    onFocus: L,
    ...b
  } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""), {
    isFocused: k,
    handleFocus: F,
    handleBlur: G
  } = (0, R.useFocusInside)(L), {
    popouts: K,
    selected: Y,
    setPopout: X
  } = (0, D.default)(r.id, w.DEFAULT_POPOUTS), q = S.InlineEmbedMedia.useSetting(), J = S.RenderEmbeds.useSetting(), Q = (0, d.useStateFromStores)([E.default], () => E.default.getMessageByReference(N)), $ = (0, p.isMessageNewerThanImprovedMarkdownEpoch)((null !== (n = r.editedTimestamp) && void 0 !== n ? n : r.timestamp).valueOf()), {
    handleMouseEnter: ee,
    handleMouseLeave: et,
    isHovered: en
  } = (0, R.useHoveredMessage)(I, r.author.id, Y), es = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled), ea = Y || es && k, el = ea || en, {
    content: ei,
    hasSpoilerEmbeds: er
  } = (0, P.default)(r, {
    hideSimpleEmbedContent: q && J,
    isInteracting: el,
    formatInline: !1,
    allowList: $,
    allowHeading: $,
    allowLinks: !0,
    previewLinkTarget: !0
  }), eo = (0, O.default)(o, h, es), eu = (0, x.default)(r), ed = (0, y.getMessageAriaLabelledBy)(r, I), ec = (0, y.getMessageAriaDescribedBy)(r), ef = (0, U.default)(e, ei, !1), eh = a.useCallback(() => (0, g.transitionToGuild)(m, h, o), [m, h, o]), eC = (0, C.useRoleIcon)({
    guildId: m,
    roleId: eu.iconRoleId
  });
  return (0, s.jsxs)("div", {
    className: z.quotedChatMessage,
    children: [(0, s.jsx)(c.Clickable, {
      className: z.jump,
      onClick: eh,
      "aria-label": Z.default.Messages.JUMP,
      children: Z.default.Messages.JUMP
    }), (0, s.jsx)(_.default, {
      ...b,
      id: l,
      compact: T,
      className: i(A, {
        [z.message]: !0,
        [z.cozyMessage]: !T,
        [z.mentioned]: r.mentioned && !(0, v.default)(r),
        [z.ephemeral]: (0, M.hasFlag)(r.flags, W.MessageFlags.EPHEMERAL),
        [z.systemMessage]: (0, v.default)(r),
        [z.groupStart]: r.id === I || r.type === W.MessageTypes.REPLY,
        [z.selected]: ea
      }),
      zalgo: !0,
      onKeyDown: eo,
      onFocus: F,
      onBlur: G,
      childrenRepliedMessage: (0, B.default)(e, X, K, N, Q),
      childrenHeader: (0, H.default)({
        messageProps: e,
        setPopout: X,
        messagePopouts: K,
        replyReference: N,
        author: eu,
        repliedMessage: Q,
        roleIcon: eC
      }),
      childrenAccessories: (0, j.default)({
        channelMessageProps: e,
        hasSpoilerEmbeds: er,
        isInteracting: el,
        renderThreadAccessory: !1,
        renderComponentAccessory: !1,
        renderSuppressEmbeds: !1
      }),
      childrenSystemMessage: (0, V.default)(e),
      childrenMessageContent: ef,
      onMouseMove: ee,
      onMouseLeave: et,
      "aria-labelledby": ed,
      "aria-describedby": ec,
      hasThread: !1
    })]
  })
}
var q = a.memo(function(e) {
  var t, n;
  let l;
  let {
    id: r,
    message: g,
    message: {
      id: N
    },
    channel: K,
    channel: {
      id: Y
    },
    compact: X = !1,
    className: q,
    flashKey: J,
    groupId: Q,
    renderContentOnly: $
  } = e;
  o(g.type !== W.MessageTypes.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
  let ee = W.MessageTypesWithLazyLoadedReferences.has(g.type) ? g.messageReference : void 0,
    {
      onFocus: et,
      ...en
    } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""),
    es = S.InlineEmbedMedia.useSetting(),
    ea = S.RenderEmbeds.useSetting(),
    el = (0, d.useStateFromStores)([E.default], () => E.default.getMessageByReference(ee)),
    {
      popouts: ei,
      selected: er,
      setPopout: eo
    } = (0, D.default)(g.id, w.DEFAULT_POPOUTS),
    eu = (0, R.useContextMenuMessage)(g, K, eo),
    ed = (0, R.useClickMessage)(g, K),
    {
      handleMouseEnter: ec,
      handleMouseLeave: ef,
      hasHovered: eh,
      isHovered: eC
    } = (0, R.useHoveredMessage)(Q, g.author.id, er),
    {
      isFocused: ep,
      hasFocused: em,
      handleFocus: eE,
      handleBlur: eg
    } = (0, R.useFocusInside)(et),
    eS = (0, d.useStateFromStores)([A.default], () => A.default.isEditing(Y, N), [Y, N]),
    eT = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled),
    eA = er || eS || eT && ep,
    e_ = eA || eC,
    eM = (0, d.useStateFromStores)([T.default], () => g.hasFlag(W.MessageFlags.HAS_THREAD) && T.default.getChannel(I.default.castMessageIdAsChannelId(g.id))),
    eI = g.isFirstMessageInForumPost(K),
    eN = (0, p.isMessageNewerThanImprovedMarkdownEpoch)((null !== (n = g.editedTimestamp) && void 0 !== n ? n : g.timestamp).valueOf()),
    {
      content: ev,
      hasSpoilerEmbeds: ex
    } = (0, P.default)(g, {
      hideSimpleEmbedContent: es && ea,
      isInteracting: e_,
      formatInline: !1,
      allowList: eI || eN,
      allowHeading: eI || eN,
      allowLinks: !0,
      previewLinkTarget: !0
    }),
    eL = (0, O.default)(N, Y, eT),
    ey = (0, x.default)(g),
    eR = (0, d.useStateFromStores)([m.default], () => m.default.getPendingReply(Y)),
    eO = function(e) {
      let t = a.useRef(e);
      return a.useEffect(() => void(t.current = null != e ? e : t.current)), null != e ? e : t.current
    }(J),
    eD = (0, C.useRoleIcon)({
      guildId: K.guild_id,
      roleId: ey.iconRoleId
    }),
    eP = (0, y.getMessageAriaLabelledBy)(g, Q),
    eb = (0, y.getMessageAriaDescribedBy)(g),
    ej = (0, d.useStateFromStores)([h.default], () => h.default.getMessage(N), [N]),
    ek = (0, b.default)({
      message: g,
      channel: K
    }),
    eF = null != ej;
  l = g.type === W.MessageTypes.CUSTOM_GIFT ? "" : !eS && eF ? (0, k.default)(e, ev) : (0, U.default)(e, ev, eS);
  let eH = g.id === Q,
    eU = (0, s.jsx)(c.FocusRing, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, s.jsx)("li", {
        id: r,
        className: z.messageListItem,
        "aria-setsize": -1,
        children: (0, s.jsx)(_.default, {
          ...en,
          "aria-setsize": -1,
          "aria-roledescription": Z.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION,
          "aria-labelledby": eP,
          "aria-describedby": eb,
          onFocus: eE,
          onBlur: eg,
          onContextMenu: eu,
          onKeyDown: eL,
          onClick: ed,
          compact: X,
          contentOnly: $,
          className: i(q, {
            [z.message]: !0,
            [z.cozyMessage]: !X,
            [z.mentioned]: g.mentioned && !(0, v.default)(g),
            [z.ephemeral]: (0, M.hasFlag)(g.flags, W.MessageFlags.EPHEMERAL),
            [z.systemMessage]: (0, v.default)(g),
            [z.groupStart]: !$ && (eH || g.type === W.MessageTypes.REPLY),
            [z.selected]: eA,
            [z.replying]: (null == eR ? void 0 : eR.message.id) === g.id,
            [z.interactionSending]: g.isCommandType() && g.state === W.MessageStates.SENDING,
            [z.automodMessage]: eF
          }),
          zalgo: !eS,
          childrenRepliedMessage: $ ? void 0 : (0, B.default)(e, eo, ei, ee, el),
          childrenExecutedCommand: (0, G.default)(e, eo, ei),
          childrenHeader: $ ? void 0 : (0, H.default)({
            messageProps: e,
            setPopout: eo,
            messagePopouts: ei,
            replyReference: ee,
            author: ey,
            repliedMessage: el,
            roleIcon: eD
          }),
          childrenAccessories: (0, j.default)({
            channelMessageProps: e,
            hasSpoilerEmbeds: ex,
            handleContextMenu: eu,
            isInteracting: e_,
            isAutomodBlockedMessage: eF
          }),
          childrenButtons: eh || em ? (0, F.default)({
            buttonProps: e,
            setPopout: eo,
            messagePopouts: ei,
            isFocused: eC || ep
          }) : void 0,
          childrenSystemMessage: (0, V.default)(e),
          childrenMessageContent: l,
          onMouseMove: ec,
          onMouseLeave: ef,
          hasThread: !$ && g.hasFlag(W.MessageFlags.HAS_THREAD) && null != eM,
          isSystemMessage: (0, v.default)(g),
          hasReply: g.type === W.MessageTypes.REPLY,
          messageRef: ek
        })
      })
    });
  return null != eO ? (0, s.jsx)(L.default, {
    flashKey: eO,
    className: i({
      [z.backgroundFlash]: !0,
      [z.groupStart]: !X && g.id === Q
    }),
    children: eU
  }, "bg-flash-".concat(r)) : eU
})