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
  o = n("193865"),
  u = n("963119"),
  d = n("45476"),
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
  T = n("654017"),
  I = n("913491"),
  C = n("574073"),
  A = n("359132"),
  M = n("723931"),
  x = n("39331"),
  v = n("68480"),
  R = n("596368"),
  L = n("227439"),
  O = n("862451"),
  b = n("611792"),
  y = n("554372"),
  j = n("49111"),
  F = n("782340"),
  D = n("555821"),
  U = n("877671"),
  k = l.memo(function e(t) {
    var n, l, s;
    let S;
    let {
      channel: N,
      message: D,
      compact: k = !1,
      className: w,
      onContextMenu: G,
      onClick: B,
      disableInteraction: H = !1,
      hasThread: V,
      treatSpam: Y
    } = t, K = j.MessageTypesWithLazyLoadedReferences.has(D.type) ? D.messageReference : void 0, z = (0, r.useStateFromStores)([h.default], () => h.default.getMessageByReference(K)), Q = (0, r.useStateFromStores)([m.default], () => D.type === j.MessageTypes.THREAD_STARTER_MESSAGE && z.state === h.ReferencedMessageState.LOADED ? m.default.getChannel(z.message.channel_id) : null), W = E.InlineAttachmentMedia.useSetting(), X = E.InlineEmbedMedia.useSetting(), q = E.RenderEmbeds.useSetting(), Z = E.GifAutoPlay.useSetting(), J = (0, o.useShowImprovedMarkdownUserExperimentConfig)((null !== (n = D.editedTimestamp) && void 0 !== n ? n : D.timestamp).valueOf()), $ = (0, o.useShowImprovedMarkdownGuildExperimentConfig)(null !== (l = null == N ? void 0 : N.guild_id) && void 0 !== l ? l : "", (null !== (s = D.editedTimestamp) && void 0 !== s ? s : D.timestamp).valueOf()), ee = (0, c.default)(null == N ? void 0 : N.id), {
      disableReactionCreates: et
    } = (0, A.default)(N), {
      content: en,
      hasSpoilerEmbeds: ea
    } = (0, x.default)(D, {
      hideSimpleEmbedContent: X && q,
      allowList: J.showListsAndHeaders || $.showListsAndHeaders,
      allowHeading: J.showListsAndHeaders || $.showListsAndHeaders,
      allowLinks: J.showMaskedLinks || $.showMaskedLinks,
      previewLinkTarget: J.showMaskedLinks || $.showMaskedLinks
    }), el = (0, C.default)(D), es = (0, r.useStateFromStores)([m.default], () => D.hasFlag(j.MessageFlags.HAS_THREAD) && m.default.getChannel(D.id)), ei = D.type === j.MessageTypes.THREAD_STARTER_MESSAGE && z.state === h.ReferencedMessageState.LOADED && null != Q, er = !ei && void 0 === S, eo = (0, v.default)({
      message: D,
      channel: N,
      enabled: er
    }), eu = (0, u.useShouldRedactExplicitContent)(N.id, D.author.id), ed = (0, d.useShouldRenderReportFalsePositiveButton)(D.id, "inbox_message"), ec = (0, f.default)(D);
    return ei ? (0, a.jsx)(e, {
      ...t,
      message: z.message,
      channel: Q,
      hasThread: !1
    }) : (p.default.isBlocked(D.author.id) ? S = F.default.Messages.BLOCKED_MESSAGE_COUNT : (0, T.isSpam)(D) && Y && (S = F.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== S) ? (0, a.jsx)(P, {
      className: w,
      compact: k,
      count: 1,
      collapsedReason: S
    }) : (0, a.jsx)(g.default, {
      compact: k,
      className: i(w, {
        [U.ephemeral]: (0, _.hasFlag)(D.flags, j.MessageFlags.EPHEMERAL),
        [U.disableInteraction]: H,
        [U.groupStart]: t.isGroupStart
      }),
      childrenRepliedMessage: (0, y.default)(D, N, K, z, k),
      childrenHeader: (0, L.default)({
        ...t,
        author: el,
        guildId: N.guild_id
      }),
      childrenAccessories: (0, a.jsx)(M.MessageAccessories, {
        channel: N,
        message: D,
        hasSpoilerEmbeds: ea,
        compact: k,
        canSuppressEmbeds: !1,
        canDeleteAttachments: !1,
        disableReactionReads: !1,
        disableReactionCreates: et,
        disableReactionUpdates: !1,
        renderThreadAccessory: V,
        renderComponentAccessory: !1,
        inlineAttachmentMedia: W,
        inlineEmbedMedia: X,
        renderEmbeds: q,
        gifAutoPlay: Z,
        poll: ec,
        showListsAndHeaders: J.showListsAndHeaders || $.showListsAndHeaders,
        showMaskedLinks: J.showMaskedLinks || $.showMaskedLinks,
        shouldHideMediaOptions: ee,
        shouldRedactExplicitContent: eu,
        shouldRenderCtaButton: ed
      }),
      childrenExecutedCommand: (0, b.default)(D, N, k),
      childrenMessageContent: (0, R.default)(t, en),
      childrenSystemMessage: (0, O.default)(t),
      onContextMenu: G,
      onClick: B,
      hasThread: !1 !== V && null != es && D.hasFlag(j.MessageFlags.HAS_THREAD),
      hasReply: D.type === j.MessageTypes.REPLY,
      isSystemMessage: (0, I.default)(D),
      messageRef: eo
    })
  });

function P(e) {
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
      className: D.blockedSystemMessage,
      iconNode: (0, a.jsx)(S.default, {
        className: D.blockedIcon
      }),
      children: (0, a.jsx)("div", {
        className: D.blockedMessageText,
        children: s.format({
          count: n
        })
      })
    })
  })
}