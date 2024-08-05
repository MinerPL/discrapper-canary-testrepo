n(789020);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(442837),
  o = n(481060),
  c = n(25610),
  u = n(703751),
  d = n(628238),
  _ = n(976853),
  E = n(977683),
  I = n(869765),
  m = n(695346),
  T = n(592125),
  h = n(699516),
  N = n(702346),
  C = n(630388),
  f = n(709054),
  p = n(493892),
  g = n(901461),
  S = n(739566),
  A = n(443877),
  R = n(492593),
  O = n(938353),
  x = n(25015),
  M = n(689674),
  v = n(963550),
  L = n(845080),
  Z = n(295790),
  P = n(145807),
  D = n(56744),
  b = n(981631),
  j = n(689938),
  U = n(985359),
  y = n(848509);

function B(e) {
  let {
className: t,
count: n,
compact: s,
collapsedReason: a
  } = e;
  return (0, i.jsx)(R.Z, {
className: t,
compact: s,
role: 'group',
childrenMessageContent: (0, i.jsx)(N.Z, {
  compact: s,
  className: U.blockedSystemMessage,
  iconNode: (0, i.jsx)(o.CloseSmallIcon, {
    size: 'md',
    color: 'currentColor',
    className: U.blockedIcon
  }),
  children: (0, i.jsx)('div', {
    className: U.blockedMessageText,
    children: a.format({
      count: n
    })
  })
})
  });
}
t.Z = s.memo(function e(t) {
  var n;
  let s;
  let {
channel: a,
message: o,
compact: N = !1,
className: U,
onContextMenu: k,
onClick: G,
disableInteraction: F = !1,
hasThread: w,
treatSpam: V
  } = t, H = b.OBS.has(o.type) ? o.messageReference : void 0, Y = (0, l.e7)([I.Z], () => I.Z.getMessageByReference(H)), W = (0, l.e7)([T.Z], () => o.type === b.uaV.THREAD_STARTER_MESSAGE && Y.state === I.Y.LOADED ? T.Z.getChannel(Y.message.channel_id) : null), K = m.x4.useSetting(), z = m.RS.useSetting(), Q = m.NA.useSetting(), q = m.QK.useSetting(), X = (0, d.A)((null !== (n = o.editedTimestamp) && void 0 !== n ? n : o.timestamp).valueOf()), J = (0, _.Z)(null == a ? void 0 : a.id), {
disableReactionCreates: $
  } = (0, A.Z)(a), {
content: ee,
hasSpoilerEmbeds: et
  } = (0, x.Z)(o, {
hideSimpleEmbedContent: z && Q,
allowList: X,
allowHeading: X,
allowLinks: !0,
previewLinkTarget: !0
  }), en = (0, S.ZP)(o), ei = (0, l.e7)([T.Z], () => o.hasFlag(b.iLy.HAS_THREAD) && T.Z.getChannel(f.default.castMessageIdAsChannelId(o.id))), es = o.type === b.uaV.THREAD_STARTER_MESSAGE && Y.state === I.Y.LOADED && null != W, ea = !es && void 0 === s, er = (0, M.Z)({
message: o,
channel: a,
enabled: ea
  }), el = (0, c.V)(a.id, o.author.id), eo = (0, u.r)(o.id), ec = (0, E.Z)(o);
  return es ? (0, i.jsx)(e, {
...t,
message: Y.message,
channel: W,
hasThread: !1
  }) : (h.Z.isBlockedForMessage(o) ? s = j.Z.Messages.BLOCKED_MESSAGE_COUNT : (0, p.DQ)(o) && V && (s = j.Z.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== s) ? (0, i.jsx)(B, {
className: U,
compact: N,
count: 1,
collapsedReason: s
  }) : (0, i.jsx)(R.Z, {
compact: N,
className: r()(U, {
  [y.ephemeral]: (0, C.yE)(o.flags, b.iLy.EPHEMERAL),
  [y.disableInteraction]: F,
  [y.groupStart]: t.isGroupStart
}),
childrenRepliedMessage: (0, D.Z)(o, a, H, Y, N),
childrenHeader: (0, L.Z)({
  ...t,
  author: en,
  guildId: a.guild_id
}),
childrenAccessories: (0, i.jsx)(O.BB, {
  channel: a,
  message: o,
  hasSpoilerEmbeds: et,
  compact: N,
  canSuppressEmbeds: !1,
  canDeleteAttachments: !1,
  disableReactionReads: !1,
  disableReactionCreates: $,
  disableReactionUpdates: !1,
  renderThreadAccessory: w,
  renderComponentAccessory: !1,
  inlineAttachmentMedia: K,
  inlineEmbedMedia: z,
  renderEmbeds: Q,
  gifAutoPlay: q,
  poll: ec,
  showListsAndHeaders: X,
  showMaskedLinks: X,
  shouldHideMediaOptions: J,
  shouldRedactExplicitContent: el,
  shouldRenderCtaButton: eo,
  hasInlineForwardButton: !1
}),
childrenExecutedCommand: (0, P.Z)(o, a, N),
childrenMessageContent: (0, v.Z)(t, ee),
childrenSystemMessage: (0, Z.Z)(t),
onContextMenu: k,
onClick: G,
hasThread: !1 !== w && null != ei && o.hasFlag(b.iLy.HAS_THREAD),
hasReply: o.type === b.uaV.REPLY,
isSystemMessage: (0, g.Z)(o),
messageRef: er
  });
});