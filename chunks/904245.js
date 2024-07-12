n(411104), n(627341), n(47120), n(789020);
var r = n(278074),
  i = n(544891),
  a = n(780384),
  o = n(570140),
  s = n(89892),
  l = n(673750),
  u = n(367907),
  c = n(287328),
  d = n(86670),
  _ = n(685736),
  E = n(849521),
  f = n(421474),
  h = n(970606),
  p = n(960904),
  m = n(830121),
  I = n(710845),
  T = n(163268),
  g = n(38618),
  S = n(687516),
  A = n(539573),
  N = n(826581),
  v = n(409059),
  O = n(264229),
  R = n(366980),
  C = n(779832),
  y = n(459618),
  D = n(893233),
  L = n(541288),
  b = n(3148),
  M = n(48854),
  P = n(785359),
  U = n(646504),
  w = n(64078),
  x = n(351780),
  G = n(79390),
  k = n(643266),
  B = n(617136);
n(807092);
var F = n(869765),
  V = n(926491),
  H = n(467798),
  Z = n(346479),
  Y = n(218543),
  j = n(199902),
  W = n(314897),
  K = n(592125);
n(323873);
var z = n(701190),
  q = n(375954),
  Q = n(496675),
  X = n(158776),
  $ = n(306680),
  J = n(300429),
  ee = n(594174);
n(626135);
var et = n(70956),
  en = n(630388),
  er = n(669079),
  ei = n(63063),
  ea = n(74538),
  eo = n(709054),
  es = n(668781),
  el = n(981631),
  eu = n(176505),
  ec = n(58346),
  ed = n(689938);
let e_ = new I.Z('MessageActionCreators'),
  eE = new I.Z('MessageQueue'),
  ef = !1;
