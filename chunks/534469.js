"use strict";
n.r(t), n.d(t, {
  ThreadStarterChatMessage: function() {
    return q
  },
  getElementFromMessage: function() {
    return Z
  }
}), n("789020");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
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
  T = n("906467"),
  I = n("323873"),
  A = n("998951"),
  N = n("630388"),
  v = n("709054"),
  x = n("534091"),
  M = n("901461"),
  R = n("739566"),
  L = n("233715"),
  y = n("453687"),
  O = n("348238"),
  j = n("62072"),
  P = n("38267"),
  D = n("25015"),
  b = n("689674"),
  U = n("438075"),
  F = n("764893"),
  w = n("481363"),
  k = n("900902"),
  H = n("252032"),
  B = n("737243"),
  G = n("614584"),
  V = n("295790"),
  W = n("959517"),
  Y = n("981631"),
  z = n("689938"),
  K = n("913144");

function Z(e, t, n) {
  return e.getElementById((0, x.getMessageDOMId)(t, n))
}

function q(e) {
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
  o()(l.type === Y.MessageTypes.THREAD_STARTER_MESSAGE, "Message must be a thread starter message");
  let {
    ...f
  } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""), h = (0, d.useStateFromStores)([C.default], () => C.default.getMessageByReference(s)), {
    popouts: m,
    setPopout: p
  } = (0, P.default)(l.id, W.DEFAULT_POPOUTS), E = (0, R.default)(l), g = (0, y.getMessageAriaLabelledBy)(l), S = (0, y.getMessageAriaDescribedBy)(l);
  return l.type === Y.MessageTypes.THREAD_STARTER_MESSAGE && null != h && h.state === C.ReferencedMessageState.LOADED ? (0, a.jsx)(X, {
    ...e,
    message: h.message,
    groupId: h.message.id
  }) : (0, a.jsx)(A.default, {
    ...f,
    id: n,
    compact: r,
    className: i()(c, {
      [K.message]: !0,
      [K.cozyMessage]: !r,
      [K.systemMessage]: !0,
      [K.groupStart]: !0
    }),
    childrenHeader: (0, k.default)({
      messageProps: e,
      setPopout: p,
      messagePopouts: m,
      replyReference: s,
      author: E
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
    groupId: I
  } = e, v = r.type === Y.MessageTypes.REPLY ? r.messageReference : void 0, {
    onFocus: x,
    ...L
  } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""), {
    isFocused: b,
    handleFocus: F,
    handleBlur: w
  } = (0, O.useFocusInside)(x), {
    popouts: B,
    selected: Z,
    setPopout: q
  } = (0, P.default)(r.id, W.DEFAULT_POPOUTS), X = S.InlineEmbedMedia.useSetting(), Q = S.RenderEmbeds.useSetting(), J = (0, d.useStateFromStores)([C.default], () => C.default.getMessageByReference(v)), $ = (0, p.isMessageNewerThanImprovedMarkdownEpoch)((null !== (n = r.editedTimestamp) && void 0 !== n ? n : r.timestamp).valueOf()), {
    handleMouseEnter: ee,
    handleMouseLeave: et,
    isHovered: en
  } = (0, O.useHoveredMessage)(I, r.author.id, Z), ea = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled), el = Z || ea && b, es = el || en, {
    content: ei,
    hasSpoilerEmbeds: er
  } = (0, D.default)(r, {
    hideSimpleEmbedContent: X && Q,
    isInteracting: es,
    formatInline: !1,
    allowList: $,
    allowHeading: $,
    allowLinks: !0,
    previewLinkTarget: !0
  }), eo = (0, j.default)(o, h, ea), eu = (0, R.default)(r), ed = (0, y.getMessageAriaLabelledBy)(r, I), ec = (0, y.getMessageAriaDescribedBy)(r), ef = (0, H.default)(e, ei, !1), eh = l.useCallback(() => (0, g.transitionToGuild)(E, h, o), [E, h, o]), em = (0, m.useRoleIcon)({
    guildId: E,
    roleId: eu.iconRoleId
  });
  return (0, a.jsxs)("div", {
    className: K.quotedChatMessage,
    children: [(0, a.jsx)(c.Clickable, {
      className: K.jump,
      onClick: eh,
      "aria-label": z.default.Messages.JUMP,
      children: z.default.Messages.JUMP
    }), (0, a.jsx)(A.default, {
      ...L,
      id: s,
      compact: _,
      className: i()(T, {
        [K.message]: !0,
        [K.cozyMessage]: !_,
        [K.mentioned]: r.mentioned,
        [K.ephemeral]: (0, N.hasFlag)(r.flags, Y.MessageFlags.EPHEMERAL),
        [K.systemMessage]: (0, M.default)(r),
        [K.groupStart]: r.id === I || r.type === Y.MessageTypes.REPLY,
        [K.selected]: el
      }),
      zalgo: !0,
      onKeyDown: eo,
      onFocus: F,
      onBlur: w,
      childrenRepliedMessage: (0, G.default)(e, q, B, v, J),
      childrenHeader: (0, k.default)({
        messageProps: e,
        setPopout: q,
        messagePopouts: B,
        replyReference: v,
        author: eu,
        repliedMessage: J,
        roleIcon: em
      }),
      childrenAccessories: (0, U.default)({
        channelMessageProps: e,
        hasSpoilerEmbeds: er,
        isInteracting: es,
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
t.default = l.memo(function(e) {
  var t, n;
  let s;
  let {
    id: r,
    message: g,
    message: {
      id: x
    },
    channel: Z,
    channel: {
      id: q
    },
    compact: X = !1,
    className: Q,
    flashKey: J,
    groupId: $,
    renderContentOnly: ee
  } = e;
  o()(g.type !== Y.MessageTypes.THREAD_STARTER_MESSAGE, "Message must not be a thread starter message");
  let et = Y.MessageTypesWithLazyLoadedReferences.has(g.type) ? g.messageReference : void 0,
    {
      onFocus: en,
      ...ea
    } = (0, u.useListItem)(null !== (t = e.id) && void 0 !== t ? t : ""),
    el = S.InlineEmbedMedia.useSetting(),
    es = S.RenderEmbeds.useSetting(),
    ei = (0, d.useStateFromStores)([C.default], () => C.default.getMessageByReference(et)),
    {
      popouts: er,
      selected: eo,
      setPopout: eu
    } = (0, P.default)(g.id, W.DEFAULT_POPOUTS),
    ed = (0, O.useContextMenuMessage)(g, Z, eu),
    ec = (0, O.useClickMessage)(g, Z),
    {
      handleMouseEnter: ef,
      handleMouseLeave: eh,
      hasHovered: em,
      isHovered: ep
    } = (0, O.useHoveredMessage)($, g.author.id, eo),
    {
      isFocused: eE,
      hasFocused: eC,
      handleFocus: eg,
      handleBlur: eS
    } = (0, O.useFocusInside)(en),
    e_ = (0, d.useStateFromStores)([I.default], () => I.default.isEditing(q, x), [q, x]),
    eT = (0, d.useStateFromStores)([f.default], () => f.default.keyboardModeEnabled),
    eI = eo || e_ || eT && eE,
    eA = eI || ep,
    eN = (0, d.useStateFromStores)([_.default], () => g.hasFlag(Y.MessageFlags.HAS_THREAD) && _.default.getChannel(v.default.castMessageIdAsChannelId(g.id))),
    ev = g.isFirstMessageInForumPost(Z),
    ex = (0, p.isMessageNewerThanImprovedMarkdownEpoch)((null !== (n = g.editedTimestamp) && void 0 !== n ? n : g.timestamp).valueOf()),
    eM = (0, d.useStateFromStores)([T.default], () => T.default.isDeveloper),
    {
      content: eR,
      hasSpoilerEmbeds: eL
    } = (0, D.default)(g, {
      hideSimpleEmbedContent: el && es,
      isInteracting: eA,
      formatInline: !1,
      allowList: ev || ex,
      allowHeading: ev || ex,
      allowLinks: !0,
      allowDevLinks: eM,
      previewLinkTarget: !0
    }),
    ey = (0, j.default)(x, q, eT),
    eO = (0, R.default)(g),
    ej = (0, d.useStateFromStores)([E.default], () => E.default.getPendingReply(q)),
    eP = function(e) {
      let t = l.useRef(e);
      return l.useEffect(() => void(t.current = null != e ? e : t.current)), null != e ? e : t.current
    }(J),
    eD = (0, m.useRoleIcon)({
      guildId: Z.guild_id,
      roleId: eO.iconRoleId
    }),
    eb = (0, y.getMessageAriaLabelledBy)(g, $),
    eU = (0, y.getMessageAriaDescribedBy)(g),
    eF = (0, d.useStateFromStores)([h.default], () => h.default.getMessage(x), [x]),
    ew = (0, b.default)({
      message: g,
      channel: Z
    }),
    ek = null != eF;
  s = g.type === Y.MessageTypes.CUSTOM_GIFT ? "" : !e_ && ek ? (0, F.default)(e, eR) : (0, H.default)(e, eR, e_);
  let eH = g.id === $,
    eB = (0, a.jsx)(c.FocusRing, {
      offset: {
        left: 4,
        right: 4
      },
      children: (0, a.jsx)("li", {
        id: r,
        className: K.messageListItem,
        "aria-setsize": -1,
        children: (0, a.jsx)(A.default, {
          ...ea,
          "aria-setsize": -1,
          "aria-roledescription": z.default.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION,
          "aria-labelledby": eb,
          "aria-describedby": eU,
          onFocus: eg,
          onBlur: eS,
          onContextMenu: ed,
          onKeyDown: ey,
          onClick: ec,
          compact: X,
          contentOnly: ee,
          className: i()(Q, {
            [K.message]: !0,
            [K.cozyMessage]: !X,
            [K.mentioned]: g.mentioned,
            [K.ephemeral]: (0, N.hasFlag)(g.flags, Y.MessageFlags.EPHEMERAL),
            [K.systemMessage]: (0, M.default)(g),
            [K.groupStart]: !ee && (eH || g.type === Y.MessageTypes.REPLY),
            [K.selected]: eI,
            [K.replying]: (null == ej ? void 0 : ej.message.id) === g.id,
            [K.interactionSending]: g.isCommandType() && g.state === Y.MessageStates.SENDING,
            [K.automodMessage]: ek
          }),
          zalgo: !e_,
          childrenRepliedMessage: ee ? void 0 : (0, G.default)(e, eu, er, et, ei),
          childrenExecutedCommand: (0, B.default)(e, eu, er),
          childrenHeader: ee ? void 0 : (0, k.default)({
            messageProps: e,
            setPopout: eu,
            messagePopouts: er,
            replyReference: et,
            author: eO,
            repliedMessage: ei,
            roleIcon: eD
          }),
          childrenAccessories: (0, U.default)({
            channelMessageProps: e,
            hasSpoilerEmbeds: eL,
            handleContextMenu: ed,
            isInteracting: eA,
            isAutomodBlockedMessage: ek
          }),
          childrenButtons: em || eC ? (0, w.default)({
            buttonProps: e,
            setPopout: eu,
            messagePopouts: er,
            isFocused: ep || eE
          }) : void 0,
          childrenSystemMessage: (0, V.default)(e),
          childrenMessageContent: s,
          onMouseMove: ef,
          onMouseLeave: eh,
          hasThread: !ee && g.hasFlag(Y.MessageFlags.HAS_THREAD) && null != eN,
          isSystemMessage: (0, M.default)(g),
          hasReply: g.type === Y.MessageTypes.REPLY,
          messageRef: ew
        })
      })
    });
  return null != eP ? (0, a.jsx)(L.default, {
    flashKey: eP,
    className: i()({
      [K.backgroundFlash]: !0,
      [K.groupStart]: !X && g.id === $
    }),
    children: eB
  }, "bg-flash-".concat(r)) : eB
})