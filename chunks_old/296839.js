"use strict";
n.r(t), n.d(t, {
  AutomodTriggerConfigFlags: function() {
    return r
  },
  triggerConfigs: function() {
    return E
  },
  AutomodTriggerCategory: function() {
    return o
  },
  checkTriggerTypeForFlag: function() {
    return _
  },
  getAvailableActionTypes: function() {
    return c
  },
  validateRuleByTriggerConfigOrThrow: function() {
    return I
  },
  useAvailableTriggerTypes: function() {
    return f
  },
  getDefaultTriggerMetadataForTriggerType: function() {
    return g
  }
}), n("222007"), n("702976"), n("70102"), n("808653");
var r, o, u, i, a = n("884691"),
  l = n("926809"),
  s = n("348934"),
  d = n("143460"),
  T = n("782340");
(u = r || (r = {})).NEW = "new", u.RECOMMENDED = "recommended", u.BETA = "beta", u.ALPHA = "alpha";
let E = {
  [d.AutomodTriggerType.SPAM_LINK]: {
    getDefaultRuleName: () => T.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME,
    type: d.AutomodTriggerType.SPAM_LINK,
    eventType: d.AutomodEventType.MESSAGE_SEND,
    perGuildMaxCount: 0,
    availableActionTypes: new Set,
    flags: new Set,
    defaultActionTypes: new Set
  },
  [d.AutomodTriggerType.KEYWORD]: {
    getDefaultRuleName: () => T.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME,
    type: d.AutomodTriggerType.KEYWORD,
    eventType: d.AutomodEventType.MESSAGE_SEND,
    perGuildMaxCount: 6,
    availableActionTypes: new Set([d.AutomodActionType.BLOCK_MESSAGE, d.AutomodActionType.FLAG_TO_CHANNEL, d.AutomodActionType.USER_COMMUNICATION_DISABLED]),
    flags: new Set,
    defaultActionTypes: new Set([d.AutomodActionType.BLOCK_MESSAGE])
  },
  [d.AutomodTriggerType.ML_SPAM]: {
    getDefaultRuleName: () => T.default.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME,
    type: d.AutomodTriggerType.ML_SPAM,
    eventType: d.AutomodEventType.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([d.AutomodActionType.BLOCK_MESSAGE, d.AutomodActionType.FLAG_TO_CHANNEL]),
    flags: new Set([]),
    defaultActionTypes: new Set([d.AutomodActionType.BLOCK_MESSAGE])
  },
  [d.AutomodTriggerType.DEFAULT_KEYWORD_LIST]: {
    getDefaultRuleName: () => T.default.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_FILTER_NAME,
    type: d.AutomodTriggerType.DEFAULT_KEYWORD_LIST,
    eventType: d.AutomodEventType.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([d.AutomodActionType.BLOCK_MESSAGE, d.AutomodActionType.FLAG_TO_CHANNEL]),
    flags: new Set([]),
    defaultActionTypes: new Set([d.AutomodActionType.BLOCK_MESSAGE])
  },
  [d.AutomodTriggerType.MENTION_SPAM]: {
    getDefaultRuleName: () => T.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_NAME,
    type: d.AutomodTriggerType.MENTION_SPAM,
    eventType: d.AutomodEventType.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([d.AutomodActionType.BLOCK_MESSAGE, d.AutomodActionType.FLAG_TO_CHANNEL, d.AutomodActionType.USER_COMMUNICATION_DISABLED]),
    flags: new Set([]),
    defaultActionTypes: new Set([d.AutomodActionType.BLOCK_MESSAGE])
  },
  [d.AutomodTriggerType.USER_PROFILE]: {
    getDefaultRuleName: () => T.default.Messages.GUILD_AUTOMOD_USER_PROFILE_FILTER_NAME,
    type: d.AutomodTriggerType.USER_PROFILE,
    eventType: d.AutomodEventType.GUILD_MEMBER_JOIN_OR_UPDATE,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([d.AutomodActionType.QUARANTINE_USER, d.AutomodActionType.FLAG_TO_CHANNEL]),
    flags: new Set(["beta"]),
    defaultActionTypes: new Set([d.AutomodActionType.QUARANTINE_USER])
  },
  [d.AutomodTriggerType.SERVER_POLICY]: {
    getDefaultRuleName: () => T.default.Messages.GUILD_AUTOMOD_SERVER_POLICY_FILTER_NAME,
    type: d.AutomodTriggerType.SERVER_POLICY,
    eventType: d.AutomodEventType.MESSAGE_SEND,
    perGuildMaxCount: 1,
    availableActionTypes: new Set([d.AutomodActionType.FLAG_TO_CHANNEL]),
    flags: new Set(["alpha"]),
    defaultActionTypes: new Set
  }
};
(i = o || (o = {})).MEMBERS = "members", i.CONTENT = "content";
let A = {
    members: [E[d.AutomodTriggerType.USER_PROFILE]],
    content: [E[d.AutomodTriggerType.SERVER_POLICY], E[d.AutomodTriggerType.MENTION_SPAM], E[d.AutomodTriggerType.ML_SPAM], E[d.AutomodTriggerType.DEFAULT_KEYWORD_LIST], E[d.AutomodTriggerType.KEYWORD]]
  },
  _ = (e, t) => {
    let n = E[e].flags;
    return n.has(t)
  };

function c(e) {
  return Array.from(E[e].availableActionTypes)
}

function I(e, t) {
  let {
    id: n,
    eventType: r,
    triggerType: o,
    actions: u
  } = e, i = E[o], a = t.filter(e => n !== e.id && e.triggerType === o).length;
  if (a > i.perGuildMaxCount) throw Error("You have exceeded the maximum number of rules of type ".concat(o));
  if (u.some(e => !i.availableActionTypes.has(e.type))) throw Error("You have provided an action that is not available for this trigger type");
  if (r !== i.eventType) throw Error("You have provided an event type that is not available for this trigger type")
}

function f(e) {
  let t = (0, s.useIsUserProfileRuleEnabled)(e);
  return a.useMemo(() => Object.keys(A).reduce((e, n) => {
    let r = A[n],
      o = r.filter(e => {
        if (e.type === d.AutomodTriggerType.SERVER_POLICY || e.type === d.AutomodTriggerType.USER_PROFILE && !t) return !1;
        let n = e.perGuildMaxCount > 0;
        return n
      }).map(e => e.type);
    return e[n] = o, e
  }, {
    members: [],
    content: []
  }), [t])
}

function g(e, t) {
  let n = (0, l.isInMentionRaidExperiment)(t);
  switch (e) {
    case d.AutomodTriggerType.DEFAULT_KEYWORD_LIST:
      return {
        allowList: [], presets: []
      };
    case d.AutomodTriggerType.USER_PROFILE:
    case d.AutomodTriggerType.KEYWORD:
      return {
        keywordFilter: [], regexPatterns: [], allowList: []
      };
    case d.AutomodTriggerType.MENTION_SPAM:
      return {
        mentionTotalLimit: d.MENTION_SPAM_LIMIT_DEFAULT, mentionRaidProtectionEnabled: n
      };
    case d.AutomodTriggerType.ML_SPAM:
    case d.AutomodTriggerType.SERVER_POLICY:
    default:
      return
  }
}