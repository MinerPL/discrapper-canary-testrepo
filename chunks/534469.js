n.d(t, {
  AP: function() {
return q;
  },
  Ru: function() {
return X;
  }
}), n(789020);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(512722),
  o = n.n(r),
  c = n(91192),
  u = n(442837),
  d = n(481060),
  h = n(607070),
  p = n(223606),
  m = n(518738),
  _ = n(628238),
  f = n(807092),
  E = n(869765),
  g = n(703656),
  C = n(695346),
  I = n(592125),
  x = n(906467),
  T = n(323873),
  N = n(630388),
  v = n(709054),
  S = n(534091),
  Z = n(901461),
  A = n(739566),
  M = n(233715),
  b = n(492593),
  R = n(917990),
  j = n(453687),
  L = n(348238),
  P = n(62072),
  O = n(38267),
  y = n(25015),
  D = n(689674),
  k = n(438075),
  U = n(764893),
  w = n(481363),
  B = n(900902),
  H = n(252032),
  G = n(737243),
  V = n(614584),
  F = n(295790),
  W = n(959517),
  z = n(981631),
  Y = n(689938),
  K = n(848509);

function q(e, t, n) {
  return e.getElementById((0, S.p)(t, n));
}

function X(e) {
  var t;
  let {
id: n,
message: a,
message: {
  messageReference: s
},
compact: r = !1,
className: d
  } = e;
  o()(a.type === z.uaV.THREAD_STARTER_MESSAGE, 'Message must be a thread starter message');
  let {
...h
  } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''), p = (0, u.e7)([E.Z], () => E.Z.getMessageByReference(s)), {
popouts: m,
setPopout: _
  } = (0, O.Z)(a.id, W.d$), f = (0, A.ZP)(a), g = (0, j.iG)(a), C = (0, j.Gx)(a);
  return a.type === z.uaV.THREAD_STARTER_MESSAGE && null != p && p.state === E.Y.LOADED ? (0, i.jsx)(Q, {
...e,
viewingChannelId: a.channel_id,
message: p.message,
groupId: p.message.id
  }) : (0, i.jsx)(b.Z, {
...h,
id: n,
compact: r,
className: l()(d, {
  [K.message]: !0,
  [K.cozyMessage]: !r,
  [K.systemMessage]: !0,
  [K.groupStart]: !0
}),
childrenHeader: (0, B.Z)({
  messageProps: e,
  setPopout: _,
  messagePopouts: m,
  replyReference: s,
  author: f
}),
childrenSystemMessage: (0, F.Z)(e),
childrenMessageContent: null,
'aria-labelledby': g,
'aria-describedby': C,
hasThread: !1
  });
}

