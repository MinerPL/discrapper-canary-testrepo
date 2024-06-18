"use strict";
n(411104), n(627341), n(47120), n(789020);
var i = n(278074),
  r = n(544891),
  s = n(780384),
  o = n(570140),
  a = n(89892),
  l = n(673750),
  u = n(367907),
  _ = n(287328),
  d = n(86670),
  c = n(685736),
  E = n(849521),
  I = n(421474),
  T = n(970606),
  h = n(960904),
  S = n(830121),
  f = n(710845),
  N = n(163268),
  A = n(38618),
  m = n(687516),
  O = n(539573),
  R = n(826581),
  C = n(409059),
  p = n(264229),
  g = n(366980),
  L = n(779832),
  v = n(459618),
  D = n(893233),
  M = n(541288),
  P = n(3148),
  y = n(48854),
  U = n(785359),
  b = n(646504),
  G = n(64078),
  w = n(351780),
  k = n(79390),
  B = n(643266),
  x = n(617136);
n(807092);
var V = n(869765),
  Z = n(926491),
  H = n(467798),
  F = n(346479),
  Y = n(218543),
  j = n(199902),
  W = n(314897),
  K = n(592125);
n(323873);
var z = n(701190),
  q = n(375954),
  X = n(496675),
  Q = n(158776),
  J = n(306680),
  $ = n(300429),
  ee = n(594174);
n(626135);
var et = n(70956),
  en = n(630388),
  ei = n(669079),
  er = n(63063),
  es = n(74538),
  eo = n(709054),
  ea = n(668781),
  el = n(981631),
  eu = n(176505),
  e_ = n(58346),
  ed = n(689938);
let ec = new f.Z("MessageActionCreators"),
  eE = new f.Z("MessageQueue"),
  eI = !1;
class eT {
  markComplete() {
    this.completed = !0
  }
  constructor() {
    var e, t, n;
    e = this, n = !1, (t = "completed") in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n
  }
}

