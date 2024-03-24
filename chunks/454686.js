"use strict";
n.r(t), n.d(t, {
  isRuleKeywordFilter: function() {
    return E
  },
  isRuleMLSpamFilter: function() {
    return A
  },
  isRuleDefaultKeywordListFilter: function() {
    return _
  },
  isRuleMentionSpamFilter: function() {
    return c
  },
  isRuleUserProfileFilter: function() {
    return I
  },
  createDefaultRule: function() {
    return f
  },
  validateKeywordsOrThrow: function() {
    return g
  },
  validateRuleBeforeSaveOrThrow: function() {
    return O
  },
  isBackendPersistedRule: function() {
    return N
  },
  eventTypeToName: function() {
    return S
  },
  actionTypeToName: function() {
    return R
  },
  triggerTypeToName: function() {
    return p
  }
}), n("222007"), n("70102");
var r = n("389153"),
  o = n("271938"),
  u = n("369035"),
  i = n("600798"),
  a = n("353575"),
  l = n("296839"),
  s = n("143460"),
  d = n("782340");
let T = (e, t) => "".concat(e, "-").concat(t, "-new-rule"),
  E = e => (null == e ? void 0 : e.triggerType) === s.AutomodTriggerType.KEYWORD,
  A = e => (null == e ? void 0 : e.triggerType) === s.AutomodTriggerType.ML_SPAM,
  _ = e => (null == e ? void 0 : e.triggerType) === s.AutomodTriggerType.DEFAULT_KEYWORD_LIST,
  c = e => (null == e ? void 0 : e.triggerType) === s.AutomodTriggerType.MENTION_SPAM,
  I = e => (null == e ? void 0 : e.triggerType) === s.AutomodTriggerType.USER_PROFILE;

function f(e, t) {
  let n = l.triggerConfigs[t],
    r = (0, l.getDefaultTriggerMetadataForTriggerType)(t, e),
    i = {
      id: T(e, t),
      name: n.getDefaultRuleName(),
      guildId: e,
      eventType: n.eventType,
      triggerType: t,
      triggerMetadata: r,
      enabled: !0,
      creatorId: o.default.getId(),
      actions: (0, u.getRuleDefaultActionsFromConfig)(n),
      position: 0,
      exemptChannels: new Set,
      exemptRoles: new Set
    };
  if (N(i)) throw Error(d.default.Messages.GUILD_AUTOMOD_NEW_RULE_ERROR);
  let s = (0, a.getRuleCountByTriggerType)(e, t);
  return s > 0 && (i.name += " ".concat(s + 1)), i
}

function g(e, t) {
  if (e.length > t) throw Error(d.default.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_KEYWORDS.format({
    limit: t
  }));
  e.forEach(e => {
    if (e.length > s.MAX_CHARACTERS_PER_KEYWORD || e.length < s.MIN_CHARACTERS_PER_KEYWORD) throw new i.InvalidKeywordError(d.default.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_INVALID_KEYWORD_LENGTH.format({
      keyword: e,
      max: s.MAX_CHARACTERS_PER_KEYWORD,
      min: s.MIN_CHARACTERS_PER_KEYWORD
    }))
  })
}

function O(e) {
  if (E(e)) {
    var t, n;
    let r = null !== (t = e.triggerMetadata.keywordFilter) && void 0 !== t ? t : [],
      o = null !== (n = e.triggerMetadata.regexPatterns) && void 0 !== n ? n : [];
    if (0 === r.length && 0 === o.length) throw Error(d.default.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_NO_KEYWORDS_OR_REGEX);
    g(r, s.MAX_KEYWORDS_PER_KEYWORD_FILTER), ! function(e) {
      if (e.length > s.MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER) throw Error(d.default.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_REGEX.format({
        limit: s.MAX_REGEX_PATTERNS_PER_KEYWORD_FILTER
      }));
      e.forEach(e => {
        if (e.length > s.MAX_REGEX_PATTERN_LENGTH || e.length < s.MIN_REGEX_PATTERN_LENGTH) throw new i.InvalidRegexPatternError(d.default.Messages.GUILD_AUTOMOD_REGEX_ERROR_INVALID_REGEX_LENGTH.format({
          regex: e,
          max: s.MAX_REGEX_PATTERN_LENGTH,
          min: s.MIN_REGEX_PATTERN_LENGTH
        }))
      })
    }(o)
  }
  if (0 === e.actions.length) throw Error(d.default.Messages.GUILD_AUTOMOD_ERROR_NO_ACTIONS)
}

function N(e) {
  var t;
  return (0, r.isSnowflake)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : "INVALID_SNOWFLAKE")
}

function S(e) {
  switch (e) {
    case s.AutomodEventType.MESSAGE_SEND:
      return d.default.Messages.GUILD_AUTOMOD_EVENT_TYPE_MESSAGE_SEND;
    case s.AutomodEventType.GUILD_MEMBER_JOIN_OR_UPDATE:
      return d.default.Messages.GUILD_AUTOMOD_EVENT_TYPE_GUILD_MEMBER_JOIN_OR_UPDATE;
    default:
      return d.default.Messages.GUILD_AUTOMOD_UNKNOWN
  }
}

function R(e) {
  switch (e) {
    case s.AutomodActionType.BLOCK_MESSAGE:
      return d.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
    case s.AutomodActionType.FLAG_TO_CHANNEL:
      return d.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
    case s.AutomodActionType.USER_COMMUNICATION_DISABLED:
      return d.default.Messages.GUILD_AUTOMOD_ACTIONS_USER_COMMUNICATION_DISABLED;
    case s.AutomodActionType.QUARANTINE_USER:
      return d.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER;
    default:
      return d.default.Messages.GUILD_AUTOMOD_UNKNOWN
  }
}

function p(e) {
  switch (e) {
    case s.AutomodTriggerType.KEYWORD:
      return d.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME;
    case s.AutomodTriggerType.ML_SPAM:
      return d.default.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME;
    case s.AutomodTriggerType.DEFAULT_KEYWORD_LIST:
      return d.default.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_FILTER_NAME;
    case s.AutomodTriggerType.MENTION_SPAM:
      return d.default.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_NAME;
    case s.AutomodTriggerType.USER_PROFILE:
      return d.default.Messages.GUILD_AUTOMOD_USER_PROFILE_FILTER_NAME;
    default:
      return d.default.Messages.GUILD_AUTOMOD_UNKNOWN
  }
}