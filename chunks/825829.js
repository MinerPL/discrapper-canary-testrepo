"use strict";
n.r(t), n.d(t, {
  IS_BACKWARDS_COMPAT_RAID_TYPE: function() {
    return y
  },
  default: function() {
    return D
  },
  extractAutomodNotificationFields: function() {
    return m
  },
  getActionHeaderText: function() {
    return R
  },
  getQuarantineReasonString: function() {
    return S
  },
  getRaidAlertResolveCTAText: function() {
    return U
  },
  getUserIdOfAutomodAction: function() {
    return C
  },
  isAutomodMessageRecord: function() {
    return O
  },
  isAutomodNotification: function() {
    return c
  },
  useAutomodAlertActions: function() {
    return L
  }
}), n("47120");
var o = n("470079"),
  u = n("462382"),
  r = n("189722"),
  _ = n("721355"),
  i = n("999923"),
  a = n("729917"),
  E = n("932019"),
  s = n("442837"),
  A = n("592125"),
  d = n("496675"),
  T = n("313889"),
  l = n("177862"),
  N = n("981631"),
  I = n("689938");

function O(e) {
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
  var n, o, u, r, _;
  let [i] = null !== (n = e.embeds) && void 0 !== n ? n : [];
  if (null != i) {
    if (i.type === N.MessageEmbedTypes.AUTO_MODERATION_MESSAGE) return null == i ? void 0 : null === (u = i.fields) || void 0 === u ? void 0 : null === (o = u.find(e => {
      let {
        rawName: n
      } = e;
      return n === t
    })) || void 0 === o ? void 0 : o.rawValue;
    if (i.type === N.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION) return null == i ? void 0 : null === (_ = i.fields) || void 0 === _ ? void 0 : null === (r = _.find(e => {
      let {
        rawName: n
      } = e;
      return n === t
    })) || void 0 === r ? void 0 : r.rawValue
  }
}

function R(e, t) {
  var n, o;
  let _ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N.NOOP_NULL,
    E = function(e) {
      let t = M(e, r.AutomodMessageEmbedKeys.BLOCK_PROFILE_UPDATE_TYPE);
      if (null != t) return t
    }(e),
    s = function(e) {
      let t = M(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION);
      if (null != t) return t
    }(e),
    A = function(e) {
      let t = M(e, r.AutomodMessageEmbedKeys.QUARANTINE_EVENT);
      if (null != t) return t
    }(e);
  if (null != function(e) {
      let t = M(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER);
      if (null != t) return t
    }(e)) {
    let e = function(e, t, n) {
      switch (t) {
        case a.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_PROFILE_UPDATE:
          return function(e) {
            switch (e) {
              case u.AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_UPDATE:
                return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_UPDATE;
              case u.AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_RESET:
                return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_NICKNAME_RESET;
              default:
                return
            }
          }(e);
        case a.AutomodQuarantineUserActionMessageEmbedKeys.QUARANTINE_USER:
          return function(e) {
            switch (e) {
              case i.AutomodQuarantineEventMessageEmbedKeys.MESSAGE_SEND:
                return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_MESSAGE_SEND;
              case i.AutomodQuarantineEventMessageEmbedKeys.GUILD_JOIN:
                return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USER_ON_GUILD_JOIN;
              case i.AutomodQuarantineEventMessageEmbedKeys.USERNAME_UPDATE:
                return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_QUARANTINE_USERNAME_UPDATE;
              default:
                return
            }
          }(n);
        case a.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_GUEST_JOIN:
          return function() {
            return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_BLOCK_GUEST_ON_GUILD_JOIN
          }()
      }
    }(E, s, A);
    if (null != e) return e
  }
  let T = M(e, r.AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID),
    l = d.default.can(N.Permissions.VIEW_CHANNEL, t);
  let O = (n = t, l ? null !== (o = null == n ? void 0 : n.name) && void 0 !== o ? o : I.default.Messages.UNKNOWN_CHANNEL_PLACEHOLDER : I.default.Messages.NO_ACCESS),
    c = null != t && l ? _ : N.NOOP_NULL,
    R = function(e, t, n) {
      let o = M(e, r.AutomodMessageEmbedKeys.VOICE_CHANNEL_STATUS_OUTCOME);
      return null == o ? null : ("blocked" === o ? I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_VOICE_CHANNEL_STATUS_HOOK : I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_VOICE_CHANNEL_STATUS_HOOK).format({
        channelName: t,
        channelHook: n
      })
    }(e, O, _);
  return null != R ? R : null != T ? I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_FLAGGED_HOOK.format({
    channelName: O,
    channelHook: c
  }) : I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_HEADER_ACTION_BLOCKED_HOOK.format({
    channelName: O,
    channelHook: c
  })
}

