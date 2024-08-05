n(653041), n(536091);
var r, i, a, s, o = n(392711),
  l = n.n(o),
  u = n(442837),
  c = n(570140),
  d = n(160404),
  _ = n(592125),
  E = n(70956),
  f = n(709054),
  h = n(977258),
  p = n(819553),
  m = n(290511);
let I = {},
  T = {},
  g = {},
  S = !1;

function A(e, t, n) {
  return e.map(e => function(e, t, n) {
let r = !1,
  i = [];
for (let t = 0; t < e.options.length; t++) {
  let a = e.options[t],
    s = null == n[a.id];
  s && (r = !0), i.push({
    ...a,
    isUnseen: s
  });
}
return {
  ...e,
  options: i,
  hasNewAnswers: r,
  isNew: null == t[e.id]
};
  }(e, t, n));
}

function N(e) {
  var t, n, r, i, a, s, o, l, u;
  let {
guildId: c,
updates: d
  } = e, _ = null !== (a = null !== (i = d.onboardingPromptsSeen) && void 0 !== i ? i : null === (t = I[c]) || void 0 === t ? void 0 : t.onboardingPromptsSeen) && void 0 !== a ? a : {}, E = null !== (o = null !== (s = d.onboardingResponsesSeen) && void 0 !== s ? s : null === (n = I[c]) || void 0 === n ? void 0 : n.onboardingResponsesSeen) && void 0 !== o ? o : {}, f = A(null !== (u = null !== (l = d.prompts) && void 0 !== l ? l : null === (r = I[c]) || void 0 === r ? void 0 : r.prompts) && void 0 !== u ? u : [], _, E);
  I[c] = {
...I[c],
...d,
prompts: f
  };
}

function v(e, t) {
  if (null == T[e])
return;
  let n = {};
  Object.keys(T[e]).forEach(r => {
!t.includes(r) && T[e][r] ? n[r] = !0 : t.includes(r) && !1 === T[e][r] && (n[r] = !1);
  }), T[e] = n;
  let r = t.filter(e => null == n[e] || !0 === n[e]);
  Object.keys(n).forEach(e => {
!0 === n[e] && !t.includes(e) && r.push(e);
  }), I[e] = {
...I[e],
responses: r
  };
}
let O = [],
  R = [],
  C = [];
class y extends(r = u.ZP.Store) {
  initialize() {
this.waitFor(_.Z, p.ZP, d.Z);
  }
  getOnboardingPromptsForOnboarding(e) {
var t, n;
return null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.onboardingPrompts) && void 0 !== n ? n : O;
  }
  getOnboardingPrompts(e) {
var t, n;
return null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.prompts) && void 0 !== n ? n : O;
  }
  getOnboardingResponses(e) {
var t, n, r;
return d.Z.isFullServerPreview(e) ? Array.from(null !== (n = d.Z.getOnboardingResponses(e)) && void 0 !== n ? n : R) : null !== (r = null === (t = I[e]) || void 0 === t ? void 0 : t.responses) && void 0 !== r ? r : R;
  }
  getSelectedOptions(e) {
let t = this.getOnboardingResponses(e);
return this.getOnboardingPrompts(e).map(e => e.options).flat().filter(e => t.includes(e.id));
  }
  getOnboardingResponsesForPrompt(e, t) {
let n = I[e];
if (null == n)
  return R;
let r = n.prompts.find(e => e.id === t);
return null == r ? R : l().intersection(r.options.map(e => e.id), this.getOnboardingResponses(e));
  }
  getEnabledOnboardingPrompts(e) {
var t, n;
let r = I[e];
return d.Z.isFullServerPreview(e) ? null !== (t = null == r ? void 0 : r.prompts) && void 0 !== t ? t : O : null != r && r.enabled ? null !== (n = r.prompts) && void 0 !== n ? n : O : O;
  }
  getDefaultChannelIds(e) {
var t, n;
return null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.defaultChannelIds) && void 0 !== n ? n : C;
  }
  getEnabled(e) {
var t, n;
return d.Z.isFullServerPreview(e) ? null != I[e] : null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n;
  }
  getOnboardingPrompt(e) {
return Object.values(I).map(e => e.prompts).flat().find(t => t.id === e);
  }
  isLoading() {
return S;
  }
  shouldFetchPrompts(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.Z.Millis.HOUR;
if (S)
  return !1;
let n = g[e];
return null == n || Date.now() - n > t;
  }
  getPendingResponseOptions(e) {
return T[e];
  }
  ackIdForGuild(e) {
let t = this.getEnabledOnboardingPrompts(e),
  n = '0';
return t.forEach(e => {
  e.options.forEach(e => {
    f.default.compare(e.id, n) > 0 && (n = e.id);
  }), f.default.compare(e.id, n) > 0 && (n = e.id);
}), n;
  }
  lastFetchedAt(e) {
return g[e];
  }
  isAdvancedMode(e) {
var t;
return null != e && (null === (t = I[e]) || void 0 === t ? void 0 : t.mode) === m.Un.ONBOARDING_ADVANCED;
  }
}
s = 'GuildOnboardingPromptsStore', (a = 'displayName') in(i = y) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new y(c.Z, {
  CONNECTION_OPEN: function() {
S = !1, I = {};
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_START: function() {
S = !0;
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: function(e) {
let {
  guildId: t,
  prompts: n,
  defaultChannelIds: r,
  enabled: i,
  responses: a,
  onboardingPromptsSeen: s,
  onboardingResponsesSeen: o,
  mode: l,
  belowRequirements: u
} = e;
S = !1;
let c = p.ZP.getOnboardingStatus(t) === p.uX.READY,
  d = A(n, s, o);
I[t] = {
  enabled: i,
  mode: l,
  belowRequirements: u,
  prompts: d,
  onboardingPrompts: d.filter(e => e.inOnboarding),
  defaultChannelIds: r.filter(e => (0, h.s)(t, e)),
  responses: c ? [] : a,
  onboardingPromptsSeen: s,
  onboardingResponsesSeen: o
}, !c && v(t, a), g[t] = Date.now();
  },
  GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE: function() {
S = !1;
  },
  GUILD_ONBOARDING_SELECT_OPTION: function(e) {
let {
  guildId: t,
  optionId: n,
  selected: r,
  removedOptionIds: i
} = e;
return !!d.Z.isFullServerPreview(t) || null != I[t] && (null != i && i.length > 0 && l().pullAll(I[t].responses, i), r ? I[t].responses.push(n) : l().pull(I[t].responses, n), null == T[t] && (T[t] = {}), T[t][n] = r, null != i && i.forEach(e => T[t][e] = !1), T[t] = {
  ...T[t]
}, !0);
  },
  GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS: function(e) {
let {
  guildId: t,
  options: n,
  prompts_seen: r,
  options_seen: i
} = e;
v(t, n);
let a = I[t];
if (null == a)
  return !1;
let s = A(a.prompts, r, i);
I[t] = {
  ...a,
  prompts: s,
  onboardingPrompts: s.filter(e => e.inOnboarding),
  onboardingPromptsSeen: r,
  onboardingResponsesSeen: i
};
  },
  GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE: N,
  GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: N,
  GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS: function(e) {
let {
  guildId: t,
  channelIds: n
} = e;
I[t] = {
  ...I[t],
  defaultChannelIds: n
};
  },
  GUILD_SETTINGS_ONBOARDING_SET_MODE: function(e) {
let {
  guildId: t,
  mode: n
} = e, r = I[t];
null != r && (r.mode = n);
  }
});