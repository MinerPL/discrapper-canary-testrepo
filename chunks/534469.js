"use strict";
n.r(t), n.d(t, {
  ThreadStarterChatMessage: function() {
    return K
  },
  getElementFromMessage: function() {
    return Z
  }
}), n("789020");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("512722"),
  o = n.n(r),
  u = n("924826"),
  d = n("442837"),
  c = n("481060"),
  f = n("607070"),
  h = n("223606"),
  m = n("518738"),
  p = n("628238"),
  E = n("807092"),
  C = n("869765"),
  g = n("703656"),
  S = n("695346"),
  _ = n("592125"),
  T = n("323873"),
  I = n("998951"),
  A = n("630388"),
  v = n("709054"),
  N = n("534091"),
  x = n("901461"),
  M = n("739566"),
  R = n("233715"),
  L = n("453687"),
  y = n("348238"),
  O = n("62072"),
  j = n("38267"),
  P = n("25015"),
  D = n("689674"),
  b = n("438075"),
  U = n("764893"),
  F = n("481363"),
  w = n("900902"),
  k = n("252032"),
  H = n("737243"),
  B = n("614584"),
  G = n("295790"),
  V = n("959517"),
  W = n("981631"),
  Y = n("689938"),
  z = n("264558");

function Z(e, t, n) {
  return e.getElementById((0, N.getMessageDOMId)(t, n))
}

function K(e) {
  var t;
  let {
    id: n,
    message: l,
    message: {
      messageReference: s
    },
    compact: r = !1,
    className: c
  } = e;
  o()(l.type === W.MessageTypes.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
  let {
    ...f
  } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""), h = (0, d.useStateFromStores)([C.default], () => C.default.getMessageByReference(s)), {
    popouts: m,
    setPopout: p
  } = (0, j.default)(l.id, V.DEFAULT_POPOUTS), E = (0, M.default)(l), g = (0, L.getMessageAriaLabelledBy)(l), S = (0, L.getMessageAriaDescribedBy)(l);
  return l.type === W.MessageTypes.THREAD_STARTER_MESSAGE && null != h && h.state === C.ReferencedMessageState.LOADED ? (0, a.jsx)(X, {
    ...e,
    message: h.message,
    groupId: h.message.id
  }) : (0, a.jsx)(I.default, {
    ...f,
    id: n,
    compact: r,
    className: i()(c, {
      [z.message]: !0,
      [z.cozyMessage]: !r,
      [z.systemMessage]: !0,
      [z.groupStart]: !0
    }),
    childrenHeader: (0, w.default)({
      messageProps: e,
      setPopout: p,
      messagePopouts: m,
      replyReference: s,
      author: E
    }),
    childrenSystemMessage: (0, G.default)(e),
    childrenMessageContent: null,
    "aria-labelledby": g,
    "aria-describedby": S,
    hasThread: !1
  })
}

