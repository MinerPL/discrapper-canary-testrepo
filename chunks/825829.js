"use strict";
n.r(t), n.d(t, {
  IS_BACKWARDS_COMPAT_RAID_TYPE: function() {
    return y
  },
  default: function() {
    return f
  },
  extractAutomodNotificationFields: function() {
    return m
  },
  getActionHeaderText: function() {
    return R
  },
  getQuarantineReasonString: function() {
    return D
  },
  getRaidAlertResolveCTAText: function() {
    return U
  },
  getUserIdOfAutomodAction: function() {
    return C
  },
  isAutomodMessageRecord: function() {
    return I
  },
  isAutomodNotification: function() {
    return c
  },
  useAutomodAlertActions: function() {
    return L
  }
}), n("47120");
var o = n("470079"),
  _ = n("462382"),
  u = n("189722"),
  a = n("721355"),
  E = n("999923"),
  r = n("729917"),
  i = n("932019"),
  A = n("442837"),
  s = n("592125"),
  d = n("496675"),
  T = n("313889"),
  l = n("177862"),
  N = n("981631"),
  O = n("689938");

function I(e) {
  return e.type === N.MessageTypes.AUTO_MODERATION_ACTION
}

function c(e) {
  var t;
  return null === (t = e.embeds) || void 0 === t ? void 0 : t.some(e => {
    let {
      type: t
    } = e;
    return t === N.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION
  })
}

function M(e, t) {
  var n, o, _, u, a;
  let [E] = null !== (n = e.embeds) && void 0 !== n ? n : [];
  if (null != E) {
    if (E.type === N.MessageEmbedTypes.AUTO_MODERATION_MESSAGE) return null == E ? void 0 : null === (_ = E.fields) || void 0 === _ ? void 0 : null === (o = _.find(e => {
      let {
        rawName: n
      } = e;
      return n === t
    })) || void 0 === o ? void 0 : o.rawValue;
    if (E.type === N.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION) return null == E ? void 0 : null === (a = E.fields) || void 0 === a ? void 0 : null === (u = a.find(e => {
      let {
        rawName: n
      } = e;
      return n === t
    })) || void 0 === u ? void 0 : u.rawValue
  }
}

function R(e, t) {
  var n, o;
  let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N.NOOP_NULL,
    i = arguments.length > 3 ? arguments[3] : void 0,
    A = function(e) {
      let t = M(e, u.AutomodMessageEmbedKeys.BLOCK_PROFILE_UPDATE_TYPE);
      if (null != t) return t
    }(e),
    s = function(e) {
      let t = M(e, u.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION);
      if (null != t) return t
    }(e),
    T = function(e) {
      let t = M(e, u.AutomodMessageEmbedKeys.QUARANTINE_EVENT);
      if (null != t) return t
    }(e),
    l = function(e) {
      let t = M(e, u.AutomodMessageEmbedKeys.QUARANTINE_USER);
      if (null != t) return t
    }(e),
    I = M(e, u.AutomodMessageEmbedKeys.APPLICATION_NAME);
  if (null != l) {
    let e = function(e, t, n) {
      switch (t) {
        case r.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_PROFILE_UPDATE:
          return function(e) {
            switch (e) {
              case _.AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_UPDATE:
                return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_UPDATE;
              case _.AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_RESET:
                return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_RESET;
              default:
                return
            }
          }(e);
        case r.AutomodQuarantineUserActionMessageEmbedKeys.QUARANTINE_USER:
          return function(e) {
            switch (e) {
              case E.AutomodQuarantineEventMessageEmbedKeys.MESSAGE_SEND:
                return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_MESSAGE_SEND;
              case E.AutomodQuarantineEventMessageEmbedKeys.GUILD_JOIN:
                return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_ON_GUILD_JOIN;
              case E.AutomodQuarantineEventMessageEmbedKeys.USERNAME_UPDATE:
                return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USERNAME_UPDATE;
              case E.AutomodQuarantineEventMessageEmbedKeys.CLAN_TAG_UPDATE:
                return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_CLAN_TAG_UPDATE;
              default:
                return
            }
          }(n);
        case r.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_GUEST_JOIN:
          return function() {
            return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_GUEST_ON_GUILD_JOIN
          }()
      }
    }(A, s, T);
    if (null != e) return e
  }
  let c = M(e, u.AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID),
    R = d.default.can(N.Permissions.VIEW_CHANNEL, t);
  let D = (n = t, R ? null !== (o = null == n ? void 0 : n.name) && void 0 !== o ? o : O.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER : O.default.Messages.NO_ACCESS),
    m = null != t && R ? a : N.NOOP_NULL,
    S = function(e, t, n) {
      let o = M(e, u.AutomodMessageEmbedKeys.VOICE_CHANNEL_STATUS_OUTCOME);
      return null == o ? null : ("blocked" === o ? O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_VOICE_CHANNEL_STATUS_HOOK : O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_VOICE_CHANNEL_STATUS_HOOK).format({
        channelName: t,
        channelHook: n
      })
    }(e, D, a);
  return null != S ? S : null != I ? null != c ? O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_APP_FLAGGED_HOOK.format({
    applicationName: I,
    channelName: D,
    channelHook: m,
    userHook: i
  }) : O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_APP_BLOCKED_HOOK.format({
    applicationName: I,
    channelName: D,
    channelHook: m,
    userHook: i
  }) : null != c ? O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_HOOK.format({
    channelName: D,
    channelHook: m
  }) : O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_HOOK.format({
    channelName: D,
    channelHook: m
  })
}

