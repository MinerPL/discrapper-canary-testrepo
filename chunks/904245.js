"use strict";
n.r(t), n("411104"), n("627341"), n("47120"), n("789020");
var i = n("278074"),
  r = n("873546"),
  a = n("544891"),
  s = n("780384"),
  o = n("570140"),
  l = n("89892"),
  u = n("673750"),
  d = n("367907"),
  _ = n("287328"),
  c = n("86670"),
  E = n("685736"),
  I = n("970606"),
  T = n("960904"),
  f = n("830121"),
  S = n("710845"),
  h = n("163268"),
  A = n("38618"),
  m = n("687516"),
  N = n("539573"),
  p = n("826581"),
  O = n("409059"),
  C = n("264229"),
  R = n("366980"),
  g = n("287925"),
  L = n("779832"),
  v = n("459618"),
  D = n("541288"),
  M = n("3148"),
  y = n("785359"),
  P = n("646504"),
  U = n("64078"),
  b = n("351780"),
  G = n("79390"),
  w = n("643266"),
  k = n("617136");
n("807092");
var B = n("869765"),
  V = n("926491"),
  x = n("467798"),
  F = n("346479"),
  H = n("218543"),
  Y = n("199902"),
  j = n("314897"),
  W = n("592125");
n("323873");
var K = n("701190"),
  z = n("375954"),
  Z = n("496675"),
  X = n("158776"),
  Q = n("306680"),
  q = n("944486"),
  J = n("914010"),
  $ = n("300429"),
  ee = n("594174"),
  et = n("626135"),
  en = n("70956"),
  ei = n("630388"),
  er = n("669079"),
  ea = n("63063"),
  es = n("74538"),
  eo = n("709054"),
  el = n("668781"),
  eu = n("981631"),
  ed = n("176505"),
  e_ = n("58346"),
  ec = n("689938");
let eE = new S.default("MessageActionCreators"),
  eI = new S.default("MessageQueue"),
  eT = !1;