function X(e) {
  var t, n;
  let {
    id: s,
    message: r,
    message: {
      id: o,
      channel_id: h
    },
    channel: {
      guild_id: E
    },
    compact: _ = !1,
    className: T,
    groupId: v
  } = e, N = r.type === W.MessageTypes.REPLY ? r.messageReference : void 0, {
    onFocus: R,
    ...D
  } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""), {
    isFocused: U,
    handleFocus: F,
    handleBlur: H
  } = (0, y.useFocusInside)(R), {
    popouts: Z,
    selected: K,
    setPopout: X
  } = (0, j.default)(r.id, V.DEFAULT_POPOUTS), q = S.InlineEmbedMedia.useSetting(), Q = S.RenderEmbeds.useSetting(), J = (0, d.useStateFromStores)([C.default], () => C.default.getMessageByReference(N)), $ = (0, p.isMessageNewerThanImprovedMarkdownEpoch)((null !== (n = r.editedTimestamp) && void 0 !== n ? n : r.timestamp).valueOf()), {
    handleMouseEnter: ee,
    handleMouseLeave: et,
    isHovered: en
  } = (0, y.useHoveredMessage)(v, r.author.id, K), ea = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled), el = K || ea && U, es = el || en, {
    content: ei,
    hasSpoilerEmbeds: er
  } = (0, P.default)(r, {
    hideSimpleEmbedContent: q && Q,
    isInteracting: es,
    formatInline: !1,
    allowList: $,
    allowHeading: $,
    allowLinks: !0,
    previewLinkTarget: !0
  }), eo = (0, O.default)(o, h, ea), eu = (0, M.default)(r), ed = (0, L.getMessageAriaLabelledBy)(r, v), ec = (0, L.getMessageAriaDescribedBy)(r), ef = (0, k.default)(e, ei, !1), eh = l.useCallback(() => (0, g.transitionToGuild)(E, h, o), [E, h, o]), em = (0, m.useRoleIcon)({
    guildId: E,
    roleId: eu.iconRoleId
  });
  return (0, a.jsxs)("div", {
    className: z.quotedChatMessage,
    children: [(0, a.jsx)(c.Clickable, {
      className: z.jump,
      onClick: eh,
      "aria-label": Y.default.Messages.JUMP,
      children: Y.default.Messages.JUMP
    }), (0, a.jsx)(I.default, {
      ...D,
      id: s,
      compact: _,
      className: i()(T, {
        [z.message]: !0,
        [z.cozyMessage]: !_,
        [z.mentioned]: r.mentioned && !(0, x.default)(r),
        [z.ephemeral]: (0, A.hasFlag)(r.flags, W.MessageFlags.EPHEMERAL),
        [z.systemMessage]: (0, x.default)(r),
        [z.groupStart]: r.id === v || r.type === W.MessageTypes.REPLY,
        [z.selected]: el
      }),
      zalgo: !0,
      onKeyDown: eo,
      onFocus: F,
      onBlur: H,
      childrenRepliedMessage: (0, B.default)(e, X, Z, N, J),
      childrenHeader: (0, w.default)({
        messageProps: e,
        setPopout: X,
        messagePopouts: Z,
        replyReference: N,
        author: eu,
        repliedMessage: J,
        roleIcon: em
      }),
      childrenAccessories: (0, b.default)({
        channelMessageProps: e,
        hasSpoilerEmbeds: er,
        isInteracting: es,
        renderThreadAccessory: !1,
        renderComponentAccessory: !1,
        renderSuppressEmbeds: !1
      }),
      childrenSystemMessage: (0, G.default)(e),
      childrenMessageContent: ef,
      onMouseMove: ee,
      onMouseLeave: et,
      "aria-labelledby": ed,
      "aria-describedby": ec,
      hasThread: !1
    })]
  })
}
t.default = l.memo(function(e) {
  var t, n;
  let s;
  let {
    id: r,
    message: g,
    message: {
      id: N
    },
    channel: Z,
    channel: {
      id: K
    },
    compact: X = !1,
    className: q,
    flashKey: Q,
    groupId: J,
    renderContentOnly: $
  } = e;
  o()(g.type !== W.MessageTypes.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
  let ee = W.MessageTypesWithLazyLoadedReferences.has(g.type) ? g.messageReference : void 0,
    {
      onFocus: et,
      ...en
    } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""),
    ea = S.InlineEmbedMedia.useSetting(),
    el = S.RenderEmbeds.useSetting(),
    es = (0, d.useStateFromStores)([C.default], () => C.default.getMessageByReference(ee)),
    {
      popouts: ei,
      selected: er,
      setPopout: eo
    } = (0, j.default)(g.id, V.DEFAULT_POPOUTS),
    eu = (0, y.useContextMenuMessage)(g, Z, eo),
    ed = (0, y.useClickMessage)(g, Z),
    {
      handleMouseEnter: ec,
      handleMouseLeave: ef,
      hasHovered: eh,
      isHovered: em
    } = (0, y.useHoveredMessage)(J, g.author.id, er),
    {
      isFocused: ep,
      hasFocused: eE,
      handleFocus: eC,
      handleBlur: eg
    } = (0, y.useFocusInside)(et),
    eS = (0, d.useStateFromStores)([T.default], () => T.default.isEditing(K, N), [K, N]),
    e_ = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled),
    eT = er || eS || e_ && ep,
    eI = eT || em,
    eA = (0, d.useStateFromStores)([_.default], () => g.hasFlag(W.MessageFlags.HAS_THREAD) && _.default.getChannel(v.default.castMessageIdAsChannelId(g.id))),
    ev = g.isFirstMessageInForumPost(Z),
    eN = (0, p.isMessageNewerThanImprovedMarkdownEpoch)((null !== (n = g.editedTimestamp) && void 0 !== n ? n : g.timestamp).valueOf()),
    {
      content: ex,
      hasSpoilerEmbeds: eM
    } = (0, P.default)(g, {
      hideSimpleEmbedContent: ea && el,
      isInteracting: eI,
      formatInline: !1,
      allowList: ev || eN,
      allowHeading: ev || eN,
      allowLinks: !0,
      previewLinkTarget: !0
    }),
    eR = (0, O.default)(N, K, e_),
    eL = (0, M.default)(g),
    ey = (0, d.useStateFromStores)([E.default], () => E.default.getPendingReply(K)),
    eO = function(e) {
      let t = l.useRef(e);
      return l.useEffect(() => void(t.current = null != e ? e : t.current)), null != e ? e : t.current
    }(Q),
    ej = (0, m.useRoleIcon)({
      guildId: Z.guild_id,
      roleId: eL.iconRoleId
    }),
    eP = (0, L.getMessageAriaLabelledBy)(g, J),
    eD = (0, L.getMessageAriaDescribedBy)(g),
    eb = (0, d.useStateFromStores)([h.default], () => h.default.getMessage(N), [N]),
    eU = (0, D.default)({
      message: g,
      channel: Z
    }),
    eF = null != eb;
  s = g.type === W.MessageTypes.CUSTOM_GIFT ? "" : !eS && eF ? (0, U.default)(e, ex) : (0, k.default)(e, ex, eS);
  let ew = g.id === J,
    ek = (0, a.jsx)(c.FocusRing, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, a.jsx)("li", {
        id: r,
        className: z.messageListItem,
        "aria-setsize": -1,
        children: (0, a.jsx)(I.default, {
          ...en,
          "aria-setsize": -1,
          "aria-roledescription": Y.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION,
          "aria-labelledby": eP,
          "aria-describedby": eD,
          onFocus: eC,
          onBlur: eg,
          onContextMenu: eu,
          onKeyDown: eR,
          onClick: ed,
          compact: X,
          contentOnly: $,
          className: i()(q, {
            [z.message]: !0,
            [z.cozyMessage]: !X,
            [z.mentioned]: g.mentioned && !(0, x.default)(g),
            [z.ephemeral]: (0, A.hasFlag)(g.flags, W.MessageFlags.EPHEMERAL),
            [z.systemMessage]: (0, x.default)(g),
            [z.groupStart]: !$ && (ew || g.type === W.MessageTypes.REPLY),
            [z.selected]: eT,
            [z.replying]: (null == ey ? void 0 : ey.message.id) === g.id,
            [z.interactionSending]: g.isCommandType() && g.state === W.MessageStates.SENDING,
            [z.automodMessage]: eF
          }),
          zalgo: !eS,
          childrenRepliedMessage: $ ? void 0 : (0, B.default)(e, eo, ei, ee, es),
          childrenExecutedCommand: (0, H.default)(e, eo, ei),
          childrenHeader: $ ? void 0 : (0, w.default)({
            messageProps: e,
            setPopout: eo,
            messagePopouts: ei,
            replyReference: ee,
            author: eL,
            repliedMessage: es,
            roleIcon: ej
          }),
          childrenAccessories: (0, b.default)({
            channelMessageProps: e,
            hasSpoilerEmbeds: eM,
            handleContextMenu: eu,
            isInteracting: eI,
            isAutomodBlockedMessage: eF
          }),
          childrenButtons: eh || eE ? (0, F.default)({
            buttonProps: e,
            setPopout: eo,
            messagePopouts: ei,
            isFocused: em || ep
          }) : void 0,
          childrenSystemMessage: (0, G.default)(e),
          childrenMessageContent: s,
          onMouseMove: ec,
          onMouseLeave: ef,
          hasThread: !$ && g.hasFlag(W.MessageFlags.HAS_THREAD) && null != eA,
          isSystemMessage: (0, x.default)(g),
          hasReply: g.type === W.MessageTypes.REPLY,
          messageRef: eU
        })
      })
    });
  return null != eO ? (0, a.jsx)(R.default, {
    flashKey: eO,
    className: i()({
      [z.backgroundFlash]: !0,
      [z.groupStart]: !X && g.id === J
    }),
    children: ek
  }, "bg-flash-".concat(r)) : ek
})