function Q(e) {
  var t, n;
  let {
id: s,
message: r,
message: {
  id: o,
  channel_id: p
},
channel: {
  guild_id: f
},
compact: I = !1,
className: x,
groupId: T,
viewingChannelId: v
  } = e, S = r.type === z.uaV.REPLY ? r.messageReference : void 0, {
onFocus: M,
...R
  } = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''), {
isFocused: D,
handleFocus: U,
handleBlur: w
  } = (0, L.bb)(M), {
popouts: G,
selected: q,
setPopout: X
  } = (0, O.Z)(r.id, W.d$), Q = C.RS.useSetting(), J = C.NA.useSetting(), $ = (0, u.e7)([E.Z], () => E.Z.getMessageByReference(S)), ee = (0, _.A)((null !== (n = r.editedTimestamp) && void 0 !== n ? n : r.timestamp).valueOf()), {
handleMouseEnter: et,
handleMouseLeave: en,
isHovered: ei
  } = (0, L.tn)(T, r.author.id, q), ea = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled), es = q || ea && D, el = es || ei, {
content: er,
hasSpoilerEmbeds: eo
  } = (0, y.Z)(r, {
hideSimpleEmbedContent: Q && J,
isInteracting: el,
formatInline: !1,
allowList: ee,
allowHeading: ee,
allowLinks: !0,
previewLinkTarget: !0,
viewingChannelId: v
  }), ec = (0, P.Z)(o, p, ea), eu = (0, A.ZP)(r), ed = (0, j.iG)(r, T), eh = (0, j.Gx)(r), ep = (0, H.Z)(e, er, !1), em = a.useCallback(() => (0, g.XU)(f, p, o), [
f,
p,
o
  ]), e_ = (0, m.p9)({
guildId: f,
roleId: eu.iconRoleId
  });
  return (0, i.jsxs)('div', {
className: K.quotedChatMessage,
children: [
  (0, i.jsx)(d.Clickable, {
    className: K.jump,
    onClick: em,
    'aria-label': Y.Z.Messages.JUMP,
    children: Y.Z.Messages.JUMP
  }),
  (0, i.jsx)(b.Z, {
    ...R,
    id: s,
    compact: I,
    className: l()(x, {
      [K.message]: !0,
      [K.cozyMessage]: !I,
      [K.mentioned]: r.mentioned,
      [K.ephemeral]: (0, N.yE)(r.flags, z.iLy.EPHEMERAL),
      [K.systemMessage]: (0, Z.Z)(r),
      [K.groupStart]: r.id === T || r.type === z.uaV.REPLY,
      [K.selected]: es
    }),
    zalgo: !0,
    onKeyDown: ec,
    onFocus: U,
    onBlur: w,
    childrenRepliedMessage: (0, V.Z)(e, X, G, S, $),
    childrenHeader: (0, B.Z)({
      messageProps: e,
      setPopout: X,
      messagePopouts: G,
      replyReference: S,
      author: eu,
      repliedMessage: $,
      roleIcon: e_
    }),
    childrenAccessories: (0, k.Z)({
      channelMessageProps: e,
      hasSpoilerEmbeds: eo,
      isInteracting: el,
      renderThreadAccessory: !1,
      renderComponentAccessory: !1,
      renderSuppressEmbeds: !1
    }),
    childrenSystemMessage: (0, F.Z)(e),
    childrenMessageContent: ep,
    onMouseMove: et,
    onMouseLeave: en,
    'aria-labelledby': ed,
    'aria-describedby': eh,
    hasThread: !1
  })
]
  });
}
t.ZP = a.memo(function(e) {
  var t, n;
  let s;
  let {
id: r,
message: g,
message: {
  id: S
},
channel: q,
channel: {
  id: X
},
compact: Q = !1,
className: J,
flashKey: $,
groupId: ee,
renderContentOnly: et
  } = e;
  o()(g.type !== z.uaV.THREAD_STARTER_MESSAGE, 'Message must not be a thread starter message');
  let en = z.OBS.has(g.type) ? g.messageReference : void 0,
{
  onFocus: ei,
  ...ea
} = (0, c.JA)(null !== (t = e.id) && void 0 !== t ? t : ''),
es = C.RS.useSetting(),
el = C.NA.useSetting(),
er = (0, u.e7)([E.Z], () => E.Z.getMessageByReference(en)),
{
  popouts: eo,
  selected: ec,
  setPopout: eu
} = (0, O.Z)(g.id, W.d$),
ed = (0, L.qo)(g, q, eu),
eh = (0, L.Go)(g, q),
{
  handleMouseEnter: ep,
  handleMouseLeave: em,
  hasHovered: e_,
  isHovered: ef
} = (0, L.tn)(ee, g.author.id, ec),
{
  isFocused: eE,
  hasFocused: eg,
  handleFocus: eC,
  handleBlur: eI
} = (0, L.bb)(ei),
ex = (0, u.e7)([T.Z], () => T.Z.isEditing(X, S), [
  X,
  S
]),
eT = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled),
eN = ec || ex || eT && eE,
ev = eN || ef,
eS = (0, u.e7)([I.Z], () => g.hasFlag(z.iLy.HAS_THREAD) && I.Z.getChannel(v.default.castMessageIdAsChannelId(g.id))),
eZ = g.isFirstMessageInForumPost(q),
eA = (0, _.A)((null !== (n = g.editedTimestamp) && void 0 !== n ? n : g.timestamp).valueOf()),
eM = (0, u.e7)([x.Z], () => x.Z.isDeveloper),
{
  content: eb,
  hasSpoilerEmbeds: eR
} = (0, y.Z)(g, {
  hideSimpleEmbedContent: es && el,
  isInteracting: ev,
  formatInline: !1,
  allowList: eZ || eA,
  allowHeading: eZ || eA,
  allowLinks: !0,
  allowDevLinks: eM,
  previewLinkTarget: !0
}),
ej = (0, P.Z)(S, X, eT),
eL = (0, A.ZP)(g),
eP = (0, u.e7)([f.Z], () => f.Z.getPendingReply(X)),
eO = function(e) {
  let t = a.useRef(e);
  return a.useEffect(() => void(t.current = null != e ? e : t.current)), null != e ? e : t.current;
}($),
ey = (0, m.p9)({
  guildId: q.guild_id,
  roleId: eL.iconRoleId
}),
eD = (0, j.iG)(g, ee),
ek = (0, j.Gx)(g),
eU = (0, u.e7)([p.Z], () => p.Z.getMessage(S), [S]),
ew = (0, D.Z)({
  message: g,
  channel: q
}),
{
  canShowReactionsOnMessageHover: eB
} = R.Z.useExperiment({
  location: 'ChatMessage'
}, {
  autoTrackExposure: !0
}),
eH = null != eU;
  s = g.type === z.uaV.CUSTOM_GIFT ? '' : !ex && eH ? (0, U.Z)(e, eb) : (0, H.Z)(e, eb, ex);
  let eG = g.id === ee,
eV = (0, i.jsx)(d.FocusRing, {
  offset: {
    left: 4,
    right: 4
  },
  children: (0, i.jsx)('li', {
    id: r,
    className: K.messageListItem,
    'aria-setsize': -1,
    children: (0, i.jsx)(b.Z, {
      ...ea,
      'aria-setsize': -1,
      'aria-roledescription': Y.Z.Messages.MESSAGE_A11Y_ROLE_DESCRIPTION,
      'aria-labelledby': eD,
      'aria-describedby': ek,
      onFocus: eC,
      onBlur: eI,
      onContextMenu: ed,
      onKeyDown: ej,
      onClick: eh,
      compact: Q,
      contentOnly: et,
      className: l()(J, {
        [K.message]: !0,
        [K.cozyMessage]: !Q,
        [K.mentioned]: g.mentioned,
        [K.ephemeral]: (0, N.yE)(g.flags, z.iLy.EPHEMERAL),
        [K.nitroMessage]: g.type === z.uaV.NITRO_NOTIFICATION,
        [K.systemMessage]: (0, Z.Z)(g),
        [K.groupStart]: !et && (eG || g.type === z.uaV.REPLY),
        [K.selected]: eN,
        [K.replying]: (null == eP ? void 0 : eP.message.id) === g.id,
        [K.interactionSending]: g.isCommandType() && g.state === z.yb.SENDING,
        [K.automodMessage]: eH,
        [K.reactionsOnMessage]: eB
      }),
      zalgo: !ex,
      childrenRepliedMessage: et ? void 0 : (0, V.Z)(e, eu, eo, en, er),
      childrenExecutedCommand: (0, G.Z)(e, eu, eo),
      childrenHeader: et ? void 0 : (0, B.Z)({
        messageProps: e,
        setPopout: eu,
        messagePopouts: eo,
        replyReference: en,
        author: eL,
        repliedMessage: er,
        roleIcon: ey
      }),
      childrenAccessories: (0, k.Z)({
        channelMessageProps: e,
        hasSpoilerEmbeds: eR,
        handleContextMenu: ed,
        isInteracting: ev,
        isAutomodBlockedMessage: eH
      }),
      childrenButtons: e_ || eg ? (0, w.Z)({
        buttonProps: e,
        setPopout: eu,
        messagePopouts: eo,
        isFocused: ef || eE
      }) : void 0,
      childrenSystemMessage: (0, F.Z)(e),
      childrenMessageContent: s,
      onMouseMove: ep,
      onMouseLeave: em,
      hasThread: !et && g.hasFlag(z.iLy.HAS_THREAD) && null != eS,
      isSystemMessage: (0, Z.Z)(g),
      hasReply: g.type === z.uaV.REPLY,
      messageRef: ew
    })
  })
});
  return null != eO ? (0, i.jsx)(M.Z, {
flashKey: eO,
className: l()({
  [K.backgroundFlash]: !0,
  [K.groupStart]: !Q && g.id === ee
}),
children: eV
  }, 'bg-flash-'.concat(r)) : eV;
});