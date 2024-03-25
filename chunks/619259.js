"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("808653");
var i = n("446674"),
  r = n("913144"),
  l = n("979911"),
  s = n("692038"),
  u = n("42203"),
  o = n("377253"),
  a = n("299039"),
  d = n("600798"),
  c = n("201131"),
  f = n("49111");
let S = {},
  E = 0,
  h = {},
  _ = {},
  g = (e, t) => {
    let n = (0, l.getFailedMessageId)(e),
      i = {
        id: n,
        isBlockedEdit: (0, l.isMessageDataEdit)(e),
        messageData: e,
        errorMessage: (0, d.getAutomodErrorMessage)(e, t)
      };
    S[n] = i, E++
  },
  p = e => S[e],
  C = e => {
    let t = S[e];
    null != t && delete S[e], E++
  };

function I(e) {
  let {
    messageData: t,
    errorResponseBody: n
  } = e;
  return g(t, n), !0
}

function m(e) {
  var t;
  let {
    channelId: n,
    messages: i
  } = e, r = null === (t = u.default.getChannel(n)) || void 0 === t ? void 0 : t.getGuildId();
  if (null == r) return !1;
  let l = _[r],
    s = i.reduce((e, t) => {
      var n;
      let i = t.type === f.MessageTypes.AUTO_MODERATION_ACTION;
      if (!i) return e;
      let r = null === (n = t.embeds) || void 0 === n ? void 0 : n.some(e => {
        let {
          type: t
        } = e;
        return t === f.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
      });
      return r ? null == e || -1 === a.default.compare(e, t.id) ? t.id : void 0 : e
    }, l);
  return null != s && _[r] !== s && (_[r] = s, !0)
}
class T extends i.default.PersistedStore {
  initialize(e) {
    this.waitFor(o.default), null != e && (S = e.automodFailedMessages, h = e.mentionRaidDetectionByGuild)
  }
  getState() {
    return {
      automodFailedMessages: S,
      mentionRaidDetectionByGuild: h,
      lastIncidentAlertMessage: _
    }
  }
  getMessage(e) {
    var t;
    return null == e ? null : null !== (t = p(e)) && void 0 !== t ? t : null
  }
  getMessagesVersion() {
    return E
  }
  getMentionRaidDetected(e) {
    var t;
    return null !== (t = h[e]) && void 0 !== t ? t : null
  }
  getLastIncidentAlertMessage(e) {
    var t;
    return null !== (t = _[e]) && void 0 !== t ? t : null
  }
}
T.displayName = "GuildAutomodMessageStore", T.persistKey = "GuildAutomodMessages";
var v = new T(r.default, {
  CONNECTION_OPEN: function(e) {
    return S = {}, E++, !0
  },
  LOAD_MESSAGES_SUCCESS: m,
  LOCAL_MESSAGES_LOADED: m,
  MESSAGE_CREATE: function(e) {
    let {
      guildId: t,
      message: n
    } = e;
    if (null == t || n.type !== f.MessageTypes.AUTO_MODERATION_ACTION) return !1;
    let i = (0, s.createMessageRecord)(n);
    return !!(0, c.isAutomodMessageRecord)(i) && !!(0, c.isAutomodNotification)(i) && (_[t] = i.id, !0)
  },
  MESSAGE_SEND_FAILED_AUTOMOD: I,
  MESSAGE_EDIT_FAILED_AUTOMOD: I,
  REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
    let {
      messageId: t
    } = e;
    return C(t), !0
  },
  MESSAGE_END_EDIT: function(e) {
    let {
      response: t
    } = e;
    if ((null == t ? void 0 : t.body) == null || t.body.code === f.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) return !1;
    let n = t.body.id;
    if (null == n) return !1;
    C(n)
  },
  AUTO_MODERATION_MENTION_RAID_DETECTION: function(e) {
    let {
      guildId: t,
      decisionId: n,
      suspiciousMentionActivityUntil: i
    } = e;
    return h[t] = {
      guildId: t,
      decisionId: n,
      suspiciousMentionActivityUntil: i
    }, !0
  },
  AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
    let {
      guildId: t
    } = e;
    return delete h[t], !0
  }
})