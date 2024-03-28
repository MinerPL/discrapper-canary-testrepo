"use strict";
n.r(t), n.d(t, {
  AutomodTriggerCategory: function() {
    return o
  },
  AutomodTriggerConfigFlags: function() {
    return r
  },
  checkTriggerTypeForFlag: function() {
    return _
  },
  getAvailableActionTypes: function() {
    return c
  },
  getDefaultTriggerMetadataForTriggerType: function() {
    return N
  },
  triggerConfigs: function() {
    return E
  },
  useAvailableTriggerTypes: function() {
    return f
  },
  validateRuleByTriggerConfigOrThrow: function() {
    return I
  }
}), n("47120"), n("789020"), n("411104"), n("724458");
var r, o, i, u, a = n("470079"),
  l = n("467319"),
  s = n("676317"),
  d = n("273504"),
  T = n("689938");
(i = r || (r = {})).NEW = "new", i.RECOMMENDED = "recommended", i.BETA = "beta", i.ALPHA = "alpha";
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
(u = o || (o = {})).MEMBERS = "members", u.CONTENT = "content";
let A = {
    members: [E[d.AutomodTriggerType.USER_PROFILE]],
    content: [E[d.AutomodTriggerType.SERVER_POLICY], E[d.AutomodTriggerType.MENTION_SPAM], E[d.AutomodTriggerType.ML_SPAM], E[d.AutomodTriggerType.DEFAULT_KEYWORD_LIST], E[d.AutomodTriggerType.KEYWORD]]
  },
  _ = (e, t) => E[e].flags.has(t);

function c(e) {
  return Array.from(E[e].availableActionTypes)
}

function I(e, t) {
  let {
    id: n,
    eventType: r,
    triggerType: o,
    actions: i
  } = e, u = E[o];
  if (t.filter(e => n !== e.id && e.triggerType === o).length > u.perGuildMaxCount) throw Error("You have exceeded the maximum number of rules of type ".concat(o));
  if (i.some(e => !u.availableActionTypes.has(e.type))) throw Error("You have provided an action that is not available for this trigger type");
  if (r !== u.eventType) throw Error("You have provided an event type that is not available for this trigger type")
}

function f(e) {
  let t = (0, s.useIsUserProfileRuleEnabled)(e);
  return a.useMemo(() => Object.keys(A).reduce((e, n) => {
    let r = A[n].filter(e => e.type !== d.AutomodTriggerType.SERVER_POLICY && (e.type !== d.AutomodTriggerType.USER_PROFILE || !!t) && e.perGuildMaxCount > 0).map(e => e.type);
    return e[n] = r, e
  }, {
    members: [],
    content: []
  }), [t])
}

function N(e, t) {
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