function eh(e) {
  let {
    inviteKey: t,
    channelId: n,
    messageId: i,
    location: r,
    suggested: s = null,
    overrideProperties: o = {}
  } = e, a = (0, p.fU)(t), l = K.Z.getChannel(n);
  if (null != l) {
    let e = null;
    l.isMultiUserDM() ? e = el.dAT.GDM_INVITE : !l.isPrivate() && (e = el.dAT.SERVER_INVITE);
    let n = {},
      d = z.Z.getInvite(t);
    if (null != d && d.state === el.r2o.RESOLVED && null != d.channel) {
      var _;
      let t = d.channel;
      n.invite_channel_id = t.id, n.invite_guild_id = null === (_ = d.guild) || void 0 === _ ? void 0 : _.id, n.invite_channel_type = t.type, null != d.inviter && (n.invite_inviter_id = d.inviter.id);
      let i = j.Z.getLastActiveStream();
      if (null != i && i.channelId === t.id) {
        e = el.dAT.STREAM, n.destination_user_id = i.ownerId;
        let t = (0, m.L2)(i, Q.Z);
        n.application_id = null != t ? t.id : null
      }
    }
    null != s && (n.is_suggested = s.isAffinitySuggestion, n.row_num = s.rowNum, n.num_total = s.numTotal, n.num_affinity_connections = s.numAffinityConnections, n.is_filtered = s.isFiltered), n = {
      ...n,
      location: r,
      invite_type: e,
      invite_code: a.baseCode,
      guild_id: l.getGuildId(),
      channel_id: l.id,
      message_id: i,
      send_type: el.a5g.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: a.guildScheduledEventId,
      ...o
    }, u.ZP.trackWithMetadata(el.rMx.INVITE_SENT, n)
  } else {
    let e = {},
      n = z.Z.getInvite(t);
    null != n && n.state === el.r2o.RESOLVED && null != n.inviter && (e.invite_inviter_id = n.inviter.id, e = {
      ...e,
      location: r,
      invite_type: el.dAT.FRIEND_INVITE,
      invite_code: a.baseCode,
      message_id: i,
      send_type: el.a5g.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: a.guildScheduledEventId,
      ...o
    }, u.ZP.trackWithMetadata(el.rMx.INVITE_SENT, e))
  }
}
let eS = {
    [el.evJ.EMAIL_VERIFICATION_REQUIRED]: {
      messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
      messageGetter: () => ed.Z.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
    },
    [el.evJ.INVALID_MESSAGE_SEND_USER]: {
      messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
      messageGetter: () => ed.Z.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
        helpUrl: er.Z.getArticleURL(el.BhN.DM_COULD_NOT_BE_DELIVERED)
      })
    },
    [el.evJ.RATE_LIMIT_DM_OPEN]: {
      messageName: "BOT_DM_RATE_LIMITED",
      messageGetter: () => ed.Z.Messages.BOT_DM_RATE_LIMITED
    },
    [el.evJ.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => ed.Z.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
    },
    [el.evJ.SLOWMODE_RATE_LIMITED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => ed.Z.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
    }
  },
  ef = {
    receiveMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      o.Z.dispatch({
        type: "MESSAGE_CREATE",
        channelId: e,
        message: t,
        optimistic: n,
        sendMessageOptions: i,
        isPushNotification: !1
      })
    },
    sendBotMessage(e, t, n, i) {
      null != n && u.ZP.trackWithMetadata(el.rMx.AUTOMATED_MESSAGE_RECEIVED, {
        message_author: "Clyde",
        message_name: n
      }), ef.receiveMessage(e, (0, P.cs)({
        messageId: i,
        channelId: e,
        content: t,
        loggingName: n
      }))
    },
    sendNitroSystemMessage(e, t, n) {
      let i = (0, P.ZP)({
        channelId: e,
        nonce: n,
        type: el.uaV.NITRO_NOTIFICATION,
        content: t,
        flags: el.iLy.EPHEMERAL,
        author: {
          id: el.LAt,
          username: "Nitro Notification",
          discriminator: el.fo$,
          avatar: "nitro",
          bot: !0
        }
      });
      ef.receiveMessage(e, {
        ...i,
        state: el.yb.SENT,
        channel_id: e
      }, !0)
    },
    sendClydeError(e) {
      let t, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = K.Z.getChannel(e);
      if (null != r) i === el.evJ.SLOWMODE_RATE_LIMITED ? (t = ed.Z.Messages.CHANNEL_SLOWMODE_DESC.format({
        seconds: r.rateLimitPerUser
      }), n = "SLOWMODE_RATE_LIMITED") : i === el.evJ.INVALID_MESSAGE_SEND_USER ? (t = ed.Z.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
        helpUrl: er.Z.getArticleURL(el.BhN.DM_COULD_NOT_BE_DELIVERED)
      }), n = "INVALID_MESSAGE_SEND_USER") : i === el.evJ.TOO_MANY_THREADS ? (t = r.isForumLikeChannel() || r.isForumPost() ? ed.Z.Messages.BOT_DM_TOO_MANY_POSTS : ed.Z.Messages.BOT_DM_TOO_MANY_THREADS, n = "TOO_MANY_THREADS") : i === el.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = ed.Z.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS, n = "TOO_MANY_ANNOUNCEMENT_THREADS") : i === el.evJ.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = ed.Z.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
        helpUrl: el.EYA.HARMFUL_LINKS
      }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : i in eS ? (n = eS[i].messageName, t = eS[i].messageGetter()) : (t = ed.Z.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
        helpUrl: er.Z.getArticleURL(el.BhN.DM_COULD_NOT_BE_DELIVERED)
      }), n = "SEND_FAILED (".concat(i, ")")), ef.sendBotMessage(e, t, n)
    },
    sendExplicitMediaClydeError(e, t, n) {
      let r = K.Z.getChannel(e);
      if (null == r) return;
      let {
        message: s,
        messageName: a
      } = (0, i.EQ)({
        isDM: r.isDM(),
        isGDM: r.isGroupDM()
      }).with({
        isDM: !0
      }, () => ({
        message: ed.Z.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
        messageName: "BOT_DM_EXPLICIT_CONTENT"
      })).with({
        isDM: !1,
        isGDM: !0
      }, () => ({
        message: ed.Z.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
        messageName: "BOT_GDM_EXPLICIT_CONTENT"
      })).otherwise(() => ({
        message: ed.Z.Messages.SENDER_BLOCKED_MEDIA_BOT_GUILD_MESSAGE,
        messageName: "BOT_GUILD_EXPLICIT_CONTENT"
      })), l = (0, y.r)();
      ef.sendBotMessage(e, s, a, l), (0, N.aP)({
        action: N.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
        messageId: l,
        channelId: e,
        context: n
      }), null != t && t.length > 0 && o.Z.dispatch({
        type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
        messageId: l,
        channelId: e,
        attachments: t
      })
    },
    truncateMessages(e, t, n) {
      o.Z.dispatch({
        type: "TRUNCATE_MESSAGES",
        channelId: e,
        truncateBottom: t,
        truncateTop: n
      })
    },
    clearChannel(e) {
      o.Z.dispatch({
        type: "CLEAR_MESSAGES",
        channelId: e
      })
    },
    jumpToPresent(e, t) {
      ef.trackJump(e, null, "Present");
      let n = {
        present: !0
      };
      q.Z.hasPresent(e) ? o.Z.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        jump: n,
        channelId: e,
        limit: t
      }) : ef.fetchMessages({
        channelId: e,
        limit: t,
        jump: n
      })
    },
    trackJump(e, t, n, i) {
      u.ZP.trackWithMetadata(el.rMx.JUMP, {
        context: n,
        channel_id: e,
        message_id: t,
        ...i
      })
    },
    jumpToMessage(e) {
      let {
        channelId: t,
        messageId: n,
        flash: i = !1,
        offset: r,
        context: s,
        extraProperties: o = null,
        isPreload: a,
        returnMessageId: l,
        skipLocalFetch: u,
        jumpType: _
      } = e;
      return "string" == typeof s && ef.trackJump(t, n, s, o), ef.fetchMessages({
        channelId: t,
        limit: el.Z8P,
        jump: {
          messageId: n,
          flash: i,
          offset: r,
          returnMessageId: l,
          jumpType: _
        },
        isPreload: a,
        skipLocalFetch: u
      })
    },
    focusMessage(e) {
      let {
        channelId: t,
        messageId: n
      } = e;
      ef.fetchMessages({
        channelId: t,
        limit: el.Z8P,
        focus: {
          messageId: n
        }
      })
    },
    fetchMessages(e) {
      let {
        channelId: t,
        before: n,
        after: i,
        limit: s,
        jump: l,
        focus: u,
        isPreload: _,
        skipLocalFetch: d,
        truncate: c
      } = e, E = K.Z.getChannel(t), I = A.Z.isConnectedOrOverlay(), T = Date.now();
      if (null != E && E.type === el.d4z.GUILD_STORE) return !1;
      if (t === eu.V) return;
      if (ec.log("Fetching messages for ".concat(t, " between ").concat(n, " and ").concat(i, ". jump=").concat(JSON.stringify(l))), ef._tryFetchMessagesCached({
          channelId: t,
          before: n,
          after: i,
          limit: s,
          jump: l,
          focus: u,
          truncate: c
        })) return;
      Y.Z.fetchMessages.recordStart();
      let h = null != l ? l : void 0;
      null == h && null != u && (h = {
        ...u
      });
      let S = a.Z.getOrCreate(t).loadStart(h);
      a.Z.commit(S), o.Z.dispatch({
        type: "LOAD_MESSAGES"
      });
      let f = null == h ? void 0 : h.messageId,
        N = new eT;
      return !d && this.fetchLocalMessages(t, n, i, s, N), r.tn.get({
        url: el.ANM.MESSAGES(t),
        query: {
          before: n,
          after: i,
          limit: s,
          around: f,
          preload: _
        },
        retries: 2,
        oldFormErrors: !0
      }).then(e => (Y.Z.fetchMessages.recordEnd(), Y.Z.dispatchMessages.measure(() => {
        let r = e.body,
          a = null != n,
          u = null != i,
          _ = null == n && null == i,
          d = null != f || r.length === s && (a || _),
          E = null != f || u && r.length === s;
        if (null != f) {
          let e = Math.floor(s / 2),
            n = [f, ...r.map(e => {
              let {
                id: t
              } = e;
              return t
            })].filter((e, t, n) => n.indexOf(e) === t).sort(eo.default.compare).indexOf(f);
          if (n < e && (d = !1), r.length - n < e && (E = !1), E && r.length > 0) {
            let e = J.ZP.lastMessageId(t);
            r[0].id === e && (E = !1)
          }
        }
        ec.log("Fetched ".concat(r.length, " messages for ").concat(t, " isBefore:").concat(a, " isAfter:").concat(u)), N.markComplete(), o.Z.dispatch({
          type: "LOAD_MESSAGES_SUCCESS",
          channelId: t,
          messages: r,
          isBefore: a,
          isAfter: u,
          hasMoreBefore: d,
          hasMoreAfter: E,
          limit: s,
          jump: l,
          isStale: !I || A.Z.lastTimeConnectedChanged() >= T,
          truncate: c
        })
      }), !0), () => (ec.log("Failed to fetch messages for ".concat(t)), o.Z.dispatch({
        type: "LOAD_MESSAGES_FAILURE",
        channelId: t
      }), !1))
    },
    async fetchLocalMessages(e, t, n, i, r) {
      let s = K.Z.getBasicChannel(e),
        l = a.Z.getOrCreate(e),
        u = _.Z.database();
      if (null == u || null == s || null != t || null != n) {
        Y.Z.addLocalMessages(e, -1);
        return
      }
      if (l.ready && !l.cached) {
        Y.Z.addLocalMessages(e, -2);
        return
      }
      let E = await (0, d.dI)(() => c.ZP.load(u, e, i));
      if (null == E) {
        Y.Z.addLocalMessages(e, -3);
        return
      }
      if (ec.log("fetched ".concat(E.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(r.completed, ")")), Y.Z.addLocalMessages(e, E.messages.length), !r.completed && E.messages.length > 0) {
        let t = E.messages.length >= i && E.connectionId === A.Z.lastTimeConnectedChanged();
        o.Z.dispatch({
          type: "LOCAL_MESSAGES_LOADED",
          guildId: s.guild_id,
          channelId: e,
          users: E.users,
          members: E.members,
          messages: E.messages,
          stale: !t
        })
      }
    },
    async fetchNewLocalMessages(e, t) {
      var n;
      let i = K.Z.getBasicChannel(e),
        r = _.Z.database();
      if (null == r || null == i) return;
      let s = a.Z.getOrCreate(e);
      if (s.hasMoreAfter) return;
      let l = await (0, d.dI)(() => c.ZP.load(r, e, t));
      if (null == l) return;
      let u = null === (n = (s = a.Z.getOrCreate(e)).last()) || void 0 === n ? void 0 : n.id,
        E = null == u ? l.messages : l.messages.filter(e => eo.default.compare(e.id, u) > 0);
      ec.log("Fetched ".concat(l.messages.length, " messages from the cache after foregrounding. ").concat(E.length, " are new")), 0 !== E.length && o.Z.dispatch({
        type: "LOCAL_MESSAGES_LOADED",
        guildId: i.guild_id,
        channelId: e,
        users: l.users,
        members: l.members,
        messages: E,
        stale: !0
      })
    },
    _tryFetchMessagesCached(e) {
      let {
        channelId: t,
        before: n,
        after: i,
        limit: r,
        jump: s,
        focus: a,
        truncate: l
      } = e, u = q.Z.getMessages(t);
      if (u.cached || !u.ready) return !1;
      if ((null == s ? void 0 : s.messageId) != null || (null == a ? void 0 : a.messageId) != null) {
        if ((null == s ? void 0 : s.messageId) != null && u.has(s.messageId, !1)) return o.Z.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: s,
          limit: r,
          truncate: l
        }), !0;
        if ((null == a ? void 0 : a.messageId) != null) {
          if (u.has(a.messageId, !1)) return o.Z.dispatch({
            type: "LOAD_MESSAGES_SUCCESS_CACHED",
            channelId: t,
            focus: a,
            limit: r,
            truncate: l
          }), !0;
          s = {
            ...a
          }
        }
        let e = (null == s ? void 0 : s.messageId) != null ? eo.default.extractTimestamp(null == s ? void 0 : s.messageId) : 0,
          n = u.first(),
          i = u.last();
        if (!u.hasMoreBefore && null != n && eo.default.extractTimestamp(n.id) >= e || !u.hasMoreAfter && null != i && eo.default.extractTimestamp(i.id) <= e || null != n && null != i && eo.default.extractTimestamp(n.id) < e && eo.default.extractTimestamp(i.id) > e) return o.Z.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: s,
          limit: el.Z8P
        }), !0
      } else if (null != n && u.hasBeforeCached(n)) return o.Z.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        channelId: t,
        before: n,
        limit: r,
        truncate: l
      }), !0;
      else if (null != i && u.hasAfterCached(i)) return o.Z.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        channelId: t,
        after: i,
        limit: r,
        truncate: l
      }), !0;
      return !1
    },
    async sendMessage(e, t) {
      var n;
      let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      if (t.reaction) return Promise.resolve();
      let s = await (0, B.Z)(e);
      if (null != s) return ef.sendMessage(s, t, i, r);
      let o = L.ZP.backgroundify(() => ef._sendMessage(e, t, r), void 0),
        a = null !== (n = r.nonce) && void 0 !== n ? n : (0, y.r)();
      return (r = {
        ...r,
        nonce: a
      }, v.Z.recordMessageSendAttempt(e, a), q.Z.isReady(e)) ? o() : i && e !== eu.V ? (eE.info("Waiting for channel ".concat(e, " to be ready before sending.")), new Promise((t, n) => {
        q.Z.whenReady(e, () => {
          eE.info("Channel ".concat(e, " is ready for sending now.")), o().then(t, n)
        })
      })) : o()
    },
    getSendMessageOptionsForReply(e) {
      var t;
      if (null == e) return {};
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
      }
    },
    sendInvite: (e, t, n, i) => ef._sendMessage(e, {
      content: (0, g.Z)(t),
      tts: !1,
      validNonShortcutEmojis: [],
      invalidEmojis: []
    }, {
      location: n,
      suggestedInvite: null != i ? i : void 0
    }),
    sendActivityBookmark: (e, t, n, i) => ef._sendMessage(e, {
      content: t,
      tts: !1,
      validNonShortcutEmojis: [],
      invalidEmojis: []
    }, {
      location: n,
      suggestedInvite: null != i ? i : void 0
    }),
    sendStickers(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      return ef._sendMessage(e, {
        content: n,
        invalidEmojis: [],
        validNonShortcutEmojis: [],
        tts: r
      }, {
        ...i,
        stickerIds: t
      })
    },
    sendGreetMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        {
          messageReference: i,
          allowedMentions: s
        } = n;
      return r.tn.post({
        url: el.ANM.MESSAGES_GREET(e),
        body: {
          sticker_ids: [t],
          allowed_mentions: s,
          message_reference: i
        },
        oldFormErrors: !0
      }).then(n => (M.Z.donateSentMessage(n.body.content, e), ef.receiveMessage(e, n.body), o.Z.dispatch({
        type: "STICKER_TRACK_USAGE",
        stickerIds: [t]
      }), n), t => {
        throw ec.log("Failed to send greeting"), 429 !== t.status && ef.sendClydeError(e, t.body.code), o.Z.dispatch({
          type: "MESSAGE_SEND_FAILED",
          messageId: t.body.id,
          channelId: e
        }), t
      })
    },
    sendPollMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return ef._sendMessage(e, {
        content: "",
        tts: !1,
        validNonShortcutEmojis: [],
        invalidEmojis: []
      }, {
        ...n,
        poll: t
      })
    },
    _sendMessage(e, t, n) {
      var i, r, s;
      let a = (0, B.Z)(e);
      if (null != a) return eE.info("Converting channel to a private channel"), a.then(e => {
        eE.info("Finished converting channel to a private channel"), ef._sendMessage(e, t, n)
      });
      let _ = t.content,
        {
          invalidEmojis: d,
          validNonShortcutEmojis: c,
          tts: f = !1
        } = t,
        {
          activityAction: N,
          location: A,
          suggestedInvite: m,
          stickerIds: p,
          messageReference: g,
          allowedMentions: L,
          poll: b
        } = n,
        V = null !== (r = n.flags) && void 0 !== r ? r : 0,
        [F, Y] = (0, H.ZP)(_);
      F && (_ = Y, V = (0, en.pj)(V, el.iLy.SUPPRESS_NOTIFICATIONS));
      let j = (null === (i = n.messageReference) || void 0 === i ? void 0 : i.type) === el.Uvt.FORWARD;
      if ("" === _ && null == N && null == p && null == b && !j) return Promise.resolve();
      let z = null != g ? el.uaV.REPLY : el.uaV.DEFAULT,
        q = null !== (s = n.nonce) && void 0 !== s ? s : (0, y.r)();
      if (!1 !== n.eagerDispatch) {
        let t = (0, P.ZP)({
          channelId: e,
          content: _,
          tts: f,
          type: z,
          messageReference: g,
          allowedMentions: L,
          flags: 0 !== V ? V : void 0,
          nonce: q,
          poll: (0, k.x9)(b)
        });
        (0, G.EL)(e, t.id), null != p && (t.sticker_items = p.map(e => Z.Z.getStickerById(e)).filter(e => null != e)), ef.receiveMessage(e, t, !0, n)
      }
      if (!eI && null != d && d.length > 0) {
        let t, n;
        eI = !0;
        let i = ee.default.getCurrentUser();
        d.some(e => e.animated) && !es.ZP.canUseAnimatedEmojis(i) ? (t = ed.Z.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE, n = "INVALID_ANIMATED_EMOJI_BODY") : X.Z.canWithPartialContext(el.Plq.USE_EXTERNAL_EMOJIS, {
          channelId: e
        }) ? (t = ed.Z.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE, n = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (t = ed.Z.Messages.INVALID_EXTERNAL_EMOJI_BODY, n = "INVALID_EXTERNAL_EMOJI_BODY"), ef.sendBotMessage(e, t, n)
      }
      let Q = {
        type: l.$V.SEND,
        message: {
          channelId: e,
          content: _,
          nonce: q,
          tts: f,
          message_reference: g,
          allowed_mentions: L,
          flags: V
        }
      };
      if (null != N) {
        let e = N.type === el.mFx.JOIN_REQUEST ? null == N ? void 0 : N.activity.session_id : W.default.getSessionId();
        if (null != e) {
          let t = {
              type: N.type,
              session_id: e
            },
            {
              activity: n
            } = N;
          null != n.party && null != n.party.id && (t.party_id = n.party.id), Q.message.application_id = n.application_id, Q.message.activity = t
        }
      }
      return null != b && (Q.message.poll = b), null != p && (Q.message.sticker_ids = p), w.Z.isEnabled() && (Q.message.has_poggermode_enabled = !0), new Promise((t, i) => {
        let r = Date.now(),
          s = l.ZP.length,
          a = Math.floor(1e4 * Math.random());
        eE.info("Queueing message to be sent LogId:".concat(a)), l.ZP.enqueue(Q, a => {
          let d = Date.now() - r;
          if (a.ok) {
            M.Z.donateSentMessage(_, e), ef.receiveMessage(e, a.body, !0, {
              sendAnalytics: {
                duration: d,
                queueSize: s
              },
              poll: b
            });
            let i = eo.default.cast(e),
              r = R.Z.getRequest(i);
            if (null != r) {
              let {
                guildId: t,
                userId: n,
                applicationStatus: i
              } = r;
              (0, T.aC)({
                guildId: t,
                channelId: e,
                messageId: a.body.id,
                joinRequestStatus: i,
                joinRequestUserId: n
              })
            }
            v.Z.recordMessageSendApiResponse(q);
            o.Z.dispatch({
              type: "SLOWMODE_RESET_COOLDOWN",
              slowmodeType: $.S.SendMessage,
              channelId: e
            }), o.Z.dispatch({
              type: "EMOJI_TRACK_USAGE",
              emojiUsed: c
            }), o.Z.dispatch({
              type: "STICKER_TRACK_USAGE",
              stickerIds: p
            }), o.Z.dispatch({
              type: "LOCAL_MESSAGE_CREATE",
              message: {
                channel_id: e,
                author: ee.default.getCurrentUser()
              }
            }), ! function(e) {
              let {
                content: t,
                channelId: n,
                messageId: i,
                location: r,
                suggested: s = null,
                overrideProperties: o = {}
              } = e;
              (0, S.ZP)(t).forEach(e => {
                let {
                  type: t,
                  code: a
                } = e;
                if (t === h.g.INVITE) eh({
                  inviteKey: a,
                  channelId: n,
                  messageId: i,
                  location: r,
                  suggested: s,
                  overrideProperties: o
                });
                else if (t === h.g.TEMPLATE) {
                  let e = C.Z.getGuildTemplate(a);
                  if (null == e || e.state === e_.Rj.RESOLVING) return;
                  u.ZP.trackWithMetadata(el.rMx.GUILD_TEMPLATE_LINK_SENT, {
                    guild_template_code: a,
                    guild_template_name: e.name,
                    guild_template_description: e.description,
                    guild_template_guild_id: e.sourceGuildId
                  })
                } else if (t === h.g.BUILD_OVERRIDE);
                else if (t === h.g.MANUAL_BUILD_OVERRIDE);
                else if (t === h.g.EVENT);
                else if (t === h.g.CHANNEL_LINK);
                else if (t === h.g.APP_DIRECTORY_PROFILE)(0, E.y)(a);
                else if (t === h.g.APP_DIRECTORY_STOREFRONT)(0, E.y)(a, "storefront");
                else if (t === h.g.APP_DIRECTORY_STOREFRONT_SKU) {
                  let e = (0, I.Q)(a);
                  null != e && (0, E.y)(e.applicationId, "storefront_sku")
                } else if (t === h.g.ACTIVITY_BOOKMARK);
                else if (t === h.g.EMBEDDED_ACTIVITY_INVITE);
                else if (t === h.g.GUILD_PRODUCT);
                else if (t === h.g.SERVER_SHOP);
                else if (t === h.g.QUESTS_EMBED)(0, x.dA)({
                  questId: a,
                  event: el.rMx.QUEST_LINK_SHARED,
                  trackGuildAndChannelMetadata: !0
                });
                else throw Error("Unknown coded link type: ".concat(t))
              })
            }({
              content: _,
              channelId: e,
              messageId: a.body.id,
              location: null != A ? A : "chat_input",
              suggested: m
            }), ! function(e, t, n, i, r) {
              (0, ei.Q_)(e).forEach(e => {
                let s = K.Z.getChannel(t);
                null != s && u.ZP.trackWithMetadata(el.rMx.GIFT_CODE_SENT, {
                  location: i,
                  gift_code: e,
                  guild_id: s.getGuildId(),
                  channel_id: s.id,
                  channel_type: s.type,
                  message_id: n,
                  automatic_send: r
                })
              })
            }(_, e, a.body.id, null != A ? A : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), t(a)
          } else {
            var f;
            ec.log("Failed to send message", {
              hasErr: a.hasErr,
              status: a.status,
              code: null === (f = a.body) || void 0 === f ? void 0 : f.code,
              error: a.err
            });
            let t = !1;
            if (a.hasErr) "ABORTED" === a.err.code && (t = !0);
            else if (a.status >= 400 && a.status < 500 && a.body) {
              if (a.body.code === el.evJ.SLOWMODE_RATE_LIMITED) {
                let t = a.body.retry_after;
                null != t && t > 0 && o.Z.dispatch({
                  type: "SLOWMODE_SET_COOLDOWN",
                  channelId: e,
                  slowmodeType: $.S.SendMessage,
                  cooldownMs: t * et.Z.Millis.SECOND
                })
              } else O.U8.has(a.body.code) ? o.Z.dispatch({
                type: "MESSAGE_SEND_FAILED_AUTOMOD",
                messageData: Q,
                errorResponseBody: {
                  code: a.body.code,
                  message: a.body.message
                }
              }) : a.body.code === el.evJ.POGGERMODE_TEMPORARILY_DISABLED ? o.Z.dispatch({
                type: "POGGERMODE_TEMPORARILY_DISABLED"
              }) : null != b || j || ef.sendClydeError(e, a.body.code)
            }
            t ? ef.deleteMessage(e, q, !0) : (o.Z.dispatch({
              type: "MESSAGE_SEND_FAILED",
              messageId: q,
              channelId: e,
              shouldNotify: !0
            }), (0, U.x)({
              failureCode: a.hasErr ? void 0 : a.status,
              errorMessage: a.hasErr ? a.err.message : void 0
            }), D.i.getCurrentConfig({
              location: "MessageActionCreators"
            }).enabled && l.ZP.cancelPendingSendRequests(e).forEach(e => {
              ec.log("Cancelling pending message", e.nonce), o.Z.dispatch({
                type: "MESSAGE_SEND_FAILED",
                messageId: e.nonce,
                channelId: e.channelId
              })
            })), i(a)
          }
        }, a)
      })
    },
    startEditMessage(e, t, n, i) {
      o.Z.dispatch({
        type: "MESSAGE_START_EDIT",
        channelId: e,
        messageId: t,
        content: n,
        source: i
      })
    },
    updateEditMessage(e, t, n) {
      o.Z.dispatch({
        type: "MESSAGE_UPDATE_EDIT",
        channelId: e,
        textValue: t,
        richValue: n
      })
    },
    endEditMessage(e, t) {
      o.Z.dispatch({
        type: "MESSAGE_END_EDIT",
        channelId: e,
        response: t
      })
    },
    async editMessage(e, t, n) {
      let {
        content: i
      } = n;
      await F.Z.unarchiveThreadIfNecessary(e);
      let r = function(e, t) {
          let n = q.Z.getMessage(e, t);
          if (null == n || n.type !== el.uaV.REPLY) return;
          let i = V.Z.getMessageByReference(n.messageReference);
          if (!(i.state !== V.Y.LOADED || n.mentions.includes(i.message.author.id))) return {
            parse: Object.values(el.hCA),
            replied_user: !1
          }
        }(e, t),
        a = {
          channelId: e,
          messageId: t,
          content: i,
          allowed_mentions: r
        };
      l.ZP.enqueue({
        type: l.$V.EDIT,
        message: a
      }, n => {
        let i = !n.hasErr && O.U8.has(n.body.code);
        if (i) {
          let e = {
            type: l.$V.EDIT,
            message: a
          };
          o.Z.dispatch({
            type: "MESSAGE_EDIT_FAILED_AUTOMOD",
            messageData: e,
            errorResponseBody: {
              code: n.body.code,
              message: n.body.message
            }
          })
        }
        n.hasErr ? s.uv.announce(ed.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : i ? s.uv.announce(ed.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : s.uv.announce(ed.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED), ef.endEditMessage(e, n.hasErr ? void 0 : n), ef.focusMessage({
          channelId: e,
          messageId: t
        })
      })
    },
    async suppressEmbeds(e, t) {
      await F.Z.unarchiveThreadIfNecessary(e), r.tn.patch({
        url: el.ANM.MESSAGE(e, t),
        body: {
          flags: el.iLy.SUPPRESS_EMBEDS
        },
        oldFormErrors: !0
      })
    },
    async patchMessageAttachments(e, t, n) {
      await F.Z.unarchiveThreadIfNecessary(e), r.tn.patch({
        url: el.ANM.MESSAGE(e, t),
        body: {
          attachments: n
        },
        oldFormErrors: !0
      })
    },
    async deleteMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = () => {
          o.Z.dispatch({
            type: "MESSAGE_DELETE",
            id: t,
            channelId: e
          }).then(() => {
            s.uv.announce(ed.Z.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED)
          })
        };
      n ? i() : (await F.Z.unarchiveThreadIfNecessary(e), r.tn.del({
        url: el.ANM.MESSAGE(e, t),
        oldFormErrors: !0
      }).then(() => {
        i()
      }));
      let a = q.Z.getMessage(e, t);
      (null == a ? void 0 : a.type) === el.uaV.GUILD_INVITE_REMINDER && (0, b.O)()
    },
    dismissAutomatedMessage(e) {
      null != e.loggingName && u.ZP.trackWithMetadata(el.rMx.AUTOMATED_MESSAGE_DISMISSED, {
        message_name: e.loggingName,
        message_author: e.author.username
      }), this.deleteMessage(e.channel_id, e.id, !0)
    },
    revealMessage(e, t) {
      o.Z.dispatch({
        type: "MESSAGE_REVEAL",
        channelId: e,
        messageId: t
      })
    },
    crosspostMessage: (e, t) => r.tn.post({
      url: el.ANM.MESSAGE_CROSSPOST(e, t),
      oldFormErrors: !0
    }).catch(e => {
      let t;
      t = 429 === e.status ? ed.Z.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
        retryAfter: Math.floor(e.body.retry_after / 60)
      }) : ed.Z.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY, ea.Z.show({
        title: ed.Z.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
        body: t,
        confirmText: ed.Z.Messages.OKAY
      })
    }),
    trackInvite: eh
  };
t.Z = ef