function D(e) {
  switch (e) {
    case i.AutomodQuarantineUserMessageEmbedKeys.NICKNAME:
      return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_NICKNAME;
    case i.AutomodQuarantineUserMessageEmbedKeys.USERNAME:
      return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME;
    case i.AutomodQuarantineUserMessageEmbedKeys.GLOBAL_NAME:
      return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_GLOBAL_NAME;
    case i.AutomodQuarantineUserMessageEmbedKeys.CLAN_TAG:
      return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_CLAN_TAG;
    default:
      return O.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME
  }
}

function m(e) {
  var t, n;
  let o = M(e, a.AutomodNotificationEmbedKeys.NOTIFICATION_TYPE),
    _ = M(e, a.AutomodNotificationEmbedKeys.JOIN_ATTEMPTS),
    u = M(e, a.AutomodNotificationEmbedKeys.RAID_DATETIME),
    E = M(e, a.AutomodNotificationEmbedKeys.DMS_SENT),
    r = M(e, a.AutomodNotificationEmbedKeys.RAID_TYPE),
    i = M(e, a.AutomodNotificationEmbedKeys.RESOLVED_REASON),
    A = M(e, a.AutomodNotificationEmbedKeys.DECISION_ID),
    s = M(e, a.AutomodNotificationEmbedKeys.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
  return {
    notificationType: null !== (t = null == (n = o) ? null : n) && void 0 !== t ? t : void 0,
    joinAttempts: null != _ ? parseInt(_) : void 0,
    raidDatetime: null != u ? new Date(u) : void 0,
    dmsSent: null != E ? parseInt(E) : void 0,
    raidType: null != r ? r : void 0,
    resolvedReason: null != i ? i : void 0,
    decisionId: null != A ? A : void 0,
    suspiciousMentionActivityUntil: null != s ? new Date(s) : void 0
  }
}

function S(e) {
  let t = M(e, u.AutomodMessageEmbedKeys.CHANNEL_ID),
    n = M(e, u.AutomodMessageEmbedKeys.ALERT_ACTIONS_EXECUTION),
    o = (0, T.parseAlertActionsExecution)(n);
  return {
    content: function(e) {
      var t, n;
      let [o] = null !== (t = e.embeds) && void 0 !== t ? t : [];
      return null !== (n = null == o ? void 0 : o.rawDescription) && void 0 !== n ? n : ""
    }(e),
    ruleName: M(e, u.AutomodMessageEmbedKeys.RULE_NAME),
    decisionId: M(e, u.AutomodMessageEmbedKeys.DECISION_ID),
    keyword: M(e, u.AutomodMessageEmbedKeys.KEYWORD),
    keywordMatchedContent: M(e, u.AutomodMessageEmbedKeys.KEYWORD_MATCHED_CONTENT),
    flaggedMessageId: M(e, u.AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID),
    timeoutDuration: M(e, u.AutomodMessageEmbedKeys.TIMEOUT_DURATION),
    quarantineType: M(e, u.AutomodMessageEmbedKeys.QUARANTINE_USER),
    quarantineAction: M(e, u.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION),
    decisionReason: M(e, u.AutomodMessageEmbedKeys.DECISION_REASON),
    applicationName: M(e, u.AutomodMessageEmbedKeys.APPLICATION_NAME),
    embedChannel: s.default.getChannel(t),
    embedChannelId: t,
    alertActionsExecution: null != o ? o : void 0
  }
}

function f(e) {
  let t = o.useMemo(() => S(e), [e]),
    n = (0, A.useStateFromStores)([s.default], () => s.default.getChannel(t.embedChannelId), [t.embedChannelId]);
  return {
    ...t,
    embedChannel: n
  }
}

function L(e) {
  if (null == e) return null;
  let {
    alertActionsExecution: t
  } = S(e);
  return null != t ? t : null
}

function U(e) {
  if (null == e) return O.default.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED;
  switch (e) {
    case l.RaidResolutionType.LEGITIMATE_ACTIVITY:
      return O.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_NO_ACTION;
    case l.RaidResolutionType.DM_SPAM:
      return O.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_DM_SPAM;
    case l.RaidResolutionType.JOIN_RAID:
      return O.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_JOIN_RAID;
    default:
      return O.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_OTHER
  }
}

function C(e) {
  return M(e, a.AutomodNotificationEmbedKeys.ACTION_BY_USER_ID)
}
let y = void 0