class ef {
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

function eS(e) {
  let {
    inviteKey: t,
    channelId: n,
    messageId: i,
    location: r,
    suggested: a = null,
    overrideProperties: s = {}
  } = e, o = (0, C.parseExtraDataFromInviteKey)(t), l = W.default.getChannel(n);
  if (null != l) {
    let e = null;
    l.isMultiUserDM() ? e = eu.LoggingInviteTypes.GDM_INVITE : !l.isPrivate() && (e = eu.LoggingInviteTypes.SERVER_INVITE);
    let n = {},
      _ = K.default.getInvite(t);
    if (null != _ && _.state === eu.InviteStates.RESOLVED && null != _.channel) {
      var u;
      let t = _.channel;
      n.invite_channel_id = t.id, n.invite_guild_id = null === (u = _.guild) || void 0 === u ? void 0 : u.id, n.invite_channel_type = t.type, null != _.inviter && (n.invite_inviter_id = _.inviter.id);
      let i = Y.default.getLastActiveStream();
      if (null != i && i.channelId === t.id) {
        e = eu.LoggingInviteTypes.STREAM, n.destination_user_id = i.ownerId;
        let t = (0, m.getStreamerApplication)(i, X.default);
        n.application_id = null != t ? t.id : null
      }
    }
    null != a && (n.is_suggested = a.isAffinitySuggestion, n.row_num = a.rowNum, n.num_total = a.numTotal, n.num_affinity_connections = a.numAffinityConnections, n.is_filtered = a.isFiltered), n = {
      ...n,
      location: r,
      invite_type: e,
      invite_code: o.baseCode,
      guild_id: l.getGuildId(),
      channel_id: l.id,
      message_id: i,
      send_type: eu.SendTypes.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: o.guildScheduledEventId,
      ...s
    }, d.default.trackWithMetadata(eu.AnalyticEvents.INVITE_SENT, n)
  } else {
    let e = {},
      n = K.default.getInvite(t);
    null != n && n.state === eu.InviteStates.RESOLVED && null != n.inviter && (e.invite_inviter_id = n.inviter.id, e = {
      ...e,
      location: r,
      invite_type: eu.LoggingInviteTypes.FRIEND_INVITE,
      invite_code: o.baseCode,
      message_id: i,
      send_type: eu.SendTypes.DIRECT_MESSAGE,
      invite_guild_scheduled_event_id: o.guildScheduledEventId,
      ...s
    }, d.default.trackWithMetadata(eu.AnalyticEvents.INVITE_SENT, e))
  }
}
let eh = {
    [eu.AbortCodes.EMAIL_VERIFICATION_REQUIRED]: {
      messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
      messageGetter: () => ec.default.Messages.BOT_REQUIRES_EMAIL_VERIFICATION
    },
    [eu.AbortCodes.INVALID_MESSAGE_SEND_USER]: {
      messageName: "BOT_DM_SEND_FAILED_WITH_HELP_LINK",
      messageGetter: () => ec.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
        helpUrl: ea.default.getArticleURL(eu.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
      })
    },
    [eu.AbortCodes.RATE_LIMIT_DM_OPEN]: {
      messageName: "BOT_DM_RATE_LIMITED",
      messageGetter: () => ec.default.Messages.BOT_DM_RATE_LIMITED
    },
    [eu.AbortCodes.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => ec.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
    },
    [eu.AbortCodes.SLOWMODE_RATE_LIMITED]: {
      messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
      messageGetter: () => ec.default.Messages.BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED
    }
  },
  eA = {
    receiveMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      o.default.dispatch({
        type: "MESSAGE_CREATE",
        channelId: e,
        message: t,
        optimistic: n,
        sendMessageOptions: i,
        isPushNotification: !1
      })
    },
    sendBotMessage(e, t, n, i) {
      null != n && d.default.trackWithMetadata(eu.AnalyticEvents.AUTOMATED_MESSAGE_RECEIVED, {
        message_author: "Clyde",
        message_name: n
      }), eA.receiveMessage(e, (0, M.createBotMessage)({
        messageId: i,
        channelId: e,
        content: t,
        loggingName: n
      }))
    },
    sendClydeError(e) {
      let t, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = W.default.getChannel(e);
      null != r && (i === eu.AbortCodes.SLOWMODE_RATE_LIMITED ? (t = ec.default.Messages.CHANNEL_SLOWMODE_DESC.format({
        seconds: r.rateLimitPerUser
      }), n = "SLOWMODE_RATE_LIMITED") : i === eu.AbortCodes.INVALID_MESSAGE_SEND_USER ? (t = ec.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
        helpUrl: ea.default.getArticleURL(eu.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
      }), n = "INVALID_MESSAGE_SEND_USER") : i === eu.AbortCodes.TOO_MANY_THREADS ? (t = r.isForumLikeChannel() || r.isForumPost() ? ec.default.Messages.BOT_DM_TOO_MANY_POSTS : ec.default.Messages.BOT_DM_TOO_MANY_THREADS, n = "TOO_MANY_THREADS") : i === eu.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? (t = ec.default.Messages.BOT_DM_TOO_MANY_ANNOUNCEMENT_THREADS, n = "TOO_MANY_ANNOUNCEMENT_THREADS") : i === eu.AbortCodes.HARMFUL_LINK_MESSAGE_BLOCKED ? (t = ec.default.Messages.HARMFUL_LINK_MESSAGE_BLOCKED_ERROR.format({
        helpUrl: eu.MarketingURLs.HARMFUL_LINKS
      }), n = "HARMFUL_LINK_MESSAGE_BLOCKED") : i in eh ? (n = eh[i].messageName, t = eh[i].messageGetter()) : (t = ec.default.Messages.BOT_DM_SEND_FAILED_WITH_HELP_LINK.format({
        helpUrl: ea.default.getArticleURL(eu.HelpdeskArticles.DM_COULD_NOT_BE_DELIVERED)
      }), n = "SEND_FAILED (".concat(i, ")")), eA.sendBotMessage(e, t, n))
    },
    sendExplicitMediaClydeError(e, t, n) {
      let r = W.default.getChannel(e);
      if (null == r) return;
      let {
        message: a,
        messageName: s
      } = (0, i.match)({
        isDM: r.isDM(),
        isGDM: r.isGroupDM()
      }).with({
        isDM: !0
      }, () => ({
        message: ec.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
        messageName: "BOT_DM_EXPLICIT_CONTENT"
      })).with({
        isDM: !1,
        isGDM: !0
      }, () => ({
        message: ec.default.Messages.SENDER_BLOCKED_MEDIA_BOT_DMS_MESSAGE,
        messageName: "BOT_GDM_EXPLICIT_CONTENT"
      })).otherwise(() => ({
        message: ec.default.Messages.SENDER_BLOCKED_MEDIA_BOT_GUILD_MESSAGE,
        messageName: "BOT_GUILD_EXPLICIT_CONTENT"
      })), l = (0, M.createNonce)();
      eA.sendBotMessage(e, a, s, l), (0, h.trackMediaRedactionAction)({
        action: h.TrackMediaRedactionActionType.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
        messageId: l,
        channelId: e,
        context: n
      }), null != t && t.length > 0 && o.default.dispatch({
        type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
        messageId: l,
        channelId: e,
        attachments: t
      })
    },
    truncateMessages(e, t, n) {
      o.default.dispatch({
        type: "TRUNCATE_MESSAGES",
        channelId: e,
        truncateBottom: t,
        truncateTop: n
      })
    },
    clearChannel(e) {
      o.default.dispatch({
        type: "CLEAR_MESSAGES",
        channelId: e
      })
    },
    jumpToPresent(e, t) {
      eA.trackJump(e, null, "Present");
      let n = {
        present: !0
      };
      z.default.hasPresent(e) ? o.default.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        jump: n,
        channelId: e,
        limit: t
      }) : eA.fetchMessages({
        channelId: e,
        limit: t,
        jump: n
      })
    },
    trackJump(e, t, n, i) {
      d.default.trackWithMetadata(eu.AnalyticEvents.JUMP, {
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
        context: a,
        extraProperties: s = null,
        isPreload: o,
        returnMessageId: l,
        skipLocalFetch: u,
        jumpType: d
      } = e;
      return "string" == typeof a && eA.trackJump(t, n, a, s), eA.fetchMessages({
        channelId: t,
        limit: eu.MAX_MESSAGES_FOR_JUMP,
        jump: {
          messageId: n,
          flash: i,
          offset: r,
          returnMessageId: l,
          jumpType: d
        },
        isPreload: o,
        skipLocalFetch: u
      })
    },
    focusMessage(e) {
      let {
        channelId: t,
        messageId: n
      } = e;
      eA.fetchMessages({
        channelId: t,
        limit: eu.MAX_MESSAGES_FOR_JUMP,
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
        limit: r,
        jump: s,
        focus: u,
        isPreload: d,
        skipLocalFetch: _,
        truncate: c
      } = e, E = W.default.getChannel(t), I = A.default.isConnectedOrOverlay(), T = Date.now();
      if (null != E && E.type === eu.ChannelTypes.GUILD_STORE) return !1;
      if (t === ed.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return;
      if (eE.log("Fetching messages for ".concat(t, " between ").concat(n, " and ").concat(i, ". jump=").concat(JSON.stringify(s))), eA._tryFetchMessagesCached({
          channelId: t,
          before: n,
          after: i,
          limit: r,
          jump: s,
          focus: u,
          truncate: c
        })) return;
      H.default.fetchMessages.recordStart();
      let f = null != s ? s : void 0;
      null == f && null != u && (f = {
        ...u
      });
      let S = l.default.getOrCreate(t).loadStart(f);
      l.default.commit(S), o.default.dispatch({
        type: "LOAD_MESSAGES"
      });
      let h = null == f ? void 0 : f.messageId,
        m = new ef;
      return !_ && this.fetchLocalMessages(t, n, i, r, m), a.HTTP.get({
        url: eu.Endpoints.MESSAGES(t),
        query: {
          before: n,
          after: i,
          limit: r,
          around: h,
          preload: d
        },
        retries: 2,
        oldFormErrors: !0
      }).then(e => (H.default.fetchMessages.recordEnd(), H.default.dispatchMessages.measure(() => {
        let a = e.body,
          l = null != n,
          u = null != i,
          d = null == n && null == i,
          _ = null != h || a.length === r && (l || d),
          E = null != h || u && a.length === r;
        if (null != h) {
          let e = Math.floor(r / 2),
            n = [h, ...a.map(e => {
              let {
                id: t
              } = e;
              return t
            })].filter((e, t, n) => n.indexOf(e) === t).sort(eo.default.compare).indexOf(h);
          if (n < e && (_ = !1), a.length - n < e && (E = !1), E && a.length > 0) {
            let e = Q.default.lastMessageId(t);
            a[0].id === e && (E = !1)
          }
        }
        eE.log("Fetched ".concat(a.length, " messages for ").concat(t, " isBefore:").concat(l, " isAfter:").concat(u)), m.markComplete(), o.default.dispatch({
          type: "LOAD_MESSAGES_SUCCESS",
          channelId: t,
          messages: a,
          isBefore: l,
          isAfter: u,
          hasMoreBefore: _,
          hasMoreAfter: E,
          limit: r,
          jump: s,
          isStale: !I || A.default.lastTimeConnectedChanged() >= T,
          truncate: c
        })
      }), !0), () => (eE.log("Failed to fetch messages for ".concat(t)), o.default.dispatch({
        type: "LOAD_MESSAGES_FAILURE",
        channelId: t
      }), !1))
    },
    async fetchLocalMessages(e, t, n, i, r) {
      let a = W.default.getBasicChannel(e),
        s = l.default.getOrCreate(e),
        u = _.default.database();
      if (null == u || null == a || null != t || null != n) {
        H.default.addLocalMessages(e, -1);
        return
      }
      if (s.ready && !s.cached) {
        H.default.addLocalMessages(e, -2);
        return
      }
      let d = await (0, c.tryLoadAsync)(() => E.default.load(u, e, i));
      if (null == d) {
        H.default.addLocalMessages(e, -3);
        return
      }
      if (eE.log("fetched ".concat(d.messages.length, " messages from local database (channel_id: ").concat(e, ", remote_fetch_completed: ").concat(r.completed, ")")), H.default.addLocalMessages(e, d.messages.length), !r.completed && d.messages.length > 0) {
        let t = d.messages.length >= i && d.connectionId === A.default.lastTimeConnectedChanged();
        o.default.dispatch({
          type: "LOCAL_MESSAGES_LOADED",
          guildId: a.guild_id,
          channelId: e,
          users: d.users,
          members: d.members,
          messages: d.messages,
          stale: !t
        })
      }
    },
    async fetchNewLocalMessages(e, t) {
      var n;
      let i = W.default.getBasicChannel(e),
        r = _.default.database();
      if (null == r || null == i) return;
      let a = l.default.getOrCreate(e);
      if (a.hasMoreAfter) return;
      let s = await (0, c.tryLoadAsync)(() => E.default.load(r, e, t));
      if (null == s) return;
      let u = null === (n = (a = l.default.getOrCreate(e)).last()) || void 0 === n ? void 0 : n.id,
        d = null == u ? s.messages : s.messages.filter(e => eo.default.compare(e.id, u) > 0);
      eE.log("Fetched ".concat(s.messages.length, " messages from the cache after foregrounding. ").concat(d.length, " are new")), 0 !== d.length && o.default.dispatch({
        type: "LOCAL_MESSAGES_LOADED",
        guildId: i.guild_id,
        channelId: e,
        users: s.users,
        members: s.members,
        messages: d,
        stale: !0
      })
    },
    _tryFetchMessagesCached(e) {
      let {
        channelId: t,
        before: n,
        after: i,
        limit: r,
        jump: a,
        focus: s,
        truncate: l
      } = e, u = z.default.getMessages(t);
      if (u.cached || !u.ready) return !1;
      if ((null == a ? void 0 : a.messageId) != null || (null == s ? void 0 : s.messageId) != null) {
        if ((null == a ? void 0 : a.messageId) != null && u.has(a.messageId, !1)) return o.default.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: a,
          limit: r,
          truncate: l
        }), !0;
        if ((null == s ? void 0 : s.messageId) != null) {
          if (u.has(s.messageId, !1)) return o.default.dispatch({
            type: "LOAD_MESSAGES_SUCCESS_CACHED",
            channelId: t,
            focus: s,
            limit: r,
            truncate: l
          }), !0;
          a = {
            ...s
          }
        }
        let e = (null == a ? void 0 : a.messageId) != null ? eo.default.extractTimestamp(null == a ? void 0 : a.messageId) : 0,
          n = u.first(),
          i = u.last();
        if (!u.hasMoreBefore && null != n && eo.default.extractTimestamp(n.id) >= e || !u.hasMoreAfter && null != i && eo.default.extractTimestamp(i.id) <= e || null != n && null != i && eo.default.extractTimestamp(n.id) < e && eo.default.extractTimestamp(i.id) > e) return o.default.dispatch({
          type: "LOAD_MESSAGES_SUCCESS_CACHED",
          channelId: t,
          jump: a,
          limit: eu.MAX_MESSAGES_FOR_JUMP
        }), !0
      } else if (null != n && u.hasBeforeCached(n)) return o.default.dispatch({
        type: "LOAD_MESSAGES_SUCCESS_CACHED",
        channelId: t,
        before: n,
        limit: r,
        truncate: l
      }), !0;
      else if (null != i && u.hasAfterCached(i)) return o.default.dispatch({
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
      let a = await (0, w.default)(e);
      if (null != a) return eA.sendMessage(a, t, i, r);
      let s = () => eA._sendMessage(e, t, r),
        o = g.LocalMessageBackgroundSendingExperiment.getCurrentConfig({
          location: "8e1e29_1"
        }).enableBackgroundSending ? L.default.backgroundify(s, void 0) : s,
        l = null !== (n = r.nonce) && void 0 !== n ? n : (0, M.createNonce)();
      return (r = {
        ...r,
        nonce: l
      }, v.default.recordMessageSendAttempt(e, l), z.default.isReady(e)) ? o() : i && e !== ed.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID ? (eI.info("Waiting for channel ".concat(e, " to be ready before sending.")), new Promise((t, n) => {
        z.default.whenReady(e, () => {
          eI.info("Channel ".concat(e, " is ready for sending now.")), o().then(t, n)
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
          parse: Object.values(eu.AllowedMentionTypes),
          replied_user: !1
        }
      }
    },
    sendInvite: (e, t, n, i) => eA._sendMessage(e, {
      content: (0, R.default)(t),
      tts: !1,
      validNonShortcutEmojis: [],
      invalidEmojis: []
    }, {
      location: n,
      suggestedInvite: null != i ? i : void 0
    }),
    sendActivityBookmark: (e, t, n, i) => eA._sendMessage(e, {
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
      return eA._sendMessage(e, {
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
          allowedMentions: r
        } = n;
      return a.HTTP.post({
        url: eu.Endpoints.MESSAGES_GREET(e),
        body: {
          sticker_ids: [t],
          allowed_mentions: r,
          message_reference: i
        },
        oldFormErrors: !0
      }).then(n => (D.default.donateSentMessage(n.body.content, e), eA.receiveMessage(e, n.body), o.default.dispatch({
        type: "STICKER_TRACK_USAGE",
        stickerIds: [t]
      }), n), t => {
        throw eE.log("Failed to send greeting"), 429 !== t.status && eA.sendClydeError(e, t.body.code), o.default.dispatch({
          type: "MESSAGE_SEND_FAILED",
          messageId: t.body.id,
          channelId: e
        }), t
      })
    },
    sendPollMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return eA._sendMessage(e, {
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
      var i, a;
      let s = (0, w.default)(e);
      if (null != s) return eI.info("Converting channel to a private channel"), s.then(e => {
        eI.info("Finished converting channel to a private channel"), eA._sendMessage(e, t, n)
      });
      let l = t.content,
        {
          invalidEmojis: _,
          validNonShortcutEmojis: c,
          tts: E = !1
        } = t,
        {
          activityAction: S,
          location: h,
          suggestedInvite: A,
          stickerIds: m,
          messageReference: C,
          allowedMentions: R,
          poll: g
        } = n,
        L = null !== (i = n.flags) && void 0 !== i ? i : 0,
        [P, B] = (0, x.default)(l);
      if (P && (l = B, L = (0, ei.addFlag)(L, eu.MessageFlags.SUPPRESS_NOTIFICATIONS)), "" === l && null == S && null == m && null == g) return Promise.resolve();
      let F = null != C ? eu.MessageTypes.REPLY : eu.MessageTypes.DEFAULT,
        H = null !== (a = n.nonce) && void 0 !== a ? a : (0, M.createNonce)();
      if (!1 !== n.eagerDispatch) {
        let t = (0, M.default)({
          channelId: e,
          content: l,
          tts: E,
          type: F,
          messageReference: C,
          allowedMentions: R,
          flags: 0 !== L ? L : void 0,
          nonce: H,
          poll: (0, G.createPollServerDataFromCreateRequest)(g)
        });
        (0, U.updateComboOnMessageSend)(e, t.id), null != m && (t.sticker_items = m.map(e => V.default.getStickerById(e)).filter(e => null != e)), eA.receiveMessage(e, t, !0, n)
      }
      if (!eT && null != _ && _.length > 0) {
        let t, n;
        eT = !0;
        let i = ee.default.getCurrentUser();
        _.some(e => e.animated) && !es.default.canUseAnimatedEmojis(i) ? (t = ec.default.Messages.INVALID_ANIMATED_EMOJI_BODY_UPGRADE, n = "INVALID_ANIMATED_EMOJI_BODY") : Z.default.canWithPartialContext(eu.Permissions.USE_EXTERNAL_EMOJIS, {
          channelId: e
        }) ? (t = ec.default.Messages.INVALID_EXTERNAL_EMOJI_BODY_UPGRADE, n = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE") : (t = ec.default.Messages.INVALID_EXTERNAL_EMOJI_BODY, n = "INVALID_EXTERNAL_EMOJI_BODY"), eA.sendBotMessage(e, t, n)
      }
      let Y = {
        type: u.MessageDataType.SEND,
        message: {
          channelId: e,
          content: l,
          nonce: H,
          tts: E,
          message_reference: C,
          allowed_mentions: R,
          flags: L
        }
      };
      if (null != S) {
        let e = S.type === eu.ActivityActionTypes.JOIN_REQUEST ? null == S ? void 0 : S.activity.session_id : j.default.getSessionId();
        if (null != e) {
          let t = {
              type: S.type,
              session_id: e
            },
            {
              activity: n
            } = S;
          null != n.party && null != n.party.id && (t.party_id = n.party.id), Y.message.application_id = n.application_id, Y.message.activity = t
        }
      }
      return null != g && (Y.message.poll = g), null != m && (Y.message.sticker_ids = m), b.default.isEnabled() && (Y.message.has_poggermode_enabled = !0), new Promise((t, i) => {
        let a = Date.now(),
          s = u.default.length,
          _ = Math.floor(1e4 * Math.random());
        eI.info("Queueing message to be sent LogId:".concat(_)), u.default.enqueue(Y, u => {
          let _ = Date.now() - a;
          if (u.ok) {
            D.default.donateSentMessage(l, e), eA.receiveMessage(e, u.body, !0, {
              sendAnalytics: {
                duration: _,
                queueSize: s
              },
              poll: g
            });
            let i = eo.default.cast(e),
              a = p.default.getRequest(i);
            if (null != a) {
              let {
                guildId: t,
                userId: n,
                applicationStatus: i
              } = a;
              (0, I.trackClanSendInterviewMessage)({
                guildId: t,
                channelId: e,
                messageId: u.body.id,
                joinRequestStatus: i,
                joinRequestUserId: n
              })
            }
            v.default.recordMessageSendApiResponse(H), o.default.dispatch({
              type: "SLOWMODE_RESET_COOLDOWN",
              slowmodeType: $.SlowmodeType.SendMessage,
              channelId: e
            }), o.default.dispatch({
              type: "EMOJI_TRACK_USAGE",
              emojiUsed: c
            }), o.default.dispatch({
              type: "STICKER_TRACK_USAGE",
              stickerIds: m
            }), o.default.dispatch({
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
                location: a,
                suggested: s = null,
                overrideProperties: o = {}
              } = e;
              (0, f.default)(t).forEach(e => {
                let {
                  type: t,
                  code: l
                } = e;
                if (t === T.CodedLinkType.INVITE) eS({
                  inviteKey: l,
                  channelId: n,
                  messageId: i,
                  location: a,
                  suggested: s,
                  overrideProperties: o
                });
                else if (t === T.CodedLinkType.TEMPLATE) {
                  let e = O.default.getGuildTemplate(l);
                  if (null == e || e.state === e_.GuildTemplateStates.RESOLVING) return;
                  d.default.trackWithMetadata(eu.AnalyticEvents.GUILD_TEMPLATE_LINK_SENT, {
                    guild_template_code: l,
                    guild_template_name: e.name,
                    guild_template_description: e.description,
                    guild_template_guild_id: e.sourceGuildId
                  })
                } else if (t === T.CodedLinkType.BUILD_OVERRIDE);
                else if (t === T.CodedLinkType.MANUAL_BUILD_OVERRIDE);
                else if (t === T.CodedLinkType.EVENT);
                else if (t === T.CodedLinkType.CHANNEL_LINK);
                else if (t === T.CodedLinkType.APP_DIRECTORY_PROFILE) et.default.track(eu.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_SENT, {
                  application_id: l,
                  device_platform: r.isMobile ? "mobile_web" : "desktop_web",
                  guild_id: J.default.getGuildId(),
                  channel_id: q.default.getChannelId()
                });
                else if (t === T.CodedLinkType.ACTIVITY_BOOKMARK);
                else if (t === T.CodedLinkType.EMBEDDED_ACTIVITY_INVITE);
                else if (t === T.CodedLinkType.GUILD_PRODUCT);
                else if (t === T.CodedLinkType.SERVER_SHOP);
                else if (t === T.CodedLinkType.QUESTS_EMBED)(0, k.trackQuestEvent)({
                  questId: l,
                  event: eu.AnalyticEvents.QUEST_LINK_SHARED,
                  trackGuildAndChannelMetadata: !0
                });
                else throw Error("Unknown coded link type: ".concat(t))
              })
            }({
              content: l,
              channelId: e,
              messageId: u.body.id,
              location: null != h ? h : "chat_input",
              suggested: A
            }), ! function(e, t, n, i, r) {
              (0, er.findGiftCodes)(e).forEach(e => {
                let a = W.default.getChannel(t);
                null != a && d.default.trackWithMetadata(eu.AnalyticEvents.GIFT_CODE_SENT, {
                  location: i,
                  gift_code: e,
                  guild_id: a.getGuildId(),
                  channel_id: a.id,
                  channel_type: a.type,
                  message_id: n,
                  automatic_send: r
                })
              })
            }(l, e, u.body.id, null != h ? h : "chat_input", !!n.isGiftLinkSentOnBehalfOfUser), t(u)
          } else {
            var E;
            eE.log("Failed to send message", {
              hasErr: u.hasErr,
              status: u.status,
              code: null === (E = u.body) || void 0 === E ? void 0 : E.code,
              error: u.err
            });
            let t = !1;
            if (u.hasErr) "ABORTED" === u.err.code && (t = !0);
            else if (u.status >= 400 && u.status < 500 && u.body) {
              if (u.body.code === eu.AbortCodes.SLOWMODE_RATE_LIMITED) {
                let t = u.body.retry_after;
                null != t && t > 0 && o.default.dispatch({
                  type: "SLOWMODE_SET_COOLDOWN",
                  channelId: e,
                  slowmodeType: $.SlowmodeType.SendMessage,
                  cooldownMs: t * en.default.Millis.SECOND
                })
              } else N.AUTOMOD_ERROR_CODES.has(u.body.code) ? o.default.dispatch({
                type: "MESSAGE_SEND_FAILED_AUTOMOD",
                messageData: Y,
                errorResponseBody: {
                  code: u.body.code,
                  message: u.body.message
                }
              }) : u.body.code === eu.AbortCodes.POGGERMODE_TEMPORARILY_DISABLED ? o.default.dispatch({
                type: "POGGERMODE_TEMPORARILY_DISABLED"
              }) : null != g || eA.sendClydeError(e, u.body.code)
            }
            t ? eA.deleteMessage(e, H, !0) : (o.default.dispatch({
              type: "MESSAGE_SEND_FAILED",
              messageId: H,
              channelId: e
            }), (0, y.logMessageSendFailure)({
              failureCode: u.hasErr ? void 0 : u.status,
              errorMessage: u.hasErr ? u.err.message : void 0
            })), i(u)
          }
        }, _)
      })
    },
    startEditMessage(e, t, n, i) {
      o.default.dispatch({
        type: "MESSAGE_START_EDIT",
        channelId: e,
        messageId: t,
        content: n,
        source: i
      })
    },
    updateEditMessage(e, t, n) {
      o.default.dispatch({
        type: "MESSAGE_UPDATE_EDIT",
        channelId: e,
        textValue: t,
        richValue: n
      })
    },
    endEditMessage(e, t) {
      o.default.dispatch({
        type: "MESSAGE_END_EDIT",
        channelId: e,
        response: t
      })
    },
    async editMessage(e, t, n) {
      let {
        content: i
      } = n;
      await F.default.unarchiveThreadIfNecessary(e);
      let r = function(e, t) {
          let n = z.default.getMessage(e, t);
          if (null == n || n.type !== eu.MessageTypes.REPLY) return;
          let i = B.default.getMessageByReference(n.messageReference);
          if (i.state === B.ReferencedMessageState.LOADED) {
            if (!n.mentions.includes(i.message.author.id)) return {
              parse: Object.values(eu.AllowedMentionTypes),
              replied_user: !1
            }
          }
        }(e, t),
        a = {
          channelId: e,
          messageId: t,
          content: i,
          allowed_mentions: r
        };
      u.default.enqueue({
        type: u.MessageDataType.EDIT,
        message: a
      }, n => {
        let i = !n.hasErr && N.AUTOMOD_ERROR_CODES.has(n.body.code);
        if (i) {
          let e = {
            type: u.MessageDataType.EDIT,
            message: a
          };
          o.default.dispatch({
            type: "MESSAGE_EDIT_FAILED_AUTOMOD",
            messageData: e,
            errorResponseBody: {
              code: n.body.code,
              message: n.body.message
            }
          })
        }
        n.hasErr ? s.AccessibilityAnnouncer.announce(ec.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_FAILED) : i ? s.AccessibilityAnnouncer.announce(ec.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED_AUTOMOD_BLOCKED) : s.AccessibilityAnnouncer.announce(ec.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_EDITED), eA.endEditMessage(e, n.hasErr ? void 0 : n), eA.focusMessage({
          channelId: e,
          messageId: t
        })
      })
    },
    async suppressEmbeds(e, t) {
      await F.default.unarchiveThreadIfNecessary(e), a.HTTP.patch({
        url: eu.Endpoints.MESSAGE(e, t),
        body: {
          flags: eu.MessageFlags.SUPPRESS_EMBEDS
        },
        oldFormErrors: !0
      })
    },
    async patchMessageAttachments(e, t, n) {
      await F.default.unarchiveThreadIfNecessary(e), a.HTTP.patch({
        url: eu.Endpoints.MESSAGE(e, t),
        body: {
          attachments: n
        },
        oldFormErrors: !0
      })
    },
    async deleteMessage(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = () => {
          o.default.dispatch({
            type: "MESSAGE_DELETE",
            id: t,
            channelId: e
          }).then(() => {
            s.AccessibilityAnnouncer.announce(ec.default.Messages.A11Y_ANNOUNCEMENT_MESSAGE_DELETED)
          })
        };
      n ? i() : (await F.default.unarchiveThreadIfNecessary(e), a.HTTP.del({
        url: eu.Endpoints.MESSAGE(e, t),
        oldFormErrors: !0
      }).then(() => {
        i()
      }));
      let r = z.default.getMessage(e, t);
      (null == r ? void 0 : r.type) === eu.MessageTypes.GUILD_INVITE_REMINDER && (0, P.trackGuildInviteNotificationDismissed)()
    },
    dismissAutomatedMessage(e) {
      null != e.loggingName && d.default.trackWithMetadata(eu.AnalyticEvents.AUTOMATED_MESSAGE_DISMISSED, {
        message_name: e.loggingName,
        message_author: e.author.username
      }), this.deleteMessage(e.channel_id, e.id, !0)
    },
    revealMessage(e, t) {
      o.default.dispatch({
        type: "MESSAGE_REVEAL",
        channelId: e,
        messageId: t
      })
    },
    crosspostMessage: (e, t) => a.HTTP.post({
      url: eu.Endpoints.MESSAGE_CROSSPOST(e, t),
      oldFormErrors: !0
    }).catch(e => {
      let t;
      t = 429 === e.status ? ec.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_BODY.format({
        retryAfter: Math.floor(e.body.retry_after / 60)
      }) : ec.default.Messages.PUBLISH_FOLLOWED_NEWS_GENERIC_BODY, el.default.show({
        title: ec.default.Messages.PUBLISH_FOLLOWED_NEWS_FAIL_TITLE,
        body: t,
        confirmText: ec.default.Messages.OKAY
      })
    }),
    trackInvite: eS
  };
t.default = eA