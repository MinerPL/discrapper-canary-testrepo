"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
  }
}), n("702976");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("963119"),
  u = n("45476"),
  d = n("634807"),
  c = n("467475"),
  f = n("985883"),
  h = n("256572"),
  E = n("845579"),
  m = n("42203"),
  p = n("27618"),
  S = n("945330"),
  g = n("780571"),
  N = n("304198"),
  _ = n("568734"),
  T = n("299039"),
  I = n("654017"),
  C = n("913491"),
  A = n("574073"),
  M = n("359132"),
  v = n("723931"),
  R = n("39331"),
  x = n("68480"),
  L = n("596368"),
  O = n("227439"),
  b = n("862451"),
  y = n("611792"),
  j = n("554372"),
  F = n("49111"),
  D = n("782340"),
  U = n("864604"),
  P = n("5762"),
  k = l.memo(function e(t) {
    var n;
    let l;
    let {
      channel: s,
      message: S,
      compact: N = !1,
      className: U,
      onContextMenu: k,
      onClick: G,
      disableInteraction: B = !1,
      hasThread: H,
      treatSpam: V
    } = t, Y = F.MessageTypesWithLazyLoadedReferences.has(S.type) ? S.messageReference : void 0, z = (0, r.useStateFromStores)([h.default], () => h.default.getMessageByReference(Y)), K = (0, r.useStateFromStores)([m.default], () => S.type === F.MessageTypes.THREAD_STARTER_MESSAGE && z.state === h.ReferencedMessageState.LOADED ? m.default.getChannel(z.message.channel_id) : null), W = E.InlineAttachmentMedia.useSetting(), Q = E.InlineEmbedMedia.useSetting(), X = E.RenderEmbeds.useSetting(), q = E.GifAutoPlay.useSetting(), Z = (0, d.isMessageNewerThanImprovedMarkdownEpoch)((null !== (n = S.editedTimestamp) && void 0 !== n ? n : S.timestamp).valueOf()), J = (0, c.default)(null == s ? void 0 : s.id), {
      disableReactionCreates: $
    } = (0, M.default)(s), {
      content: ee,
      hasSpoilerEmbeds: et
    } = (0, R.default)(S, {
      hideSimpleEmbedContent: Q && X,
      allowList: Z,
      allowHeading: Z,
      allowLinks: !0,
      previewLinkTarget: !0
    }), en = (0, A.default)(S), ea = (0, r.useStateFromStores)([m.default], () => S.hasFlag(F.MessageFlags.HAS_THREAD) && m.default.getChannel(T.default.castMessageIdAsChannelId(S.id))), el = S.type === F.MessageTypes.THREAD_STARTER_MESSAGE && z.state === h.ReferencedMessageState.LOADED && null != K, es = !el && void 0 === l, ei = (0, x.default)({
      message: S,
      channel: s,
      enabled: es
    }), er = (0, o.useShouldRedactExplicitContent)(s.id, S.author.id), eo = (0, u.useShouldRenderReportFalsePositiveButton)(S.id), eu = (0, f.default)(S);
    return el ? (0, a.jsx)(e, {
      ...t,
      message: z.message,
      channel: K,
      hasThread: !1
    }) : (p.default.isBlocked(S.author.id) ? l = D.default.Messages.BLOCKED_MESSAGE_COUNT : (0, I.isSpam)(S) && V && (l = D.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== l) ? (0, a.jsx)(w, {
      className: U,
      compact: N,
      count: 1,
      collapsedReason: l
    }) : (0, a.jsx)(g.default, {
      compact: N,
      className: i(U, {
        [P.ephemeral]: (0, _.hasFlag)(S.flags, F.MessageFlags.EPHEMERAL),
        [P.disableInteraction]: B,
        [P.groupStart]: t.isGroupStart
      }),
      childrenRepliedMessage: (0, j.default)(S, s, Y, z, N),
      childrenHeader: (0, O.default)({
        ...t,
        author: en,
        guildId: s.guild_id
      }),
      childrenAccessories: (0, a.jsx)(v.MessageAccessories, {
        channel: s,
        message: S,
        hasSpoilerEmbeds: et,
        compact: N,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        disableReactionReads: !1,
        disableReactionCreates: $,
        disableReactionUpdates: !1,
        renderThreadAccessory: H,
        renderComponentAccessory: !1,
        inlineAttachmentMedia: W,
        inlineEmbedMedia: Q,
        renderEmbeds: X,
        gifAutoPlay: q,
        poll: eu,
        showListsAndHeaders: Z,
        showMaskedLinks: Z,
        shouldHideMediaOptions: J,
        shouldRedactExplicitContent: er,
        shouldRenderCtaButton: eo
      }),
      childrenExecutedCommand: (0, y.default)(S, s, N),
      childrenMessageContent: (0, L.default)(t, ee),
      childrenSystemMessage: (0, b.default)(t),
      onContextMenu: k,
      onClick: G,
      hasThread: !1 !== H && null != ea && S.hasFlag(F.MessageFlags.HAS_THREAD),
      hasReply: S.type === F.MessageTypes.REPLY,
      isSystemMessage: (0, C.default)(S),
      messageRef: ei
    })
  });

function w(e) {
  let {
    className: t,
    count: n,
    compact: l,
    collapsedReason: s
  } = e;
  return (0, a.jsx)(g.default, {
    className: t,
    compact: l,
    role: "group",
    childrenMessageContent: (0, a.jsx)(N.default, {
      compact: l,
      className: U.blockedSystemMessage,
      iconNode: (0, a.jsx)(S.default, {
        className: U.blockedIcon
      }),
      children: (0, a.jsx)("div", {
        className: U.blockedMessageText,
        children: s.format({
          count: n
        })
      })
    })
  })
}