"use strict";
n.r(t), n("789020");
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("442837"),
  o = n("25610"),
  u = n("703751"),
  d = n("628238"),
  c = n("976853"),
  f = n("977683"),
  E = n("869765"),
  _ = n("695346"),
  T = n("592125"),
  m = n("699516"),
  I = n("465670"),
  p = n("998951"),
  h = n("702346"),
  N = n("630388"),
  S = n("709054"),
  C = n("493892"),
  A = n("901461"),
  g = n("739566"),
  M = n("443877"),
  R = n("938353"),
  O = n("25015"),
  v = n("689674"),
  L = n("963550"),
  x = n("845080"),
  D = n("295790"),
  P = n("145807"),
  y = n("56744"),
  U = n("981631"),
  b = n("689938"),
  j = n("331225"),
  G = n("264558");

function B(e) {
  let {
    className: t,
    count: n,
    compact: a,
    collapsedReason: l
  } = e;
  return (0, s.jsx)(p.default, {
    className: t,
    compact: a,
    role: "group",
    childrenMessageContent: (0, s.jsx)(h.default, {
      compact: a,
      className: j.blockedSystemMessage,
      iconNode: (0, s.jsx)(I.default, {
        className: j.blockedIcon
      }),
      children: (0, s.jsx)("div", {
        className: j.blockedMessageText,
        children: l.format({
          count: n
        })
      })
    })
  })
}
t.default = a.memo(function e(t) {
  var n;
  let a;
  let {
    channel: l,
    message: I,
    compact: h = !1,
    className: j,
    onContextMenu: F,
    onClick: k,
    disableInteraction: w = !1,
    hasThread: H,
    treatSpam: V
  } = t, Y = U.MessageTypesWithLazyLoadedReferences.has(I.type) ? I.messageReference : void 0, K = (0, r.useStateFromStores)([E.default], () => E.default.getMessageByReference(Y)), W = (0, r.useStateFromStores)([T.default], () => I.type === U.MessageTypes.THREAD_STARTER_MESSAGE && K.state === E.ReferencedMessageState.LOADED ? T.default.getChannel(K.message.channel_id) : null), z = _.InlineAttachmentMedia.useSetting(), Q = _.InlineEmbedMedia.useSetting(), q = _.RenderEmbeds.useSetting(), J = _.GifAutoPlay.useSetting(), X = (0, d.isMessageNewerThanImprovedMarkdownEpoch)((null !== (n = I.editedTimestamp) && void 0 !== n ? n : I.timestamp).valueOf()), Z = (0, c.default)(null == l ? void 0 : l.id), {
    disableReactionCreates: $
  } = (0, M.default)(l), {
    content: ee,
    hasSpoilerEmbeds: et
  } = (0, O.default)(I, {
    hideSimpleEmbedContent: Q && q,
    allowList: X,
    allowHeading: X,
    allowLinks: !0,
    previewLinkTarget: !0
  }), en = (0, g.default)(I), es = (0, r.useStateFromStores)([T.default], () => I.hasFlag(U.MessageFlags.HAS_THREAD) && T.default.getChannel(S.default.castMessageIdAsChannelId(I.id))), ea = I.type === U.MessageTypes.THREAD_STARTER_MESSAGE && K.state === E.ReferencedMessageState.LOADED && null != W, el = !ea && void 0 === a, ei = (0, v.default)({
    message: I,
    channel: l,
    enabled: el
  }), er = (0, o.useShouldRedactExplicitContent)(l.id, I.author.id), eo = (0, u.useShouldRenderReportFalsePositiveButton)(I.id), eu = (0, f.default)(I);
  return ea ? (0, s.jsx)(e, {
    ...t,
    message: K.message,
    channel: W,
    hasThread: !1
  }) : (m.default.isBlocked(I.author.id) ? a = b.default.Messages.BLOCKED_MESSAGE_COUNT : (0, C.isSpam)(I) && V && (a = b.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== a) ? (0, s.jsx)(B, {
    className: j,
    compact: h,
    count: 1,
    collapsedReason: a
  }) : (0, s.jsx)(p.default, {
    compact: h,
    className: i()(j, {
      [G.ephemeral]: (0, N.hasFlag)(I.flags, U.MessageFlags.EPHEMERAL),
      [G.disableInteraction]: w,
      [G.groupStart]: t.isGroupStart
    }),
    childrenRepliedMessage: (0, y.default)(I, l, Y, K, h),
    childrenHeader: (0, x.default)({
      ...t,
      author: en,
      guildId: l.guild_id
    }),
    childrenAccessories: (0, s.jsx)(R.MessageAccessories, {
      channel: l,
      message: I,
      hasSpoilerEmbeds: et,
      compact: h,
      canSuppressEmbeds: !1,
      canDeleteAttachments: !1,
      disableReactionReads: !1,
      disableReactionCreates: $,
      disableReactionUpdates: !1,
      renderThreadAccessory: H,
      renderComponentAccessory: !1,
      inlineAttachmentMedia: z,
      inlineEmbedMedia: Q,
      renderEmbeds: q,
      gifAutoPlay: J,
      poll: eu,
      showListsAndHeaders: X,
      showMaskedLinks: X,
      shouldHideMediaOptions: Z,
      shouldRedactExplicitContent: er,
      shouldRenderCtaButton: eo
    }),
    childrenExecutedCommand: (0, P.default)(I, l, h),
    childrenMessageContent: (0, L.default)(t, ee),
    childrenSystemMessage: (0, D.default)(t),
    onContextMenu: F,
    onClick: k,
    hasThread: !1 !== H && null != es && I.hasFlag(U.MessageFlags.HAS_THREAD),
    hasReply: I.type === U.MessageTypes.REPLY,
    isSystemMessage: (0, A.default)(I),
    messageRef: ei
  })
})