function S(e) {
  switch (e) {
    case E.AutomodQuarantineUserMessageEmbedKeys.NICKNAME:
      return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_NICKNAME;
    case E.AutomodQuarantineUserMessageEmbedKeys.USERNAME:
      return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME;
    case E.AutomodQuarantineUserMessageEmbedKeys.GLOBAL_NAME:
      return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_GLOBAL_NAME;
    default:
      return I.default.Messages.GUILD_AUTOMOD_POST_TO_CHANNEL_REASON_USERNAME
  }
}

function m(e) {
  var t, n;
  let o = M(e, _.AutomodNotificationEmbedKeys.NOTIFICATION_TYPE),
    u = M(e, _.AutomodNotificationEmbedKeys.JOIN_ATTEMPTS),
    r = M(e, _.AutomodNotificationEmbedKeys.RAID_DATETIME),
    i = M(e, _.AutomodNotificationEmbedKeys.DMS_SENT),
    a = M(e, _.AutomodNotificationEmbedKeys.RAID_TYPE),
    E = M(e, _.AutomodNotificationEmbedKeys.RESOLVED_REASON),
    s = M(e, _.AutomodNotificationEmbedKeys.DECISION_ID),
    A = M(e, _.AutomodNotificationEmbedKeys.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
  return {
    notificationType: null !== (t = null == (n = o) ? null : n) && void 0 !== t ? t : void 0,
    joinAttempts: null != u ? parseInt(u) : void 0,
    raidDatetime: null != r ? new Date(r) : void 0,
    dmsSent: null != i ? parseInt(i) : void 0,
    raidType: null != a ? a : void 0,
    resolvedReason: null != E ? E : void 0,
    decisionId: null != s ? s : void 0,
    suspiciousMentionActivityUntil: null != A ? new Date(A) : void 0
  }
}

function f(e) {
  let t = M(e, r.AutomodMessageEmbedKeys.CHANNEL_ID),
    n = M(e, r.AutomodMessageEmbedKeys.ALERT_ACTIONS_EXECUTION),
    o = (0, T.parseAlertActionsExecution)(n);
  return {
    content: function(e) {
      var t, n;
      let [o] = null !== (t = e.embeds) && void 0 !== t ? t : [];
      return null !== (n = null == o ? void 0 : o.rawDescription) && void 0 !== n ? n : ""
    }(e),
    ruleName: M(e, r.AutomodMessageEmbedKeys.RULE_NAME),
    decisionId: M(e, r.AutomodMessageEmbedKeys.DECISION_ID),
    keyword: M(e, r.AutomodMessageEmbedKeys.KEYWORD),
    keywordMatchedContent: M(e, r.AutomodMessageEmbedKeys.KEYWORD_MATCHED_CONTENT),
    flaggedMessageId: M(e, r.AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID),
    timeoutDuration: M(e, r.AutomodMessageEmbedKeys.TIMEOUT_DURATION),
    quarantineType: M(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER),
    quarantineAction: M(e, r.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION),
    decisionReason: M(e, r.AutomodMessageEmbedKeys.DECISION_REASON),
    embedChannel: A.default.getChannel(t),
    embedChannelId: t,
    alertActionsExecution: null != o ? o : void 0
  }
}

function D(e) {
  let t = o.useMemo(() => f(e), [e]),
    n = (0, s.useStateFromStores)([A.default], () => A.default.getChannel(t.embedChannelId), [t.embedChannelId]);
  return {
    ...t,
    embedChannel: n
  }
}

function L(e) {
  if (null == e) return null;
  let {
    alertActionsExecution: t
  } = f(e);
  return null != t ? t : null
}

function U(e) {
  if (null == e) return I.default.Messages.GUILD_AUTOMOD_NOTIFICATION_MARK_AS_RESOLVED;
  switch (e) {
    case l.RaidResolutionType.LEGITIMATE_ACTIVITY:
      return I.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_NO_ACTION;
    case l.RaidResolutionType.DM_SPAM:
      return I.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_DM_SPAM;
    case l.RaidResolutionType.JOIN_RAID:
      return I.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_JOIN_RAID;
    default:
      return I.default.Messages.GUILD_ANTIRAID_EMBED_RESOLVE_REASON_OTHER
  }
}

function C(e) {
  return M(e, _.AutomodNotificationEmbedKeys.ACTION_BY_USER_ID)
}
let y = void 0