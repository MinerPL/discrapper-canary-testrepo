n.d(t, {
  I6: function() {
return I;
  },
  V9: function() {
return A;
  },
  Z6: function() {
return S;
  },
  jp: function() {
return c;
  },
  r5: function() {
return O;
  },
  vT: function() {
return r;
  },
  vh: function() {
return a;
  },
  yU: function() {
return N;
  }
}), n(47120), n(789020), n(411104), n(724458);
var r, a, i, E, _ = n(470079),
  u = n(467319),
  l = n(676317),
  s = n(273504),
  o = n(689938);
(i = r || (r = {})).NEW = 'new', i.RECOMMENDED = 'recommended', i.BETA = 'beta', i.ALPHA = 'alpha';
let I = {
  [s.fX.SPAM_LINK]: {
getDefaultRuleName: () => o.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME,
type: s.fX.SPAM_LINK,
eventType: s.q4.MESSAGE_SEND,
perGuildMaxCount: 0,
availableActionTypes: new Set(),
flags: new Set(),
defaultActionTypes: new Set()
  },
  [s.fX.KEYWORD]: {
getDefaultRuleName: () => o.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME,
type: s.fX.KEYWORD,
eventType: s.q4.MESSAGE_SEND,
perGuildMaxCount: 6,
availableActionTypes: new Set([
  s.jj.BLOCK_MESSAGE,
  s.jj.FLAG_TO_CHANNEL,
  s.jj.USER_COMMUNICATION_DISABLED
]),
flags: new Set(),
defaultActionTypes: new Set([s.jj.BLOCK_MESSAGE])
  },
  [s.fX.ML_SPAM]: {
getDefaultRuleName: () => o.Z.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME,
type: s.fX.ML_SPAM,
eventType: s.q4.MESSAGE_SEND,
perGuildMaxCount: 1,
availableActionTypes: new Set([
  s.jj.BLOCK_MESSAGE,
  s.jj.FLAG_TO_CHANNEL
]),
flags: new Set([]),
defaultActionTypes: new Set([s.jj.BLOCK_MESSAGE])
  },
  [s.fX.DEFAULT_KEYWORD_LIST]: {
getDefaultRuleName: () => o.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_FILTER_NAME,
type: s.fX.DEFAULT_KEYWORD_LIST,
eventType: s.q4.MESSAGE_SEND,
perGuildMaxCount: 1,
availableActionTypes: new Set([
  s.jj.BLOCK_MESSAGE,
  s.jj.FLAG_TO_CHANNEL
]),
flags: new Set([]),
defaultActionTypes: new Set([s.jj.BLOCK_MESSAGE])
  },
  [s.fX.MENTION_SPAM]: {
getDefaultRuleName: () => o.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_NAME,
type: s.fX.MENTION_SPAM,
eventType: s.q4.MESSAGE_SEND,
perGuildMaxCount: 1,
availableActionTypes: new Set([
  s.jj.BLOCK_MESSAGE,
  s.jj.FLAG_TO_CHANNEL,
  s.jj.USER_COMMUNICATION_DISABLED
]),
flags: new Set([]),
defaultActionTypes: new Set([s.jj.BLOCK_MESSAGE])
  },
  [s.fX.USER_PROFILE]: {
getDefaultRuleName: () => o.Z.Messages.GUILD_AUTOMOD_USER_PROFILE_FILTER_NAME,
type: s.fX.USER_PROFILE,
eventType: s.q4.GUILD_MEMBER_JOIN_OR_UPDATE,
perGuildMaxCount: 1,
availableActionTypes: new Set([
  s.jj.QUARANTINE_USER,
  s.jj.FLAG_TO_CHANNEL
]),
flags: new Set([]),
defaultActionTypes: new Set([s.jj.QUARANTINE_USER])
  },
  [s.fX.SERVER_POLICY]: {
getDefaultRuleName: () => o.Z.Messages.GUILD_AUTOMOD_SERVER_POLICY_FILTER_NAME,
type: s.fX.SERVER_POLICY,
eventType: s.q4.MESSAGE_SEND,
perGuildMaxCount: 1,
availableActionTypes: new Set([s.jj.FLAG_TO_CHANNEL]),
flags: new Set(['alpha']),
defaultActionTypes: new Set()
  }
};
(E = a || (a = {})).MEMBERS = 'members', E.CONTENT = 'content';
let T = {
members: [I[s.fX.USER_PROFILE]],
content: [
  I[s.fX.SERVER_POLICY],
  I[s.fX.MENTION_SPAM],
  I[s.fX.ML_SPAM],
  I[s.fX.DEFAULT_KEYWORD_LIST],
  I[s.fX.KEYWORD]
]
  },
  O = (e, t) => I[e].flags.has(t);

function A(e) {
  return Array.from(I[e].availableActionTypes);
}

function N(e, t) {
  let {
id: n,
eventType: r,
triggerType: a,
actions: i
  } = e, E = I[a];
  if (t.filter(e => n !== e.id && e.triggerType === a).length > E.perGuildMaxCount)
throw Error('You have exceeded the maximum number of rules of type '.concat(a));
  if (i.some(e => !E.availableActionTypes.has(e.type)))
throw Error('You have provided an action that is not available for this trigger type');
  if (r !== E.eventType)
throw Error('You have provided an event type that is not available for this trigger type');
}

function S(e) {
  let t = (0, l.oA)(e);
  return _.useMemo(() => Object.keys(T).reduce((e, n) => {
let r = T[n].filter(e => e.type !== s.fX.SERVER_POLICY && (e.type !== s.fX.USER_PROFILE || !!t) && e.perGuildMaxCount > 0).map(e => e.type);
return e[n] = r, e;
  }, {
members: [],
content: []
  }), [t]);
}

function c(e, t) {
  let n = (0, u.H)(t);
  switch (e) {
case s.fX.DEFAULT_KEYWORD_LIST:
  return {
    allowList: [],
      presets: []
  };
case s.fX.USER_PROFILE:
case s.fX.KEYWORD:
  return {
    keywordFilter: [],
      regexPatterns: [],
      allowList: []
  };
case s.fX.MENTION_SPAM:
  return {
    mentionTotalLimit: s.Ic,
      mentionRaidProtectionEnabled: n
  };
case s.fX.ML_SPAM:
case s.fX.SERVER_POLICY:
default:
  return;
  }
}