class eh {
  markComplete() {
this.completed = !0;
  }
  constructor() {
var e, t, n;
e = this, n = !1, (t = 'completed') in e ? Object.defineProperty(e, t, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : e[t] = n;
  }
}

function ep(e) {
  let {
inviteKey: t,
channelId: n,
messageId: r,
location: i,
suggested: a = null,
overrideProperties: o = {}
  } = e, s = (0, O.fU)(t), l = K.Z.getChannel(n);
  if (null != l) {
let e = null;
l.isMultiUserDM() ? e = el.dAT.GDM_INVITE : !l.isPrivate() && (e = el.dAT.SERVER_INVITE);
let n = {},
  d = z.Z.getInvite(t);
if (null != d && d.state === el.r2o.RESOLVED && null != d.channel) {
  var c;
  let t = d.channel;
  n.invite_channel_id = t.id, n.invite_guild_id = null === (c = d.guild) || void 0 === c ? void 0 : c.id, n.invite_channel_type = t.type, null != d.inviter && (n.invite_inviter_id = d.inviter.id);
  let r = j.Z.getLastActiveStream();
  if (null != r && r.channelId === t.id) {
    e = el.dAT.STREAM, n.destination_user_id = r.ownerId;
    let t = (0, S.L2)(r, X.Z);
    n.application_id = null != t ? t.id : null;
  }
}
null != a && (n.is_suggested = a.isAffinitySuggestion, n.row_num = a.rowNum, n.num_total = a.numTotal, n.num_affinity_connections = a.numAffinityConnections, n.is_filtered = a.isFiltered), n = {
  ...n,
  location: i,
  invite_type: e,
  invite_code: s.baseCode,
  guild_id: l.getGuildId(),
  channel_id: l.id,
  message_id: r,
  send_type: el.a5g.DIRECT_MESSAGE,
  invite_guild_scheduled_event_id: s.guildScheduledEventId,
  ...o
}, u.ZP.trackWithMetadata(el.rMx.INVITE_SENT, n);
  } else {
let e = {},
  n = z.Z.getInvite(t);
null != n && n.state === el.r2o.RESOLVED && null != n.inviter && (e.invite_inviter_id = n.inviter.id, e = {
  ...e,
  location: i,
  invite_type: el.dAT.FRIEND_INVITE,
  invite_code: s.baseCode,
  message_id: r,
  send_type: el.a5g.DIRECT_MESSAGE,
  invite_guild_scheduled_event_id: s.guildScheduledEventId,
  ...o
}, u.ZP.trackWithMetadata(el.rMx.INVITE_SENT, e));
  }
}
let em = {
[el.evJ.EMAIL_VERIFICATION_REQUIRED]: {
  messageName: 'BOT_REQUIRES_EMAIL_VERIFICATION',
  messageGetter: () => ed.Z.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
},
[el.evJ.INVALID_MESSAGE_SEND_USER]: {
  messageName: 'BOT_DM_SEND_FAILED_WITH_HELP_LINK',
  messageGetter: () => ed.Z.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
    helpUrl: ei.Z.getArticleURL(el.BhN.DM_COULD_NOT_BE_DELIVERED)
  })
},
[el.evJ.RATE_LIMIT_DM_OPEN]: {
  messageName: 'BOT_DM_RATE_LIMITED',
  messageGetter: () => ed.Z.Messages.BOT_DM_RATE_LIMITED
},
[el.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
  messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
  messageGetter: () => ed.Z.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
},
[el.evJ.SLOWMODE_RATE_LIMITED]: {
  messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
  messageGetter: () => ed.Z.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
}
  },
  eI = {
receiveMessage(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  o.Z.dispatch({
    type: 'MESSAGE_CREATE',
    channelId: e,
    message: t,
    optimistic: n,
    sendMessageOptions: r,
    isPushNotification: !1
  });
},
sendBotMessage(e, t, n, r) {
  null != n && u.ZP.trackWithMetadata(el.rMx.AUTOMATED_MESSAGE_RECEIVED, {
    message_author: 'Clyde',
    message_name: n
  }), eI.receiveMessage(e, (0, b.cs)({
    messageId: r,
    channelId: e,
    content: t,
    loggingName: n
  }));
},
sendNitroSystemMessage(e, t, n) {
  let r = (0, b.ZP)({
    channelId: e,
    nonce: n,
    type: el.uaV.NITRO_NOTIFICATION,
    content: t,
    flags: el.iLy.EPHEMERAL,
    author: {
      id: el.LAt,
      username: 'Nitro Notification',
      discriminator: el.fo$,
      avatar: 'nitro',
      bot: !0
    }
  });
  eI.receiveMessage(e, {
    ...r,
    state: el.yb.SENT,
    channel_id: e
  }, !0);
},
sendClydeError(e) {
  let t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    i = K.Z.getChannel(e);
  if (null != i)
    r === el.evJ.SLOWMODE_RATE_LIMITED ? (t = ed.Z.Messages.CHANNEL_SLOWMODE_DESC.format({
      seconds: i.rateLimitPerUser
    }), n = 'SLOWMODE_RATE_LIMITED') : r === el.evJ.INVALID_MESSAGE_SEND_USER ? (t = ed.Z.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
      helpUrl: ei.Z.getArticleURL(el.BhN.DM_COULD_NOT_BE_DELIVERED)
    }), n = 'INVALID_MESSAGE_SEND_USER') : r === el.evJ.TOO_MANY_THREADS ? (t = i.isForumLikeChannel() || i.isForumPost() ? ed.Z.Messages.BOT_DM_TOO_MANY_POSTS : ed.Z.Messages.BOT_DM_TOO_MANY_THREADS, n = 'TOO_MANY_THREADS') : r === el.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = ed.Z.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS, n = 'TOO_MANY_ANNOUNCEMENT_THREADS') : r === el.evJ.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = ed.Z.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
      helpUrl: el.EYA.HARMFUL_LINKS
    }), n = 'HARMFUL_LINK_MESSAGE_BLOCKED') : r in em ? (n = em[r].messageName, t = em[r].messageGetter()) : (t = ed.Z.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
      helpUrl: ei.Z.getArticleURL(el.BhN.DM_COULD_NOT_BE_DELIVERED)
    }), n = 'SEND_FAILED ('.concat(r, ')')), eI.sendBotMessage(e, t, n);
},
sendExplicitMediaClydeError(e, t, n) {
  let i = K.Z.getChannel(e);
  if (null == i)
    return;
  let {
    message: a,
    messageName: s
  } = (0, r.EQ)({
    isDM: i.isDM(),
    isGDM: i.isGroupDM()
  }).with({
    isDM: !0
  }, () => ({
    message: ed.Z.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
    messageName: 'BOT_DM_EXPLICIT_CONTENT'
  })).with({
    isDM: !1,
    isGDM: !0
  }, () => ({
    message: ed.Z.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
    messageName: 'BOT_GDM_EXPLICIT_CONTENT'
  })).otherwise(() => ({
    message: ed.Z.Messages.SENDER_BLOCKED_MEDIA_BOT_GUILD_MESSAGE,
    messageName: 'BOT_GUILD_EXPLICIT_CONTENT'
  })), l = (0, M.r)();
  eI.sendBotMessage(e, a, s, l), (0, T.aP)({
    action: T.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
    messageId: l,
    channelId: e,
    context: n
  }), null != t && t.length > 0 && o.Z.dispatch({
    type: 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE',
    messageId: l,
    channelId: e,
    attachments: t
  });
},
truncateMessages(e, t, n) {
  o.Z.dispatch({
    type: 'TRUNCATE_MESSAGES',
    channelId: e,
    truncateBottom: t,
    truncateTop: n
  });
},
clearChannel(e) {
  o.Z.dispatch({
    type: 'CLEAR_MESSAGES',
    channelId: e
  });
},
jumpToPresent(e, t) {
  eI.trackJump(e, null, 'Present');
  let n = {
    present: !0
  };
  q.Z.hasPresent(e) ? o.Z.dispatch({
    type: 'LOAD_MESSAGES_SUCCESS_CACHED',
    jump: n,
    channelId: e,
    limit: t
  }) : eI.fetchMessages({
    channelId: e,
    limit: t,
    jump: n
  });
},
trackJump(e, t, n, r) {
  u.ZP.trackWithMetadata(el.rMx.JUMP, {
    context: n,
    channel_id: e,
    message_id: t,
    ...r
  });
},
jumpToMessage(e) {
  let {
    channelId: t,
    messageId: n,
    flash: r = !1,
    offset: i,
    context: a,
    extraProperties: o = null,
    isPreload: s,
    returnMessageId: l,
    skipLocalFetch: u,
    jumpType: c
  } = e;
  return 'string' == typeof a && eI.trackJump(t, n, a, o), eI.fetchMessages({
    channelId: t,
    limit: el.Z8P,
    jump: {
      messageId: n,
      flash: r,
      offset: i,
      returnMessageId: l,
      jumpType: c
    },
    isPreload: s,
    skipLocalFetch: u
  });
},
focusMessage(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  eI.fetchMessages({
    channelId: t,
    limit: el.Z8P,
    focus: {
      messageId: n
    }
  });
},
fetchMessages(e) {
  let {
    channelId: t,
    before: n,
    after: r,
    limit: a,
    jump: l,
    focus: u,
    isPreload: c,
    skipLocalFetch: d,
    truncate: _
  } = e, E = K.Z.getChannel(t), f = g.Z.isConnectedOrOverlay(), h = Date.now();
  if (null != E && E.type === el.d4z.GUILD_STORE)
    return !1;
  if (t === eu.V)
    return;
  if (e_.log('Fetching messages for '.concat(t, ' between ').concat(n, ' and ').concat(r, '. jump=').concat(JSON.stringify(l))), eI._tryFetchMessagesCached({
      channelId: t,
      before: n,
      after: r,
      limit: a,
      jump: l,
      focus: u,
      truncate: _
    }))
    return;
  Y.Z.fetchMessages.recordStart();
  let p = null != l ? l : void 0;
  null == p && null != u && (p = {
    ...u
  });
  let m = s.Z.getOrCreate(t).loadStart(p);
  s.Z.commit(m), o.Z.dispatch({
    type: 'LOAD_MESSAGES'
  });
  let I = null == p ? void 0 : p.messageId,
    T = new eh();
  return !d && this.fetchLocalMessages(t, n, r, a, T), i.tn.get({
    url: el.ANM.MESSAGES(t),
    query: {
      before: n,
      after: r,
      limit: a,
      around: I,
      preload: c
    },
    retries: 2,
    oldFormErrors: !0
  }).then(e => (Y.Z.fetchMessages.recordEnd(), Y.Z.dispatchMessages.measure(() => {
    let i = e.body,
      s = null != n,
      u = null != r,
      c = null == n && null == r,
      d = null != I || i.length === a && (s || c),
      E = null != I || u && i.length === a;
    if (null != I) {
      let e = Math.floor(a / 2),
        n = [
          I,
          ...i.map(e => {
            let {
              id: t
            } = e;
            return t;
          })
        ].filter((e, t, n) => n.indexOf(e) === t).sort(eo.default.compare).indexOf(I);
      if (n < e && (d = !1), i.length - n < e && (E = !1), E && i.length > 0) {
        let e = $.ZP.lastMessageId(t);
        i[0].id === e && (E = !1);
      }
    }
    e_.log('Fetched '.concat(i.length, ' messages for ').concat(t, ' isBefore:').concat(s, ' isAfter:').concat(u)), T.markComplete(), o.Z.dispatch({
      type: 'LOAD_MESSAGES_SUCCESS',
      channelId: t,
      messages: i,
      isBefore: s,
      isAfter: u,
      hasMoreBefore: d,
      hasMoreAfter: E,
      limit: a,
      jump: l,
      isStale: !f || g.Z.lastTimeConnectedChanged() >= h,
      truncate: _
    });
  }), !0), () => (e_.log('Failed to fetch messages for '.concat(t)), o.Z.dispatch({
    type: 'LOAD_MESSAGES_FAILURE',
    channelId: t
  }), !1));
},
async fetchLocalMessages(e, t, n, r, i) {
  let a = K.Z.getBasicChannel(e),
    l = s.Z.getOrCreate(e),
    u = c.Z.database();
  if (null == u || null == a || null != t || null != n) {
    Y.Z.addLocalMessages(e, -1);
    return;
  }
  if (l.ready && !l.cached) {
    Y.Z.addLocalMessages(e, -2);
    return;
  }
  let E = await (0, d.dI)(() => _.ZP.load(u, e, r));
  if (null == E) {
    Y.Z.addLocalMessages(e, -3);
    return;
  }
  if (e_.log('fetched '.concat(E.messages.length, ' messages from local database (channel_id: ').concat(e, ', remote_fetch_completed: ').concat(i.completed, ')')), Y.Z.addLocalMessages(e, E.messages.length), !i.completed && E.messages.length > 0) {
    let t = E.messages.length >= r && E.connectionId === g.Z.lastTimeConnectedChanged();
    o.Z.dispatch({
      type: 'LOCAL_MESSAGES_LOADED',
      guildId: a.guild_id,
      channelId: e,
      users: E.users,
      members: E.members,
      messages: E.messages,
      stale: !t
    });
  }
},
async fetchNewLocalMessages(e, t) {
  var n;
  let r = K.Z.getBasicChannel(e),
    i = c.Z.database();
  if (null == i || null == r)
    return;
  let a = s.Z.getOrCreate(e);
  if (a.hasMoreAfter)
    return;
  let l = await (0, d.dI)(() => _.ZP.load(i, e, t));
  if (null == l)
    return;
  let u = null === (n = (a = s.Z.getOrCreate(e)).last()) || void 0 === n ? void 0 : n.id,
    E = null == u ? l.messages : l.messages.filter(e => eo.default.compare(e.id, u) > 0);
  e_.log('Fetched '.concat(l.messages.length, ' messages from the cache after foregrounding. ').concat(E.length, ' are new')), 0 !== E.length && o.Z.dispatch({
    type: 'LOCAL_MESSAGES_LOADED',
    guildId: r.guild_id,
    channelId: e,
    users: l.users,
    members: l.members,
    messages: E,
    stale: !0
  });
},
_tryFetchMessagesCached(e) {
  let {
    channelId: t,
    before: n,
    after: r,
    limit: i,
    jump: a,
    focus: s,
    truncate: l
  } = e, u = q.Z.getMessages(t);
  if (u.cached || !u.ready)
    return !1;
  if ((null == a ? void 0 : a.messageId) != null || (null == s ? void 0 : s.messageId) != null) {
    if ((null == a ? void 0 : a.messageId) != null && u.has(a.messageId, !1))
      return o.Z.dispatch({
        type: 'LOAD_MESSAGES_SUCCESS_CACHED',
        channelId: t,
        jump: a,
        limit: i,
        truncate: l
      }), !0;
    if ((null == s ? void 0 : s.messageId) != null) {
      if (u.has(s.messageId, !1))
        return o.Z.dispatch({
          type: 'LOAD_MESSAGES_SUCCESS_CACHED',
          channelId: t,
          focus: s,
          limit: i,
          truncate: l
        }), !0;
      a = {
        ...s
      };
    }
    let e = (null == a ? void 0 : a.messageId) != null ? eo.default.extractTimestamp(null == a ? void 0 : a.messageId) : 0,
      n = u.first(),
      r = u.last();
    if (!u.hasMoreBefore && null != n && eo.default.extractTimestamp(n.id) >= e || !u.hasMoreAfter && null != r && eo.default.extractTimestamp(r.id) <= e || null != n && null != r && eo.default.extractTimestamp(n.id) < e && eo.default.extractTimestamp(r.id) > e)
      return o.Z.dispatch({
        type: 'LOAD_MESSAGES_SUCCESS_CACHED',
        channelId: t,
        jump: a,
        limit: el.Z8P
      }), !0;
  } else if (null != n && u.hasBeforeCached(n))
    return o.Z.dispatch({
      type: 'LOAD_MESSAGES_SUCCESS_CACHED',
      channelId: t,
      before: n,
      limit: i,
      truncate: l
    }), !0;
  else if (null != r && u.hasAfterCached(r))
    return o.Z.dispatch({
      type: 'LOAD_MESSAGES_SUCCESS_CACHED',
      channelId: t,
      after: r,
      limit: i,
      truncate: l
    }), !0;
  return !1;
},
async sendMessage(e, t) {
  var n;
  let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (t.reaction)
    return Promise.resolve();
  let a = await (0, k.Z)(e);
  if (null != a)
    return eI.sendMessage(a, t, r, i);
  let o = C.ZP.backgroundify(() => eI._sendMessage(e, t, i), void 0),
    s = null !== (n = i.nonce) && void 0 !== n ? n : (0, M.r)();
  return (i = {
    ...i,
    nonce: s
  }, y.Z.recordMessageSendAttempt(e, s), q.Z.isReady(e)) ? o() : r && e !== eu.V ? (eE.info('Waiting for channel '.concat(e, ' to be ready before sending.')), new Promise((t, n) => {
    q.Z.whenReady(e, () => {
      eE.info('Channel '.concat(e, ' is ready for sending now.')), o().then(t, n);
    });
  })) : o();
},
getSendMessageOptionsForReply(e) {
  var t;
  if (null == e)
    return {};
  let n = {
    guild_id: null !== (t = e.channel.getGuildId()) && void 0 !== t ? t : void 0,
    channel_id: e.channel.id,
    message_id: e.message.id
  };
  return {
    messageReference: n,
    allowedMentions: e.shouldMention ? void 0 : {
      parse: Object.values(el.hCA),
      replied_user: !1
    }
  };
},
sendInvite: (e, t, n, r) => eI._sendMessage(e, {
  content: (0, R.Z)(t),
  tts: !1,
  validNonShortcutEmojis: [],
  invalidEmojis: []
}, {
  location: n,
  suggestedInvite: null != r ? r : void 0
}),
sendActivityBookmark: (e, t, n, r) => eI._sendMessage(e, {
  content: t,
  tts: !1,
  validNonShortcutEmojis: [],
  invalidEmojis: []
}, {
  location: n,
  suggestedInvite: null != r ? r : void 0
}),
sendStickers(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  return eI._sendMessage(e, {
    content: n,
    invalidEmojis: [],
    validNonShortcutEmojis: [],
    tts: i
  }, {
    ...r,
    stickerIds: t
  });
},
sendGreetMessage(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
    {
      messageReference: r,
      allowedMentions: a
    } = n;
  return i.tn.post({
    url: el.ANM.MESSAGES_GREET(e),
    body: {
      sticker_ids: [t],
      allowed_mentions: a,
      message_reference: r
    },
    oldFormErrors: !0
  }).then(n => (L.Z.donateSentMessage(n.body.content, e), eI.receiveMessage(e, n.body), o.Z.dispatch({
    type: 'STICKER_TRACK_USAGE',
    stickerIds: [t]
  }), n), t => {
    throw e_.log('Failed to send greeting'), 429 !== t.status && eI.sendClydeError(e, t.body.code), o.Z.dispatch({
      type: 'MESSAGE_SEND_FAILED',
      messageId: t.body.id,
      channelId: e
    }), t;
  });
},
sendPollMessage(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  return eI._sendMessage(e, {
    content: '',
    tts: !1,
    validNonShortcutEmojis: [],
    invalidEmojis: []
  }, {
    ...n,
    poll: t
  });
},
_sendMessage(e, t, n) {
  var r, i, a;
  let s = (0, k.Z)(e);
  if (null != s)
    return eE.info('Converting channel to a private channel'), s.then(e => {
      eE.info('Finished converting channel to a private channel'), eI._sendMessage(e, t, n);
    });
  let c = t.content,
    {
      invalidEmojis: d,
      validNonShortcutEmojis: _,
      tts: I = !1
    } = t,
    {
      activityAction: T,
      location: g,
      suggestedInvite: S,
      stickerIds: O,
      messageReference: R,
      allowedMentions: C,
      poll: U
    } = n,
    F = null !== (i = n.flags) && void 0 !== i ? i : 0,
    [Z, Y] = (0, H.Z)(c);
  Z && (c = Y, F = (0, en.pj)(F, el.iLy.SUPPRESS_NOTIFICATIONS));
  let j = (null === (r = n.messageReference) || void 0 === r ? void 0 : r.type) === el.Uvt.FORWARD;
  if ('' === c && null == T && null == O && null == U && !j)
    return Promise.resolve();
  let z = null != R ? el.uaV.REPLY : el.uaV.DEFAULT,
    q = null !== (a = n.nonce) && void 0 !== a ? a : (0, M.r)();
  if (!1 !== n.eagerDispatch) {
    let t = (0, b.ZP)({
      channelId: e,
      content: c,
      tts: I,
      type: z,
      messageReference: R,
      allowedMentions: C,
      flags: 0 !== F ? F : void 0,
      nonce: q,
      poll: (0, G.x9)(U)
    });
    (0, w.EL)(e, t.id), null != O && (t.sticker_items = O.map(e => V.Z.getStickerById(e)).filter(e => null != e)), eI.receiveMessage(e, t, !0, n);
  }
  if (!ef && null != d && d.length > 0) {
    let t, n;
    ef = !0;
    let r = ee.default.getCurrentUser();
    d.some(e => e.animated) && !ea.ZP.canUseAnimatedEmojis(r) ? (t = ed.Z.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE, n = 'INVALID_ANIMATED_EMOJI_BODY') : Q.Z.canWithPartialContext(el.Plq.USE_EXTERNAL_EMOJIS, {
      channelId: e
    }) ? (t = ed.Z.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE, n = 'INVALID_EXTERNAL_EMOJI_BODY_UPGRADE') : (t = ed.Z.Messages.INVALID_EXTERNAL_EMOJI_BODY, n = 'INVALID_EXTERNAL_EMOJI_BODY'), eI.sendBotMessage(e, t, n);
  }
  let X = {
    type: l.$V.SEND,
    message: {
      channelId: e,
      content: c,
      nonce: q,
      tts: I,
      message_reference: R,
      allowed_mentions: C,
      flags: F
    }
  };
  if (null != T) {
    let e = T.type === el.mFx.JOIN_REQUEST ? null == T ? void 0 : T.activity.session_id : W.default.getSessionId();
    if (null != e) {
      let t = {
          type: T.type,
          session_id: e
        },
        {
          activity: n
        } = T;
      null != n.party && null != n.party.id && (t.party_id = n.party.id), X.message.application_id = n.application_id, X.message.activity = t;
    }
  }
  return null != U && (X.message.poll = U), null != O && (X.message.sticker_ids = O), x.Z.isEnabled() && (X.message.has_poggermode_enabled = !0), new Promise((t, r) => {
    let i = Date.now(),
      a = l.ZP.length,
      s = Math.floor(10000 * Math.random());
    eE.info('Queueing message to be sent LogId:'.concat(s)), l.ZP.enqueue(X, s => {
      let d = Date.now() - i;
      if (s.ok) {
        L.Z.donateSentMessage(c, e), eI.receiveMessage(e, s.body, !0, {
          sendAnalytics: {
            duration: d,
            queueSize: a
          },
          poll: U
        });
        let r = eo.default.cast(e),
          i = N.Z.getRequest(r);
        if (null != i) {
          let {
            guildId: t,
            userId: n,
            applicationStatus: r
          } = i;
          (0, h.aC)({
            guildId: t,
            channelId: e,
            messageId: s.body.id,
            joinRequestStatus: r,
            joinRequestUserId: n
          });
        }
        y.Z.recordMessageSendApiResponse(q);
        o.Z.dispatch({
          type: 'SLOWMODE_RESET_COOLDOWN',
          slowmodeType: J.S.SendMessage,
          channelId: e
        }), o.Z.dispatch({
          type: 'EMOJI_TRACK_USAGE',
          emojiUsed: _
        }), o.Z.dispatch({
          type: 'STICKER_TRACK_USAGE',
          stickerIds: O
        }), o.Z.dispatch({
          type: 'LOCAL_MESSAGE_CREATE',
          message: {
            channel_id: e,
            author: ee.default.getCurrentUser()
          }
        }), ! function(e) {
          let {
            content: t,
            channelId: n,
            messageId: r,
            location: i,
            suggested: a = null,
            overrideProperties: o = {}
          } = e;
          (0, m.ZP)(t).forEach(e => {
            let {
              type: t,
              code: s
            } = e;
            if (t === p.g.INVITE)
              ep({
                inviteKey: s,
                channelId: n,
                messageId: r,
                location: i,
                suggested: a,
                overrideProperties: o
              });
            else if (t === p.g.TEMPLATE) {
              let e = v.Z.getGuildTemplate(s);
              if (null == e || e.state === ec.Rj.RESOLVING)
                return;
              u.ZP.trackWithMetadata(el.rMx.GUILD_TEMPLATE_LINK_SENT, {
                guild_template_code: s,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId
              });
            } else if (t === p.g.BUILD_OVERRIDE);
            else if (t === p.g.MANUAL_BUILD_OVERRIDE);
            else if (t === p.g.EVENT);
            else if (t === p.g.CHANNEL_LINK);
            else if (t === p.g.APP_DIRECTORY_PROFILE)
              (0, E.y)(s);
            else if (t === p.g.APP_DIRECTORY_STOREFRONT)
              (0, E.y)(s, 'storefront');
            else if (t === p.g.APP_DIRECTORY_STOREFRONT_SKU) {
              let e = (0, f.Q)(s);
              null != e && (0, E.y)(e.applicationId, 'storefront_sku');
            } else if (t === p.g.ACTIVITY_BOOKMARK);
            else if (t === p.g.EMBEDDED_ACTIVITY_INVITE);
            else if (t === p.g.GUILD_PRODUCT);
            else if (t === p.g.SERVER_SHOP);
            else if (t === p.g.QUESTS_EMBED)
              (0, B.dA)({
                questId: s,
                event: el.rMx.QUEST_LINK_SHARED,
                trackGuildAndChannelMetadata: !0
              });
            else
              throw Error('Unknown coded link type: '.concat(t));
          });
        }({
          content: c,
          channelId: e,
          messageId: s.body.id,
          location: null != g ? g : 'chat_input',
          suggested: S
        }), ! function(e, t, n, r, i) {
          (0, er.Q_)(e).forEach(e => {
            let a = K.Z.getChannel(t);
            null != a && u.ZP.trackWithMetadata(el.rMx.GIFT_CODE_SENT, {
              location: r,
              gift_code: e,
              guild_id: a.getGuildId(),
              channel_id: a.id,
              channel_type: a.type,
              message_id: n,
              automatic_send: i
            });
          });
        }(c, e, s.body.id, null != g ? g : 'chat_input', !!n.isGiftLinkSentOnBehalfOfUser), t(s);
      } else {
        var I;
        e_.log('Failed to send message', {
          hasErr: s.hasErr,
          status: s.status,
          code: null === (I = s.body) || void 0 === I ? void 0 : I.code,
          error: s.err
        });
        let t = !1;
        if (s.hasErr)
          'ABORTED' === s.err.code && (t = !0);
        else if (s.status >= 400 && s.status < 500 && s.body) {
          if (s.body.code === el.evJ.SLOWMODE_RATE_LIMITED) {
            let t = s.body.retry_after;
            null != t && t > 0 && o.Z.dispatch({
              type: 'SLOWMODE_SET_COOLDOWN',
              channelId: e,
              slowmodeType: J.S.SendMessage,
              cooldownMs: t * et.Z.Millis.SECOND
            });
          } else
            A.U8.has(s.body.code) ? o.Z.dispatch({
              type: 'MESSAGE_SEND_FAILED_AUTOMOD',
              messageData: X,
              errorResponseBody: {
                code: s.body.code,
                message: s.body.message
              }
            }) : s.body.code === el.evJ.POGGERMODE_TEMPORARILY_DISABLED ? o.Z.dispatch({
              type: 'POGGERMODE_TEMPORARILY_DISABLED'
            }) : null != U || j || eI.sendClydeError(e, s.body.code);
        }
        t ? eI.deleteMessage(e, q, !0) : (o.Z.dispatch({
          type: 'MESSAGE_SEND_FAILED',
          messageId: q,
          channelId: e,
          shouldNotify: !0
        }), (0, P.x)({
          failureCode: s.hasErr ? void 0 : s.status,
          errorMessage: s.hasErr ? s.err.message : void 0
        }), D.i.getCurrentConfig({
          location: 'MessageActionCreators'
        }).enabled && l.ZP.cancelPendingSendRequests(e).forEach(e => {
          e_.log('Cancelling pending message', e.nonce), o.Z.dispatch({
            type: 'MESSAGE_SEND_FAILED',
            messageId: e.nonce,
            channelId: e.channelId
          });
        })), r(s);
      }
    }, s);
  });
},
startEditMessage(e, t, n, r) {
  o.Z.dispatch({
    type: 'MESSAGE_START_EDIT',
    channelId: e,
    messageId: t,
    content: n,
    source: r
  });
},
updateEditMessage(e, t, n) {
  o.Z.dispatch({
    type: 'MESSAGE_UPDATE_EDIT',
    channelId: e,
    textValue: t,
    richValue: n
  });
},
endEditMessage(e, t) {
  o.Z.dispatch({
    type: 'MESSAGE_END_EDIT',
    channelId: e,
    response: t
  });
},
async editMessage(e, t, n) {
  let {
    content: r
  } = n;
  await Z.Z.unarchiveThreadIfNecessary(e);
  let i = function(e, t) {
      let n = q.Z.getMessage(e, t);
      if (null == n || n.type !== el.uaV.REPLY)
        return;
      let r = F.Z.getMessageByReference(n.messageReference);
      if (!(r.state !== F.Y.LOADED || n.mentions.includes(r.message.author.id)))
        return {
          parse: Object.values(el.hCA),
          replied_user: !1
        };
    }(e, t),
    s = {
      channelId: e,
      messageId: t,
      content: r,
      allowed_mentions: i
    };
  l.ZP.enqueue({
    type: l.$V.EDIT,
    message: s
  }, n => {
    let r = !n.hasErr && A.U8.has(n.body.code);
    if (r) {
      let e = {
        type: l.$V.EDIT,
        message: s
      };
      o.Z.dispatch({
        type: 'MESSAGE_EDIT_FAILED_AUTOMOD',
        messageData: e,
        errorResponseBody: {
          code: n.body.code,
          message: n.body.message
        }
      });
    }
    n.hasErr ? a.uv.announce(ed.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : r ? a.uv.announce(ed.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : a.uv.announce(ed.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED), eI.endEditMessage(e, n.hasErr ? void 0 : n), eI.focusMessage({
      channelId: e,
      messageId: t
    });
  });
},
async suppressEmbeds(e, t) {
  await Z.Z.unarchiveThreadIfNecessary(e), i.tn.patch({
    url: el.ANM.MESSAGE(e, t),
    body: {
      flags: el.iLy.SUPPRESS_EMBEDS
    },
    oldFormErrors: !0
  });
},
async patchMessageAttachments(e, t, n) {
  await Z.Z.unarchiveThreadIfNecessary(e), i.tn.patch({
    url: el.ANM.MESSAGE(e, t),
    body: {
      attachments: n
    },
    oldFormErrors: !0
  });
},
async deleteMessage(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = () => {
      o.Z.dispatch({
        type: 'MESSAGE_DELETE',
        id: t,
        channelId: e
      }).then(() => {
        a.uv.announce(ed.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED);
      });
    };
  n ? r() : (await Z.Z.unarchiveThreadIfNecessary(e), i.tn.del({
    url: el.ANM.MESSAGE(e, t),
    oldFormErrors: !0
  }).then(() => {
    r();
  }));
  let s = q.Z.getMessage(e, t);
  (null == s ? void 0 : s.type) === el.uaV.GUILD_INVITE_REMINDER && (0, U.O)();
},
dismissAutomatedMessage(e) {
  null != e.loggingName && u.ZP.trackWithMetadata(el.rMx.AUTOMATED_MESSAGE_DISMISSED, {
    message_name: e.loggingName,
    message_author: e.author.username
  }), this.deleteMessage(e.channel_id, e.id, !0);
},
revealMessage(e, t) {
  o.Z.dispatch({
    type: 'MESSAGE_REVEAL',
    channelId: e,
    messageId: t
  });
},
crosspostMessage: (e, t) => i.tn.post({
  url: el.ANM.MESSAGE_CROSSPOST(e, t),
  oldFormErrors: !0,
  failImmediatelyWhenRateLimited: !0
}).catch(e => {
  let t;
  t = 429 === e.status ? ed.Z.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
    retryAfter: Math.floor(e.body.retry_after / 60)
  }) : ed.Z.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY, es.Z.show({
    title: ed.Z.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
    body: t,
    confirmText: ed.Z.Messages.OKAY
  });
}),
trackInvite: ep
  };
t.Z = eI;