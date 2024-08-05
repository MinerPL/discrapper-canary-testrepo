n(411104), n(627341), n(47120), n(789020);
var r = n(278074),
  i = n(544891),
  a = n(780384),
  s = n(570140),
  o = n(89892),
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
  D = n(541288),
  L = n(3148),
  b = n(48854),
  M = n(785359),
  P = n(646504),
  U = n(64078),
  w = n(351780),
  x = n(79390),
  G = n(643266),
  k = n(617136);
n(807092);
var B = n(869765),
  F = n(926491),
  V = n(467798),
  H = n(346479),
  Z = n(218543),
  Y = n(199902),
  j = n(314897),
  W = n(592125);
n(323873);
var K = n(701190),
  z = n(375954),
  q = n(496675),
  Q = n(158776),
  X = n(306680),
  $ = n(300429),
  J = n(594174);
n(626135);
var ee = n(70956),
  et = n(630388),
  en = n(669079),
  er = n(63063),
  ei = n(74538),
  ea = n(709054),
  es = n(668781),
  eo = n(981631),
  el = n(176505),
  eu = n(58346),
  ec = n(689938);
let ed = new I.Z('MessageActionCreators'),
  e_ = new I.Z('MessageQueue'),
  eE = !1;
class ef {
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

function eh(e) {
  let {
inviteKey: t,
channelId: n,
messageId: r,
location: i,
suggested: a = null,
overrideProperties: s = {}
  } = e, o = (0, O.fU)(t), l = W.Z.getChannel(n);
  if (null != l) {
let e = null;
l.isMultiUserDM() ? e = eo.dAT.GDM_INVITE : !l.isPrivate() && (e = eo.dAT.SERVER_INVITE);
let n = {},
  d = K.Z.getInvite(t);
if (null != d && d.state === eo.r2o.RESOLVED && null != d.channel) {
  var c;
  let t = d.channel;
  n.invite_channel_id = t.id, n.invite_guild_id = null === (c = d.guild) || void 0 === c ? void 0 : c.id, n.invite_channel_type = t.type, null != d.inviter && (n.invite_inviter_id = d.inviter.id);
  let r = Y.Z.getLastActiveStream();
  if (null != r && r.channelId === t.id) {
    e = eo.dAT.STREAM, n.destination_user_id = r.ownerId;
    let t = (0, S.L2)(r, Q.Z);
    n.application_id = null != t ? t.id : null;
  }
}
null != a && (n.is_suggested = a.isAffinitySuggestion, n.row_num = a.rowNum, n.num_total = a.numTotal, n.num_affinity_connections = a.numAffinityConnections, n.is_filtered = a.isFiltered), n = {
  ...n,
  location: i,
  invite_type: e,
  invite_code: o.baseCode,
  guild_id: l.getGuildId(),
  channel_id: l.id,
  message_id: r,
  send_type: eo.a5g.DIRECT_MESSAGE,
  invite_guild_scheduled_event_id: o.guildScheduledEventId,
  ...s
}, u.ZP.trackWithMetadata(eo.rMx.INVITE_SENT, n);
  } else {
let e = {},
  n = K.Z.getInvite(t);
null != n && n.state === eo.r2o.RESOLVED && null != n.inviter && (e.invite_inviter_id = n.inviter.id, e = {
  ...e,
  location: i,
  invite_type: eo.dAT.FRIEND_INVITE,
  invite_code: o.baseCode,
  message_id: r,
  send_type: eo.a5g.DIRECT_MESSAGE,
  invite_guild_scheduled_event_id: o.guildScheduledEventId,
  ...s
}, u.ZP.trackWithMetadata(eo.rMx.INVITE_SENT, e));
  }
}
let ep = {
[eo.evJ.EMAIL_VERIFICATION_REQUIRED]: {
  messageName: 'BOT_REQUIRES_EMAIL_VERIFICATION',
  messageGetter: () => ec.Z.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
},
[eo.evJ.INVALID_MESSAGE_SEND_USER]: {
  messageName: 'BOT_DM_SEND_FAILED_WITH_HELP_LINK',
  messageGetter: () => ec.Z.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
    helpUrl: er.Z.getArticleURL(eo.BhN.DM_COULD_NOT_BE_DELIVERED)
  })
},
[eo.evJ.RATE_LIMIT_DM_OPEN]: {
  messageName: 'BOT_DM_RATE_LIMITED',
  messageGetter: () => ec.Z.Messages.BOT_DM_RATE_LIMITED
},
[eo.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
  messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
  messageGetter: () => ec.Z.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
},
[eo.evJ.SLOWMODE_RATE_LIMITED]: {
  messageName: 'BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED',
  messageGetter: () => ec.Z.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
}
  },
  em = {
receiveMessage(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  s.Z.dispatch({
    type: 'MESSAGE_CREATE',
    channelId: e,
    message: t,
    optimistic: n,
    sendMessageOptions: r,
    isPushNotification: !1
  });
},
sendBotMessage(e, t, n, r) {
  null != n && u.ZP.trackWithMetadata(eo.rMx.AUTOMATED_MESSAGE_RECEIVED, {
    message_author: 'Clyde',
    message_name: n
  }), em.receiveMessage(e, (0, L.cs)({
    messageId: r,
    channelId: e,
    content: t,
    loggingName: n
  }));
},
sendNitroSystemMessage(e, t, n) {
  let r = (0, L.ZP)({
    channelId: e,
    nonce: n,
    type: eo.uaV.NITRO_NOTIFICATION,
    content: t,
    flags: eo.iLy.EPHEMERAL,
    author: {
      id: eo.LAt,
      username: 'Nitro Notification',
      discriminator: eo.fo$,
      avatar: 'nitro',
      bot: !0
    }
  });
  em.receiveMessage(e, {
    ...r,
    state: eo.yb.SENT,
    channel_id: e
  }, !0);
},
sendClydeError(e) {
  let t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    i = W.Z.getChannel(e);
  if (null != i)
    r === eo.evJ.SLOWMODE_RATE_LIMITED ? (t = ec.Z.Messages.CHANNEL_SLOWMODE_DESC.format({
      seconds: i.rateLimitPerUser
    }), n = 'SLOWMODE_RATE_LIMITED') : r === eo.evJ.INVALID_MESSAGE_SEND_USER ? (t = ec.Z.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
      helpUrl: er.Z.getArticleURL(eo.BhN.DM_COULD_NOT_BE_DELIVERED)
    }), n = 'INVALID_MESSAGE_SEND_USER') : r === eo.evJ.TOO_MANY_THREADS ? (t = i.isForumLikeChannel() || i.isForumPost() ? ec.Z.Messages.BOT_DM_TOO_MANY_POSTS : ec.Z.Messages.BOT_DM_TOO_MANY_THREADS, n = 'TOO_MANY_THREADS') : r === eo.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = ec.Z.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS, n = 'TOO_MANY_ANNOUNCEMENT_THREADS') : r === eo.evJ.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = ec.Z.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
      helpUrl: eo.EYA.HARMFUL_LINKS
    }), n = 'HARMFUL_LINK_MESSAGE_BLOCKED') : r in ep ? (n = ep[r].messageName, t = ep[r].messageGetter()) : (t = ec.Z.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
      helpUrl: er.Z.getArticleURL(eo.BhN.DM_COULD_NOT_BE_DELIVERED)
    }), n = 'SEND_FAILED ('.concat(r, ')')), em.sendBotMessage(e, t, n);
},
sendExplicitMediaClydeError(e, t, n) {
  let i = W.Z.getChannel(e);
  if (null == i)
    return;
  let {
    message: a,
    messageName: o
  } = (0, r.EQ)({
    isDM: i.isDM(),
    isGDM: i.isGroupDM()
  }).with({
    isDM: !0
  }, () => ({
    message: ec.Z.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
    messageName: 'BOT_DM_EXPLICIT_CONTENT'
  })).with({
    isDM: !1,
    isGDM: !0
  }, () => ({
    message: ec.Z.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
    messageName: 'BOT_GDM_EXPLICIT_CONTENT'
  })).otherwise(() => ({
    message: ec.Z.Messages.SENDER_BLOCKED_MEDIA_BOT_GUILD_MESSAGE,
    messageName: 'BOT_GUILD_EXPLICIT_CONTENT'
  })), l = (0, b.r)();
  em.sendBotMessage(e, a, o, l), (0, T.aP)({
    action: T.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
    messageId: l,
    channelId: e,
    context: n
  }), null != t && t.length > 0 && s.Z.dispatch({
    type: 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE',
    messageId: l,
    channelId: e,
    attachments: t
  });
},
truncateMessages(e, t, n) {
  s.Z.dispatch({
    type: 'TRUNCATE_MESSAGES',
    channelId: e,
    truncateBottom: t,
    truncateTop: n
  });
},
clearChannel(e) {
  s.Z.dispatch({
    type: 'CLEAR_MESSAGES',
    channelId: e
  });
},
jumpToPresent(e, t) {
  em.trackJump(e, null, 'Present');
  let n = {
    present: !0
  };
  z.Z.hasPresent(e) ? s.Z.dispatch({
    type: 'LOAD_MESSAGES_SUCCESS_CACHED',
    jump: n,
    channelId: e,
    limit: t
  }) : em.fetchMessages({
    channelId: e,
    limit: t,
    jump: n
  });
},
trackJump(e, t, n, r) {
  u.ZP.trackWithMetadata(eo.rMx.JUMP, {
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
    extraProperties: s = null,
    isPreload: o,
    returnMessageId: l,
    skipLocalFetch: u,
    jumpType: c
  } = e;
  return 'string' == typeof a && em.trackJump(t, n, a, s), em.fetchMessages({
    channelId: t,
    limit: eo.Z8P,
    jump: {
      messageId: n,
      flash: r,
      offset: i,
      returnMessageId: l,
      jumpType: c
    },
    isPreload: o,
    skipLocalFetch: u
  });
},
focusMessage(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  em.fetchMessages({
    channelId: t,
    limit: eo.Z8P,
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
  } = e, E = W.Z.getChannel(t), f = g.Z.isConnectedOrOverlay(), h = Date.now();
  if (null != E && E.type === eo.d4z.GUILD_STORE)
    return !1;
  if (t === el.V)
    return;
  if (ed.log('Fetching messages for '.concat(t, ' between ').concat(n, ' and ').concat(r, '. jump=').concat(JSON.stringify(l))), em._tryFetchMessagesCached({
      channelId: t,
      before: n,
      after: r,
      limit: a,
      jump: l,
      focus: u,
      truncate: _
    }))
    return;
  Z.Z.fetchMessages.recordStart();
  let p = null != l ? l : void 0;
  null == p && null != u && (p = {
    ...u
  });
  let m = o.Z.getOrCreate(t).loadStart(p);
  o.Z.commit(m), s.Z.dispatch({
    type: 'LOAD_MESSAGES'
  });
  let I = null == p ? void 0 : p.messageId,
    T = new ef();
  return !d && this.fetchLocalMessages(t, n, r, a, T), i.tn.get({
    url: eo.ANM.MESSAGES(t),
    query: {
      before: n,
      after: r,
      limit: a,
      around: I,
      preload: c
    },
    retries: 2,
    oldFormErrors: !0
  }).then(e => (Z.Z.fetchMessages.recordEnd(), Z.Z.dispatchMessages.measure(() => {
    let i = e.body,
      o = null != n,
      u = null != r,
      c = null == n && null == r,
      d = null != I || i.length === a && (o || c),
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
        ].filter((e, t, n) => n.indexOf(e) === t).sort(ea.default.compare).indexOf(I);
      if (n < e && (d = !1), i.length - n < e && (E = !1), E && i.length > 0) {
        let e = X.ZP.lastMessageId(t);
        i[0].id === e && (E = !1);
      }
    }
    ed.log('Fetched '.concat(i.length, ' messages for ').concat(t, ' isBefore:').concat(o, ' isAfter:').concat(u)), T.markComplete(), s.Z.dispatch({
      type: 'LOAD_MESSAGES_SUCCESS',
      channelId: t,
      messages: i,
      isBefore: o,
      isAfter: u,
      hasMoreBefore: d,
      hasMoreAfter: E,
      limit: a,
      jump: l,
      isStale: !f || g.Z.lastTimeConnectedChanged() >= h,
      truncate: _
    });
  }), !0), () => (ed.log('Failed to fetch messages for '.concat(t)), s.Z.dispatch({
    type: 'LOAD_MESSAGES_FAILURE',
    channelId: t
  }), !1));
},
async fetchLocalMessages(e, t, n, r, i) {
  let a = W.Z.getBasicChannel(e),
    l = o.Z.getOrCreate(e),
    u = c.Z.database();
  if (null == u || null == a || null != t || null != n) {
    Z.Z.addLocalMessages(e, -1);
    return;
  }
  if (l.ready && !l.cached) {
    Z.Z.addLocalMessages(e, -2);
    return;
  }
  let E = await (0, d.dI)(() => _.ZP.load(u, e, r));
  if (null == E) {
    Z.Z.addLocalMessages(e, -3);
    return;
  }
  if (ed.log('fetched '.concat(E.messages.length, ' messages from local database (channel_id: ').concat(e, ', remote_fetch_completed: ').concat(i.completed, ')')), Z.Z.addLocalMessages(e, E.messages.length), !i.completed && E.messages.length > 0) {
    let t = E.messages.length >= r && E.connectionId === g.Z.lastTimeConnectedChanged();
    s.Z.dispatch({
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
  let r = W.Z.getBasicChannel(e),
    i = c.Z.database();
  if (null == i || null == r)
    return;
  let a = o.Z.getOrCreate(e);
  if (a.hasMoreAfter)
    return;
  let l = await (0, d.dI)(() => _.ZP.load(i, e, t));
  if (null == l)
    return;
  let u = null === (n = (a = o.Z.getOrCreate(e)).last()) || void 0 === n ? void 0 : n.id,
    E = null == u ? l.messages : l.messages.filter(e => ea.default.compare(e.id, u) > 0);
  ed.log('Fetched '.concat(l.messages.length, ' messages from the cache after foregrounding. ').concat(E.length, ' are new')), 0 !== E.length && s.Z.dispatch({
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
    focus: o,
    truncate: l
  } = e, u = z.Z.getMessages(t);
  if (u.cached || !u.ready)
    return !1;
  if ((null == a ? void 0 : a.messageId) != null || (null == o ? void 0 : o.messageId) != null) {
    if ((null == a ? void 0 : a.messageId) != null && u.has(a.messageId, !1))
      return s.Z.dispatch({
        type: 'LOAD_MESSAGES_SUCCESS_CACHED',
        channelId: t,
        jump: a,
        limit: i,
        truncate: l
      }), !0;
    if ((null == o ? void 0 : o.messageId) != null) {
      if (u.has(o.messageId, !1))
        return s.Z.dispatch({
          type: 'LOAD_MESSAGES_SUCCESS_CACHED',
          channelId: t,
          focus: o,
          limit: i,
          truncate: l
        }), !0;
      a = {
        ...o
      };
    }
    let e = (null == a ? void 0 : a.messageId) != null ? ea.default.extractTimestamp(null == a ? void 0 : a.messageId) : 0,
      n = u.first(),
      r = u.last();
    if (!u.hasMoreBefore && null != n && ea.default.extractTimestamp(n.id) >= e || !u.hasMoreAfter && null != r && ea.default.extractTimestamp(r.id) <= e || null != n && null != r && ea.default.extractTimestamp(n.id) < e && ea.default.extractTimestamp(r.id) > e)
      return s.Z.dispatch({
        type: 'LOAD_MESSAGES_SUCCESS_CACHED',
        channelId: t,
        jump: a,
        limit: eo.Z8P
      }), !0;
  } else if (null != n && u.hasBeforeCached(n))
    return s.Z.dispatch({
      type: 'LOAD_MESSAGES_SUCCESS_CACHED',
      channelId: t,
      before: n,
      limit: i,
      truncate: l
    }), !0;
  else if (null != r && u.hasAfterCached(r))
    return s.Z.dispatch({
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
  let a = await (0, G.Z)(e);
  if (null != a)
    return em.sendMessage(a, t, r, i);
  let s = C.ZP.backgroundify(() => em._sendMessage(e, t, i), void 0),
    o = null !== (n = i.nonce) && void 0 !== n ? n : (0, b.r)();
  return (i = {
    ...i,
    nonce: o
  }, y.Z.recordMessageSendAttempt(e, o), z.Z.isReady(e)) ? s() : r && e !== el.V ? (e_.info('Waiting for channel '.concat(e, ' to be ready before sending.')), new Promise((t, n) => {
    z.Z.whenReady(e, () => {
      e_.info('Channel '.concat(e, ' is ready for sending now.')), s().then(t, n);
    });
  })) : s();
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
      parse: Object.values(eo.hCA),
      replied_user: !1
    }
  };
},
sendInvite: (e, t, n, r) => em._sendMessage(e, {
  content: (0, R.Z)(t),
  tts: !1,
  validNonShortcutEmojis: [],
  invalidEmojis: []
}, {
  location: n,
  suggestedInvite: null != r ? r : void 0
}),
sendActivityBookmark: (e, t, n, r) => em._sendMessage(e, {
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
  return em._sendMessage(e, {
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
    url: eo.ANM.MESSAGES_GREET(e),
    body: {
      sticker_ids: [t],
      allowed_mentions: a,
      message_reference: r
    },
    oldFormErrors: !0
  }).then(n => (D.Z.donateSentMessage(n.body.content, e), em.receiveMessage(e, n.body), s.Z.dispatch({
    type: 'STICKER_TRACK_USAGE',
    stickerIds: [t]
  }), n), t => {
    throw ed.log('Failed to send greeting'), 429 !== t.status && em.sendClydeError(e, t.body.code), s.Z.dispatch({
      type: 'MESSAGE_SEND_FAILED',
      messageId: t.body.id,
      channelId: e
    }), t;
  });
},
sendPollMessage(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  return em._sendMessage(e, {
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
  let o = (0, G.Z)(e);
  if (null != o)
    return e_.info('Converting channel to a private channel'), o.then(e => {
      e_.info('Finished converting channel to a private channel'), em._sendMessage(e, t, n);
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
      poll: P,
      contentInventoryEntry: B
    } = n,
    H = null !== (i = n.flags) && void 0 !== i ? i : 0,
    [Z, Y] = (0, V.Z)(c);
  Z && (c = Y, H = (0, et.pj)(H, eo.iLy.SUPPRESS_NOTIFICATIONS));
  let K = (null === (r = n.messageReference) || void 0 === r ? void 0 : r.type) === eo.Uvt.FORWARD;
  if ('' === c && null == T && null == O && null == P && !K)
    return Promise.resolve();
  let z = null != R ? eo.uaV.REPLY : eo.uaV.DEFAULT,
    Q = null !== (a = n.nonce) && void 0 !== a ? a : (0, b.r)();
  if (!1 !== n.eagerDispatch) {
    let t = (0, L.ZP)({
      channelId: e,
      content: c,
      tts: I,
      type: z,
      messageReference: R,
      allowedMentions: C,
      flags: 0 !== H ? H : void 0,
      nonce: Q,
      poll: (0, x.x9)(P)
    });
    (0, U.EL)(e, t.id), null != O && (t.sticker_items = O.map(e => F.Z.getStickerById(e)).filter(e => null != e)), em.receiveMessage(e, t, !0, n);
  }
  if (!eE && null != d && d.length > 0) {
    let t, n;
    eE = !0;
    let r = J.default.getCurrentUser();
    d.some(e => e.animated) && !ei.ZP.canUseAnimatedEmojis(r) ? (t = ec.Z.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE, n = 'INVALID_ANIMATED_EMOJI_BODY') : q.Z.canWithPartialContext(eo.Plq.USE_EXTERNAL_EMOJIS, {
      channelId: e
    }) ? (t = ec.Z.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE, n = 'INVALID_EXTERNAL_EMOJI_BODY_UPGRADE') : (t = ec.Z.Messages.INVALID_EXTERNAL_EMOJI_BODY, n = 'INVALID_EXTERNAL_EMOJI_BODY'), em.sendBotMessage(e, t, n);
  }
  let X = {
    type: l.$V.SEND,
    message: {
      channelId: e,
      content: c,
      nonce: Q,
      tts: I,
      message_reference: R,
      allowed_mentions: C,
      flags: H
    }
  };
  if (null != T) {
    let e = T.type === eo.mFx.JOIN_REQUEST ? null == T ? void 0 : T.activity.session_id : j.default.getSessionId();
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
  return null != P && (X.message.poll = P), null != O && (X.message.sticker_ids = O), w.Z.isEnabled() && (X.message.has_poggermode_enabled = !0), null != B && (X.message.content_inventory_entry = B), new Promise((t, r) => {
    let i = Date.now(),
      a = l.ZP.length,
      o = Math.floor(10000 * Math.random());
    e_.info('Queueing message to be sent LogId:'.concat(o)), l.ZP.enqueue(X, o => {
      let d = Date.now() - i;
      if (o.ok) {
        D.Z.donateSentMessage(c, e), em.receiveMessage(e, o.body, !0, {
          sendAnalytics: {
            duration: d,
            queueSize: a
          },
          poll: P
        });
        let r = ea.default.cast(e),
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
            messageId: o.body.id,
            joinRequestStatus: r,
            joinRequestUserId: n
          });
        }
        y.Z.recordMessageSendApiResponse(Q);
        s.Z.dispatch({
          type: 'SLOWMODE_RESET_COOLDOWN',
          slowmodeType: $.S.SendMessage,
          channelId: e
        }), s.Z.dispatch({
          type: 'EMOJI_TRACK_USAGE',
          emojiUsed: _
        }), s.Z.dispatch({
          type: 'STICKER_TRACK_USAGE',
          stickerIds: O
        }), s.Z.dispatch({
          type: 'LOCAL_MESSAGE_CREATE',
          message: {
            channel_id: e,
            author: J.default.getCurrentUser()
          }
        }), ! function(e) {
          let {
            content: t,
            channelId: n,
            messageId: r,
            location: i,
            suggested: a = null,
            overrideProperties: s = {}
          } = e;
          (0, m.ZP)(t).forEach(e => {
            let {
              type: t,
              code: o
            } = e;
            if (t === p.g.INVITE)
              eh({
                inviteKey: o,
                channelId: n,
                messageId: r,
                location: i,
                suggested: a,
                overrideProperties: s
              });
            else if (t === p.g.TEMPLATE) {
              let e = v.Z.getGuildTemplate(o);
              if (null == e || e.state === eu.Rj.RESOLVING)
                return;
              u.ZP.trackWithMetadata(eo.rMx.GUILD_TEMPLATE_LINK_SENT, {
                guild_template_code: o,
                guild_template_name: e.name,
                guild_template_description: e.description,
                guild_template_guild_id: e.sourceGuildId
              });
            } else if (t === p.g.BUILD_OVERRIDE);
            else if (t === p.g.MANUAL_BUILD_OVERRIDE);
            else if (t === p.g.EVENT);
            else if (t === p.g.CHANNEL_LINK);
            else if (t === p.g.APP_DIRECTORY_PROFILE)
              (0, E.y)(o);
            else if (t === p.g.APP_DIRECTORY_STOREFRONT)
              (0, E.y)(o, 'storefront');
            else if (t === p.g.APP_DIRECTORY_STOREFRONT_SKU) {
              let e = (0, f.Q)(o);
              null != e && (0, E.y)(e.applicationId, 'storefront_sku');
            } else if (t === p.g.ACTIVITY_BOOKMARK);
            else if (t === p.g.EMBEDDED_ACTIVITY_INVITE);
            else if (t === p.g.GUILD_PRODUCT);
            else if (t === p.g.SERVER_SHOP);
            else if (t === p.g.QUESTS_EMBED)
              (0, k.dA)({
                questId: o,
                event: eo.rMx.QUEST_LINK_SHARED,
                trackGuildAndChannelMetadata: !0
              });
            else
              throw Error('Unknown coded link type: '.concat(t));
          });
        }({
          content: c,
          channelId: e,
          messageId: o.body.id,
          location: null != g ? g : 'chat_input',
          suggested: S
        }), ! function(e, t, n, r, i) {
          (0, en.Q_)(e).forEach(e => {
            let a = W.Z.getChannel(t);
            null != a && u.ZP.trackWithMetadata(eo.rMx.GIFT_CODE_SENT, {
              location: r,
              gift_code: e,
              guild_id: a.getGuildId(),
              channel_id: a.id,
              channel_type: a.type,
              message_id: n,
              automatic_send: i
            });
          });
        }(c, e, o.body.id, null != g ? g : 'chat_input', !!n.isGiftLinkSentOnBehalfOfUser), t(o);
      } else {
        var I;
        ed.log('Failed to send message', {
          hasErr: o.hasErr,
          status: o.status,
          code: null === (I = o.body) || void 0 === I ? void 0 : I.code,
          error: o.err
        });
        let t = !1;
        if (o.hasErr)
          'ABORTED' === o.err.code && (t = !0);
        else if (o.status >= 400 && o.status < 500 && o.body) {
          if (o.body.code === eo.evJ.SLOWMODE_RATE_LIMITED) {
            let t = o.body.retry_after;
            null != t && t > 0 && s.Z.dispatch({
              type: 'SLOWMODE_SET_COOLDOWN',
              channelId: e,
              slowmodeType: $.S.SendMessage,
              cooldownMs: t * ee.Z.Millis.SECOND
            });
          } else
            A.U8.has(o.body.code) ? s.Z.dispatch({
              type: 'MESSAGE_SEND_FAILED_AUTOMOD',
              messageData: X,
              errorResponseBody: {
                code: o.body.code,
                message: o.body.message
              }
            }) : o.body.code === eo.evJ.POGGERMODE_TEMPORARILY_DISABLED ? s.Z.dispatch({
              type: 'POGGERMODE_TEMPORARILY_DISABLED'
            }) : null != P || K || em.sendClydeError(e, o.body.code);
        }
        t ? em.deleteMessage(e, Q, !0) : (s.Z.dispatch({
          type: 'MESSAGE_SEND_FAILED',
          messageId: Q,
          channelId: e,
          shouldNotify: !0
        }), (0, M.x)({
          failureCode: o.hasErr ? void 0 : o.status,
          errorMessage: o.hasErr ? o.err.message : void 0
        }), l.ZP.cancelPendingSendRequests(e).forEach(e => {
          ed.log('Cancelling pending message', e.nonce), s.Z.dispatch({
            type: 'MESSAGE_SEND_FAILED',
            messageId: e.nonce,
            channelId: e.channelId
          });
        })), r(o);
      }
    }, o);
  });
},
startEditMessage(e, t, n, r) {
  s.Z.dispatch({
    type: 'MESSAGE_START_EDIT',
    channelId: e,
    messageId: t,
    content: n,
    source: r
  });
},
updateEditMessage(e, t, n) {
  s.Z.dispatch({
    type: 'MESSAGE_UPDATE_EDIT',
    channelId: e,
    textValue: t,
    richValue: n
  });
},
endEditMessage(e, t) {
  s.Z.dispatch({
    type: 'MESSAGE_END_EDIT',
    channelId: e,
    response: t
  });
},
async editMessage(e, t, n) {
  let {
    content: r
  } = n;
  await H.Z.unarchiveThreadIfNecessary(e);
  let i = function(e, t) {
      let n = z.Z.getMessage(e, t);
      if (null == n || n.type !== eo.uaV.REPLY)
        return;
      let r = B.Z.getMessageByReference(n.messageReference);
      if (!(r.state !== B.Y.LOADED || n.mentions.includes(r.message.author.id)))
        return {
          parse: Object.values(eo.hCA),
          replied_user: !1
        };
    }(e, t),
    o = {
      channelId: e,
      messageId: t,
      content: r,
      allowed_mentions: i
    };
  l.ZP.enqueue({
    type: l.$V.EDIT,
    message: o
  }, n => {
    let r = !n.hasErr && A.U8.has(n.body.code);
    if (r) {
      let e = {
        type: l.$V.EDIT,
        message: o
      };
      s.Z.dispatch({
        type: 'MESSAGE_EDIT_FAILED_AUTOMOD',
        messageData: e,
        errorResponseBody: {
          code: n.body.code,
          message: n.body.message
        }
      });
    }
    n.hasErr ? a.uv.announce(ec.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : r ? a.uv.announce(ec.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : a.uv.announce(ec.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED), em.endEditMessage(e, n.hasErr ? void 0 : n), em.focusMessage({
      channelId: e,
      messageId: t
    });
  });
},
async suppressEmbeds(e, t) {
  await H.Z.unarchiveThreadIfNecessary(e), i.tn.patch({
    url: eo.ANM.MESSAGE(e, t),
    body: {
      flags: eo.iLy.SUPPRESS_EMBEDS
    },
    oldFormErrors: !0
  });
},
async patchMessageAttachments(e, t, n) {
  await H.Z.unarchiveThreadIfNecessary(e), i.tn.patch({
    url: eo.ANM.MESSAGE(e, t),
    body: {
      attachments: n
    },
    oldFormErrors: !0
  });
},
async deleteMessage(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = () => {
      s.Z.dispatch({
        type: 'MESSAGE_DELETE',
        id: t,
        channelId: e
      }).then(() => {
        a.uv.announce(ec.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED);
      });
    };
  n ? r() : (await H.Z.unarchiveThreadIfNecessary(e), i.tn.del({
    url: eo.ANM.MESSAGE(e, t),
    oldFormErrors: !0
  }).then(() => {
    r();
  }));
  let o = z.Z.getMessage(e, t);
  (null == o ? void 0 : o.type) === eo.uaV.GUILD_INVITE_REMINDER && (0, P.O)();
},
dismissAutomatedMessage(e) {
  null != e.loggingName && u.ZP.trackWithMetadata(eo.rMx.AUTOMATED_MESSAGE_DISMISSED, {
    message_name: e.loggingName,
    message_author: e.author.username
  }), this.deleteMessage(e.channel_id, e.id, !0);
},
revealMessage(e, t) {
  s.Z.dispatch({
    type: 'MESSAGE_REVEAL',
    channelId: e,
    messageId: t
  });
},
crosspostMessage: (e, t) => i.tn.post({
  url: eo.ANM.MESSAGE_CROSSPOST(e, t),
  oldFormErrors: !0,
  failImmediatelyWhenRateLimited: !0
}).catch(e => {
  let t;
  t = 429 === e.status ? ec.Z.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
    retryAfter: Math.floor(e.body.retry_after / 60)
  }) : ec.Z.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY, es.Z.show({
    title: ec.Z.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
    body: t,
    confirmText: ec.Z.Messages.OKAY
  });
}),
trackInvite: eh
  };
t.Z = em;